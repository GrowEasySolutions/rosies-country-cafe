export default function HomePage() {
  return (
    <section className="relative text-center py-32 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover -z-10"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Dark overlay ABOVE image but BELOW text */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content on top */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
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
