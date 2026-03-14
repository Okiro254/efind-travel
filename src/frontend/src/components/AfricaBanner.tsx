export function AfricaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src="/assets/generated/hero-africa.dim_1800x900.jpg"
        alt="African continent"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
          Africa Multi-Country Group Tours
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Fixed Departure Dates — Great Group Prices!
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white/80 text-sm mb-6">
          <span>Travel with adventurers from around the world</span>
          <span className="hidden md:block text-gold">|</span>
          <span>Up to 57 days traversing the African continent</span>
          <span className="hidden md:block text-gold">|</span>
          <span>
            Includes Kenya | Tanzania | Uganda | Malawi | Zambia | Zimbabwe |
            Botswana | Namibia | South Africa & more
          </span>
        </div>
        <a
          href="/africa-sic"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-bold px-8 py-3 rounded transition-colors"
          data-ocid="africa.primary_button"
        >
          View Details
        </a>
      </div>
    </section>
  );
}
