import { twMerge } from 'tailwind-merge';

const Colors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
  none: 'bg-transparent'
};

type ModalActionProps = {
  color?: 'error' | 'success' | 'warning' | 'info' | 'none';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalAction = ({
  children,
  className,
  color = 'none',
  onClick,
  ...rest
}: ModalActionProps) => {
  const colorButton = Colors[color];

  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge(
        'rounded-md px-4 py-1 text-white',
        className,
        colorButton
      )}
    >
      {children}
    </button>
  );
};
