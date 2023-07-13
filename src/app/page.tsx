'use client';

import { useState } from 'react';

const ComponentA = () => {
  console.log('componentA');
  return <div>A</div>;
};

const ComponentB = () => {
  console.log('componentB');
  return <div>B</div>;
};

const components = {
  a: <ComponentA />,
  b: <ComponentB />
};

export default function HomePage() {
  const [toggle, setToggle] = useState(false);
  const flag = !toggle ? 'a' : 'b';

  const handleToggle = () => {
    console.log('toggle');
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="flex w-full justify-center pb-8">Home</div>
      <button
        onClick={handleToggle}
        className="bg-green-300 px-4 py-2 text-gray-100"
      >
        Toggle
      </button>

      {components[flag]}
    </>
  );
}
