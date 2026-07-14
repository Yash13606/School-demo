import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, HelpCircle } from 'lucide-react';

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

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email us',
      detail: 'admissions@school.edu.in',
    },
    {
      icon: Phone,
      title: 'Call us',
      detail: '+91 135 274 8800',
    },
    {
      icon: MapPin,
      title: 'Visit us',
      detail: '12 Ridge Road, Dehradun, Uttarakhand 248001',
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-warm-canvas)] pt-32 pb-24">
      <div className="page-wrap">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 border border-[var(--color-sand)] rounded-full px-4 py-2 bg-[var(--color-pure-white)] mb-8">
                <HelpCircle size={15} className="text-[var(--color-warm-gray)]" />
                <span className="text-[12px] font-bold text-[var(--color-ink-black)] uppercase tracking-widest">Contact</span>
              </div>

              <h1 className="text-5xl lg:text-[4.5rem] text-[var(--color-ink-black)] mb-6 tracking-tight leading-[1.05]">
                Get <span className="italic font-light">in touch</span>
              </h1>

              <p className="text-[18px] text-[var(--color-warm-gray)] leading-relaxed mb-8 max-w-md">
                Questions about admissions or transport? We're here to help you every step of the way.
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-[20px] bg-[var(--color-pure-white)] border border-[var(--color-sand)] text-[14px] text-[var(--color-ink-black)] font-medium mb-12">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-success)]"></span>
                </span>
                Mon–Fri 8:30 AM – 4:30 PM &middot; Sat 9:00 AM – 12:30 PM
              </div>

              <div className="bg-[var(--color-pure-white)] rounded-[32px] p-2 border border-[var(--color-sand)]">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-4 rounded-[24px] hover:bg-[var(--color-warm-canvas)] transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-[20px] bg-[var(--color-warm-canvas)] group-hover:bg-[var(--color-pure-white)] border border-transparent group-hover:border-[var(--color-sand)] flex items-center justify-center text-[var(--color-ink-black)] shrink-0 transition-all duration-300">
                        <method.icon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[var(--color-ink-black)] font-semibold text-[16px] mb-0.5 tracking-tight">{method.title}</p>
                        <p className="text-[var(--color-warm-gray)] text-[14px]">{method.detail}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-stone)] group-hover:text-[var(--color-ink-black)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0">
                      <ArrowUpRight size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <FadeIn delay={150}>
              <div className="bg-[var(--color-pure-white)] border border-[var(--color-sand)] rounded-[32px] p-8 lg:p-10 relative overflow-hidden">
                {/* Subtle gradient accent for premium feel without breaking the minimal aesthetic */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-ember-orange)] opacity-[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <form className="flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[var(--color-warm-canvas)] border border-transparent hover:border-[var(--color-sand)] focus:border-[var(--color-driftwood)] focus:bg-[var(--color-pure-white)] focus:outline-none focus:ring-4 focus:ring-[var(--color-warm-canvas)] rounded-[20px] px-6 py-5 text-[15px] text-[var(--color-ink-black)] transition-all duration-300 placeholder:text-[var(--color-stone)]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[var(--color-warm-canvas)] border border-transparent hover:border-[var(--color-sand)] focus:border-[var(--color-driftwood)] focus:bg-[var(--color-pure-white)] focus:outline-none focus:ring-4 focus:ring-[var(--color-warm-canvas)] rounded-[20px] px-6 py-5 text-[15px] text-[var(--color-ink-black)] transition-all duration-300 placeholder:text-[var(--color-stone)]"
                  />
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full bg-[var(--color-warm-canvas)] border border-transparent hover:border-[var(--color-sand)] focus:border-[var(--color-driftwood)] focus:bg-[var(--color-pure-white)] focus:outline-none focus:ring-4 focus:ring-[var(--color-warm-canvas)] rounded-[20px] px-6 py-5 text-[15px] text-[var(--color-ink-black)] transition-all duration-300 placeholder:text-[var(--color-stone)] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-ink-black)] hover:bg-[var(--color-ember-orange)] text-white rounded-[20px] px-6 py-5 mt-2 text-[15px] font-medium tracking-wide hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  )
}
