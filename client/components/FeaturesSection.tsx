import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Secure Payment Gateway",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9ba1ecb39efd71617070c8d5b6b7d301ab10b09a?width=738",
  },
  {
    title: "Download Any Video With One Click",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b925db5d367517d7adcd7160817de0b2a4f625f3?width=773",
  },
  {
    title: "Continue Watching Where You Left Off",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0b1d8c2c7f8dff4f1601282ba4254c3d69e96242?width=730",
  },
  {
    title: "Picture In Picture Mode",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/639f9798800c4c2ce825d8480ae12d89d5f8a6da?width=773",
  },
  {
    title: "Family-Safe Content Filters",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0b1d8c2c7f8dff4f1601282ba4254c3d69e96242?width=730",
  },
  {
    title: "Premium Streaming Quality",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b925db5d367517d7adcd7160817de0b2a4f625f3?width=773",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-black py-20 px-4" ref={ref} aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.span
          className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Platform Features
        </motion.span>

        <motion.h2
          id="features-heading"
          className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Premier Features That Rival Industry Giants
        </motion.h2>

        <motion.p
          className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Araceli Entertainment delivers features that rival industry giants like
          Netflix &amp; Amazon Prime Video — at a fraction of the cost, with even
          greater variety and family-first values.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-lg p-6 flex flex-col items-center gap-5 hover:border hover:border-[#E50914]/30 transition-all"
              style={{ background: "linear-gradient(180deg, #0D0D0D 15.69%, #000 100%)" }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full rounded object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
              <h3 className="text-white font-['Roboto'] font-medium text-base text-center tracking-wide capitalize">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
