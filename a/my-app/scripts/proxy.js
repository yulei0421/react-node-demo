const proxyConfig  = {
    "/Insurance": {
        target: `https://ins-base-dev.ichangtou.com`,
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //   "^/http://localhost": "/Insurance/appointEmp/get/qrCode",
        // },
      },
}
module.exports = proxyConfig
// export default proxyConfig