import React from 'react';
import { Zap, TrendingUp, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Payouts",
      description: "Get paid within 5 minutes of completing your trade. No delays, no excuses.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Best Market Rates",
      description: "We offer the most competitive rates in the market. Compare and see the difference.",
      color: "from-blue-500 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "Bank-level security with SSL encryption. Your funds and data are always protected.",
      color: "from-blue-600 to-orange-600"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you.",
      color: "from-purple-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Genx-Trde?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust us with their transactions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 h-full"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className={`bg-gradient-to-r ${feature.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Happy Traders</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold mb-2">₦2.5B+</div>
              <div className="text-orange-100">Total Traded</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-orange-100">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold mb-2">5 Min</div>
              <div className="text-orange-100">Avg. Payout Time</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
