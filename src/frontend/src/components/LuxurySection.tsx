import { Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tours = [
  {
    title: "Serengeti Bushtops Camp Luxury Tent Package",
    image: "/assets/generated/tour-luxury-camp.dim_700x500.jpg",
    price: "238,000",
    duration: "7 Days / 5 Nights",
    badge: "Panoramic Mobile Camp",
  },
  {
    title: "Roving Bushtops Luxury Tent Package",
    image: "/assets/generated/tour-luxury-camp.dim_700x500.jpg",
    price: "191,314",
    duration: "7 Days / 5 Nights",
    badge: "On the Great Migration Path",
  },
  {
    title: "Mara Bushtops Luxury Villa Package",
    image: "/assets/generated/tour-luxury-camp.dim_700x500.jpg",
    price: "188,000",
    duration: "7 Days / 5 Nights",
    badge: "Steps from the Mara River",
  },
];

export function LuxurySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <p className="text-sm text-gold font-medium mb-1">
            Create an exclusive escape for you and your family
          </p>
          <SectionHeader title="Holiday Packages" />
          <p className="text-sm text-gray-500 -mt-4">
            East African savanna, South American jungle, or a secluded island
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tours.map((tour, i) => (
            <div
              key={tour.title}
              className="tour-card group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              data-ocid={`luxury.item.${i + 1}`}
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
