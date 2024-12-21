import React from 'react';
import { ImageNode } from '../../types';

interface TocItemProps {
  node: ImageNode;
  level: number;
}

export function TocItem({ node, level }: TocItemProps) {
  if (node.type !== 'directory') return null;

  return (
    <li>
      <a
        href={`#${node.path.replace(/\//g, '-')}`}
        className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
      >
        {node.name}
      </a>
      {node.children && level === 0 && (
        <ul className="flex gap-x-6 mt-2 ml-4">
          {node.children
            .filter(child => child.type === 'directory')
            .map(child => (
              <TocItem key={child.path} node={child} level={level + 1} />
            ))}
        </ul>
      )}
    </li>
  );
}