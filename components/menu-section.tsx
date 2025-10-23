// components/menu-section.tsx
import FlexibleImage from "@/components/FlexibleImage";

type Item = {
  id?: string;
  name: string;
  price?: number | string;
  description?: string;
};

type SectionProps = {
  title: string;
  note?: string;
  items: Item[];
  image?: string; // base path, with or without extension
  alt?: string;
};

function formatPrice(value?: number | string) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
    }).format(value);
  }
  // If your JSON sometimes stores prices as strings (e.g., "14.75" or "$14.75")
  const numeric = Number(String(value).replace(/[^0-9.]/g, ""));
  if (!isNaN(numeric)) {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
    }).format(numeric);
  }
  return String(value);
}

export default function MenuSection({ title, note, items, image, alt }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        {image ? (
          <FlexibleImage
            src={image} // e.g. "/images/sections/chicken-burgers" (no extension needed)
            alt={alt || `${title} image`}
            className="w-16 h-16 rounded-lg object-cover shadow-lg"
            loading="eager"
            fetchPriority="high"
          />
        ) : null}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {note && <p className="text-sm text-charcoal/70">{note}</p>}
        </div>
      </div>

      <ul className="divide-y divide-neutral-200">
        {items.map((it) => (
          <li key={it.id || it.name} className="py-3 flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-lg">{it.name}</p>
              {it.description && (
                <p className="text-sm text-neutral-600 mt-1">{it.description}</p>
              )}
            </div>
            {it.price !== undefined && it.price !== null && it.price !== "" ? (
              <span className="whitespace-nowrap font-semibold">
                {formatPrice(it.price)}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
