import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import logo from "../assets/exordia_upscaled.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="Exordia Innovation"
              className="w-40 mb-5"
            />

            <p className="text-gray-400 leading-7">
              Exordia Innovation empowers students and professionals through
              industry-ready training, internships, software development,
              placements, and IT consulting services.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-blue-500 transition">
                <Linkedin size={20} />
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                <Instagram size={20} />
              </a>

              <a href="#" className="hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>

              <a href="#" className="hover:text-red-500 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/placements"
                  className="hover:text-blue-400 transition"
                >
                  Placements
                </Link>
              </li>

              <li>
                <Link
                  to="/internships"
                  className="hover:text-blue-400 transition"
                >
                  Internships
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="hover:text-blue-400 transition"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Python Full Stack</li>
              <li>Java Full Stack</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>MERN Stack</li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Mail className="text-blue-500 mt-1" size={18} />
                <span>info@exordiainnovation.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-500 mt-1" size={18} />
                <span>+91 8500732241</span>
              </div>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-white">
                    Head Office
                  </h4>
                  <p className="text-sm text-gray-400">
                    Arundelpet,
                    <br />
                    Narasaraopet,
                    <br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-white">
                    Hyderabad Branch
                  </h4>
                  <p className="text-sm text-gray-400">
                    KPHB Phase 1,
                    <br />
                    Hyderabad,
                    <br />
                    Telangana
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-white">
                    USA Office
                  </h4>
                  <p className="text-sm text-gray-400">
                    Sheridan,
                    <br />
                    Wyoming,
                    <br />
                    USA
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Exordia Innovation. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-blue-400 transition"
            >
              Refund Policy
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}