import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/about-bitfest", label: "About Bitfest" },
    { href: "/events", label: "Events" },
    { href: "/workshops", label: "Workshops" },
    { href: "/schedule", label: "Schedule" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* Logo placeholder - This div will be replaced with actual CA logo */}
            <div className="h-10 mr-3 flex items-center justify-center">
		<div className="h-10 bg-[#f2c14e] flex items-center justify-center px-4 rounded-lg pixel-border">
			<span className="font-pixel text-navy text-xs">Computer Association</span> 
		</div>
	    </div>
            {/* BitFest logo placeholder - This span will be replaced with actual BitFest logo */}
            <span className="font-pixel text-white text-sm hidden md:inline-block">BITFEST 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`transition-colors ${location === link.href ? 'text-[#f2c14e]' : 'hover:text-[#f2c14e]'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy text-white pb-4">
            <ul className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-2 py-1 ${location === link.href 
                      ? 'bg-[#f2c14e] text-navy' 
                      : 'hover:bg-[#f2c14e] hover:text-navy transition-colors'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
