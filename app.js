const Koa = require('koa');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyparser());

router
  .get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>';
  })
  .get('/home', async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = '<h1>home page</h1>';
  })
  .get('/home/:id/:name', async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = '<h1>home page</h1>';
  })
  .get('/404', async (ctx) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
  })
  .get('/user', async (ctx, next) => {
    ctx.response.body = `<form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：koa"/> 
      <br/>
      <input name="password" type="password" placeholder="请输入密码：123456"/>
      <br/> 
      <button>提交</button>
    </form>`
  })
  .post('/user/register', async (ctx, next) => {
    let { name, password } = ctx.request.body;
    if (name === 'koa' && password === '123456') {
      ctx.response.body = `hello ${name}!`;
    } else {
      ctx.response.body = '账号信息错误';
    }
  })

app.use(router.routes());

app.listen(3000, () => {
  console.log('server is runing at http://localhost:3000');
})
