const { defineConfig } = require('@vue/cli-service')
// common JS 形式的暴露
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false         //关闭语法检查
})
