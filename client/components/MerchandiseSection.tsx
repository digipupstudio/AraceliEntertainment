const RedCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
    <g clipPath="url(#merch-clip)">
      <mask id="merch-mask" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M23.6364 0.19873H0.363632V23.4715H23.6364V0.19873Z" fill="white"/>
      </mask>
      <g mask="url(#merch-mask)">
        <path d="M11.4185 9.50779L16.073 4.85328L11.4185 0.19873L9.78938 1.82782L11.6512 3.68964C6.41483 3.92237 2.10938 8.22779 2.10938 13.5805C2.10938 19.0496 6.53119 23.4714 12.0003 23.4714C13.1639 23.4714 14.2112 23.2387 15.2585 22.8896L14.4439 20.6788C13.7457 21.0279 12.8148 21.1442 12.0003 21.1442C7.8112 21.1442 4.43665 17.7696 4.43665 13.5805C4.43665 9.50779 7.57847 6.24964 11.6512 6.01691L9.78938 7.87869L11.4185 9.50779Z" fill="white"/>
      </g>
    </g>
    <defs>
      <clipPath id="merch-clip">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function MerchandiseSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">
          <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
            Streaming Features
          </span>
          <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
            Control Your
            <br />
            Viewing Experience
          </h2>
          <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
            Customize your streaming experience with personalized recommendations, watchlists, and family profiles designed for your unique viewing preferences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-2">
            {[
              "Personalized Recommendations",
              "Watch History Tracking",
              "Custom Family Profiles",
              "Smart Playlist Creation",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-3 text-white font-['Roboto'] text-base capitalize">
                <RedCheckIcon />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
          >
            explore
          </a>
        </div>

        {/* Image placeholder - merchandise screenshot */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8116edbeb20f1c2d13b03da9284778539596a56a?width=1023"
            alt="Merchandise Store"
            className="w-full max-w-[550px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
