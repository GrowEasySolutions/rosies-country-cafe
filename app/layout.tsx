export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-cafe font-sans">
        <header className="p-4 flex justify-between items-center border-b border-wheat">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Rosie’s Country Café Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl">Rosie’s Country Café</span>
          </a>
          <nav className="flex gap-6 font-medium">
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
            <a href="/order" className="text-leaf font-semibold">Order Online</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="mt-12 p-6 text-center border-t border-wheat text-sm text-gray-600">
          © 2025 Rosie’s Country Café — 3033 King George Blvd, Surrey, BC
        </footer>
      </body>
    </html>
  );
}