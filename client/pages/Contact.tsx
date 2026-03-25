import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function Contact() {
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        service: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
          style={{
            background: "url('https://api.builder.io/api/v1/image/assets/TEMP/0d59375a7c9c2845944c6da7abd7324ffc647c48?width=3810') lightgray center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <h1 className="text-white font-['Roboto'] font-medium text-5xl md:text-6xl leading-tight capitalize">
              Get In Touch
            </h1>
            <p className="text-[#D1D0CF] font-['Roboto'] text-lg mt-4">
              Let's discuss how Araceli Entertainment can serve you
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#E50914] rounded-lg p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h2 className="text-white font-['Roboto'] font-medium text-2xl mb-4">
                    Thank You!
                  </h2>
                  <p className="text-[#D1D0CF] font-['Roboto'] text-lg">
                    We've received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-white font-['Roboto'] font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Kevin McLemore"
                      required
                      className="w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] placeholder-[#666] focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-['Roboto'] font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Kmhomerglen@gmail.com"
                      required
                      className="w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] placeholder-[#666] focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-['Roboto'] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(708) 982-6963"
                      required
                      className="w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] placeholder-[#666] focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-white font-['Roboto'] font-medium mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Araceli Entertainment"
                      required
                      className="w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] placeholder-[#666] focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  {/* Service Inquiry */}
                  <div>
                    <label className="block text-white font-['Roboto'] font-medium mb-2">
                      What service are you inquiring about?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] border border-[#333] rounded px-4 py-3 text-white font-['Roboto'] focus:outline-none focus:border-[#E50914] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="streaming">Streaming Service</option>
                      <option value="production">Production Services</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="advertising">Advertising & Sponsorship</option>
                      <option value="content">Content Distribution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-[#E50914] text-white font-['Roboto'] font-medium py-3 rounded hover:bg-red-700 transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0D0D0D] rounded-lg p-6 border border-[#333]">
                <h3 className="text-[#E50914] font-['Roboto'] font-medium text-lg mb-2">
                  Email
                </h3>
                <p className="text-[#D1D0CF] font-['Roboto']">
                  contact@araceli-entertainment.com
                </p>
              </div>

              <div className="bg-[#0D0D0D] rounded-lg p-6 border border-[#333]">
                <h3 className="text-[#E50914] font-['Roboto'] font-medium text-lg mb-2">
                  Location
                </h3>
                <p className="text-[#D1D0CF] font-['Roboto']">
                  Steger, Illinois
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
