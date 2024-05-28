export default function Blog() {
  return (
    <>
      <h2 className='text-4xl font-semibold text-slate-600'>Blog</h2>
      <ul className='pt-8 text-sm text-slate-600'>
        <li className='flex items-center gap-1 before:mr-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-slate-600 before:content-[""]'>
          Blog 글 1
        </li>
        <li className='flex items-center gap-1 before:mr-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-slate-600 before:content-[""]'>
          Blog 글 2
        </li>
        <li className='flex items-center gap-1 before:mr-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-slate-600 before:content-[""]'>
          Blog 글 3
        </li>
        <li className='flex items-center gap-1 before:mr-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-slate-600 before:content-[""]'>
          Blog 글 4
        </li>
      </ul>
    </>
  );
}
