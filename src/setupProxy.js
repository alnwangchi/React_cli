// 這一支檔案不是給前端運行用的
// 要寫 common JS 不能用 ES6
// 代理配置 解決跨域 請可以配置多個代理以及靈活控制是否走代理，缺點為配置繁瑣

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // 控制多種走代理請求的方式
  app.use(
    proxy('/api1', { // 帶有 /api1 的請求就會處發該代理配置
      target: 'http://localhost:5000', // 轉發對象
      changeOrigin: true, // 控制伺服器收到的 request header 中 Host 字串的值
      pathRewrites: {'^api1': ''} // 重置請求路徑(required)
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrites: {'^api2': ''}
    })
  )
}