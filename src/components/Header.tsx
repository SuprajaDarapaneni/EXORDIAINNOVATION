import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/exordia_upscaled.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Exordia Logo"
              className="h-14 w-auto scale-150 object-contain brightness-125 contrast-125 hover:scale-[1.6] transition-transform duration-300"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              to="/placements"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Placements
            </Link>

            <Link
              to="/internships"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Internships
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>

            <Link
              to="/manpower-service"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Manpower Services
            </Link>

            <Link
              to="/careers"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/placements"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Placements
            </Link>

            <Link
              to="/internships"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Internships
            </Link>

            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            <Link
              to="/manpower-service"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Manpower Services
            </Link>

            <Link
              to="/careers"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center"
              onClick={closeMobileMenu}
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}