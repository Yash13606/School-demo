import type { Role } from '../types'
import {
  BarChart3,
  Bell,
  BookOpen,
  Bus,
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  Library,
  School,
  Settings,
  Users,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = { label: string; to: string; icon: LucideIcon }

export const ADMIN_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: Home },
  { label: 'Students', to: '/admin/students', icon: GraduationCap },
  { label: 'Staff', to: '/admin/staff', icon: Users },
  { label: 'Admissions', to: '/admin/admissions', icon: ClipboardList },
  { label: 'Attendance', to: '/admin/attendance/mark', icon: Calendar },
  { label: 'Timetable', to: '/admin/timetable', icon: Calendar },
  { label: 'Exams', to: '/admin/exams', icon: FileText },
  { label: 'Homework', to: '/admin/homework', icon: BookOpen },
  { label: 'Fees', to: '/admin/fees/payments', icon: Wallet },
  { label: 'HR', to: '/admin/hr/leaves', icon: Users },
  { label: 'Circulars', to: '/admin/circulars', icon: Bell },
  { label: 'Library', to: '/admin/library/books', icon: Library },
  { label: 'Transport', to: '/admin/transport/routes', icon: Bus },
  { label: 'Analytics', to: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', to: '/admin/settings', icon: Settings },
]

export const TEACHER_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/teacher/dashboard', icon: Home },
  { label: 'My Classes', to: '/teacher/classes', icon: School },
  { label: 'Attendance', to: '/teacher/attendance/mark', icon: Calendar },
  { label: 'Timetable', to: '/teacher/timetable', icon: Calendar },
  { label: 'Homework', to: '/teacher/homework', icon: BookOpen },
  { label: 'Exams', to: '/teacher/exams', icon: FileText },
  { label: 'Leave', to: '/teacher/leave', icon: ClipboardList },
]

export const STUDENT_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/student/dashboard', icon: Home },
  { label: 'Attendance', to: '/student/attendance', icon: Calendar },
  { label: 'Timetable', to: '/student/timetable', icon: Calendar },
  { label: 'Homework', to: '/student/homework', icon: BookOpen },
  { label: 'Results', to: '/student/results', icon: FileText },
  { label: 'Fees', to: '/student/fees', icon: CreditCard },
  { label: 'Circulars', to: '/student/circulars', icon: Bell },
  { label: 'Leave', to: '/student/leave', icon: ClipboardList },
]

export const PARENT_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/parent/dashboard', icon: Home },
  { label: 'Fees', to: '/parent/fees', icon: CreditCard },
  { label: 'Attendance', to: '/parent/attendance', icon: Calendar },
  { label: 'Results', to: '/parent/results', icon: FileText },
  { label: 'Transport', to: '/parent/transport', icon: Bus },
  { label: 'Circulars', to: '/parent/circulars', icon: Bell },
]

export const ACCOUNTANT_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/accountant/dashboard', icon: Home },
  { label: 'Fee Structures', to: '/accountant/fees/structures', icon: Wallet },
  { label: 'Assignments', to: '/accountant/fees/assignments', icon: ClipboardList },
  { label: 'Payments', to: '/accountant/fees/payments', icon: CreditCard },
  { label: 'Reports', to: '/accountant/fees/reports', icon: BarChart3 },
  { label: 'Payroll', to: '/accountant/payroll', icon: Users },
]

export const LIBRARIAN_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/librarian/dashboard', icon: Home },
  { label: 'Books', to: '/librarian/books', icon: Library },
  { label: 'Issue', to: '/librarian/issue', icon: BookOpen },
  { label: 'Return', to: '/librarian/return', icon: BookOpen },
  { label: 'Transactions', to: '/librarian/transactions', icon: ClipboardList },
  { label: 'Overdue', to: '/librarian/overdue', icon: Bell },
]

export const SUPER_ADMIN_NAV: NavItem[] = [
  { label: 'Dashboard', to: '/super-admin/dashboard', icon: Home },
  { label: 'Schools', to: '/super-admin/schools', icon: School },
  { label: 'Settings', to: '/super-admin/settings', icon: Settings },
]

export function navForRole(role: Role): NavItem[] {
  switch (role) {
    case 'SUPER_ADMIN':
      return SUPER_ADMIN_NAV
    case 'SCHOOL_ADMIN':
      return ADMIN_NAV
    case 'TEACHER':
      return TEACHER_NAV
    case 'STUDENT':
      return STUDENT_NAV
    case 'PARENT':
      return PARENT_NAV
    case 'ACCOUNTANT':
      return ACCOUNTANT_NAV
    case 'LIBRARIAN':
      return LIBRARIAN_NAV
    default:
      return []
  }
}

export const ROLE_PREFIX: Record<Role, string> = {
  SUPER_ADMIN: '/super-admin',
  SCHOOL_ADMIN: '/admin',
  TEACHER: '/teacher',
  STUDENT: '/student',
  PARENT: '/parent',
  ACCOUNTANT: '/accountant',
  LIBRARIAN: '/librarian',
}
