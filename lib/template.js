const fs = require('fs');
const fileHandler = require('./fileHandler');
const BASE_DIR = './src';
const util = require('util');
const mkdir = util.promisify(fs.mkdir);

const createDirectories = async () => {
  if (!fs.existsSync(BASE_DIR)) {
    await mkdir(BASE_DIR);
    await mkdir(`${BASE_DIR}/img`);
    await mkdir(`${BASE_DIR}/css`);
    await mkdir(`${BASE_DIR}/css/helpers`);
    await mkdir(`${BASE_DIR}/css/components`);
    await mkdir(`${BASE_DIR}/css/layout`);
    await mkdir(`${BASE_DIR}/css/pages`);
    await mkdir(`${BASE_DIR}/js`);
  }
};

const createRootCfgFiles = async () => {
  await fileHandler.copyFile(`${__dirname}/templates/.postcssrc`, '.postcssrc');
  await fileHandler.copyFile(
    `${__dirname}/templates/.browserslistrc`,
    '.browserslistrc'
  );
  await fileHandler.copyFile(
    `${__dirname}/templates/gitignore_template`,
    '.gitignore.new'
  );
};

const createSourceCodeFiles = async () => {
  await fileHandler.copyFile(
    `${__dirname}/templates/index.html`,
    `${BASE_DIR}/index.html`
  );
  await fileHandler.copyFile(
    `${__dirname}/templates/main.js`,
    `${BASE_DIR}/js/main.js`
  );
  await fileHandler.copyFile(
    `${__dirname}/templates/typoUtil.js`,
    `${BASE_DIR}/js/typoUtil.js`
  );
  await fileHandler.copyFile(
    `${__dirname}/templates/main.scss`,
    `${BASE_DIR}/css/main.scss`
  );
  await fileHandler.copyFile(
    `${__dirname}/templates/_reset.scss`,
    `${BASE_DIR}/css/helpers/_reset.scss`
  );
};

const createEmptyFiles = async () => {
  fileHandler.createEmptyFile(`${BASE_DIR}/css/helpers/_functions.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/helpers/_mixins.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/helpers/_variables.scss`);

  fileHandler.createEmptyFile(`${BASE_DIR}/css/layout/_footer.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/layout/_grid.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/layout/_header.scss`);

  fileHandler.createEmptyFile(`${BASE_DIR}/css/pages/_contact.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/pages/_home.scss`);

  fileHandler.createEmptyFile(`${BASE_DIR}/css/components/_button.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/components/_cover.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/components/_pagination.scss`);
  fileHandler.createEmptyFile(`${BASE_DIR}/css/components/_carousel.scss`);
};

module.exports = {
  createDirectories,
  createRootCfgFiles,
  createSourceCodeFiles,
  createEmptyFiles
};
