## GIPHY WEIRDNESS CALCUTOR 🤪

Uses the Giphy API to show users several GIFs that range from 0-10 on Giphy’s weirdness scale. Users can enter a search term and the app will display a matching GIF starting on 0 weirdness. Using a slider, users can then increase the weirdness and receive weirder and weirder results. When a user finds a GIF they like, they can add it to their list of favorite GIFs by pressing the Like button. Once a user selects their 5 favorite GIFs, they will be prompted to see their result telling them how weird they are.

Config:

- React, ReactDOM, ReactRouterDom
- Redux, ReactRedux, Redux Logger, Redux Promise
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- `.js` and `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module for hot reloading

## Set Up

```bash
git clone git@github.com:johnsontayler/politech-giphy-app.git
yarn install
yarn start
```

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
