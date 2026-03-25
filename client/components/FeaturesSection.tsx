const features = [
  {
    title: "WooCommerce payment Gateway",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9ba1ecb39efd71617070c8d5b6b7d301ab10b09a?width=738",
  },
  {
    title: "download any video or movie with one click",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b925db5d367517d7adcd7160817de0b2a4f625f3?width=773",
  },
  {
    title: "Continue Watching exactly where you left",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0b1d8c2c7f8dff4f1601282ba4254c3d69e96242?width=730",
  },
  {
    title: "Picture In Picture Mode support",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/639f9798800c4c2ce825d8480ae12d89d5f8a6da?width=773",
  },
  {
    title: "Restricted Content",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0b1d8c2c7f8dff4f1601282ba4254c3d69e96242?width=730",
  },
  {
    title: "Netflix Like Features",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b925db5d367517d7adcd7160817de0b2a4f625f3?width=773",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
          Amazing Features
        </span>
        <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize max-w-2xl">
          Premier Features That Rival Industry Giants
        </h2>
        <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-3xl leading-relaxed">
          Streamit boasts premier features that rival those of industry giants like Netflix &amp; Amazon Prime Video, establishing itself as the ultimate WordPress platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg p-6 flex flex-col items-center gap-5"
              style={{ background: "linear-gradient(180deg, #0D0D0D 15.69%, #000 100%)" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full rounded object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <h3 className="text-white font-['Roboto'] font-medium text-base text-center tracking-wide capitalize">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
