import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { 
      name: 'Platform', 
      path: '/courses',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Interactive Learning', path: '/interactive' },
        { name: 'AI Analytics', path: '/analytics' },
        { name: 'Virtual Labs', path: '/labs' },
        { name: 'Live Classes', path: '/live' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/skills',
      hasDropdown: true,
      dropdownItems: [
        { name: 'For Individuals', path: '/individual' },
        { name: 'For Teams', path: '/teams' },
        { name: 'For Enterprise', path: '/enterprise' },
        { name: 'For Institutions', path: '/institutions' }
      ]
    },
    { 
      name: 'Resources', 
      path: '/why-us',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Documentation', path: '/docs' },
        { name: 'API Reference', path: '/api' },
        { name: 'Community', path: '/community' },
        { name: 'Support', path: '/support' }
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0,
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="flex items-center space-x-3 group"
            >
              <motion.div 
                className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-2"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/Upper Skills.png" 
                  alt="UpperSkills Logo" 
                  className="h-6 w-auto brightness-0 invert"
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-white"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                UpperSkills
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Glassmorphic Blocks */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-4 backdrop-blur-lg">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={closeDropdown}
                >
                  <motion.button
                    className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-sm transition-all duration-300 flex items-center space-x-1 text-sm font-medium relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => item.hasDropdown && handleDropdownToggle(item.name)}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {item.hasDropdown && (
                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 py-3 z-50 shadow-2xl"
                        initial={{ 
                          opacity: 0, 
                          y: -10, 
                          scale: 0.95,
                          rotateX: -10
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: 1,
                          rotateX: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: -10, 
                          scale: 0.95,
                          rotateX: -10
                        }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.4, 0, 0.2, 1],
                          staggerChildren: 0.05
                        }}
                      >
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: dropdownIndex * 0.05,
                              ease: "easeOut"
                            }}
                          >
                            <Link
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200 rounded-lg mx-2 relative overflow-hidden group"
                              onClick={closeDropdown}
                            >
                              {/* Hover slide effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className="relative z-10">{dropdownItem.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Desktop Actions with Glassmorphic Style */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Contact Sales */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-sm font-medium"
              >
                Contact Sales
              </Link>
            </motion.div>

            {/* Login */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-sm font-medium"
              >
                Log In
              </Link>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/register"
                className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-xl overflow-hidden group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 transition-all duration-300 relative z-50 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Enhanced Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Enhanced Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/10 backdrop-blur-xl z-40 lg:hidden shadow-2xl border-l border-white/20"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative flex flex-col h-full pt-20 px-6">
                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                      className="relative"
                    >
                      <div className="space-y-1">
                        <motion.button
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10"
                          onClick={() => handleDropdownToggle(item.name)}
                          whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">{item.name}</span>
                          {item.hasDropdown && (
                            <motion.div
                              className="relative z-10"
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          )}
                        </motion.button>
                        
                        <AnimatePresence>
                          {item.hasDropdown && activeDropdown === item.name && (
                            <motion.div
                              className="pl-4 space-y-1 overflow-hidden"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: dropdownIndex * 0.05 
                                  }}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 bg-white/5 backdrop-blur-sm border border-white/10"
                                    onClick={closeMenu}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div
                  className="border-t border-white/20 pt-6 pb-8 space-y-4"
                  variants={mobileItemVariants}
                >
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
                      onClick={closeMenu}
                    >
                      Contact Sales
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/login"
                      className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
                      onClick={closeMenu}
                    >
                      Log In
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/register"
                      className="block px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 text-center shadow-lg shadow-blue-500/25 relative overflow-hidden group"
                      onClick={closeMenu}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 3 
                        }}
                      />
                      <span className="relative z-10">Get Started</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;