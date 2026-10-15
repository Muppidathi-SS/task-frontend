interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <div className="w-full px-6 py-3 border border-gray-300 rounded-xl shadow-sm">
        <input
          className="w-full border-none focus:outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
