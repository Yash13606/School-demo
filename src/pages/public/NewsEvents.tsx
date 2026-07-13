import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, SlidersHorizontal, Calendar, ArrowRight, ChevronDown, 
  Mail, Send, MapPin, Phone, Clock 
} from 'lucide-react';

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

function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side */}
          <div className="lg:pr-12">
            <FadeIn>
              <span className="text-[11px] font-bold text-[#F97316] uppercase tracking-widest mb-6 block" style={bodyStyle}>News & Events</span>
              <h1 className="text-5xl lg:text-[4.5rem] text-[#111111] leading-[1.05] tracking-tight mb-6" style={headingStyle}>
                Stories That Inspire. Moments That <span className="text-[#F97316]">Matter.</span>
              </h1>
              <p className="text-[17px] text-[#6B7280] leading-relaxed mb-10 max-w-md" style={bodyStyle}>
                Discover the latest happenings, achievements, and announcements from our vibrant school community.
              </p>
              
              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-grow">
                  <input 
                    type="text" 
                    placeholder="Search news, events..." 
                    className="w-full bg-white border border-[#ECE7E1] focus:border-[#D1D5DB] focus:ring-4 focus:ring-[#FAF8F5] rounded-[16px] pl-6 pr-12 py-4 text-[14px] text-[#111111] transition-all duration-300 placeholder:text-[#9CA3AF] outline-none shadow-sm" 
                    style={bodyStyle}
                  />
                  <Search size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                </div>
                <button className="inline-flex items-center justify-center bg-white border border-[#ECE7E1] text-[#111111] rounded-[16px] px-6 py-4 text-[14px] font-medium hover:bg-[#FAF8F5] transition-all duration-300 shadow-sm shrink-0" style={bodyStyle}>
                  <SlidersHorizontal size={16} className="mr-2 text-[#6B7280]" /> Filter
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <FadeIn delay={150}>
              <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Students walking on campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Event Card */}
              <div className="absolute -bottom-6 lg:-bottom-8 right-6 lg:right-12 bg-white/95 backdrop-blur-xl rounded-[20px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 flex items-center gap-4 min-w-[280px]">
                <div className="w-12 h-12 rounded-[14px] bg-[#FAF8F5] border border-[#ECE7E1] flex items-center justify-center text-[#F97316] shrink-0">
                  <Calendar size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wide mb-0.5" style={bodyStyle}>Upcoming Event</p>
                  <p className="text-[14px] font-semibold text-[#111111] leading-snug" style={bodyStyle}>Annual Sports Day 2025</p>
                  <p className="text-[12px] text-[#6B7280] mt-0.5" style={bodyStyle}>15 November 2025</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function TopStoriesAndEvents() {
  const upcomingEvents = [
    { date: '15', month: 'NOV', title: 'Annual Sports Day 2025', time: '8:00 AM – 2:00 PM', loc: 'School Grounds' },
    { date: '22', month: 'NOV', title: 'Inter-School Debate Competition', time: '9:00 AM – 1:00 PM', loc: 'Auditorium' },
    { date: '05', month: 'DEC', title: 'Parents Orientation Program', time: '9:30 AM – 11:30 AM', loc: 'Main Hall' },
    { date: '12', month: 'DEC', title: 'Winter Carnival 2025', time: '4:00 PM – 8:00 PM', loc: 'School Campus' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Top Stories (Left Column) */}
          <div className="lg:col-span-8">
            <FadeIn>
              <h2 className="text-2xl text-[#111111] mb-8" style={headingStyle}>Top Stories</h2>
              
              {/* Featured Large Card */}
              <div className="bg-white border border-[#ECE7E1] rounded-[24px] p-2 flex flex-col md:flex-row gap-6 mb-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
                <div className="md:w-1/2 overflow-hidden rounded-[20px]">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" 
                    alt="Trophy" 
                    className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mb-3" style={bodyStyle}>Achievement</span>
                  <h3 className="text-2xl lg:text-3xl text-[#111111] leading-snug mb-4 group-hover:text-[#F97316] transition-colors" style={headingStyle}>
                    Sunrise Students Win National Science Championship 2025
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6" style={bodyStyle}>
                    Our talented team secured first place at the National Science Championship, showcasing innovation, teamwork and excellence.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-[12px] text-[#9CA3AF] font-medium" style={bodyStyle}>
                      <Calendar size={14} className="mr-1.5" /> May 8, 2025
                    </div>
                    <ArrowRight size={18} className="text-[#F97316]" />
                  </div>
                </div>
              </div>

              {/* Smaller Cards Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="bg-white border border-[#ECE7E1] rounded-[24px] p-2 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
                  <div className="overflow-hidden rounded-[20px] aspect-video mb-5">
                    <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" alt="Cultural Fest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mb-2" style={bodyStyle}>Event</span>
                    <h3 className="text-[18px] text-[#111111] leading-snug mb-4 group-hover:text-[#F97316] transition-colors" style={headingStyle}>
                      Grand Cultural Fest Celebrates Talent and Diversity
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#ECE7E1]/50">
                      <div className="flex items-center text-[12px] text-[#9CA3AF] font-medium" style={bodyStyle}>
                        <Calendar size={14} className="mr-1.5" /> May 5, 2025
                      </div>
                      <ArrowRight size={16} className="text-[#F97316]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#ECE7E1] rounded-[24px] p-2 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
                  <div className="overflow-hidden rounded-[20px] aspect-video mb-5">
                    <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=800&q=80" alt="Planting Drive" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mb-2" style={bodyStyle}>Initiative</span>
                    <h3 className="text-[18px] text-[#111111] leading-snug mb-4 group-hover:text-[#F97316] transition-colors" style={headingStyle}>
                      Green Tomorrow Drive: Planting a Better Future
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#ECE7E1]/50">
                      <div className="flex items-center text-[12px] text-[#9CA3AF] font-medium" style={bodyStyle}>
                        <Calendar size={14} className="mr-1.5" /> May 2, 2025
                      </div>
                      <ArrowRight size={16} className="text-[#F97316]" />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Upcoming Events (Right Column) */}
          <div className="lg:col-span-4">
            <FadeIn delay={150}>
              <h2 className="text-2xl text-[#111111] mb-8" style={headingStyle}>Upcoming Events</h2>
              
              <div className="bg-[#FAF8F5] border border-[#ECE7E1] rounded-[24px] p-2">
                {upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="flex gap-5 p-4 sm:p-5 hover:bg-white rounded-[20px] transition-colors cursor-pointer group">
                    <div className="flex flex-col items-center justify-center w-14 h-16 rounded-[12px] border border-[#ECE7E1] bg-white group-hover:border-[#F97316] transition-colors shrink-0">
                      <span className="text-[18px] font-bold text-[#111111] leading-none" style={headingStyle}>{evt.date}</span>
                      <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mt-1" style={bodyStyle}>{evt.month}</span>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#111111] leading-snug mb-2 group-hover:text-[#F97316] transition-colors" style={bodyStyle}>{evt.title}</h4>
                      <p className="text-[12px] text-[#6B7280] mb-0.5" style={bodyStyle}>{evt.time}</p>
                      <p className="text-[12px] text-[#9CA3AF]" style={bodyStyle}>{evt.loc}</p>
                    </div>
                  </div>
                ))}
                
                <div className="p-2 mt-2">
                  <button className="w-full inline-flex items-center justify-center bg-white border border-[#ECE7E1] text-[#111111] rounded-[16px] py-4 text-[13px] font-medium transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#D1D5DB] shadow-sm" style={bodyStyle}>
                    View All Events <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState('All News');
  const categories = ['All News', 'Achievements', 'Academics', 'Events', 'Initiatives', 'Announcements'];

  const gridNews = [
    { cat: 'ACADEMICS', title: 'Tech Club Launches AI Learning Workshop', desc: 'Students explored the future of technology through hands-on AI learning sessions.', date: 'April 28, 2025', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80' },
    { cat: 'SPORTS', title: 'Under-16 Football Team Clinches Victory', desc: 'A thrilling match ends in victory for our champions. Great teamwork!', date: 'April 25, 2025', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80' },
    { cat: 'ACHIEVEMENTS', title: 'Olympiad Winners Make Us Proud', desc: 'Several students excel in the International Mathematics Olympiad.', date: 'April 22, 2025', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
    { cat: 'WELLNESS', title: 'Mindfulness Session Promotes Well-being', desc: 'Special session conducted for students to promote mental wellness and focus.', date: 'April 20, 2025', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        <FadeIn>
          {/* Filters Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 border-b border-[#ECE7E1] pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[#F97316] text-white shadow-[0_4px_14px_rgba(249,115,22,0.2)]' 
                      : 'bg-[#FAF8F5] text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111111]'
                  }`}
                  style={bodyStyle}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative shrink-0 w-full md:w-auto">
              <select className="w-full md:w-[180px] appearance-none bg-white border border-[#ECE7E1] focus:border-[#D1D5DB] rounded-full px-5 py-2.5 text-[13px] text-[#111111] outline-none cursor-pointer shadow-sm" style={bodyStyle}>
                <option>Latest First</option>
                <option>Oldest First</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          {/* 4-Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridNews.map((news, idx) => (
              <div key={idx} className="bg-white border border-[#ECE7E1] rounded-[24px] p-2 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
                <div className="overflow-hidden rounded-[20px] aspect-[4/3] mb-5">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mb-2" style={bodyStyle}>{news.cat}</span>
                  <h3 className="text-[17px] text-[#111111] leading-snug mb-3 group-hover:text-[#F97316] transition-colors" style={headingStyle}>
                    {news.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed mb-6" style={bodyStyle}>
                    {news.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#ECE7E1]/50">
                    <div className="flex items-center text-[12px] text-[#9CA3AF] font-medium" style={bodyStyle}>
                      <Calendar size={14} className="mr-1.5" /> {news.date}
                    </div>
                    <ArrowRight size={16} className="text-[#F97316]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center bg-white border border-[#ECE7E1] text-[#111111] rounded-full px-8 py-3.5 text-[13px] font-medium transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#D1D5DB] shadow-sm" style={bodyStyle}>
              Load More News <ChevronDown size={16} className="ml-2 text-[#6B7280]" />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

function NewsletterBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="bg-[#FAF8F5] rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl text-[#111111] mb-4" style={headingStyle}>
                Stay Updated With <br/>Sunrise News
              </h2>
              <p className="text-[15px] text-[#6B7280] mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed" style={bodyStyle}>
                Subscribe to our newsletter and never miss important updates and stories.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-white border border-[#ECE7E1] focus:border-[#F97316] rounded-full px-6 py-4 text-[14px] text-[#111111] transition-all duration-300 outline-none shadow-sm placeholder:text-[#9CA3AF]"
                  style={bodyStyle}
                />
                <button className="bg-[#F97316] hover:bg-[#ea580c] text-white rounded-full px-8 py-4 text-[14px] font-medium shadow-[0_4px_14px_rgba(249,115,22,0.2)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center shrink-0" style={bodyStyle}>
                  Subscribe <ArrowRight size={16} strokeWidth={2} className="ml-2" />
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
              {/* Illustrative Graphic Placeholder mimicking the envelope in the design */}
              <div className="relative w-64 h-48 bg-[#F3EFE9] rounded-2xl flex items-center justify-center shadow-inner">
                <div className="absolute inset-0 border-2 border-dashed border-[#D1D5DB] rounded-2xl m-2"></div>
                <div className="bg-white border border-[#ECE7E1] px-6 py-4 rounded-xl shadow-lg transform -rotate-6 flex flex-col items-center">
                  <span className="text-[20px] font-bold text-[#111111] mb-2" style={headingStyle}>NEWS</span>
                  <div className="w-16 h-1 bg-[#ECE7E1] rounded-full mb-1.5"></div>
                  <div className="w-12 h-1 bg-[#ECE7E1] rounded-full mb-1.5"></div>
                  <div className="w-20 h-1 bg-[#ECE7E1] rounded-full"></div>
                </div>
                <Send size={32} className="absolute -top-4 -right-4 text-[#F97316] transform rotate-12" />
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function GlobalFooter() {
  return (
    <footer className="bg-[#111827] pt-20 pb-8 relative z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Info */}
          <div className="lg:col-span-4 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-12 bg-white rounded-t-full rounded-b-md flex flex-col items-center justify-center p-1 border-2 border-[#F97316]">
                <div className="w-full h-full border border-[#111111] rounded-t-[20px] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#111111] rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none uppercase" style={headingStyle}>Sunrise</span>
                <span className="text-[10px] tracking-widest text-[#9CA3AF] uppercase mt-1">International School</span>
              </div>
            </div>
            <p className="text-[14px] text-[#9CA3AF] leading-relaxed mb-8" style={bodyStyle}>
              Nurturing lifelong learners and leaders of tomorrow with excellence and values.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#374151] flex items-center justify-center text-[12px] font-bold text-white hover:bg-[#374151] transition-colors">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#374151] flex items-center justify-center text-[12px] font-bold text-white hover:bg-[#374151] transition-colors">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#374151] flex items-center justify-center text-[12px] font-bold text-white hover:bg-[#374151] transition-colors">YT</a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#374151] flex items-center justify-center text-[12px] font-bold text-white hover:bg-[#374151] transition-colors">LI</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-white mb-6" style={bodyStyle}>Quick Links</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-[#9CA3AF]" style={bodyStyle}>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-white mb-6" style={bodyStyle}>Academics</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-[#9CA3AF]" style={bodyStyle}>
              <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clubs & Activities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-white mb-6" style={bodyStyle}>Resources</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-[#9CA3AF]" style={bodyStyle}>
              <li><a href="#" className="hover:text-white transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-semibold text-white mb-6" style={bodyStyle}>Contact Us</h4>
            <ul className="flex flex-col gap-5 text-[14px] text-[#9CA3AF]" style={bodyStyle}>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0 mt-0.5" />
                <span>12 Ridge Road, Dehradun, Uttarakhand 248001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <span>+91 135 274 8800</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <span>info@sunrise.edu.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-white shrink-0 mt-0.5" />
                <span>Mon-Fri: 8:30 AM - 4:30 PM<br/>Sat: 9:00 AM - 12:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#374151] pt-8 text-center">
          <p className="text-[13px] text-[#9CA3AF]" style={bodyStyle}>
            © 2025 Sunrise International School. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TopStoriesAndEvents />
      <NewsGrid />
      <NewsletterBanner />
      <GlobalFooter />
    </div>
  )
}
