import { ThemeRegistry } from '@/components/ThemeRegistry';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeRegistry>{children}</ThemeRegistry>;
};
