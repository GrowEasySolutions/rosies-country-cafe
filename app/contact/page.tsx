export default function ContactPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <p><strong>Address:</strong> 3033 King George Blvd, Unit #8, Surrey, BC V4P 1B8</p>
          <p><strong>Phone:</strong> <a href="tel:16045384195" className="underline"> (604) 538-4195</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@rosiescountrycafe.ca" className="underline">info@rosiescountrycafe.ca</a></p>
          <p><strong>Hours:</strong> Tue–Sun 8:30 AM – 5:00 PM • Mon Closed</p>
        </div>
        <div>
          <iframe
            title="Rosie’s Country Café Map"
            src="https://www.google.com/maps?q=Rosie's+Country+Cafe+Surrey+BC&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
