const Koa = require('koa');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const router = require('./router');

app
  .use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'view'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }))
  .use(bodyparser());

router(app);

app.listen('3000', () => {
  console.log('server is running at http://loccalhost:3000');
})
