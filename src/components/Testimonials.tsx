import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Crypto Trader",
      content: "Genx-Trde has been a game-changer for me. Fast payouts and excellent rates every time.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Gift Card Seller",
      content: "I've tried many platforms, but Genx-Trde offers the best rates and fastest service.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Aisha Okafor",
      role: "Regular User",
      content: "Customer support is amazing! They helped me through my first trade seamlessly.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Williams",
      role: "Business Owner",
      content: "Reliable, secure, and professional. Perfect for my business needs.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Traders Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust Genx-Trde
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-blue-600 hover:bg-orange-500 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-blue-600 hover:bg-orange-500 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
