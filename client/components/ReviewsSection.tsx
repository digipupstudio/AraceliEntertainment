const reviewImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/bb7607965a8364ef2baf8cdf135b4cc5385e8c95?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/89576c36bf7d7c50f9b0d0accd8443d759f2a757?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/af08077e0668a3903f7466974ad0d5a3a178e817?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/f08db91a36f618f7650e739828f6a98602ccbc37?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/39f09aa068c1a7ed6799e1e75d2c98e27f83efcc?width=824",
  "https://api.builder.io/api/v1/image/assets/TEMP/0ff4c968a5e33fd272b761c05e4cd57d62e78d5d?width=824",
];

export default function ReviewsSection() {
  return (
    <section className="w-full bg-black py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex gap-5" style={{ minWidth: "max-content" }}>
            {reviewImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Review screenshot ${i + 1}`}
                className="rounded-lg object-cover flex-shrink-0"
                style={{ width: "412px", height: "291px", aspectRatio: "99/70" }}
              />
            ))}
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center bg-[#E50914] text-white font-['Roboto'] text-sm capitalize rounded px-7 py-3 hover:bg-red-700 transition-colors mt-4"
        >
          Read More
        </a>
      </div>
    </section>
  );
}
