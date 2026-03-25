export default function TutorialsAndSupportSection() {
  return (
    <>
      {/* Video Tutorials */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
              Video Tutorials
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              Video Tutorials for easy
              <br />
              to understand
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              Watch our quick, user-friendly video guides for easy setup
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
            >
              Watch now
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
              free support
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              6 Months Free Support
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              worry-free usage with complimentary support for smooth platform building
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
            >
              get it now
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
              responsive
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
              Maximizing Compatibility
              <br />
              for All Screen Sizes
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
              You can ensure that your website or application looks great and functions flawlessly on any device, providing a better user experience for your visitors or customers.
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
