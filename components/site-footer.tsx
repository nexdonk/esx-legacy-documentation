import Link from 'next/link';
import { Logo } from './logo';
import { DiscordIcon, GitHubIcon } from './icons';
import { links } from '@/lib/shared';
import { cn } from '@/lib/cn';

const columns: { title: string; items: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: 'Documentation',
    items: [
      { label: 'Install ESX Legacy', href: '/docs/tutorial/install' },
      { label: 'Developing a script', href: '/docs/tutorial/developing' },
      { label: 'Best coding practices', href: '/docs/tutorial/coding_practices' },
      { label: 'Common issues', href: '/docs/troubleshoot' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { label: 'es_extended', href: '/docs/esx_core/es_extended' },
      { label: 'Client functions', href: '/docs/esx_core/es_extended/client/functions' },
      { label: 'Server functions', href: '/docs/esx_core/es_extended/server/functions' },
      { label: 'Addons', href: '/docs/esx_addons' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'Discord', href: links.discord, external: true },
      { label: 'GitHub organisation', href: links.github, external: true },
      { label: 'Core repository', href: links.githubCore, external: true },
      { label: 'Official website', href: links.website, external: true },
    ],
  },
];

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn('border-t border-fd-border bg-fd-card/40', className)}>
      <div className="mx-auto w-full max-w-(--fd-layout-width,1400px) px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-fd-muted-foreground">
              The open-source roleplay framework for FiveM. Free forever, built and maintained by
              the community since 2017.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={links.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESX Discord"
                className="rounded-lg border border-fd-border p-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
              >
                <DiscordIcon className="size-4" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESX on GitHub"
                className="rounded-lg border border-fd-border p-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-sm font-semibold">{column.title}</p>
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-fd-border pt-6 text-xs text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ESX Framework. Released under the MIT License.</p>
          <p className="flex flex-wrap items-center gap-x-3">
            <span>Built for the FiveM community</span>
            <span aria-hidden>·</span>
            <a href="/sitemap.xml" className="hover:text-fd-foreground">
              Sitemap
            </a>
            <span aria-hidden>·</span>
            <a href="/llms.txt" className="hover:text-fd-foreground">
              llms.txt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
