type Item = { id: string; name: string; price: number; description?: string };
type SectionProps = { title: string; note?: string; items: Item[]; image?: string };

// components/menu-section.tsx
import FlexibleImage from "@/components/FlexibleImage";

type Item = { name: string; description?: string; price?: string };
type SectionProps = {
  title: string;
  note?: string;
  items: Item[];
  image?: string; // can be with or without extension now
  alt?: string;
};

export default function MenuSection({ title, note, items, image, alt }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        {image ? (
          <FlexibleImage
            src={image} // e.g. "/images/sections/omelettes" or "/images/sections/omelettes.png"
            alt={alt || `${title} image`}
            className="w-16 h-16 rounded-lg object-cover shadow-soft"
            loading="eager"
            fetchPriority="high"
          />
        ) : null}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {note && <p className="text-sm text-charcoal/70">{note}</p>}
        </div>
      </div>

      {/* ...existing items grid/list... */}
    </section>
  );
}

