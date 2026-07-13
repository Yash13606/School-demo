import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, LogOut, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Sidebar, SidebarBody } from '../components/ui/sidebar'
import { motion } from 'motion/react'
import { useAuth } from '../stores/auth'
import { navForRole } from '../config/navigation'
import { notifications } from '../data/mock'
import { homeForRole } from '../stores/auth'

export function AppShell({ variant = 'sidebar' }: { variant?: 'sidebar' | 'top' }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const nav = user ? navForRole(user.role) : []
  const unread = notifications.filter((n) => !n.read).length

  const onLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex h-dvh bg-[var(--color-warm-canvas)] overflow-hidden">
      {variant === 'sidebar' ? (
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 bg-[#1a1919] border-r border-[#2f3034] !px-3 !py-4 z-50">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <nav className="flex flex-col gap-1.5">
                {nav.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3.5 rounded-[20px] px-3.5 py-3 text-[14px] font-medium transition-all duration-200 whitespace-nowrap overflow-hidden group/sidebar ${
                          isActive
                            ? 'bg-white text-[var(--color-ember-orange)] shadow-sm'
                            : 'text-[#898c94] hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon size={22} className="shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                          <motion.span
                            animate={{
                              opacity: open ? 1 : 0,
                              x: open ? 0 : -8
                            }}
                            transition={{
                              opacity: { duration: open ? 0.3 : 0.1, delay: open ? 0.1 : 0 },
                              x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                            }}
                            className="mt-0.5"
                          >
                            {item.label}
                          </motion.span>
                        </>
                      )}
                    </NavLink>
                  )
                })}
              </nav>
            </div>
            
            <div>
              <button type="button" className="flex items-center gap-3.5 rounded-[20px] px-3.5 py-3 text-[14px] font-medium text-[#898c94] hover:bg-white/5 hover:text-white transition-all duration-200 whitespace-nowrap overflow-hidden w-full group/sidebar" onClick={onLogout}>
                <LogOut size={22} className="shrink-0" strokeWidth={2} />
                <motion.span
                  animate={{
                    opacity: open ? 1 : 0,
                    x: open ? 0 : -8
                  }}
                  transition={{
                    opacity: { duration: open ? 0.3 : 0.1, delay: open ? 0.1 : 0 },
                    x: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="mt-0.5"
                >
                  Logout
                </motion.span>
              </button>
            </div>
          </SidebarBody>
        </Sidebar>
      ) : null}

      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <header className="sticky top-0 z-40 border-b border-[var(--color-sand)] bg-[var(--color-warm-canvas)]/95 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-4 px-4 py-3 md:px-6">
            <button type="button" className="btn-ghost md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button type="button" onClick={() => navigate(user ? homeForRole(user.role) : '/')} className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[var(--color-ember-orange)] text-sm font-semibold text-white">GV</div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{user?.schoolName}</p>
                <p className="text-xs text-subtle">{user?.role.replace('_', ' ')}</p>
              </div>
            </button>

            {variant === 'sidebar' && user?.role === 'SCHOOL_ADMIN' ? (
              <div className="mx-auto hidden max-w-md flex-1 md:flex">
                <label className="relative w-full">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)]" />
                  <input className="input pl-9" placeholder="Search students, staff, circulars…" />
                </label>
              </div>
            ) : (
              <div className="flex-1" />
            )}

            {variant === 'top' ? (
              <nav className="hidden items-center gap-1 lg:flex">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-[var(--radius-nav)] px-3 py-2 text-sm font-medium ${isActive ? 'text-[var(--color-ember-orange)]' : 'text-[var(--color-slate)] hover:text-[var(--color-ink)]'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            ) : null}

            <div className="relative flex items-center gap-2">
              <button type="button" className="btn-ghost relative" aria-label="Notifications">
                <Bell size={18} />
                {unread ? <span className="absolute right-2 top-1 h-2 w-2 rounded-full bg-[var(--color-ember-orange)]" /> : null}
              </button>
              <button type="button" className="btn-ghost flex items-center gap-2" onClick={() => setMenu((v) => !v)}>
                <span className="hidden sm:inline text-sm">{user?.name}</span>
                <ChevronDown size={16} />
              </button>
              {menu ? (
                <div className="absolute right-0 top-11 w-44 rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-white p-2 shadow-sm">
                  <button type="button" className="flex w-full items-center gap-2 rounded-[var(--radius-nav)] px-3 py-2 text-sm hover:bg-[var(--color-fog)]" onClick={onLogout}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
