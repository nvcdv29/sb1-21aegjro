import { readdir, stat } from 'fs/promises';
import { join, relative } from 'path';

interface ImageNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: ImageNode[];
}

export async function generateImageStructure(dir: string): Promise<ImageNode[]> {
  const entries = await readdir(dir);
  const structure: ImageNode[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);
    const relativePath = relative('src', fullPath);

    if (stats.isDirectory()) {
      structure.push({
        name: entry,
        path: relativePath,
        type: 'directory',
        children: await generateImageStructure(fullPath)
      });
    } else if (isImageFile(entry)) {
      structure.push({
        name: entry,
        path: relativePath,
        type: 'file'
      });
    }
  }

  return structure;
}

function isImageFile(filename: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}