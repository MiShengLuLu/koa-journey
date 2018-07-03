const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

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
