export const mixin = {
    data() {
        return {
            x:100,
            y:200
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    },
    beforeMount(){
        console.log('beforeMount, new')
    },
    mounted(){
        console.log('mounted, new')
    }
}
export const hunhe = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}