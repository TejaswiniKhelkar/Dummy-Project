'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, AlertTriangle, Zap, Shield, TrendingUp, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const sosVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
        '0 0 30px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.5)',
        '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#0f1a3a]" />
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-red-600/10 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 w-full z-50 glass border-b border-red-500/20"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                ResQAI
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Features', 'Solutions', 'Pricing', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-red-500" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ height: 0 }}
            animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Features', 'Solutions', 'Pricing', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-300 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 pt-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          {/* Animated background elements for hero */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-500/20 rounded-full" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-6 inline-block"
            variants={itemVariants}
          >
            <div className="glass px-4 py-2 rounded-full border border-red-500/30 flex items-center gap-2 w-fit mx-auto">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-400">AI-Powered Emergency Response</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Emergency Response
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              At the Speed of AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            ResQAI harnesses advanced artificial intelligence to provide instant, intelligent emergency response coordination. When every second matters, we deliver.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="px-8 py-4 glass border border-gray-600 text-white font-bold text-lg rounded-lg hover:border-red-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Large SOS Button */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              initial="initial"
              animate="animate"
              variants={sosVariants}
            >
              <motion.button
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full font-bold text-2xl md:text-4xl text-white font-mono tracking-widest
                           bg-gradient-to-br from-red-500 to-red-700
                           shadow-2xl flex items-center justify-center
                           hover:shadow-red-500/80 transition-all duration-300"
                variants={glowVariants}
                animate="animate"
                whileHover="hover"
                onClick={() => {
                  // Trigger emergency alert
                  console.log('Emergency alert triggered!');
                }}
              >
                S.O.S
                {/* Pulsing rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-500"
                  animate={{
                    scale: [1, 1.3],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-500"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.3,
                    repeat: Infinity,
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {[
              { label: 'Response Time', value: '< 30s' },
              { label: 'Accuracy', value: '99.8%' },
              { label: 'Active Users', value: '50K+' },
            ].map((stat) => (
              <div key={stat.label} className="glass p-4 rounded-lg border border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Modern Response
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge technology designed to handle critical situations with precision and speed.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'AI-powered response coordination in under 30 seconds. Real-time decision making.',
                color: 'from-yellow-500 to-orange-600',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'End-to-end encryption and compliance with all emergency response standards.',
                color: 'from-blue-500 to-cyan-600',
              },
              {
                icon: TrendingUp,
                title: 'Smart Analytics',
                description: 'Predictive insights and detailed reports to optimize your response strategy.',
                color: 'from-green-500 to-emerald-600',
              },
              {
                icon: AlertTriangle,
                title: 'Real-time Alerts',
                description: 'Instant notifications and multi-channel alert distribution system.',
                color: 'from-red-500 to-pink-600',
              },
              {
                icon: Phone,
                title: '24/7 Support',
                description: 'Always-on support team ready to assist with deployment and operations.',
                color: 'from-purple-500 to-indigo-600',
              },
              {
                icon: Zap,
                title: 'API Integration',
                description: 'Seamless integration with existing emergency response systems.',
                color: 'from-orange-500 to-red-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={cardVariants}
                whileHover="hover"
                className="group glass border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl bg-gradient-to-br from-red-500 to-red-600" />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Hover indicator */}
                <motion.div
                  className="mt-4 w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass border border-red-500/30 rounded-2xl p-12 text-center relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(239, 68, 68, 0.6)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r from-red-500 to-red-600" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to Transform Emergency Response?
            </h2>
            <p className="text-gray-300 text-lg mb-8 relative z-10 max-w-2xl mx-auto">
              Join thousands of organizations using ResQAI to save lives and improve emergency response coordination.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative border-t border-gray-700/50 glass">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  ResQAI
                </span>
              </div>
              <p className="text-gray-400">
                AI-powered emergency response platform for the modern world.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Mail, href: '#' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 glass border border-gray-600 rounded-lg flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 pt-8">
            {/* Bottom footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2026 ResQAI. All rights reserved.</p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="hover:text-red-500 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
