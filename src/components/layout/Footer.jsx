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
    <footer className="bg-[#2c2a2a] text-white px-[5%] pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Khyber Quick Logo"
              className="w-20 h-20 bg-white rounded-lg object-contain"
            />
            <h2 className="text-2xl font-black">
              KHYBER <span className="text-red-500">QUICK</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Fast local delivery service for food, grocery, medicine, parcels and
            more across your area.
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
          <div className="flex gap-4 mt-6 text-xl">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18cuY1jTLL/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/khyberquick_services?igsh=MWdyM28xMWFuaWFjcg=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
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
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

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
        <div>
          <h3 className="font-bold mb-4">Services</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Food Delivery</li>
            <li>Grocery Delivery</li>
            <li>Medicine Delivery</li>
            <li>Parcel Delivery</li>
            <li>Local Shops</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>

          <div className="flex gap-2 flex-row">
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Jehangira, KPK</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+92 3339433704</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>support@khyberquick.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock />
                <span>9AM - 12AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mx-10 items-center gap-3">
        <img src={slide6} />
      </div>
      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">
        <div className="flex flex-col gap-1 text-start">
          © {new Date().getFullYear()} Khyber Quick. All rights reserved.
          <p>Food | Grocery | Parcels | Anything</p>
        </div>

        <div>Khyber Quick Local Services Pvt. Ltd.</div>
      </div>
    </footer>
  );
}
