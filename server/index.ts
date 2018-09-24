// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
import * as next from "next";
import * as Koa from "koa";
import * as Router from "koa-router";

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000;

// next(opts: object)
// Supported options:
// dev (bool) whether to launch Next.js in dev mode - default false
// dir (string) where the Next project is located - default '.'
// quiet (bool) Hide error messages containing server information - default false
// conf (object) the same object you would use in next.config.js - default {}

const app = next({ dir: './src', dev })
const handle = app.getRequestHandler();


app.prepare().then(() => {

  const server = new Koa()
  const router = new Router()

  router.get('/list', async ctx => {
    await app.render(ctx.req, ctx.res, '/index', ctx.query)
    ctx.respond = false
  })

  router.get('/login', async ctx => {
    await app.render(ctx.req, ctx.res, '/login', ctx.query)
    ctx.respond = false
  })

  router.get("/add", async ctx => {
    await app.render(ctx.req, ctx.res, "/add", ctx.query);
    ctx.respond = false;
  });
  router.get("/message", async ctx => {
    await app.render(ctx.req, ctx.res, "/message", ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})