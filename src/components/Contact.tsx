import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
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
    { icon: Phone, label: 'اتصل بنا', value: '+966 50 XXX XXXX', href: 'tel:+966500000000' },
    { icon: Mail, label: 'راسلنا', value: 'hello@nextlevel.digital', href: 'mailto:hello@nextlevel.digital' },
    { icon: MapPin, label: 'موقعنا', value: 'الرياض، السعودية', href: '#' },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
              تواصل معنا
            </span>
            <h2 className="heading-lg mb-6">
              دعنا نبني <span className="text-gradient-gold">مستقبلك الرقمي</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              هل لديك فكرة مشروع؟ نحن هنا لمساعدتك في تحويلها إلى واقع. تواصل معنا اليوم وابدأ رحلة النمو.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-5 glass-card group hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-muted-foreground text-sm">تابعنا:</span>
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card-gold p-8 md:p-10 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Send className="w-5 h-5 text-primary" />
                أرسل لنا رسالة
              </h3>

              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-colors peer"
                  placeholder="الاسم الكامل"
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                      : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                  }`}
                >
                  الاسم الكامل
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-colors peer"
                  placeholder="البريد الإلكتروني"
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                      : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                  }`}
                >
                  البريد الإلكتروني
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-background/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-colors peer"
                  placeholder="رقم الهاتف"
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${
                    focusedField === 'phone' || formData.phone
                      ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                      : 'top-1/2 -translate-y-1/2 text-muted-foreground'
                  }`}
                >
                  رقم الهاتف (اختياري)
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-5 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 transition-colors peer resize-none"
                  placeholder="رسالتك"
                />
                <label
                  className={`absolute right-5 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-0 -translate-y-1/2 text-xs text-primary bg-card px-2'
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  كيف يمكننا مساعدتك؟
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                إرسال الرسالة
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
