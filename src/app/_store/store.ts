import { create } from 'zustand';

import { addCartProductPageAPI, deleteCartProductPageAPI, getCartProductAPI, updateCartProductPageAPI } from '../_api/product';
import { ProductItem } from '../_type/ProductItem';

interface cartData {
  cartItems: ProductItem[];
  fetchCartItems: () => Promise<void>;
  updateCartItem: (id: string,  count:number) => Promise<void>;
  addCartItem: (name: string, count: number, price: number, brand: string, size: number) => Promise<void>;
  deleteCartItem: (id: string, name: string) => Promise<void>;
}

const useCartStore = create<cartData>((set) => ({
  cartItems: [],
  fetchCartItems: async () => {
    const cartData = await getCartProductAPI();
    const formattedItems = cartData.map((item: any) => ({
      id: item.id,
      name: item.properties.name.title[0].plain_text,
      price: item.properties.price.number,
      count: item.properties.count.number,
      brand: item.properties.brand.select.name,
      size: item.properties.size.number,
    })) as ProductItem[];
    set({ cartItems: formattedItems });
  },
  updateCartItem: async (id: string, count: number) => {
    await updateCartProductPageAPI(id, count);
    set((state) => {
      const newCartItems = state.cartItems.map(item =>
        item.id === id ? { ...item, count } : item
      )
      return { cartItems: newCartItems };
    });
  },
  addCartItem: async (name:string, count:number, price: number, brand: string, size: number) => {

    const newItem:any = await addCartProductPageAPI({ name, price, count, brand , size});
    set((state) => {
      const newCartItems = [...state.cartItems, {
        name: newItem.properties.name.title[0].plain_text,
        price: newItem.properties.price.number,
        count: newItem.properties.count.number,
        brand: newItem.properties.brand.select.name,
        size: newItem.properties.size.number,
      }]
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
