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
    ctx.response.body = `<form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：koa"/> 
      <br/>
      <input name="password" type="password" placeholder="请输入密码：123456"/>
      <br/> 
      <button>提交</button>
    </form>`
  },
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    if (name === 'koa' && password === '123456') {
      ctx.response.body = `hello ${name}!`;
    } else {
      ctx.response.body = '账号信息错误';
    }
  }
}