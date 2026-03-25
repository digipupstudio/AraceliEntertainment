const innerPages = [
  {
    title: "FAQ Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/add5e49824fc5822a897774be09e549844dd6e9c?width=840",
  },
  {
    title: "Contact Us",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2d90f32251520535c6aa56e9c9fe352d656e8885?width=840",
  },
  {
    title: "Cast Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7305fdb5cee6e561b0b73a279b002f4b22a3e196?width=840",
  },
  {
    title: "Cart Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/42482688f9ddf09aec838a6edfc67be0fca2626b?width=840",
  },
  {
    title: "Blog 3 Column",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/49c26b0f3a8001047e7d720e03edaf081866e4f6?width=840",
  },
  {
    title: "Blog Page",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/226e2aa374363ffc25f9434e0bfe902ac0713ad2?width=840",
  },
];

export default function InnerPagesSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top: text left + description right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
          <div className="flex-1">
            <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
              inner pages
            </span>
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize mt-3">
              Collection of creative
              <br />
              Inner Pages
            </h2>
          </div>
          <div className="flex-1 flex items-end">
            <p className="text-[#D1D0CF] font-['Roboto'] text-sm md:text-base leading-relaxed max-w-xl">
              Streamit – video streaming wordpress theme provides an extensive collection of pre-designed inner pages that are both functional and aesthetically appealing, making your website development process more efficient and versatile.
            </p>
          </div>
        </div>

        {/* Scrollable image strip */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ minWidth: "max-content" }}>
            {innerPages.map((page) => (
              <a
                key={page.title}
                href="#"
                className="flex-shrink-0 group"
              >
                <div className="overflow-hidden rounded-lg w-64 md:w-80">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-64 md:w-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "14/15" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
