import { FEATURES } from '@/constants/content.js'
import { SectionLabel } from '@/components/ui/SectionLabel.jsx'

export function FeaturesSection() {
  const half = Math.ceil(FEATURES.items.length / 2)
  const rows = [FEATURES.items.slice(0, half), FEATURES.items.slice(half)]

  return (
    <section id="features" style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal" style={{ maxWidth: 580, marginBottom: 72 }}>
        <SectionLabel>{FEATURES.sectionLabel}</SectionLabel>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,3rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {FEATURES.headline[0]}
          <br />
          {FEATURES.headline[1]}
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          {FEATURES.body}
        </p>
      </div>

      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 2,
            marginTop: rowIdx > 0 ? 2 : 0,
          }}
        >
          {row.map((feat, i) => {
            const isFirstRow = rowIdx === 0
            const isLastRow = rowIdx === rows.length - 1
            const isFirst = i === 0
            const isLast = i === row.length - 1
            const borderRadius = [
              isFirstRow && isFirst ? '20px' : '0',
              isFirstRow && isLast ? '20px' : '0',
              isLastRow && isLast ? '20px' : '0',
              isLastRow && isFirst ? '20px' : '0',
            ].join(' ')

            return <FeatureCard key={feat.title} feat={feat} borderRadius={borderRadius} />
          })}
        </div>
      ))}
    </section>
  )
}

function FeatureCard({ feat, borderRadius }) {
  return (
    <div
      className="reveal"
      style={{
        background: 'var(--bg2)',
        padding: '40px 36px',
        border: '1px solid var(--border)',
        borderRadius,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--bg3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--bg2)'
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: 'var(--amber-faint)',
          border: '1px solid rgba(232,160,69,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          fontSize: '1.3rem',
        }}
      >
        {feat.icon}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '-0.025em',
          marginBottom: 12,
          color: 'var(--text)',
        }}
      >
        {feat.title}
      </h3>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          lineHeight: 1.72,
          fontWeight: 300,
        }}
      >
        {feat.body}
      </p>
    </div>
  )
}
