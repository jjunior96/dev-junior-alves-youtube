import { ElementType } from 'react';

type InputIconProps = {
  icon: ElementType;
};

export const InputIcon = ({ icon: Icon }: InputIconProps) => {
  return (
    <>
      <Icon className="group flex w-full items-center justify-center gap-2 rounded-lg border-[2px] bg-gray-100 px-3 py-3 focus-within:border-link" />
    </>
  );
};
