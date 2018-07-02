const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

// app
//   .use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//       ctx.response.body = '<h1>index page</h1>';
//     } else {
//       await next();
//     }
//   })
//   .use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//       ctx.response.body = '<h1>home page</h1>';
//     } else {
//       await next();
//     }
//   })
//   .use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//       ctx.response.body = '<h1>404 not found</h1>';
//     } else {
//       await next();
//     }
//   })

// 添加路由
router
  .get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>';
  })
  .get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>home page</h1>';
  })
  .get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 not Found</h1>';
  })

// 调用路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})