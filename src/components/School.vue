<template>
    <div class="school">
        <!-- 管道符 | , 过滤器 -->
        <h2>学校名称：{{ name | mySlice}}</h2>
        <h2>地址：{{ address }}</h2>
        <!-- <button @click="hello">click me to test method</button> -->
        <button @click="this.myMethod">click me to test method</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'尚硅谷sssssss',
                address:'北京昌平'
            }
        },
        methods:{
            hello(){
                // 顺着vc出发，找到hello
                this.myMethod()
            }
        }
    }
</script>

<style>
    .school {
        background-color: gray;
    }
</style>