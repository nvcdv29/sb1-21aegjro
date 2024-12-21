const fs = require('fs');
const path = require('path');

const imgFolder = path.join(__dirname, 'src', 'img');
const outputFile = path.join(__dirname, 'src', 'mockData.ts');

// Funktion, um die Ordnerstruktur zu lesen und ein ImageNode-Objekt zu generieren
function generateImageStructure(directory) {
  const items = fs.readdirSync(directory, { withFileTypes: true });
  const structure = [];

  items.forEach((item) => {
    const itemPath = path.join(directory, item.name);
    const relativePath = path.relative(path.join(__dirname, 'src'), itemPath).replace(/\\/g, '/');

    if (item.isDirectory()) {
      structure.push({
        name: capitalize(item.name),
        path: relativePath,
        type: 'directory',
        children: generateImageStructure(itemPath),
      });
    } else if (item.isFile() && /\.(png|jpe?g|svg)$/i.test(item.name)) {
      structure.push({
        name: item.name,
        path: relativePath,
        type: 'file',
      });
    }
  });

  return structure;
}

// Helferfunktion, um den ersten Buchstaben eines Strings zu kapitalisieren
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Hauptskript: Struktur generieren und in mockData.ts schreiben
function generateMockData() {
  const imageStructure = generateImageStructure(imgFolder);

  const fileContent = `import { ImageNode } from '../types';\n\nexport const mockImageStructure: ImageNode[] = ${JSON.stringify(
    imageStructure,
    null,
    2
  )};\n`;

  fs.writeFileSync(outputFile, fileContent, 'utf-8');
  console.log(`mockData.ts wurde erfolgreich generiert!`);
}

// Skript ausführen
generateMockData();