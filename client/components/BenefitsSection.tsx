const benefits = [
  {
    title: "Regular Updates",
    subtitle: "Free Lifetime Updates And Many More",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251129579ee5a6efa104e8be98675976e19fe873?width=160",
  },
  {
    title: "Professional Support",
    subtitle: "Expert Support Services For Professionals",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bdde667fb0cd251db7ea68a5aa90656d9cf73ba?width=160",
  },
  {
    title: "Knowledgebase Docs",
    subtitle: "Explore Knowledge Base Documentation",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/391740a05132ce34f6219c47ae4fec25c4cdecf2?width=160",
  },
  {
    title: "FAQ & Video Tutorials",
    subtitle: "Comprehensive FAQ And Video Tutorials",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/81ea16d8a90a4afc410d36a9af18430bd26b08e1?width=160",
  },
  {
    title: "Extended License",
    subtitle: "Full Extended License For Commercial Use",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/251129579ee5a6efa104e8be98675976e19fe873?width=160",
  },
  {
    title: "RTL Support",
    subtitle: "Full Right-To-Left Language Support",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bdde667fb0cd251db7ea68a5aa90656d9cf73ba?width=160",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-[#E50914] italic font-medium text-base tracking-widest capitalize font-['Roboto']">
          Benifits For You
        </span>
        <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl leading-tight">
          Unloking Customer Benifits
        </h2>
        <p className="text-[#D1D0CF] font-['Roboto'] text-base md:text-lg max-w-2xl">
          At Our Core, We Are Dedicated To Providing Exceptional Customer Support That Ensures Your Satisfaction And Success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full mt-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#080808] flex flex-col items-center justify-center py-12 px-6 gap-4 border border-[#111]"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-white font-['Roboto'] font-medium text-xl capitalize">
                {benefit.title}
              </h3>
              <p className="text-[#D1D0CF] font-['Roboto'] font-medium text-sm capitalize">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
