
const fs = require('fs');
const path = require('path');
const folderName = process.argv[2];
if (!folderName) {
  console.error('Please provide a folder name.');
  process.exit(1);
}
const folderPath = path.join(__dirname, "..", 'src', folderName);
try {
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'problem.ts'), '');
  fs.writeFileSync(path.join(folderPath, 'solution.ts'), '');
  console.log(`Folder '${folderName}' created with 'problem.ts' and 'solution.ts'`);
} catch (err) {
  console.error('An error occurred:', err.message);
}