import type { ReactNode } from 'react'

const map = {
  Low: 'bg-[var(--color-fog)] text-[var(--color-pewter)]',
  Normal: 'bg-[var(--color-fog)] text-[var(--color-slate)]',
  High: 'bg-[var(--color-peach-blush)] text-[var(--color-charcoal)]',
  Urgent: 'bg-[var(--color-ember-orange)] text-white',
  Pending: 'bg-[var(--color-peach-blush)] text-[var(--color-charcoal)]',
  'Under Review': 'bg-[var(--color-fog)] text-[var(--color-slate)]',
  Approved: 'bg-[#e8f5ec] text-[var(--color-success)]',
  Rejected: 'bg-[#fdeaea] text-[var(--color-danger)]',
  Enrolled: 'bg-[#e8f5ec] text-[var(--color-success)]',
  Active: 'bg-[#e8f5ec] text-[var(--color-success)]',
  Inactive: 'bg-[var(--color-fog)] text-[var(--color-stone)]',
}

export function Badge({ children, tone }: { children: ReactNode; tone: keyof typeof map }) {
  return (
    <span className={`inline-flex rounded-[var(--radius-badges)] px-2.5 py-1 text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  )
}
