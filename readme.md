# Bootstrap WebApp Template

**Please open all issues with this template on the main [Bootstrap Git](https://github.com/danilbnd/layout-templete) repo.**

This is the official Bootstrap Template for use with [Boostrap for Sites](https://v5.getbootstrap.com/). 

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Boostrap CLI with this command:

```bash
npm install bootstrap
```


The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

Now `cd` to your project name and to start your project run 

```bash
bootstrap watch
```

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/danilbnd/layout-templete
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
