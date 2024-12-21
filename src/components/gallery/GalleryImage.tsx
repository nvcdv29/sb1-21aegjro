import React from 'react';
import { ImageNode } from '../../types';

interface GalleryImageProps {
  image: ImageNode;
}

export function GalleryImage({ image }: GalleryImageProps) {
  return (
    <div className="relative group flex items-center justify-center overflow-hidden rounded-md">
      <img
        src={image.path} // Directly use the path from mockData.ts
        alt={image.name}
        loading="lazy"
        className="max-h-64 w-auto object-contain rounded-md transition-transform duration-300"
      />
    </div>
  );
}