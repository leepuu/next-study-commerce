'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

import Button from '@/app/_components/Button';
import useCartStore from '@/app/_store/store';

import { getCartProductAPI } from '@/app/_api/product';

interface ProductInfoProps {
  id: string;
  thumbSrc: string;
  thumbAlt: string;
  brand: string;
  name: string;
  price: number;
  size: number;
}

export default function ProductInfo({
  thumbSrc,
  thumbAlt,
  brand,
  name,
  price,
  size
}: ProductInfoProps) {
  const updateCartItem = useCartStore((state) => state.updateCartItem)
  const addCartItem = useCartStore((state) => state.addCartItem)
  const fetchCartItems = useCartStore((state) => state.fetchCartItems)
  const router = useRouter();
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);


  const handleCartBtn = async () => {
      const cartProduct = await getCartProductAPI();
      let cartNameFound = false;
      if (cartProduct.length > 0) {
        cartProduct.map((product: any) => {
          const id = product.id;
          const productInfo = product.properties;
          const cartName = productInfo.name.title[0].plain_text;
          const cartCount = productInfo.count.number;
          if (cartName === name) {
            updateCartItem(id,cartName, cartCount + 1);
            cartNameFound = true;
          }
        })
        if (!cartNameFound) {
          await addCartItem(name, 1, price);
        }
      } else {
        await addCartItem(name, 1, price);
      }
      router.push(`/cart`);
    };
  
  return (
    <div className='flex gap-[25px]'>
      <div className='h-[400px] w-[400px] flex-none overflow-hidden rounded-lg bg-[#F6F6F6]'>
        <Image
          width={400}
          height={400}
          src={thumbSrc}
          alt={thumbAlt}
          className='h-full w-full object-cover mix-blend-darken'
        />
      </div>
      <div className='flex h-full min-h-[400px] w-full  flex-auto flex-col items-start'>
        <div className='flex-1'>
          <Link href='/' className='font-bold tracking-wide text-slate-950'>
            {brand}
          </Link>
          <h2 className='mt-3 text-2xl font-medium text-slate-700'>{name}</h2>
          <strong className='mt-[10px] block text-3xl'>
            {price.toLocaleString('ko-KR')}원
          </strong>
        </div>
        <dl>
          <dt className=' text-sm font-semibold'>적립예정포인트</dt>
          <dd className='mt-0.5 text-sm'>
            {(price * 0.01).toLocaleString('ko-KR')}P
          </dd>
          <dt className='mt-3  text-sm font-semibold'>사이즈</dt>
          <dd className='mt-0.5 text-sm'>{size}ml</dd>
          <dt className='mt-3  text-sm font-semibold'>배송 정보</dt>
          <dd className='mt-0.5 text-sm'>
            100,000원 미만 결제 시 배송비 3,000원
          </dd>
        </dl>
        <div className='mt-[20px] flex w-full gap-[20px]'>
          <Button text='장바구니 담기' type='outline' onClick={handleCartBtn} />
          <Button text='바로 구매하기' />
        </div>
      </div>
    </div>
  );
}
