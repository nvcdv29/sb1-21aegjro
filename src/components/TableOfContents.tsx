import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ImageNode } from '../types';
import { TocItem } from './toc/TocItem';

interface TableOfContentsProps {
  structure: ImageNode[];
}

export function TableOfContents({ structure }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50 hover:rounded-lg transition-colors"
      >
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
        <span className="text-sm font-medium text-gray-500">Inhalt</span>
      </button>
      {isExpanded && (
        <nav className="px-4 pb-3">
          <ul className="space-y-1 space-x-1 mt-1">
            {structure.map(node => (
              <TocItem key={node.path} node={node} level={0} />
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}