import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/exordia_upscaled.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Exordia Innovation"
              className="h-14 w-auto mb-5"
            />

            <p className="text-sm leading-7 text-gray-600">
              Transforming careers through quality tech education and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-black mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-blue-600 transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold text-black mb-5">
              Popular Courses
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses/python"
                  className="hover:text-blue-600 transition"
                >
                  Python Programming
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/data-science"
                  className="hover:text-blue-600 transition"
                >
                  Data Science
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/java"
                  className="hover:text-blue-600 transition"
                >
                  Java Full Stack
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/machine-learning"
                  className="hover:text-blue-600 transition"
                >
                  Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
        {/* Contact Info */}
<div>
  <h3 className="text-xl font-bold text-black mb-5">
    Contact Info
  </h3>

  <ul className="space-y-5">

    {/* Email */}
    <li className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-blue-600 mt-1" />
      <span>info@exordiainnovation.com</span>
    </li>

    {/* Phone */}
    <li className="flex items-start gap-3">
      <Phone className="w-5 h-5 text-blue-600 mt-1" />
      <span>+91 9493252078</span>
    </li>

    {/* Head Office */}
    <li className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <h4 className="font-semibold text-black">
          Head Office
        </h4>
        <p>Ramdas Street</p>
        <p>Arundelpet</p>
        <p>Narasaraopet - 522601</p>
        <p>Andhra Pradesh, India</p>
      </div>
    </li>

    {/* Vijayawada Branch */}
    <li className="flex items-start gap-3 border-t border-gray-300 pt-5">
      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <h4 className="font-semibold text-black">
          Vijayawada Branch
        </h4>
        <p>Vijayawada</p>
        <p>Andhra Pradesh, India</p>
      </div>
    </li>

    {/* Hyderabad Branch */}
    <li className="flex items-start gap-3 border-t border-gray-300 pt-5">
      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <h4 className="font-semibold text-black">
          Hyderabad Branch
        </h4>
        <p>KPHB Phase 1</p>
        <p>Kukatpally</p>
        <p>Hyderabad - 500072</p>
        <p>Telangana, India</p>
      </div>
    </li>

    {/* USA Branch */}
    <li className="flex items-start gap-3 border-t border-gray-300 pt-5">
      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <h4 className="font-semibold text-black">
          USA Branch (Primary)
        </h4>
        <p>654 N Gould St</p>
        <p>Sheridan, WY 82801</p>
        <p>USA</p>
      </div>
    </li>

  </ul>
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