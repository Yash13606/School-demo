import { X } from 'lucide-react'
import { useToast } from '../../stores/toast'

const styles = {
  success: 'border-[#b9dfc8] bg-[#eef8f1] text-[var(--color-success)]',
  error: 'border-[#f0c5c5] bg-[#fdf0f0] text-[var(--color-danger)]',
  warning: 'border-[var(--color-peach-blush)] bg-[#fff6f2] text-[var(--color-burnt-rust)]',
  info: 'border-[#c5daf5] bg-[#f0f6ff] text-[var(--color-electric-blue)]',
}

export function ToastStack() {
  const { toasts, dismiss } = useToast()
  return (
    <div className="fixed right-4 top-4 z-[100] flex w-[min(100vw-2rem,360px)] flex-col gap-3">
      {toasts.map((t) => (
        <div key={t.id} className={`flex items-start justify-between gap-3 rounded-[var(--radius-2xl)] border px-4 py-3 text-sm shadow-sm ${styles[t.type]}`}>
          <span>{t.message}</span>
          <button type="button" onClick={() => dismiss(t.id)} aria-label="Dismiss">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
