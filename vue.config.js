
// 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost', // 本地地址
    port: 8080, // 端口号  vue端口号  可改
    open: true, // 配置项目在启动时自动在浏览器打开  可改
    //跨域配置
    proxy: {
        '/api' : { // '/api'是代理标识，一般是每个接口前的相同部分
            target: "http://localhost:8086", // 请求地址，一般是服务器地址 项目端口号（idea 后端） 8086可改
            changeOrigin: true, // 是否进行跨域
            pathRewrite: { // pathRewrite的作用是把请求接口中的 '/api'替换掉，一般是替换为空""
                '^/api':""
            }
        }
    }
  }
})
