export default function ContactPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <p><strong>Address:</strong> 3033 King George Blvd, Unit #8, Surrey, BC V4P 1B8</p>
          <p><strong>Phone:</strong> <a href="tel:16045384195" className="underline"> (604) 538-4195</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@rosiescountrycafe.ca" className="underline">info@rosiescountrycafe.ca</a></p>
          <div className="mt-4">
            <p className="font-semibold">Hours:</p>
            <ul className="list-disc ml-5">
              <li>Tuesday: 8:30 a.m.–5 p.m.</li>
              <li>Wednesday: 8:30 a.m.–5 p.m.</li>
              <li>Thursday: 8:30 a.m.–7 p.m.</li>
              <li>Friday: 8:30 a.m.–7 p.m.</li>
              <li>Saturday: 8:30 a.m.–7 p.m.</li>
              <li>Sunday: 8:30 a.m.–5:05 p.m.</li>
              <li>Monday: Closed</li>
            </ul>
          </div>
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
