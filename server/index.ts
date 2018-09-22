// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

// next(opts: object)
// Supported options:
// dev (bool) whether to launch Next.js in dev mode - default false
// dir (string) where the Next project is located - default '.'
// quiet (bool) Hide error messages containing server information - default false
// conf (object) the same object you would use in next.config.js - default {}

const app = next({ dir: './src', 



dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    // const { pathname, query } = parsedUrl
    // if (pathname === '/a') {
    //   app.render(req, res, '/b', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/a', query)
    // } else {
    // }
    handle(req, res, parsedUrl)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})