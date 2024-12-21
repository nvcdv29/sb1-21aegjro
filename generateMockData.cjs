const fs = require('fs');
const path = require('path');

// Path to the root-level img folder
const imgFolder = path.join(process.cwd(), 'img');

// Path to the output mockData.ts file
const outputFile = path.join(process.cwd(), 'src', 'mockData.ts');

// Function to read folder structure and generate ImageNode object
function generateImageStructure(directory) {
  // Check if the directory exists
  if (!fs.existsSync(directory)) {
    console.warn(`Directory not found: ${directory}. Skipping.`);
    return [];
  }

  const items = fs.readdirSync(directory, { withFileTypes: true }); // Read directory contents
  const structure = [];

  items.forEach((item) => {
    const itemPath = path.join(directory, item.name);
    const relativePath = path.relative('img', itemPath).replace(/\\/g, '/'); // Relative path to root img folder

    if (item.isDirectory()) {
      structure.push({
        name: capitalize(item.name),
        path: `/img/${relativePath}/`, // Correct path for directories
        type: 'directory',
        children: generateImageStructure(itemPath), // Recursive call for child directories
      });
    } else if (item.isFile() && /\.(png|jpe?g|svg)$/i.test(item.name)) {
      structure.push({
        name: item.name,
        path: `/img/${relativePath}`, // Correct path for files
        type: 'file',
      });
    }
  });

  return structure;
}

// Capitalize the first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main function to generate mockData.ts
function generateMockData() {
  console.log(`Generating mock data for directory: ${imgFolder}`);

  // Generate image structure or warn if no images are found
  const imageStructure = generateImageStructure(imgFolder);

  const fileContent = `import { ImageNode } from '../types';\n\nexport const mockImageStructure: ImageNode[] = ${JSON.stringify(
    imageStructure,
    null,
    2
  )};\n`;

  // Write the generated structure to the output file
  fs.writeFileSync(outputFile, fileContent, 'utf-8');
  console.log(`mockData.ts successfully generated at: ${outputFile}`);
}

// Execute the script
generateMockData();