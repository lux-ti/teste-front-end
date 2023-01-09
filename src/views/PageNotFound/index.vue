<template>
  <div class="page-not-found">
    <img src="@/assets/img/LogoGithub.png" alt="Logo Github" />
    <div class="page-not-found-content">
      <h1>Desculpe !</h1>
      <h2>404</h2>
      <h1>Página não encontrada</h1>
    </div>
  </div>
</template>

<style scoped>

.page-not-found {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-not-found-content{
  font-family: sans-serif;
  margin-top: 4rem;
  text-align: center;
}
.page-not-found-content h2{
  margin-bottom: 4rem;
  font-size: 4rem;
}
.page-not-found-content h1{
  font-size: 3rem;
  margin-bottom: 4rem;
}

</style>