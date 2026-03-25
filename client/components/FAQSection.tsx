import { useState } from "react";

const faqs = [
  "Can I see a demo of the Streamit theme before purchasing?",
  "Will i get installation service with Extended license on Envato?",
  "I've already purchased Streamit. Can I still schedule a call?",
  "What is causing difficulties for me with the import of the Streamit demo?",
  "What happens on the demo call?",
  "How can I modify or replace the logo of the Streamit theme?",
  "Do I need to prepare anything for the call?",
  "How can I modify or replace the loader of the Streamit theme?",
  "Can I customize the features or packages based on my OTT business needs?",
  "How can I translate the data related to my OTT theme?",
  "Is it possible to incorporate alternative payment gateways into your OTT streaming theme?",
  "What causes the prolonged loading time of your Video streaming theme - Streamit? Why does it exhibit sluggish performance?",
  "What causes the occurrence of warnings and fatal errors in my system?",
  "What causes challenges during the Streamit theme setup process, and what steps should be taken to fulfill the initial requirements of the theme setup wizard?",
  "How to modify the OTT streaming theme's homepage?",
  "Why does the structure of my page become disrupted every time I update your Streamit theme?",
];

const firstFaqAnswer = (
  <span className="text-[#D1D0CF] font-['Roboto'] text-sm leading-relaxed">
    Yes, absolutely! You can{" "}
    <a href="#" className="text-[#43B1FF] underline hover:text-blue-300 transition-colors">
      book a free call
    </a>{" "}
    with our OTT expert to get a full walkthrough of how Streamit works before making a decision.
  </span>
);

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
          FAQ
        </span>
        <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight capitalize text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full flex flex-col gap-0 border border-[#262525] rounded">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#262525] last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#141314] hover:bg-[#1a181a] transition-colors text-left gap-4"
                >
                  <span className="text-white font-['Roboto'] text-base md:text-lg font-normal">
                    {faq}
                  </span>
                  <span className="flex-shrink-0 w-7 h-8 bg-black rounded flex items-center justify-center">
                    {isOpen ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2188 9.28125H4.78125C4.69922 9.28125 4.63184 9.25488 4.5791 9.20215C4.52637 9.14941 4.5 9.08203 4.5 9C4.5 8.91797 4.52637 8.85059 4.5791 8.79785C4.63184 8.74512 4.69922 8.71875 4.78125 8.71875H13.2188C13.3008 8.71875 13.3682 8.74512 13.4209 8.79785C13.4736 8.85059 13.5 8.91797 13.5 9C13.5 9.08203 13.4736 9.14941 13.4209 9.20215C13.3682 9.25488 13.3008 9.28125 13.2188 9.28125Z" fill="white"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9941 8.4375H9.5625V3.00586C9.5625 2.85352 9.50684 2.72168 9.39551 2.61035C9.28418 2.49902 9.15234 2.44336 9 2.44336C8.84766 2.44336 8.71582 2.49902 8.60449 2.61035C8.49316 2.72168 8.4375 2.85352 8.4375 3.00586V8.4375H3.00586C2.85352 8.4375 2.72168 8.49316 2.61035 8.60449C2.49902 8.71582 2.44336 8.84766 2.44336 9C2.44336 9.15234 2.49902 9.28418 2.61035 9.39551C2.72168 9.50684 2.85352 9.5625 3.00586 9.5625H8.4375V14.9941C8.4375 15.1465 8.49316 15.2783 8.60449 15.3896C8.71582 15.501 8.84766 15.5566 9 15.5566C9.15234 15.5566 9.28418 15.501 9.39551 15.3896C9.50684 15.2783 9.5625 15.1465 9.5625 14.9941V9.5625H14.9941C15.1465 9.5625 15.2783 9.50684 15.3896 9.39551C15.501 9.28418 15.5566 9.15234 15.5566 9C15.5566 8.84766 15.501 8.71582 15.3896 8.60449C15.2783 8.49316 15.1465 8.4375 14.9941 8.4375Z" fill="white"/>
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="bg-[#090809] px-8 py-5">
                    {i === 0 ? firstFaqAnswer : (
                      <p className="text-[#D1D0CF] font-['Roboto'] text-sm leading-relaxed">
                        Please contact our support team for detailed information about this topic. We're happy to assist you with any questions you may have.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
