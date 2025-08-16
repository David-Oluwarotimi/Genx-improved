import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // For now just log
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
    };
    return (_jsx("section", { id: "contact", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx(motion.h2, { className: "text-4xl font-bold text-orange-500 text-center mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: "Contact Us" }), _jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [_jsxs(motion.div, { className: "space-y-6", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Mail, { className: "h-6 w-6 text-blue-500" }), _jsxs("span", { children: [_jsx("a", { href: "mailto:olaifamichael084@gmail.com", children: "support@genxtrde.com" }), " "] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Phone, { className: "h-6 w-6 text-blue-500" }), _jsxs("span", { children: [_jsx("a", { href: "tel: +2349091084156", children: "+234 909 108 4156" }), " "] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(MapPin, { className: "h-6 w-6 text-blue-500" }), _jsx("span", { children: "Lagos, Nigeria" })] })] }), _jsxs(motion.form, { onSubmit: handleSubmit, className: "space-y-4", initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Your Name", className: "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", required: true }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Your Email", className: "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", required: true }), _jsx("textarea", { name: "message", value: formData.message, onChange: handleChange, placeholder: "Your Message", className: "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", rows: 5, required: true }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold", children: "Send Message" })] })] })] }) }));
};
export default Contact;
