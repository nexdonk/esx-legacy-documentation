import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-sm text-fd-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-fd-muted-foreground">
          The page may have moved during the docs rewrite. Old links under <code>/en</code> now
          live under <code>/docs</code>.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-semibold text-fd-primary-foreground hover:bg-fd-primary/90"
          >
            Go to the docs
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs/troubleshoot"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-4 py-2 text-sm font-semibold hover:bg-fd-accent"
          >
            <Search className="size-4" />
            Common issues
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
}
