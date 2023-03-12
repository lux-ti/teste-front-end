<template>
    <div class="c-repositories">
        <div v-for="repository in repositories" :key="repository.id" class="c-repositories__repository">
            <AppRepository 
                :name="repository.name"
                :description="repository.description"
                :stars="repository.stargazers_count"
                :id="repository.id"
            />
        </div>
        <AppShowButton 
            name="Ver mais"
            @click="seeMore"
        />
    </div>
</template>

<script>
import AppRepository from '../repository/AppRepository'
import { mapState, mapMutations, mapActions } from 'vuex';
import AppShowButton from '../buttons/AppShowButton';


export default {    
    name:'AppRepositorie',

    components:{
        AppRepository,
        AppShowButton
    },
    methods:{
        ...mapMutations([
            'setrepositoriesitems'
        ]),
        ...mapActions([
            'getRepositories'
        ]),
        seeMore(){
            this.setrepositoriesitems()
            this.getRepositories()
        }
    },
    computed:{
        ...mapState([
            'repositories'
        ]),
    }
}
</script>


<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-repositories{
    @extend .display-flex;
    flex-direction: column;
    @extend .align-items-center;

    &__repository{
        width: 100%;
    }
}


</style>
