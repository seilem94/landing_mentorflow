import { NAV } from '@/constants/content.js'

/**
 * Navbar — Barra de navegación fija con blur.
 * Recibe onCtaClick para abrir/enfocar el formulario de contacto.
 */
export function Navbar({ onCtaClick }) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,10,15,0.72)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.3rem',
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
        }}
      >
        <img
          src="/favicon.png"
          alt="MentorFlow logo"
          style={{ width: 30, height: 30, objectFit: 'contain' }}
        />
        {NAV.brand}
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none' }}>
        {NAV.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={onCtaClick}
        style={{
          background: 'var(--amber)',
          color: '#0a0a0f',
          border: 'none',
          padding: '9px 22px',
          borderRadius: 8,
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#f0b060'
          e.target.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'var(--amber)'
          e.target.style.transform = 'none'
        }}
      >
        {NAV.cta}
      </button>
    </nav>
  )
}
