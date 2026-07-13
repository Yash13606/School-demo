import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { PageHeader } from '../../components/ui/DataTable'
import { Button } from '../../components/ui/Button'

const STEPS = ['Student', 'Parent', 'Previous school', 'Documents', 'Review', 'Done'] as const

type FormData = {
  studentName: string
  dob: string
  gender: string
  applyingClass: string
  parentName: string
  parentPhone: string
  parentEmail: string
  address: string
  prevSchool: string
  prevClass: string
  tcRequired: string
}

const empty: FormData = {
  studentName: '',
  dob: '',
  gender: 'Female',
  applyingClass: '',
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  address: '',
  prevSchool: '',
  prevClass: '',
  tcRequired: 'No',
}

export default function ApplyAdmissionPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(empty)
  const [ref, setRef] = useState('')

  const set = (key: keyof FormData, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submit = () => {
    setRef(`GVA-APP-2026-${Math.floor(1800 + Math.random() * 99)}`)
    setStep(5)
  }

  if (step === 5) {
    return (
      <div className="page-wrap py-16 fade-up">
        <div className="panel mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)]">
            <Check size={28} />
          </div>
          <h2 className="mt-6">Application submitted</h2>
          <p className="mt-2 text-muted">Reference number</p>
          <p className="stat-value mt-1">{ref}</p>
          <p className="mt-4 text-sm text-muted">Our admissions office will contact you within five working days.</p>
          <Button className="mt-8" onClick={() => navigate('/')}>Back to home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrap py-16 fade-up">
      <PageHeader title="Apply for admission" subtitle="Complete all steps to submit your application." />

      <div className="mb-8 flex flex-wrap gap-2">
        {STEPS.slice(0, 5).map((label, i) => (
          <span
            key={label}
            className={`rounded-[var(--radius-button)] px-3 py-1 text-xs font-medium ${
              i === step ? 'bg-[var(--color-primary)] text-white' : i < step ? 'bg-[var(--color-fog)] text-[var(--color-slate)]' : 'border border-[var(--color-sand)] text-subtle'
            }`}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      <div className="panel mx-auto max-w-2xl">
        {step === 0 && (
          <div className="space-y-4">
            <h3>Student details</h3>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Full name *</span>
              <input className="input" required value={form.studentName} onChange={(e) => set('studentName', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Date of birth *</span>
              <input className="input" type="date" required value={form.dob} onChange={(e) => set('dob', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Gender</span>
              <select className="input" value={form.gender} onChange={(e) => set('gender', e.target.value)}>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Applying for class *</span>
              <input className="input" placeholder="e.g. Class 6" required value={form.applyingClass} onChange={(e) => set('applyingClass', e.target.value)} />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h3>Parent / guardian details</h3>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Name *</span>
              <input className="input" required value={form.parentName} onChange={(e) => set('parentName', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Phone *</span>
              <input className="input" type="tel" required value={form.parentPhone} onChange={(e) => set('parentPhone', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input className="input" type="email" value={form.parentEmail} onChange={(e) => set('parentEmail', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Address *</span>
              <textarea className="input min-h-24" required value={form.address} onChange={(e) => set('address', e.target.value)} />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3>Previous school</h3>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">School name</span>
              <input className="input" value={form.prevSchool} onChange={(e) => set('prevSchool', e.target.value)} placeholder="Leave blank if first school" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Last class attended</span>
              <input className="input" value={form.prevClass} onChange={(e) => set('prevClass', e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Transfer certificate required?</span>
              <select className="input" value={form.tcRequired} onChange={(e) => set('tcRequired', e.target.value)}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3>Upload documents</h3>
            <p className="text-sm text-muted">Birth certificate, report card, photographs, and parent ID (PDF or JPG, max 5 MB each).</p>
            {['Birth certificate', 'Report card', 'Photographs', 'Parent ID'].map((label) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-sm font-medium">{label}</span>
                <input className="input" type="file" accept=".pdf,.jpg,.jpeg,.png" />
              </label>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3 text-sm">
            <h3>Review your application</h3>
            {[
              ['Student', form.studentName],
              ['Date of birth', form.dob],
              ['Class', form.applyingClass],
              ['Parent', form.parentName],
              ['Phone', form.parentPhone],
              ['Email', form.parentEmail || '—'],
              ['Previous school', form.prevSchool || 'First school'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-[var(--color-fog)] py-2">
                <span className="text-subtle">{k}</span>
                <span className="font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <Button type="button" variant="outline" onClick={back} disabled={step === 0}>
            Back
          </Button>
          {step < 4 ? (
            <Button type="button" onClick={next}>Continue</Button>
          ) : (
            <Button type="button" onClick={submit}>Submit application</Button>
          )}
        </div>
      </div>
    </div>
  )
}
