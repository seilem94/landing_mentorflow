/**
 * SectionLabel — Etiqueta de sección con línea decorativa.
 * Uso: <SectionLabel>Producto</SectionLabel>
 */
export function SectionLabel({ children, center = false }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--amber)',
        marginBottom: '16px',
        justifyContent: center ? 'center' : undefined,
      }}
    >
      <span
        style={{ display: 'block', width: '20px', height: '1px', background: 'var(--amber)' }}
      />
      {children}
    </div>
  )
}
