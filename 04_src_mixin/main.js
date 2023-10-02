import Vue from 'vue'
import App from './App.vue'
// import { mixin, hunhe } from './mixin'

Vue.config.productionTip = false
// // 全局混入
// Vue.mixin(mixin)
// Vue.mixin(hunhe)

new Vue({
    el:'#app',
    render: h => h(App)
})