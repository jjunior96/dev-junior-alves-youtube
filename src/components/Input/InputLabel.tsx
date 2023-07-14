type InputLabelProps = {
  label: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = ({
  label,
  htmlFor = 'input',
  ...rest
}: InputLabelProps) => {
  return (
    <>
      <label {...rest} htmlFor={htmlFor} className="text-gray-200">
        {label}
      </label>
    </>
  );
};
