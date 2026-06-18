import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechEvoDiscovery Veles PlayGame - Season 4',
  description: 'Официальный игровой сервер Minecraft TechEvoDiscovery Сезон 04 от Veles PlayGame.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body className="bg-[#050505] text-white antialiased" style={{ backgroundColor: '#050505', color: 'white' }} suppressHydrationWarning>{children}</body>
    </html>
  );
}
