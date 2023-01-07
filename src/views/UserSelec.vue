<template>
    <div class="main-container-userselec">
        <div class="perfil-user">
            <img :src=imgUrl alt="Logo GitHub">
            <h2>{{name}}</h2>
            <p>{{bio}}</p>
            <div class="perfil-user-details">
                <div class="perfil-user-detail">
                    <img src="/img/icon.png" alt="Logo GitHub">
                    <p>{{organization}}</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/location.png" alt="Logo GitHub">
                    <p>{{location}}</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/icon(1).png" alt="Logo GitHub">
                    <p>{{repository}}</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/followers.png" alt="Logo GitHub">
                    <p class="seguidor">{{followers}}</p>
                </div>
            </div>
        </div>
        <div>
            <Repos />
        </div>

    </div>
</template>

<script>
import Repos from './Repos.vue'

export default {
    name: 'UserSelec',
    props:{
        name: {
            type: String,
            default: "Sem nome"
        },
        imgUrl: {
            type: String,
            default: "/img/perfil2.png" 
        },
        bio: {
            type: String,
            default: "Sem descrição"},
        organization:{
            type: String,
            default: "Sem informação"
        },
        location:{
            type: String,
            default: "Sem informação"
        },
        repository:{
            type: Number,
            default: 0
        },
        followers:{
            type: Number,
            default: 0
        },        
    },
    components: {
        Repos,
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.main-container-userselec {
    font-family: 'Rubik';
    display: flex;
    text-align: center;
    margin: 50px;
}

.perfil-user {
    margin-top: 48px;
    background-color: #D9D9D9;
    padding: 1rem;
    width: 339px;
    height: 644px;
    border-radius: 5px;
    text-align: start;
}

.perfil-user p {
    color: #757575;
    font-size: 20px;
}

.perfil-user-detail {
    display: flex;
    padding-top: 16px;
}

.perfil-user-detail img {
    padding-right: 12px;
}

.perfil-user-details {
    margin-top: 28px;
    margin-bottom: 56px;
}
</style>