/**
 * cn — Combina clases CSS condicionalmente.
 * Alternativa liviana a clsx/classnames sin dependencias.
 *
 * @example
 * cn('base', isActive && 'active', { 'hidden': !visible })
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter((c) => Boolean(c) && c !== '' && typeof c === 'string')
    .join(' ')
}
