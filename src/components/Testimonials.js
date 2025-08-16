import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const Testimonials = () => {
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
    return (_jsx("section", { className: "py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-orange-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "What Our Traders Say" }), _jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "Join thousands of satisfied traders who trust Genx-Trde" })] }), _jsx("div", { className: "hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.slice(0, 3).map((testimonial, index) => (_jsxs(motion.div, { className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { scale: 1.02 }, children: [_jsx("div", { className: "flex items-center mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-gray-300 mb-6 leading-relaxed", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover mr-4" }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold", children: testimonial.name }), _jsx("p", { className: "text-gray-400 text-sm", children: testimonial.role })] })] })] }, index))) }), _jsxs("div", { className: "md:hidden relative", children: [_jsxs(motion.div, { className: "bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "flex items-center mb-4", children: [...Array(testimonials[currentIndex].rating)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-gray-300 mb-6 leading-relaxed", children: ["\"", testimonials[currentIndex].content, "\""] }), _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: testimonials[currentIndex].avatar, alt: testimonials[currentIndex].name, className: "w-12 h-12 rounded-full object-cover mr-4" }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold", children: testimonials[currentIndex].name }), _jsx("p", { className: "text-gray-400 text-sm", children: testimonials[currentIndex].role })] })] })] }, currentIndex), _jsxs("div", { className: "flex justify-center items-center mt-6 space-x-4", children: [_jsx("button", { onClick: prevTestimonial, className: "bg-blue-600 hover:bg-orange-500 text-white p-2 rounded-full transition-colors", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), _jsx("div", { className: "flex space-x-2", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'}` }, index))) }), _jsx("button", { onClick: nextTestimonial, className: "bg-blue-600 hover:bg-orange-500 text-white p-2 rounded-full transition-colors", children: _jsx(ChevronRight, { className: "h-5 w-5" }) })] })] })] }) }));
};
export default Testimonials;
