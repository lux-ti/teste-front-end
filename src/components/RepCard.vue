<template>
    <div class="main-container-repo">
        <div class="container-repo-info">
            <div class="titulo-star">
                <h2>{{ titulo }}</h2>
                <button @click="manipularFavorito()">
                    <img :src="isFavorito ? '/img/yellowstar.png' : '/img/blackstar.png'" alt="Logo GitHub" class="star">
                </button>
            </div>
            <p>{{ descricao }}</p>

            <div class="container-repo-star">
                <img src="/img/star.png" alt="Logo GitHub" class="star">
                <p>{{ stars }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useFavoritosStore } from '@/store'

export default {
    name: 'RepCard',
    props: {
        titulo: String,
        descricao: String,
        stars: Number,
        id: Number
    },
    data() {
        return {
            isFavorito: false
        }
    },
    methods: {
        manipularFavorito() {
            const repo = {
                titulo: this.titulo,
                descricao: this.descricao,
                stars: this.stars,
                id: this.id
            }
            this.favoritar(repo)
            this.isFavorito = !this.isFavorito
        }
    },
    setup() {
        const favoritos = useFavoritosStore()
        return {
            favoritar: favoritos.favoritar,
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.titulo-star {
    display: flex;
    justify-content: space-between;
}

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

button {
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;
}


@media (max-width: 768px) {
    .container-repo-info p {
        font-size: 12px;
        color: #757575;
    }

    .container-repo-info h2 {
        font-size: 20px;
    }

    .black-star {
        width: 45px;
        height: 45px;
    }

    .main-container-repo {
        width: 100%;
        padding: 0px;
        margin: 0px;
    }


}
</style>