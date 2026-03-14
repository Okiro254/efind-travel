import { Calendar, Clock, MapPin } from "lucide-react";

export interface TourCardData {
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  duration: string;
  departure: string;
  location: string;
  badge?: string;
}

interface TourCardProps {
  tour: TourCardData;
  ocid?: string;
}

export function TourCard({ tour, ocid }: TourCardProps) {
  return (
    <div
      className="tour-card group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
      data-ocid={ocid}
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
        <h3 className="font-bold text-gray-800 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-brand transition-colors">
          {tour.title}
        </h3>
        <div className="space-y-1.5 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock size={11} className="text-gold flex-shrink-0" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={11} className="text-gold flex-shrink-0" />
            <span>Departs: {tour.departure}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={11} className="text-gold flex-shrink-0" />
            <span>{tour.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
