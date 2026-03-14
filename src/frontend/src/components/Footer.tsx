import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiX } from "react-icons/si";

const quickLinks = [
  { label: "How to Book", href: "/how-to-book" },
  { label: "Payment Methods", href: "/payment" },
  { label: "Travel Guides", href: "/guide" },
  { label: "Our License", href: "/license" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <div className="space-y-2.5 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gold flex-shrink-0" />
                <span>
                  Wanxiang City, Xiufeng District, Guilin, Guangxi, China
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:18907733818"
                  className="hover:text-white transition-colors"
                >
                  +86 189 0773 3818
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xs font-bold">WeChat</span>
                <span>One2Travel</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:contact@efindtravel.com"
                  className="hover:text-white transition-colors"
                >
                  contact@efindtravel.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <div className="space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Follow Us</h3>
            <div className="space-y-2.5 text-sm text-white/80">
              <div>
                WeChat: <strong className="text-white">One2Travel</strong>
              </div>
              <div className="flex items-center gap-2">
                <SiFacebook size={14} className="text-gold" />
                <a
                  href="https://www.facebook.com/efindtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  EfindTravel
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiX size={14} className="text-gold" />
                <a
                  href="https://twitter.com/EfindTravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  EfindTravel
                </a>
              </div>
            </div>
          </div>

          {/* WeChat QR */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">
              Scan to Add WeChat
            </h3>
            <div className="w-24 h-24 bg-white/10 rounded flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="text-3xl">💬</div>
                <div className="text-xs text-white/60 mt-1">One2Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <span>EFind Travel &copy; {year} All Rights Reserved</span>
          <span>
            Built with{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
