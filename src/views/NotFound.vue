<script>
export default {
    name: "NotFound",
};
</script>

<template>
    <main>
        <div class="container">
            <i class="fa-brands fa-github"></i>
            <h2>Desculpe!</h2>
            <span class="erro">404</span>
            <p>Página não encontrada</p>
        </div>
    </main>
</template>
  
<style scoped>
.fa-github {
    font-size: 8rem;
    padding-top: 2rem;
}

.container {
    text-align: center;
    font-weight: 600;
    font-size: 48px;
}

.container h2 {
    font-size: inherit;
    margin-top: 3rem;
}

.erro {
    margin: 3rem 0;
    display: block;
}
</style>
  