export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto text-center py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-2">📍 3033 King George Blvd, Unit #8, Surrey, BC V4P 1B8</p>
      <p className="mb-2">📞 (604) 538-4195</p>
      <p className="mb-8">📧 info@rosiescountrycafe.ca</p>
      <iframe
        src="https://www.google.com/maps?q=Rosie's+Country+Cafe+Surrey+BC&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}