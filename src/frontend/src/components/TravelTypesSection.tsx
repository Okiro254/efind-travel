const types = [
  { label: "Family Travel", emoji: "👨‍👩‍👧‍👦", href: "/family" },
  { label: "Leisure Holidays", emoji: "🏖️", href: "/relaxation" },
  { label: "Sightseeing", emoji: "🗺️", href: "/sightseeing" },
  { label: "Cultural Tours", emoji: "🏛️", href: "/cultural" },
  { label: "Luxury Travel", emoji: "💎", href: "/luxury" },
  { label: "Wildlife Safari", emoji: "🦁", href: "/wild" },
  { label: "Adventure Tours", emoji: "🧗", href: "/adventures" },
  { label: "Photography Tours", emoji: "📷", href: "/photo" },
];

export function TravelTypesSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand border-l-4 border-gold pl-3 mb-6">
          Browse by Travel Type
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {types.map((t, i) => (
            <a
              key={t.label}
              href={t.href}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-card hover:shadow-card-hover hover:border-gold border border-transparent transition-all duration-200 text-center cursor-pointer group"
              data-ocid={`type.item.${i + 1}`}
            >
              <span className="text-3xl">{t.emoji}</span>
              <span className="text-xs font-medium text-gray-700 group-hover:text-brand transition-colors leading-tight">
                {t.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
