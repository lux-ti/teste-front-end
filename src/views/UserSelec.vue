<template>
    <div class="main-container-userselec">
        <div class="perfil-user">
            <img src="/img/perfil2.png" alt="Logo GitHub">
            <h2>Lindemberg</h2>
            <p>lindemberg</p>
            <div class="perfil-user-details">
                <div class="perfil-user-detail">
                    <img src="/img/icon.png" alt="Logo GitHub">
                    <p>Lux One</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/location.png" alt="Logo GitHub">
                    <p>Fortaleza, CE</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/icon(1).png" alt="Logo GitHub">
                    <p>4</p>
                </div>
                <div class="perfil-user-detail">
                    <img src="/img/followers.png" alt="Logo GitHub">
                    <p>1</p>
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