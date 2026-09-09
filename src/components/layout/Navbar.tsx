import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import logo from '../../assets/logos/logo-bianco.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.key])

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus()
      }
    }
    if (isOpen) document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [isOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/about' },
    { name: 'Servizi', path: '/services' },
    { name: 'Lavori', path: '/portfolio' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 lg:top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center w-full lg:w-auto max-w-full lg:max-w-[94vw] xl:max-w-[88vw] ${
          scrolled 
            ? 'bg-gray-900/95 lg:bg-gray-900/80 backdrop-blur-md border-b lg:border border-white/10 shadow-lg lg:shadow-premium' 
            : 'bg-gray-900/95 lg:bg-transparent'
        } lg:rounded-2xl`}
        style={{ 
          margin: '0 auto'
        }}
      >
        <div className="px-4 lg:px-6 w-full">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0" onClick={closeMenu}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img 
                  src={logo} 
                  alt="Webbitz Logo" 
                  className="w-28 sm:w-36 h-auto object-contain navbar-logo"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(232, 80, 2, 0.3))' }}
                />
                <div className="absolute inset-0 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centrato */}
            <div className="hidden lg:flex items-center gap-0 xl:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 font-medium text-sm transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: location.pathname === item.path ? '100%' : 0 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-switch"
                aria-label={theme === 'dark' ? 'Attiva modalità Day' : 'Attiva modalità Night'}
                title={theme === 'dark' ? 'Passa alla modalità giorno' : 'Passa alla modalità notte'}
              >
                <span className={theme === 'light' ? 'theme-choice selected' : 'theme-choice'}><Sun size={16} aria-hidden="true" /></span>
                <span className={theme === 'dark' ? 'theme-choice selected' : 'theme-choice'}><Moon size={16} aria-hidden="true" /></span>
              </button>
              <Link to="/contact#richiesta" className="btn-primary hidden lg:inline-flex items-center justify-center !py-3 !px-4 !text-sm whitespace-nowrap">Lascia una richiesta</Link>
              {/* Hamburger Menu */}
              <button
                onClick={toggleMenu}
                aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              id="mobile-navigation"
              className="lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto absolute top-full left-0 right-0 bg-gray-900 shadow-xl border-t border-white/10 lg:rounded-b-2xl lg:mx-4 lg:mt-2"
            >
              <div className="px-6 py-8">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-primary-500/20 text-primary-300 border-2 border-primary-400/50 shadow-md'
                            : 'text-gray-200 hover:bg-white/10 hover:text-primary-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-6"
                  >
                    <Link to="/contact#richiesta" onClick={closeMenu} className="btn-primary block w-full text-center py-4 text-base">Lascia una richiesta</Link>
                    <a href="tel:+393391797616" className="block text-center text-gray-200 py-4">Chiama 339 179 7616</a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


    </>
  )
}

export default Navbar 