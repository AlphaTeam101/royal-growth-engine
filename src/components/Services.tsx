import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Rocket, ArrowLeft, Smartphone, Server, ShoppingCart, BarChart3, Target, Sparkles, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const coreServices = [
    { icon: Smartphone, title: 'تطبيقات الموبايل', desc: 'iOS & Android', detail: 'تطبيقات عالية الأداء بتجربة مستخدم استثنائية' },
    { icon: Code, title: 'تطوير الويب', desc: 'React & Next.js', detail: 'مواقع وتطبيقات ويب حديثة وسريعة' },
    { icon: Server, title: 'البنية التحتية', desc: 'Cloud & DevOps', detail: 'حلول سحابية قابلة للتوسع والنمو' },
  ];

  const saudiServices = [
    { icon: Target, title: 'الحملات الإعلانية', desc: 'Meta & Google', detail: 'حملات مستهدفة تحقق نتائج ملموسة' },
    { icon: ShoppingCart, title: 'التجارة الإلكترونية', desc: 'نمو المبيعات', detail: 'استراتيجيات لزيادة التحويل والمبيعات' },
    { icon: BarChart3, title: 'تحليل البيانات', desc: 'قرارات ذكية', detail: 'تحليلات عميقة لاتخاذ قرارات مدروسة' },
  ];

  const allServices = [...coreServices, ...saudiServices];

  return (
    <section ref={ref} id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />

      {/* Multiple Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.4, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(216 50% 25%) 0%, transparent 60%)' }}
        animate={{ scale: [1.4, 1, 1.4], x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(43 70% 55%) 0%, transparent 50%)' }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            left: `${5 + i * 13}%`,
            top: `${10 + (i % 3) * 35}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
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
            خدماتنا المتكاملة
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
            نحن{' '}
            <motion.span
              className="text-gradient-gold inline-block"
              animate={{
                textShadow: [
                  '0 0 20px hsl(43 60% 52% / 0.3)',
                  '0 0 40px hsl(43 60% 52% / 0.6)',
                  '0 0 20px hsl(43 60% 52% / 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              شريك النمو
            </motion.span>
            <br />
            وليس مجرد شركة برمجة
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            نجمع بين الخبرة التقنية العميقة وفهم السوق المحلي لنقدم حلولاً متكاملة
          </motion.p>

          {/* Service Categories Pills - New */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {allServices.map((service, i) => (
              <motion.div
                key={service.title}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: 'hsl(43 60% 52% / 0.5)',
                  boxShadow: '0 0 20px hsl(43 60% 52% / 0.2)',
                }}
              >
                <service.icon className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">{service.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Split Screen Services - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* In-House Team - Core Services */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 group"
            onMouseEnter={() => setHoveredCard('core')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              className="glass-card-gold p-8 md:p-10 h-full relative overflow-hidden"
              animate={{
                boxShadow: hoveredCard === 'core'
                  ? '0 0 60px hsl(43 60% 52% / 0.3), 0 0 120px hsl(43 60% 52% / 0.15)'
                  : '0 8px 32px hsl(216 50% 5% / 0.5)',
                borderColor: hoveredCard === 'core'
                  ? 'hsl(43 60% 52% / 0.6)'
                  : 'hsl(43 60% 52% / 0.2)',
                scale: hoveredCard === 'core' ? 1.02 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                animate={{ opacity: hoveredCard === 'core' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Top decorative line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(43 60% 52%), transparent)',
                }}
                animate={{ scaleX: hoveredCard === 'core' ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative"
                    animate={{
                      boxShadow: hoveredCard === 'core' ? '0 0 30px hsl(43 60% 52% / 0.4)' : '0 0 0px transparent',
                      scale: hoveredCard === 'core' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Code className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                    <motion.div
                      className="flex items-center gap-2"
                      animate={{ x: hoveredCard === 'core' ? 5 : 0 }}
                    >
                      <span className="text-3xl">🇸🇦</span>
                      <span className="text-xs text-muted-foreground">فريقنا المتخصص</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">المحرك التقني</h3>
                  </div>
                </div>

                <motion.h4
                  className="heading-md text-primary mb-4"
                  animate={{
                    textShadow: hoveredCard === 'core'
                      ? '0 0 20px hsl(43 60% 52% / 0.5)'
                      : '0 0 0px transparent',
                  }}
                >
                  هندسة برمجية بمعايير عالمية
                </motion.h4>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  فريق متخصص يبني حلولاً تقنية قابلة للتوسع بأعلى معايير الجودة العالمية
                </p>

                <div className="space-y-4">
                  {coreServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="p-4 rounded-xl bg-background/50 border border-border/50 relative overflow-hidden group/service"
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                      whileHover={{
                        borderColor: 'hsl(43 60% 52% / 0.5)',
                        backgroundColor: 'hsl(43 60% 52% / 0.05)',
                        x: -8,
                      }}
                    >
                      {/* Hover gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index ? 1 : 0 }}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          animate={{
                            scale: hoveredService === index ? 1.15 : 1,
                            rotate: hoveredService === index ? 10 : 0,
                          }}
                          transition={{ type: "spring" }}
                        >
                          <service.icon className="w-6 h-6 text-primary mt-1" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-bold text-foreground">{service.title}</p>
                            <span className="text-xs text-primary px-2 py-0.5 rounded-full bg-primary/10">
                              {service.desc}
                            </span>
                          </div>
                          <motion.p
                            className="text-sm text-muted-foreground mt-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: hoveredService === index ? 1 : 0,
                              height: hoveredService === index ? 'auto' : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {service.detail}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Pills - New */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 'core' ? 1 : 0.7 }}
                >
                  {['React', 'Flutter', 'Node.js', 'AWS', '.NET'].map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Connection - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex lg:flex-col items-center justify-center py-8"
          >
            <div className="flex lg:flex-col items-center gap-6">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative"
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    '0 0 30px hsl(43 60% 52% / 0.4)',
                    '0 0 60px hsl(43 60% 52% / 0.7)',
                    '0 0 30px hsl(43 60% 52% / 0.4)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Zap className="w-10 h-10 text-primary-foreground" />
                {/* Pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                />
              </motion.div>

              <div className="text-center space-y-2">
                <motion.p
                  className="text-primary font-bold text-lg"
                >
                  نبني بمعايير عالمية
                </motion.p>
                <TrendingUp className="w-6 h-6 text-primary mx-auto rotate-90" />
                <motion.p
                  className="text-primary font-bold text-lg"
                >
                  وننمي أعمالك
                </motion.p>
              </div>

              <motion.div
                className="hidden lg:block h-40 w-1 rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, hsl(43 60% 52% / 0.1), hsl(43 60% 52%), hsl(43 60% 52% / 0.1))',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Saudi Side - The Fuel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 group"
            onMouseEnter={() => setHoveredCard('saudi')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              className="glass-card-gold p-8 md:p-10 h-full relative overflow-hidden"
              animate={{
                boxShadow: hoveredCard === 'saudi'
                  ? '0 0 60px hsl(43 60% 52% / 0.3), 0 0 120px hsl(43 60% 52% / 0.15)'
                  : '0 8px 32px hsl(216 50% 5% / 0.5)',
                borderColor: hoveredCard === 'saudi'
                  ? 'hsl(43 60% 52% / 0.6)'
                  : 'hsl(43 60% 52% / 0.2)',
                scale: hoveredCard === 'saudi' ? 1.02 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent"
                animate={{ opacity: hoveredCard === 'saudi' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Top decorative line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(43 60% 52%), transparent)',
                }}
                animate={{ scaleX: hoveredCard === 'saudi' ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative"
                    animate={{
                      boxShadow: hoveredCard === 'saudi' ? '0 0 30px hsl(43 60% 52% / 0.4)' : '0 0 0px transparent',
                      scale: hoveredCard === 'saudi' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Rocket className="w-8 h-8 text-primary" />
                    {/* Orbiting ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-primary/30"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <div>
                    <motion.div
                      className="flex items-center gap-2"
                      animate={{ x: hoveredCard === 'saudi' ? 5 : 0 }}
                    >
                      <span className="text-3xl">🇸🇦</span>
                      <span className="text-xs text-muted-foreground">فريق السعودية</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">وقود النمو</h3>
                  </div>
                </div>

                <motion.h4
                  className="heading-md text-primary mb-4"
                  animate={{
                    textShadow: hoveredCard === 'saudi'
                      ? '0 0 20px hsl(43 60% 52% / 0.5)'
                      : '0 0 0px transparent',
                  }}
                >
                  تسويق رقمي موجه للنتائج
                </motion.h4>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  خبراء في السوق السعودي والخليجي يضمنون وصول منتجك للعملاء المناسبين وتحقيق عائد استثمار مرتفع
                </p>

                <div className="space-y-4">
                  {saudiServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="p-4 rounded-xl bg-background/50 border border-border/50 relative overflow-hidden"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      onMouseEnter={() => setHoveredService(index + 3)}
                      onMouseLeave={() => setHoveredService(null)}
                      whileHover={{
                        borderColor: 'hsl(43 60% 52% / 0.5)',
                        backgroundColor: 'hsl(43 60% 52% / 0.05)',
                        x: 8,
                      }}
                    >
                      {/* Hover gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index + 3 ? 1 : 0 }}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          animate={{
                            scale: hoveredService === index + 3 ? 1.15 : 1,
                            rotate: hoveredService === index + 3 ? -10 : 0,
                          }}
                          transition={{ type: "spring" }}
                        >
                          <service.icon className="w-6 h-6 text-primary mt-1" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-bold text-foreground">{service.title}</p>
                            <span className="text-xs text-primary px-2 py-0.5 rounded-full bg-primary/10">
                              {service.desc}
                            </span>
                          </div>
                          <motion.p
                            className="text-sm text-muted-foreground mt-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: hoveredService === index + 3 ? 1 : 0,
                              height: hoveredService === index + 3 ? 'auto' : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {service.detail}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Platform Pills - New */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 'saudi' ? 1 : 0.7 }}
                >
                  {['Google Ads', 'Meta Ads', 'SEO', 'Analytics'].map((platform, i) => (
                    <motion.span
                      key={platform}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.9 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {platform}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA - New */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#contact"
            className="btn-gold text-lg px-10 py-5 group relative overflow-hidden inline-flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px hsl(43 60% 52% / 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 font-bold">اطلب استشارة مجانية</span>
            <ArrowLeft className="w-5 h-5 relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
