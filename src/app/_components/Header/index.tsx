import Link from 'next/link';

import Search from '@/app/_components/Search';
import { ReactComponent as IconCart } from '@/app/_assets/icons/icon_cart.svg'

export default function Header() {
  return (
    <header className='sticky top-0 z-10 border-b border-slate-200 bg-white/80 px-10 backdrop-blur-sm'>
      <div className='m-auto flex h-16 max-w-[1220px]  items-center justify-between'>
        <h1 className='flex-auto'>
          <Link
            href='/'
            className='block text-xl font-bold tracking-wider text-slate-700'
          >
            PIPTYQUE
          </Link>
        </h1>
        <nav className='flex gap-6'>
          <Link href='/cart' className='text-slate-500 transition hover:text-indigo-500'>
            <IconCart />
            <span className="blind">장바구니</span>
          </Link>
          <Search />
        </nav>
      </div>
    </header>
  );
}
