import React from 'react';
import { ImageNode } from '../../types';

interface GalleryImageProps {
  image: ImageNode;
}

export function GalleryImage({ image }: GalleryImageProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={image.path}
        alt={image.name}
        loading="lazy"
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] max-h-[50vh] object-contain rounded-lg transition-transform duration-300"
      />
    </div>
  );
}
