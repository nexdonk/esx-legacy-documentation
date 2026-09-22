import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes } from 'react';
import { ToolsList } from './tools-list';
import { cn } from '@/lib/cn';

interface StaticImage {
  src: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

/**
 * Renders both local images (which fumadocs-mdx turns into static imports with
 * known dimensions) and remote screenshots (plain URLs, no dimensions) with a
 * plain `<img>` so nothing goes through the Next.js image optimiser.
 */
function DocsImage({ className, alt = '', src, width, height, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const image = src as unknown;
  const resolved: StaticImage =
    typeof image === 'object' && image !== null && 'src' in image
      ? (image as StaticImage)
      : { src: typeof image === 'string' ? image : '' };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      loading="lazy"
      decoding="async"
      src={resolved.src}
      width={width ?? resolved.width}
      height={height ?? resolved.height}
      className={cn('rounded-lg border border-fd-border', className)}
      {...props}
    />
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: DocsImage,
    Accordion,
    Accordions,
    File,
    Files,
    Folder,
    Step,
    Steps,
    Tab,
    Tabs,
    ToolsList,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
