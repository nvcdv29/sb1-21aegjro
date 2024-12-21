import React from 'react';
import { ImageNode } from '../types';
import { TocItem } from './toc/TocItem';

interface TableOfContentsProps {
  structure: ImageNode[];
}

export function TableOfContents({ structure }: TableOfContentsProps) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h2 className="text-xs font-medium text-gray-500 mb-4">CONTENTS</h2>
      <nav>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {structure.map(node => (
            <TocItem key={node.path} node={node} level={0} />
          ))}
        </ul>
      </nav>
    </div>
  );
}