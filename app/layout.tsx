import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tharun P - Portfolio',
  description: 'Computer Science & Business Engineering Student | Flutter Developer | Problem Solver',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}