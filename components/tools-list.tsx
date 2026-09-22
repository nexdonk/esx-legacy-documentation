import { ExternalLink } from 'lucide-react';
import { TOOLS } from '@/lib/tools';

export function ToolsList() {
  return (
    <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
      {TOOLS.map((tool) => (
        <a
          key={tool.name}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-fd-border bg-fd-card p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-fd-primary/50 hover:shadow-[0_8px_30px_-12px_var(--color-fd-primary)]"
        >
          <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-fd-muted p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.icon}
              alt=""
              loading="lazy"
              className={tool.lightIcon ? 'hidden size-full object-contain dark:block' : 'size-full object-contain'}
            />
            {tool.lightIcon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tool.lightIcon} alt="" loading="lazy" className="size-full object-contain dark:hidden" />
            )}
          </span>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="flex items-center gap-1.5 font-medium text-fd-foreground">
              {tool.name}
              <ExternalLink className="size-3.5 text-fd-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="text-sm text-fd-muted-foreground">{tool.description}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
