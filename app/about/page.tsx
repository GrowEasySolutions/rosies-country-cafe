export default function About() {
  return (
    <div className="container py-12 grid md:grid-cols-2 gap-8 items-center">
      <img src="/images/interior.jpg" alt="Rosie’s Café Interior" className="rounded-xl shadow-soft w-full h-auto" />
      <div>
        <h1 className="text-3xl font-bold mb-4">About Rosie’s</h1>
        <p className="text-charcoal/80 mb-3">
          Rosie’s Country Café is a family-run, halal-friendly country café serving breakfast,
          brunch, and comfort favorites.
        </p>
        <p className="text-charcoal/80">All meats and ingredients are sourced to meet halal standards.</p>
      </div>
    </div>
  );
}
