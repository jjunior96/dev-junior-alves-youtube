import { CounterProvider } from '@/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CounterProvider>{children}</CounterProvider>
    </>
  );
};
