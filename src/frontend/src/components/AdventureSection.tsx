import { Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tours = [
  {
    title: "Magellan Explorer Antarctica Classic 8-Day Voyage",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
    price: "94,033",
    duration: "8 Days / 7 Nights",
    badge: "Air-Sea Best Seller",
  },
  {
    title: "Tour du Mont Blanc 8-Day Trekking (France + Switzerland + Italy)",
    image: "/assets/generated/tour-montblanc.dim_700x500.jpg",
    price: "19,250",
    duration: "8 Days / 7 Nights",
    badge: "World's Premier Trekking Route",
  },
  {
    title: "Direct Fly Antarctica Ocean Nova 8-Day Cruise",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
    price: "80,097",
    duration: "8 Days / 7 Nights",
    badge: "Best Value Air-Sea Combo",
  },
  {
    title: "Magellan Explorer Crossing the Antarctic Circle 10-Day Voyage",
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
    price: "132,357",
    duration: "10 Days / 9 Nights",
    badge: "New Ship + Cross the Circle",
  },
  {
    title: "Marangu Route (Coca-Cola Route) 7-Day Kilimanjaro Summit",
    image: "/assets/generated/dest-kilimanjaro.dim_700x500.jpg",
    price: "14,064",
    duration: "7 Days / 6 Nights",
    badge: "Full Hut Accommodation",
  },
  {
    title: "Southern Africa Adventure 43 Days – Overland Truck Journey",
    image: "/assets/generated/dest-namibia.dim_700x500.jpg",
    price: "52,011",
    duration: "43 Days / 42 Nights",
    badge: "The Coolest Way to Explore Africa",
  },
];

export function AdventureSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Adventure Tours"
          linkLabel="View all adventure tours"
          linkHref="/adventures"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tours.map((tour, i) => (
            <div
              key={tour.title}
              className="tour-card group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              data-ocid={`adventure.item.${i + 1}`}
            >
              <div className="relative overflow-hidden">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="tour-card-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 bg-gold text-white text-sm font-bold px-2.5 py-1 rounded">
                  <span className="text-xs font-normal">From</span>
                  <span className="ml-1">¥{tour.price}</span>
                </div>
                {tour.badge && (
                  <div className="absolute top-3 left-3 bg-brand text-white text-xs px-2 py-1 rounded font-medium max-w-[70%]">
                    {tour.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-3 group-hover:text-brand transition-colors line-clamp-2">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock size={11} className="text-gold" />
                  <span>{tour.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
