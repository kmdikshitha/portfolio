'use client';
import type { ComponentProps, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import ZoomableImage from './ZoomableImage';

interface CustomMDXProviderProps {
  children: ReactNode
};

const mdxComponents = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6" {...props} />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
  <div className="text-lg leading-relaxed text-gray-900 mt-8 mb-6" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="list-disc list-inside text-lg text-gray-900 mb-4 space-y-2" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li className="ml-4" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm " {...props} />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre className="bg-gray-900 text-green-300 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre font-mono shadow-md" {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 mb-6 text-center" {...props} />
  ),
  table: (props: ComponentProps<'table'>) => (
     <div className="overflow-x-auto my-6">
    <table className="w-full text-left border border-gray-300 shadow-md text-sm md:text-base" {...props} />
  </div>
  ),
  thead: (props: ComponentProps<'thead'>) => <thead className="bg-gray-100 dark:bg-gray-800/50 font-semibold" {...props} />,
  tr: (props: ComponentProps<'tr'>) => <tr className="border-b border-gray-200 last:border-none hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors" {...props} />,
  th: (props: ComponentProps<'th'>) => <th className="border border-gray-300 px-4 py-2 bg-gray-50 text-sm md:text-base dark:bg-gray-800/30" {...props} />,
  td: (props: ComponentProps<'td'>) => <td className="border border-gray-300 px-4 py-2 align-top" {...props} />,

  img: (props: ComponentProps<'img'>) => {
    if (!props.src) {
      console.warn('MDX Image tag missing src');
      return null;
    }

    // Type guard to ensure src is a string
    const src = typeof props.src === 'string' ? props.src : '';
    
    if (!src) {
      console.warn('MDX Image src is not a valid string');
      return null;
    }

    return (
      <ZoomableImage
        src={src}
        alt={props.alt || ''}
      />
    );
  },
};

export default function CustomMDXProvider({ children }: CustomMDXProviderProps) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  )
};
