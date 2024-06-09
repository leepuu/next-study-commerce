'use client';

import { useEffect } from 'react';

import CartItem from '@/app/_components/CartItem';
import useCartStore from '@/app/_store/store';

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems)

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div className='max-w-[1000px] m-auto'>
      <h2 className='text-4xl font-semibold text-slate-600'>장바구니</h2>
      <div className="flex flex-col gap-[20px] mt-[50px]">
      {cartItems.map((item: any, index:number) => {
        return (
          <CartItem
            size={item.size}
            id={item.id}
            brand={item.brand}
            key={index}
            name={item.name}
            price={item.price}
            count={item.count}
          />
        );
      })}
      </div>
    </div>
  );
}
