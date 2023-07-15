type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = ({
  children,
  htmlFor = 'input',
  ...rest
}: InputLabelProps) => {
  return (
    <>
      <label {...rest} htmlFor={htmlFor} className="text-gray-200">
        {children}
      </label>
    </>
  );
};
