import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient-gold">نكست</span>
              <br />
              <span className="text-foreground">ليفل</span>
            </motion.h2>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              شريكك الموثوق في التحول الرقمي. نجمع بين الخبرة التقنية المصرية والفهم العميق للسوق السعودي.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {links.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">خدماتنا</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">الشركة</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} نكست ليفل. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              الشروط والأحكام
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass-card-gold flex items-center justify-center text-primary hover:gold-glow-sm transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
