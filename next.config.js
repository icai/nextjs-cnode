const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = withTypescript({

  webpack(config, options) {
    // Do not run type checking twice:

    // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
    // 
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve('./tsconfig.json')
    }))
    
    return config
  }
})