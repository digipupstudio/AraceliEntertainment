const RedCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
    <path d="M13.9449 8.12146L5.8809 16.0415C5.74623 16.174 5.5649 16.2482 5.376 16.2482C5.1871 16.2482 5.00576 16.174 4.8711 16.0415L1.4151 12.6476C1.34767 12.5813 1.29396 12.5024 1.25704 12.4153C1.22012 12.3282 1.20071 12.2347 1.19992 12.1401C1.19912 12.0456 1.21696 11.9518 1.25242 11.8641C1.28787 11.7765 1.34024 11.6966 1.40655 11.6292C1.47285 11.5617 1.55179 11.5081 1.63885 11.4711C1.72591 11.4343 1.81939 11.4149 1.91395 11.414C2.00852 11.4132 2.10231 11.4311 2.18998 11.4665C2.27765 11.5019 2.35747 11.5544 2.4249 11.6207L5.376 14.5186L12.936 7.09367C13.0723 6.95976 13.2562 6.88547 13.4473 6.88716C13.5419 6.888 13.6354 6.90747 13.7224 6.94444C13.8095 6.98142 13.8885 7.03518 13.9548 7.10266C14.0211 7.17015 14.0735 7.25003 14.1089 7.33776C14.1444 7.42548 14.1621 7.51932 14.1613 7.61393C14.1605 7.70853 14.141 7.80204 14.104 7.88913C14.0671 7.97622 14.0133 8.05516 13.9458 8.12146H13.9449ZM22.5939 7.10266C22.5277 7.03513 22.4486 6.98132 22.3616 6.94431C22.2745 6.9073 22.181 6.88783 22.0863 6.88699C21.9918 6.88616 21.8979 6.90397 21.8102 6.93944C21.7224 6.9749 21.6425 7.02731 21.5751 7.09367L14.0151 14.5186L12.3204 12.8536C12.1841 12.7199 12.0002 12.6457 11.8093 12.6475C11.6183 12.6492 11.4358 12.7268 11.3021 12.8631C11.1683 12.9994 11.0941 13.1833 11.0959 13.3742C11.0976 13.5653 11.1752 13.7477 11.3115 13.8815L13.5102 16.0415C13.6449 16.174 13.8262 16.2482 14.0151 16.2482C14.204 16.2482 14.3853 16.174 14.52 16.0415L22.584 8.12146C22.6516 8.05525 22.7054 7.97636 22.7426 7.88931C22.7797 7.80225 22.7992 7.70874 22.8001 7.61411C22.8011 7.5195 22.7833 7.42563 22.7479 7.33786C22.7126 7.25011 22.6602 7.17018 22.5939 7.10266Z" fill="#E50914"/>
  </svg>
);

export default function ElementorSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 flex flex-col gap-5">
          <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
            elementor
          </span>
          <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize">
            elementor the page
            <br />
            builder
          </h2>
          <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-lg leading-relaxed">
            Our valued customer's requested Elementor support, the premier frontend drag &amp; drop page builder, for seamless on-site creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-2">
            {[
              "Drag and Drop Editor",
              "Motion Effects",
              "No Coding Required",
              "Responsive Controls",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-3 text-white font-['Roboto'] text-base capitalize">
                <RedCheckIcon />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/18f6b874e92d0e31fe4118cf0619cac76ad80ac9?width=1220"
            alt="Elementor Page Builder"
            className="w-full max-w-[610px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
