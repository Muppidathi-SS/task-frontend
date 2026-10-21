interface InputProps {
  type: string;
  label?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  type,
  label,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col gap-3">
        {label && <p className="text-sm text-gray-700">{label}</p>}
        <div className="w-full px-6 py-3 border border-gray-300 rounded-xl shadow-sm">
          <input
            className="w-full border-none focus:outline-none"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
