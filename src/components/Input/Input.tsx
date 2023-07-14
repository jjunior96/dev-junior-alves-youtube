type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputRoot = ({ name = '', id = 'input', ...rest }: InputProps) => {
  return (
    <>
      <div className="">
        <input
          {...rest}
          id={id}
          name={name}
          type="text"
          className="w-full bg-transparent text-gray-600 outline-none"
        />
      </div>
    </>
  );
};
