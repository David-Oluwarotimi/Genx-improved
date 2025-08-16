import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    title: 'Information Collection',
    content: 'We may collect personal information such as your name, email, and transaction data to provide our services efficiently.'
  },
  {
    title: 'Use of Information',
    content: 'Your information is used to facilitate transactions, improve our services, and communicate important updates.'
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your information from unauthorized access or disclosure.'
  },
  {
    title: 'Cookies',
    content: 'Our website may use cookies to enhance user experience and analyze site traffic. You can manage cookies via your browser settings.'
  },
  {
    title: 'Third-Party Services',
    content: 'We do not sell your information. Trusted third-party providers may assist us in delivering services, always under strict confidentiality.'
  },
  {
    title: 'Changes to this Policy',
    content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.'
  },
];

const PrivacyPolicy: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="privacy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-orange-400 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Privacy Policy
        </motion.h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-blue-500">{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {item.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6 text-blue-500 text-center">
          © 2024 Genx-Trde. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
