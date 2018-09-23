require('dotenv').config()
const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
// const withPx2Rem = require('./tools/with-px2rem/index.js');
const NODE_ENV = process.env.NODE_ENV
module.exports = withCSS(
  withSass(withTypescript({
    webpack(config, options) {
      config.plugins = config.plugins || []
      // Do not run type checking twice:

      // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
      // 
      if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve('./tsconfig.json')
      }))

      config.resolve = config.resolve || {}

      config.resolve.alias['assets'] = path.resolve('./src/assets')
      config.resolve.alias['components'] = path.resolve('./src/components')
      config.resolve.alias['ui'] = path.resolve('./src/ui/index')
      config.resolve.alias['hoc'] = path.resolve('./src/hoc')
      config.resolve.alias['utils'] = path.resolve('./src/utils')
      config.resolve.alias['libs'] = path.resolve('./src/libs')
      config.resolve.alias['interfaces'] = path.resolve('./src/interfaces')
      config.resolve.alias['actions'] = path.resolve('./src/actions')

      // config env variable
      // examle <div>{ process.env.TEST }</div>
      config.plugins = [
        ...config.plugins,
        // Read the .env file
        new Dotenv({
          path: NODE_ENV ? path.join(__dirname, `.env.${NODE_ENV}`) : path.join(__dirname, `.env`),
          systemvars: true
        })
      ]


      // config.module.rules.push({
      //   test: /\.(gif|jpg|png|svg)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       context: '',
      //       emitFile: true,
      //       name: '[path][name].[hash].[ext]'
      //     }
      //   }]
      // })

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: '../images/',
          outputPath: 'static/images/',
          name: '[name].[hash].[ext]'
        }
      })

      // config.module.rules.push({
      //   test: /\.css$/,
      //   loader: 'px2rem-loader',
      //   options: {
      //     remUni: 75,
      //     remPrecision: 8
      //   }
      // })

      return config
    }
  })))