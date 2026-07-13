import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border-t border-black/5 shadow-md",
        "bg-gradient-to-b from-white to-white/90",
        "p-6 text-start sm:p-8",
        "hover:from-white/90 hover:to-white/80 hover:-translate-y-1 hover:shadow-lg",
        "max-w-[340px] sm:max-w-[340px]",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border border-black/5 shadow-sm">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-slate-800">
            {author.name}
          </h3>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-6 text-base text-slate-600 font-medium leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
}
