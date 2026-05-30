import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'TerraFirmaCraft Veles PlayGame - Season 3',
  description: 'Официальный игровой сервер Minecraft TerraFirmaCraft Сезон 03 от Veles PlayGame.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
