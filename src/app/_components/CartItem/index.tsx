'use client';
interface CartItemProps {
  name: string;
  price: number;
  count: number;
}

export default function CartItem({ name, price, count }: CartItemProps) {
  // const deleteCartItem = useCartStore((state) => state.deleteCartItem)
  return (
    <div className='flex'>
      <div className=''>
        <span>{name}</span>
      </div>
      <div>
        <span>{price}</span>/
        <span className="font-bold">{count}</span>
      </div>
      {/* <button type="button" >
        삭제
      </button> */}
    </div>
  );
}
