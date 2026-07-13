import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, User, X } from 'lucide-react'
import { SCHOOL } from '../data/mock'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/contact', label: 'Contact' },
]

export function PublicLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-[var(--color-warm-canvas)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-sand)] bg-[var(--color-warm-canvas)]/95 backdrop-blur-sm">
        <div className="page-wrap flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-ember-orange)] text-sm font-semibold text-white">
              GV
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium leading-tight">{SCHOOL.name}</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]">
                Learn · Lead · Succeed
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-[var(--color-primary)]'
                      : 'text-[var(--color-slate)] hover:text-[var(--color-primary)]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/login" className="btn-outline hidden sm:inline-flex">
              <User size={16} />
              Login
            </Link>
            <Link to="/admissions/apply" className="btn-primary hidden sm:inline-flex">
              Apply Now
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              className="btn-ghost lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-[var(--color-sand)] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `rounded-[var(--radius-button)] px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-white text-[var(--color-primary)]' : 'text-[var(--color-slate)]'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2 border-t border-[var(--color-sand)] pt-3">
                <Link to="/login" className="btn-outline flex-1" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to="/admissions/apply" className="btn-primary flex-1" onClick={() => setOpen(false)}>
                  Apply Now
                </Link>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <Outlet />

      <footer className="relative mt-20 overflow-hidden bg-[#0A0A0A] border-t border-white/10 pt-24 pb-8 text-white">
        <div className="page-wrap relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 pb-32">
          
          {/* Logo & Copyright */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white text-sm font-black text-[#0A0A0A]">
                GV
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold leading-tight tracking-tight">{SCHOOL.name}</span>
              </div>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              © copyright {SCHOOL.name} {new Date().getFullYear()}.<br />All rights reserved.
            </p>
          </div>

          {/* Columns */}
          <div className="lg:col-span-1">
            <p className="text-[15px] font-semibold text-white mb-6">Pages</p>
            <ul className="space-y-4 text-[14px] text-white/50">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[15px] font-semibold text-white mb-6">Socials</p>
            <ul className="space-y-4 text-[14px] text-white/50">
              {Object.entries(SCHOOL.social).map(([name, url]) => (
                <li key={name}>
                  <a href={url} className="capitalize hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[15px] font-semibold text-white mb-6">Legal</p>
            <ul className="space-y-4 text-[14px] text-white/50">
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[15px] font-semibold text-white mb-6">Action</p>
            <ul className="space-y-4 text-[14px] text-white/50">
              <li><Link to="/admissions/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Massive Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center translate-y-[20%]">
          <span className="text-[18vw] font-black tracking-tighter text-white/[0.02] whitespace-nowrap">
            {SCHOOL.name}
          </span>
        </div>
      </footer>
    </div>
  )
}
