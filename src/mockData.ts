import { ImageNode } from "./types";

// Simulated image structure using Unsplash images
import { ImageNode } from "../types";

export const mockImageStructure: ImageNode[] = [
  {
    name: "Architecture",
    path: "src/img/architecture",
    type: "directory",
    children: [
      {
        name: "arc-img-1.jpg",
        path: "src/img/architecture/arc-img-1.jpg",
        type: "file",
      },
      {
        name: "second-image.jpg",
        path: "src/img/architecture/second-image.jpg",
        type: "file",
      },
    ],
  },
  {
    name: "Nature",
    path: "src/img/nature",
    type: "directory",
    children: [
      {
        name: "img-n1.jpg",
        path: "src/img/nature/img-n1.jpg",
        type: "file",
      },
      {
        name: "natura-x.jpg",
        path: "src/img/nature/natura-x.jpg",
        type: "file",
      },
    ],
  },
];
