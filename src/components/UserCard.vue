<template>
    <div class="main-container-user">
        <button class="user-card" @click="userpage()">
            <div class="container-user">
                <div class="container-user-img">
                    <img :src=imgUrl alt="Logo GitHub">
                </div>
                <div class="container-user-info">
                    <h2>{{ name }}</h2>
                </div>
            </div>
        </button>
    </div>
</template>

<script>

export default {
    name: 'UserCard',
    props: {
        name: String,
        bio: String,
        imgUrl: String,
        stars: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {

        }
    },
    methods: {
        userpage() {
            const userSelec = this.name
            console.log("Usuário selecionado: " + userSelec)
            this.$router.push({ path: '/usuarioselecionado', query: { q: `${userSelec}` } })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.container-user img {
    width: 144px;
    height: 144px;
    border-radius: 5px;
}

.container-user {
    display: flex;
    padding: 13px;
}

.user-card {
    font-family: 'Rubik';
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 5px;
    margin-top: 34px;
    border: none;
    width: 100%;
}

.container-user-info {
    padding-left: 1rem;
}

.container-user-info h2 {
    font-size: 36px;
}

@media (max-width: 768px) {
    .container-user img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
    }

    .container-user-info h2 {
        font-size: 20px;
    }
}
</style>


