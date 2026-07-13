import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../stores/auth'
import { DEMO_ACCOUNTS, ROLE_HOME } from '../../types'
import { Button } from '../../components/ui/Button'
import { useToast } from '../../stores/toast'

export default function LoginPage() {
  const { loginStep, schoolName, setSchoolCode, login, quickLogin } = useAuth()
  const navigate = useNavigate()
  const { push } = useToast()
  const [schoolCode, setCode] = useState('GREENVALLEY')
  const [email, setEmail] = useState('admin@greenvalley.edu')
  const [password, setPassword] = useState('demo123')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  const onSchool = (e: React.FormEvent) => {
    e.preventDefault()
    const res = setSchoolCode(schoolCode)
    if (!res.ok) setError(res.message ?? 'Invalid code')
    else setError('')
  }

  const doLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const res = login(email, password)
    if (!res.ok) {
      setError(res.message ?? 'Login failed')
      return
    }
    const account = DEMO_ACCOUNTS.find((a) => a.email === email)!
    push('success', `Welcome back, ${account.label}.`)
    navigate(ROLE_HOME[account.role])
  }

  const resetSchool = () => {
    useAuth.setState({ loginStep: 1, schoolCode: null, schoolName: null })
    setError('')
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--color-warm-canvas)] px-4 py-12">
      <div className="w-full max-w-md fade-up">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[var(--color-ember-orange)] text-lg font-semibold text-white">GV</div>
          <h1 className="text-[var(--text-heading-sm)]">School portal</h1>
          <p className="mt-2 text-sm text-muted">Sign in with your school code and credentials</p>
        </div>

        <div className="panel">
          {loginStep === 1 ? (
            <form onSubmit={onSchool} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">School code</span>
                <input className="input" value={schoolCode} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="GREENVALLEY" />
              </label>
              {error ? <p className="text-sm text-[var(--color-danger)]">{error}</p> : null}
              <Button type="submit" className="w-full">Continue</Button>
            </form>
          ) : (
            <form onSubmit={doLogin} className="space-y-4">
              <div className="rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-[var(--color-fog)]/50 px-4 py-3 text-sm">
                <p className="font-medium">{schoolName}</p>
                <button type="button" className="mt-1 text-[var(--color-electric-blue)]" onClick={resetSchool}>
                  Change school code
                </button>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Email</span>
                <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Password</span>
                <div className="relative">
                  <input className="input pr-10" type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)]" onClick={() => setShow((v) => !v)}>
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>
              {error ? <p className="text-sm text-[var(--color-danger)]">{error}</p> : null}
              <Button type="submit" className="w-full">Login</Button>
              <Link to="/forgot-password" className="block text-center text-sm text-[var(--color-electric-blue)]">Forgot password?</Link>
            </form>
          )}
        </div>

        <div className="mt-6 panel-soft">
          <p className="eyebrow">Demo accounts — password: demo123</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DEMO_ACCOUNTS.map((a) => (
              <button
                key={a.role}
                type="button"
                className="rounded-[var(--radius-buttons)] border border-[var(--color-driftwood)] bg-white px-3 py-1.5 text-xs font-medium hover:border-[var(--color-primary)]"
                onClick={() => {
                  setSchoolCode(a.schoolCode)
                  quickLogin(a.role)
                  navigate(ROLE_HOME[a.role])
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
