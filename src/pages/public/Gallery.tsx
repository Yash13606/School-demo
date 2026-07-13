import React, { useEffect, useRef, useState } from 'react';
import { InView } from "../../components/ui/in-view";
import { motion, AnimatePresence } from "framer-motion";

const headingStyle = { fontFamily: '"Playfair Display", serif' };
const bodyStyle = { fontFamily: '"Inter", sans-serif' };

// --- Animation Helper ---
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.opacity = '1'
              ref.current.style.transform = 'translateY(0)'
            }
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Academics', 'Campus Life', 'Sports', 'Arts & Culture'];

  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1427504494785-319ce1473799?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80', category: 'Campus Life' },
    { src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80', category: 'Arts & Culture' },
    { src: 'https://images.unsplash.com/photo-1510915361894-faa8b41da483?auto=format&fit=crop&w=800&q=80', category: 'Arts & Culture' },
    { src: 'https://images.unsplash.com/photo-1460518451285-8f6492976b05?auto=format&fit=crop&w=800&q=80', category: 'Arts & Culture' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-8">
          <FadeIn>
            <h1 className="text-5xl lg:text-[5rem] text-[#111111] mb-6 tracking-tight leading-tight" style={headingStyle}>
              Our <span className="italic font-light">Gallery</span>
            </h1>
            <p className="text-[19px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-12" style={bodyStyle}>
              Explore the vibrant life, academic excellence, and dynamic learning environments that make our community truly special.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-[#111111] text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)]' 
                      : 'bg-white text-[#6B7280] border border-[#ECE7E1] hover:border-[#D1D5DB] hover:text-[#111111]'
                  }`}
                  style={bodyStyle}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <InView
          key={activeCategory} // Reset InView state on category change
          viewOptions={{ once: true, margin: "0px 0px -150px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={item.src} // Key by source so React knows which item is which
                  className="mb-6 break-inside-avoid"
                >
                  <div className="relative group overflow-hidden rounded-2xl border border-[#ECE7E1] bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500">
                    <img
                      src={item.src}
                      alt={`${item.category} Gallery Image ${index + 1}`}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-[13px] font-medium tracking-wide bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30" style={bodyStyle}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </InView>

        {/* Load More CTA */}
        <FadeIn delay={400}>
          <div className="mt-24 text-center">
             <button className="inline-flex items-center justify-center bg-white border border-[#ECE7E1] text-[#111111] rounded-full px-8 py-3.5 text-[15px] font-medium transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#D1D5DB] shadow-sm" style={bodyStyle}>
              Load More Images
            </button>
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
