import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'اتصل بنا', value: '+966 57 303 1665', href: 'tel:+966573031665' },
    { icon: Mail, label: 'راسلنا', value: 'hello@nextlevel.digital', href: 'mailto:hello@nextlevel.digital' },
    { icon: MapPin, label: 'موقعنا', value: 'الرياض، السعودية', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(216 50% 30%) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              تواصل معنا
            </motion.span>
            <motion.h2
              className="heading-lg mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              دعنا نبني <span className="text-gradient-gold">مستقبلك الرقمي</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              هل لديك فكرة مشروع؟ نحن هنا لمساعدتك في تحويلها إلى واقع. تواصل معنا اليوم وابدأ رحلة النمو.
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-5 glass-card relative overflow-hidden"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredContact === index ? '0%' : '-100%' }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center relative z-10"
                    animate={{
                      backgroundColor: hoveredContact === index ? 'hsl(43 60% 52% / 0.2)' : 'hsl(43 60% 52% / 0.1)',
                      scale: hoveredContact === index ? 1.1 : 1,
                      boxShadow: hoveredContact === index ? '0 0 20px hsl(43 60% 52% / 0.3)' : '0 0 0px transparent',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <motion.p
                      className="font-semibold"
                      animate={{
                        color: hoveredContact === index ? 'hsl(43 60% 52%)' : 'hsl(210 40% 95%)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {info.value}
                    </motion.p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-muted-foreground text-sm">تابعنا:</span>
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground"
                  whileHover={{
                    scale: 1.15,
                    borderColor: 'hsl(43 60% 52% / 0.5)',
                    color: 'hsl(43 60% 52%)',
                    boxShadow: '0 0 20px hsl(43 60% 52% / 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/966573031665"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </motion.a>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card-gold p-8 md:p-10 space-y-6 relative overflow-hidden"
              whileHover={{
                boxShadow: '0 0 50px hsl(43 60% 52% / 0.15), 0 0 100px hsl(43 60% 52% / 0.05)',
              }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Send className="w-5 h-5 text-primary" />
                </motion.div>
                أرسل لنا رسالة
              </h3>

              {/* Name Field */}
              <motion.div
                className="relative"
                animate={{
                  scale: focusedField === 'name' ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-background/50 border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none transition-all duration-300 peer"
                  placeholder="الاسم الكامل"
                  animate={{
                    borderColor: focusedField === 'name' ? 'hsl(43 60% 52% / 0.6)' : 'hsl(216 30% 18%)',
                    boxShadow: focusedField === 'name' ? '0 0 20px hsl(43 60% 52% / 0.15)' : '0 0 0px transparent',
                  }}
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                    ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                    : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                    }`}
                >
                  الاسم الكامل
                </label>
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="relative"
                animate={{
                  scale: focusedField === 'email' ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-background/50 border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none transition-all duration-300 peer"
                  placeholder="البريد الإلكتروني"
                  animate={{
                    borderColor: focusedField === 'email' ? 'hsl(43 60% 52% / 0.6)' : 'hsl(216 30% 18%)',
                    boxShadow: focusedField === 'email' ? '0 0 20px hsl(43 60% 52% / 0.15)' : '0 0 0px transparent',
                  }}
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                    ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                    : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                    }`}
                >
                  البريد الإلكتروني
                </label>
              </motion.div>

              {/* Phone Field */}
              <motion.div
                className="relative"
                animate={{
                  scale: focusedField === 'phone' ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-background/50 border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none transition-all duration-300 peer"
                  placeholder="رقم الهاتف"
                  animate={{
                    borderColor: focusedField === 'phone' ? 'hsl(43 60% 52% / 0.6)' : 'hsl(216 30% 18%)',
                    boxShadow: focusedField === 'phone' ? '0 0 20px hsl(43 60% 52% / 0.15)' : '0 0 0px transparent',
                  }}
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formData.phone
                    ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                    : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                    }`}
                >
                  رقم الهاتف (اختياري)
                </label>
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="relative"
                animate={{
                  scale: focusedField === 'message' ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full bg-background/50 border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none transition-all duration-300 peer resize-none"
                  placeholder="رسالتك"
                  animate={{
                    borderColor: focusedField === 'message' ? 'hsl(43 60% 52% / 0.6)' : 'hsl(216 30% 18%)',
                    boxShadow: focusedField === 'message' ? '0 0 20px hsl(43 60% 52% / 0.15)' : '0 0 0px transparent',
                  }}
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                    ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                    : 'top-4 text-muted-foreground'
                    }`}
                >
                  كيف يمكننا مساعدتك؟
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-3 relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 40px hsl(43 60% 52% / 0.4), 0 0 80px hsl(43 60% 52% / 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">إرسال الرسالة</span>
                <Send className="w-5 h-5 relative z-10" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
