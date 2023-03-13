<template>
    <div class="mask">
        <div class="wrapper">
            <div class="container">
                <div class="container-header"><img src="./icons/atent.svg" /></div>
                <div class="container-content">
                    <h1>Desulpe!</h1>
                    <p>{{ message }}</p>
                </div>
                <div class="container-actions">
                    <button @click="close">certo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            required: false,
            type: String,
            default: ''
        },
    },
    data() {
        return {
            visible: true,
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    }
}
</script>

<style scoped>

* {
    font-family: 'Inter', sans-serif;
}
.mask {

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 500px;
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
}

.container-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.container-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.container-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

button {
    color: #fff;
    background: #FF0000;
    font-size: 40px;
    text-transform: uppercase;
    width: 194px;
    height: 72px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 15px;
}
</style>


