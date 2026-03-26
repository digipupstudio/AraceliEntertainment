import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cardVariants, fadeUp, inViewConfig } from "@/lib/animations";

const demos = [
  {
    title: "Drama Series",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/190a4155a016e9a198986b56db07e6e78ebad4f8?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/2e24e2398fc76924c56b5bb849f01e712cd8d91a?width=160",
  },
  {
    title: "Family Features",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0448185b0261830066a383e331c4976e10b26495?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/b3d87c9d0450cba4a3adc7471b0325c4f07bf2f0?width=160",
  },
  {
    title: "Faith-Based Films",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/238e077fed183679f437f58e2bf9f8362fd4a4b9?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/9f08eef6d9683698d69f1ccf12253ba752dd20ba?width=160",
  },
  {
    title: "Comedy Series",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1eda5afc4a0b0156121f591bd4e1a7d117d9efcc?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/32cf9d09220ebe18f02520aa15546169f27c49e1?width=160",
  },
  {
    title: "Documentary Series",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/728246c5fe556d68cb56162f5ed981ebccb0b343?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/5b83ff3f343da63eb8e3ccc8bbbb55e9b1512121?width=160",
  },
  {
    title: "Exclusive Originals",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8116edbeb20f1c2d13b03da9284778539596a56a?width=1023",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/b5e6190823b4517aa8974c0759fd8bfd5dfabf4c?width=160",
  },
];

const DotRow = () => (
  <div className="flex gap-2 mb-4" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#7A7A7A] inline-block" />
    ))}
  </div>
);

export default function HomeDemosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, inViewConfig);

  return (
    <section
      className="w-full py-20 px-4 overflow-hidden"
      ref={ref}
      aria-labelledby="content-library-heading"
      style={{
        background:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/f0d898d26b682e551248acd6385fea48ba2a96e2?width=3810') lightgray center / cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.span
          className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          Content Library
        </motion.span>

        <motion.h2
          id="content-library-heading"
          className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
        >
          Diverse Content For Every Mood
        </motion.h2>

        <motion.p
          className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-xl"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
        >
          From dramatic features to family comedies, discover stories that
          resonate with your values
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              className="bg-[#0D0D0D] rounded-lg overflow-hidden p-7 flex flex-col gap-3 relative hover:border hover:border-[#E50914]/30 transition-all"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <DotRow />
              <div className="relative w-full aspect-[512/380] rounded overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <a
                  href="#"
                  className="absolute bottom-[-16px] right-0 w-20 h-20 block hover:scale-105 transition-transform"
                  aria-label={`Preview ${demo.title}`}
                >
                  <img
                    src={demo.badge}
                    alt=""
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="mt-6 text-left">
                <span className="text-white font-['Roboto'] font-medium text-base">
                  {demo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
