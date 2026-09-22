import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import type * as PageTree from 'fumadocs-core/page-tree';
import { defineDocs } from 'fumadocs-mdx/macro';
import { z } from 'zod';
import { docsRoute } from './shared';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({
      /** Short label shown in the sidebar when the page title is long. */
      sidebarTitle: z.string().optional(),
      /** Comma-separated SEO keywords. */
      keywords: z.string().optional(),
    }),
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

/**
 * Page tree with `sidebarTitle` applied: pages keep a descriptive `title` for
 * the document heading and SEO, while the sidebar shows the shorter label.
 */
export function getPageTree(): PageTree.Root {
  const tree = source.getPageTree();
  const labels = new Map<string, string>();
  for (const page of source.getPages()) {
    if (page.data.sidebarTitle) labels.set(page.url, page.data.sidebarTitle);
  }

  const visit = (node: PageTree.Node | PageTree.Root) => {
    if ('type' in node && node.type === 'page') {
      const label = labels.get(node.url);
      if (label) node.name = label;
      return;
    }
    if ('type' in node && node.type === 'folder' && node.index) visit(node.index);
    if ('children' in node) node.children.forEach(visit);
  };
  visit(tree);
  return tree;
}

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
