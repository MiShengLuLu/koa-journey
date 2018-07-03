module.exports = {
  register: async (name, password) => {
    if (name === 'koa' && password === '123456') {
      return `hello ${name}!`;
    } else {
      return '账号信息错误';
    }
  }
}