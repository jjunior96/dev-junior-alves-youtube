'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export const Uncontrolled = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit'
  });
  const inputRef = useRef<HTMLInputElement>(null);
  // const { name, onBlur, onChange, ref } = register('name');

  const handleButtonClicl = () => {
    const value = inputRef.current?.value;
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        type="text"
        // ref={ref}
        // onChange={onChange}
        // name={name}
        // onBlur={onBlur}
        {...register('name')}
        className="text-gray-800"
      />

      <button onClick={handleButtonClicl} type="submit">
        Get value
      </button>
    </form>
  );
};
