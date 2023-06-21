import { createContext, useContext } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={{ name: 'Junior Alves', age: 26 }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
