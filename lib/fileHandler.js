const fs = require('fs');
const util = require('util');
const promisifiedCopyFile = util.promisify(fs.copyFile);
const closeFile = util.promisify(fs.close);
const openFile = util.promisify(fs.open);

const copyFile = (origin, destination) => {
  console.log(`Creating file ${destination}...`);
  promisifiedCopyFile(origin, destination)
};

const createEmptyFile = async filePath => {  
  const file = await openFile(filePath, 'w');
  await closeFile(file);
  console.log(`Creating file ${filePath}...`);
};

module.exports = {
  copyFile,
  createEmptyFile
}