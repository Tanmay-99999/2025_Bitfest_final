import React from "react";
import { Link } from "wouter";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Footer Top Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* About Column */}
            <div>
              <h3 className="font-pixel text-lg mb-4 text-[#f2c14e]">About Bitfest</h3>
              <p className="text-gray-300 mb-4">
                Bitfest is the flagship technical festival of the Computer Association at Pillai College, celebrating technology, innovation, and creativity.
              </p>
              <div className="flex items-center">
                {/* Replacing logos with text placeholders */}
                <div className="h-10 mr-3 flex items-center justify-center">
                  <div className="h-10 px-4 bg-[#f2c14e] flex items-center justify-center rounded-lg pixel-border">
                    <span className="font-pixel text-navy text-xs">CA</span>
                  </div>
                </div>
                <span className="font-pixel text-white text-sm">BITFEST 2025</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-pixel text-lg mb-4 text-[#f2c14e]">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-[#f2c14e] transition-colors">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-[#f2c14e] transition-colors">About Us</Link></li>
                <li><Link href="/events" className="hover:text-[#f2c14e] transition-colors">Events</Link></li>
                <li><Link href="/workshops" className="hover:text-[#f2c14e] transition-colors">Workshops</Link></li>
                <li><Link href="/schedule" className="hover:text-[#f2c14e] transition-colors">Schedule</Link></li>
                <li><Link href="/contact" className="hover:text-[#f2c14e] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-pixel text-lg mb-4 text-[#f2c14e]">Contact Info</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <MapPin className="text-[#f2c14e] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Dr. K. M. Vasudevan Pillai Campus, Plot No. 10, Sector 16, New Panvel, Navi Mumbai - 410206</span>
                </li>
                <li className="flex">
                  <Mail className="text-[#f2c14e] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <a href="mailto:computerassociationsocials@gmail.com" className="hover:text-[#f2c14e] transition-colors">
                    computerassociationsocials@gmail.com
                  </a>
                </li>
                <li className="flex">
                  <Phone className="text-[#f2c14e] mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <span>+91 95944 94354</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Computer Association, Pillai College. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/computerassociation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-400 hover:text-[#f2c14e] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/computer-association23/"
              className="text-gray-400 hover:text-[#f2c14e] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com/@computerassociation3741?si=EuAyXC2doEw3Oxil" className="text-gray-400 hover:text-[#f2c14e] transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

