// 调试生产包

const express = require('express')
const proxyMiddleware = require('http-proxy-middleware')
// const proxyTable = require('./build/proxyTable')

const app = express()

const hostname = 'localhost'
const port = 3333
// const ENV_TST = 'https://hq-app-test.zhongan.io'
const ENV_LOCAL = `http://${hostname}:${port}`

app.use(express.static('./dist'))

// Object.keys(proxyTable).forEach(function (path) {
//   const options = proxyTable[path]
//   app.use(proxyMiddleware(path, options))
// })

// // 请求api转发给后端服务器
// app.use(proxyMiddleware('/api/**', {
//   target: ENV_TST,
//   changeOrigin: true,
//   secure: false
// }))

// 请求 /web/**的路径但并不包含请求 /web/*.html 这样的路径时，请求 /index.html
app.use(proxyMiddleware('/demo/**', {
  target: ENV_LOCAL,
  pathRewrite: {
    '^/demo/.*': '/index.html'
  }
}))

// 以/share开头，请求 /share.html
// app.use(proxyMiddleware('/share/**', {
//   target: ENV_LOCAL,
//   pathRewrite: {
//     '^/share/.*': '/share.html'
//   }
// }))

const server = app.listen(3333, 'localhost', function () {
  const host = server.address().address
  const port = server.address().port
  console.log('app listening at http://%s:%s', host, port)
})
