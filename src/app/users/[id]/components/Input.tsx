import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, helperText, ...rest }, ref) => {
    return (
      <div className="flex w-full flex-col ">
        <input
          {...rest}
          name={name}
          ref={ref}
          type="text"
          className={`w-full rounded-md border-[4px] px-2 py-1 text-gray-600 outline-none focus-within:border-blue-400 ${
            helperText ? 'border-red-500' : ''
          }`}
        />

        {helperText && (
          <p className="mt-1 text-sm text-red-500">{helperText}</p>
        )}
      </div>
    );
  }
);
