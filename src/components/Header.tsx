import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">TechLearn</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition">Courses</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Enroll Now
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/courses" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center" onClick={() => setMobileMenuOpen(false)}>
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
