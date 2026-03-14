import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Private Tours",
    href: "/private-tours",
    children: [
      { label: "Sightseeing", href: "/sightseeing" },
      { label: "Wildlife Tours", href: "/wild" },
      { label: "Cultural Tours", href: "/cultural" },
      { label: "Family Travel", href: "/family" },
      { label: "Luxury Travel", href: "/luxury" },
      { label: "Adventure Tours", href: "/adventures" },
      { label: "Photography Tours", href: "/photo" },
      { label: "Leisure Holidays", href: "/relaxation" },
    ],
  },
  {
    label: "Group Tours",
    href: "/sic",
    children: [
      { label: "Latin America Group Tours", href: "/latin-america" },
      { label: "Africa Multi-Country Group Tours", href: "/africa-sic" },
    ],
  },
  { label: "Travel Guides", href: "/guide" },
  {
    label: "Contact Us",
    href: "/contact",
    children: [{ label: "How to Book", href: "/how-to-book" }],
  },
  {
    label: "About EFind Travel",
    href: "/about",
    children: [
      { label: "Our License", href: "/license" },
      { label: "Payment Methods", href: "/payment" },
      { label: "Customer Reviews", href: "/feedback" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2" data-ocid="nav.link">
          <div className="flex flex-col">
            <span className="text-brand font-bold text-lg leading-tight tracking-wide">
              EFind Travel
            </span>
            <span className="text-gold text-[10px] font-display font-semibold tracking-[0.2em] leading-none">
              EFIND TRAVEL
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item relative group">
              <a
                href={item.href}
                className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand transition-colors rounded"
                data-ocid="nav.link"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={13}
                    className="mt-0.5 text-gray-400 group-hover:text-brand transition-colors"
                  />
                )}
              </a>
              {item.children && (
                <div className="nav-dropdown absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded min-w-[200px] py-1 opacity-0 invisible transform -translate-y-1 transition-all duration-150 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors"
                      data-ocid="nav.link"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 text-brand"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand hover:bg-gray-50 text-left"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  )
                }
                data-ocid="nav.toggle"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </button>
              {item.children && openDropdown === item.label && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-8 py-2.5 text-sm text-gray-600 hover:text-brand"
                      data-ocid="nav.link"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
