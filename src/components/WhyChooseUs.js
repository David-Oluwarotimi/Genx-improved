import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Zap, TrendingUp, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
const WhyChooseUs = () => {
    const features = [
        {
            icon: _jsx(Zap, { className: "h-8 w-8" }),
            title: "Fast Payouts",
            description: "Get paid within 5 minutes of completing your trade. No delays, no excuses.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: _jsx(TrendingUp, { className: "h-8 w-8" }),
            title: "Best Market Rates",
            description: "We offer the most competitive rates in the market. Compare and see the difference.",
            color: "from-blue-500 to-orange-500"
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: "Secure Transactions",
            description: "Bank-level security with SSL encryption. Your funds and data are always protected.",
            color: "from-blue-600 to-orange-600"
        },
        {
            icon: _jsx(Headphones, { className: "h-8 w-8" }),
            title: "24/7 Support",
            description: "Our dedicated support team is available round the clock to assist you.",
            color: "from-purple-500 to-orange-500"
        }
    ];
    return (_jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4", children: "Why Choose Genx-Trde?" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Join thousands of satisfied traders who trust us with their transactions" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsx(motion.div, { className: "group", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsxs(motion.div, { className: "bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 h-full", whileHover: { scale: 1.02, y: -10 }, children: [_jsx("div", { className: `bg-gradient-to-r ${feature.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`, children: feature.icon }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: feature.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: feature.description })] }) }, index))) }), _jsx(motion.div, { className: "mt-20 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, children: _jsxs("div", { className: "grid md:grid-cols-4 gap-8 text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.5 }, viewport: { once: true }, children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "50K+" }), _jsx("div", { className: "text-orange-100", children: "Happy Traders" })] }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.6 }, viewport: { once: true }, children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "\u20A62.5B+" }), _jsx("div", { className: "text-orange-100", children: "Total Traded" })] }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.7 }, viewport: { once: true }, children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "99.9%" }), _jsx("div", { className: "text-orange-100", children: "Uptime" })] }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.8 }, viewport: { once: true }, children: [_jsx("div", { className: "text-3xl font-bold mb-2", children: "5 Min" }), _jsx("div", { className: "text-orange-100", children: "Avg. Payout Time" })] })] }) })] }) }));
};
export default WhyChooseUs;
