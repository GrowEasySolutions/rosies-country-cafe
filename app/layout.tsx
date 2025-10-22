import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Rosie’s Country Café | Halal Breakfast & Comfort Food in Surrey, BC",
  description: "Family-run halal breakfast & brunch café serving waffles, omelettes, and comfort classics."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-cafe">
        <header className="bg-cream sticky top-0 z-50 border-b border-wheat/50">
          <div className="container flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Rosie’s Country Café Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl">Rosie’s Country Café</span>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/menu">Menu</a>
              <a href="/about">About</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
              <a href="/order" className="btn">Order Online</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-wheat/50">
          <div className="container py-8 text-sm">
            <p><strong>Address:</strong> 3033 King George Blvd, Unit #8, Surrey, BC V4P 1B8</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 my-3">
              <p><strong>Tuesday:</strong> 8:30 a.m.–5 p.m.</p>
              <p><strong>Wednesday:</strong> 8:30 a.m.–5 p.m.</p>
              <p><strong>Thursday:</strong> 8:30 a.m.–7 p.m.</p>
              <p><strong>Friday:</strong> 8:30 a.m.–7 p.m.</p>
              <p><strong>Saturday:</strong> 8:30 a.m.–7 p.m.</p>
              <p><strong>Sunday:</strong> 8:30 a.m.–5:05 p.m.</p>
              <p><strong>Monday:</strong> Closed</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Facebook" title="Facebook">FB</a>
              <a href="#" aria-label="Instagram" title="Instagram">IG</a>
              <a href="#" aria-label="TikTok" title="TikTok">TT</a>
            </div>
            <p className="text-charcoal/70 mt-4">© {new Date().getFullYear()} Rosie’s Country Café</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
