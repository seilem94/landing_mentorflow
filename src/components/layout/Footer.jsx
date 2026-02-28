import { FOOTER } from '@/constants/content.js'

export function Footer() {
  return (
    <footer
      style={{
        padding: '40px 48px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.1rem',
          letterSpacing: '-0.04em',
          color: 'var(--text-muted)',
          textDecoration: 'none',
        }}
      >
        {FOOTER.brand}
      </a>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{FOOTER.copy}</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{FOOTER.tagline}</p>
    </footer>
  )
}
