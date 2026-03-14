import { SectionHeader } from "./SectionHeader";
import { TourCard, type TourCardData } from "./TourCard";

const tours: TourCardData[] = [
  {
    title: "Kenya Amboseli Safari + Kilimanjaro Lemosho Route Climb 11 Days",
    image: "/assets/generated/dest-kenya.dim_700x500.jpg",
    price: "24,958",
    duration: "11 Days / 10 Nights",
    departure: "Year-round",
    location: "Kenya, Nairobi",
  },
  {
    title: "Direct Fly Antarctica Ocean Nova 8-Day Cruise",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
    price: "80,097",
    duration: "8 Days / 7 Nights",
    departure: "December to February",
    location: "Punta Arenas, Chile",
    badge: "Best Value Air-Sea Combo",
  },
  {
    title: "Namibia Classic 7-Day Tour",
    image: "/assets/generated/dest-namibia.dim_700x500.jpg",
    price: "8,999",
    duration: "7 Days / 6 Nights",
    departure: "Private Custom Tour",
    location: "Windhoek, Namibia",
  },
  {
    title: "East Africa Great Migration Kenya 7-Day Safari",
    image: "/assets/generated/dest-kenya.dim_700x500.jpg",
    price: "8,600",
    originalPrice: "9,999",
    duration: "7 Days / 6 Nights",
    departure: "Private Custom Tour",
    location: "Nairobi, Kenya",
    badge: "Great Migration",
  },
  {
    title: "Serengeti Great Migration 7-Day Tour",
    image: "/assets/generated/dest-tanzania.dim_700x500.jpg",
    price: "21,082",
    duration: "7 Days / 6 Nights",
    departure: "Private Group, Daily Departures",
    location: "Arusha, Tanzania",
  },
  {
    title: "Madagascar Classic 7-Day Tour (Round-trip Flights)",
    image: "/assets/generated/dest-madagascar.dim_700x500.jpg",
    price: "9,349",
    duration: "7 Days / 6 Nights",
    departure: "Year-round",
    location: "Antananarivo",
    badge: "Fan Favorite",
  },
];

export function FeaturedToursSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Featured Tours"
          linkLabel="View all tours"
          linkHref="/recommended"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tours.map((tour, i) => (
            <TourCard
              key={tour.title}
              tour={tour}
              ocid={`tour.item.${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
