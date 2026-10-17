import { Icons } from "@/icons/icons";

interface ButtonProps {
  buttonLabel: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function Button({ buttonLabel, onClick, icon }: ButtonProps) {
  return (
    <>
      <div className="w-full">
        <button
          className="w-full bg-black rounded-xl px-6 py-2 text-[18px] text-white cursor-pointer flex justify-center items-center gap-2"
          onClick={onClick}
        >
          {icon && <Icons.PlusIcon />}
          {buttonLabel}
        </button>
      </div>
    </>
  );
}
