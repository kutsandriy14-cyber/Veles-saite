import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Craftoria Veles PlayGame - Season 4',
  description: 'Официальный игровой сервер Minecraft Craftoria Сезон 04 от Veles PlayGame.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
