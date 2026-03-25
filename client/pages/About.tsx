import Navigation from "@/components/Navigation";

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

export default function About() {
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
              About Araceli
              <br />
              Entertainment
            </h1>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#E50914] rounded-lg p-12 md:p-16">
              <h2 className="text-[#E50914] font-['Roboto'] font-medium text-2xl md:text-3xl mb-6 capitalize">
                Our Mission
              </h2>
              <p className="text-white font-['Roboto'] text-lg leading-relaxed mb-6">
                Araceli Entertainment is a full service Production Studio and OTT Streaming platform entering the market addressing the needs of customers who support and identify with the Nuclear family, and seek non-biased content that edifies and tells a story the majority identifies with.
              </p>
              <p className="text-[#D1D0CF] font-['Roboto'] text-lg leading-relaxed">
                We offer blockbuster content delivered to your phone, tablet, and TV from the same name brand studios cheaper and with greater variety and features than any other service currently available.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full bg-black py-20 px-4 border-t border-[#111]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white font-['Roboto'] font-medium text-4xl md:text-5xl text-center mb-12 capitalize">
              Leadership Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col gap-6">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-[#E50914] flex items-center justify-center">
                    <span className="text-[#E50914] font-['Roboto'] font-medium text-sm text-center px-4">
                      {member.role}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-['Roboto'] font-medium text-xl">
                      {member.role}
                    </h3>
                    <p className="text-[#D1D0CF] font-['Roboto'] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#333]">
                      <p className="text-white font-['Roboto'] font-medium italic text-center py-3 min-h-[80px] text-sm leading-relaxed">
                        [Team member narrative and vision statement will be added here]
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full bg-black py-20 px-4 border-t border-[#111]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white font-['Roboto'] font-medium text-4xl text-center mb-12 capitalize">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((value, i) => (
                <div key={i} className="bg-[#0D0D0D] rounded-lg p-8 border border-[#E50914]/30">
                  <h3 className="text-[#E50914] font-['Roboto'] font-medium text-xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#D1D0CF] font-['Roboto'] text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
