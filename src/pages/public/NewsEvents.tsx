import React, { useEffect, useRef, useState } from 'react';
import {
  Search, SlidersHorizontal, Calendar, ArrowRight, ChevronDown,
  Send
} from 'lucide-react';

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
    <section className="pt-32 pb-16 bg-[var(--color-pure-white)]">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Side */}
          <div className="lg:pr-12">
            <FadeIn>
              <span className="text-[11px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-6 block">News & Events</span>
              <h1 className="text-5xl lg:text-[4.5rem] text-[var(--color-ink-black)] leading-[1.05] tracking-tight mb-6">
                Stories That Inspire. Moments That <span className="text-[var(--color-ember-orange)]">Matter.</span>
              </h1>
              <p className="text-[17px] text-[var(--color-warm-gray)] leading-relaxed mb-10 max-w-md">
                Discover the latest happenings, achievements, and announcements from our vibrant school community.
              </p>

              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search news, events..."
                    className="w-full bg-[var(--color-pure-white)] border border-[var(--color-sand)] focus:border-[var(--color-driftwood)] focus:ring-4 focus:ring-[var(--color-warm-canvas)] rounded-[16px] pl-6 pr-12 py-4 text-[14px] text-[var(--color-ink-black)] transition-all duration-300 placeholder:text-[var(--color-stone)] outline-none"
                  />
                  <Search size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-stone)] pointer-events-none" />
                </div>
                <button className="inline-flex items-center justify-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[var(--color-ink-black)] rounded-[16px] px-6 py-4 text-[14px] font-medium hover:bg-[var(--color-warm-canvas)] transition-all duration-300 shrink-0">
                  <SlidersHorizontal size={16} className="mr-2 text-[var(--color-warm-gray)]" /> Filter
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <FadeIn delay={150}>
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Students walking on campus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Event Card */}
              <div className="absolute -bottom-6 lg:-bottom-8 right-6 lg:right-12 bg-[var(--color-pure-white)]/95 backdrop-blur-xl rounded-[20px] p-5 border border-[var(--color-sand)] flex items-center gap-4 min-w-[280px]">
                <div className="w-12 h-12 rounded-[14px] bg-[var(--color-warm-canvas)] border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-ember-orange)] shrink-0">
                  <Calendar size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[var(--color-warm-gray)] uppercase tracking-wide mb-0.5">Upcoming Event</p>
                  <p className="text-[14px] font-semibold text-[var(--color-ink-black)] leading-snug">Annual Sports Day 2025</p>
                  <p className="text-[12px] text-[var(--color-warm-gray)] mt-0.5">15 November 2025</p>
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
    <section className="py-16 bg-[var(--color-pure-white)]">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Top Stories (Left Column) */}
          <div className="lg:col-span-8">
            <FadeIn>
              <h2 className="text-2xl text-[var(--color-ink-black)] mb-8">Top Stories</h2>

              {/* Featured Large Card */}
              <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-2 flex flex-col md:flex-row gap-6 mb-6 hover:border-[var(--color-driftwood)] transition-all duration-300 group cursor-pointer">
                <div className="md:w-1/2 overflow-hidden rounded-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                    alt="Trophy"
                    className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-3">Achievement</span>
                  <h3 className="text-2xl lg:text-3xl text-[var(--color-ink-black)] leading-snug mb-4 group-hover:text-[var(--color-ember-orange)] transition-colors">
                    Green Valley Students Win National Science Championship 2025
                  </h3>
                  <p className="text-[14px] text-[var(--color-warm-gray)] leading-relaxed mb-6">
                    Our talented team secured first place at the National Science Championship, showcasing innovation, teamwork and excellence.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-[12px] text-[var(--color-stone)] font-medium">
                      <Calendar size={14} className="mr-1.5" /> May 8, 2025
                    </div>
                    <ArrowRight size={18} className="text-[var(--color-ember-orange)]" />
                  </div>
                </div>
              </div>

              {/* Smaller Cards Row */}
              <div className="grid sm:grid-cols-2 gap-6">

                <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-2 flex flex-col hover:border-[var(--color-driftwood)] transition-all duration-300 group cursor-pointer">
                  <div className="overflow-hidden rounded-[20px] aspect-video mb-5">
                    <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" alt="Cultural Fest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-2">Event</span>
                    <h3 className="text-[18px] text-[var(--color-ink-black)] leading-snug mb-4 group-hover:text-[var(--color-ember-orange)] transition-colors">
                      Grand Cultural Fest Celebrates Talent and Diversity
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-[var(--color-sand)]/50">
                      <div className="flex items-center text-[12px] text-[var(--color-stone)] font-medium">
                        <Calendar size={14} className="mr-1.5" /> May 5, 2025
                      </div>
                      <ArrowRight size={16} className="text-[var(--color-ember-orange)]" />
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-2 flex flex-col hover:border-[var(--color-driftwood)] transition-all duration-300 group cursor-pointer">
                  <div className="overflow-hidden rounded-[20px] aspect-video mb-5">
                    <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=800&q=80" alt="Planting Drive" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-2">Initiative</span>
                    <h3 className="text-[18px] text-[var(--color-ink-black)] leading-snug mb-4 group-hover:text-[var(--color-ember-orange)] transition-colors">
                      Green Tomorrow Drive: Planting a Better Future
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-[var(--color-sand)]/50">
                      <div className="flex items-center text-[12px] text-[var(--color-stone)] font-medium">
                        <Calendar size={14} className="mr-1.5" /> May 2, 2025
                      </div>
                      <ArrowRight size={16} className="text-[var(--color-ember-orange)]" />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Upcoming Events (Right Column) */}
          <div className="lg:col-span-4">
            <FadeIn delay={150}>
              <h2 className="text-2xl text-[var(--color-ink-black)] mb-8">Upcoming Events</h2>

              <div className="bg-[var(--color-warm-canvas)] border border-[var(--color-sand)] rounded-[24px] p-2">
                {upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="flex gap-5 p-4 sm:p-5 hover:bg-[var(--color-pure-white)] rounded-[20px] transition-colors cursor-pointer group">
                    <div className="flex flex-col items-center justify-center w-14 h-16 rounded-[12px] border border-[var(--color-sand)] bg-[var(--color-pure-white)] group-hover:border-[var(--color-ember-orange)] transition-colors shrink-0">
                      <span className="text-[18px] font-bold text-[var(--color-ink-black)] leading-none">{evt.date}</span>
                      <span className="text-[10px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mt-1">{evt.month}</span>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-[var(--color-ink-black)] leading-snug mb-2 group-hover:text-[var(--color-ember-orange)] transition-colors">{evt.title}</h4>
                      <p className="text-[12px] text-[var(--color-warm-gray)] mb-0.5">{evt.time}</p>
                      <p className="text-[12px] text-[var(--color-stone)]">{evt.loc}</p>
                    </div>
                  </div>
                ))}

                <div className="p-2 mt-2">
                  <button className="w-full inline-flex items-center justify-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[var(--color-ink-black)] rounded-[16px] py-4 text-[13px] font-medium transition-all duration-300 hover:bg-[var(--color-warm-canvas)] hover:border-[var(--color-driftwood)]">
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
  const categories = ['All News', 'Academics', 'Sports', 'Achievements', 'Wellness'];

  const gridNews = [
    { cat: 'ACADEMICS', title: 'Tech Club Launches AI Learning Workshop', desc: 'Students explored the future of technology through hands-on AI learning sessions.', date: 'April 28, 2025', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80' },
    { cat: 'SPORTS', title: 'Under-16 Football Team Clinches Victory', desc: 'A thrilling match ends in victory for our champions. Great teamwork!', date: 'April 25, 2025', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80' },
    { cat: 'ACHIEVEMENTS', title: 'Olympiad Winners Make Us Proud', desc: 'Several students excel in the International Mathematics Olympiad.', date: 'April 22, 2025', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
    { cat: 'WELLNESS', title: 'Mindfulness Session Promotes Well-being', desc: 'Special session conducted for students to promote mental wellness and focus.', date: 'April 20, 2025', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredNews = activeCategory === 'All News'
    ? gridNews
    : gridNews.filter((news) => news.cat.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-16 bg-[var(--color-pure-white)]">
      <div className="page-wrap">

        <FadeIn>
          {/* Filters Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 border-b border-[var(--color-sand)] pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[var(--color-ember-orange)] text-white'
                      : 'bg-[var(--color-warm-canvas)] text-[var(--color-warm-gray)] hover:bg-[var(--color-sand)] hover:text-[var(--color-ink-black)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative shrink-0 w-full md:w-auto">
              <select className="w-full md:w-[180px] appearance-none bg-[var(--color-pure-white)] border border-[var(--color-sand)] focus:border-[var(--color-driftwood)] rounded-full px-5 py-2.5 text-[13px] text-[var(--color-ink-black)] outline-none cursor-pointer">
                <option>Latest First</option>
                <option>Oldest First</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-warm-gray)] pointer-events-none" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          {/* 4-Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNews.map((news, idx) => (
              <div key={idx} className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-2 flex flex-col hover:border-[var(--color-driftwood)] transition-all duration-300 group cursor-pointer">
                <div className="overflow-hidden rounded-[20px] aspect-[4/3] mb-5">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-2">{news.cat}</span>
                  <h3 className="text-[17px] text-[var(--color-ink-black)] leading-snug mb-3 group-hover:text-[var(--color-ember-orange)] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-warm-gray)] leading-relaxed mb-6">
                    {news.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-[var(--color-sand)]/50">
                    <div className="flex items-center text-[12px] text-[var(--color-stone)] font-medium">
                      <Calendar size={14} className="mr-1.5" /> {news.date}
                    </div>
                    <ArrowRight size={16} className="text-[var(--color-ember-orange)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[var(--color-ink-black)] rounded-full px-8 py-3.5 text-[13px] font-medium transition-all duration-300 hover:bg-[var(--color-warm-canvas)] hover:border-[var(--color-driftwood)]">
              Load More News <ChevronDown size={16} className="ml-2 text-[var(--color-warm-gray)]" />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

function NewsletterBanner() {
  return (
    <section className="py-16 bg-[var(--color-pure-white)]">
      <div className="page-wrap">
        <FadeIn>
          <div className="bg-[var(--color-warm-canvas)] rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">

            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-4">
                Stay Updated With <br/>Green Valley News
              </h2>
              <p className="text-[15px] text-[var(--color-warm-gray)] mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Subscribe to our newsletter and never miss important updates and stories.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow bg-[var(--color-pure-white)] border border-[var(--color-sand)] focus:border-[var(--color-ember-orange)] rounded-full px-6 py-4 text-[14px] text-[var(--color-ink-black)] transition-all duration-300 outline-none placeholder:text-[var(--color-stone)]"
                />
                <button className="bg-[var(--color-ember-orange)] hover:bg-[var(--color-burnt-rust)] text-white rounded-full px-8 py-4 text-[14px] font-medium hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center shrink-0">
                  Subscribe <ArrowRight size={16} strokeWidth={2} className="ml-2" />
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
              {/* Illustrative Graphic Placeholder mimicking the envelope in the design */}
              <div className="relative w-64 h-48 bg-[var(--color-sand)] rounded-2xl flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-[var(--color-driftwood)] rounded-2xl m-2"></div>
                <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] px-6 py-4 rounded-xl transform -rotate-6 flex flex-col items-center">
                  <span className="text-[20px] font-bold text-[var(--color-ink-black)] mb-2">NEWS</span>
                  <div className="w-16 h-1 bg-[var(--color-sand)] rounded-full mb-1.5"></div>
                  <div className="w-12 h-1 bg-[var(--color-sand)] rounded-full mb-1.5"></div>
                  <div className="w-20 h-1 bg-[var(--color-sand)] rounded-full"></div>
                </div>
                <Send size={32} className="absolute -top-4 -right-4 text-[var(--color-ember-orange)] transform rotate-12" />
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TopStoriesAndEvents />
      <NewsGrid />
      <NewsletterBanner />
    </div>
  )
}
