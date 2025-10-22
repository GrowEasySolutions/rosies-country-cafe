type Item = { id: string; name: string; price: number; description?: string };
type SectionProps = { title: string; note?: string; items: Item[]; image?: string };

export default function MenuSection({ title, note, items, image }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        {image ? (
          <img src={image} alt={`${title} image`} className="w-16 h-16 rounded-lg object-cover shadow-soft" />
        ) : null}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {note && <p className="text-sm text-charcoal/70">{note}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <article key={i.id} className="card">
            <h3 className="font-semibold">{i.name}</h3>
            {i.description && <p className="text-sm text-charcoal/70">{i.description}</p>}
            <p className="mt-2 font-bold">${i.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
