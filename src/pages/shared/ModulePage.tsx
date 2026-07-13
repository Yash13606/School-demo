import { Link } from 'react-router-dom'
import { PageHeader } from '../../components/ui/DataTable'

export default function ModulePage({
  title,
  subtitle,
  children,
  crumbs,
}: {
  title: string
  subtitle?: string
  children?: React.ReactNode
  crumbs?: { label: string; to?: string }[]
}) {
  return (
    <div className="fade-up">
      <PageHeader title={title} subtitle={subtitle} crumbs={crumbs} />
      {children ?? (
        <div className="panel">
          <p className="text-muted">
            This screen is wired in the demo route map. Connect your API to load live data here.
          </p>
        </div>
      )}
    </div>
  )
}

export function ErrorPage({ code, title, body }: { code: string; title: string; body: string }) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--color-warm-canvas)] px-4">
      <div className="panel max-w-md text-center fade-up">
        <p className="eyebrow">{code}</p>
        <h1 className="mt-3">{title}</h1>
        <p className="mt-3 text-muted">{body}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/login" className="btn-outline">Go to login</Link>
          <Link to="/" className="btn-primary">Home</Link>
        </div>
      </div>
    </div>
  )
}
