<template>
    <div class="demo">
        <h2>学生名称：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    //默认暴露，还有分别暴露，统一暴露
    export default {
        // name:'School',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        }    }
</script>

<style>
.demo{
    background-color: orange;
}
</style>

