export default function CTABannerSection() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-xl overflow-hidden relative flex flex-col lg:flex-row items-center justify-between px-12 py-16 gap-12"
          style={{
            background: "url('https://api.builder.io/api/v1/image/assets/TEMP/28d62158f3f67e2f33a9a0434c8bb788980ce67f?width=2667') lightgray center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col gap-5 max-w-2xl">
            <h2 className="text-white font-['Roboto'] font-medium text-3xl md:text-4xl leading-tight capitalize">
              Build your own OTT Platform just
              <br />
              like Netflix
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg leading-relaxed max-w-lg">
              Still Thinking? Just shut the front door and go for it. You won't regret it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#E50914] border border-[#E50914] text-white font-['Roboto'] font-medium text-sm capitalize rounded px-8 py-3 hover:bg-red-700 transition-colors"
              >
                Purchase Theme
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-white text-white font-['Roboto'] font-medium text-sm capitalize rounded px-8 py-3 hover:bg-white hover:text-black transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
