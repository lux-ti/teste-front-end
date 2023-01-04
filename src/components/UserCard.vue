<template>
    <div class="main-container-user">

        <router-link to="/usuarioselecionado">
            <div class="container-user">
                <div class="container-user-img">
                    <img src="/img/perfil.png" alt="Logo GitHub">


                </div>
                <div class="container-user-info">
                    <h2>Lindemberg</h2>
                    <p>Texto teste</p>


                    <div class="container-user-star">
                        <img src="/img/star.png" alt="Logo GitHub" class="star">
                        <p>0</p>
                    </div>
                </div>
            </div>
        </router-link>





    </div>
</template>

<script>

export default {
    name: 'UserCard',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.main-container-user {
    margin: 50px;
}

.container-user {
    font-family: 'Rubik';
    text-align: start;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 5px;
    margin-top: 34px;
}

.container-user-info {
    padding-left: 1rem;
}

.container-user-info h2 {
    font-size: 36px;
    padding-bottom: 0.5rem;
    color: #000000;
}

.container-user-info p {

    font-size: 28px;
    color: #757575;
}

.container-user-star {
    padding-top: 2rem;
    display: flex;
    align-items: center;
}

.star {
    padding-right: 1rem;
}
</style>


