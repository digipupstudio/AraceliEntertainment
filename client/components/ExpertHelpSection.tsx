import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, inViewConfig } from "@/lib/animations";

export default function ExpertHelpSection() {
  const ref = useRef(null);
  const inView = useInView(ref, inViewConfig);

  return (
    <section className="w-full bg-black py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#0D0D0D] rounded-xl p-10 md:p-16 flex flex-col items-center text-center gap-8 border border-[#E50914]/20"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <h2 className="text-white font-['Roboto'] font-normal text-3xl md:text-5xl leading-tight max-w-3xl">
            Ready to experience entertainment your family deserves?
          </h2>
          <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-2xl">
            Join Araceli Entertainment today and access premium, family-centered content on all your devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-8 py-3 hover:bg-red-700 transition-colors"
            >
              Start Streaming
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center border border-white text-white font-['Roboto'] font-medium text-sm capitalize rounded px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
