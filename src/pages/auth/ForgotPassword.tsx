import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { useToast } from '../../stores/toast'

export default function ForgotPasswordPage() {
  const { push } = useToast()
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--color-warm-canvas)] px-4 py-12">
      <div className="panel w-full max-w-md fade-up">
        <h1 className="text-[var(--text-heading-sm)]">Reset password</h1>
        <p className="mt-2 text-sm text-muted">Step {step} of 3</p>

        {step === 1 ? (
          <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Registered email</span>
              <input className="input" type="email" required />
            </label>
            <Button type="submit" className="w-full">Send OTP</Button>
          </form>
        ) : null}

        {step === 2 ? (
          <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Enter OTP</span>
              <input className="input" required />
            </label>
            <Button type="submit" className="w-full">Verify</Button>
          </form>
        ) : null}

        {step === 3 ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              push('success', 'Password updated. Please login.')
            }}
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">New password</span>
              <input className="input" type="password" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Confirm password</span>
              <input className="input" type="password" required />
            </label>
            <Button type="submit" className="w-full">Reset password</Button>
            <Link to="/login" className="block text-center text-sm text-[var(--color-electric-blue)]">Back to login</Link>
          </form>
        ) : null}
      </div>
    </div>
  )
}
