import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Users, Award, Zap, Globe, Shield, Sparkles, CheckCircle, HeartHandshake, Lightbulb, Rocket, Target, Clock, Gem, Star, TrendingUp } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ from, to, suffix = '', duration = 2.5 }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return (
    <motion.span
      className="text-4xl md:text-5xl font-extrabold text-gradient-gold"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
};

const stats = [
  { value: 8, suffix: '+', label: 'سنوات من الخبرة', icon: Award, description: 'في مجال التقنية والتسويق' },
  { value: 50, suffix: '+', label: 'مشروع ناجح', icon: Zap, description: 'تم تسليمها بنجاح' },
  { value: 30, suffix: '+', label: 'عميل سعيد', icon: Users, description: 'في السعودية والخليج' },
  { value: 4, suffix: '', label: 'أسواق إقليمية', icon: Globe, description: 'نخدمها بكفاءة' },
];

const features = [
  {
    icon: MapPin,
    title: 'فهم عميق للسوق السعودي',
    description: 'خبرة واسعة في احتياجات وتوقعات العملاء في المملكة العربية السعودية والخليج. نفهم ثقافة السوق ومتطلباته الفريدة.',
    highlights: ['دراسة السوق المحلي', 'تحليل المنافسين', 'استراتيجيات مخصصة'],
  },
  {
    icon: Users,
    title: 'فريق متكامل ومتخصص',
    description: 'فريق عمل محترف يعمل بمعايير عالمية ويفهم السوق المحلي لتقديم حلول شاملة.',
    highlights: ['مطورون محترفون', 'مصممون مبدعون', 'مسوقون خبراء'],
  },
  {
    icon: Shield,
    title: 'جودة بلا تنازل',
    description: 'نلتزم بأعلى معايير الجودة العالمية في كل مشروع. كل سطر كود وكل تصميم يخضع لمراجعة دقيقة.',
    highlights: ['معايير عالمية', 'اختبارات شاملة', 'ضمان الجودة'],
  },
];

const additionalBenefits = [
  { icon: Clock, title: 'التزام بالمواعيد', desc: 'نسلم المشاريع في الوقت المحدد دائماً' },
  { icon: HeartHandshake, title: 'دعم مستمر', desc: 'نقف معك بعد الإطلاق لضمان النجاح' },
  { icon: Lightbulb, title: 'حلول مبتكرة', desc: 'نستخدم أحدث التقنيات والأفكار' },
  { icon: Rocket, title: 'نمو سريع', desc: 'نساعدك على التوسع بسرعة وكفاءة' },
  { icon: Target, title: 'نتائج ملموسة', desc: 'نركز على تحقيق أهدافك التجارية' },
  { icon: Gem, title: 'قيمة استثنائية', desc: 'جودة عالية بأسعار تنافسية' },
];

const testimonials = [
  { name: 'أحمد السعيد', company: 'شركة تقنية', quote: 'فريق محترف وملتزم، حققوا لنا نتائج تفوق التوقعات' },
  { name: 'محمد العلي', company: 'متجر إلكتروني', quote: 'أفضل استثمار قمنا به، زادت مبيعاتنا 300%' },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />

      {/* Static Background Orbs for performance */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(216 50% 30%) 0%, transparent 60%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(43 70% 55%) 0%, transparent 50%)' }}
      />

      {/* Static Particles for performance */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/30"
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 2) * 70}%`,
          }}
        />
      ))}

      <div className="section-container relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-3 text-primary text-sm font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.span>
            لماذا نكست ليفل؟
            <motion.span
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.span>
          </motion.div>
          <motion.h2
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            الشراكة التي{' '}
            <span className="text-gradient-gold">
              تصنع الفرق
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            نجمع بين الخبرة التقنية العميقة وفهم السوق المحلي لنقدم حلولاً متكاملة
            <br />
            <span className="text-primary font-semibold">لنحقق لك أهدافك بكفاءة واحترافية</span>
          </motion.p>
        </motion.div>

        {/* Stats Grid - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <motion.div
                className="glass-card-gold p-6 md:p-8 text-center h-full relative overflow-hidden"
                animate={{
                  boxShadow: hoveredStat === index
                    ? '0 0 50px hsl(43 60% 52% / 0.4), 0 0 100px hsl(43 60% 52% / 0.2)'
                    : '0 8px 32px hsl(216 50% 5% / 0.5)',
                  borderColor: hoveredStat === index
                    ? 'hsl(43 60% 52% / 0.6)'
                    : 'hsl(43 60% 52% / 0.2)',
                  scale: hoveredStat === index ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: hoveredStat === index ? 1.2 : 1,
                    rotate: hoveredStat === index ? 15 : 0,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                </motion.div>
                {isInView && (
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                )}
                <p className="text-foreground font-bold mt-2">
                  {stat.label}
                </p>
                <motion.p
                  className="text-muted-foreground text-xs mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredStat === index ? 1 : 0,
                    height: hoveredStat === index ? 'auto' : 0,
                  }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Unified Value Proposition - No Flags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card-gold p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              معايير عالمية برؤية محلية
            </h3>
            <p className="text-muted-foreground">فريق عمل محترف ملتزم بأعلى معايير الجودة</p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            {/* Technical Excellence */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
              >
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">تميز تقني</h3>
              <p className="text-muted-foreground text-sm mb-3">
                أحدث التقنيات وأفضل الممارسات
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Flutter', 'Node.js'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Connection - Simplified */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div
                  className="hidden md:block w-16 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, hsl(43 60% 52% / 0.2), hsl(43 60% 52%))',
                  }}
                />
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center"
                  style={{ boxShadow: '0 0 40px hsl(43 60% 52% / 0.5)' }}
                >
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div
                  className="hidden md:block w-16 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(to left, hsl(43 60% 52% / 0.2), hsl(43 60% 52%))',
                  }}
                />
              </div>
            </div>

            {/* Market Understanding */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
              >
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">فهم السوق المحلي</h3>
              <p className="text-muted-foreground text-sm mb-3">
                خبراء يعرفون كيف يصلون للعملاء
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['SEO', 'Ads', 'Strategy'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Features - Enhanced with highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <motion.div
                className="glass-card p-8 h-full relative overflow-hidden"
                animate={{
                  boxShadow: hoveredFeature === index
                    ? '0 0 50px hsl(43 60% 52% / 0.25), 0 0 100px hsl(43 60% 52% / 0.1)'
                    : '0 8px 32px hsl(216 50% 5% / 0.3)',
                  borderColor: hoveredFeature === index
                    ? 'hsl(43 60% 52% / 0.5)'
                    : 'hsl(43 60% 52% / 0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(43 60% 52%), transparent)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6"
                  animate={{
                    scale: hoveredFeature === index ? 1.15 : 1,
                    rotate: hoveredFeature === index ? 10 : 0,
                    boxShadow: hoveredFeature === index
                      ? '0 0 30px hsl(43 60% 52% / 0.4)'
                      : '0 0 0px transparent',
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-3"
                  animate={{
                    color: hoveredFeature === index ? 'hsl(43 60% 52%)' : 'hsl(210 40% 95%)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, hi) => (
                    <motion.div
                      key={highlight}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredFeature === index ? 1 : 0.7,
                        x: hoveredFeature === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3, delay: hi * 0.05 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits Grid - New Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-foreground">ما يميزنا </span>
            <span className="text-gradient-gold">أكثر</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card p-4 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.08 }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'hsl(43 60% 52% / 0.5)',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredBenefit === index ? 1 : 0 }}
                />
                <motion.div
                  animate={{
                    scale: hoveredBenefit === index ? 1.2 : 1,
                    rotate: hoveredBenefit === index ? 10 : 0,
                  }}
                  transition={{ type: "spring" }}
                >
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <h4 className="font-bold text-sm text-foreground mb-1">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mini Testimonials - New Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card-gold p-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
