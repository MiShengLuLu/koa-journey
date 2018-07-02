const Koa = require('koa');
const router = require('./router');
const bodyparser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyparser());

router(app);

app.listen(3000, () => {
  console.log('server is runing at http://localhost:3000');
})
