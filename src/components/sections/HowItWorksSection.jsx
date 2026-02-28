import { HOW_IT_WORKS } from '@/constants/content.js'
import { SectionLabel } from '@/components/ui/SectionLabel.jsx'

export function HowItWorksSection() {
  return (
    <section
      id="how"
      style={{
        padding: '120px 48px',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          className="reveal"
          style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 80px' }}
        >
          <SectionLabel center>{HOW_IT_WORKS.sectionLabel}</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            {HOW_IT_WORKS.headline[0]}
            <br />
            {HOW_IT_WORKS.headline[1]}
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            {HOW_IT_WORKS.body}
          </p>
        </div>

        {/* Steps grid with connecting line */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative' }}
        >
          {/* Line */}
          <div
            style={{
              position: 'absolute',
              top: 27,
              left: '12.5%',
              right: '12.5%',
              height: 1,
              background:
                'linear-gradient(90deg,transparent,var(--amber-dim),var(--amber),var(--amber-dim),transparent)',
              opacity: 0.4,
            }}
          />

          {HOW_IT_WORKS.steps.map((step) => (
            <div
              key={step.num}
              className="reveal"
              style={{ padding: '0 28px', textAlign: 'center', position: 'relative' }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: '2px solid var(--amber-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  color: 'var(--amber)',
                  margin: '0 auto 28px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 0 20px rgba(232,160,69,0.12)',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '-0.025em',
                  marginBottom: 12,
                  color: 'var(--text)',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.72,
                  fontWeight: 300,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
