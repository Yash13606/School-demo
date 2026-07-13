import type { LucideIcon } from 'lucide-react'

export function StatCard({
  label,
  value,
  icon: Icon,
  hint,
  tone = 'default',
}: {
  label: string
  value: string | number
  icon: LucideIcon
  hint?: string
  tone?: 'default' | 'peach' | 'dark'
}) {
  const styles =
    tone === 'peach'
      ? 'feature-peach border-none'
      : tone === 'dark'
        ? 'bg-[var(--color-deep-charcoal)] text-white border-none'
        : 'panel'

  return (
    <div className={styles}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={tone === 'dark' ? 'text-white/70 text-sm' : 'eyebrow'}>{label}</p>
          <p className={`stat-value mt-2 ${tone === 'dark' ? 'text-white' : ''}`}>{value}</p>
          {hint ? <p className={`mt-2 text-sm ${tone === 'dark' ? 'text-white/60' : 'text-subtle'}`}>{hint}</p> : null}
        </div>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border ${
            tone === 'dark' ? 'border-white/20 bg-white/10' : 'border-[var(--color-sand)] bg-[var(--color-fog)]'
          }`}
        >
          <Icon size={20} className={tone === 'peach' ? 'text-[var(--color-burnt-rust)]' : tone === 'dark' ? 'text-white' : 'text-[var(--color-primary)]'} />
        </div>
      </div>
    </div>
  )
}
