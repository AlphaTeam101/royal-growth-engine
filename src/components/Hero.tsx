import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Gold Glow Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(43 60% 52% / 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="section-container relative z-10 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card-gold text-primary text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              شريكك الموثوق في التحول الرقمي
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="heading-xl mb-6 leading-tight"
          >
            <span className="text-foreground">نبني </span>
            <span className="text-gradient-gold">التقنية</span>
            <br />
            <span className="text-foreground">و ننمي </span>
            <span className="text-gradient-gold">أعمالك</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            وكالة متخصصة في تطوير البرمجيات والتسويق الرقمي
            <br className="hidden md:block" />
            نجمع بين الخبرة التقنية المصرية والفهم العميق للسوق السعودي
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              className="btn-gold flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ابدأ مشروعك الآن
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="btn-glass flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              شاهد أعمالنا
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/30"
          >
            <p className="text-muted-foreground text-sm mb-6">
              موثوق من قبل الشركات الرائدة في المملكة العربية السعودية
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['شركة 1', 'شركة 2', 'شركة 3', 'شركة 4'].map((company, index) => (
                <motion.div
                  key={company}
                  className="glass-card px-6 py-3 text-muted-foreground/60 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ opacity: [1, 0.5, 1], scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
