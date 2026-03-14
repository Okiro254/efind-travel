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
    title: "Reaching the North Pole 14-Day Icebreaker Expedition",
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
    price: "259,900",
    duration: "14 Days / 13 Nights",
    badge: "Free Business Class Upgrade",
  },
  {
    title: "Antarctic Peninsula + Polar Camping 13 Days",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
    price: "39,785",
    originalPrice: "66,430",
    duration: "13 Days / 12 Nights",
    badge: "40% Off + Polar Activities",
  },
  {
    title:
      "Antarctic Peninsula + Elephant Island + Weddell Sea + Crossing the Circle 15 Days",
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
    price: "45,990",
    originalPrice: "76,650",
    duration: "15 Days / 14 Nights",
    badge: "40% Off Sale",
  },
  {
    title:
      "Antarctic Peninsula + Crossing the Antarctic Circle In-Depth 14 Days",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
    price: "49,640",
    originalPrice: "66,430",
    duration: "14 Days / 13 Nights",
    badge: "25% Off Sale",
  },
  {
    title: "Antarctic Peninsula + Crossing the Circle + Whale Watching 12 Days",
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
    price: "41,975",
    originalPrice: "56,210",
    duration: "12 Days / 11 Nights",
    badge: "25% Off Sale",
  },
];

export function AntarcticaSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Antarctica & Arctic Cruises"
          linkLabel="View all polar tours"
          linkHref="/polar"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tours.map((tour, i) => (
            <div
              key={tour.title}
              className="tour-card group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              data-ocid={`polar.item.${i + 1}`}
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
                  {tour.originalPrice && (
                    <span className="text-xs line-through opacity-70 ml-1">
                      ¥{tour.originalPrice}
                    </span>
                  )}
                  <span className="ml-1">¥{tour.price}</span>
                </div>
                {tour.badge && (
                  <div className="absolute top-3 left-3 bg-brand text-white text-xs px-2 py-1 rounded font-medium">
                    {tour.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-3 group-hover:text-brand transition-colors">
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
