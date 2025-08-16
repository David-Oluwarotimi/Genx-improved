import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added hooks

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll handler for internal sections
  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      // Navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // slight delay to ensure element exists
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <motion.nav
      className="bg-blue-300 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            onClick={() => handleScroll('hero')}
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg">
              <img src="./asset/genxtrde.png" alt="Genx-Trde" width={110} />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => handleScroll('rates')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Rates
            </motion.button>
            <motion.button
              onClick={() => handleScroll('how-it-works')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              How It Works
            </motion.button>
            <motion.button
              onClick={() => handleScroll('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.button>
            {/* Contact uses router */}
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => handleScroll('rates')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Rates
              </button>
              <button
                onClick={() => handleScroll('how-it-works')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => handleScroll('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
