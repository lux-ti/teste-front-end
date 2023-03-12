<template>
    <div class="c-homebutton" :class="active">
        {{ text }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'AppHomeButton',
    
    props:{
        text:{
            type: String,
            required: true
        }
    },
    computed:{
        ...mapState([
            'repositorySearch',
            'userSearch'
        ]),
        active(){
            let result
            if(this.text === 'Repositório' && this.repositorySearch === true){
                result = 'active'
            } 
            if(this.text === 'Usuário' && this.userSearch === true){
                result = 'active'
            }
            return result    
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

.c-homebutton{
    border: 2px solid #000000;
    border-radius: 5px;
    width: 186px;
    height: 51px;
    font-size: 20px;
    font-weight: 700;
    @extend .display-flex;
    justify-content: center;
    @extend .align-items-center;
    font-family: $font-principal;
    margin: 0px 15px 0px 15px;
}
.c-homebutton:hover{
    cursor: pointer;
}
.active{
    background-color: #000000;
    color: white;
}
</style>
