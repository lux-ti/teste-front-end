<template>
  <div>
    <div class="title">
      <img src="@/assets/img/github-logo.png" alt="" />
      <h1>Repositórios Favoritos</h1>
    </div>
    <div class="list-repositorie">
      <div class="repositorie">
        <h1>Nome Repositorio</h1>
        <p>Descrição Repositorio</p>
        <div >
          <img src="@/assets/img/star-icon.png" />
          <span> 2 </span>
        </div>
        <hr />
        <img class="fav-icon" src="@/assets/img/star-fav-icon.png"/>
      </div>
      <button class="show-more-button">Ver Mais</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  font-family: sans-serif;
  margin-left: 1rem;
}
img {
  width: 60px;
}
.title {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}
.list-repositorie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.repositorie {
  width: 100%;
  position: relative;
  font-family: sans-serif;
}

.repositorie h1 {
  margin-top: 15px;
  font-size: 36px;
}
.repositorie p {
  margin-top: 1rem;
  color: #757575;
  font-size: 24px;
}
.repositorie div {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.repositorie div span {
  margin-top: 7px;
  margin-left: 10px;
}
.repositorie hr {
  margin-top: 30px;
}

.fav-icon {
  position: absolute;
  right: 0;
  top: 10px;
  width: 31px;
  cursor: pointer;
}
</style>
