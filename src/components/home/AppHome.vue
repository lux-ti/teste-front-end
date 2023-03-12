<template>
    <div class="c-home">
        <AppNavbar />
        <div v-show="alert" class="c-home__alert">
            <AppAlert />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavbar from '../navbar/AppNavbar'
import AppAlert from '../alert/AppAlert'

export default {
    name:'AppHome',
    
    components:{
        AppNavbar,
        AppAlert  
    },
    computed:{
        ...mapState([
            'alert'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-home{
    
    &__alert{
       height: 100vh;
        position: absolute;
        width: 100%;
        background: rgba(0, 0, 0, 0.59);
        margin-top: -80px;
        @extend .display-flex;
        @extend .justify-content-center;
        padding-top: 300px;  
    }
}
</style>
