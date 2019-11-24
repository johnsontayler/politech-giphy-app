Simple react starter with the following config:

- React, ReactDOM, ReactRouterDom
- Redux, ReactRedux, Redux Logger, Redux Promise
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module for hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
