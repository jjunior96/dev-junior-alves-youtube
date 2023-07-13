import { createContext, useContext, useState } from 'react';

type CounterContextType = {
  counter: number;
  handleIncreaseCounter: () => void;
  handleDecreaseCounter: () => void;
};

const CounterContext = createContext({} as CounterContextType);

export const CounterProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, handleIncreaseCounter, handleDecreaseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
