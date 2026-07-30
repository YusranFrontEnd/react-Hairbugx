import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          HairBugx Barbershop Makassar | Haircut & Grooming Profesional
        </title>

        <meta
          name="description"
          content="HairBugx adalah barbershop modern dengan layanan haircut, styling, dan grooming profesional di Makassar."
        />

        <meta property="og:title" content="HairBugx Barbershop Makassar" />

        <meta
          property="og:description"
          content="Nikmati layanan haircut, styling, dan grooming profesional bersama HairBugx."
        />

        <meta
          property="og:image"
          content="https://domainkamu.com/images/hairbugx-cover.jpg"
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://domainkamu.com" />
      </Helmet>

      {/* Skip link untuk pengguna keyboard */}
      <a
        href="#main-content"
        className="sr-only rounded-md bg-gray-900 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Lewati ke konten utama
      </a>

      <main id="main-content" className="min-h-screen bg-white">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10">
          <section
            aria-labelledby="hero-title"
            className="order-2 space-y-8 lg:order-1"
          >
            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium tracking-wide text-gray-700">
              Premium Barbershop • Since 2023
            </span>

            <header className="space-y-5">
              <h1
                id="hero-title"
                className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Potongan Rambut
                <span className="block text-gray-500">
                  Modern & Berkualitas.
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                HairBugx menghadirkan pengalaman grooming yang nyaman dengan
                barber profesional, pelayanan terbaik, serta suasana yang santai
                untuk setiap pelanggan.
              </p>
            </header>

            <div className="flex flex-wrap gap-4">
              <a
                href="/service"
                className="rounded-xl bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
              >
                Lihat Layanan
              </a>

              <a
                href="#location"
                className="rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
              >
                Lokasi Kami
              </a>
            </div>

            <nav
              aria-label="Media sosial HairBugx"
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook HairBugx"
                className="rounded-full border border-gray-200 p-3 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                <FaFacebookF
                  aria-hidden="true"
                  className="text-xl text-blue-600"
                />
              </a>

              <a
                href="https://www.instagram.com/HairBugx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram HairBugx"
                className="rounded-full border border-gray-200 p-3 transition hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-200"
              >
                <FaInstagram
                  aria-hidden="true"
                  className="text-xl text-pink-500"
                />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp HairBugx"
                className="rounded-full border border-gray-200 p-3 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="text-xl text-green-500"
                />
              </a>
            </nav>
          </section>

          <figure className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
              alt="Barber sedang memotong rambut pelanggan di HairBugx"
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl sm:h-[450px] lg:h-[650px]"
            />
          </figure>
        </section>

        <footer id="location" className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <address className="not-italic text-gray-600">
              <p>Jl. Balombong, Pangkep</p>
              <p>Jl. Maccini Raya, Makassar</p>
            </address>

            <p className="text-sm text-gray-500">
              © 2023 HairBugx. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
