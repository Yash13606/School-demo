import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Download, Globe, Users, Target, Brain, Atom, Map,
  BookOpen, Rocket, Search, MonitorPlay, Dumbbell, Palette, ShieldCheck,
  Microscope, Languages, FileText, Settings, Trophy, Projector,
  TrendingUp, MessageCircle, LineChart
} from 'lucide-react'

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

function AcademicsHeroSection() {
  return (
    <section className="page-wrap pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* Left */}
        <div className="lg:col-span-5">
          <FadeIn delay={0}>
             <p className="text-[var(--color-ember-orange)] font-semibold tracking-[0.15em] text-xs mb-6 uppercase">
               Academics
             </p>
             <h1 className="text-5xl lg:text-[4.5rem] text-[var(--color-ink-black)] mb-6 leading-[1.05] tracking-tight">
               Learning Today.<br/>
               <span className="text-[var(--color-ember-orange)]">Leading</span> Tomorrow.
             </h1>
             <p className="text-lg text-[var(--color-warm-gray)] mb-10 leading-relaxed max-w-lg">
               A future-focused curriculum that nurtures curiosity, builds strong foundations, and prepares students to thrive in an ever-changing world.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mb-16">
               <Link to="/academics/curriculum" className="group inline-flex items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-7 py-3.5 text-[14px] font-medium tracking-wide hover:bg-[var(--color-burnt-rust)] hover:-translate-y-0.5 transition-all duration-300">
                 Explore Curriculum
                 <ArrowRight size={16} strokeWidth={2} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
               </Link>
               <button className="group inline-flex items-center justify-center border border-[var(--color-sand)] bg-[var(--color-pure-white)] text-[var(--color-ink-black)] rounded-full px-7 py-3.5 text-[14px] font-medium tracking-wide hover:border-[var(--color-driftwood)] hover:bg-[var(--color-warm-canvas)] hover:-translate-y-0.5 transition-all duration-300">
                 Download Overview
                 <Download size={16} strokeWidth={2} className="ml-2.5 text-[var(--color-warm-gray)] transition-transform duration-300 group-hover:-translate-y-0.5" />
               </button>
             </div>

             {/* Stats Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[var(--color-sand)]">
               <div>
                 <div className="flex items-center gap-2 mb-2 text-[var(--color-ember-orange)]"><Trophy size={20} strokeWidth={1.5}/></div>
                 <p className="text-3xl text-[var(--color-ink-black)] mb-1">20+</p>
                 <p className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider font-semibold">Years of Excellence</p>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-2 text-[var(--color-ember-orange)]"><Users size={20} strokeWidth={1.5}/></div>
                 <p className="text-3xl text-[var(--color-ink-black)] mb-1">1200+</p>
                 <p className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider font-semibold">Students</p>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-2 text-[var(--color-ember-orange)]"><BookOpen size={20} strokeWidth={1.5}/></div>
                 <p className="text-3xl text-[var(--color-ink-black)] mb-1">85+</p>
                 <p className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider font-semibold">Faculty Members</p>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-2 text-[var(--color-ember-orange)]"><Target size={20} strokeWidth={1.5}/></div>
                 <p className="text-3xl text-[var(--color-ink-black)] mb-1">40+</p>
                 <p className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-wider font-semibold">Clubs & Activities</p>
               </div>
             </div>
          </FadeIn>
        </div>

        {/* Right */}
        <div className="lg:col-span-7 relative">
          <FadeIn delay={100}>
             <div className="relative rounded-[36px] overflow-hidden aspect-[4/3] lg:aspect-[3/2] bg-[var(--color-sand)]">
               <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600" alt="Students in science lab" className="w-full h-full object-cover" />
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 lg:left-[-40px] lg:bottom-16 bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-2xl p-5 pr-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-[12px] bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ember-orange)]">
                  <Atom size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[var(--color-ink-black)] font-semibold text-sm mb-0.5">Future-ready</p>
                  <p className="text-[var(--color-warm-gray)] text-xs">Skills for tomorrow's leaders.</p>
                </div>
             </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

function PhilosophySection() {
  const features = [
    { title: 'Student Centered', desc: 'Every child is unique.', icon: Users },
    { title: 'Experiential Learning', desc: 'Learning by doing.', icon: Settings },
    { title: 'Critical Thinking', desc: 'Question. Analyze. Understand.', icon: Brain },
    { title: 'Global Perspective', desc: 'Preparing students for a global world.', icon: Globe },
  ]

  return (
    <section className="page-wrap py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[40px] p-8 lg:p-12">

        <div className="lg:col-span-5">
          <FadeIn delay={0}>
            <div className="rounded-[28px] overflow-hidden aspect-[4/3]">
               <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200" alt="Teacher helping students" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={100}>
            <p className="text-[var(--color-ember-orange)] font-semibold tracking-[0.15em] text-xs mb-4 uppercase">Our Philosophy</p>
            <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] mb-6 leading-tight tracking-tight">
              Education That<br/>Inspires Growth.
            </h2>
            <p className="text-lg text-[var(--color-warm-gray)] mb-12 leading-relaxed max-w-lg">
              We go beyond textbooks to create a rich learning environment where students explore, question, collaborate, and create.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 text-[var(--color-ember-orange)]">
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[var(--color-ink-black)] font-semibold text-[15px] mb-1">{feature.title}</h3>
                    <p className="text-[var(--color-warm-gray)] text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

function CurriculumSection() {
  const cards = [
    { title: 'National Curriculum', desc: 'Aligned with national education standards with a global outlook.', icon: BookOpen },
    { title: 'Cambridge Curriculum', desc: 'Internationally recognized curriculum that builds strong foundations.', icon: Globe },
    { title: 'STEM Learning', desc: 'Science, Technology, Engineering & Math for future innovators.', icon: Atom },
    { title: 'Experiential Learning', desc: 'Projects, research and real-world experiences that build confidence.', icon: Rocket },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn delay={0} className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] mb-6 tracking-tight">Our Curriculum</h2>
        <p className="text-lg text-[var(--color-warm-gray)]">A holistic blend of global standards and innovative teaching.</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-8 h-full flex flex-col items-center text-center hover:border-[var(--color-driftwood)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-ember-orange)] mb-6">
                <card.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[var(--color-ink-black)] font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed">{card.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function StagesSection() {
  const stages = [
    { name: 'EARLY YEARS', age: 'Pre-KG to UKG', desc: 'Play based learning to build curiosity, creativity and social skills.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400' },
    { name: 'PRIMARY SCHOOL', age: 'Grade 1 – 5', desc: 'Building strong foundations with focus on language, numeracy and values.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400' },
    { name: 'MIDDLE SCHOOL', age: 'Grade 6 – 8', desc: 'Encouraging analytical thinking, independence and problem solving.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400' },
    { name: 'SENIOR SCHOOL', age: 'Grade 9 – 12', desc: 'Preparing for higher education and future careers with excellence.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400' },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn delay={0} className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] tracking-tight">Academic Stages</h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-2 flex gap-4 pr-6 hover:border-[var(--color-driftwood)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
              <div className="w-[45%] shrink-0 rounded-[18px] overflow-hidden">
                <img src={stage.img} alt={stage.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="w-[55%] py-4 flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink-black)] mb-2">{stage.name}</p>
                <p className="text-[var(--color-ink-black)] font-semibold text-[13px] mb-2">{stage.age}</p>
                <p className="text-[var(--color-warm-gray)] text-[12px] leading-relaxed mb-4">{stage.desc}</p>
                <div className="mt-auto self-end w-6 h-6 rounded-full bg-[var(--color-ember-orange)] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function SubjectsSection() {
  const subjects = [
    { title: 'Mathematics', icon: LineChart, img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600' },
    { title: 'Science', icon: Microscope, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
    { title: 'English', icon: BookOpen, img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600' },
    { title: 'Social Studies', icon: Globe, img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600' },
    { title: 'Computer Science', icon: MonitorPlay, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600' },
    { title: 'Languages', icon: Languages, img: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?auto=format&fit=crop&q=80&w=600' },
    { title: 'Arts', icon: Palette, img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600' },
    { title: 'Physical Education', icon: Dumbbell, img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600' },
  ]

  return (
    <section className="page-wrap py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <FadeIn delay={0}>
            <h2 className="text-3xl lg:text-4xl text-[var(--color-ink-black)] mb-6 tracking-tight uppercase font-medium leading-tight">
              SUBJECTS &<br/>LEARNING AREAS
            </h2>
            <div className="w-12 h-1 bg-[var(--color-sand)] mb-6"></div>
            <p className="text-base text-[var(--color-warm-gray)] mb-8 leading-relaxed max-w-sm">
              A comprehensive range of subjects that nurture intellectual, creative, and physical development.
            </p>
            <Link to="/academics/subjects" className="inline-flex items-center text-[var(--color-ember-orange)] font-semibold text-sm hover:text-[var(--color-burnt-rust)] transition-colors">
              View All Subjects <ArrowRight size={16} className="ml-2" />
            </Link>
          </FadeIn>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subj, i) => (
              <FadeIn key={i} delay={i * 30}>
                <div className="group relative rounded-[20px] overflow-hidden aspect-[4/3] cursor-pointer">
                  <img src={subj.img} alt={subj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-black)]/90 via-[var(--color-ink-black)]/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

                  <div className="absolute bottom-0 left-0 w-full p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                      <subj.icon size={14} className="text-white" />
                    </div>
                    <p className="text-white font-medium text-sm leading-tight">{subj.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function BeyondClassroomSection() {
  const iconsRow = [
    { icon: Map, title: 'Field Trips', desc: 'Real-world exposure' },
    { icon: Search, title: 'Research Projects', desc: 'Deep learning experiences' },
    { icon: ShieldCheck, title: 'Community Service', desc: 'Building empathy and responsibility' },
    { icon: Users, title: 'Clubs & Societies', desc: 'Discover passions and talents' },
    { icon: Projector, title: 'Workshops & Seminars', desc: 'Learning from experts' },
  ]

  const largeCards = [
    { title: 'STEM & Innovation', desc: 'Robotics, coding, AI, and maker spaces that spark innovation and prepare for the future.', link: 'Explore STEM', img: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800', overlay: 'bg-[var(--color-deep-charcoal)]/80' },
    { title: 'Arts & Creativity', desc: 'Nurturing imagination and expression through music, dance, theatre and visual arts.', link: 'Explore Arts', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800', overlay: 'bg-[var(--color-sunset-coral)]/80' },
    { title: 'Sports & Wellness', desc: 'Building strength, discipline and teamwork through diverse sports programs.', link: 'Explore Sports', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800', overlay: 'bg-[var(--color-gunmetal)]/80' },
  ]

  return (
    <section className="page-wrap py-24">
      <FadeIn delay={0} className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] tracking-tight">Why We Learn Beyond The Classroom</h2>
      </FadeIn>

      {/* Icons Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 border-y border-[var(--color-sand)] py-10">
        {iconsRow.map((item, i) => (
          <FadeIn key={i} delay={i * 50} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-ember-orange)] mb-4 bg-[var(--color-pure-white)] hover:bg-[var(--color-warm-canvas)] transition-colors">
              <item.icon size={24} strokeWidth={1.5} />
            </div>
            <p className="text-[var(--color-ink-black)] font-semibold text-[13px] mb-1">{item.title}</p>
            <p className="text-[var(--color-warm-gray)] text-[11px] leading-relaxed max-w-[120px]">{item.desc}</p>
          </FadeIn>
        ))}
      </div>

      {/* Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {largeCards.map((card, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] group cursor-pointer flex flex-col justify-end p-8">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className={`absolute inset-0 ${card.overlay} transition-opacity duration-500`}></div>

              <div className="relative z-10 text-left">
                <h3 className="text-white text-2xl mb-3 font-medium">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{card.desc}</p>
                <div className="inline-flex items-center text-white text-sm font-medium group-hover:underline underline-offset-4">
                  {card.link} <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function AssessmentSection() {
  const steps = [
    { label: 'Learn', desc: 'Concepts & skills\nin classroom', icon: BookOpen },
    { label: 'Practice', desc: 'Hands-on activities\n& assignments', icon: FileText },
    { label: 'Assess', desc: 'Regular tests &\nevaluations', icon: Search },
    { label: 'Feedback', desc: 'Detailed feedback\n& support', icon: MessageCircle },
    { label: 'Improve', desc: 'Continuous growth\nevery day.', icon: TrendingUp },
  ]

  return (
    <section className="page-wrap py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <div className="lg:col-span-3">
          <FadeIn delay={0}>
            <h2 className="text-4xl lg:text-[2.75rem] text-[var(--color-ink-black)] mb-4 tracking-tight leading-[1.1]">
              Assessment<br/>
              <span className="italic font-light">&amp;</span> Progress
            </h2>
            <p className="text-[15px] text-[var(--color-warm-gray)] leading-relaxed max-w-[260px]">
              A continuous cycle that helps every student grow and achieve their best.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-9 overflow-x-auto pb-4 custom-scrollbar">
          <FadeIn delay={100}>
            <div className="flex items-center min-w-max gap-4 px-2">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[28px] py-5 px-6 min-w-[160px] hover:border-[var(--color-driftwood)] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-[var(--color-ember-orange)] mt-0.5 shrink-0">
                        <step.icon size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[var(--color-ink-black)] font-semibold text-[14px] mb-1.5">{step.label}</p>
                        <p className="text-[var(--color-warm-gray)] text-[12px] leading-[1.4] whitespace-pre-line">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="text-[var(--color-driftwood)] shrink-0">
                      <ArrowRight size={20} strokeWidth={1.5} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

function AcademicsCTASection() {
  return (
    <section className="page-wrap py-24 mb-16">
      <FadeIn delay={0}>
        <div className="relative rounded-[36px] overflow-hidden p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-left group">
          <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2000" alt="Campus" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[var(--color-ink-black)]/80 transition-opacity duration-500 group-hover:bg-[var(--color-ink-black)]/85"></div>

          <div className="relative z-10 lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl lg:text-5xl text-white mb-4 leading-tight tracking-tight">
              Give Your Child<br/>An Education Built<br/>For The Future.
            </h2>
          </div>

          <div className="relative z-10 lg:w-1/2 flex flex-col items-start lg:items-end">
            <p className="text-base text-white/80 mb-8 leading-relaxed max-w-md lg:text-right">
              Discover an academic environment where curiosity becomes confidence and learning becomes a lifelong journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/admissions/apply" className="inline-flex w-full sm:w-auto items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-6 py-3.5 text-sm font-medium hover:bg-[var(--color-burnt-rust)] hover:-translate-y-0.5 transition-all duration-300">
                Apply for Admission <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex w-full sm:w-auto items-center justify-center bg-[var(--color-pure-white)] text-[var(--color-ink-black)] hover:bg-[var(--color-warm-canvas)] rounded-full px-6 py-3.5 text-sm font-medium hover:-translate-y-0.5 transition-all duration-300">
                Schedule a Campus Visit <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-warm-canvas)]">
      <AcademicsHeroSection />
      <PhilosophySection />
      <CurriculumSection />
      <StagesSection />
      <SubjectsSection />
      <BeyondClassroomSection />
      <AssessmentSection />
      <AcademicsCTASection />
    </div>
  )
}
