<template>
  <header class="header">
    <div class="container">
      <h1>
        <router-link to="/" class="logo">
          <span class="github">GitHub</span>
          <span class="search">Search</span>
        </router-link>
      </h1>
      <nav class="menu">
        <router-link to="/">Inicío</router-link>
        <router-link to="/favoritos">Favoritos</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background: var(--gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
}

h1 {
  font-weight: 400;
}

.logo {
  font-size: 2rem;
}

.github {
  font-weight: 600;
}

.search {
  font-style: italic;
  margin-left: 0.5rem;
}

.menu {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
}

.menu a + a {
  margin-left: 2rem;
}

.menu .router-link-active {
  color: var(--red);
}

@media screen and (max-width: 500px) {
  .logo {
    font-size: 1.3rem;
  }
  .search {
    margin-left: 0.2rem;
  }
  .menu a + a {
    margin-left: 0.5rem;
  }
}
</style>
