<template>
    <div class="c-input">
        <input type="text" 
            placeholder="Buscar..." 
            class="c-input__search" 
            v-model="localtext"
            @keypress.enter="submite()"
        >

        <span class="material-symbols-outlined"
             @click="submite()"
        >
            search
        </span>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name:'AppInput',

    methods:{
        ...mapActions([
            'getUsers',
            'getRepositories'
        ]),
        ...mapMutations([
            'set_text',
            'changeAlert',
            'sendingUsers',
            'sendingRepositories',
            'set_text'
        ]),
        submite(){
            if(this.text === ''){
                this.changeAlert()
                return
            }
            
            if(this.userSearch){
                this.getUsers()
                .then((data) => {
                    if(!data.items.length){
                        this.changeAlert()
                        return
                    }
                    this.$router.push({ name: 'users' })
                })                
            }else{
                this.getRepositories({
                    q: this.text
                })
                .then(data => { 
                    if(!data.items.length){
                        this.changeAlert()
                        return;
                    }
                    this.$router.push({ name: 'repositories' })
                })     
            }
        }
    },

    mounted() {
        this.set_text('')
    },

    computed:{
        ...mapState([
            'repositorySearch',
            'userSearch',
            'text'
        ]),
        localtext:{
            get(){
                return this.text
            },
            set (q) {
                this.set_text(q)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-input{
        &__search{
            width: 780px;
            height: 71px;
            border-radius: 10px;
            font-family: $font-principal;
            font-size: 24px;
            font-weight: 400;
            padding-left: 20px;
            color: #000000;
        }
    }
    .material-symbols-outlined {
         font-size: 50px;
         position: absolute;
         margin-left: -65px;
         margin-top: 10px;
    }
    .material-symbols-outlined:hover{
        cursor: pointer;
    }
</style>
