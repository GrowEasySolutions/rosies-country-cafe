import MenuCard from "./menu-card";
type Item = { id: string; name: string; price: number; description?: string };
type Section = { title: string; note?: string; items: Item[] };

export default function MenuSection({ title, note, items }: Section) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold">{title}</h2>
      {note && <p className="text-sm text-charcoal/70 mb-4">{note}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => <MenuCard key={i.id} {...i} />)}
      </div>
    </section>
  );
}
