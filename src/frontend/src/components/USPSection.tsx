import { Award, MapPin, Tag } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "20 Years of Custom Travel Experience",
    desc: "Since 2005, we've been crafting bespoke adventures starting in Africa",
  },
  {
    icon: MapPin,
    title: "Personally Scouted Routes",
    desc: "Every custom itinerary is personally surveyed by our specialists to deliver the best possible plan",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    desc: "Multi-channel sourcing ensures top quality while keeping prices in a reasonable range",
  },
];

export function USPSection() {
  return (
    <section className="bg-brand py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="flex items-start gap-4 text-white">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <usp.icon size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{usp.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
