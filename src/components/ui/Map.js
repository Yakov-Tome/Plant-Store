export default function ContactMap() {
  return (
    <section className="w-full max-w-4xl mx-auto font-mono bg-black/5 p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold text-right mb-4">מפת הגעה</h2>

      <div className="relative w-full pb-[60%] overflow-hidden rounded-3xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=סמטת%20אהרון%20שלוש%2023%2C%20נווה%20צדק%20תל%20אביב&t=p&z=15&ie=UTF8&iwloc=B&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
