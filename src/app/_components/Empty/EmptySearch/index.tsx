interface EmptySearchProps {
  value: string;
}

export default function EmptySearch({ value }: EmptySearchProps) {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <span className='mb-10 block text-5xl  '>😥</span>
      <p className='text-3xl'>
        &quot;<em className='font-bold not-italic'>{value}</em>&quot; 결과가
        없습니다.
      </p>
    </div>
  );
}
