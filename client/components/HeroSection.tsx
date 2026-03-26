import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#check-clip)">
      <path d="M12.5774 6.44299V6.99999C12.5766 8.29154 12.1584 9.54824 11.3851 10.5827C10.6118 11.6171 9.52478 12.3739 8.28628 12.7401C7.0477 13.1063 5.72396 13.0623 4.51245 12.6147C3.30094 12.1671 2.26657 11.3399 1.56361 10.2564C0.860645 9.17296 0.526758 7.89124 0.611738 6.60249C0.696717 5.31374 1.19601 4.087 2.03515 3.10519C2.87431 2.1234 4.00834 1.43915 5.26813 1.15452C6.52792 0.869889 7.84597 1.00011 9.02572 1.52577" stroke="#E50914" strokeWidth="1.64706" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.1762 1.60962L6.58799 8.19785L4.7912 6.40106" stroke="#E50914" strokeWidth="1.64706" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="check-clip">
        <rect width="14" height="14" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[670px] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
      aria-label="Hero"
      style={{
        background:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/0d59375a7c9c2845944c6da7abd7324ffc647c48?width=3810') lightgray center / cover no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center gap-4 max-w-5xl mx-auto w-full">
        <motion.p
          className="text-[#D1D0CF] font-semibold text-sm md:text-base tracking-wide font-['Roboto']"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Full Service Production Studio &amp; OTT Streaming Platform
        </motion.p>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/db00f326703ae3952ba6fb7fe723cec28ed36af6?width=700"
          alt=""
          className="w-48 md:w-64 h-px"
        />

        <motion.h1
          className="font-['Roboto'] font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight capitalize"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          Araceli Entertainment
        </motion.h1>

        <motion.h1
          className="font-['Roboto'] text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          <span className="font-medium">OTT </span>
          <span className="font-normal line-through italic">Platform</span>
          <span className="font-medium"> Creator</span>
        </motion.h1>

        <motion.p
          className="text-[#D1D0CF] text-base md:text-lg lg:text-xl tracking-wide max-w-3xl font-['Roboto'] px-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Blockbuster content delivered to your phone, tablet, and TV. Premium
          streaming for the nuclear family with edifying stories that matter.
        </motion.p>

        <motion.p
          className="text-white text-sm md:text-base font-['Roboto']"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
        >
          Experience authentic storytelling. –{" "}
          <a
            href="/contact"
            className="font-semibold underline text-white hover:text-[#E50914] transition-colors"
          >
            Join us today.
          </a>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          {["Original Content", "Multi-Platform Streaming", "Exceptional Value"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 md:gap-3 text-[#D1D0CF] font-['Roboto'] text-sm md:text-base"
              >
                <CheckIcon />
                <span>{item}</span>
              </div>
            )
          )}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] font-medium text-sm px-8 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Start Streaming
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center border border-white text-white font-['Roboto'] font-medium text-sm px-8 py-3 rounded hover:bg-white hover:text-black transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
