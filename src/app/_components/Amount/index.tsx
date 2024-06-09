'use client';

import useCartStore from '@/app/_store/store';
import { useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

interface AmountProps {
  value: number;
  id?: string;
  name?: string;
  isCart?: boolean;
  onAmountChange?: (newAmount: number) => void;
}

export default function Amount({ value, id, isCart, onAmountChange }: AmountProps) {
  const updateCartItem = useCartStore((state) => state.updateCartItem)
  const [amount, setAmount] = useState(value);

  const updateAmount = (newAmount: number) => {
    setAmount(newAmount);
    if (isCart && id) {
      updateCartItem(id, newAmount);
    }
    if (onAmountChange) {
      onAmountChange(newAmount);
    }
  };

  const increaseAmount = () => {
    updateAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      updateAmount(amount - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(event.target.value);
    if (newAmount >= 1) {
      updateAmount(newAmount);
    }
  };
  return (
    <div className='inline-flex h-[30px] items-center border-[1px] border-slate-200'>
      <button
        type='button'
        className='flex h-full w-[30px] items-center justify-center'
        onClick={decreaseAmount}
      >
        <IoMdRemove />
      </button>
      <input
        type='number'
        className='h-full w-[50px] appearance-none border-x-[1px] border-slate-200 text-center'
        value={amount}
        onChange={handleInputChange}
      />
      <button
        type='button'
        className='flex h-full w-[30px] items-center justify-center'
        onClick={increaseAmount}
      >
        <IoMdAdd />
      </button>
    </div>
  );
}
