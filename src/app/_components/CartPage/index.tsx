'use client';

import useStore from '@/app/_store/store';

import CartItem from '../CartItem';

export default function CartPage(cartItems: any) {
  useStore.setState({
    cartItems
  });

  return (
    <div>
      {cartItems.cartItems.map((item: any, index:number) => {
        const { name, price, count } = item.properties;
        return (
          <CartItem
            key={index}
            name={name.title[0].plain_text}
            price={price.number}
            count={count.number}
          />
        );
      })}
    </div>
  );
}
