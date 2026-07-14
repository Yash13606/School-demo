import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, Building2, Calendar, MapPin, Phone, Play, Users, FlaskConical, GraduationCap, Activity, Music, Monitor, Bus, Presentation } from 'lucide-react'
import {
  SCHOOL,
} from '../../data/mock'
import { LinkButton } from '../../components/ui/Button'
import { HoverExpand_001 } from '../../components/ui/hover-expand'
import { TestimonialsSection } from '../../components/ui/testimonials-with-marquee'

const marqueeTestimonials = [
  {
    author: {
      name: "Meera Mehta",
      handle: "Parent, Class 10",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    text: "The parent portal means I never miss a fee deadline or PTM. Everything is in one place."
  },
  {
    author: {
      name: "Raj Kapoor",
      handle: "Parent, Class 10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    text: "Our daughter found her voice in debate and science club. Teachers know every child by name."
  },
  {
    author: {
      name: "Arjun Mehta",
      handle: "Alumnus, IIT Roorkee",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    text: "Green Valley gave me the foundation for engineering — rigorous maths and supportive mentors."
  }
]

const HERO_IMAGE = '/school_hero.png'

const facilitiesData = [
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled classrooms for interactive learning.',
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    alt: 'Smart Classrooms',
    code: '01',
    icon: <Monitor size={24} />
  },
  {
    title: 'Well-Stocked Library',
    description: 'A vast collection of resources to fuel curiosity.',
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    alt: 'Well-Stocked Library',
    code: '02',
    icon: <BookOpen size={24} />
  },
  {
    title: 'Advanced Labs',
    description: 'Fully equipped labs to encourage experimentation.',
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    alt: 'Advanced Labs',
    code: '03',
    icon: <FlaskConical size={24} />
  },
  {
    title: 'Sports Complex',
    description: 'Modern facilities to promote fitness and teamwork.',
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    alt: 'Sports Complex',
    code: '04',
    icon: <Activity size={24} />
  },
  {
    title: 'Safe Transport',
    description: 'GPS-enabled transport for safe travel.',
    src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    alt: 'Safe Transport',
    code: '05',
    icon: <Bus size={24} />
  },
  {
    title: 'Auditorium',
    description: 'A modern space for events and creative expression.',
    src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80',
    alt: 'Auditorium',
    code: '06',
    icon: <Presentation size={24} />
  }
];

const heroStats = [
  { icon: Users, value: `${SCHOOL.students.toLocaleString()}+`, label: 'Students', hint: 'Growing together' },
  { icon: BookOpen, value: `${SCHOOL.teachers}+`, label: 'Teachers', hint: 'Guiding excellence' },
  { icon: Building2, value: `${new Date().getFullYear() - SCHOOL.founded}+`, label: 'Years of excellence', hint: 'Legacy of trust' },
  { icon: Award, value: `${SCHOOL.passRate}%`, label: 'Pass percentage', hint: 'Academic excellence' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero-split fade-up">
        <div className="page-wrap relative">
          <div className="hero-split__grid">
            <div className="hero-split__copy relative z-10 max-w-xl lg:py-8">
              <p className="hero-kicker text-[var(--color-burnt-rust)]">SHAPING MINDS. BUILDING FUTURES.</p>
              <h1 className="hero-headline">
                A Place to Learn,<br />
                A Community to<br />
                <em>Thrive.</em>
              </h1>
              <p className="hero-lead">
                At {SCHOOL.name}, we nurture curiosity, creativity, and character to help every student shine bright and become tomorrow's leaders.
              </p>
              <div className="hero-actions">
                <LinkButton to="/admissions/apply">
                  Apply Now <ArrowRight size={18} />
                </LinkButton>
                <Link to="/gallery" className="btn-tour">
                  Take a Virtual Tour
                  <span className="btn-tour__play">
                    <Play size={12} fill="currentColor" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="hero-split__visual" aria-hidden>
              <img src={HERO_IMAGE} alt="" />
            </div>
          </div>

          <div className="hero-stats">
            {heroStats.map(({ icon: Icon, value, label, hint }) => (
              <div key={label} className="hero-stat">
                <div className="hero-stat__icon">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="hero-stat__value">{value}</p>
                  <p className="hero-stat__label">{label}</p>
                  <p className="hero-stat__hint">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-[var(--color-burnt-rust)] uppercase mb-4">ABOUT OUR SCHOOL</p>
            <h2 className="text-4xl lg:text-5xl font-display leading-tight mb-6 text-[var(--color-ink)]">
              Nurturing Young Minds,<br/>
              <span className="text-[var(--color-burnt-rust)]">Building Bright Futures.</span>
            </h2>
            <p className="text-lg text-[var(--color-pewter)] mb-8 leading-relaxed">
              Founded in {SCHOOL.founded}, {SCHOOL.name} serves {SCHOOL.students.toLocaleString()} students with dedicated labs, library, sports fields, and performing arts spaces on a secure hillside campus.
            </p>
            <Link to="/about" className="btn-outline !text-[var(--color-ember-orange)] !border-[var(--color-ember-orange)] hover:!bg-[var(--color-ember-orange)] hover:!text-white rounded-full px-8">
              Know More About Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-[var(--color-sand)]">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80" alt="School campus" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">        
        <div className="page-wrap relative z-10 text-center mb-16">
          <p className="ui-kicker mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl lg:text-5xl font-display text-[var(--color-ink)]">
            Excellence in Education,<br />
            <span className="text-[var(--color-burnt-rust)]">Beyond Classrooms.</span>
          </h2>
        </div>

        <div className="page-wrap relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                titleTop: 'Small',
                titleItalic: 'sections',
                badge: 'Class Size',
                body: 'Average 28 students per class so teachers can actually know your child.',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
                bgColor: 'bg-[var(--color-deep-charcoal)]'
              },
              {
                titleTop: 'Whole-child',
                titleItalic: 'focus',
                badge: 'Philosophy',
                body: 'Academics, sports, arts, and service learning woven into daily rhythm.',
                image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
                bgColor: 'bg-[var(--color-sunset-coral)]'
              },
              {
                titleTop: 'Transparent',
                titleItalic: 'communication',
                badge: 'Updates',
                body: 'Circulars, fees, attendance, and results visible to families in real time.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
                bgColor: 'bg-[var(--color-gunmetal)]'
              },
              {
                titleTop: 'Safe hillside',
                titleItalic: 'campus',
                badge: 'Security',
                body: 'Gated grounds, CCTV, trained staff, and structured dismissal procedures.',
                image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
                bgColor: 'bg-[var(--color-burnt-rust)]'
              }
            ].map((item) => (
              <div key={item.titleTop} className="p-2.5 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 group hover:-translate-y-2 transition-transform duration-500 flex flex-col min-h-[580px]">
                <div className={`relative h-full rounded-[24px] ${item.bgColor} p-3 flex flex-col flex-grow`}>

                  {/* Top Image & Badge */}
                  <div className="relative mb-6 shrink-0 h-[220px] lg:h-[240px]">
                    <img src={item.image} className="absolute inset-0 w-full h-full object-cover rounded-[16px]" alt={item.titleTop} />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 z-10">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-ember-orange)]"></span>
                      <span className="text-[11px] font-semibold tracking-wide text-[var(--color-ink)] uppercase">{item.badge}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2 pb-2 flex flex-col flex-grow">
                    <h3 className="text-[28px] leading-[1.1] text-white mb-3 tracking-tight">
                      {item.titleTop} <br/>
                      <span className="italic opacity-90">{item.titleItalic}</span>
                    </h3>
                    <p className="text-white/90 text-[14px] leading-relaxed mb-8">{item.body}</p>

                    {/* Glassy Button */}
                    <button className="mt-auto w-full py-3.5 rounded-[16px] bg-gradient-to-b from-white/40 to-white/10 border border-white/40 backdrop-blur-md text-[var(--color-ink-black)] font-semibold text-[15px] hover:from-white/60 hover:to-white/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-24 text-center">
        <p className="ui-kicker">ACADEMICS</p>
        <h2 className="text-4xl lg:text-5xl font-display mb-6 text-[var(--color-ink)] text-balance">A Strong Academic Foundation<br/>for Lifelong Success</h2>
        <p className="max-w-3xl mx-auto text-[var(--color-pewter)] text-lg mb-16 text-balance">Our curriculum is designed to inspire curiosity, encourage critical thinking, and help students develop the skills they need to excel in a dynamic world.</p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-left mb-16">
          {[
            {
              icon: BookOpen,
              image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
              title: 'Comprehensive Curriculum',
              body: 'Well-structured curriculum aligned with global standards and focused on conceptual understanding.',
            },
            {
              icon: FlaskConical,
              image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
              title: 'Experiential Learning',
              body: 'Hands-on experiences, practical exposure and real-world learning beyond textbooks.',
            },
            {
              icon: GraduationCap,
              image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
              title: 'Expert Faculty',
              body: 'Qualified and passionate teachers who mentor, motivate and nurture every student.',
            },
            {
              icon: Activity,
              image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
              title: 'Sports & Activities',
              body: 'Wide range of sports, arts and clubs to help students explore their interests and talents.',
            },
            {
              icon: Music,
              image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80',
              title: 'Holistic Development',
              body: 'Focus on building confidence, leadership, values and life skills for a bright future.',
            }
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-surface)] rounded-[24px] border border-[var(--color-sand)] overflow-hidden flex flex-col group hover:-translate-y-1 hover:border-[var(--color-driftwood)] transition-all duration-300">
              <div className="relative h-44 w-full shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-sand)] flex items-center justify-center p-1.5">
                    <div className="w-full h-full rounded-full bg-[var(--color-burnt-rust)]/10 text-[var(--color-burnt-rust)] flex items-center justify-center">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 pt-14 pb-8 flex flex-col items-center text-center flex-grow">
                <h3 className="text-[17px] font-semibold text-[var(--color-ink)] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[var(--color-pewter)] leading-relaxed mb-6">{item.body}</p>
                <div className="mt-auto text-[var(--color-burnt-rust)] group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/academics" className="inline-flex btn-outline !text-[var(--color-ember-orange)] !border-[var(--color-ember-orange)] hover:!bg-[var(--color-ember-orange)] hover:!text-white rounded-full px-8">
            Explore Academics <ArrowRight size={18} />
        </Link>
      </section>

      <section className="page-wrap py-24 text-center">
        <p className="ui-kicker">OUR FACILITIES</p>
        <h2 className="text-4xl lg:text-5xl font-display mb-6 text-[var(--color-ink)] text-balance">World-Class Facilities for Every Learner</h2>
        <p className="max-w-3xl mx-auto text-[var(--color-pewter)] text-lg mb-16 text-balance">We provide a safe, inclusive and inspiring environment equipped with modern infrastructure to support academic and personal growth.</p>
        
        <HoverExpand_001 images={facilitiesData} />
      </section>

      <section className="page-wrap py-12">
        <div className="flex flex-col lg:flex-row bg-[var(--color-ink)] rounded-[32px] overflow-hidden min-h-[400px]">
          <div className="lg:w-5/12 relative aspect-video lg:aspect-auto z-0">
            <img src="/school_hero.png" alt="Campus Building" className="absolute inset-0 w-full h-full object-cover lg:rounded-r-[100px]" />
          </div>
          <div className="lg:w-7/12 p-10 lg:p-16 xl:p-20 flex flex-col justify-center text-white relative overflow-hidden z-10">
             <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10 pointer-events-none">
               <div className="w-[600px] h-[600px] rounded-full border-[1px] border-dashed border-white"></div>
               <div className="w-[500px] h-[500px] rounded-full border-[1px] border-dashed border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
               <div className="w-[400px] h-[400px] rounded-full border-[1px] border-dashed border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
               <div className="w-[300px] h-[300px] rounded-full border-[1px] border-dashed border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             </div>
             
             <h2 className="text-4xl lg:text-5xl font-display mb-4 relative z-10 text-white">Ready to Begin Your Journey?</h2>
             <p className="text-lg text-white/80 mb-10 max-w-md relative z-10">Join a community where your child will learn, grow and thrive every day.</p>
             <div className="flex flex-col sm:flex-row gap-4 relative z-10">
               <Link to="/admissions/apply" className="inline-flex items-center justify-center bg-[var(--color-burnt-rust)] text-white hover:bg-[#c84b24] transition-colors rounded-full px-8 py-3.5 font-medium">
                 Apply for Admission <ArrowRight size={18} className="ml-2" />
               </Link>
               <Link to="/admissions/tour" className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors rounded-full px-8 py-3.5 font-medium">
                 Take a Campus Tour <Calendar size={18} className="ml-2" />
               </Link>
             </div>
          </div>
        </div>
      </section>


      <TestimonialsSection 
        title="What Families Say" 
        testimonials={marqueeTestimonials} 
      />

      <section className="page-wrap py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--surface-sand-wash)] border border-[var(--color-driftwood)]/30 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[var(--color-driftwood)] transition-colors duration-500">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[var(--color-burnt-rust)]/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125"></div>
          
          <div className="relative z-10 text-left md:max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-burnt-rust)] mb-4 block">Take The Next Step</span>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.1] mb-5 text-[var(--color-ink)]">
              Admissions 2026–27 <br className="hidden md:block" /> are now open.
            </h2>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
              Submit your application online. Our admissions team will carefully review your details and respond within five working days.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 mt-4 md:mt-0">
            <Link to="/admissions/apply" className="inline-flex items-center justify-center bg-[var(--color-ink)] text-white hover:bg-[var(--color-burnt-rust)] transition-all duration-300 rounded-full px-8 py-4 font-medium text-lg hover:-translate-y-1">
              Start Application <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-wrap py-16">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-pure-white)] border border-[var(--color-sand)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-16 group hover:border-[var(--color-driftwood)] transition-all duration-500">
          {/* Subtle accent glow */}
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--color-ember-orange)]/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125"></div>

          <div className="relative z-10 w-full lg:w-7/12 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ember-orange)] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display leading-[1.1] mb-10 text-[var(--color-ink-black)]">
              Visit Us
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-[16px] bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ink-black)] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="pt-1.5">
                  <p className="text-[16px] font-semibold text-[var(--color-ink-black)] mb-1.5 leading-snug">12 Ridge Road, Dehradun,<br/>Uttarakhand 248001</p>
                  <p className="text-[14px] text-[var(--color-warm-gray)]">Mon–Fri 8:30 AM – 4:30 PM &middot; Sat 9:00 AM – 12:30 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-2">
                <div className="w-12 h-12 rounded-[16px] bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ink-black)] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[var(--color-ink-black)]">+91 135 274 8800</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-5/12 shrink-0 bg-[var(--color-warm-canvas)] rounded-[24px] p-8 lg:p-10 text-center flex flex-col items-center justify-center border border-[var(--color-sand)]">
            <p className="text-[20px] text-[var(--color-ink-black)] font-display mb-8 leading-snug">
              Questions about admissions or transport?
            </p>
            <Link to="/contact" className="w-full inline-flex items-center justify-center bg-[var(--color-ink-black)] text-white hover:bg-[var(--color-ember-orange)] transition-all duration-300 rounded-[16px] px-8 py-4.5 font-medium text-[15px] hover:-translate-y-0.5">
              Contact us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
