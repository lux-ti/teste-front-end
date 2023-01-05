<template>

    <div class="main-container-repo">
        <div class="container-repo-info">
            <h2>{{ titulo }}</h2>
            <p>{{ descricao }}</p>

            <div class="container-repo-star">
                <img src="/img/star.png" alt="Logo GitHub" class="star">
                <p>{{ stars }}</p>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'RepCard',
    props:{
        titulo: String,
        descricao: String,
        stars: Number
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.main-container-repo {
    margin: 50px;
    font-family: 'Rubik';
}

.container-repo-info {
    text-align: start;
}

.container-repo-info h2 {
    font-size: 36px;
}


.container-repo-info p {
    font-size: 24px;
    color: #757575;
}

.container-repo-star {
    padding-top: 0.5rem;
    font-size: 2px;
    display: flex;
    align-items: center;
}

.star {
    padding-right: 1rem;
}
</style>

