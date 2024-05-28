interface ButtonProps {
  text: string;
  type?: 'outline';
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      type='button'
      className={`flex h-[50px] flex-1 items-center justify-center rounded-md font-bold  
      ${type == 'outline' ? 'border-[1px] border-solid border-sky-950 bg-white text-sky-950' : 'bg-sky-950 text-white'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
