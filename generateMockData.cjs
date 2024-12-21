const fs = require('fs');
const path = require('path');

const imgFolder = path.join(process.cwd(), 'src', 'img');
const outputFile = path.join(process.cwd(), 'src', 'mockData.ts');

// Function to read folder structure and generate ImageNode object
function generateImageStructure(directory) {
  const items = fs.readdirSync(directory, { withFileTypes: true });
  const structure = [];

  items.forEach((item) => {
    const itemPath = path.join(directory, item.name);
    const relativePath = path.relative('src', itemPath).replace(/\\/g, '/');

    if (item.isDirectory()) {
      structure.push({
        name: capitalize(item.name),
        path: `/src/${relativePath}`, // Prepend '/src/' to the path
        type: 'directory',
        children: generateImageStructure(itemPath),
      });
    } else if (item.isFile() && /\.(png|jpe?g|svg)$/i.test(item.name)) {
      structure.push({
        name: item.name,
        path: `/src/${relativePath}`, // Prepend '/src/' to the path
        type: 'file',
      });
    }
  });

  return structure;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateMockData() {
  const imageStructure = generateImageStructure(imgFolder);

  const fileContent = `import { ImageNode } from '../types';\n\nexport const mockImageStructure: ImageNode[] = ${JSON.stringify(
    imageStructure,
    null,
    2
  )};\n`;

  fs.writeFileSync(outputFile, fileContent, 'utf-8');
  console.log(`mockData.ts successfully generated!`);
}

generateMockData();