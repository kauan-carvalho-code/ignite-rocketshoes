import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
  const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
     const updatedCart = [...cart];
     const product = await api.get(`products/${productId}`)
     .then(response => response.data);
     
     const productExists = updatedCart.find(product => product.id === productId);

     const currentAmount = productExists ? productExists.amount : 0;

     const {amount: stockAmount} = await api.get(`stock/${productId}`)
     .then(response => response.data);

     if(currentAmount + 1 > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
     }

     if(productExists) {
      productExists.amount += 1;
     } else {
       const newProduct = {
         ...product,
         amount: 1
       }
       updatedCart.push(newProduct);
     }

     setCart(updatedCart);
     localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      /* updatedCart.forEach((product, index) => {
        if (product.id === productId ) {
          updatedCart.splice(index, 1)
        } else {
          throw Error()
        }
      }) */
      /* Jeito que eu fiz, funcionou mas não tava passando nos testes kkk */

      if(productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
      } else {
        throw Error();
      }

      setCart(updatedCart);
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount <= 0) return;

      const {amount: stockAmount} = await api.get(`stock/${productId}`)
     .then(response => response.data);

     if(amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
     }

      const updatedCart = cart.map(product => {
        if(product.id === productId) {
          const newProduct = {
            ...product,
            amount,
          }
          return newProduct;
        }
        return product;
      })

       setCart(updatedCart);
       localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
