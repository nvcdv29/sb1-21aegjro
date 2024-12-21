import React from 'react';
import { Header } from './components/layout/Header';
import { TableOfContents } from './components/TableOfContents';
import { ImageGallery } from './components/ImageGallery';
import { useImageStructure } from './hooks/useImageStructure';

function App() {
  const { structure, loading, error } = useImageStructure();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TableOfContents structure={structure} />
        <div className="mt-8">
          <ImageGallery structure={structure} />
        </div>
      </main>
    </div>
  );
}

export default App;