<a name="readme-top"></a>

<div align="center">
  <!-- <img src="https://github.com/microverseinc/readme-template/raw/master/murple_logo.png" alt="logo" width="50"  height="auto" /> -->
  <!-- <br/> -->
  <h3><b>Microverse README</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 JavaScript Capstone Project ](#-javascript-capstone-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests ](#run-tests-)
    - [Deployment ](#deployment-)
  - [Authors ](#authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 JavaScript Capstone Project <a name="about-project"></a>

The JavaScript capstone project is about building our own web application based on two external APIs. First, we retrieve movies and TV Series from the [TVmaze API](https://www.tvmaze.com/api) and then record user interactions (likes and comments) using the [Involvement API](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270).

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<a href="https://www.w3.org/html/" target="_blank"><img align="center" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.svg" alt="html5" width="55" height="55"/></a> <a href="https://www.w3schools.com/css/" target="_blank"><img align="center" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg" alt="css3" width="55" height="55"/></a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img align="center" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.svg" alt="javascript" width="55" height="55"/></a> <a href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img align="center" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/webpack-icon.svg" alt="webpack" width="55" height="55"/></a>

<!--
<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>
<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>
-->

### Key Features <a name="key-features"></a>

- **Single page app**
- **Fetch movies**
- **Add likes to movies**
- **Add comments to movies**
- **Count movies, likes, and comments**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://feliverse.github.io/JavaScript-Capston-Project/dist/)
- [Video presentation](https://drive.google.com/file/d/101YcGJyBorve074Qaci6uqYrrNIKRzJ7/view?usp=share_link)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- [ ] A PC running any operating system like Windows, Linux, or MacOS
- [ ] An Internet connection
- [ ] Knowledge of some basic Git commands
- [ ] A browser like Microsoft Edge, Google Chrome or Mozilla Firefox
- [ ] Git installed
- [ ] Webpack installed

### Setup

- [ ] Link your PC to GitHub
- [ ] Clone this repository to your desired folder:

```
git clone https://github.com/Feliverse/JavaScript-Capston-Project.git
```

```
cd JavaScript-Capston-Project
```

- [ ] Open the file in your code editor

```
code .
```

- [ ] Setup JavaScript + CSS + HTML linters

Run the following codes in your project folder in your IDE:

```
npm install --save-dev hint@7.x
```

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

To run Stylelint and ESLint tests, run the following commands respectively:

```
npx hint .
```

```
npx stylelint "**/*.{css,scss}"
```

```
npx eslint .
```

### Install

Install this project with:

- [ ] node_modules

```
npm install -g node-modules
```

- [ ] webpack

```
npm install -g webpack
```

```
npm install -g webpack-cli
```

- [ ] project dependencies

```
npm install
```

### Usage

Start the server

```
npm run start
```

### Run tests <a name="run-tests"></a>

To run tests,

- [ ] Install Jest and jsdom

```
npm install -g jest
```

```
npm install --save-dev jest-environment-jsdom
```

- [ ] Start the test

```
npm run test -- --watch
```

### Deployment <a name="deployment"></a>

Install the `gh-pages` npm package and designate it as a development dependency:

```
npm install gh-pages --save-dev
```

To deploy this project, run

```
npm run deploy
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Authors <a name="authors"></a>

👤 **Felipe Haybar**

- GitHub: [@Feliverse](https://github.com/Feliverse)
- Twitter: [@FelipeHaybar](https://twitter.com/FelipeHaybar)
- LinkedIn: [FelipeHaybar](https://linkedin.com/in/FelipeHaybar)

👥 **Henschel Nketchogue M.**

- GitHub: [miltonHenschel](https://github.com/miltonHenschel)
- LinkedIn: [henschelnketchoguem](https://www.linkedin.com/in/henschelnketchoguem/)
- Twitter: [nketchogue](https://twitter.com/nketchogue)
- Instagram: [mpatchiehenschel](https://www.instagram.com/mpatchiehenschel/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Improve design**
- [ ] **Add reservation feature**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- [ ] **![](https://img.shields.io/badge/Microverse-blueviolet)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **How to fix JavaScript + CSS + HTML linter errors?**

  - Kindly use the following in your project's root directory:

  ```
  npx stylelint "**/*.{css,scss} --fix"
  ```

  ```
  npx eslint . --fix
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
