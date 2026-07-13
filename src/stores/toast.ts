import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

type Toast = { id: string; type: ToastType; message: string }

type ToastState = {
  toasts: Toast[]
  push: (type: ToastType, message: string) => void
  dismiss: (id: string) => void
}

export const useToast = create<ToastState>((set) => ({
  toasts: [],
  push: (type, message) => {
    const id = crypto.randomUUID()
    set((s) => ({ toasts: [...s.toasts, { id, type, message }] }))
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), 4000)
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}))
