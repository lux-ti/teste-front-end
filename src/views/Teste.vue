<template>
    <div>
        <HelloWorld />
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
    name:'teste',
    data(){
        return {
            nome:null
        }
    },
    components:{
        HelloWorld
    }
}
</script>
