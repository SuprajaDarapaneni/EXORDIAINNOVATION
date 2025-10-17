import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'E:/company projects/astechnologies/src/assets/ai jpg-01.png'; // your logo path

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Company Logo" className=" h-14 w-auto object-contain brightness-125 contrast-125 hover:scale-105 transition-transform duration-300" />
              {/* Remove text if you only want the logo */}
              {/* <span className="text-xl font-bold text-white">Your Company</span> */}
            </div>
            <p className="text-sm">
              Transforming careers through quality tech education and training.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses/python" className="hover:text-blue-400 transition">Python Programming</Link></li>
              <li><Link to="/courses/data-science" className="hover:text-blue-400 transition">Data Science</Link></li>
              <li><Link to="/courses/java" className="hover:text-blue-400 transition">Java Full Stack</Link></li>
              <li><Link to="/courses/machine-learning" className="hover:text-blue-400 transition">Machine Learning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@astechnosolutions.com</li>
              <li>Phone: +91 9493252078</li>
              <li>Location: Vijayawada, India</li>
            </ul>
          </div>
        </div>

        {/* Removed the copyright section */}
      </div>
    </footer>
  );
}
