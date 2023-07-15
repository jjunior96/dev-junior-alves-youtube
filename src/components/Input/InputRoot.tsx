/* eslint-disable react/display-name */
import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, ...rest }, ref) => {
    return (
      <>
        <div className="">
          <input
            {...rest}
            id={id}
            name={name}
            type="text"
            ref={ref}
            className="w-full bg-transparent text-gray-600 outline-none"
          />
        </div>
      </>
    );
  }
);
