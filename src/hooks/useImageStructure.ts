import { useState, useEffect } from 'react';
import { ImageNode } from '../types';
import { mockImageStructure } from '../../mockData';

export function useImageStructure() {
  const [structure, setStructure] = useState<ImageNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadStructure = () => {
      try {
        setStructure(mockImageStructure);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load image structure'));
        setLoading(false);
      }
    };

    loadStructure();
  }, []);

  return { structure, loading, error };
}