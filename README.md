# WERTM-Template

Webpack-Electron-React-Typescript-MUI template

- Webpack v5.37
- Electron v17.1.2
- Typescript v4.6.2
- React v17.0.2
- Babel v7.17.8
- Material UI v5.5.2
- Electron-Forge v6.0.0
- Hot-reloading

First, install the dependencies

```npm
npm i
```

To start the live server, use

```npm
npm run start
```

For packaging

```npm
npm run package
```

or

```npm
npm run package-prod
```

- The main script is located in `src/main/index.ts`.
- The pages are in `src/renderer/pages/`.
- Сonfigs are located in `configs/`.
- Production build is optimized as much as possible.
- Typescript is configured to use the latest JavaScript features.
- There is a base for setting up aliases.
