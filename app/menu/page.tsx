import menu from "@/content/menu.json";
import MenuSection from "@/components/menu-section";

export const metadata = { title: "Menu — Rosie’s Country Café" };

export default function MenuPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <p className="text-charcoal/80 mb-8">All items are halal. Prices in CAD. Availability may vary.</p>
      {menu.categories.map((cat) => (
        <MenuSection key={cat.slug} title={cat.title} note={cat.note} items={cat.items} image={cat.image} />
      ))}
    </div>
  );
}
