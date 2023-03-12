<template>
    <div class="c-repository">
        <div class="c-repository__title">
            <span>{{ name }}</span>
            <img src="../../assets/stargold.png" alt="star" 
                class="c-repository__title__starbig"
                @click="addrepository()"
                v-if="favoritestar"
            >

            <img src="../../assets/star.png" alt="star" 
                class="c-repository__title__starbig"
                @click="addrepository()"
                v-else
            >
        </div>

        <div class="c-repository__description">
           {{ description }}
        </div>
        
        <div class="c-repository__star">
            <img src="../../assets/star.png" alt="star" class="c-repository__star__starkid">
            {{ stars }}
        </div>
        <hr>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name:'AppRepository',

    props:{
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        stars:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required: true
        }
    },

    methods:{
        ...mapMutations([
            'addfavoriterepoitory'
        ]),
        addrepository(){
            let params = {
                id: this.id,
                name: this.name,
                description: this.description,
                stars: this.stars,
            }
            this.addfavoriterepoitory(params)
        }
    },
    computed:{
        ...mapState([
            'favoriterepositories'
        ]),
        favoritestar(){   
            return this.favoriterepositories.some( repository => repository.id === this.id) 
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-repository{
        font-family: $font-user;
        padding: 30px 50px 30px 50px;
     

        &__title{
            font-size: 36px;
            font-weight: 400;
            @extend .display-flex;
            @extend .justify-content-space-between;

            &__starbig:hover{
                cursor: pointer;
            }
        }
        &__description{
            font-size: 24px;
            margin-top: 10px;
        }
        &__star{
            margin-top: 10px;
            margin-bottom: 10px;

            &__starkid{
                width: 24px;
                height: 22px;
            }
            
        }
    }
</style>
