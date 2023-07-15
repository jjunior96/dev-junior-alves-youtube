type ModalActionsProps = {
  children: React.ReactNode;
};

export const ModalActions = ({ children }: ModalActionsProps) => {
  return (
    <footer className="flex w-full justify-end gap-2 p-3">{children}</footer>
  );
};
