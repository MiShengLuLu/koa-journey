module.exports = {
  register: async (name, password) => {
    if (name === 'koa' && password === '123456') {
      return {
        status: 0,
        data: {
          title: '个人中心',
          content: '欢迎进入个人中心'
        }
      }
    } else {
      return {
        status: -1,
        data: {
          title: '登录失败',
          content: '请输入正确的账号信息'
        }
      }
    }
  }
}