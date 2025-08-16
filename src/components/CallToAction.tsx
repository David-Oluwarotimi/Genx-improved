import React from 'react';
import {  Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <motion.div 
              className="flex items-center space-x-2 text-blue-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users className="h-6 w-6" />
              <span className="text-lg font-semibold">1000K+ Traders</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 text-green-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="h-6 w-6" />
              <span className="text-lg font-semibold">₦5B+ Traded</span>
            </motion.div>
          </div>

          {/* Main CTA Content */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands of traders who 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> trust us daily</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start trading gift cards and cryptocurrencies today. Fast payouts, competitive rates, and 24/7 support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            
            <motion.button 
              className="border-2 border-blue-400 text-blue-400 px-[70px] py-6 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <a href="https://wa.me/2349091084156">Trade Now</a> 
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">5 Min Payouts</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;