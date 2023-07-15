type ModalContentProps = {
  children: React.ReactNode;
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="flex flex-1 items-center justify-center p-3">
      {children}
    </div>
  );
};
