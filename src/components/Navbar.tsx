import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50"
          style={{ opacity: bgOpacity }}
        />

        <div className="section-container relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-extrabold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient-gold">نكست</span>
              <span className="text-foreground"> ليفل</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium animated-underline"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden lg:flex btn-gold text-sm py-3 px-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ابدأ مشروعك
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={false}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Menu Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: isOpen ? 0.1 + index * 0.05 : 0 }}
            >
              {link.label}
            </motion.a>
          ))}
          
          <motion.a
            href="#contact"
            className="btn-gold mt-4"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: isOpen ? 0.4 : 0 }}
          >
            ابدأ مشروعك
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
