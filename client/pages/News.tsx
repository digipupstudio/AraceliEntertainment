import Navigation from "@/components/Navigation";

export default function News() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
          style={{
            background: "url('https://api.builder.io/api/v1/image/assets/TEMP/0d59375a7c9c2845944c6da7abd7324ffc647c48?width=3810') lightgray center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <h1 className="text-white font-['Roboto'] font-medium text-5xl md:text-6xl leading-tight capitalize">
              Araceli News
            </h1>
            <p className="text-[#D1D0CF] font-['Roboto'] text-lg mt-4">
              Events, announcements, and behind-the-scenes updates
            </p>
          </div>
        </section>

        {/* News Content */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Featured Event */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#E50914] rounded-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="text-[#E50914] font-['Roboto'] font-medium text-sm uppercase tracking-widest">
                    FEATURED EVENT
                  </span>
                </div>

                <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl mb-4 capitalize">
                  Pure Imagination Gala
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <span className="text-[#E50914] font-bold text-lg">📅</span>
                    <div>
                      <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                        <strong>Date:</strong> April 25, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[#E50914] font-bold text-lg">🕕</span>
                    <div>
                      <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                        <strong>Time:</strong> 5:00 PM - 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[#E50914] font-bold text-lg">📍</span>
                    <div>
                      <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                        <strong>Location:</strong> Willis Tower Metropolitan Club, Chicago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[#E50914] font-bold text-lg">🎭</span>
                    <div>
                      <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                        <strong>Theme:</strong> Pure Imagination
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[#D1D0CF] font-['Roboto'] text-lg leading-relaxed mb-6">
                  Join us for an unforgettable evening celebrating creativity and entertainment. Experience the magic of Pure Imagination as we unveil our upcoming slate of original productions and announce exclusive streaming features.
                </p>

                <a
                  href="/contact"
                  className="inline-block bg-[#E50914] text-white font-['Roboto'] font-medium px-8 py-3 rounded hover:bg-red-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Upcoming Productions */}
            <div>
              <h3 className="text-white font-['Roboto'] font-medium text-3xl mb-8 capitalize">
                Upcoming Productions
              </h3>

              <div className="bg-[#0D0D0D] rounded-lg p-8 md:p-12 border border-[#333]">
                <p className="text-[#D1D0CF] font-['Roboto'] text-lg leading-relaxed mb-6">
                  We're excited to announce our slate of original films and series currently in production. Film posters and details coming soon!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Dramatic Feature Film",
                    "Family Adventure Series",
                    "Documentary Series",
                    "Romance Limited Series",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#E50914]/20 rounded p-6 flex items-center justify-center min-h-[200px]"
                    >
                      <p className="text-[#D1D0CF] font-['Roboto'] text-center">
                        {item}
                        <br />
                        <span className="text-sm">[Poster Coming Soon]</span>
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-[#D1D0CF] font-['Roboto'] text-base italic">
                  Check back regularly for poster reveals and streaming dates.
                </p>
              </div>
            </div>

            {/* Streaming Service Link */}
            <div className="bg-[#0D0D0D] rounded-lg p-8 md:p-12 border border-[#E50914]/20 text-center">
              <h3 className="text-white font-['Roboto'] font-medium text-2xl mb-4 capitalize">
                Start Streaming Now
              </h3>
              <p className="text-[#D1D0CF] font-['Roboto'] text-lg mb-6">
                Experience Araceli Entertainment's premium content library
              </p>
              <a
                href="#"
                className="inline-block bg-[#E50914] text-white font-['Roboto'] font-medium px-8 py-3 rounded hover:bg-red-700 transition-colors"
              >
                Visit Our Streaming Service
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
