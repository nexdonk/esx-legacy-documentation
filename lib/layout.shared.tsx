import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Globe } from 'lucide-react';
import { Logo } from '@/components/logo';
import { DiscordIcon } from '@/components/icons';
import { links } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
      transparentMode: 'top',
    },
    githubUrl: links.github,
    links: [
      {
        icon: <BookOpen />,
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        icon: <Globe />,
        text: 'Website',
        url: links.website,
        external: true,
      },
      {
        type: 'icon',
        icon: <DiscordIcon />,
        text: 'Discord',
        label: 'Join the ESX Discord',
        url: links.discord,
        external: true,
      },
    ],
  };
}
