import { motion } from 'framer-motion';
import { ArrowLeft, Play, Sparkles, Zap, Award, Globe, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-3, 3, -3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: Zap, label: 'سرعة في التنفيذ' },
    { icon: Award, label: 'جودة عالمية' },
    { icon: Globe, label: 'وصول إقليمي' },
    { icon: TrendingUp, label: 'نمو مستدام' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Mesh Background - Enhanced */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />

        {/* Multiple animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(216 50% 18%) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 150, 80, 0],
            y: [0, 80, 150, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(43 60% 35%) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, -100, -50, 0],
            y: [0, -80, -150, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, hsl(43 70% 50%) 0%, transparent 50%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(180 50% 40%) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Floating Particles Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Gold Glow Effect - Enhanced */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(43 60% 52% / 0.3) 0%, hsl(43 60% 52% / 0.15) 25%, hsl(43 60% 52% / 0.05) 50%, transparent 70%)',
        }}
        variants={glowVariants}
        animate="animate"
      />

      <div className="section-container relative z-10 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Double Badge - Company meaning + tagline */}
          <motion.div variants={itemVariants} className="mb-8 space-y-3">
            {/* First Badge - Company meaning */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card-gold text-primary text-base font-bold"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(43 60% 52% / 0.4)' }}
              animate={{
                boxShadow: [
                  '0 0 20px hsl(43 60% 52% / 0.2)',
                  '0 0 35px hsl(43 60% 52% / 0.4)',
                  '0 0 20px hsl(43 60% 52% / 0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.span>
              مستوى آخر من الجودة والإبداع
              <motion.span
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.span>
            </motion.div>

            {/* Second Badge - Partner tagline */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/50 backdrop-blur-sm text-muted-foreground text-sm font-medium border border-border/50">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                شريكك الموثوق في التحول الرقمي
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline - Enhanced with letter animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="heading-xl leading-tight">
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                نبني{' '}
              </motion.span>
              <motion.span
                className="text-gradient-gold inline-block relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
              >
                التقنية
                <motion.span
                  className="absolute -inset-2 bg-primary/10 rounded-xl -z-10"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
              <br />
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                و ننمي{' '}
              </motion.span>
              <motion.span
                className="text-gradient-gold inline-block relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", bounce: 0.4 }}
              >
                أعمالك
                <motion.span
                  className="absolute -inset-2 bg-primary/10 rounded-xl -z-10"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Enhanced Subheadline with more description */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              وكالة متخصصة في تطوير البرمجيات والتسويق الرقمي
            </p>
            <motion.p
              className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              نجمع بين الخبرة التقنية المصرية العالمية والفهم العميق للسوق السعودي والخليجي
              <br />
              <span className="text-primary font-semibold">لنحقق لك نتائج استثنائية تتجاوز التوقعات</span>
            </motion.p>
          </motion.div>

          {/* Feature Pills - New animated section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: 'hsl(43 60% 52% / 0.5)',
                  boxShadow: '0 0 20px hsl(43 60% 52% / 0.2)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                </motion.div>
                {feature.label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Enhanced with more effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              className="btn-gold flex items-center gap-3 group relative overflow-hidden text-lg px-10 py-5"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 50px hsl(43 60% 52% / 0.6), 0 0 100px hsl(43 60% 52% / 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px hsl(43 60% 52% / 0.3)',
                  '0 0 40px hsl(43 60% 52% / 0.5)',
                  '0 0 20px hsl(43 60% 52% / 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative z-10 font-bold">ابدأ مشروعك الآن</span>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowLeft className="w-6 h-6 relative z-10" />
              </motion.div>
            </motion.button>

            <motion.button
              className="btn-glass flex items-center gap-3 group text-lg px-8 py-5"
              whileHover={{
                scale: 1.05,
                borderColor: 'hsl(43 60% 52% / 0.7)',
                boxShadow: '0 0 30px hsl(43 60% 52% / 0.25)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-6 h-6 fill-primary text-primary" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              شاهد أعمالنا
            </motion.button>
          </motion.div>

          {/* Stats Row - New animated section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: '8+', label: 'سنوات خبرة' },
              { number: '50+', label: 'مشروع ناجح' },
              { number: '4', label: 'أسواق إقليمية' },
              { number: '98%', label: 'رضا العملاء' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-1"
                  animate={{
                    textShadow: [
                      '0 0 10px hsl(43 60% 52% / 0.3)',
                      '0 0 20px hsl(43 60% 52% / 0.5)',
                      '0 0 10px hsl(43 60% 52% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/30"
          >
            <p className="text-muted-foreground text-sm mb-6">
              موثوق من قبل الشركات الرائدة في المملكة العربية السعودية والخليج
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {['شركة 1', 'شركة 2', 'شركة 3', 'شركة 4', 'شركة 5'].map((company, index) => (
                <motion.div
                  key={company}
                  className="glass-card px-6 py-3 text-muted-foreground/60 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{
                    borderColor: 'hsl(43 60% 52% / 0.4)',
                    color: 'hsl(43 60% 52%)',
                    boxShadow: '0 0 25px hsl(43 60% 52% / 0.15)',
                    scale: 1.05,
                  }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Side Elements */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-16 rounded-full bg-primary/30"
            animate={{ opacity: [0.3, 0.8, 0.3], height: ['60px', '80px', '60px'] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground">اكتشف المزيد</span>
          <motion.div
            className="w-7 h-12 rounded-full border-2 border-primary/50 flex justify-center pt-2 backdrop-blur-sm"
            animate={{
              borderColor: ['hsl(43 60% 52% / 0.5)', 'hsl(43 60% 52% / 0.9)', 'hsl(43 60% 52% / 0.5)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
