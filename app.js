// console.log('hello world');
const Koa = require('koa');
const app = new Koa();

// 每收到一个http请求，koa会通过app.use()注册的async函数
// 同时为该函数传入ctx和next函数
// async是中间件
app.use(async (ctx, next) => {
  let startTime = new Date().getTime();
  await next();
  let endTime = new Date().getTime();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>hello world</h1>';
  console.log(`请求地址：${ctx.url}，响应时间：${endTime - startTime}ms`);
})
  .use(async (ctx, next) => {
    console.log(ctx);
    console.log(ctx.url);
    console.log('中间件1 doSomething');
    await next();
    console.log('中间件1 end');
  })
  .use(async (ctx, next) => {
    console.log('中间件2 doSomething');
    // await next();
    console.log('中间件2 end');
  })
  .use(async (ctx, next) => {
    console.log('中间件3 doSomething');
    await next();
    console.log('中间件3 end');
  })

app.listen(3000, () => {
  console.log('server is runing at http://localhost:3000');
})
