const demos = [
  {
    title: "OTT Home Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/190a4155a016e9a198986b56db07e6e78ebad4f8?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/2e24e2398fc76924c56b5bb849f01e712cd8d91a?width=160",
  },
  {
    title: "main Home Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0448185b0261830066a383e331c4976e10b26495?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/b3d87c9d0450cba4a3adc7471b0325c4f07bf2f0?width=160",
  },
  {
    title: "Movies Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/238e077fed183679f437f58e2bf9f8362fd4a4b9?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/9f08eef6d9683698d69f1ccf12253ba752dd20ba?width=160",
  },
  {
    title: "TV Show Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1eda5afc4a0b0156121f591bd4e1a7d117d9efcc?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/32cf9d09220ebe18f02520aa15546169f27c49e1?width=160",
  },
  {
    title: "Videos Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/728246c5fe556d68cb56162f5ed981ebccb0b343?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/5b83ff3f343da63eb8e3ccc8bbbb55e9b1512121?width=160",
  },
  {
    title: "Merchandise Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8116edbeb20f1c2d13b03da9284778539596a56a?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/b5e6190823b4517aa8974c0759fd8bfd5dfabf4c?width=160",
  },
];

const DotRow = () => (
  <div className="flex gap-2 mb-4">
    {[0, 1, 2].map((i) => (
      <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#7A7A7A] inline-block" />
    ))}
  </div>
);

export default function HomeDemosSection() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background: "url('https://api.builder.io/api/v1/image/assets/TEMP/f0d898d26b682e551248acd6385fea48ba2a96e2?width=3810') lightgray center / cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
          Home Demos
        </span>
        <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
          Attention seeking home pages
        </h2>
        <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-xl">
          Get Scientifically Designed Home Pages To Improve User Experience And Content Consumption
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
          {demos.map((demo) => (
            <div key={demo.title} className="bg-[#0D0D0D] rounded-lg overflow-hidden p-7 flex flex-col gap-3 relative">
              <DotRow />
              <div className="relative w-full aspect-[512/380] rounded overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                />
                <a
                  href="#"
                  className="absolute bottom-[-16px] right-0 w-20 h-20 block hover:scale-105 transition-transform"
                >
                  <img src={demo.badge} alt="Preview" className="w-20 h-20 object-contain" />
                </a>
              </div>
              <div className="mt-6 text-left">
                <span className="text-white font-['Roboto'] font-medium text-base">{demo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
