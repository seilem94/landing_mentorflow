import { HERO } from '@/constants/content.js'

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{ transition: 'transform 0.2s' }}
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5 5v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

/**
 * HeroSection — Sección principal con headline, CTA y mockup de chat.
 */
export function HeroSection({ ctaRef }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 600,
          background: 'radial-gradient(ellipse, rgba(232,160,69,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '10%',
          width: 500,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(45,212,191,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ width: '100%', maxWidth: 900, position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div style={{ textAlign: 'center', animation: 'fadeUp 0.6s ease both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--amber-faint)',
              border: '1px solid rgba(232,160,69,0.2)',
              borderRadius: 100,
              padding: '6px 16px',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: 'var(--amber)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--amber)',
                animation: 'pulse 2s infinite',
              }}
            />
            {HERO.badge}
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            textAlign: 'center',
            marginBottom: 28,
            animation: 'fadeUp 0.6s 0.1s ease both',
          }}
        >
          {HERO.headline.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <em
            style={{
              fontStyle: 'normal',
              background: 'linear-gradient(90deg, var(--amber) 0%, #f5c97a 50%, var(--teal) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {HERO.headlineAccent}
          </em>
        </h1>

        {/* Body */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: 580,
            margin: '0 auto 44px',
            lineHeight: 1.78,
            fontWeight: 300,
            textAlign: 'center',
            animation: 'fadeUp 0.6s 0.2s ease both',
          }}
        >
          {HERO.body}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.3s ease both',
          }}
        >
          <a
            href="#contact"
            onClick={() => ctaRef?.current?.focus()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--amber)',
              color: '#0a0a0f',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0b060'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,160,69,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--amber)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {HERO.ctaPrimary} <ArrowIcon />
          </a>
          <a
            href="#how"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              padding: '14px 28px',
              borderRadius: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: 400,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-muted)'
            }}
          >
            <ClockIcon /> {HERO.ctaSecondary}
          </a>
        </div>

        {/* Mockup card */}
        <HeroMockup />
      </div>
    </section>
  )
}

function HeroMockup() {
  return (
    <div style={{ marginTop: 72, animation: 'fadeUp 0.8s 0.4s ease both' }}>
      <div
        style={{
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          maxWidth: 780,
          margin: '0 auto',
          overflow: 'hidden',
          boxShadow:
            '0 0 0 1px rgba(232,160,69,0.05), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Topbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 20px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            MentorFlow Assistant
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 280 }}>
          {/* Chat side */}
          <div
            style={{
              padding: 24,
              borderRight: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <ChatMsg from="ai" text="Hola 👋 ¿Qué proceso quieres documentar hoy?" />
            <ChatMsg from="user" text="El proceso de onboarding de nuevos clientes" />
            <ChatMsg
              from="ai"
              text="Perfecto. ¿Cuál es el primer paso cuando llega una solicitud nueva?"
            />
            <ChatMsg from="user" text="Verificamos los datos y le asignamos un ejecutivo" />
            <ChatMsg from="ai" typing />
          </div>

          {/* Flow side */}
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: 4,
              }}
            >
              Proceso generado automáticamente
            </div>
            {['Recepción de solicitud', 'Verificación de datos', 'Asignación de ejecutivo'].map(
              (step, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        background: 'var(--amber-faint)',
                        border: '1px solid rgba(232,160,69,0.25)',
                        color: 'var(--amber)',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{step}</span>
                  </div>
                  {i < 2 && (
                    <div
                      style={{ width: 1, height: 10, background: 'var(--border)', marginLeft: 10 }}
                    />
                  )}
                </div>
              )
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.35 }}>
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  background: 'var(--amber-faint)',
                  border: '1px solid rgba(232,160,69,0.25)',
                  color: 'var(--amber)',
                }}
              >
                4
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Generando paso siguiente...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatMsg({ from, text, typing }) {
  const isAI = from === 'ai'
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        flexDirection: isAI ? 'row' : 'row-reverse',
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.58rem',
          fontWeight: 700,
          fontFamily: 'var(--font-display)',
          background: isAI
            ? 'linear-gradient(135deg, var(--amber), var(--amber-dim))'
            : 'rgba(255,255,255,0.08)',
          color: isAI ? '#0a0a0f' : 'var(--text-muted)',
        }}
      >
        {isAI ? 'MF' : 'Tú'}
      </span>
      <div
        style={{
          background: isAI ? 'var(--amber-faint)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${isAI ? 'rgba(232,160,69,0.15)' : 'var(--border)'}`,
          borderRadius: isAI ? '10px 10px 10px 0' : '0 10px 10px 10px',
          padding: typing ? '10px 14px' : '8px 12px',
          fontSize: '0.76rem',
          lineHeight: 1.55,
          color: isAI ? 'var(--text)' : 'var(--text-muted)',
          maxWidth: 200,
          textAlign: isAI ? 'left' : 'right',
        }}
      >
        {typing ? (
          <span style={{ display: 'flex', gap: 4 }}>
            {[0, 0.2, 0.4].map((delay, i) => (
              <span
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--amber)',
                  display: 'inline-block',
                  animation: `bounce 1.2s ${delay}s infinite`,
                }}
              />
            ))}
          </span>
        ) : (
          text
        )}
      </div>
    </div>
  )
}
