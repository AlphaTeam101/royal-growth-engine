import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Smartphone, Globe, Users } from 'lucide-react';

// Project images
import ehtirafy1 from '@/assets/projects/ehtirafy-1.png';
import hotel1 from '@/assets/projects/hotel-1.png';
import hotel2 from '@/assets/projects/hotel-2.png';
import besmar from '@/assets/projects/besmar-showcase.png';
import ecocar from '@/assets/projects/ecocar-showcase.png';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ehtirafy",
    titleAr: "احترافي",
    tagline: "ربط المبدعين بالعملاء في المملكة",
    description: "منصة موبايل متكاملة تجمع بين المصورين المحترفين والعملاء. تتميز بنظام حجز فوري، معرض أعمال، وبوابات دفع آمنة.",
    techStack: "Flutter, Clean Architecture",
    image: ehtirafy1,
    market: "السوق السعودي",
    stats: "+5000 مستخدم نشط",
  },
  {
    id: 2,
    title: "Besmar",
    titleAr: "بسمار",
    tagline: "منظومة تجارة إلكترونية متعددة البائعين",
    description: "تطبيق سوق إلكتروني قوي يدعم إدارة البائعين المعقدة، تتبع المخزون، وتجارب دفع سلسة. محسّن للتحويل ونمو المبيعات.",
    techStack: "React Native, Node.js",
    image: besmar,
    market: "السوق العراقي",
    stats: "+240,000 منتج",
  },
  {
    id: 3,
    title: "Hospitality ERP",
    titleAr: "نظام إدارة الفنادق",
    tagline: "تبسيط عمليات الفنادق الفاخرة",
    description: "نظام إدارة مؤسسي متكامل يركز على لوجستيات الحجز، إدارة خدمة الغرف، والكفاءة التشغيلية لقطاع الضيافة.",
    techStack: "React, .NET Core",
    image: hotel1,
    market: "السوق الأردني",
    stats: "+15 فندق",
  },
  {
    id: 4,
    title: "Eco Car",
    titleAr: "أكو سيارة",
    tagline: "ثورة في قطاع السيارات بالعراق",
    description: "منصة شاملة لبيع وشراء وتأجير السيارات. تتميز بفلترة متقدمة، دردشة فورية، وخدمات تحديد المواقع.",
    techStack: "Flutter, Firebase",
    image: ecocar,
    market: "السوق العراقي",
    stats: "+10,000 إعلان",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} id="portfolio" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            أعمالنا المميزة
          </span>
          <h2 className="heading-lg mb-6">
            مشاريع <span className="text-gradient-gold">صنعت الفرق</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نماذج من مشاريعنا التي حققت نتائج استثنائية لعملائنا
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="glass-card-gold overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.titleAr}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-primary">
                        <Globe className="w-4 h-4" />
                        {project.market}
                      </span>
                      <span className="flex items-center gap-2 text-foreground">
                        <Users className="w-4 h-4" />
                        {project.stats}
                      </span>
                    </div>
                  </motion.div>

                  {/* Market Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                      {project.market}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {project.titleAr}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.title}
                    </p>
                  </div>

                  <p className="text-foreground font-semibold mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {project.techStack}
                      </span>
                    </div>

                    <motion.button
                      className="flex items-center gap-2 text-primary text-sm font-semibold group/btn"
                      whileHover={{ x: -5 }}
                    >
                      عرض المشروع
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
