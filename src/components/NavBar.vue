<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'homePage' }">INÍCIO</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'my_favorites' }">FAVORITOS</router-link>
      </li>
    </ul>
    <span><strong>Github</strong> Search</span>
  </nav>
</template>

<script>
  
</script>

<style>
  nav {
    background-color: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px 80px 15px 30px;
  }

  nav span {
    width: 298px;
    height: 84px;
    font-family: 'Inter';
    font-size: 32px;
    color: #000000;
  }

  nav ul {
    float: right;
  }

  nav ul li {
    display: inline-flex;
    padding-left: 20px;
  }

</style>
