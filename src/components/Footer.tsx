import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUp, Linkedin, Twitter, Instagram, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = {
    services: [
      { label: 'تطوير التطبيقات', href: '#services' },
      { label: 'تطوير الويب', href: '#services' },
      { label: 'التسويق الرقمي', href: '#services' },
      { label: 'التجارة الإلكترونية', href: '#services' },
    ],
    company: [
      { label: 'من نحن', href: '#why-us' },
      { label: 'أعمالنا', href: '#portfolio' },
      { label: 'فريق العمل', href: '#' },
      { label: 'وظائف', href: '#' },
    ],
    social: [
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Instagram, href: '#', label: 'Instagram' },
      { icon: Mail, href: 'mailto:hello@nextlevel.digital', label: 'Email' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer ref={ref} className="relative pt-20 pb-8 border-t border-border/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand - Enhanced with more animations */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 flex items-start gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Sparkle with elaborate animation */}
              <motion.span
                className="relative"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8 text-primary mt-2" />
                {/* Sparkle glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px hsl(43 60% 52% / 0.3)',
                      '0 0 30px hsl(43 60% 52% / 0.5)',
                      '0 0 10px hsl(43 60% 52% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.span>
              <span>
                {/* Letter-by-letter wave animation for نكست */}
                <motion.span className="text-gradient-gold inline-block">
                  {'نكست'.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
                <br />
                {/* Second part with hover effect */}
                <motion.span
                  className="text-foreground inline-block"
                  whileHover={{ color: 'hsl(43 60% 70%)' }}
                  transition={{ duration: 0.3 }}
                >
                  ليفل
                </motion.span>
              </span>
            </motion.h2>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              شريكك الموثوق في التحول الرقمي. نجمع بين الخبرة التقنية المصرية والفهم العميق للسوق السعودي.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {links.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    borderColor: 'hsl(43 60% 52% / 0.5)',
                    color: 'hsl(43 60% 52%)',
                    boxShadow: '0 0 20px hsl(43 60% 52% / 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-5">خدماتنا</h3>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-5">الشركة</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px mb-8"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(43 60% 52% / 0.3), transparent)',
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} نكست ليفل. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              سياسة الخصوصية
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              الشروط والأحكام
            </motion.a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass-card-gold flex items-center justify-center text-primary relative overflow-hidden"
            whileHover={{
              scale: 1.15,
              y: -3,
              boxShadow: '0 0 30px hsl(43 60% 52% / 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="العودة للأعلى"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
