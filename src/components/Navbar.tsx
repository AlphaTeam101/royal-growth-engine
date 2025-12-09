import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 backdrop-blur-xl border-b border-border/50"
          style={{
            opacity: bgOpacity,
            background: 'linear-gradient(to bottom, hsl(216 50% 6% / 0.95), hsl(216 50% 5% / 0.9))',
          }}
        />

        <div className="section-container relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo - Enhanced with animations */}
            <motion.a
              href="#"
              className="text-2xl font-extrabold flex items-center gap-2 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, hsl(43 60% 52% / 0.2) 0%, transparent 70%)',
                }}
              />

              {/* Sparkle icon with animation */}
              <motion.span
                className="relative z-10"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
                {/* Sparkle glow */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 8px hsl(43 60% 52% / 0.3)',
                      '0 0 20px hsl(43 60% 52% / 0.5)',
                      '0 0 8px hsl(43 60% 52% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>

              {/* Logo text - simplified for visibility */}
              <motion.span
                className="text-gradient-gold relative z-10"
                animate={{
                  textShadow: [
                    '0 0 0px transparent',
                    '0 0 8px hsl(43 60% 52% / 0.3)',
                    '0 0 0px transparent',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                نكست
              </motion.span>
              <motion.span
                className="text-foreground relative z-10"
                whileHover={{ color: 'hsl(43 60% 70%)' }}
                transition={{ duration: 0.3 }}
              >
                ليفل
              </motion.span>

              {/* Animated underline on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium animated-underline"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2, color: 'hsl(43 60% 52%)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden lg:flex btn-gold text-sm py-3 px-6 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px hsl(43 60% 52% / 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">ابدأ مشروعك</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ borderColor: 'hsl(43 60% 52% / 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
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
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            background: 'linear-gradient(to bottom, hsl(216 50% 5% / 0.98), hsl(216 50% 8% / 0.95))',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Decorative orbs */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 70%)' }}
          animate={{ scale: isOpen ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 3, repeat: Infinity }}
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
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
                x: isOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3, delay: isOpen ? 0.1 + index * 0.08 : 0 }}
              whileHover={{ x: 10, color: 'hsl(43 60% 52%)' }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="btn-gold mt-4 relative overflow-hidden"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: isOpen ? 0.5 : 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px hsl(43 60% 52% / 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">ابدأ مشروعك</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
