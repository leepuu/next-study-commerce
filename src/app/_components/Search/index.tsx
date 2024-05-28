'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출을 방지합니다.
    setIsOpen(false);
    setSearchValue('');
    router.push(`/search?query=${searchValue}`);
  };

  return (
    <>
      <button
        type='button'
        className=''
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        검색
      </button>
      <div
        className={`absolute left-0 top-[65px] flex h-[200px] w-full items-center justify-center gap-[10px] bg-white ${isOpen ? 'block' : 'hidden'}`}
      >
        <form onSubmit={handleSearchSubmit}>
          <label htmlFor='search' className='blind'>
            검색
          </label>
          <input
            type='search'
            id='search'
            value={searchValue}
            placeholder='검색어를 입력해주세요.'
            onChange={(e) => setSearchValue(e.target.value)}
            className='search-cancel:appearance-none h-[50px] w-[400px] border-b-[1px] focus:border-slate-500 focus:outline-0'
          />
          <button className=''>검색</button>
        </form>
      </div>
    </>
  );
}
