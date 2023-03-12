<template>
    <div class="c-users">
     <div v-for="user in users" :key="user.id" class="c-users__user">
         <AppUser 
            :img="user.avatar_url"
            :name="user.login"
            @click="userdetail(user.login)"
         />
     </div>

     <div class="c-users__button">
         <AppShowButton 
            v-if="!showMore"
            name="Ver mais"
            @click="seeMore()"
         />
     </div>
     
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions } from 'vuex'
import AppUser from '../user/AppUser'
import AppShowButton from '../buttons/AppShowButton'
export default {
    name: "AppUsers",

    data(){
        return{
            showMore: false,
            teste:''
        }
    },
    components:{
        AppUser,
        AppShowButton
    },
    methods:{
        ...mapMutations([
            'selecteduser',
            'sendrepositories',
            'setusersitems'
        ]),
        ...mapActions([
            'getUsers',
            'getUser',
            'getUserRepositories'
        ]),

        seeMore(){
            this.setusersitems()
            this.getUsers()
        },

        userdetail(params){
            this.getUser(params)
            this.getUserRepositories(params)
            .then(() =>{
                this.$router.push('/userdetail') 
            })  
        }
    },
    computed:{
        ...mapState([
            'text',
            'users',
            'userspage'
        ]),
    },
   
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-users{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &__user{
            width: 100%;
        }    
        &__button{
            margin-top: 40px;
            margin-bottom: 40px;
        }
       
    }
</style>
