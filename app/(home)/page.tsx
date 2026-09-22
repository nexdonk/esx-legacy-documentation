import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Cog,
  GraduationCap,
  LifeBuoy,
  Monitor,
  Puzzle,
  Rocket,
  Server,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import { DiscordIcon, GitHubIcon } from '@/components/icons';
import { links, siteDescription } from '@/lib/shared';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'ESX Legacy Documentation - The FiveM Roleplay Framework',
  description: siteDescription,
  alternates: { canonical: '/' },
};

const startHere = [
  {
    icon: Rocket,
    title: 'Install ESX Legacy',
    description: 'Deploy a production-ready server with txAdmin, MariaDB and the official recipe.',
    href: '/docs/tutorial/install',
  },
  {
    icon: GraduationCap,
    title: 'Write your first script',
    description: 'Folder structure, fxmanifest, ESX imports and the commands you need to get going.',
    href: '/docs/tutorial/developing',
  },
  {
    icon: ShieldCheck,
    title: 'Best coding practices',
    description: 'Naming, caching, loops and Lua 5.4 tips that keep your resources fast and stable.',
    href: '/docs/tutorial/coding_practices',
  },
];

const explore = [
  {
    icon: Boxes,
    title: 'es_extended',
    description: 'The core resource: player management, jobs, money, callbacks and events.',
    href: '/docs/esx_core/es_extended',
  },
  {
    icon: Monitor,
    title: 'Client API',
    description: 'ESX.Game, streaming, scaleforms, interactions and the client-side function set.',
    href: '/docs/esx_core/es_extended/client/functions',
  },
  {
    icon: Server,
    title: 'Server API',
    description: 'Server functions, xPlayer methods and OneSync helpers.',
    href: '/docs/esx_core/es_extended/server/functions',
  },
  {
    icon: Zap,
    title: 'Events',
    description: 'Every client and server event fired by the framework, with payloads.',
    href: '/docs/esx_core/es_extended/events/server',
  },
  {
    icon: Cog,
    title: 'Configuration',
    description: 'Main config, weapon definitions, Discord logging and runtime adjustments.',
    href: '/docs/esx_core/es_extended/config/main',
  },
  {
    icon: Puzzle,
    title: 'Addons',
    description: 'Police, ambulance, banking, shops, garages and 30+ more official resources.',
    href: '/docs/esx_addons',
  },
];

const codeSample = `-- fxmanifest.lua
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

shared_scripts {
  '@es_extended/imports.lua',
  '@es_extended/locale.lua',
  'config.lua',
}

client_scripts { 'client.lua' }
server_scripts { 'server.lua' }

dependencies { 'es_extended' }`;

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-(--fd-layout-width,1400px) gap-12 px-6 pt-20 pb-16 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-28 lg:pb-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-fd-primary/30 bg-fd-primary/10 px-3 py-1 text-xs font-medium text-fd-primary">
              <span className="size-1.5 rounded-full bg-fd-primary" />
              Official ESX Legacy documentation
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The framework behind{' '}
              <span className="text-gradient-brand">thousands</span> of FiveM roleplay servers.
            </h1>
            <p className="max-w-xl text-pretty text-lg text-fd-muted-foreground">
              ESX Legacy gives you jobs, economy, inventory, identity and a battle-tested API so
              you can build the server you actually want. Free, open source and maintained by the
              community since 2017.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/docs/tutorial/install"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/25 transition-colors hover:bg-fd-primary/90"
              >
                Get started
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-fd-accent"
              >
                <BookOpen className="size-4" />
                Browse the docs
              </Link>
            </div>
            <dl className="mt-2 grid grid-cols-3 gap-6 border-t border-fd-border pt-6 text-sm">
              <div>
                <dt className="text-fd-muted-foreground">Since</dt>
                <dd className="text-xl font-semibold">2017</dd>
              </div>
              <div>
                <dt className="text-fd-muted-foreground">Official addons</dt>
                <dd className="text-xl font-semibold">30+</dd>
              </div>
              <div>
                <dt className="text-fd-muted-foreground">License</dt>
                <dd className="text-xl font-semibold">MIT</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl bg-fd-primary/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-2xl shadow-black/10 dark:shadow-black/40">
              <div className="flex items-center gap-2 border-b border-fd-border px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-fd-muted-foreground">
                  resources/[esx]/my_script/fxmanifest.lua
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-fd-foreground/90">
                <code>{codeSample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Start here */}
      <Section
        eyebrow="Start here"
        title="From zero to a running server"
        description="Three guides that take you from a fresh Windows machine to your first custom resource."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {startHere.map((item, index) => (
            <FeatureCard key={item.href} {...item} step={index + 1} />
          ))}
        </div>
      </Section>

      {/* Explore */}
      <Section
        eyebrow="Reference"
        title="Everything the framework exposes"
        description="Functions, events, config keys and addons, documented with examples you can copy straight into your resources."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((item) => (
            <FeatureCard key={item.href} {...item} />
          ))}
        </div>
      </Section>

      {/* Community */}
      <Section
        eyebrow="Community"
        title="Stuck? You are not alone"
        description="Thousands of developers hang out on the ESX Discord and GitHub. Check the common issues page first, then come say hi."
        className="pb-24"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <CommunityCard
            icon={<LifeBuoy className="size-5" />}
            title="Common issues"
            description="Native not supported, database connection errors, ESX = nil and other frequent problems."
            href="/docs/troubleshoot"
          />
          <CommunityCard
            icon={<DiscordIcon className="size-5" />}
            title="Discord"
            description="Support channels, showcases and announcements from the ESX team."
            href={links.discord}
            external
          />
          <CommunityCard
            icon={<GitHubIcon className="size-5" />}
            title="GitHub"
            description="Source code for the core, the addons and this documentation. Contributions welcome."
            href={links.github}
            external
          />
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-fd-muted-foreground">
          <Wrench className="size-4" />
          Looking for clothing, asset or merge tools?{' '}
          <Link href="/docs/tools" className="font-medium text-fd-primary hover:underline">
            See the community tools list
          </Link>
        </p>
      </Section>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn('mx-auto w-full max-w-(--fd-layout-width,1400px) px-6 py-14 md:px-8', className)}>
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-fd-primary">{eyebrow}</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-2 text-fd-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  step,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  step?: number;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-5 transition-all hover:-translate-y-0.5 hover:border-fd-primary/50 hover:shadow-[0_12px_40px_-16px_var(--color-fd-primary)]"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
          <Icon className="size-5" />
        </span>
        {step ? (
          <span className="font-mono text-xs text-fd-muted-foreground">0{step}</span>
        ) : (
          <ArrowRight className="size-4 text-fd-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        )}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

function CommunityCard({
  icon,
  title,
  description,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}) {
  const className =
    'flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent/60';
  const body = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-fd-muted text-fd-foreground">
        {icon}
      </span>
      <span>
        <span className="block font-semibold">{title}</span>
        <span className="mt-1 block text-sm text-fd-muted-foreground">{description}</span>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
