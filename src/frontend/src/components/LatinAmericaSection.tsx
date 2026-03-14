import { Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tours = [
  {
    title:
      "Latin America: Mexico + Cuba + Brazil + Argentina + Chile + Peru 6-Country 31 Days",
    image: "/assets/generated/tour-cuba.dim_700x500.jpg",
    badge: "Guaranteed Departure",
    departure: "May–September",
    cities: "Beijing, Shanghai, Guangzhou, Hong Kong",
  },
  {
    title:
      "Caribbean 5-Country: Mexico + Cuba + Jamaica + Panama + Costa Rica 19 Days",
    image: "/assets/generated/tour-cuba.dim_700x500.jpg",
    badge: "Confirmed Departure",
    departure: "April–August",
    cities: "Beijing, Shanghai, Hong Kong",
  },
  {
    title:
      "Latin America Explorer: Brazil + Argentina + Chile + Peru 4-Country 24 Days",
    image: "/assets/generated/tour-peru.dim_700x500.jpg",
    badge: "100% Guaranteed",
    departure: "February–September",
    cities: "Beijing, Shanghai, Hong Kong",
  },
  {
    title:
      "Latin America Explorer: Brazil + Argentina + Chile + Peru 4-Country 22 Days",
    image: "/assets/generated/tour-peru.dim_700x500.jpg",
    badge: "Guaranteed Departure",
    departure: "March–September",
    cities: "Beijing, Shanghai, Guangzhou, Hong Kong",
  },
];

export function LatinAmericaSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Latin America Group Tours"
          linkLabel="View all tours"
          linkHref="/latin-america"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map((tour, i) => (
            <div
              key={tour.title}
              className="tour-card group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              data-ocid={`latin.item.${i + 1}`}
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
                {tour.badge && (
                  <div className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 rounded font-bold">
                    {tour.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-brand transition-colors">
                  {tour.title}
                </h3>
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-gold flex-shrink-0" />
                    <span>Departs: {tour.departure}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-gold flex-shrink-0" />
                    <span>{tour.cities}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
