import { create } from 'zustand'
import { DEMO_ACCOUNTS, ROLE_HOME, type Role, type User } from '../types'
import { SCHOOL, schools } from '../data/mock'

const STORAGE_KEY = 'vp_auth'

type AuthState = {
  user: User | null
  schoolCode: string | null
  schoolName: string | null
  loginStep: 1 | 2
  setSchoolCode: (code: string) => { ok: boolean; message?: string }
  login: (email: string, password: string) => { ok: boolean; message?: string }
  quickLogin: (role: Role) => void
  logout: () => void
  hydrate: () => void
}

function save(user: User | null) {
  if (user) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  else sessionStorage.removeItem(STORAGE_KEY)
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  schoolCode: null,
  schoolName: null,
  loginStep: 1,

  hydrate: () => {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return
    try {
      const user = JSON.parse(raw) as User
      set({ user, schoolCode: user.schoolId === 'platform' ? 'PLATFORM' : 'GREENVALLEY', schoolName: user.schoolName, loginStep: 2 })
    } catch {
      sessionStorage.removeItem(STORAGE_KEY)
    }
  },

  setSchoolCode: (code) => {
    const normalized = code.trim().toUpperCase()
    if (normalized === 'PLATFORM') {
      set({ schoolCode: normalized, schoolName: 'School ERP Platform', loginStep: 2 })
      return { ok: true }
    }
    const school = schools.find((s) => s.code === normalized)
    if (!school) return { ok: false, message: 'School code not found. Please check and try again.' }
    set({ schoolCode: normalized, schoolName: school.name, loginStep: 2 })
    return { ok: true }
  },

  login: (email, password) => {
    const { schoolCode } = get()
    const account = DEMO_ACCOUNTS.find(
      (a) => a.email === email.trim() && a.password === password && a.schoolCode === schoolCode,
    )
    if (!account) return { ok: false, message: 'Invalid email or password' }
    const user: User = {
      id: `user-${account.role.toLowerCase()}`,
      name: account.label,
      email: account.email,
      role: account.role,
      schoolId: schoolCode === 'PLATFORM' ? 'platform' : 'sch-1',
      schoolName: get().schoolName ?? SCHOOL.name,
      childId: account.role === 'PARENT' ? 'st-1' : undefined,
    }
    save(user)
    set({ user })
    return { ok: true }
  },

  quickLogin: (role) => {
    const account = DEMO_ACCOUNTS.find((a) => a.role === role)!
    get().setSchoolCode(account.schoolCode)
    get().login(account.email, account.password)
  },

  logout: () => {
    save(null)
    set({ user: null, schoolCode: null, schoolName: null, loginStep: 1 })
  },
}))

export function homeForRole(role: Role) {
  return ROLE_HOME[role]
}
