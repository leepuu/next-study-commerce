'use client';

import useCartStore from "@/app/_store/store";
import { ProductItem } from "@/app/_type/ProductItem";
import { ReactComponent as IconClose } from '@/app/_assets/icons/icon_close.svg'
import Amount from "../Amount";


export default function CartItem({ name, price, count, id, brand, size }: ProductItem) {
  const deleteCartItem = useCartStore((state) => state.deleteCartItem)
  return (
    <div className='flex relative'>
      <div className='w-[100px] h-[100px] rounded-lg overflow-hidden bg-[#F6F6F6] mr-[20px]'>
        
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col flex-1'>
        <span className="font-semiBold text-xs uppercase text-black ">{brand}</span>
        <strong className="text-lg mt-1.5 block break-words font-bold leading-5 text-black">{name}</strong>
        </div>
        <span className="flex items-center text-sm uppercase text-[#ACACAC] ">Size: {size}ml</span>
      </div>
      <div className="flex flex-col justify-center pr-[40px] items-center">
        <span className="text-sm"><em className="text-2xl font-bold not-italic">{price.toLocaleString()}</em>원</span>
        <span className="mt-[10px]">
          <Amount value={count} id={id} name={name} isCart />
        </span>
      </div>
      <button type="button" className="absolute right-0 top-0" onClick={() => {deleteCartItem(id!, name)}} >
        <IconClose />
        <span className="blind">삭제</span>
      </button>
    </div>
  );
}
