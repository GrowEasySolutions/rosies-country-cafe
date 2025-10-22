type Props = { name: string; price: number; description?: string };
export default function MenuCard({ name, price, description }: Props) {
  return (
    <article className="card">
      <h3 className="font-semibold">{name}</h3>
      {description && <p className="text-sm text-charcoal/70">{description}</p>}
      <p className="mt-2 font-bold">${price.toFixed(2)}</p>
    </article>
  );
}
