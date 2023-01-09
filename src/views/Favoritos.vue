<template>
  <div class="container_inicial">
    <img class="image_github" src="../assets/image/Vector.png" alt="" />
    <h1 class="title">Repositórios Favoritos</h1>
  </div>
  
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono";
}

.title {
  font-size: 45px;
  margin: 20px 0 42px 18px;
  font-weight: 400;
}

.container_inicial {
  display: flex;
}

img {
  max-width: 100%;
}
.image_github {
  padding: 25px 18px 47px 44px;
  object-fit: contain;
}
h2 {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 36px;
}

h3 {
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #757575;
}
</style>