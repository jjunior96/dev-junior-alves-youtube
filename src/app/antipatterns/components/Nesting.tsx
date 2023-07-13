import { useState } from 'react';

import { Button } from '@/components/Button';

export const Nesting = () => {
  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <p>Counter: {counter}</p>

      <Button handleAddCounter={handleAddCounter} />
    </>
  );
};
