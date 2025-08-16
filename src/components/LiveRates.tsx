import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveRates: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crypto' | 'giftcards'>('crypto');

  const cryptoRates = [
    { name: 'Bitcoin', symbol: 'BTC', rate: 65800000, change: 2.5, logo: '₿' },
    { name: 'Ethereum', symbol: 'ETH', rate: 4080000, change: -1.2, logo: 'Ξ' },
    { name: 'Tether', symbol: 'USDT', rate: 1520, change: 0.1, logo: '₮' },
    { name: 'Binance Coin', symbol: 'BNB', rate: 479200, change: 3.8, logo: 'BNB' },
    { name: 'Solana', symbol: 'SOL', rate: 152000, change: 5.2, logo: 'SOL' },
    { name: 'Cardano', symbol: 'ADA', rate: 760, change: -2.1, logo: 'ADA' }
  ];

 const giftCardRates = [
  {
    name: 'Amazon',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    change: 1.5,
  },
  {
    name: 'iTunes',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/ITunes_12.2_logo.png',
    change: 0.8,
  },
  {
    name: 'Steam',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
    change: 2.1,
  },
  {
    name: 'Google Play',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
    change: -0.5,
  },
  {
    name: 'Walmart',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    change: 1.2,
  },
  {
    name: 'eBay',
    rate: '₦12000 - ₦125000',
    per: '$100',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',
    change: 0.3,
  }
];

  return (
    <section id="rates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Genx-Trde Live Trading Rates
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get the best market rates for cryptocurrencies and gift cards updated in real-time on Genx-Trde.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('crypto')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'crypto'
                  ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cryptocurrency
            </button>
            <button
              onClick={() => setActiveTab('giftcards')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'giftcards'
                  ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Gift Cards
            </button>
          </div>
        </motion.div>

        {/* Rates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'crypto' ? (
            cryptoRates.map((crypto, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {crypto.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{crypto.name}</h3>
                      <p className="text-sm text-gray-500">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="text-sm font-semibold">{crypto.change >= 0 ? '+' : ''}{crypto.change}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₦{crypto.rate.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">per {crypto.symbol}</p>
                </div>
              </motion.div>
            ))
          ) : (
            giftCardRates.map((card, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                      {card.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{card.name}</h3>
                      <p className="text-sm text-gray-500">Gift Card</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${card.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {card.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="text-sm font-semibold">{card.change >= 0 ? '+' : ''}{card.change}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">{card.rate}</p>
                  <p className="text-sm text-gray-500">per {card.per}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Rate Update Notice */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            Rates updated every 30 seconds • Last updated: {new Date().toLocaleTimeString()} on Genx-Trde
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveRates;
