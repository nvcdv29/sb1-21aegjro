import React from 'react';
import { ImageNode } from '../../types';

interface GalleryImageProps {
  image: ImageNode;
}

export function GalleryImage({ image }: GalleryImageProps) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(`../../${image.path}`);
        setImageSrc(importedImage.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image.path]);

  if (!imageSrc) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-md">
        <span>Loading image...</span>
      </div>
    );
  }

  return (
    <div className="relative group flex items-center justify-center overflow-hidden rounded-md">
      <img
        src={imageSrc}
        alt={image.name}
        loading="lazy"
        className="max-h-64 w-auto object-contain rounded-md transition-transform duration-300"
      />
    </div>
  );
}