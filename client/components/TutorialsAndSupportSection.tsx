export default function TutorialsAndSupportSection() {
  return (
    <>
      {/* Video Tutorials */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
              Getting Started
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              Quick Setup Guide
              <br />
              and Support
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              Get up and running in minutes with our easy setup guides and dedicated customer support team ready to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
            >
              Contact Support
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cbeded879559ee1e0e6019d286de728333d9d5ab?width=1220"
              alt="Video Tutorials"
              className="w-full max-w-[610px] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Free Support */}
      <section className="w-full bg-black py-20 px-4 border-t border-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d0b3656cbcc5f6c6a2267f9461587fcb41ec7fca?width=1220"
              alt="Free Support"
              className="w-full max-w-[610px] rounded-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
              Customer Care
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              Dedicated Support Team
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              Our customer support team is available to assist you with any questions or technical issues you may encounter.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
            >
              get support
            </a>
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="w-full bg-black py-20 px-4 border-t border-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
              Accessible Anywhere
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              Stream on Any Device
              <br />
              Anytime, Anywhere
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              Watch on your phone during commute, switch to tablet at home, or enjoy on the big screen. Seamless streaming across all your devices with sync technology.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c975af36775aac47010bc98fdf236485c8524c48?width=1360"
              alt="Responsive Design"
              className="w-full max-w-[680px] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
