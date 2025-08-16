import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lightbulb, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
const HowItWorks = () => {
    const steps = [
        {
            icon: _jsx(Lightbulb, { className: "h-12 w-12" }),
            title: "Innovative Ideas",
            description: "We bring creative solutions to make trading gift cards and cryptocurrencies easier and safer for everyone."
        },
        {
            icon: _jsx(Users, { className: "h-12 w-12" }),
            title: "Trusted Team",
            description: "Our team is dedicated to providing reliable service and building a platform you can trust."
        },
        {
            icon: _jsx(Globe, { className: "h-12 w-12" }),
            title: "Global Reach",
            description: "We aim to connect users worldwide, offering access to competitive rates and instant updates."
        }
    ];
    return (_jsx("section", { id: "how-it-works", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4", children: "How Genx-Trde Works" }), _jsx("p", { className: "text-xl text-gray-700 max-w-2xl mx-auto", children: "As a startup, we focus on innovation, trust, and connecting people worldwide. Here\u2019s what we\u2019re about." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: steps.map((step, index) => (_jsxs(motion.div, { className: "relative", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, viewport: { once: true }, children: [_jsx("div", { className: "absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10", children: index + 1 }), _jsxs(motion.div, { className: "bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 h-full", whileHover: { scale: 1.02, y: -5 }, children: [_jsx("div", { className: "bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6", children: step.icon }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: step.title }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: step.description })] }), index < steps.length - 1 && (_jsx("div", { className: "hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20", children: _jsx("div", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center", children: "\u2192" }) }))] }, index))) })] }) }));
};
export default HowItWorks;
