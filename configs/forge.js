const template = './src/renderer/template.html'

const config = name => `./configs/${name}`
const inPage = (pageName, fileName) => `./src/renderer/pages/${pageName}/${fileName}`

module.exports = {
  // packagerConfig: {
  //   icon: '.webpack/main/favicon.ico'
  // },
  // electronRebuildConfig: { ... },
  // makers: [
  //   {
  //     name: '@electron-forge/maker-zip',
  //     platforms: ['darwin', 'linux'],
  //     config: {
  //       // Config here
  //     }
  //   }
  // ],
  // publishers: [ ... ],
  // hooks: { ... },
  // buildIdentifier: 'my-build'
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: config('webpack.main.js'),
        renderer: {
          config: config('webpack.renderer.js'),
          entryPoints: [
            {
              // You need to set an entry point EXAMPLE_WEBPACK_ENTRY in entries.ts
              name: 'Example',
              html: template,
              js: inPage('example', 'index.tsx'),
              // You need to set an preload EXAMPLE_PRELOAD_WEBPACK_ENTRY in entries.ts
              preload: { js: inPage('example', 'preload.ts') }
            }
          ]
        }
      }
    }
  ]
}
