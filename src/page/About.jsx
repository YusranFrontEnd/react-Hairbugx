import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      title: "Barber Profesional",
      description:
        "Tim barber berpengalaman yang selalu mengikuti perkembangan gaya rambut modern.",
    },
    {
      title: "Suasana Nyaman",
      description:
        "Tempat yang santai untuk menikmati pengalaman grooming tanpa terburu-buru.",
    },
    {
      title: "Produk Berkualitas",
      description:
        "Menggunakan produk terbaik untuk menjaga kesehatan rambut dan kulit.",
    },
    {
      title: "Pelayanan Personal",
      description:
        "Setiap pelanggan mendapatkan rekomendasi sesuai karakter dan kebutuhan.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang HairBugx | Barbershop Profesional Makassar</title>

        <meta
          name="description"
          content="Kenali HairBugx, barbershop dengan konsep modern, barber profesional, dan pelayanan grooming berkualitas."
        />
      </Helmet>

      <main aria-labelledby="about-title" className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <header className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              About HairBugx
            </span>

            <h1
              id="about-title"
              className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              Tentang Kami
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              HairBugx bukan hanya tempat potong rambut, tetapi tempat untuk
              mendapatkan pengalaman grooming yang nyaman, profesional, dan
              berkualitas.
            </p>
          </header>

          <section
            aria-label="Cerita dan filosofi HairBugx"
            className="mt-16 grid gap-8 md:grid-cols-2"
          >
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Kisah Kami</h2>

              <p className="mt-4 leading-8 text-gray-600">
                Didirikan oleh <em>Fikri Yurdiansyah</em>, seorang barber yang
                memiliki passion terhadap dunia grooming. HairBugx lahir dari
                perpaduan antara gaya klasik dan tren modern untuk memberikan
                pengalaman terbaik kepada pelanggan.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Filosofi Kami
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Kami percaya bahwa potongan rambut bukan hanya tentang
                penampilan, tetapi juga tentang kepercayaan diri. Setiap
                pelanggan memiliki karakter unik yang membutuhkan pelayanan
                personal.
              </p>
            </article>
          </section>

          <section aria-labelledby="team-title" className="mt-16 text-center">
            <h2 id="team-title" className="text-3xl font-bold text-gray-900">
              Tim Kami
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
              Barber HairBugx selalu meningkatkan kemampuan dan teknik agar
              mampu memberikan hasil terbaik, mulai dari gaya klasik hingga gaya
              modern.
            </p>
          </section>

          <section aria-labelledby="values-title" className="mt-12">
            <h2 id="values-title" className="sr-only">
              Keunggulan HairBugx
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-20 border-t border-gray-200 pt-10 text-center">
            <p className="text-gray-600">
              Terima kasih telah memilih{" "}
              <em className="font-medium text-gray-900">HairBugx</em>. Kami siap
              memberikan pengalaman grooming terbaik untuk Anda.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
};

export default About;
