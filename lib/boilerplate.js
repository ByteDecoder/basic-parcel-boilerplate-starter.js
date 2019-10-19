const updatePackages = require('./updatePackages');
const template = require('./template');

const initializate = async () => {
  console.log('Starting with the basic Parcel project template');

  await template.createDirectories();
  await template.createRootCfgFiles();
  await template.createSourceCodeFiles();
  await template.createEmptyFiles();
  await updatePackages.update();

  console.log('We are Legion!!!');
  console.log('You can run yarn install and then yarn dev');
};

module.exports = { initializate };
