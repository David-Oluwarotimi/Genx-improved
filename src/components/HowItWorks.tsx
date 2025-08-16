import React from 'react';
import { Lightbulb, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovative Ideas",
      description: "We bring creative solutions to make trading gift cards and cryptocurrencies easier and safer for everyone."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Trusted Team",
      description: "Our team is dedicated to providing reliable service and building a platform you can trust."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Reach",
      description: "We aim to connect users worldwide, offering access to competitive rates and instant updates."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Genx-Trde Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            As a startup, we focus on innovation, trust, and connecting people worldwide. Here’s what we’re about.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <motion.div 
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    →
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
