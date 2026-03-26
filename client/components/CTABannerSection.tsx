import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, inViewConfig } from "@/lib/animations";

export default function CTABannerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, inViewConfig);

  return (
    <section className="w-full bg-black py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="rounded-xl overflow-hidden relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 py-14 md:py-16 gap-10"
          style={{
            background:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/28d62158f3f67e2f33a9a0434c8bb788980ce67f?width=2667') lightgray center / cover no-repeat",
          }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col gap-5 max-w-2xl text-center lg:text-left">
            <h2 className="text-white font-['Roboto'] font-medium text-3xl md:text-4xl leading-tight capitalize">
              Experience Entertainment
              <br />
              Your Family Deserves
            </h2>
            <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg leading-relaxed max-w-lg">
              Join families enjoying premium content that edifies, entertains,
              and brings loved ones together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E50914] border border-[#E50914] text-white font-['Roboto'] font-medium text-sm capitalize rounded px-8 py-3 hover:bg-red-700 transition-colors"
              >
                Start Streaming
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center border border-white text-white font-['Roboto'] font-medium text-sm capitalize rounded px-8 py-3 hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
