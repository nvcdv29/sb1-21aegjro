import React from 'react';
import { ImageNode } from '../../types';

interface GalleryImageProps {
  image: ImageNode;
}

export function GalleryImage({ image }: GalleryImageProps) {
  return (
    <div className="relative group aspect-[4/3] overflow-hidden rounded-lg">
      <img
        src={image.path}
        alt={image.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      /* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm">{image.name}</p>
      </div>
    </div>
  );
}