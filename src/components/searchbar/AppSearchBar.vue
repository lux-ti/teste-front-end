<template>
    <div class="c-searchbar">
        <img src="../../assets/github.png" alt="github" class="c-searchbar__imagem">

        <div class="c-searchbar__buttons">
            <AppHomeButton 
                text="Repositório"
                @click="changeSearch('Repositório')"
            />
    
            <AppHomeButton 
                text="Usuário"
                @click="changeSearch('Usuário')"
            />
        </div>

        <AppInput />  
        
    </div>
</template>

<script>
import AppHomeButton from '../buttons/AppHomeButton'
import AppInput from '../input/AppInput'
import { mapMutations } from 'vuex'
export default {
    name:'AppSearchBar',
    
    components:{
        AppHomeButton,
        AppInput
    },
    methods:{
        ...mapMutations([
            'changeSearch'
        ]),
    },
   
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-searchbar{
    @extend .display-flex;
    flex-direction: column;
    @extend .justify-content-center;
    @extend .align-items-center;

    &__imagem{
        height: 169px;
        width: 196px;
        margin-top:54px;
    }
    &__buttons{
        @extend .display-flex;
        margin-top: 72px;
        margin-bottom: 97px;
    }
}

</style>
