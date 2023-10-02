export default {
    install(Vue, x, y) {
        console.log(x, y)
        // 1.全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 2.添加全局指令
        // fbind和bind功能相似，只是会自动获取焦点
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                // 这里的this指向window对象
                // console.log(this)
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            },
        })

        // 3.配置全局mixin，vm和所有的vc上都有
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 4.添加实例方法
        Vue.prototype.myMethod = () => alert('hello')

    }
}