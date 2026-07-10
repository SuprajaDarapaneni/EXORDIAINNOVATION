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
    <footer className="bg-white text-slate-600 border-t border-slate-100">
      <div className="container mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="Exordia Innovation"
              className="w-40 mb-5 mix-blend-multiply" 
            />

            <p className="text-slate-500 text-sm leading-6">
              Exordia Innovation empowers students and professionals through
              industry-ready training, internships, software development,
              placements, and IT consulting services.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition">
                <Linkedin size={20} />
              </a>

              <a href="#" className="text-slate-400 hover:text-pink-600 transition">
                <Instagram size={20} />
              </a>

              <a href="#" className="text-slate-400 hover:text-blue-600 transition">
                <Facebook size={20} />
              </a>

              <a href="#" className="text-slate-400 hover:text-red-600 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6 tracking-wide uppercase text-xs">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-600 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-blue-600 transition">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-blue-600 transition">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-600 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6 tracking-wide uppercase text-xs">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
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
            <h3 className="text-base font-semibold text-slate-900 mb-6 tracking-wide uppercase text-xs">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center">
                <Mail className="text-blue-600 shrink-0" size={18} />
                <span className="text-slate-600">info@exordiainnovation.com</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-blue-600 shrink-0" size={18} />
                <span className="text-slate-600">+91 8500732241</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-slate-900">Head Office</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Arundelpet, Narasaraopet,<br />Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-slate-900">Hyderabad Branch</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    KPHB Phase 1, Hyderabad,<br />Telangana
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-slate-900">USA Office</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sheridan, Wyoming,<br />USA
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Exordia Innovation. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-blue-600 transition">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}