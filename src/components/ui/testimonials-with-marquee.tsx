import { cn } from "../../lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "./testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description?: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-transparent text-[var(--color-ink)]",
      "py-16 sm:py-24",
      className
    )}>
      <div className="mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 mb-4">
          <p className="ui-kicker">TESTIMONIALS</p>
          <h2 className="ui-headline">
            {title}
          </h2>
          {description && (
            <p className="text-md max-w-[600px] font-medium text-[var(--color-charcoal)] sm:text-xl">
              {description}
            </p>
          )}
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:50s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-[#FDFBF7] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-[#FDFBF7] sm:block" />
        </div>
      </div>
    </section>
  )
}
