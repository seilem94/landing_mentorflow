import { STATS } from '@/constants/content.js'

export function StatsStrip() {
  return (
    <div
      style={{
        padding: '60px 48px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {STATS.map((stat, i) => (
        <div
          key={i}
          className="reveal"
          style={{
            textAlign: 'center',
            padding: '20px 60px',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.8rem',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {stat.num}
            <span style={{ color: 'var(--amber)' }}>{stat.suffix}</span>
          </div>
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              fontWeight: 300,
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
