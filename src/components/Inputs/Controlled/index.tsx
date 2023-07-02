'use client';

import { useState } from 'react';

export const Controlled = () => {
  const [value, setValue] = useState('');

  console.log({ value });

  return (
    <>
      <input
        type="text"
        value={value}
        className="text-gray-800"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
