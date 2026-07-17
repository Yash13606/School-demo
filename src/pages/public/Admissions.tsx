import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, Calendar, FileText, ClipboardList, PenTool, Users, Award,
  Baby, BookOpen, GraduationCap, User, CreditCard, Camera, Info, Banknote,
  Coins, Star, Music, Trophy, ChevronDown, ChevronUp, Globe, Heart, Shield, Rocket, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="relative pt-32 pb-24 bg-[var(--color-warm-canvas)] overflow-hidden">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div className="relative z-10 lg:pr-12">
            <FadeIn delay={0}>
              <span className="text-[12px] font-bold text-[var(--color-ember-orange)] uppercase tracking-widest mb-6 block">Admissions</span>
              <h1 className="text-5xl lg:text-[5rem] text-[var(--color-ink-black)] leading-[1.05] tracking-tight mb-8">
                Begin A Brighter <br/>
                <span className="text-[var(--color-ember-orange)]">Future</span> With Us.
              </h1>
              <p className="text-[18px] text-[var(--color-warm-gray)] leading-relaxed mb-10 max-w-md">
                A simple, transparent admission process designed to welcome your child into a world of opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#apply" className="group inline-flex items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-8 py-4 text-[15px] font-medium transition-all duration-300 hover:bg-[var(--color-burnt-rust)] hover:-translate-y-0.5">
                  Apply Now <ArrowRight size={18} strokeWidth={2} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="group inline-flex items-center justify-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[var(--color-ink-black)] rounded-full px-8 py-4 text-[15px] font-medium transition-all duration-300 hover:bg-[var(--color-warm-canvas)] hover:border-[var(--color-driftwood)]">
                  Schedule a Visit <Calendar size={18} strokeWidth={2} className="ml-2 text-[var(--color-warm-gray)] group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="relative">
            <FadeIn delay={200}>
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                  alt="Students reading together"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 lg:-left-16 bg-[var(--color-pure-white)]/95 backdrop-blur-xl rounded-[24px] p-6 border border-[var(--color-sand)] flex items-center gap-5 max-w-sm">
                <div className="w-14 h-14 rounded-[16px] bg-[var(--color-warm-canvas)] border border-[var(--color-sand)] flex items-center justify-center text-[var(--color-ember-orange)] shrink-0">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[var(--color-ink-black)] mb-1 leading-snug">Every child is unique.</p>
                  <p className="text-[13px] text-[var(--color-warm-gray)] leading-relaxed">We help them discover their best.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Inquiry', desc: 'Fill out the inquiry form or contact our admissions team.', icon: FileText },
    { num: '02', title: 'Campus Visit', desc: 'Tour our campus and experience our learning environment.', icon: Calendar },
    { num: '03', title: 'Application', desc: 'Submit the application form along with the required documents.', icon: ClipboardList },
    { num: '04', title: 'Assessment', desc: 'Age-appropriate interaction or assessment to understand your child better.', icon: PenTool },
    { num: '05', title: 'Review', desc: 'Our team reviews the application and assessment outcome.', icon: Users },
    { num: '06', title: 'Confirmation', desc: 'Receive admission confirmation and complete enrollment.', icon: Award },
  ];

  return (
    <section className="py-24 bg-[var(--color-pure-white)] relative z-20">
      <div className="page-wrap">

        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl text-[var(--color-ink-black)] tracking-tight mb-4">Our Admission Process</h2>
            <div className="w-12 h-1 bg-[var(--color-ember-orange)] mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        <FadeIn delay={150}>
          <div className="relative">
            {/* The dashed line connecting all items */}
            <div className="hidden lg:block absolute top-[52px] left-0 w-full border-t border-dashed border-[var(--color-ember-orange)]/30 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-[var(--color-pure-white)] rounded-[24px] border border-[var(--color-sand)] p-6 text-center hover:border-[var(--color-driftwood)] hover:-translate-y-1 transition-all duration-300 relative group">

                  {/* The dot on the dashed line */}
                  <div className="hidden lg:block absolute top-[28px] -left-3 w-2 h-2 rounded-full border-2 border-[var(--color-ember-orange)] bg-[var(--color-pure-white)] z-20"></div>

                  <p className="text-[14px] font-bold text-[var(--color-ink-black)] mb-6 text-left">{step.num}</p>

                  <div className="w-16 h-16 mx-auto rounded-[20px] bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ember-orange)] mb-6 group-hover:bg-[var(--color-ember-orange)] group-hover:text-white transition-colors duration-300">
                    <step.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-[16px] font-semibold text-[var(--color-ink-black)] mb-3">{step.title}</h3>
                  <p className="text-[13px] text-[var(--color-warm-gray)] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

function ApplicationSection() {
  const ages = [
    { title: 'Early Years', subtitle: 'Pre-KG to UKG', desc: 'Ages 2.5 to 5 years', icon: Baby },
    { title: 'Primary School', subtitle: 'Grade 1 – 5', desc: 'Ages 6 to 10 years', icon: BookOpen },
    { title: 'Middle School', subtitle: 'Grade 6 – 8', desc: 'Ages 11 to 13 years', icon: GraduationCap },
    { title: 'Senior School', subtitle: 'Grade 9 – 12', desc: 'Ages 14 to 17 years', icon: User },
  ]

  const documents = [
    { title: 'Birth Certificate', desc: 'Attested copy of birth certificate.', icon: FileText },
    { title: 'Previous School Records', desc: 'Report card of the last attended school.', icon: ClipboardList },
    { title: 'Aadhaar Card', desc: "Copy of child's Aadhaar card.", icon: CreditCard },
    { title: 'Passport Size Photos', desc: '2 recent passport size photographs.', icon: Camera },
  ]

  return (
    <section className="py-24 bg-[var(--color-warm-canvas)]" id="apply">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side: Info */}
          <div>
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl text-[var(--color-ink-black)] tracking-tight mb-8">Who Can Apply?</h2>

              <div className="grid grid-cols-2 gap-4 mb-16">
                {ages.map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-pure-white)] rounded-[24px] border border-[var(--color-sand)] p-6 text-center hover:border-[var(--color-driftwood)] transition-all duration-300">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ember-orange)] mb-4">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[var(--color-ink-black)] mb-1">{item.title}</h3>
                    <p className="text-[13px] text-[var(--color-warm-gray)] mb-1">{item.subtitle}</p>
                    <p className="text-[12px] text-[var(--color-stone)]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl lg:text-4xl text-[var(--color-ink-black)] tracking-tight mb-8">Documents Required</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 text-[var(--color-ember-orange)]">
                      <doc.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[var(--color-ink-black)] mb-1">{doc.title}</h4>
                      <p className="text-[13px] text-[var(--color-warm-gray)]">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[16px] px-5 py-3 text-[13px] text-[var(--color-warm-gray)] w-full sm:w-auto">
                <Info size={16} className="text-[var(--color-ember-orange)] shrink-0" />
                Additional documents may be required as per the grade.
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <div className="lg:pl-12">
            <FadeIn delay={150}>
              <div className="bg-[var(--color-deep-charcoal)] rounded-[32px] p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-ember-orange)] opacity-10 rounded-full blur-[80px] pointer-events-none"></div>

                <h2 className="text-3xl lg:text-4xl text-white tracking-tight mb-3 text-center">Start Your Application</h2>
                <p className="text-[15px] text-[var(--color-stone)] text-center mb-10">Have questions? We're here to help.</p>

                <form className="flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Parent Name" className="w-full bg-[var(--color-charcoal)] border border-[var(--color-slate)] focus:border-[var(--color-ember-orange)] focus:ring-1 focus:ring-[var(--color-ember-orange)] rounded-[16px] px-5 py-4 text-[14px] text-white transition-all duration-300 placeholder:text-[var(--color-stone)] outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-[var(--color-charcoal)] border border-[var(--color-slate)] focus:border-[var(--color-ember-orange)] focus:ring-1 focus:ring-[var(--color-ember-orange)] rounded-[16px] px-5 py-4 text-[14px] text-white transition-all duration-300 placeholder:text-[var(--color-stone)] outline-none" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-[var(--color-charcoal)] border border-[var(--color-slate)] focus:border-[var(--color-ember-orange)] focus:ring-1 focus:ring-[var(--color-ember-orange)] rounded-[16px] px-5 py-4 text-[14px] text-white transition-all duration-300 placeholder:text-[var(--color-stone)] outline-none" />

                  <div className="relative">
                    <select defaultValue="" className="w-full bg-[var(--color-charcoal)] border border-[var(--color-slate)] focus:border-[var(--color-ember-orange)] focus:ring-1 focus:ring-[var(--color-ember-orange)] rounded-[16px] px-5 py-4 text-[14px] text-[var(--color-stone)] transition-all duration-300 outline-none appearance-none cursor-pointer">
                      <option value="" disabled>Grade Applying For</option>
                      <option value="early">Early Years</option>
                      <option value="primary">Primary School</option>
                      <option value="middle">Middle School</option>
                      <option value="senior">Senior School</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-stone)] pointer-events-none" />
                  </div>

                  <textarea placeholder="Message (Optional)" rows={4} className="w-full bg-[var(--color-charcoal)] border border-[var(--color-slate)] focus:border-[var(--color-ember-orange)] focus:ring-1 focus:ring-[var(--color-ember-orange)] rounded-[16px] px-5 py-4 text-[14px] text-white transition-all duration-300 placeholder:text-[var(--color-stone)] outline-none resize-none" />

                  <button type="submit" className="w-full bg-[var(--color-ember-orange)] hover:bg-[var(--color-burnt-rust)] text-white rounded-[16px] px-6 py-4 mt-4 text-[15px] font-medium tracking-wide hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2">
                    Submit Inquiry <ArrowRight size={18} strokeWidth={2} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function FeesSection() {
  const fees = [
    { title: 'Registration Fee', type: 'One-time (Non-refundable)', amount: '₹2,000', icon: ClipboardList },
    { title: 'Admission Fee', type: 'One-time (Non-refundable)', amount: '₹15,000', icon: FileText },
    { title: 'Tuition Fee', type: 'Annual', amount: '₹1,20,000', postfix: 'Onwards', icon: Banknote },
    { title: 'Development Fee', type: 'Annual', amount: '₹10,000', icon: Coins },
    { title: 'Additional Charges', type: 'Optional / Activities', amount: 'As Applicable', icon: GraduationCap },
  ];

  return (
    <section className="py-24 bg-[var(--color-pure-white)] border-t border-b border-[var(--color-sand)]">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="text-4xl text-[var(--color-ink-black)] tracking-tight mb-4">Fees Structure</h2>
              <p className="text-[16px] text-[var(--color-warm-gray)] leading-relaxed mb-8">
                Transparent. Simple. Inclusive.
              </p>
              <button className="inline-flex items-center justify-center bg-[var(--color-ink-black)] text-white rounded-[16px] px-6 py-3.5 text-[14px] font-medium transition-all duration-300 hover:bg-[var(--color-ember-orange)] w-full sm:w-auto">
                View Detailed Fee Structure <Download size={16} className="ml-2" />
              </button>
            </FadeIn>
          </div>

          <div className="lg:col-span-9">
            <FadeIn delay={150}>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {fees.map((fee, idx) => (
                  <div key={idx} className="flex-none w-[220px] lg:w-full bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-6 text-center hover:border-[var(--color-driftwood)] transition-all duration-300">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-warm-canvas)] flex items-center justify-center text-[var(--color-ember-orange)] mb-4">
                      <fee.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[var(--color-ink-black)] mb-1">{fee.title}</h3>
                    <p className="text-[12px] text-[var(--color-warm-gray)] mb-4">{fee.type}</p>
                    <p className="text-[20px] font-bold text-[var(--color-ink-black)]">{fee.amount}</p>
                    {fee.postfix && <p className="text-[11px] text-[var(--color-stone)] mt-1">{fee.postfix}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-3 bg-[var(--color-warm-canvas)] rounded-[16px] px-5 py-3 text-[13px] text-[var(--color-warm-gray)] w-full">
                <Info size={16} className="text-[var(--color-warm-gray)] shrink-0" />
                Fees may vary by grade. Transport and meals are optional and charged separately.
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function ScholarshipsSection() {
  const items = [
    { title: 'Merit Scholarship', desc: 'For academic excellence in previous grades.', icon: Star },
    { title: 'Performing Arts', desc: 'For exceptional talent in music, dance, drama, and visual arts.', icon: Music },
    { title: 'Sports Scholarship', desc: 'For outstanding performance in sports and athletics.', icon: Trophy },
    { title: 'Sibling Concession', desc: 'Special fee benefits for siblings studying in our school.', icon: Users },
  ];

  return (
    <section className="py-24 bg-[var(--color-warm-canvas)]">
      <div className="page-wrap">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-4xl text-[var(--color-ink-black)] tracking-tight mb-6 leading-tight">Scholarships <br/>& Financial Support</h2>
              <p className="text-[15px] text-[var(--color-warm-gray)] leading-relaxed mb-8">
                We recognize talent, encourage excellence, and support deserving students through merit-based scholarships.
              </p>
              <button className="inline-flex items-center justify-center bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[var(--color-ink-black)] hover:bg-[var(--color-warm-canvas)] hover:border-[var(--color-driftwood)] rounded-full px-6 py-3 text-[14px] font-medium transition-all duration-300 w-full sm:w-auto">
                Explore Scholarships <ArrowRight size={16} className="ml-2" />
              </button>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[24px] p-6 flex gap-5 hover:border-[var(--color-driftwood)] hover:-translate-y-1 transition-all duration-300">
                    <div className="text-[var(--color-ember-orange)] shrink-0 mt-1">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[var(--color-ink-black)] mb-2">{item.title}</h3>
                      <p className="text-[14px] text-[var(--color-warm-gray)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'What is the age criteria for admission?', a: 'The age criteria vary based on the grade. Typically, children should be 2.5 years for Early Years. Please check the detailed requirement chart.' },
    { q: 'Can I apply for multiple children?', a: 'Yes, you can apply for multiple children. We also offer a Sibling Concession on the tuition fees.' },
    { q: 'Is there an entrance test?', a: 'For higher grades, we have a general assessment to understand the child’s proficiency. For lower grades, we have an informal interaction.' },
    { q: 'Is transport available?', a: 'Yes, we provide safe and secure transport across the city with real-time GPS tracking.' },
    { q: 'How will we know about the admission decision?', a: 'You will receive an email and an SMS from our admissions office within 3-5 working days after the assessment.' },
    { q: 'Do you provide meals?', a: 'Yes, wholesome and nutritious meals are provided on campus and can be opted for separately.' },
  ];

  return (
    <section className="py-24 bg-[var(--color-pure-white)] border-b border-[var(--color-sand)]">
      <div className="page-wrap">
        <div className="max-w-[1000px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl text-[var(--color-ink-black)] tracking-tight mb-12 text-center">Frequently Asked Questions</h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border border-[var(--color-sand)] rounded-[16px] overflow-hidden transition-all duration-300 cursor-pointer ${openIdx === idx ? 'bg-[var(--color-warm-canvas)]' : 'bg-[var(--color-pure-white)] hover:bg-[var(--color-warm-canvas)]'}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="flex justify-between items-center p-5">
                  <p className="text-[14px] font-semibold text-[var(--color-ink-black)] pr-4">{faq.q}</p>
                  {openIdx === idx ? <ChevronUp size={18} className="text-[var(--color-warm-gray)] shrink-0" /> : <ChevronDown size={18} className="text-[var(--color-warm-gray)] shrink-0" />}
                </div>
                {openIdx === idx && (
                  <div className="px-5 pb-5 text-[14px] text-[var(--color-warm-gray)] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
        </div>
      </div>
    </section>
  )
}

function FooterCTASection() {
  const features = [
    { title: 'World-Class Education', icon: Globe },
    { title: 'Holistic Development', icon: Heart },
    { title: 'Safe & Nurturing Campus', icon: Shield },
    { title: 'Future-Ready Skills', icon: Rocket },
  ];

  return (
    <section className="py-24 bg-[var(--color-pure-white)]">
      <div className="page-wrap">
        <FadeIn>
          <div className="bg-[var(--color-deep-charcoal)] rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative">

            {/* Left Content */}
            <div className="lg:w-1/2 p-12 lg:p-16 relative z-10">
              <h2 className="text-4xl lg:text-[3.5rem] text-white tracking-tight mb-6 leading-tight">
                A New Chapter <br/>
                Begins <span className="text-[var(--color-ember-orange)]">Here.</span>
              </h2>
              <p className="text-[16px] text-[var(--color-stone)] leading-relaxed mb-10 max-w-sm">
                Give your child the best start in a place where dreams take shape and futures shine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link to="#apply" className="group inline-flex items-center justify-center bg-[var(--color-ember-orange)] text-white rounded-full px-8 py-3.5 text-[14px] font-medium transition-all duration-300 hover:bg-[var(--color-burnt-rust)]">
                  Apply Now <ArrowRight size={16} strokeWidth={2} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="group inline-flex items-center justify-center bg-transparent border border-[var(--color-slate)] text-white rounded-full px-8 py-3.5 text-[14px] font-medium transition-all duration-300 hover:bg-[var(--color-charcoal)]">
                  Schedule a Campus Visit <Calendar size={16} strokeWidth={2} className="ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-[var(--color-ember-orange)]">
                      <feat.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-[13px] text-white font-medium">{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-charcoal)] via-[var(--color-deep-charcoal)]/80 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="School Campus Building"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <ApplicationSection />
      <FeesSection />
      <ScholarshipsSection />
      <FAQSection />
      <FooterCTASection />
    </div>
  )
}
