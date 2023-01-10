<template>
    <div class="main-container">

        <div class="home-botao">
            <button @click="enviarFormulario2($event)" id="pessoa">Repositório</button>
            <button @click="enviarFormulario($event)" id="pessoa">Pessoa</button>
        </div>

        <div>
            <input v-model="entrada" class="home-search" placeholder="Buscar...">
        </div>

        <Notice v-if="showNotice" :showNotice="showNotice" @aoFecharAviso="closeNotice" />


    </div>
</template>

<script>

import Notice from '../components/Notice.vue'
export default {
    name: 'Form',
    components: {
        Notice

    },
    data(props) {

        return {
            entrada: "",
            showNotice: false,
        }
    },
    methods: {
        enviarFormulario(e) { // O 'e' está relacionado ao '$event' do form, e nos permite acessar a função preventDefault
            e.preventDefault(); //Previne que ao submeter o formulário a página seja recarregada

            const entrada = this.entrada;

            if (this.entrada != "") {
                this.$router.push({ path: '/usuarios', query: { q: `${entrada}` } })
            } else {
                this.showNotice = true
            }

        },

        enviarFormulario2(e) {
            e.preventDefault();

            const entrada = this.entrada;
            if (this.entrada != "") {
                this.$router.push({ path: '/repositorios', query: { q: `${entrada}` } })
            } else {
                this.showNotice = true
            }
        },
        closeNotice() {
            this.showNotice = false
        }
    }
}
</script>

<style scoped>
.main-container {
    text-align: center;
}

.home-botao {
    padding-bottom: 46px;
}

.home-search {
    box-sizing: border-box;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1em;
    width: 55%;
}

.home-search::placeholder {
    font-family: 'Inter';
    color: #000000;
    font-weight: 400;
    background: url("/public/img/search.png") no-repeat;
    background-size: contain;
    background-position-x: right;
}

button {
    font-family: 'Inter';
    font-weight: 700;
    size: 20px;
    color: #000000;
    width: 186px;
    height: 51px;
    left: 518px;
    top: 379px;
    background: #FFFFFF;
    border-radius: 5px;
    border-color: #000000;
    margin-inline: 20.5px;
    transition: 0.5s;
    cursor: pointer;
}

button:hover {
    background-color: #000000;
    color: #FFFFFF;
}

@media (max-width: 962px) {
    .home-search {
        width: 100%;
    }

    button {
        margin-top: 12px;
    }
}
</style>