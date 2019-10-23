# basic-boilerplate-parcel.js

This library helps you to create a setup for modern web development uisng **Parcel**.
Creates for you the next folder structure:

```
.
├── .browserslistrc
├── .postcssrc
├── .gitignore.new
├── package.json.bak
├── package.json.new
└── src
    ├── css
    │   ├── components
    │   │   ├── _button.scss
    │   │   ├── _carousel.scss
    │   │   ├── _cover.scss
    │   │   └── _pagination.scss
    │   ├── helpers
    │   │   ├── _functions.scss
    │   │   ├── _mixins.scss
    │   │   ├── _reset.scss
    │   │   └── _variables.scss
    │   ├── layout
    │   │   ├── _footer.scss
    │   │   ├── _grid.scss
    │   │   └── _header.scss
    │   ├── main.scss
    │   └── pages
    │       ├── _contact.scss
    │       └── _home.scss
    ├── img
    ├── index.html
    └── js
        ├── main.js
        └── typoUtil.js


```

This package is going to accelerate your experiments by adding dependencies to your **package.json** with some js libraries and creating a basic folder structure to start
working with **Parcel**. Also helps you with *SASS* and **PostCSS**.


Just start coding at your **index.html** file with all the dependencies ready for *js* and *css*

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

Then you can use the **package.json.new** with all the dependencies replacing your original package file. The same with **.gitignore.new** that already has parcel and nodejs ignore settings. Then execute:

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
- moment.js

## JS Development Libraries included

  - autoprefixer
  - eslint
  - parcel-bundler
  - postcss-modules
  - sass
  - stylelint
    
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ByteDecoder/basic-boilerplate-parcel.js.


Copyright (c) 2019 [Rodrigo Reyes](https://twitter.com/bytedecoder) released under the MIT license
