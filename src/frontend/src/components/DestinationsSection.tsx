import { SectionHeader } from "./SectionHeader";

const destinations = [
  {
    name: "Kilimanjaro",
    routes: 13,
    image: "/assets/generated/dest-kilimanjaro.dim_700x500.jpg",
  },
  {
    name: "Antarctica",
    routes: 54,
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
  },
  {
    name: "Tanzania",
    routes: 27,
    image: "/assets/generated/dest-tanzania.dim_700x500.jpg",
  },
  {
    name: "Namibia",
    routes: 19,
    image: "/assets/generated/dest-namibia.dim_700x500.jpg",
  },
  {
    name: "Kenya",
    routes: 9,
    image: "/assets/generated/dest-kenya.dim_700x500.jpg",
  },
  {
    name: "Madagascar",
    routes: 21,
    image: "/assets/generated/dest-madagascar.dim_700x500.jpg",
  },
];

export function DestinationsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Popular Destinations"
          linkLabel="View all destinations"
          linkHref="/destinations"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="dest-card group relative overflow-hidden rounded-lg cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
              data-ocid={`dest.item.${i + 1}`}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="dest-card-img w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-brand/90 text-white text-xs px-2 py-1 rounded font-medium">
                {dest.routes} Routes
              </div>
              <div className="dest-card-overlay absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <h3 className="text-white font-bold text-xl">{dest.name}</h3>
                <a
                  href={`/destination/${encodeURIComponent(dest.name)}`}
                  className="bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-2 rounded text-sm transition-colors"
                  data-ocid="dest.primary_button"
                >
                  View Routes
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white font-bold text-lg">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
