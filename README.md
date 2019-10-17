# basic-boilerplate-parcel.js
Basic Front-End boilerplate setup with Parcel

This package is going to accelerate your experiments by adding dependencies to your **package.json** with some js libraries and creating a basic folder structure to start
working with **Parcel**. Also helps you with *SASS* and **PostCSS**

## Setup
Adding the library as dev dependency after creating your project directory
```bash
$ mkdir <your-project-directory>
$ cd  <your-project-directory>
$ yarn init -y
$ yarn add --dev basic-boilerplate-parcel.js
```

## Running

```bash
$ node node_modules/basic-boilerplate-parcel.js/basicBoilerplateSetup.js 
```

Then you can use the **package.json.new** with all the dependencies replacing your original package file. Then execute:

```bash
$ yarn install
$ yarn dev
```

## JS Libraries included

- @fortawesome/fontawesome-free
- handlebars
- normalize.css
- typography
- typography-theme-moraga

## JS Development Libraries included

  - autoprefixer
  - eslint
  - parcel-bundler
  - postcss-modules
  - sass
  - stylelint
    
