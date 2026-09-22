export interface Tool {
  name: string;
  description: string;
  url: string;
  icon: string;
  /** Alternative icon for light backgrounds. */
  lightIcon?: string;
}

export const TOOLS: Tool[] = [
  {
    name: 'Durty Cloth Tool',
    description: 'Create and edit clothing packs for GTA V and FiveM.',
    url: 'https://gta.clothing/',
    icon: 'https://imgur.com/wHosvgI.png',
  },
  {
    name: 'Forge Plebmasters',
    description: 'Browse vehicles, peds, objects and other game assets.',
    url: 'https://forge.plebmasters.de/',
    icon: 'https://i.imgur.com/mHjFXA8.png',
  },
  {
    name: 'SwisserAI',
    description: 'AI assistant trained on FiveM scripting and natives.',
    url: 'https://ai.swisser.dev/',
    icon: 'https://ai.swisser.dev/fiveai-logo.webp',
  },
  {
    name: 'Smart Merge V',
    description: 'Merge and organise streamed assets for your server.',
    url: 'https://smartmerge.de/',
    icon: 'https://plebmasters.de/brandkit/smartmerge/smart-merge-icon-blue-white-512.png',
    lightIcon: 'https://plebmasters.de/brandkit/smartmerge/smart-merge-icon-blue-black-1000.png',
  },
];
