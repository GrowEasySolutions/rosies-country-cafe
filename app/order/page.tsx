export default function Order() {
  return (
    <div className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Order Online</h1>
      <p className="text-charcoal/80">Choose your delivery partner:</p>
      <div className="flex gap-3">
        <a className="btn" href="#" aria-disabled>UberEats</a>
        <a className="btn" href="#" aria-disabled>DoorDash</a>
        <a className="btn" href="#" aria-disabled>Fantuan</a>
      </div>
      <p className="text-sm text-charcoal/70">Replace the # links with the real URLs later.</p>
    </div>
  );
}
