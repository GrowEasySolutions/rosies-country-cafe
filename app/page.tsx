export default function HomePage() {
  return (
    <section className="text-center py-20 bg-[url('/images/hero.jpg')] bg-cover bg-center text-white">
      <h1 className="text-4xl font-bold mb-4">Homestyle Breakfast & Halal Comfort Classics</h1>
      <p className="mb-8 text-lg">Made with love in South Surrey ☕🌿</p>
      <div className="flex justify-center gap-4">
        <a href="/menu" className="bg-leaf px-5 py-2 rounded-md text-white font-semibold">View Menu</a>
        <a href="/order" className="bg-white text-cafe px-5 py-2 rounded-md font-semibold">Order Online</a>
      </div>
    </section>
  );
}