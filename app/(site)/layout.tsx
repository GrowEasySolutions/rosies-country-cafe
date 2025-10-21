import './globals.css';
import type { ReactNode } from 'react';
export const metadata = { title: "Rosie’s Country Café", description: "Homestyle halal comfort café in South Surrey" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (<html lang='en'><body>
  <header className='bg-cream border-b border-wheat/50'><div className='container flex items-center justify-between h-16'>
  <a href='/' className='font-bold text-2xl'>Rosie’s Country Café</a>
  <nav className='hidden md:flex gap-6'><a href='/menu'>Menu</a><a href='/about'>About</a><a href='/contact'>Contact</a></nav>
  </div></header><main>{children}</main>
  <footer className='mt-16 border-t border-wheat/50'><div className='container py-8 text-sm'>© 2025 Rosie’s Country Café</div></footer>
  </body></html>);
}