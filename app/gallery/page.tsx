export default function Gallery() {
  const images = [
    "/images/dishes/waffles.jpg",
    "/images/dishes/omelette.jpg",
    "/images/dishes/burger.jpg"
  ];
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src) => (
          <img key={src} src={src} alt="Rosie’s dish" className="rounded-xl shadow-soft w-full h-auto object-cover" />
        ))}
      </div>
    </div>
  );
}
