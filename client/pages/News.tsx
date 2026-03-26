import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { fadeUp } from "@/lib/animations";

const filmSlots = [
  "Dramatic Feature Film",
  "Family Adventure Series",
  "Documentary Series",
  "Romance Limited Series",
];

export default function News() {
  useEffect(() => {
    document.title = "News & Events | Araceli Entertainment";
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        {/* Hero */}
        <motion.section
          className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/0d59375a7c9c2845944c6da7abd7324ffc647c48?width=3810') lightgray center / cover no-repeat",
          }}
          aria-label="News Hero"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <motion.h1
              className="text-white font-['Roboto'] font-medium text-4xl sm:text-5xl md:text-6xl leading-tight capitalize"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              Araceli News
            </motion.h1>
            <motion.p
              className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg mt-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              Events, announcements, and behind-the-scenes updates
            </motion.p>
          </div>
        </motion.section>

        {/* News Content */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-14">

            {/* Featured Event */}
            <motion.article
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#E50914] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              aria-labelledby="gala-heading"
            >
              <div className="p-8 md:p-12">
                <span className="inline-block text-[#E50914] font-['Roboto'] font-medium text-xs uppercase tracking-widest mb-6 border border-[#E50914] px-3 py-1 rounded-full">
                  Featured Event
                </span>

                <h2 id="gala-heading" className="text-white font-['Roboto'] font-medium text-3xl md:text-5xl mb-6 capitalize">
                  Pure Imagination Gala
                </h2>

                <dl className="space-y-4 mb-8">
                  {[
                    { emoji: "📅", label: "Date", value: "April 25, 2025" },
                    { emoji: "🕕", label: "Time", value: "5:00 PM – 10:00 PM" },
                    { emoji: "📍", label: "Location", value: "Willis Tower Metropolitan Club, Chicago, IL" },
                    { emoji: "🎭", label: "Theme", value: "Pure Imagination" },
                  ].map(({ emoji, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <span aria-hidden="true" className="text-xl leading-none pt-0.5">{emoji}</span>
                      <div>
                        <dt className="sr-only">{label}</dt>
                        <dd className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg">
                          <strong className="text-white">{label}:</strong> {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg leading-relaxed mb-8">
                  Join us for an unforgettable evening celebrating creativity and
                  entertainment. Experience the magic of Pure Imagination as we unveil
                  our upcoming slate of original productions and announce exclusive
                  streaming features.
                </p>

                <a
                  href="/contact"
                  className="inline-block bg-[#E50914] text-white font-['Roboto'] font-medium px-8 py-3 rounded hover:bg-red-700 transition-colors"
                >
                  RSVP / Learn More
                </a>
              </div>
            </motion.article>

            {/* Upcoming Productions */}
            <motion.section
              aria-labelledby="productions-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 id="productions-heading" className="text-white font-['Roboto'] font-medium text-3xl mb-6 capitalize">
                Upcoming Productions
              </h3>

              <div className="bg-[#0D0D0D] rounded-lg p-8 md:p-12 border border-[#333]">
                <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg leading-relaxed mb-8">
                  We're excited to announce our slate of original films and series
                  currently in production. Film posters and streaming dates coming
                  soon!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {filmSlots.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#E50914]/20 rounded-lg p-6 flex flex-col items-center justify-center min-h-[200px] hover:border-[#E50914]/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#E50914]/10 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#E50914]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <p className="text-white font-['Roboto'] font-medium text-center text-base">
                        {item}
                      </p>
                      <p className="text-[#888] font-['Roboto'] text-xs mt-2">Poster Coming Soon</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-[#D1D0CF] font-['Roboto'] text-sm italic">
                  Check back regularly for poster reveals and streaming dates.
                </p>
              </div>
            </motion.section>

            {/* Streaming Link */}
            <motion.div
              className="bg-[#0D0D0D] rounded-lg p-8 md:p-12 border border-[#E50914]/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-white font-['Roboto'] font-medium text-2xl mb-4 capitalize">
                Start Streaming Now
              </h3>
              <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg mb-6">
                Experience Araceli Entertainment's premium content library
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#E50914] text-white font-['Roboto'] font-medium px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                Visit Our Streaming Service
              </a>
            </motion.div>

          </div>
        </section>
      </main>
    </>
  );
}
