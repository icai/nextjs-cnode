require('dotenv').config()
const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack')
const NODE_ENV = process.env.NODE_ENV

module.exports = withTypescript({

  webpack(config, options) {

    config.plugins = config.plugins || []
    // Do not run type checking twice:

    // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
    // 
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve('./tsconfig.json')
    }))

    config.resolve = config.resolve || {}

    config.resolve.alias['components'] = path.resolve('./src/components')
    config.resolve.alias['ui'] = path.resolve('./src/ui/index')
    config.resolve.alias['utils'] = path.resolve('./src/utils')
    config.resolve.alias['interfaces'] = path.resolve('./src/interfaces')
    
    // config env variable
    // examle <div>{ process.env.TEST }</div>
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: NODE_ENV ? path.join(__dirname, `.env.${NODE_ENV}`): path.join(__dirname, `.env`),
        systemvars: true
      })
    ]
    
    return config
  }
})