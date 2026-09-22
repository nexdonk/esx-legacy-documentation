import { cn } from '@/lib/cn';

/**
 * ESX wordmark. "ES" follows the current text colour so it stays legible in
 * both themes, "X" keeps the brand orange.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        aria-hidden
        className="font-black tracking-tighter text-[1.35rem] leading-none italic select-none"
      >
        ES<span className="text-fd-primary">X</span>
      </span>
      {!compact && (
        <span className="hidden sm:inline text-sm font-medium text-fd-muted-foreground border-l border-fd-border pl-2 leading-none">
          Legacy Docs
        </span>
      )}
      <span className="sr-only">ESX Legacy Documentation</span>
    </span>
  );
}
