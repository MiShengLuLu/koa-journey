const router = require('koa-router')();
// const homeController = require('./src/controller/home');

module.exports = (app) => {
  router
    .get('/', app.controller.home.index)
    .get('/user', app.controller.home.login)
    .post('/user/register', app.controller.home.register)

  app
    .use(router.routes())
    .use(router.allowedMethods());
}