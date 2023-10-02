<template>
    <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click='showName'>点我提示学校名</button>
    </div>
</template>

<!-- 脚本 -->
<script>
    //默认暴露，还有分别暴露，统一暴露
    export default {
        // name:'School',

        data() {
            return {
                schoolName: '尚硅谷',
                address: '北京昌平',
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        },
    }
</script>

<style>
.demo{
    background-color:orange;
}
</style>

