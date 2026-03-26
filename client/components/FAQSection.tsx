import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeUp, inViewConfig } from "@/lib/animations";

const faqs = [
  {
    q: "What is Araceli Entertainment?",
    a: "Araceli Entertainment is a full-service Production Studio and OTT Streaming platform that delivers premium, family-focused content directly to your phone, tablet, and TV.",
  },
  {
    q: "How does Araceli Entertainment differ from other streaming services?",
    a: "We offer blockbuster content from name-brand studios at lower prices, with greater variety and more features than any other service — and with a specific focus on edifying, family-centered storytelling.",
  },
  {
    q: "What devices can I stream on?",
    a: "You can stream on smartphones, tablets, smart TVs, laptops, and desktop computers. Our platform is designed for a seamless experience across all your devices.",
  },
  {
    q: "What type of content does Araceli Entertainment offer?",
    a: "We offer drama series, family features, faith-based films, comedies, documentary series, and exclusive original productions — all curated for audiences who value authentic storytelling.",
  },
  {
    q: "How can I contact Araceli Entertainment?",
    a: "You can reach us through our Contact page, by email at contact@araceli-entertainment.com, or by phone at (708) 982-6963.",
  },
  {
    q: "Does Araceli Entertainment produce original content?",
    a: "Yes! We produce original films and series in-house through our professional production studio, in addition to licensing content from name-brand studios.",
  },
  {
    q: "Can I download content to watch offline?",
    a: "Yes, subscribers can download episodes and films to watch offline at any time — perfect for travel or areas with limited internet connectivity.",
  },
  {
    q: "Is there a free trial available?",
    a: "Please contact us through our Contact page or reach out directly to learn about our current promotional offers and trial periods.",
  },
  {
    q: "How do I attend events like the Pure Imagination Gala?",
    a: "Event details and RSVP information are posted in our News section. You can also contact us directly to inquire about upcoming events and how to attend.",
  },
  {
    q: "What sets Araceli Entertainment's production quality apart?",
    a: "Our productions are helmed by experienced industry professionals who bring cinematic quality to every project. We believe great storytelling deserves great production values.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, inViewConfig);

  return (
    <section className="w-full bg-black py-20 px-4" ref={ref} aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <motion.span
          className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          FAQ
        </motion.span>

        <motion.h2
          id="faq-heading"
          className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="w-full flex flex-col gap-0 border border-[#262525] rounded overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#262525] last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 bg-[#141314] hover:bg-[#1a181a] transition-colors text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-['Roboto'] text-sm md:text-base lg:text-lg font-normal">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 bg-black rounded flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="block w-4 h-4"
                    >
                      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9941 8.4375H9.5625V3.00586C9.5625 2.85352 9.50684 2.72168 9.39551 2.61035C9.28418 2.49902 9.15234 2.44336 9 2.44336C8.84766 2.44336 8.71582 2.49902 8.60449 2.61035C8.49316 2.72168 8.4375 2.85352 8.4375 3.00586V8.4375H3.00586C2.85352 8.4375 2.72168 8.49316 2.61035 8.60449C2.49902 8.71582 2.44336 8.84766 2.44336 9C2.44336 9.15234 2.49902 9.28418 2.61035 9.39551C2.72168 9.50684 2.85352 9.5625 3.00586 9.5625H8.4375V14.9941C8.4375 15.1465 8.49316 15.2783 8.60449 15.3896C8.71582 15.501 8.84766 15.5566 9 15.5566C9.15234 15.5566 9.28418 15.501 9.39551 15.3896C9.50684 15.2783 9.5625 15.1465 9.5625 14.9941V9.5625H14.9941C15.1465 9.5625 15.2783 9.50684 15.3896 9.39551C15.501 9.28418 15.5566 9.15234 15.5566 9C15.5566 8.84766 15.501 8.71582 15.3896 8.60449C15.2783 8.49316 15.1465 8.4375 14.9941 8.4375Z" fill="white"/>
                      </svg>
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#090809] px-6 md:px-8 py-5">
                        <p className="text-[#D1D0CF] font-['Roboto'] text-sm md:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
