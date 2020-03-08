/**
 * @deprecated 工程基本配置
 * @author wanglingkai @linkyy.git
 * @created 2020-03-08
 * 
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: false,
  // css 相关配置项
  css: {
    sourceMap: false,
    // 开启css分离插件：会采用独立样式文件载入，而不是以style标签吗的方式
    // 但是这个不建议开启，因为在本地开发时会导致修改样式不会热更新，需要刷新页面才生效
    // extract: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // 引入全局的scss样式
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        // 在需要引入样式组件style标签中注释引入
        // 如： /* @import "@/assets/scss/common.scss"; */
        prependData: '@import "@/assets/scss/mixin.scss";'
      }
    }
  },
  
  devServer: {
    open: true, 
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 插件相关配置
  chainWebpack: config => {
    // 设置路径别名
    config.resolve.alias
      .set('@', resolve('src'))

    if (isProd) {
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.optimization.minimize(true)
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  }

}