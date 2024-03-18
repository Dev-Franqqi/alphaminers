import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
}

export default function Layoutdeposit({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Toaster />
    </>
  );
}
