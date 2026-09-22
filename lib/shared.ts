import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'ESX Legacy Docs';
export const siteUrl = 'https://docs.esx-framework.org';
export const siteDescription =
  'Official documentation for ESX Legacy, the open-source FiveM roleplay framework. Installation guides, core API reference, addons, events and best practices.';

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'esx-framework',
  repo: 'esx-legacy-documentation',
  branch: 'tested',
};

export const links = {
  github: 'https://github.com/esx-framework',
  githubCore: 'https://github.com/esx-framework/esx_core',
  githubAddons: 'https://github.com/esx-framework/esx-legacy-addons',
  githubDocs: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  discord: 'https://discord.esx-framework.org/',
  website: 'https://esx-framework.org/',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
