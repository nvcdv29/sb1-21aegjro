import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ImageNode } from '../../types';

interface TocItemProps {
  node: ImageNode;
  level: number;
}

export function TocItem({ node, level }: TocItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  if (node.type !== 'directory') return null;
  
  const hasChildren = node.children?.some(child => child.type === 'directory');
  const paddingLeft = `${level * 1.5}rem`;

  return (
    <li>
      <div 
        className="flex items-center gap-1 hover:bg-gray-50 rounded py-1 px-2 transition-colors"
        style={{ paddingLeft }}
      >
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0.5 hover:bg-gray-100 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-3 h-3 text-gray-500" />
            ) : (
              <ChevronRight className="w-3 h-3 text-gray-500" />
            )}
          </button>
        )}
        <a
          href={`#${node.path.replace(/\//g, '-')}`}
          className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex-grow"
        >
          {node.name}
        </a>
      </div>
      {hasChildren && isExpanded && (
        <ul className="mt-1">
          {node.children
            ?.filter(child => child.type === 'directory')
            .map(child => (
              <TocItem key={child.path} node={child} level={level + 1} />
            ))}
        </ul>
      )}
    </li>
  );
}