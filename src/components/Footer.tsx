import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">StreamHub</h3>
          <p className="text-sm text-zinc-400">
            Dive into a world of entertainment with the best movies and shows.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Top Rated
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids & Family
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Originals
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="flex items-center text-sm mb-2">
            <Mail className="w-4 h-4 mr-2" /> support@nitflex.com
          </p>
          <p className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567
          </p>
        </div>

        {/* Call to Action */}
        <div>
          <h4 className="font-semibold mb-3">Join Us</h4>
          <p className="text-sm text-zinc-400 mb-4">
            Create an account or reach out to learn more.
          </p>
          <div className="flex flex-col space-y-2">
            <a href="#" className="btn btn-primary">
              Create Account
            </a>
            <a
              href="#"
              className="border border-zinc-500 hover:border-white text-sm py-2 px-4 rounded text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-zinc-700 pt-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} StremHub. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
