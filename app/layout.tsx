import { RootProvider } from 'fumadocs-ui/provider/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { appName, siteDescription, siteUrl } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ESX Legacy Documentation',
    template: `%s | ${appName}`,
  },
  description: siteDescription,
  applicationName: appName,
  authors: [{ name: 'ESX Framework Team', url: 'https://esx-framework.org' }],
  keywords: [
    'ESX Framework',
    'ESX Legacy',
    'FiveM',
    'FiveM server',
    'GTA V roleplay',
    'Lua scripting',
    'CitizenFX',
    'roleplay framework',
    'ESX addons',
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: appName,
    locale: 'en_US',
    url: siteUrl,
    title: 'ESX Legacy Documentation',
    description: siteDescription,
    images: [{ url: '/twitter-card.png', width: 800, height: 800, alt: 'ESX Legacy' }],
  },
  twitter: {
    card: 'summary',
    site: '@ESXFramework',
    creator: '@ESXFramework',
    title: 'ESX Legacy Documentation',
    description: siteDescription,
    images: ['/twitter-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0e0d' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              api: '/api/search',
            },
          }}
        >
          {children}
        </RootProvider>
        <Analytics />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
