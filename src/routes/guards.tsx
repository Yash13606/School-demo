import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth, homeForRole } from '../stores/auth'
import type { Role } from '../types'

export function RequireAuth({ roles }: { roles?: Role[] }) {
  const { user } = useAuth()
  const location = useLocation()
  if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/unauthorized" replace />
  return <Outlet />
}

export function GuestOnly() {
  const { user } = useAuth()
  if (user) return <Navigate to={homeForRole(user.role)} replace />
  return <Outlet />
}
