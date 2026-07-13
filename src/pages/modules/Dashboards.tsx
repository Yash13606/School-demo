import {
  admissions,
  attendanceChart,
  books,
  circulars,
  feeChart,
  feePayments,
  notifications,
  schools,
  staff,
  students,
} from '../../data/mock'
import { Badge } from '../../components/ui/Badge'
import { DataTable, PageHeader } from '../../components/ui/DataTable'
import { StatCard } from '../../components/ui/StatCard'
import { LinkButton } from '../../components/ui/Button'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  IndianRupee,
  School,
  Users,
  Wallet,
} from 'lucide-react'

export function AdminDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Admin dashboard" subtitle="School-wide snapshot for today." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Total students" value={students.length} icon={GraduationCap} hint="+12 this term" />
        <StatCard label="Total staff" value={staff.length} icon={Users} />
        <StatCard label="Fee collected (Jul)" value="₹3.2L" icon={Wallet} tone="peach" />
        <StatCard label="Attendance today" value="91%" icon={ClipboardList} />
        <StatCard label="Pending admissions" value={admissions.filter((a) => a.status === 'Pending').length} icon={School} />
        <StatCard label="Overdue library books" value={2} icon={BookOpen} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="panel">
          <h3>Fee collection — last 6 months (₹L)</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feeChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-sand)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="collected" fill="var(--color-ember-orange)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="panel">
          <h3>Attendance trend — 14 days</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-sand)" />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="var(--color-electric-blue)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4">Recent activity</h3>
        <DataTable
          columns={[
            { key: 'title', label: 'Event' },
            { key: 'time', label: 'When' },
          ]}
          rows={notifications.map((n) => ({ title: n.title, time: n.time }))}
        />
      </div>
    </div>
  )
}

export function SuperAdminDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Platform dashboard" subtitle="Multi-tenant overview across all schools." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total schools" value={schools.length} icon={School} />
        <StatCard label="Active schools" value={schools.filter((s) => s.status === 'Active').length} icon={School} tone="peach" />
        <StatCard label="Platform users" value="4,820" icon={Users} />
        <StatCard label="New this month" value={1} icon={School} />
      </div>
      <div className="mt-8">
        <DataTable
          columns={[
            { key: 'name', label: 'School' },
            { key: 'code', label: 'Code' },
            { key: 'status', label: 'Status' },
            { key: 'created', label: 'Created' },
          ]}
          rows={schools.map((s) => ({
            name: s.name,
            code: s.code,
            status: <Badge tone={s.status}>{s.status}</Badge>,
            created: s.createdAt,
          }))}
        />
      </div>
    </div>
  )
}

export function StudentsPage() {
  return (
    <div className="fade-up">
      <PageHeader
        title="Students"
        subtitle="Search, filter, and manage enrolled students."
        action={<LinkButton to="/admin/students/new">+ Add student</LinkButton>}
        crumbs={[{ label: 'Dashboard', to: '/admin/dashboard' }, { label: 'Students' }]}
      />
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'class', label: 'Class' },
          { key: 'roll', label: 'Roll' },
          { key: 'parent', label: 'Parent' },
          { key: 'status', label: 'Status' },
        ]}
        rows={students.map((s) => ({
          name: s.name,
          class: `${s.className} ${s.section}`,
          roll: s.rollNo,
          parent: s.parent,
          status: <Badge tone={s.status}>{s.status}</Badge>,
        }))}
        empty="No students added yet. Add your first student."
      />
    </div>
  )
}

export function AdmissionsPage() {
  return (
    <div className="fade-up">
      <PageHeader title="Admissions" subtitle="Review applications and enroll approved students." />
      <DataTable
        columns={[
          { key: 'name', label: 'Applicant' },
          { key: 'class', label: 'Class' },
          { key: 'parent', label: 'Parent' },
          { key: 'date', label: 'Applied' },
          { key: 'status', label: 'Status' },
        ]}
        rows={admissions.map((a) => ({
          name: a.applicant,
          class: a.applyingFor,
          parent: a.parentName,
          date: a.appliedDate,
          status: <Badge tone={a.status}>{a.status}</Badge>,
        }))}
      />
    </div>
  )
}

export function FeesPaymentsPage() {
  return (
    <div className="fade-up">
      <PageHeader title="Payments" subtitle="Record and review fee collections." action={<LinkButton to="#">+ Record payment</LinkButton>} />
      <DataTable
        columns={[
          { key: 'student', label: 'Student' },
          { key: 'amount', label: 'Amount' },
          { key: 'mode', label: 'Mode' },
          { key: 'date', label: 'Date' },
          { key: 'receipt', label: 'Receipt' },
        ]}
        rows={feePayments.map((p) => ({
          student: p.student,
          amount: `₹${p.amount.toLocaleString('en-IN')}`,
          mode: p.mode,
          date: p.date,
          receipt: p.receiptNo,
        }))}
      />
    </div>
  )
}

export function CircularsPage() {
  return (
    <div className="fade-up">
      <PageHeader title="Circulars" subtitle="Announcements sent to school community." action={<LinkButton to="/admin/circulars/new">+ Create circular</LinkButton>} />
      <DataTable
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'priority', label: 'Priority' },
          { key: 'audience', label: 'Audience' },
          { key: 'date', label: 'Date' },
        ]}
        rows={circulars.map((c) => ({
          title: c.title,
          priority: <Badge tone={c.priority}>{c.priority}</Badge>,
          audience: c.audience,
          date: c.date,
        }))}
      />
    </div>
  )
}

export function LibraryBooksPage() {
  return (
    <div className="fade-up">
      <PageHeader title="Books catalog" subtitle="Manage library inventory." action={<LinkButton to="#">+ Add book</LinkButton>} />
      <DataTable
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'author', label: 'Author' },
          { key: 'subject', label: 'Subject' },
          { key: 'copies', label: 'Available' },
        ]}
        rows={books.map((b) => ({
          title: b.title,
          author: b.author,
          subject: b.subject,
          copies: `${b.available} / ${b.total}`,
        }))}
      />
    </div>
  )
}

export function TeacherDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Teacher dashboard" subtitle="Good morning, Priya." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="My classes" value={2} icon={School} />
        <StatCard label="Today's periods" value={5} icon={ClipboardList} tone="peach" />
        <StatCard label="Pending reviews" value={3} icon={BookOpen} />
        <StatCard label="Leave balance" value="8 days" icon={Users} />
      </div>
      <div className="mt-8 panel">
        <h3>Today's schedule</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {['08:00 Mathematics — 10A', '09:00 Mathematics — 10B', '11:00 Free period', '14:00 Staff meeting'].map((p) => (
            <li key={p} className="rounded-[var(--radius-2xl)] border border-[var(--color-fog)] px-4 py-3">{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function StudentDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Student dashboard" subtitle="Welcome back, Arjun." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Attendance" value="94%" icon={ClipboardList} tone="peach" />
        <StatCard label="Pending homework" value={2} icon={BookOpen} />
        <StatCard label="Next exam" value="Aug 12" icon={School} />
        <StatCard label="Fee due" value="₹0" icon={IndianRupee} />
      </div>
    </div>
  )
}

export function ParentDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Parent dashboard" subtitle="Arjun Mehta · Class 10A" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Fee due" value="₹0" icon={Wallet} />
        <StatCard label="Attendance" value="94%" icon={ClipboardList} tone="peach" />
        <StatCard label="Last exam grade" value="A" icon={School} />
        <StatCard label="Upcoming exam" value="Mid-Term" icon={BookOpen} />
      </div>
    </div>
  )
}

export function AccountantDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Accountant dashboard" subtitle="Fee operations at a glance." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Collected today" value="₹42,000" icon={Wallet} tone="peach" />
        <StatCard label="Collected this month" value="₹3.2L" icon={IndianRupee} />
        <StatCard label="Pending dues" value="₹1.4L" icon={ClipboardList} />
        <StatCard label="Defaulters" value={4} icon={Users} />
      </div>
    </div>
  )
}

export function LibrarianDashboard() {
  return (
    <div className="fade-up">
      <PageHeader title="Librarian dashboard" subtitle="Library operations today." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total books" value={books.reduce((a, b) => a + b.total, 0)} icon={BookOpen} />
        <StatCard label="Issued today" value={7} icon={ClipboardList} tone="peach" />
        <StatCard label="Overdue" value={2} icon={School} />
        <StatCard label="Fines collected" value="₹240" icon={IndianRupee} />
      </div>
    </div>
  )
}

