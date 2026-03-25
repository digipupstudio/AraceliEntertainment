export default function ExpertHelpSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CTA Box */}
        <div className="bg-[#0D0D0D] rounded-xl p-12 md:p-16 flex flex-col items-center text-center gap-8 border border-[#1a1a1a]">
          <h2 className="text-white font-['Roboto'] font-normal text-3xl md:text-5xl leading-tight max-w-3xl">
            Need expert help for setup, installation, or customization?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 hover:bg-red-700 transition-colors"
            >
              View all services
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-white text-white font-['Roboto'] font-medium text-sm capitalize rounded px-7 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Talk to an OTT Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
