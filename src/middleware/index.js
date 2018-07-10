const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const staticFiles = require('koa-static');
const ip = require('ip');

const miSend = require('./mi-send');

// 引入日志中间件
const miLog = require('./mi-log');
// 引入请求错误中间件
const miHttpError = require('./mi-http-error');

module.exports = (app) => {
  app
    .use(miHttpError({// 应用请求错误中间件
      errorPageFolder: path.resolve(__dirname, '../errorPage')
    }))
    .use(miLog({// 注册中间件
      env: app.env,
      projectName: 'koa-journey',
      appLogLevel: 'debug',
      dir: 'logs',
      serverIp: ip.address()
    }))
    .use(staticFiles(path.join(__dirname, '../public'))) // 指定public目录为静态资源目录，用于存放 html css images js等
    .use(nunjucks({
      ext: 'html',
      path: path.join(__dirname, '../views'),
      nunjucksConfig: {
        trimBlocks: true
      }
    }))
    .use(bodyparser())
    .use(miSend())
    .on("error", (err, ctx) => {// 增加错误的监听处理
      if (ctx && !ctx.headerSent && ctx.status < 500) {
        ctx.status = 500
      }
      if (ctx && ctx.log && ctx.log.error) {
        if (!ctx.state.logged) {
          ctx.log.error(err.stack)
        }
      }
    }) 
}