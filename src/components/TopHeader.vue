<template>
   <header>
    <div class="menu container">
        <p><b>GitHub</b> <i>Search</i></p>
        <ul>
          <li> <router-link to="/">Início </router-link></li>
          <li><router-link to="/favoritos"> Favoritos</router-link></li>
        </ul>
    </div>  
  </header>
</template>

<script>


export default {
  name: 'topHeader',

}
</script>

<style scoped>
header{
  background: #D9D9D9;
  box-shadow:0px 3px 3px rgb(0 0 0 / 25%);
  margin-bottom: 40px;
}
.menu{
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header p {
  font-family: 'Inter';
  font-size: 32px;
}
ul li a{
  padding-left: 32px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
