<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    import {mixin, hunhe} from '../mixin'
    export default {
        name:'School',
        // 若data中的数据与mixin发生冲突，保留data的设置
        data(){
            return {
                name:'尚硅谷',
                address:'北京',
                x:99
            }
        },
        beforeMount(){
            console.log('beforeMount, origin')
        },
        // // mouted与mixin发生冲突，互不影响，但mixin中的动作先发生
        mounted(){
            console.log('mounted, origin')
        },

        mixins:[mixin, hunhe]



    }
</script>
