const ecosystemProducts = [
  {
    title: "streamit WordPress",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7a1a7fab2bb55ccf9103f53e107834990cf2e2a4?width=787",
  },
  {
    title: "streamit HTML",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4a26a447c69b8020d2634f5f52b75699f7585ca6?width=787",
  },
  {
    title: "streamit WordPress Plugin",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a49b2fd68a1371c1a4887ccc07a003891250b41e?width=787",
  },
];

const plugins = [
  {
    name: "WooCommerce",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251129579ee5a6efa104e8be98675976e19fe873?width=160",
  },
  {
    name: "Advanced Custom Fields",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bdde667fb0cd251db7ea68a5aa90656d9cf73ba?width=160",
  },
  {
    name: "Contact Form 7",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ae76e4b1b0edd4aecb2dcf9102a0a1d501ec270e?width=120",
  },
  {
    name: "Elementor",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5ffb940c0391d8d85ed69c7c51dca7523f7cfff8?width=120",
  },
  {
    name: "HUSKY",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/99489f72351623d1416dadaf5a753de8740dae5a?width=120",
  },
  {
    name: "SCSS",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ab91306605c75aa9b7fd732d8eeacf29b0d455a7?width=117",
  },
];

export default function EcoSystemSection() {
  return (
    <>
      {/* Eco-System */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
            Streamit product Eco-System
          </span>
          <h2 className="text-white font-['Roboto'] font-medium text-3xl md:text-5xl leading-tight text-center">
            WordPress Theme + HTML Admin Template
            <br />
            + WordPress Plugin + Flutter App + Laravel
          </h2>
          <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-3xl">
            From WordPress theme to Mobile App, we've got everything you'll ever need to effortlessly manage your OTT streaming platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-4">
            {ecosystemProducts.map((product) => (
              <div key={product.title} className="bg-[#0D0D0D] rounded-lg p-6 flex flex-col items-center gap-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded object-cover"
                  style={{ aspectRatio: "16/8" }}
                />
                <h3 className="text-white font-['Roboto'] font-medium text-lg capitalize">{product.title}</h3>
                <a href="#" className="text-[#E50914] underline font-['Roboto'] text-sm hover:text-red-400 transition-colors">
                  Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Plugins */}
      <section className="w-full bg-black py-20 px-4 border-t border-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
            Compatible Plugins
          </span>
          <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
            Works With Popular Plugins
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-4">
            {plugins.map((plugin) => (
              <div key={plugin.name} className="bg-[#0D0D0D] rounded-lg p-6 flex flex-col items-center gap-5">
                <img src={plugin.image} alt={plugin.name} className="w-16 h-16 object-contain" />
                <span className="text-white font-['Roboto'] font-bold text-sm text-center tracking-wide">
                  {plugin.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
