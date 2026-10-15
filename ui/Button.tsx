interface ButtonProps {
  buttonLabel: string;
  onClick?: () => void;
}

export default function Button({ buttonLabel, onClick }: ButtonProps) {
  return (
    <>
      <div className="w-full">
        <button
          className="w-full bg-black rounded-xl px-6 py-2 text-[18px] text-white cursor-pointer"
          onClick={onClick}
        >
          {buttonLabel}
        </button>
      </div>
    </>
  );
}
