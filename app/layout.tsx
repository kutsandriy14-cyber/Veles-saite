import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TerraFirmaGreg: Modern Veles PlayGame - Season 5',
  description: 'Официальный игровой сервер Minecraft TerraFirmaGreg: Modern v0.12.7 (1.20.1 Forge) Сезон 05 от Veles PlayGame.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body className="bg-[#050505] text-white antialiased" style={{ backgroundColor: '#050505', color: 'white' }} suppressHydrationWarning>{children}</body>
    </html>
  );
}
