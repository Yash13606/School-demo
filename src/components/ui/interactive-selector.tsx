import { useState, useEffect } from 'react';
import { Monitor, BookOpen, FlaskConical, Activity, Bus, Presentation } from 'lucide-react';

const options = [
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled classrooms for interactive learning.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    icon: <Monitor size={24} className="text-white" />
  },
  {
    title: 'Well-Stocked Library',
    description: 'A vast collection of resources to fuel curiosity.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    icon: <BookOpen size={24} className="text-white" />
  },
  {
    title: 'Advanced Labs',
    description: 'Fully equipped labs to encourage experimentation.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    icon: <FlaskConical size={24} className="text-white" />
  },
  {
    title: 'Sports Complex',
    description: 'Modern facilities to promote fitness and teamwork.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    icon: <Activity size={24} className="text-white" />
  },
  {
    title: 'Safe Transport',
    description: 'GPS-enabled transport for safe travel.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    icon: <Bus size={24} className="text-white" />
  },
  {
    title: 'Auditorium',
    description: 'A modern space for events and creative expression.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80',
    icon: <Presentation size={24} className="text-white" />
  }
];

export const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex w-full max-w-6xl h-[500px] items-stretch overflow-hidden relative rounded-[32px] bg-[var(--color-surface)] shadow-2xl border border-[var(--color-sand)] p-2 gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out rounded-[24px]
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-40px)',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              flex: activeIndex === index ? '6 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow gradient for text readability */}
            <div 
              className="absolute left-0 right-0 bottom-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                height: '60%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                opacity: activeIndex === index ? 1 : 0.4
              }}
            ></div>
            
            <div className="absolute left-0 right-0 bottom-6 flex items-center justify-start z-10 pointer-events-none px-4 lg:px-6 w-full">
              <div className={`min-w-[48px] h-[48px] flex items-center justify-center rounded-full backdrop-blur-md border flex-shrink-0 transition-all duration-500 ${activeIndex === index ? 'bg-[var(--color-burnt-rust)] border-[var(--color-burnt-rust)]' : 'bg-black/30 border-white/20'}`}>
                {option.icon}
              </div>
              
              <div 
                className="info text-white whitespace-pre relative ml-4 overflow-hidden flex flex-col justify-center" 
                style={{ 
                  width: activeIndex === index ? '100%' : '0px', 
                  opacity: activeIndex === index ? 1 : 0, 
                  transition: 'all 0.5s ease' 
                }}
              >
                <div className="font-bold text-xl whitespace-nowrap mb-1">
                  {option.title}
                </div>
                <div className="text-[14px] text-white/80 whitespace-nowrap">
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
