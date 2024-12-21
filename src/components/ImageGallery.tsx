import React from 'react';
import { ImageNode } from '../types';
import { GallerySection } from './gallery/GallerySection';

interface ImageGalleryProps {
  structure: ImageNode[];
}

export function ImageGallery({ structure }: ImageGalleryProps) {
  return (
    <div className="space-y-12">
      {structure.map(node => (
        <GallerySection key={node.path} node={node} level={2} />
      ))}
    </div>
  );
}