<template>
    <div class="show-notice">
        <dialog class="dialog" @open="showNotice">

            <img class="exclamacao" src="/img/aviso.png" alt="Aviso">
            <p class="desculpe">Desculpe!</p>
            <p class="aviso">Não foi possível encontrar o repositório ou usuário desejado!</p>
            <button class="botao-fechar" @click="closeNotice">Certo</button>

        </dialog>
    </div>
</template>

<script>
export default {
    name: 'Notice',
    props: { showNotice: Boolean },
    emits: ['aoFecharAviso'],
    methods: {
        closeNotice() {
            this.$emit('aoFecharAviso')
        }
    },
};
</script>


<style scoped>
.show-notice {
    background-color: rgba(0, 0, 0, 0.59);
    line-height: 26px;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    border: none;
}

.dialog {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    border: none;
    border-radius: 15px;
    width: 444px;
    height: 500px;
    padding: 40px;
    margin: auto;
    margin-top: 180px;
}

.exclamacao {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.botao-fechar {
    background-color: #FF0000;
    color: white;
    border: none;
    width: 194px;
    height: 72px;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
    border: none;
}

.botao-fechar:hover {
    opacity: 0.8;
}

.desculpe {
    font-size: 48px;
}

.aviso {
    font-size: 24px;
}

@media (max-width: 768px) {

    .dialog {
        width: 200px;
        height: 280px;
    }

    .exclamacao {
        margin-top: 0px;
        width: 40px;
        height: 40px;

    }

    .desculpe {
        font-size: 32px;
    }

    .aviso {
        font-size: 12px;
    }

    .botao-fechar {
        width: 70px;
        height: 40px;
        font-size: 20px;
    }


}
</style>