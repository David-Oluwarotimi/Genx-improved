import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-300 text-orange-700 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img src='./asset/genxtrde.png' alt="Genx-Trde Logo" width={120} />
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Fast, secure, and reliable platform for trading gift cards and cryptocurrencies.
              Get the best rates and instant payouts.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#rates" className="text-gray-700 hover:text-white transition-colors">Live Rates</a></li>
              <li><a href="#how-it-works" className="text-gray-700 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-white transition-colors">Contact</a></li>
              
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Gift Card Trading</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Cryptocurrency Exchange</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Instant Payouts</a></li>
              <li><a href="#" className="text-gray-700 hover:text-white transition-colors">Rate Calculator</a></li>

            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-700"><a href="mailto:olaifamichael084@gmail.com">support@genxtrde.com</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-700"><a href="tel: +2349091084156">+234 909 108 4156</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-700">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-gray-700 px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
               
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-600 text-sm mb-4 md:mb-0">
              © 2024 Genx-Trde. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-blue-600 hover:text-white transition-colors">Privacy Policy</a>
              
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
