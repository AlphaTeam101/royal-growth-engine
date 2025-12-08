import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Smartphone, Globe, Users, Sparkles, Star, ArrowLeft, CheckCircle } from 'lucide-react';

// Project images - using new banner images
import ehtirafy1 from '../assets/projects/ehtirafy-1.png';
import hotelShowcase from '../assets/projects/hotel-showcase.png';
import besmarShowcase from '../assets/projects/besmar-showcase copy.png';
import ecocarShowcase from '../assets/projects/ecocar-showcase.png';

interface Project {
  id: number;
  title: string;
  titleAr: string;
  tagline: string;
  description: string;
  techStack: string;
  image: string;
  market: string;
  stats: string;
  keyFeatures: string[];
  rating: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Besmar",
    titleAr: "بسمار",
    tagline: "منظومة تجارة إلكترونية متعددة البائعين - محرك نمو متكامل.",
    description: "تطبيق سوق إلكتروني قوي (Multi-Vendor Marketplace) مصمم للتعامل مع آلاف المنتجات والبائعين في آن واحد. يوفر لوحات تحكم منفصلة، نظام تتبع مخزون دقيق، بوابات دفع آمنة، وتجربة شراء سلسة تضمن زيادة معدلات التحويل (Conversion Rate) ونمو المبيعات.",
    techStack: "React Native, Node.js",
    image: besmarShowcase,
    market: "السوق العراقي",
    stats: "+240,000 منتج",
    keyFeatures: ["إدارة بائعين متقدمة", "تحليلات مبيعات فورية", "دعم فني متكامل", "تطبيق بائع & عميل"],
    rating: 4.9,
  },
  {
    id: 2,
    title: "Hospitality ERP",
    titleAr: "نظام إدارة الفنادق",
    tagline: "نظام إدارة الفنادق (ERP) - الفخامة تبدأ من الكفاءة التشغيلية.",
    description: "حل مؤسسي متكامل لتبسيط كافة عمليات الفنادق الفاخرة. يغطي إدارة الحجوزات المركزية (CRS)، لوجستيات خدمة الغرف، إدارة المكاتب الأمامية، والتقارير المالية. يهدف لتقليل التكاليف التشغيلية وتحسين تجربة النزيل.",
    techStack: "React, .NET Core",
    image: hotelShowcase,
    market: "السوق الأردني",
    stats: "+15 فندق",
    keyFeatures: ["حجز مركزي", "إدارة خدمات الغرف", "تقارير إشغال", "تكامل مع أنظمة خارجية"],
    rating: 4.8,
  },
  {
    id: 3,
    title: "Ehtirafy",
    titleAr: "احترافي",
    tagline: "احترافي - المنصة الأولى لربط المبدعين بالعملاء في المملكة.",
    description: "منصة موبايل رائدة تجمع بين المصورين المحترفين والعملاء في السعودية. تتميز بنظام حجز فوري ذكي، معارض أعمال تفاعلية، وبوابات دفع آمنة وموثوقة. بنيت لتتحمل الضغط العالي وتقديم أداء استثنائي.",
    techStack: "Flutter, Clean Architecture",
    image: ehtirafy1,
    market: "السوق السعودي",
    stats: "+5000 مستخدم نشط",
    keyFeatures: ["بحث ذكي عن مصورين", "حجز ودفع فوري", "تقييمات ومراجعات", "تطبيق للمصور & العميل"],
    rating: 4.9,
  },
  {
    id: 4,
    title: "Eco Car",
    titleAr: "أكو سيارة",
    tagline: "أكو سيارة - ثورة رقمية في قطاع السيارات بالعراق.",
    description: "منصة شاملة ومتطورة لبيع، شراء، وتأجير السيارات. تقدم تجربة مستخدم فريدة مع فلاتر بحث متقدمة، دردشة فورية بين البائع والمشتري، خدمات تحديد الموقع الجغرافي، وعرض تفصيلي لمواصفات المركبات.",
    techStack: "Flutter, Firebase",
    image: ecocarShowcase,
    market: "السوق العراقي",
    stats: "+10,000 إعلان",
    keyFeatures: ["سوق بيع وشراء", "نظام تأجير سيارات", "فلاتر بحث متقدمة", "دردشة داخل التطبيق"],
    rating: 4.7,
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={ref} id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      {/* Floating Orbs - More dynamic */}
      <motion.div
        className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(43 60% 52%) 0%, transparent 60%)' }}
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.25, 0.1], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(216 50% 30%) 0%, transparent 50%)' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            left: `${8 + i * 10}%`,
            top: `${10 + (i % 4) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="section-container relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
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
            أعمالنا المميزة
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
            مشاريع{' '}
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
              صنعت الفرق
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            نماذج من مشاريعنا التي حققت نتائج استثنائية لعملائنا في الخليج والشرق الأوسط
          </motion.p>

          {/* Success metrics */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {[
              { label: 'نسبة رضا العملاء', value: '98%' },
              { label: 'مشروع مكتمل', value: '50+' },
              { label: 'سوق إقليمي', value: '4' },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                className="text-center px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gradient-gold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid - Enhanced */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Container with enhanced effects */}
              <motion.div
                className="glass-card-gold overflow-hidden h-full flex flex-col relative"
                animate={{
                  boxShadow: hoveredId === project.id
                    ? '0 0 60px hsl(43 60% 52% / 0.35), 0 0 120px hsl(43 60% 52% / 0.15), inset 0 1px 0 hsl(43 60% 52% / 0.3)'
                    : '0 8px 32px hsl(216 50% 5% / 0.5), inset 0 1px 0 hsl(43 60% 52% / 0.1)',
                  borderColor: hoveredId === project.id
                    ? 'hsl(43 60% 52% / 0.6)'
                    : 'hsl(43 60% 52% / 0.2)',
                  rotateY: hoveredId === project.id ? 2 : 0,
                  rotateX: hoveredId === project.id ? -2 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(43 60% 52% / 0.3), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: hoveredId === project.id ? ['0% 0%', '200% 0%'] : '0% 0%'
                  }}
                  transition={{ duration: 2, repeat: hoveredId === project.id ? Infinity : 0, ease: "linear" }}
                />

                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.titleAr}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.12 : 1,
                      filter: hoveredId === project.id ? 'brightness(1.1)' : 'brightness(1)',
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Multiple gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Stats Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60 flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-4 text-sm">
                      <motion.span
                        className="flex items-center gap-2 text-primary"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: hoveredId === project.id ? 0 : -20, opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Globe className="w-4 h-4" />
                        {project.market}
                      </motion.span>
                      <motion.span
                        className="flex items-center gap-2 text-foreground"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: hoveredId === project.id ? 0 : -20, opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <Users className="w-4 h-4" />
                        {project.stats}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Market Badge - Enhanced */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                      boxShadow: hoveredId === project.id
                        ? '0 0 20px hsl(43 60% 52% / 0.5)'
                        : '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold shadow-lg">
                      {project.market}
                    </span>
                  </motion.div>

                  {/* Rating Badge - New */}
                  <motion.div
                    className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-bold text-foreground">{project.rating}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                  {/* Decorative line */}
                  <motion.div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, hsl(43 60% 52% / 0.3), transparent)',
                    }}
                    animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="mb-4">
                    <motion.h3
                      className="text-2xl font-bold text-primary mb-1"
                      animate={{
                        textShadow: hoveredId === project.id
                          ? '0 0 25px hsl(43 60% 52% / 0.6)'
                          : '0 0 0px transparent',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {project.titleAr}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground">
                      {project.title}
                    </p>
                  </div>

                  <motion.p
                    className="text-foreground font-semibold mb-3 leading-relaxed"
                    animate={{
                      color: hoveredId === project.id ? 'hsl(43 60% 70%)' : 'hsl(210 40% 95%)',
                    }}
                  >
                    {project.tagline}
                  </motion.p>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Key Features - Enhanced animation */}
                  <motion.div
                    className="mb-6 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredId === project.id ? 'auto' : 0,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <motion.span
                          key={feature}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 text-primary text-xs font-semibold border border-primary/25"
                          initial={{ opacity: 0, y: 15, scale: 0.8 }}
                          animate={{
                            opacity: hoveredId === project.id ? 1 : 0,
                            y: hoveredId === project.id ? 0 : 15,
                            scale: hoveredId === project.id ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.06 }}
                          whileHover={{ scale: 1.08 }}
                        >
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: hoveredId === project.id ? [0, 10, -10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Smartphone className="w-4 h-4 text-primary" />
                      </motion.div>
                      <span className="text-xs text-muted-foreground">
                        {project.techStack}
                      </span>
                    </div>

                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative overflow-hidden"
                      animate={{
                        backgroundColor: hoveredId === project.id
                          ? 'hsl(43 60% 52%)'
                          : 'transparent',
                        color: hoveredId === project.id
                          ? 'hsl(216 50% 5%)'
                          : 'hsl(43 60% 52%)',
                        boxShadow: hoveredId === project.id
                          ? '0 0 30px hsl(43 60% 52% / 0.5)'
                          : '0 0 0px transparent',
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: hoveredId === project.id ? ['100%', '-100%'] : '-100%' }}
                        transition={{ duration: 1.5, repeat: hoveredId === project.id ? Infinity : 0, repeatDelay: 1 }}
                      />
                      <span className="relative z-10">عرض المشروع</span>
                      <motion.div
                        animate={{ x: hoveredId === project.id ? [-3, 0, -3] : 0 }}
                        transition={{ duration: 0.8, repeat: hoveredId === project.id ? Infinity : 0 }}
                      >
                        <ArrowLeft className="w-4 h-4 relative z-10" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - New */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="btn-glass text-lg px-8 py-4 group"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px hsl(43 60% 52% / 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>عرض جميع المشاريع</span>
            <motion.span
              className="inline-block mr-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
