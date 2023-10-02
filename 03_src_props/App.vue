<template>
    <div>
        <!-- 传的属性不能用key,ref这种标识符 -->
        <Student name="李四" sex="男" v-bind:age="18"/>
    </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        Student
    },
}
</script>