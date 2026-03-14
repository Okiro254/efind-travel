import { SectionHeader } from "./SectionHeader";

const guides = [
  {
    title:
      "International Travel Health Certificate: Yellow Card (International Certificate of Vaccination) Application Guide & FAQs",
    image: "/assets/generated/dest-tanzania.dim_700x500.jpg",
  },
  {
    title: "How to Extend Your Visa in Chile During Extraordinary Times",
    image: "/assets/generated/tour-peru.dim_700x500.jpg",
  },
  {
    title: "South Africa Visa Guide",
    image: "/assets/generated/dest-namibia.dim_700x500.jpg",
  },
  {
    title: "Best Time to Visit Tanzania",
    image: "/assets/generated/dest-tanzania.dim_700x500.jpg",
  },
  {
    title: "Best Season to Climb Kilimanjaro",
    image: "/assets/generated/dest-kilimanjaro.dim_700x500.jpg",
  },
  {
    title: "Which Antarctica Tour is Right for You?",
    image: "/assets/generated/dest-antarctica.dim_700x500.jpg",
  },
  {
    title: "Best Season to Visit Antarctica",
    image: "/assets/generated/tour-antarctica-ship.dim_700x500.jpg",
  },
  {
    title: "Flight Guide to Tanzania",
    image: "/assets/generated/dest-tanzania.dim_700x500.jpg",
  },
];

export function GuidesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Latest Travel Guides"
          linkLabel="View all guides"
          linkHref="/guide"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {guides.map((guide, i) => (
            <a
              key={guide.title}
              href="/guide"
              className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer block"
              data-ocid={`guide.item.${i + 1}`}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-700 leading-snug line-clamp-3 group-hover:text-brand transition-colors">
                  {guide.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
