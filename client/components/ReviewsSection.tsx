import { useEffect, useRef, useState } from "react";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={direction === "right" ? "M5 12H19M15 7L20 12L15 17" : "M19 12H5M9 7L4 12L9 17"}
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const reviewImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/bb7607965a8364ef2baf8cdf135b4cc5385e8c95?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/89576c36bf7d7c50f9b0d0accd8443d759f2a757?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/af08077e0668a3903f7466974ad0d5a3a178e817?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/f08db91a36f618f7650e739828f6a98602ccbc37?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/39f09aa068c1a7ed6799e1e75d2c98e27f83efcc?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/0ff4c968a5e33fd272b761c05e4cd57d62e78d5d?width=824",
];

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 430;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!scrollContainerRef.current || !isAutoScroll) return;

    const autoScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 430, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 3500);
    return () => clearInterval(interval);
  }, [isAutoScroll]);

  return (
    <section className="w-full bg-black py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => handleScroll("left")}
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(true)}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white transition-colors"
            aria-label="Scroll reviews left"
          >
            <ArrowIcon direction="left" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto pb-2 scroll-smooth"
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(true)}
          >
            <div className="flex gap-5" style={{ minWidth: "max-content" }}>
              {reviewImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Review screenshot ${i + 1}`}
                  className="rounded-lg object-cover flex-shrink-0"
                  style={{ width: "412px", height: "291px", aspectRatio: "99/70" }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => handleScroll("right")}
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(true)}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white transition-colors"
            aria-label="Scroll reviews right"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 hover:bg-red-700 transition-colors mt-4"
        >
          Read More
        </a>
      </div>
    </section>
  );
}
