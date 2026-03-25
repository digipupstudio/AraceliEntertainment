import { useState } from "react";

export default function ThemeOverviewSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
          Our Platform
        </span>
        <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight">
          Stream Entertainment
          <br />
          Your Way
        </h2>
        <p className="text-white font-['Roboto'] text-base md:text-lg max-w-3xl">
          Experience Araceli Entertainment's premium streaming service. Award-winning content produced by industry professionals, delivered directly to your devices.
        </p>

        {/* Video Player */}
        <div className="w-full max-w-4xl rounded-lg border-[14px] border-[#0D0D0D] overflow-hidden relative">
          {!playing ? (
            <div className="relative w-full aspect-video bg-black">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f8d0d2a80321a68dd7cb0454433122ec28b87290?width=2024"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                  <g clipPath="url(#play-clip)">
                    <path d="M66.52 7.74C65.74 4.81 64.03 2.33 61.1 1.55C55.79 0.13 34 0 34 0C34 0 12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74C0.0600001 13.05 0 24 0 24C0 24 0.0600001 34.95 1.48 40.26C2.26 43.19 3.97 45.67 6.9 46.45C12.21 47.87 34 48 34 48C34 48 55.79 47.87 61.1 46.45C64.03 45.67 65.74 43.19 66.52 40.26C67.94 34.95 68 24 68 24C68 24 67.94 13.05 66.52 7.74Z" fill="#FF0033"/>
                    <path d="M45 24L27 14V34" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="play-clip">
                      <rect width="68" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          ) : (
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Streamit Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
