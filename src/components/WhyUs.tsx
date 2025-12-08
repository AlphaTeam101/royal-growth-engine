import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Users, Award, Zap, Globe, Shield } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ from, to, suffix = '', duration = 2 }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-gradient-gold">
      {displayValue}{suffix}
    </span>
  );
};

const stats = [
  { value: 8, suffix: '+', label: 'سنوات من الخبرة', icon: Award },
  { value: 50, suffix: '+', label: 'مشروع ناجح', icon: Zap },
  { value: 30, suffix: '+', label: 'عميل سعيد', icon: Users },
  { value: 4, suffix: '', label: 'أسواق إقليمية', icon: Globe },
];

const features = [
  {
    icon: MapPin,
    title: 'فهم السوق السعودي',
    description: 'خبرة عميقة في احتياجات وتوقعات العملاء في المملكة العربية السعودية',
  },
  {
    icon: Users,
    title: 'فريق متكامل',
    description: 'مهندسون مصريون بخبرة عالمية + مسوقون سعوديون يفهمون السوق المحلي',
  },
  {
    icon: Shield,
    title: 'جودة بلا تنازل',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه',
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            لماذا نحن
          </span>
          <h2 className="heading-lg mb-6">
            الشراكة التي <span className="text-gradient-gold">تصنع الفرق</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            نجمع بين الخبرة التقنية المصرية والفهم العميق للسوق السعودي لنقدم لك حلولاً متكاملة
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card-gold p-6 md:p-8 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              {isInView && (
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              )}
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card-gold p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Egypt */}
            <div className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">🇪🇬</span>
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">الخبرة التقنية المصرية</h3>
              <p className="text-muted-foreground text-sm">
                مهندسون بخبرة عالمية في أحدث التقنيات
              </p>
            </div>

            {/* Connection */}
            <div className="flex justify-center">
              <motion.div
                className="flex items-center gap-4"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/20 to-primary" />
                <div className="w-12 h-12 rounded-full bg-primary gold-glow flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="hidden md:block w-16 h-px bg-gradient-to-l from-primary/20 to-primary" />
              </motion.div>
            </div>

            {/* Saudi */}
            <div className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-3xl">🇸🇦</span>
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">فهم السوق السعودي</h3>
              <p className="text-muted-foreground text-sm">
                خبراء محليون يعرفون كيف يصلون للعملاء
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
