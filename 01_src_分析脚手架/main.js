// 整个项目的入口文件

// 引入Vue
// import Vue from 'vue'
import Vue from 'vue'
// 引入App组件，所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象 --vm
new Vue({
  el:'#app',
  render: h => h(App),
  // 普通函数版
  // render(createElement){
  //   return createElement('h1', '你好啊')
  // }
  // 箭头函数版
  // render:createElement => createElement('h1', '你好啊')
  // template:`<App></App>`,
  // components:{App}
})