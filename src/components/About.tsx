import React from 'react';
import { Users, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id='about' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-orange-500 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Genx-Trde
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Users className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
            <p className="text-gray-500">We provide a secure and reliable platform for trading gift cards and cryptocurrencies.</p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Shield className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure Transactions</h3>
            <p className="text-gray-500">Your funds and information are protected with top-level encryption and safety protocols.</p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Star className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Payouts</h3>
            <p className="text-gray-500">We ensure quick, hassle-free payouts so you get your money instantly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
