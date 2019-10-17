const updatePackages = require('./updatePackages');
const template = require('./template');

module.exports = {
  initializate() {
    console.log('Starting with the basic Parcel project template');

    template
      .createDirectories()
      .then(() => template.createRootCfgFiles())
      .then(() => template.createSourceCodeFiles())
      .then(() => template.createEmptyFiles())
      .then(() => updatePackages.update())
      .then(() => {
        console.log('We are Legion!!!');
        console.log('You can run yarn install and then yarn dev');
      });
  }
};
