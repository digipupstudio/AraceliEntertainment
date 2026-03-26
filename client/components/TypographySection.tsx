export default function TypographySection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6d198c6552acc67c630a5a66cfe0ee9bc1ef083d?width=1220"
            alt="Custom Typography"
            className="w-full max-w-[610px] rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">
          <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
            User Interface
          </span>
          <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
            Intuitive Design
            <br />
            for Every User
          </h2>
          <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
            Our thoughtfully designed interface makes navigating premium content effortless, whether you're a tech-savvy viewer or exploring streaming for the first time.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 mt-2 hover:bg-red-700 transition-colors w-fit"
          >
            join us now
          </a>
        </div>
      </div>
    </section>
  );
}
