const { join } = require('path')
const resolve = (...paths) => join(__dirname, ...paths)

module.exports = {
    // You also need to write to tsconfig.json
    'main': resolve('../src/main'),
    'renderer': resolve('../src/renderer')
}
