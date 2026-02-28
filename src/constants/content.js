/**
 * content.js — Todo el texto de la landing centralizado.
 * Separa contenido de markup para facilitar edición, i18n y A/B testing.
 */

export const NAV = {
  brand: 'MentorFlow',
  links: [
    { label: 'Producto', href: '#features' },
    { label: 'Cómo funciona', href: '#how' },
    { label: 'Métricas', href: '#metrics' },
    { label: 'Contacto', href: '#contact' },
  ],
  cta: 'Solicitar Demo',
}

export const HERO = {
  badge: 'IA aplicada para PyMEs',
  headline: ['El conocimiento', 'de tu empresa,'],
  headlineAccent: 'vivo y en movimiento',
  body: 'Convierte la experiencia de tu equipo en procesos estructurados, accesibles y auditables. Sin formularios, sin consultores, sin fricción.',
  ctaPrimary: 'Solicitar demo gratuita',
  ctaSecondary: 'Ver cómo funciona',
}

export const STATS = [
  {
    num: '70',
    suffix: '%',
    label: 'del conocimiento clave está\nsolo en la mente de las personas',
  },
  { num: '3', suffix: 'x', label: 'más rápido onboardear\nnuevos colaboradores' },
  { num: '0', suffix: '', label: 'conocimientos técnicos\nnecesarios para empezar' },
]

export const FEATURES = {
  sectionLabel: 'Producto',
  headline: ['Documentación que', 'se escribe sola'],
  body: 'Tu equipo habla con el asistente como en una conversación normal. La plataforma estructura, organiza y mantiene vivo ese conocimiento.',
  items: [
    {
      icon: '💬',
      title: 'Conversacional por diseño',
      body: 'Cualquier persona puede "enseñarle" a la plataforma un proceso en lenguaje natural. Sin formularios complejos ni habilidades técnicas.',
    },
    {
      icon: '⚡',
      title: 'Procesos siempre actualizados',
      body: 'Cada ajuste se incorpora de forma controlada, sin romper el flujo existente ni perder el historial de cambios.',
    },
    {
      icon: '🔗',
      title: 'Conocimiento compartido',
      body: 'El saber de cada colaborador se convierte en un activo de la organización. Accesible, reutilizable y siempre disponible.',
    },
    {
      icon: '🧩',
      title: 'Sin reemplazar tu cultura',
      body: 'No estandarizamos de forma rígida. Reconocemos el know-how existente, capturándolo de manera respetuosa y práctica.',
    },
    {
      icon: '♿',
      title: 'Inclusivo y accesible',
      body: 'Reduce barreras tecnológicas para personas con discapacidad o poca experiencia digital. Cualquiera puede aportar.',
    },
    {
      icon: '🔍',
      title: 'Auditable en todo momento',
      body: 'Cada proceso puede ser revisado y ajustado en puntos específicos. Tú controlas qué se actualiza y qué permanece intacto.',
    },
  ],
}

export const HOW_IT_WORKS = {
  sectionLabel: 'Cómo funciona',
  headline: ['De conversación', 'a proceso estructurado'],
  body: 'Cuatro pasos para transformar la experiencia de tu equipo en conocimiento vivo, auditable y mejorable.',
  steps: [
    {
      num: '1',
      title: 'Conversa',
      body: 'Un colaborador le cuenta al asistente cómo realiza un proceso, en sus propias palabras y a su propio ritmo.',
    },
    {
      num: '2',
      title: 'La IA estructura',
      body: 'El asistente guía la conversación, hace preguntas inteligentes y organiza automáticamente la información capturada.',
    },
    {
      num: '3',
      title: 'Se publica',
      body: 'El proceso queda documentado y accesible para todo el equipo, listo para ser consultado o ejecutado.',
    },
    {
      num: '4',
      title: 'Actualizable sin esfuerzo',
      body: 'Cualquier paso puede ajustarse de forma puntual, sin romper el flujo. El proceso evoluciona contigo, siempre bajo tu control.',
    },
  ],
}

export const METRICS = {
  sectionLabel: 'Inteligencia operacional',
  headline: ['Descubre qué procesos', 'mueven tu negocio'],
  body: 'MentorFlow no solo documenta: mide. Identifica qué manuales se consultan más, qué procesos generan mayor valor y dónde está el conocimiento crítico.',
  items: [
    {
      icon: '📈',
      title: 'Procesos más consultados',
      body: 'Detecta qué conocimiento es más valioso para tu equipo en tiempo real.',
    },
    {
      icon: '⚠️',
      title: 'Alertas de conocimiento crítico',
      body: 'Identifica procesos clave concentrados en una sola persona antes de que sea tarde.',
    },
    {
      icon: '🔄',
      title: 'Historial de versiones',
      body: 'Cada actualización queda registrada. Audita cambios y revierte si es necesario.',
    },
  ],
  dashboard: {
    title: 'Procesos más consultados — Este mes',
    rows: [
      { rank: 1, label: 'Onboarding de clientes', pct: 88, count: 247 },
      { rank: 2, label: 'Gestión de reclamos', pct: 65, count: 182 },
      { rank: 3, label: 'Cierre de ventas', pct: 50, count: 140 },
      { rank: 4, label: 'Control de inventario', pct: 34, count: 95 },
      { rank: 5, label: 'Facturación mensual', pct: 22, count: 61 },
    ],
    kpis: [
      { num: '24', label: 'procesos activos' },
      { num: '98%', label: 'uptime del mes' },
      { num: '3↑', label: 'procesos nuevos' },
    ],
  },
}

export const CTA = {
  sectionLabel: 'Empieza hoy',
  headline: ['Tu equipo tiene', 'el conocimiento.'],
  headlineAccent: 'Nosotros lo activamos.',
  body: 'Agenda una demo gratuita y descubre cómo MentorFlow puede transformar el know-how de tu organización en su activo más valioso.',
  inputPlaceholder: 'tu@empresa.com',
  ctaLabel: 'Solicitar demo',
  note: 'Sin compromisos. Respuesta en menos de 24 horas.',
}

export const FOOTER = {
  brand: 'MentorFlow',
  copy: '© 2025 MentorFlow. Todos los derechos reservados.',
  tagline: 'Hecho para PyMEs que valoran su gente.',
}
