import { Mail, Phone } from "lucide-react";
import { SiFacebook, SiFlickr, SiX } from "react-icons/si";

export function TopBar() {
  return (
    <div className="bg-brand text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="tel:+8618907733818"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone size={13} />
            <span>+86 189 0773 3818</span>
          </a>
          <a
            href="mailto:Contact@EfindTravel.com"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail size={13} />
            <span>Contact@EfindTravel.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:contact@efindtravel.com"
            className="hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
          <a
            href="https://www.facebook.com/efindtravel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook size={13} />
          </a>
          <a
            href="https://www.flickr.com/photos/efindtravel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Flickr"
          >
            <SiFlickr size={13} />
          </a>
          <a
            href="https://twitter.com/EfindTravel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Twitter"
          >
            <SiX size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
