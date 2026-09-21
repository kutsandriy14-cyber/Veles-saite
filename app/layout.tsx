import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TerraFirmaGreg: Modern & Liminal Industries | Veles PlayGame',
  description: 'Игровые серверы Minecraft: хардкорный TerraFirmaGreg: Modern и новый сервер Закулисья Liminal Industries от сообщества Veles PlayGame.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body className="bg-[#050505] text-white antialiased" style={{ backgroundColor: '#050505', color: 'white' }} suppressHydrationWarning>{children}</body>
    </html>
  );
}
