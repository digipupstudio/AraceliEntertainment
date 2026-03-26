import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import { fadeUp } from "@/lib/animations";

const inputClass =
  "w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] placeholder-[#555] focus:outline-none focus:border-[#E50914] transition-colors text-sm md:text-base";

const labelClass = "block text-white font-['Roboto'] font-medium mb-2 text-sm md:text-base";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Araceli Entertainment";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", businessName: "", service: "" });
      setSubmitted(false);
    }, 4000);
  };

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
          aria-label="Contact Hero"
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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg mt-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              Let's discuss how Araceli Entertainment can serve you
            </motion.p>
          </div>
        </motion.section>

        {/* Form + Info */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Form Card */}
            <motion.div
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#E50914] rounded-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-[#E50914]/10 border-2 border-[#E50914] flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#E50914]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-white font-['Roboto'] font-medium text-2xl mb-4">
                      Thank You!
                    </h2>
                    <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                      We've received your inquiry and will be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label htmlFor="fullName" className={labelClass}>Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Kevin McLemore"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. you@example.com"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (708) 982-6963"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className={labelClass}>Business Name</label>
                      <input
                        id="businessName"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Araceli Entertainment"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className={labelClass}>What service are you inquiring about?</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        <option value="streaming">Streaming Service</option>
                        <option value="production">Production Services</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="advertising">Advertising &amp; Sponsorship</option>
                        <option value="content">Content Distribution</option>
                        <option value="events">Events &amp; Galas</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#E50914] text-white font-['Roboto'] font-medium py-3 rounded hover:bg-red-700 active:scale-95 transition-all"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { label: "Phone", value: "(708) 982-6963", href: "tel:+17089826963" },
                { label: "Email", value: "Kmhomerglen@gmail.com", href: "mailto:Kmhomerglen@gmail.com" },
                { label: "Location", value: "Steger, Illinois", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="bg-[#0D0D0D] rounded-lg p-6 border border-[#333] text-center">
                  <h3 className="text-[#E50914] font-['Roboto'] font-medium text-sm uppercase tracking-wider mb-2">
                    {label}
                  </h3>
                  {href ? (
                    <a href={href} className="text-[#D1D0CF] font-['Roboto'] text-sm hover:text-white transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#D1D0CF] font-['Roboto'] text-sm">{value}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
