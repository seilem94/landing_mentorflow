import { METRICS } from '@/constants/content.js'
import { SectionLabel } from '@/components/ui/SectionLabel.jsx'

export function MetricsSection() {
  const { sectionLabel, headline, body, items, dashboard } = METRICS

  return (
    <section id="metrics" style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}
      >
        {/* Left: copy */}
        <div className="reveal">
          <SectionLabel>{sectionLabel}</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.9rem,3vw,2.7rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            {headline[0]}
            <br />
            {headline[1]}
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.78,
              marginBottom: 36,
            }}
          >
            {body}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {items.map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '16px 18px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(232,160,69,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    borderRadius: 8,
                    background: 'var(--amber-faint)',
                    border: '1px solid rgba(232,160,69,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      letterSpacing: '-0.02em',
                      color: 'var(--text)',
                      marginBottom: 3,
                    }}
                  >
                    {item.title}
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                    {item.body}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="reveal">
          <div
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: 20,
              }}
            >
              {dashboard.title}
            </div>

            {dashboard.rows.map((row) => (
              <div
                key={row.rank}
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--text-dim)',
                    width: 16,
                    textAlign: 'center',
                  }}
                >
                  {row.rank}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 28,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${row.pct}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg,var(--amber-faint),rgba(232,160,69,0.15))',
                      borderRight: '2px solid var(--amber)',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {row.label}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--amber)',
                    width: 36,
                    textAlign: 'right',
                  }}
                >
                  {row.count}
                </span>
              </div>
            ))}

            <div
              style={{
                marginTop: 18,
                paddingTop: 16,
                borderTop: '1px solid var(--border)',
                display: 'flex',
                gap: 16,
              }}
            >
              {dashboard.kpis.map((kpi, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                    borderRight: i < dashboard.kpis.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {kpi.num}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
