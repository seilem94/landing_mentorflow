import { CTA } from '@/constants/content.js'
import { SectionLabel } from '@/components/ui/SectionLabel.jsx'
import { useContactForm } from '@/hooks/useContactForm.js'

/**
 * CtaSection — Sección final de conversión con formulario de email.
 * ctaRef: ref del input para scroll + focus desde el nav.
 */
export function CtaSection({ ctaRef }) {
  const { email, setEmail, status, message, handleSubmit } = useContactForm()

  return (
    <section
      id="contact"
      style={{
        padding: '140px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 700,
          height: 500,
          background: 'radial-gradient(ellipse,rgba(232,160,69,0.09) 0%,transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
          <SectionLabel center>{CTA.sectionLabel}</SectionLabel>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem,4vw,3.4rem)',
            letterSpacing: '-0.045em',
            lineHeight: 1.08,
            marginBottom: 24,
          }}
        >
          {CTA.headline[0]}
          <br />
          {CTA.headline[1]}
          <br />
          <em
            style={{
              fontStyle: 'normal',
              background: 'linear-gradient(90deg,var(--amber),#f5c97a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {CTA.headlineAccent}
          </em>
        </h2>

        <p
          className="reveal"
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            fontWeight: 300,
            lineHeight: 1.75,
            marginBottom: 44,
          }}
        >
          {CTA.body}
        </p>

        <div
          className="reveal"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <input
            ref={ctaRef}
            type="email"
            placeholder={CTA.inputPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            disabled={status === 'loading' || status === 'success'}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '14px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text)',
              outline: 'none',
              width: 280,
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(232,160,69,0.5)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'loading' || status === 'success'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: status === 'success' ? '#28c840' : 'var(--amber)',
              color: '#0a0a0f',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: status === 'loading' || status === 'success' ? 'default' : 'pointer',
              transition: 'all 0.25s',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
          >
            {status === 'loading'
              ? 'Enviando...'
              : status === 'success'
                ? '¡Listo! ✓'
                : CTA.ctaLabel}
            {status === 'idle' && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {message && (
          <p
            style={{
              marginTop: 14,
              fontSize: '0.85rem',
              color: status === 'error' ? '#ff5f57' : '#28c840',
            }}
          >
            {message}
          </p>
        )}

        <p
          className="reveal"
          style={{ marginTop: 20, fontSize: '0.78rem', color: 'var(--text-dim)' }}
        >
          {CTA.note}
        </p>
      </div>
    </section>
  )
}
