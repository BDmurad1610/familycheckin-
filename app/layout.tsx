import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FamilyCheckin — 24/7 peace of mind for your family',
  description: 'AI-powered daily check-ins via WhatsApp for elderly parents and children. Less than one hour of home care.',
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
