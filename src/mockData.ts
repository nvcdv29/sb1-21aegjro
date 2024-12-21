import { ImageNode } from '../types';

export const mockImageStructure: ImageNode[] = [
  {
    "name": "Architecture",
    "path": "img/architecture",
    "type": "directory",
    "children": [
      {
        "name": "arc-img-1.jpg",
        "path": "img/architecture/arc-img-1.jpg",
        "type": "file"
      },
      {
        "name": "second-image.jpg",
        "path": "img/architecture/second-image.jpg",
        "type": "file"
      }
    ]
  },
  {
    "name": "Nature",
    "path": "img/nature",
    "type": "directory",
    "children": [
      {
        "name": "img-n1.jpg",
        "path": "img/nature/img-n1.jpg",
        "type": "file"
      },
      {
        "name": "natura-x.jpg",
        "path": "img/nature/natura-x.jpg",
        "type": "file"
      }
    ]
  }
];
