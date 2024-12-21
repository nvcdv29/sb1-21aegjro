import React from 'react';
import { ImageNode } from '../../types';
import { GalleryImage } from './GalleryImage';

interface GallerySectionProps {
  node: ImageNode;
  level: number;
}

export function GallerySection({ node, level }: GallerySectionProps) {
  const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

  return (
    <section key={node.path} id={node.path.replace(/\//g, '-')} className="mb-12">
      <HeadingTag className="text-2xl font-bold mb-6 text-gray-800">
        {node.name}
      </HeadingTag>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {node.children?.map(child => 
          child.type === 'file' ? (
            <GalleryImage key={child.path} image={child} />
          ) : (
            <GallerySection key={child.path} node={child} level={level + 1} />
          )
        )}
      </div>
    </section>
  );
}