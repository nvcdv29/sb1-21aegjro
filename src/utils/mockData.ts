import { ImageNode } from '../types';

// Simulated image structure using Unsplash images
export const mockImageStructure: ImageNode[] = [
  {
    name: "Architecture",
    path: "img/architecture",
    type: "directory",
    children: [
      {
        name: "modern-building.jpg",
        path: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
        type: "file"
      },
      {
        name: "historic-architecture.jpg",
        path: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800",
        type: "file"
      },
      {
        name: "urban-design.jpg",
        path: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800",
        type: "file"
      }
    ]
  },
  {
    name: "Nature",
    path: "img/nature",
    type: "directory",
    children: [
      {
        name: "mountain-landscape.jpg",
        path: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        type: "file"
      },
      {
        name: "forest-path.jpg",
        path: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        type: "file"
      },
      {
        name: "waterfall.jpg",
        path: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800",
        type: "file"
      }
    ]
  }
];