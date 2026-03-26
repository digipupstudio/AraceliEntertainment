import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import { fadeUp, cardVariants, inViewConfig } from "@/lib/animations";

const teamMembers = [
  {
    role: "President",
    name: "Kevin McLemore",
    bio: "Vision and leadership guide Araceli Entertainment toward excellence in content production and streaming innovation.",
  },
  {
    role: "Chief Marketing Officer",
    name: "CMO",
    bio: "Strategic marketing vision ensures our stories reach audiences who identify with authentic, edifying narratives.",
  },
  {
    role: "Head of Human Resources",
    name: "HR Director",
    bio: "Building and nurturing the talented team that creates exceptional entertainment experiences.",
  },
  {
    role: "VP Production",
    name: "VP Production",
    bio: "Overseeing the creative process from concept to delivery, ensuring blockbuster quality across all projects.",
  },
];

const values = [
  {
    title: "Authenticity",
    description: "We tell stories that matter, reflecting the values and experiences of the nuclear family.",
  },
  {
    title: "Excellence",
    description: "Blockbuster quality production paired with exceptional streaming technology.",
  },
  {
    title: "Value",
    description: "Premium content at competitive prices with more features than competing services.",
  },
];

function AnimatedSection({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, inViewConfig);
  return (
    <motion.section
      ref={ref}
      id={id}
      className="w-full bg-black py-20 px-4 border-t border-[#111]"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About Us | Araceli Entertainment";
  }, []);

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, inViewConfig);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        {/* Hero */}
        <motion.section
          className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/0d59375a7c9c2845944c6da7abd7324ffc647c48?width=3810') lightgray center / cover no-repeat",
          }}
          aria-label="About Us Hero"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <motion.h1
              className="text-white font-['Roboto'] font-medium text-4xl sm:text-5xl md:text-6xl leading-tight capitalize"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              About Araceli
              <br />
              Entertainment
            </motion.h1>
          </div>
        </motion.section>

        {/* Mission Statement */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#E50914] rounded-lg p-10 md:p-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-[#E50914] font-['Roboto'] font-medium text-2xl md:text-3xl mb-6 capitalize">
                Our Mission
              </h2>
              <p className="text-white font-['Roboto'] text-base md:text-lg leading-relaxed mb-6">
                Araceli Entertainment is a full service Production Studio and OTT Streaming platform entering the market addressing the needs of customers who support and identify with the Nuclear family, and seek non-biased content that edifies and tells a story the majority identifies with.
              </p>
              <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg leading-relaxed">
                We offer blockbuster content delivered to your phone, tablet, and TV from the same name brand studios cheaper and with greater variety and features than any other service currently available.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full bg-black py-20 px-4 border-t border-[#111]" ref={teamRef} aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              id="team-heading"
              className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl text-center mb-12 capitalize"
              variants={fadeUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              custom={0}
            >
              Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-6"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={teamInView ? "visible" : "hidden"}
                >
                  {/* Portrait placeholder */}
                  <div className="w-full aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-[#E50914] flex flex-col items-center justify-center gap-2 p-4">
                    <div className="w-20 h-20 rounded-full bg-[#E50914]/10 border-2 border-[#E50914]/40 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#E50914]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-[#E50914] font-['Roboto'] font-medium text-xs text-center px-2">
                      {member.role}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-['Roboto'] font-medium text-lg">
                      {member.role}
                    </h3>
                    <p className="text-[#D1D0CF] font-['Roboto'] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#333]">
                      <p className="text-[#888] font-['Roboto'] italic text-center py-3 min-h-[80px] text-sm leading-relaxed">
                        [Personal narrative coming soon]
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <AnimatedSection id="values">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white font-['Roboto'] font-medium text-4xl text-center mb-12 capitalize" id="values-heading">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-[#0D0D0D] rounded-lg p-8 border border-[#E50914]/30 hover:border-[#E50914] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <h3 className="text-[#E50914] font-['Roboto'] font-medium text-xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#D1D0CF] font-['Roboto'] text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
