import { Search } from "lucide-react";
import { useState } from "react";

const destinations = [
  "Polar - Arctic",
  "Polar - Antarctica",
  "Europe - Italy",
  "Europe - France",
  "Europe - Switzerland",
  "Americas - Cuba",
  "Americas - Mexico",
  "Americas - Brazil",
  "Americas - Chile",
  "Americas - Peru",
  "Americas - Argentina",
  "Africa - Uganda",
  "Africa - Kilimanjaro",
  "Africa - South Africa",
  "Africa - Tanzania",
  "Africa - Namibia",
  "Africa - Kenya",
  "Africa - Madagascar",
];

const durations = ["1 Day", "2-4 Days", "5-7 Days", "7+ Days"];

export function HeroSection() {
  const [dest, setDest] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <section className="relative h-[580px] md:h-[680px] flex items-center justify-center overflow-hidden">
      <img
        src="/assets/generated/hero-africa.dim_1800x900.jpg"
        alt="African savanna landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg tracking-wide">
          Explore a Diverse World — We'll Take You There!
        </h1>
        <p className="text-base md:text-lg text-white/85 mb-8 font-light">
          Explore the world's best destinations with us and enjoy the
          difference.
        </p>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <select
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            className="flex-1 bg-white text-gray-700 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            data-ocid="search.select"
          >
            <option value="">Destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="flex-1 bg-white text-gray-700 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            data-ocid="search.select"
          >
            <option value="">Duration</option>
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-2.5 rounded flex items-center gap-2 transition-colors whitespace-nowrap"
            data-ocid="search.primary_button"
          >
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
