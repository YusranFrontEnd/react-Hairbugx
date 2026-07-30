import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Haircut",
    price: "Rp35.000",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Barber sedang memotong rambut pelanggan",
  },
  {
    title: "Haircut & Shampoo",
    price: "Rp40.000",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
    alt: "Pelanggan mendapatkan layanan haircut dan shampoo",
  },
  {
    title: "Hair Styling & Coloring",
    price: "Rp100.000",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    alt: "Barber melakukan styling dan coloring rambut",
  },
  {
    title: "Home Service",
    price: "Rp50.000",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Barber memberikan layanan potong rambut di rumah pelanggan",
  },
];

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Layanan HairBugx | Haircut, Styling & Grooming Makassar</title>

        <meta
          name="description"
          content="Lihat layanan HairBugx mulai dari haircut, shampoo, styling, coloring, hingga home service dengan barber profesional."
        />
      </Helmet>

      <main aria-labelledby="service-title" className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <header className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Our Services
            </span>

            <h1
              id="service-title"
              className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              Layanan HairBugx
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Nikmati layanan grooming profesional dengan kualitas terbaik,
              dikerjakan oleh barber berpengalaman untuk menunjang penampilan
              Anda.
            </p>
          </header>

          <section
            aria-labelledby="service-list"
            className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
          >
            <h2 id="service-list" className="sr-only">
              Daftar Layanan HairBugx
            </h2>

            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <figure>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                </figure>

                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-lg font-bold text-gray-700">
                    {service.price}
                  </p>

                  <a
                    href="https://wa.me/0882020131189?text=Halo%20HairBugx,%20saya%20ingin%20booking%20layanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block w-full rounded-xl bg-gray-900 px-5 py-3 text-center font-medium text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
                  >
                    Booking Sekarang
                  </a>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Service;
