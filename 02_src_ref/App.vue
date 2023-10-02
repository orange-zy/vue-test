<template>
    <div>
        <!-- HTML标签和组件标签 -->
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">点我输出上方DOM</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School.vue';
export default {
  components: { School },
    name:'App',
    comments:{
        School
    },
    data(){
        return {
            msg:'国庆快乐'
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs.title)   //真实DOM元素
            console.log(this.$refs.sch)     //组件实例对象
        }
    }
}
</script>

<style>

</style>