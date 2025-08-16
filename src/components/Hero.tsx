import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Gift, Bitcoin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', price: 43250, change: 2.5 },
    { symbol: 'ETH', price: 2680, change: -1.2 },
    { symbol: 'USDT', price: 1.00, change: 0.1 },
    { symbol: 'BNB', price: 315, change: 3.8 }
  ]);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(coin => ({
        ...coin,
        price: coin.price + (Math.random() - 0.5) * coin.price * 0.001,
        change: (Math.random() - 0.5) * 10
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-orange-600 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trade Gift Cards & 
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"> Crypto Instantly</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fast, secure, and hassle-free. Genx-Trde gets you paid in minutes.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Rates
              </motion.button>
            </motion.div>

            {/* Live Crypto Ticker */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm font-medium text-blue-100">Live Crypto Prices - Genx-Trde</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cryptoData.map((coin) => (
                  <div key={coin.symbol} className="text-center">
                    <div className="text-sm font-bold text-white">{coin.symbol}</div>
                    <div className="text-lg font-semibold text-blue-200">
                      ${coin.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </div>
                    <div className={`text-xs ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-8">
                {/* Gift Card Visual */}
                <motion.div 
                  className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Gift className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Gift Cards</div>
                  <div className="text-xs opacity-80">Amazon, iTunes, Steam</div>
                </motion.div>
                
                {/* Crypto Visual */}
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-orange-400 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Bitcoin className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Cryptocurrency</div>
                  <div className="text-xs opacity-80">BTC, ETH, USDT</div>
                </motion.div>
                
                {/* Arrow */}
                <motion.div 
                  className="col-span-2 flex justify-center items-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-blue-500 rounded-full p-4">
                    <ArrowRight className="h-6 w-6 text-white transform rotate-90" />
                  </div>
                </motion.div>
                
                {/* Cash Visual */}
                <motion.div 
                  className="col-span-2 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-sm font-semibold">Instant Naira Payout</div>
                  <div className="text-xs opacity-80">Genx-Trde gets you paid in minutes</div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-white text-sm font-bold">Fast</div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-orange-500 rounded-full p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <div className="text-white text-sm font-bold">Secure</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
