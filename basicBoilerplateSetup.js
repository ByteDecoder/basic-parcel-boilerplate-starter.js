const fs = require('fs');
const BASE_DIR = './src';
const updatePackages = require('./updatePackages');

const copyFile = (origin, destination) => {
  fs.copyFile(origin, destination, err => {
    console.log(`Creating file ${destination}...`);
  });
};

const createEmptyFile = filePath => {
  fs.closeSync(fs.openSync(filePath, 'w'));
  console.log(`Creating file ${filePath}...`);
};

const basicBoilerPlateSetup = {
  initializate() {
    copyFile('package.json', 'package.json.bak');
    copyFile('package.json', 'package.json.new');

    // Creating Directories
    if (!fs.existsSync(BASE_DIR)) {
      fs.mkdirSync(BASE_DIR);
      fs.mkdirSync(`${BASE_DIR}/img`);
      fs.mkdirSync(`${BASE_DIR}/css`);
      fs.mkdirSync(`${BASE_DIR}/css/helpers`);
      fs.mkdirSync(`${BASE_DIR}/css/components`);
      fs.mkdirSync(`${BASE_DIR}/css/layout`);
      fs.mkdirSync(`${BASE_DIR}/css/pages`);
      fs.mkdirSync(`${BASE_DIR}/js`);
    }

    // root cfg files
    copyFile('./templates/.postcssrc', '.postcssrc');
    copyFile('./templates/.browserslistrc', '.browserslistrc');
    copyFile('./templates/.gitignore', '.gitignore.new');

    // source code files
    copyFile('./templates/index.html', `${BASE_DIR}/index.html`);
    copyFile('./templates/main.js', `${BASE_DIR}/js/main.js`);
    copyFile('./templates/typoUtil.js', `${BASE_DIR}/js/typoUtil.js`);
    copyFile('./templates/main.scss', `${BASE_DIR}/css/main.scss`);    
    copyFile('./templates/_reset.scss', `${BASE_DIR}/css/helpers/_reset.scss`);
    
    // Empty files
    createEmptyFile(`${BASE_DIR}/css/helpers/_functions.scss`);
    createEmptyFile(`${BASE_DIR}/css/helpers/_mixins.scss`);
    createEmptyFile(`${BASE_DIR}/css/helpers/_variables.scss`);

    createEmptyFile(`${BASE_DIR}/css/layout/_footer.scss`);
    createEmptyFile(`${BASE_DIR}/css/layout/_grid.scss`);
    createEmptyFile(`${BASE_DIR}/css/layout/_header.scss`);

    createEmptyFile(`${BASE_DIR}/css/pages/_contact.scss`);
    createEmptyFile(`${BASE_DIR}/css/pages/_home.scss`);

    createEmptyFile(`${BASE_DIR}/css/components/_button.scss`);
    createEmptyFile(`${BASE_DIR}/css/components/_cover.scss`);
    createEmptyFile(`${BASE_DIR}/css/components/_pagination.scss`);
    createEmptyFile(`${BASE_DIR}/css/components/_carousel.scss`);

    updatePackages.update();

    console.log('We are Legion!!!');
    console.log("You can run yarn install and then yarn dev")
  }
};

basicBoilerPlateSetup.initializate();

module.exports = basicBoilerPlateSetup;
