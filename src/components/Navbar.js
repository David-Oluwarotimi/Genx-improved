import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added hooks
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // Smooth scroll handler for internal sections
    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            // Navigate to home first
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50); // slight delay to ensure element exists
        }
        else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false); // close mobile menu after click
    };
    return (_jsx(motion.nav, { className: "bg-blue-300 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100", initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx(motion.a, { onClick: () => handleScroll('hero'), className: "flex items-center space-x-2 cursor-pointer", whileHover: { scale: 1.05 }, children: _jsx("div", { className: "p-2 rounded-lg", children: _jsx("img", { src: "./asset/genxtrde.png", alt: "Genx-Trde", width: 110 }) }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [_jsx(motion.button, { onClick: () => handleScroll('rates'), className: "text-gray-700 hover:text-blue-600 transition-colors font-medium", whileHover: { scale: 1.05 }, children: "Rates" }), _jsx(motion.button, { onClick: () => handleScroll('how-it-works'), className: "text-gray-700 hover:text-blue-600 transition-colors font-medium", whileHover: { scale: 1.05 }, children: "How It Works" }), _jsx(motion.button, { onClick: () => handleScroll('about'), className: "text-gray-700 hover:text-blue-600 transition-colors font-medium", whileHover: { scale: 1.05 }, children: "About" }), _jsx(Link, { to: "/contact", className: "text-gray-700 hover:text-blue-600 transition-colors font-medium", children: "Contact" })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "text-gray-700 hover:text-blue-600", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) }) })] }), isOpen && (_jsx(motion.div, { className: "md:hidden", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t", children: [_jsx("button", { onClick: () => handleScroll('rates'), className: "block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left", children: "Rates" }), _jsx("button", { onClick: () => handleScroll('how-it-works'), className: "block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left", children: "How It Works" }), _jsx("button", { onClick: () => handleScroll('about'), className: "block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left", children: "About" }), _jsx(Link, { to: "/contact", className: "block px-3 py-2 text-gray-700 hover:text-blue-600 w-full", onClick: () => setIsOpen(false), children: "Contact" })] }) }))] }) }));
};
export default Navbar;
