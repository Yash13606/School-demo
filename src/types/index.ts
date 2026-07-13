export type Role =
  | 'SUPER_ADMIN'
  | 'SCHOOL_ADMIN'
  | 'TEACHER'
  | 'STUDENT'
  | 'PARENT'
  | 'ACCOUNTANT'
  | 'LIBRARIAN'

export type User = {
  id: string
  name: string
  email: string
  role: Role
  schoolId: string
  schoolName: string
  avatar?: string
  childId?: string
}

export type School = {
  id: string
  name: string
  code: string
  status: 'Active' | 'Inactive'
  modules: string[]
  createdAt: string
  address: string
  phone: string
  email: string
}

export type Student = {
  id: string
  name: string
  className: string
  section: string
  rollNo: string
  admissionNo: string
  parent: string
  status: 'Active' | 'Inactive'
  gender: 'Male' | 'Female'
  attendancePct: number
}

export type Staff = {
  id: string
  name: string
  employeeId: string
  role: string
  department: string
  phone: string
  status: 'Active' | 'Inactive'
}

export type Admission = {
  id: string
  applicant: string
  applyingFor: string
  parentName: string
  phone: string
  appliedDate: string
  status: 'Pending' | 'Under Review' | 'Approved' | 'Rejected' | 'Enrolled'
}

export type Circular = {
  id: string
  title: string
  priority: 'Low' | 'Normal' | 'High' | 'Urgent'
  audience: string
  date: string
  content: string
}

export type Homework = {
  id: string
  title: string
  className: string
  subject: string
  teacher: string
  dueDate: string
  submissions: number
  totalStudents: number
}

export type Book = {
  id: string
  title: string
  author: string
  subject: string
  total: number
  available: number
}

export type FeePayment = {
  id: string
  student: string
  amount: number
  mode: 'Cash' | 'UPI' | 'Cheque' | 'Bank Transfer'
  date: string
  receiptNo: string
  collectedBy: string
}

export type Exam = {
  id: string
  name: string
  year: string
  startDate: string
  endDate: string
  published: boolean
}

export type Notification = {
  id: string
  title: string
  body: string
  read: boolean
  time: string
}

export const ROLE_HOME: Record<Role, string> = {
  SUPER_ADMIN: '/super-admin/dashboard',
  SCHOOL_ADMIN: '/admin/dashboard',
  TEACHER: '/teacher/dashboard',
  STUDENT: '/student/dashboard',
  PARENT: '/parent/dashboard',
  ACCOUNTANT: '/accountant/dashboard',
  LIBRARIAN: '/librarian/dashboard',
}

export const DEMO_ACCOUNTS: Array<{
  label: string
  schoolCode: string
  email: string
  password: string
  role: Role
}> = [
  { label: 'Super Admin', schoolCode: 'PLATFORM', email: 'super@erp.demo', password: 'demo123', role: 'SUPER_ADMIN' },
  { label: 'School Admin', schoolCode: 'GREENVALLEY', email: 'admin@greenvalley.edu', password: 'demo123', role: 'SCHOOL_ADMIN' },
  { label: 'Teacher', schoolCode: 'GREENVALLEY', email: 'priya@greenvalley.edu', password: 'demo123', role: 'TEACHER' },
  { label: 'Student', schoolCode: 'GREENVALLEY', email: 'arjun@student.edu', password: 'demo123', role: 'STUDENT' },
  { label: 'Parent', schoolCode: 'GREENVALLEY', email: 'meera@parent.edu', password: 'demo123', role: 'PARENT' },
  { label: 'Accountant', schoolCode: 'GREENVALLEY', email: 'fees@greenvalley.edu', password: 'demo123', role: 'ACCOUNTANT' },
  { label: 'Librarian', schoolCode: 'GREENVALLEY', email: 'lib@greenvalley.edu', password: 'demo123', role: 'LIBRARIAN' },
]
