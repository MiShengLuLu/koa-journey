const Koa = require('koa');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const staticFiles = require('koa-static');

const app = new Koa();
const router = require('./router');

app
  .use(staticFiles(path.join(__dirname, './public'))) // 指定public目录为静态资源目录，用于存放 html css images js等
  .use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }))
  .use(bodyparser());

router(app);

app.listen('3000', () => {
  console.log('server is running at http://loccalhost:3000');
})
