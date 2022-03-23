const { existsSync } = require('fs')
const { join } = require('path')

const MAIN_ENTRY_POINT = './src/main/index.ts'

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    entry: MAIN_ENTRY_POINT,
    module: { rules: require('./webpack.rules'), },
    resolve: {
        alias: require('./webpack.aliases'),
        extensions: ['.js', '.ts', '.tsx', '.css']
    }
}
