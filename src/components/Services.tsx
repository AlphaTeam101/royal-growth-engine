import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Rocket, ArrowLeft, Smartphone, Server, ShoppingCart, BarChart3, Target } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const egyptServices = [
    { icon: Smartphone, title: 'تطبيقات الموبايل', desc: 'iOS & Android' },
    { icon: Code, title: 'تطوير الويب', desc: 'React & Next.js' },
    { icon: Server, title: 'البنية التحتية', desc: 'Cloud & DevOps' },
  ];

  const saudiServices = [
    { icon: Target, title: 'الحملات الإعلانية', desc: 'Meta & Google' },
    { icon: ShoppingCart, title: 'التجارة الإلكترونية', desc: 'نمو المبيعات' },
    { icon: BarChart3, title: 'تحليل البيانات', desc: 'قرارات ذكية' },
  ];

  return (
    <section ref={ref} id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="heading-lg mb-6">
            نحن <span className="text-gradient-gold">شريك النمو</span>
            <br />
            وليس مجرد شركة برمجة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نجمع بين التميز التقني في مصر والفهم العميق للسوق السعودي
          </p>
        </motion.div>

        {/* Split Screen Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* Egypt Side - The Engine */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card-gold p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">فريق مصر</span>
                <h3 className="text-xl font-bold text-foreground">المحرك التقني</h3>
              </div>
            </div>
            
            <h4 className="heading-md text-primary mb-4">
              هندسة برمجية عالمية
            </h4>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              فريق من أفضل المهندسين المصريين يبني حلولاً تقنية قابلة للتوسع بأعلى معايير الجودة
            </p>

            <div className="space-y-4">
              {egyptServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <service.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{service.title}</p>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Connection */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex lg:flex-col items-center justify-center py-8"
          >
            <div className="flex lg:flex-col items-center gap-4">
              <motion.div
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center gold-glow-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowLeft className="w-8 h-8 text-primary-foreground rotate-90 lg:rotate-0" />
              </motion.div>
              
              <div className="text-center">
                <p className="text-primary font-bold text-lg">نبني في مصر</p>
                <p className="text-muted-foreground text-sm">↓</p>
                <p className="text-primary font-bold text-lg">ننمي في السعودية</p>
              </div>
              
              <motion.div
                className="hidden lg:block h-32 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Saudi Side - The Fuel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card-gold p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">فريق السعودية</span>
                <h3 className="text-xl font-bold text-foreground">وقود النمو</h3>
              </div>
            </div>
            
            <h4 className="heading-md text-primary mb-4">
              تسويق رقمي موجه للنتائج
            </h4>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              خبراء في السوق السعودي يضمنون وصول منتجك للعملاء المناسبين وتحقيق عائد استثمار مرتفع
            </p>

            <div className="space-y-4">
              {saudiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <service.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{service.title}</p>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
