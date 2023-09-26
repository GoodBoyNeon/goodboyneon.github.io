import { Overlays } from '@components';
import { FiraSans } from '@utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neon The Developer',
  description: "Welcome to Neon's Portfolio!",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${FiraSans.className} bg-background`}>
        <Overlays />
        {children}
      </body>
    </html>
  );
}
