const homeService = require('../service/home');

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>';
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = '<h1>home page</h1>';
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = '<h1>home page</h1>';
  },
  login: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: '提交'
    })
  },
  register: async (ctx, next) => {
    const { name, password } = ctx.request.body;
    const data = await homeService.register(name, password);
    ctx.response.body = data;
  }
}