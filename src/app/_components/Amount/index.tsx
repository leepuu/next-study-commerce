'use client';

import { useState } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

interface AmountProps {
  value: number;
  onAmountChange: (newAmount: number) => void;
}

export default function Amount({ value, onAmountChange }: AmountProps) {
  const [amount, setAmount] = useState(value);

  const increaseAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      onAmountChange(newAmount);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(event.target.value);
    if (newAmount >= 1) {
      setAmount(newAmount);
      onAmountChange(newAmount);
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
