const router = require('koa-router')();
const homeController = require('./controller/home');

module.exports = (app) => {
  router
    .get('/', homeController.index)
    .get('/home', homeController.home)
    .get('/home/:id/:name', homeController.homeParams)
    .get('/user', homeController.login)
    .post('/user/register', homeController.register)

  app
    .use(router.routes())
    .use(router.allowedMethods());
}