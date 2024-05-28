import Link from 'next/link';

import Search from '@/app/_components/Search';

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
          <Link href='/blog' className='text-sm transition hover:text-cyan-400'>
            Blog
          </Link>
          <Link href='/cart' className='transition hover:text-cyan-400'>
            장바구니
          </Link>
          <Search />
        </nav>
      </div>
    </header>
  );
}
