export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export const ActionBar = ({
  children,
  handleToggle
}: {
  children: React.ReactNode;
  handleToggle: () => void;
}) => {
  return (
    <>
      {children}
      <div>
        <button onClick={handleToggle}>Open Modal</button>
      </div>
    </>
  );
};

export const Modal = ({
  children,
  isOpen,
  onClose
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  console.log(isOpen);
  console.log(onClose);

  return <>{children}</>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table = ({ data, columns }: { data: any; columns: any }) => {
  console.log(columns);
  return <>{data}</>;
};
