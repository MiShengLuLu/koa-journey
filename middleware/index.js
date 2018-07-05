const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const staticFiles = require('koa-static');

const miSend = require('./mi-send');

module.exports = (app) => {
  app
    .use(staticFiles(path.join(__dirname, '../public'))) // 指定public目录为静态资源目录，用于存放 html css images js等
    .use(nunjucks({
      ext: 'html',
      path: path.join(__dirname, '../views'),
      nunjucksConfig: {
        trimBlocks: true
      }
    }))
    .use(bodyparser())
    .use(miSend());
}