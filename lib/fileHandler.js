const fs = require('fs');

const copyFile = async (origin, destination) => {
  fs.copyFileSync(origin, destination, err => {
    console.log(`Creating file ${destination}...`);
  });
};

const createEmptyFile = async filePath => {
  fs.closeSync(fs.openSync(filePath, 'w'));
  console.log(`Creating file ${filePath}...`);
};

module.exports = {
  copyFile,
  createEmptyFile
}