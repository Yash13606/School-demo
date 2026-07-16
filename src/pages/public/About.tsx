import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Trophy, Target, Shield, Lightbulb, Users, Award, CheckCircle, Zap } from 'lucide-react'

// --- Animation Helper ---
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ==========================================
// SECTIONS
// ==========================================

function HeroSection() {
  return (
    <section className="page-wrap pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <FadeIn className="lg:col-span-5 flex flex-col items-start" delay={0}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ember-orange)] mb-6">
            About Us
          </span>
          <h1 className="text-5xl lg:text-[4rem] leading-[1.1] text-[var(--color-ink-black)] mb-8">
            Shaping Future<br />Leaders Since 2004
          </h1>
          <p className="text-lg lg:text-xl text-[var(--color-warm-gray)] leading-relaxed mb-10 max-w-md">
            More than a school. A community where curiosity, confidence and character grow together.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/admissions/tour" className="inline-flex items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-8 py-3.5 font-medium hover:bg-[var(--color-burnt-rust)] transition-colors">
              Explore Campus <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/admissions/apply" className="inline-flex items-center justify-center border border-[var(--color-sand)] text-[var(--color-ink-black)] bg-[var(--color-pure-white)] rounded-full px-8 py-3.5 font-medium hover:border-[var(--color-ink-black)] transition-colors">
              Admissions
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="lg:col-span-7" delay={200}>
          <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-[36px] overflow-hidden bg-[var(--color-pure-white)] border border-[var(--color-sand)]">
            <img src="/school_hero.png" alt="School Campus" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function WhoWeAreSection() {
  return (
    <section className="page-wrap py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <FadeIn className="lg:col-span-6" delay={0}>
          <div className="aspect-[4/3] rounded-[36px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200" alt="Students learning" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
        <FadeIn className="lg:col-span-6 lg:pl-8" delay={100}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ember-orange)] mb-6 block">
            Who We Are
          </span>
          <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] leading-tight mb-8">
            Every child deserves a place where learning feels inspiring.
          </h2>
          <p className="text-[var(--color-warm-gray)] text-lg leading-relaxed mb-12">
            Our school blends academic excellence, modern teaching methods and character development to prepare students for an ever-changing world. We believe in nurturing the unique potential of each individual.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--color-sand)]">
            <div>
              <p className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-2">20+</p>
              <p className="text-sm text-[var(--color-warm-gray)]">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-2">1200+</p>
              <p className="text-sm text-[var(--color-warm-gray)]">Students</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-2">85+</p>
              <p className="text-sm text-[var(--color-warm-gray)]">Faculty</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function PrincipalMessageSection() {
  return (
    <section className="page-wrap py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <FadeIn className="lg:col-span-6 lg:pr-12" delay={0}>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ember-orange)] mb-6 block">
            A Message From Our Principal
          </span>
          <blockquote className="text-3xl lg:text-4xl text-[var(--color-ink-black)] leading-snug mb-10">
            "Education is not simply about academic achievement. It is about helping every child discover confidence, compassion and purpose."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[var(--color-ember-orange)]"></div>
            <div>
              <p className="text-lg font-semibold text-[var(--color-ink-black)]">Dr. Meera Sharma</p>
              <p className="text-sm text-[var(--color-warm-gray)]">Principal</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="lg:col-span-6" delay={100}>
          <div className="aspect-[4/5] rounded-[36px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Principal" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function VisionMissionSection() {
  return (
    <section className="page-wrap py-24">
      <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8" delay={0}>
        <div className="lg:col-span-6 bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[36px] p-12 flex flex-col items-center text-center">
          <Target className="w-12 h-12 text-[var(--color-ember-orange)] mb-8" strokeWidth={1} />
          <h3 className="text-2xl text-[var(--color-ink-black)] mb-6">Vision</h3>
          <p className="text-[var(--color-warm-gray)] text-lg leading-relaxed max-w-sm">
            To nurture lifelong learners, responsible citizens and future leaders.
          </p>
        </div>
        <div className="lg:col-span-6 bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[36px] p-12 flex flex-col items-center text-center">
          <Lightbulb className="w-12 h-12 text-[var(--color-ember-orange)] mb-8" strokeWidth={1} />
          <h3 className="text-2xl text-[var(--color-ink-black)] mb-6">Mission</h3>
          <p className="text-[var(--color-warm-gray)] text-lg leading-relaxed max-w-sm">
            Deliver world-class education through innovation, values and holistic growth.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

function CoreValuesSection() {
  const values = [
    { title: 'Excellence', text: 'Always strive for your best.', icon: Trophy },
    { title: 'Integrity', text: 'Doing the right thing.', icon: Shield },
    { title: 'Curiosity', text: 'Love learning every day.', icon: Lightbulb },
    { title: 'Respect', text: 'Value every individual.', icon: Users },
    { title: 'Leadership', text: 'Lead through action.', icon: Target },
    { title: 'Innovation', text: 'Preparing for tomorrow.', icon: Zap },
  ]

  return (
    <section className="page-wrap py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        {/* Left Column: Sticky Header */}
        <div className="lg:col-span-4">
          <FadeIn className="sticky top-32" delay={0}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ember-orange)] mb-6 block">
              Our Beliefs
            </span>
            <h2 className="text-4xl lg:text-6xl text-[var(--color-ink-black)] leading-[1.1] tracking-tight mb-8">
              Core Values
            </h2>
            <p className="text-lg lg:text-xl text-[var(--color-warm-gray)] leading-relaxed max-w-sm">
              The foundational principles that guide our community, shape our culture, and drive our commitment to excellence in education.
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-[var(--color-pure-white)] rounded-[32px] p-10 lg:p-12 border border-[var(--color-sand)] hover:border-[var(--color-driftwood)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col group">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-warm-canvas)] border border-[var(--color-sand)] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-[var(--color-ember-orange)]/30 transition-all duration-500">
                    <v.icon className="w-7 h-7 text-[var(--color-ink-black)] group-hover:text-[var(--color-ember-orange)] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl text-[var(--color-ink-black)] mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-[var(--color-warm-gray)] text-lg leading-relaxed">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function CampusExperienceSection() {
  const facilities = [
    { name: 'Smart Classrooms', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-6 row-span-2' },
    { name: 'Science Labs', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80', span: 'col-span-1 lg:col-span-3 row-span-1' },
    { name: 'Library', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80', span: 'col-span-1 lg:col-span-3 row-span-1' },
    { name: 'Sports Arena', img: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80', span: 'col-span-1 lg:col-span-3 row-span-1' },
    { name: 'Arts Studio', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80', span: 'col-span-1 lg:col-span-3 row-span-1' },
    { name: 'Innovation Lab', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', span: 'col-span-1 md:col-span-2 lg:col-span-6 row-span-1' },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn className="text-center mb-16" delay={0}>
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)]">Campus Experience</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[240px] gap-4 lg:gap-6">
        {facilities.map((f, i) => (
          <FadeIn key={i} className={`${f.span} relative group rounded-[28px] overflow-hidden`} delay={i * 50}>
            <img src={f.img} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-black)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <h3 className="absolute bottom-6 left-8 text-white text-xl">{f.name}</h3>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function LeadershipSection() {
  const leaders = [
    { name: 'Dr. Meera Sharma', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Mr. Rajiv Mehta', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Ms. Ananya Iyer', role: 'Academic Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400' },
    { name: 'Mr. Arjun Varma', role: 'Head of Student Affairs', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400' },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn className="text-center mb-16" delay={0}>
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)]">Leadership Team</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((l, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-[28px] overflow-hidden mb-6 relative">
                <img src={l.image} alt={l.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-[var(--color-ink-black)] mb-1">{l.name}</h3>
                  <p className="text-sm text-[var(--color-warm-gray)]">{l.role}</p>
                </div>
                <a href="#" className="text-[var(--color-warm-gray)] hover:text-[var(--color-ember-orange)] transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function AchievementsSection() {
  const achievements = [
    { title: 'National Awards', icon: Award },
    { title: 'Board Results', icon: CheckCircle },
    { title: 'Olympiad Winners', icon: Trophy },
    { title: 'Sports Championships', icon: Award },
    { title: 'Innovation Awards', icon: Zap },
  ]

  return (
    <section className="py-24 mt-12 bg-[var(--color-ink-black)]">
      <div className="page-wrap">
        <FadeIn className="text-center mb-16" delay={0}>
          <h2 className="text-3xl lg:text-4xl text-white">Our Achievements</h2>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {achievements.map((a, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-4 hover:bg-white/10 transition-colors">
                <a.icon className="text-[var(--color-ember-orange)] w-6 h-6" strokeWidth={1.5} />
                <span className="text-white text-sm lg:text-base font-medium">{a.title}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function NumbersSection() {
  const stats = [
    { num: '1200+', label: 'Students' },
    { num: '85+', label: 'Teachers' },
    { num: '20+', label: 'Years' },
    { num: '40+', label: 'Clubs' },
    { num: '98%', label: 'Board Results' },
    { num: '25+', label: 'Sports' },
  ]

  return (
    <section className="page-wrap py-24 border-b border-[var(--color-sand)]">
      <FadeIn className="text-center mb-16" delay={0}>
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)]">School By Numbers</h2>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 50}>
            <p className="text-4xl lg:text-5xl text-[var(--color-ember-orange)] mb-3">{s.num}</p>
            <p className="text-sm text-[var(--color-warm-gray)] uppercase tracking-wider font-semibold">{s.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function JourneySection() {
  const journey = [
    { year: '2004', event: 'School Founded' },
    { year: '2010', event: 'New Campus' },
    { year: '2016', event: 'Smart Classrooms' },
    { year: '2021', event: 'STEM Innovation Lab' },
    { year: '2026', event: 'International Curriculum' },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn className="text-center mb-20" delay={0}>
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)]">Our Journey</h2>
      </FadeIn>
      <div className="relative">
        <div className="absolute top-[28px] left-0 w-full h-[1px] bg-[var(--color-sand)] hidden md:block"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 text-center">
          {journey.map((j, i) => (
            <FadeIn key={i} delay={i * 100} className="relative flex flex-col items-center">
              <div className="w-[11px] h-[11px] bg-[var(--color-ember-orange)] rounded-full mb-8 relative z-10 hidden md:block shadow-[0_0_0_8px_var(--color-warm-canvas)]"></div>
              <p className="text-2xl text-[var(--color-ink-black)] mb-2">{j.year}</p>
              <p className="text-[var(--color-warm-gray)] text-sm">{j.event}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function SchoolLifeSection() {
  return (
    <section className="page-wrap py-24">
      <FadeIn className="text-center mb-16" delay={0}>
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)]">School Life</h2>
      </FadeIn>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {[
          { title: 'Academics', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80' },
          { title: 'Sports', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80' },
          { title: 'Music', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80' },
          { title: 'Dance', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80' },
          { title: 'Events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80' },
          { title: 'Community', img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80' }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 50} className="break-inside-avoid">
            <div className="relative group rounded-[28px] overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-black)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                 <h3 className="text-white text-lg m-6">{item.title}</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function FAQAndCTASection() {
  const faqs = [
    { q: 'What curriculum do you follow?', a: 'We offer a globally recognized international curriculum designed to foster critical thinking and creativity.' },
    { q: 'What is the admission process?', a: 'The process involves an online application, an interactive session with the child, and a parent interview.' },
    { q: 'Do you provide transport?', a: 'Yes, we provide safe, GPS-enabled transport across major city routes.' },
    { q: 'Are meals available?', a: 'We offer highly nutritious, diverse meal plans prepared daily in our campus kitchen.' },
    { q: 'What extracurricular activities exist?', a: 'Students can choose from over 40 clubs including robotics, debate, arts, and comprehensive sports programs.' },
    { q: 'How do parents communicate?', a: 'Parents have direct access to our portal for real-time updates on academics, attendance, and fee management.' },
  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="page-wrap py-24 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left: FAQ */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <FadeIn delay={0}>
            <h2 className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-8 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className={`bg-[var(--color-pure-white)] border transition-colors duration-300 rounded-[16px] overflow-hidden ${openIndex === i ? 'border-[var(--color-ember-orange)]' : 'border-[var(--color-sand)] hover:border-[var(--color-driftwood)]'}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center group bg-[var(--color-pure-white)]"
                  >
                    <span className="text-base text-[var(--color-ink-black)] font-medium">{faq.q}</span>
                    <div className="text-[var(--color-warm-gray)] transition-transform duration-300 relative w-5 h-5 flex items-center justify-center shrink-0">
                      <div className={`absolute w-3 h-[2px] bg-current transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                      <div className={`absolute w-[2px] h-3 bg-current transition-transform duration-300 ${openIndex === i ? 'rotate-90 opacity-0' : ''}`} />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-[var(--color-warm-canvas)]/50 ${openIndex === i ? 'opacity-100' : 'opacity-0'}`}
                    style={{ maxHeight: openIndex === i ? '240px' : '0px' }}
                  >
                    <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed px-6 pb-5 pt-1">{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="lg:col-span-7 h-full">
          <FadeIn delay={100} className="h-full">
            <div className="relative rounded-[32px] overflow-hidden h-full min-h-[400px] flex flex-col items-center justify-center text-center p-10 lg:p-16 group">
              <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200" alt="Campus" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[var(--color-ink-black)]/70 transition-opacity duration-500 group-hover:bg-[var(--color-ink-black)]/75"></div>

              <div className="relative z-10 max-w-lg mx-auto">
                <h2 className="text-3xl lg:text-5xl text-white mb-4 leading-[1.15] tracking-tight">
                  Ready to Become Part of Our Community?
                </h2>
                <p className="text-base text-white/90 mb-8 leading-relaxed">
                  Give your child an education that inspires confidence, creativity and lifelong success.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/admissions/apply" className="inline-flex w-full sm:w-auto items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-6 py-3.5 text-sm font-medium hover:bg-[var(--color-burnt-rust)] hover:-translate-y-0.5 transition-all duration-300">
                    Apply for Admission <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/admissions/tour" className="inline-flex w-full sm:w-auto items-center justify-center bg-[var(--color-pure-white)] text-[var(--color-ink-black)] hover:bg-[var(--color-warm-canvas)] rounded-full px-6 py-3.5 text-sm font-medium hover:-translate-y-0.5 transition-all duration-300">
                    Schedule a Campus Visit <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-warm-canvas)]">
      <HeroSection />
      <WhoWeAreSection />
      <PrincipalMessageSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <CampusExperienceSection />
      <LeadershipSection />
      <AchievementsSection />
      <NumbersSection />
      <JourneySection />
      <SchoolLifeSection />
      <FAQAndCTASection />
    </div>
  )
}
