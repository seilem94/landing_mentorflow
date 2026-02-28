import { cn } from '@/utils/cn.js'

/**
 * Button — Átomo reutilizable.
 * variant: 'primary' | 'ghost'
 */
export function Button({ variant = 'primary', children, className, ...props }) {
  const base =
    'inline-flex items-center gap-2 rounded-[10px] font-medium cursor-pointer transition-all duration-200 text-[0.95rem] no-underline border-0'

  const variants = {
    primary:
      'bg-[var(--amber)] text-[#0a0a0f] px-8 py-[14px] hover:-translate-y-0.5 hover:bg-[#f0b060] hover:shadow-[0_12px_40px_rgba(232,160,69,0.4)]',
    ghost:
      'bg-transparent text-[var(--text-muted)] px-7 py-[14px] border border-[var(--border)] hover:border-white/15 hover:text-[var(--text)] hover:bg-white/[0.03]',
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
