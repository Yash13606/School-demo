import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from '../layouts/PublicLayout'
import { AppShell } from '../layouts/AppShell'
import { GuestOnly, RequireAuth } from './guards'
import HomePage from '../pages/public/Home'
import AboutPage from '../pages/public/About'
import AcademicsPage from '../pages/public/Academics'
import AdmissionsPage from '../pages/public/Admissions'
import ApplyAdmissionPage from '../pages/public/ApplyAdmission'
import GalleryPage from '../pages/public/Gallery'
import NewsEventsPage from '../pages/public/NewsEvents'
import ContactPage from '../pages/public/Contact'
import LoginPage from '../pages/auth/Login'
import ForgotPasswordPage from '../pages/auth/ForgotPassword'
import ModulePage, { ErrorPage } from '../pages/shared/ModulePage'
import {
  AccountantDashboard,
  AdminDashboard,
  AdmissionsPage as AdminAdmissions,
  CircularsPage,
  FeesPaymentsPage,
  LibrarianDashboard,
  LibraryBooksPage,
  ParentDashboard,
  StudentDashboard,
  SuperAdminDashboard,
  StudentsPage,
  TeacherDashboard,
} from '../pages/modules/Dashboards'

const shell = (variant?: 'sidebar' | 'top') => <AppShell variant={variant} />

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/academics', element: <AcademicsPage /> },
      { path: '/admissions', element: <AdmissionsPage /> },
      { path: '/admissions/apply', element: <ApplyAdmissionPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/news', element: <NewsEventsPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
  {
    element: <GuestOnly />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  {
    element: <RequireAuth roles={['SUPER_ADMIN']} />,
    children: [
      {
        element: shell('top'),
        children: [
          { path: '/super-admin/dashboard', element: <SuperAdminDashboard /> },
          { path: '/super-admin/schools', element: <ModulePage title="Schools" subtitle="Manage tenant schools." /> },
          { path: '/super-admin/schools/new', element: <ModulePage title="Add school" /> },
          { path: '/super-admin/schools/:id', element: <ModulePage title="School detail" /> },
          { path: '/super-admin/settings', element: <ModulePage title="Platform settings" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['SCHOOL_ADMIN']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/admin/dashboard', element: <AdminDashboard /> },
          { path: '/admin/students', element: <StudentsPage /> },
          { path: '/admin/students/new', element: <ModulePage title="Add student" subtitle="Multi-step enrollment form." /> },
          { path: '/admin/students/:id', element: <ModulePage title="Student profile" /> },
          { path: '/admin/staff', element: <ModulePage title="Staff" /> },
          { path: '/admin/staff/new', element: <ModulePage title="Add staff" /> },
          { path: '/admin/staff/:id', element: <ModulePage title="Staff profile" /> },
          { path: '/admin/admissions', element: <AdminAdmissions /> },
          { path: '/admin/admissions/:id', element: <ModulePage title="Admission detail" /> },
          { path: '/admin/attendance/mark', element: <ModulePage title="Mark attendance" /> },
          { path: '/admin/attendance/reports', element: <ModulePage title="Attendance reports" /> },
          { path: '/admin/attendance/student/:id', element: <ModulePage title="Student attendance" /> },
          { path: '/admin/timetable', element: <ModulePage title="Timetable" /> },
          { path: '/admin/timetable/teacher/:id', element: <ModulePage title="Teacher timetable" /> },
          { path: '/admin/exams', element: <ModulePage title="Examinations" /> },
          { path: '/admin/exams/new', element: <ModulePage title="Create exam" /> },
          { path: '/admin/exams/:id', element: <ModulePage title="Exam detail" /> },
          { path: '/admin/exams/:id/report-card/:student_id', element: <ModulePage title="Report card" /> },
          { path: '/admin/homework', element: <ModulePage title="Homework" /> },
          { path: '/admin/homework/new', element: <ModulePage title="Create homework" /> },
          { path: '/admin/homework/:id', element: <ModulePage title="Homework detail" /> },
          { path: '/admin/fees/structures', element: <ModulePage title="Fee structures" /> },
          { path: '/admin/fees/assignments', element: <ModulePage title="Fee assignments" /> },
          { path: '/admin/fees/payments', element: <FeesPaymentsPage /> },
          { path: '/admin/fees/reports', element: <ModulePage title="Fee reports" /> },
          { path: '/admin/hr/leaves', element: <ModulePage title="Leave requests" /> },
          { path: '/admin/hr/attendance', element: <ModulePage title="Staff attendance" /> },
          { path: '/admin/hr/payroll', element: <ModulePage title="Payroll" /> },
          { path: '/admin/circulars', element: <CircularsPage /> },
          { path: '/admin/circulars/new', element: <ModulePage title="Create circular" /> },
          { path: '/admin/circulars/:id', element: <ModulePage title="Circular detail" /> },
          { path: '/admin/notifications', element: <ModulePage title="Notifications" /> },
          { path: '/admin/library/books', element: <LibraryBooksPage /> },
          { path: '/admin/library/issue', element: <ModulePage title="Issue book" /> },
          { path: '/admin/library/return', element: <ModulePage title="Return book" /> },
          { path: '/admin/library/transactions', element: <ModulePage title="Transactions" /> },
          { path: '/admin/library/overdue', element: <ModulePage title="Overdue books" /> },
          { path: '/admin/transport/routes', element: <ModulePage title="Transport routes" /> },
          { path: '/admin/transport/assignments', element: <ModulePage title="Transport assignments" /> },
          { path: '/admin/analytics', element: <ModulePage title="Analytics" /> },
          { path: '/admin/settings', element: <ModulePage title="School settings" /> },
          { path: '/admin/settings/academic', element: <ModulePage title="Academic setup" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['TEACHER']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/teacher/dashboard', element: <TeacherDashboard /> },
          { path: '/teacher/classes', element: <ModulePage title="My classes" /> },
          { path: '/teacher/classes/:id', element: <ModulePage title="Class detail" /> },
          { path: '/teacher/attendance/mark', element: <ModulePage title="Mark attendance" /> },
          { path: '/teacher/attendance/reports', element: <ModulePage title="Attendance reports" /> },
          { path: '/teacher/timetable', element: <ModulePage title="My timetable" /> },
          { path: '/teacher/homework', element: <ModulePage title="Homework" /> },
          { path: '/teacher/homework/new', element: <ModulePage title="Create homework" /> },
          { path: '/teacher/homework/:id', element: <ModulePage title="Submissions" /> },
          { path: '/teacher/exams', element: <ModulePage title="Exams" /> },
          { path: '/teacher/exams/:id/marks', element: <ModulePage title="Marks entry" /> },
          { path: '/teacher/leave', element: <ModulePage title="My leaves" /> },
          { path: '/teacher/permissions', element: <ModulePage title="Permission requests" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['STUDENT']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/student/dashboard', element: <StudentDashboard /> },
          { path: '/student/attendance', element: <ModulePage title="My attendance" /> },
          { path: '/student/timetable', element: <ModulePage title="My timetable" /> },
          { path: '/student/homework', element: <ModulePage title="Homework" /> },
          { path: '/student/results', element: <ModulePage title="My results" /> },
          { path: '/student/results/:exam_id', element: <ModulePage title="Exam result" /> },
          { path: '/student/fees', element: <ModulePage title="Fees" /> },
          { path: '/student/circulars', element: <ModulePage title="Circulars" /> },
          { path: '/student/leave', element: <ModulePage title="Leave" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['PARENT']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/parent/dashboard', element: <ParentDashboard /> },
          { path: '/parent/fees', element: <ModulePage title="Child fees" /> },
          { path: '/parent/attendance', element: <ModulePage title="Child attendance" /> },
          { path: '/parent/results', element: <ModulePage title="Child results" /> },
          { path: '/parent/results/:exam_id', element: <ModulePage title="Exam result" /> },
          { path: '/parent/transport', element: <ModulePage title="Transport" /> },
          { path: '/parent/circulars', element: <ModulePage title="Circulars" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['ACCOUNTANT']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/accountant/dashboard', element: <AccountantDashboard /> },
          { path: '/accountant/fees/structures', element: <ModulePage title="Fee structures" /> },
          { path: '/accountant/fees/assignments', element: <ModulePage title="Assignments" /> },
          { path: '/accountant/fees/payments', element: <FeesPaymentsPage /> },
          { path: '/accountant/fees/reports', element: <ModulePage title="Reports" /> },
          { path: '/accountant/payroll', element: <ModulePage title="Payroll" /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth roles={['LIBRARIAN']} />,
    children: [
      {
        element: shell('sidebar'),
        children: [
          { path: '/librarian/dashboard', element: <LibrarianDashboard /> },
          { path: '/librarian/books', element: <LibraryBooksPage /> },
          { path: '/librarian/issue', element: <ModulePage title="Issue book" /> },
          { path: '/librarian/return', element: <ModulePage title="Return book" /> },
          { path: '/librarian/transactions', element: <ModulePage title="Transactions" /> },
          { path: '/librarian/overdue', element: <ModulePage title="Overdue" /> },
        ],
      },
    ],
  },
  { path: '/unauthorized', element: <ErrorPage code="403" title="Unauthorized" body="You do not have permission to view this page." /> },
  { path: '/404', element: <ErrorPage code="404" title="Page not found" body="This page doesn't exist. Head back to the school website." /> },
  { path: '*', element: <Navigate to="/404" replace /> },
])
