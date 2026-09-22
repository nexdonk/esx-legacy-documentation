import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getPageTree } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteFooter } from '@/components/site-footer';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const options = baseOptions();

  return (
    <>
      <DocsLayout
        tree={getPageTree()}
        {...options}
        nav={{ ...options.nav, transparentMode: 'none' }}
        sidebar={{
          defaultOpenLevel: 0,
          collapsible: true,
        }}
      >
        {children}
      </DocsLayout>
      <SiteFooter />
    </>
  );
}
