export default function HomePage() {
  return (
    <section className="relative text-center text-white min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image (no negative z-index) */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Contrast overlay above bg, below content */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Homestyle Breakfast & Halal Comfort Classics
        </h1>
        <p className="mb-8 text-lg">Made with love in South Surrey ☕🌿</p>

        <div className="flex justify-center gap-4">
          <a
            href="/menu"
            className="bg-leaf px-6 py-3 rounded-lg text-white font-semibold hover:bg-cafe transition"
          >
            View Menu
          </a>
          <a
            href="/order"
            className="bg-white text-cafe px-6 py-3 rounded-lg font-semibold hover:bg-wheat transition"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
