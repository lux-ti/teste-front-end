<template>
    <div class="c-alert">
        <img src="../../assets/alert.png" alt="alert" class="c-alert__imagem">

        <span class="c-alert__title">Desculpe!</span>

        <span class="c-alert__subtitle">Não foi possível encontrar o Repositório ou usuário desejado!</span>

        <AppAlertButton 
            @click="close"
        />
    </div>
</template>

<script>
import AppAlertButton from '../buttons/AppAlertButton'
import { mapMutations } from 'vuex';
export default {
    name:'AppAlert',
    
    components:{
        AppAlertButton
    },
    methods:{
        ...mapMutations([
            'changeAlert'
        ]),
        close(){
            this.changeAlert()
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-alert{
    font-family: $font-principal;
    font-size: 24px;
    font-weight: 400;
    width: 444px;
    height: 547px;
    background-color: white;
    border-radius: 15px;
    @extend .display-flex;
    flex-direction: column;
    @extend .align-items-center;

    &__imagem{
        height: 100px;
        width: 100px;
        margin-top: 72px;
    }
    &__title{
        font-size: 48px;
        font-weight: 500;
        margin-top: 25px;
    }
    &__subtitle{
        text-align: center;
        margin-top: 25px;
        margin-bottom: 70px;
    }

}
</style>
