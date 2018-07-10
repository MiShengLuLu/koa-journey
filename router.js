const router = require('koa-router')();
const homeController = require('./src/controller/home');

module.exports = (app) => {
  router
    .get('/', homeController.index)
    .get('/user', homeController.login)
    .post('/user/register', homeController.register)

  app
    .use(router.routes())
    .use(router.allowedMethods());
}