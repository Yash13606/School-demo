import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function DataTable({
  columns,
  rows,
  empty,
}: {
  columns: { key: string; label: string; className?: string }[]
  rows: Record<string, ReactNode>[]
  empty?: ReactNode
}) {
  if (!rows.length) {
    return <div className="panel text-center text-muted py-12">{empty ?? 'No records yet.'}</div>
  }

  return (
    <div className="panel overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-[var(--color-sand)] bg-[var(--color-fog)]/60">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={`px-5 py-3 font-medium text-[var(--color-slate)] ${col.className ?? ''}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--color-fog)] last:border-0 hover:bg-[var(--color-warm-canvas)]/60">
                {columns.map((col) => (
                  <td key={col.key} className={`px-5 py-4 ${col.className ?? ''}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
  action,
  crumbs,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
  crumbs?: { label: string; to?: string }[]
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {crumbs ? (
          <nav className="mb-2 flex flex-wrap gap-2 text-sm text-subtle">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 ? <span>/</span> : null}
                {c.to ? <Link to={c.to} className="hover:text-[var(--color-primary)]">{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        ) : null}
        <h2>{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-muted">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="panel text-center py-16">
      <h3 className="text-[var(--text-subheading)]">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-muted">{body}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
