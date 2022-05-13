<template>
    <div class="painel">
        <header>
            <section id="h-left">kd?</section>
            <section id="h-center">kd?</section>
            <section id="h-right">kd?</section>
        </header>
        <main>
            <section>kd?</section>
            <section>kd?</section>
            <section>kd?</section>
        </main>
        <footer>
        </footer>
    </div>
</template>
<style scoped>
.painel{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
            "head head head",
            "main main main",
            "footer footer footer";
    grid-template-rows: 50px 1fr 30px;
}
header{
    grid-area: 'head';
    display: grid;
    grid-template-columns: .5fr 1fr .2fr;
}
main{
    grid-area: 'main';
    display: grid;
    grid-template-columns: .5fr 1fr .2fr;
}
footer{
    grid-area: 'footer';
}
</style>
<script>
export default {
    name:'painel',
    data(){
        return {
            nome:null,
            data:null
        }
    },
    methods:{
        initial(){
            return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):this.back()
        },
        back(){
            location.href = '/'
            return false
        }
    },
    mounted(){
        this.data = this.initial();
    }
}
</script>
