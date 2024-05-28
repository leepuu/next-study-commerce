// eslint-disable-next-line @next/next/no-img-element
import Image from 'next/image';
import Link from 'next/link';

interface ItemProps {
  name: string;
  price: string;
  image: string;
  id: string;
  size: string;
  category: string;
  brand: string;
}

export default function ProductItem({
  name,
  price,
  image,
  id,
  size,
  category,
  brand
}: ItemProps) {
  const liStyle =
    'flex items-center text-xs uppercase text-[#ACACAC] ml-1 before:mr-1 before:block before:h-[3px] before:w-[3px] before:rounded-full before:bg-[#ACACAC] before:content-[""] first:before:hidden first:ml-0';

  return (
    <Link
      href={`/product/${id}`}
      className='w-max-72 block overflow-hidden bg-white text-base text-white'
    >
      <div className='relative h-[350px] w-full overflow-hidden rounded-xl bg-[#F6F6F6] p-7'>
        <Image
          width={200}
          height={200}
          src={image}
          alt={name}
          className='h-full w-full object-cover mix-blend-darken'
        />
      </div>
      <div className='px-2 py-4'>
        <span className='font-semiBold text-xs uppercase text-black '>
          {brand}
        </span>

        <strong className='text-l mt-1 block break-words font-bold leading-5 text-black'>
          {name}
        </strong>
        <ul className='mt-2 flex'>
          <li className={liStyle}>{category}</li>
          <li className={liStyle}>{size}ml</li>
        </ul>
        <span className='mt-2 block text-lg font-bold text-gray-950'>
          {price.toLocaleString()}원
        </span>
      </div>
    </Link>
  );
}
