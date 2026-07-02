import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/exordia_upscaled.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 py-14">
        {/* Changed lg:grid-cols-4 to lg:grid-cols-5 to give contact info more breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo (Spans 1 col) */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Exordia Innovation" className="h-14 w-auto mb-5" />
            <p className="text-sm leading-7 text-gray-600">
              Transforming careers through quality tech education and training.
            </p>
          </div>

          {/* Quick Links (Spans 1 col) */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-black mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-600 transition">Courses</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Courses (Spans 1 col) */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-black mb-5">Popular Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/courses/python" className="hover:text-blue-600 transition">Python Programming</Link></li>
              <li><Link to="/courses/data-science" className="hover:text-blue-600 transition">Data Science</Link></li>
              <li><Link to="/courses/java" className="hover:text-blue-600 transition">Java Full Stack</Link></li>
              <li><Link to="/courses/machine-learning" className="hover:text-blue-600 transition">Machine Learning</Link></li>
            </ul>
          </div>

          {/* Contact Info (Spans 2 cols on desktop to align the office grid perfectly) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-black mb-5">Contact Info</h3>

            {/* Email & Phone */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">info@exordiainnovation.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">+91 9493252078</span>
              </div>
            </div>

            {/* Offices Inner Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {/* Head Office */}
              <div className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition bg-gray-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-black">Head Office</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">Ramdas Street, Arundelpet<br />Narasaraopet - 522601<br />Andhra Pradesh, India</p>
              </div>

              {/* Hyderabad */}
              <div className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition bg-gray-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-black">Hyderabad Branch</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">KPHB Phase 1, Kukatpally<br />Hyderabad - 500072<br />Telangana, India</p>
              </div>

              {/* Vijayawada */}
              <div className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition bg-gray-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-black">Vijayawada Branch</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">Vijayawada<br />Andhra Pradesh, India<br />&nbsp;</p> {/* Added empty break for height alignment */}
              </div>

              {/* USA */}
              <div className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition bg-gray-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-black">USA Branch</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">654 N Gould St<br />Sheridan, WY 82801<br />USA</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Exordia Innovation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}