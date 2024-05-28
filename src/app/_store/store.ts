import { create } from 'zustand';

import { addCartProductPageAPI, deleteCartProductPageAPI, getCartProductAPI, updateCartProductPageAPI } from '../_api/product';
import { ProductItem } from '../_type/ProductItem';

interface cartData {
  cartItems: ProductItem[];
  fetchCartItems: () => Promise<void>;
  setCartItems: (items: ProductItem[]) => void;
  updateCartItem: (id: string,name:string, count:number) => Promise<void>;
  addCartItem: (name: string, count: number, price: number) => Promise<void>;
  deleteCartItem: (id: string, name: string) => Promise<void>;
}

const useCartStore = create<cartData>((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  fetchCartItems: async () => {
    const cartData = await getCartProductAPI();
    console.log('Fetched cartItems:', cartData); 
    const formattedItems = cartData.map((item: any) => ({
      name: item.properties.name.title[0].plain_text,
      price: item.properties.price.number,
      count: item.properties.count.number,
    })) as ProductItem[];
    set({ cartItems: formattedItems });
  },
  updateCartItem: async (id: string,name:string, count: number) => {
    await updateCartProductPageAPI(id, count);
    set((state) => {
      const newCartItems = state.cartItems.map(item =>
        item.name === name ? { ...item, count } : item
      )
      console.log('Update cartItems:', newCartItems); 
      return { cartItems: newCartItems };
    });
  },
  addCartItem: async (name:string, count:number, price: number) => {
    const newItem:any = await addCartProductPageAPI({ name, price, count });
    set((state) => {
      const newCartItems = [...state.cartItems, {
        name: newItem.properties.name.title[0].plain_text,
        price: newItem.properties.price.number,
        count: newItem.properties.count.number,
      }]
      console.log('add cartItems:', newCartItems); 
      return{cartItems:newCartItems }
    })
  },
  deleteCartItem: async(id: string, name: string) => {
    await deleteCartProductPageAPI(id);
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.name !== name),
    }))
  }
}));


export default useCartStore;
