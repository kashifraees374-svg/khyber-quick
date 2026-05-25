import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import logo from "../../assets/logo1.png";
import slide6 from "../../assets/images/slide6.png";

export default function Footer() {
  return (
    <footer className="bg-[#2c2a2a] text-white px-5 md:px-[5%] pt-12 md:pt-16 pb-8">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <img
              src={logo}
              alt="Khyber Quick Logo"
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg object-contain"
            />

            <h2 className="text-xl md:text-2xl font-black">
              KHYBER <span className="text-red-500">QUICK</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Fast local delivery service for food, grocery, medicine,
            parcels and more across your area.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923339433704"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-bold text-sm transition"
          >
            💬 WhatsApp Us
          </a>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6 text-xl">
            <a
              href="https://www.facebook.com/share/18cuY1jTLL/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/khyberquick_services?igsh=MWdyM28xMWFuaWFjcg=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/923339433704"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>

            <li>
              <a href="#areas" className="hover:text-white">
                Areas
              </a>
            </li>

            <li>
              <a href="#directory" className="hover:text-white">
                Shops & Restaurants
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Services</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Food Delivery</li>
            <li>Grocery Delivery</li>
            <li>Medicine Delivery</li>
            <li>Parcel Delivery</li>
            <li>Local Shops</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Contact</h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt />
              <span>Jehangira, KPK</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhone />
              <span>+92 3339433704</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope />
              <span className="break-all">
                support@khyberquick.com
              </span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaClock />
              <span>9AM - 12AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-10 flex justify-center">
        <img
          src={slide6}
          alt="Delivery"
          className="w-full max-w-5xl rounded-xl object-cover"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        
        <div className="flex flex-col gap-1">
          <p>
            © {new Date().getFullYear()} Khyber Quick.
            All rights reserved.
          </p>

          <p>| Food | Grocery | Parcels | Anything</p>
        </div>
      </div>
    </footer>
  );
}