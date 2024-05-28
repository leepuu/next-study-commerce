'use client';

import { useEffect } from 'react';

import CartItem from '@/app/_components/CartItem';
import useCartStore from '@/app/_store/store';

export default function Cart() {
  // const products = await getCartProductAPI();
  const cartItems = useCartStore((state) => state.cartItems);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems)

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <>
      <h2 className='text-4xl font-semibold text-slate-600'>장바구니</h2>
      <div>
      {cartItems.map((item: any, index:number) => {
        return (
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            count={item.count}
          />
        );
      })}
      </div>
    </>
  );
}
