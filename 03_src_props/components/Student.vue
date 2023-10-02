<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生性别：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ age+10 }}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                msg:'我是尚硅谷的学生',
                // 变相修改props里的值
                myAge: this.age + 10
            }
        },
        // props的优先级更高，且优先接收。先准备好props，然后配置data
        //简单声明接收
        // props:['name', 'sex', 'age'] 
        
        // 接受的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     sex: String,
        //     age:Number
        // }

        //接受的同时对数据进行：类型限制+默认值指定+必要性限制
        props:{
            name:{
                type:String,
                required: true
            },
            age:{
                type:Number,
                default:22
            },
            sex:{
                type:String,
                default:'女'
            }
        }


    }
</script>
