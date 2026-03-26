import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Original Content",
    subtitle: "Premium productions created exclusively for our platform",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251129579ee5a6efa104e8be98675976e19fe873?width=160",
  },
  {
    title: "Multi-Device Streaming",
    subtitle: "Watch on phone, tablet, TV, and more simultaneously",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bdde667fb0cd251db7ea68a5aa90656d9cf73ba?width=160",
  },
  {
    title: "Family-Focused Content",
    subtitle: "Stories and values the nuclear family identifies with",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/391740a05132ce34f6219c47ae4fec25c4cdecf2?width=160",
  },
  {
    title: "Exceptional Value",
    subtitle: "Premium content at prices lower than competitors",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/81ea16d8a90a4afc410d36a9af18430bd26b08e1?width=160",
  },
  {
    title: "Offline Download",
    subtitle: "Download episodes to watch anywhere, anytime",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251129579ee5a6efa104e8be98675976e19fe873?width=160",
  },
  {
    title: "No Ads Option",
    subtitle: "Ad-free viewing for an uninterrupted experience",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bdde667fb0cd251db7ea68a5aa90656d9cf73ba?width=160",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-black py-20 px-4" ref={ref} aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.span
          className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Araceli
        </motion.span>

        <motion.h2
          id="benefits-heading"
          className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Premium Features Designed For You
        </motion.h2>

        <motion.p
          className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover why families are choosing Araceli Entertainment for better
          stories, better value, and better entertainment.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full mt-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="bg-[#080808] flex flex-col items-center justify-center py-12 px-6 gap-4 border border-[#111] hover:border-[#E50914]/40 transition-colors"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-20 h-20 object-contain"
                loading="lazy"
              />
              <h3 className="text-white font-['Roboto'] font-medium text-xl capitalize">
                {benefit.title}
              </h3>
              <p className="text-[#D1D0CF] font-['Roboto'] font-medium text-sm capitalize">
                {benefit.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
