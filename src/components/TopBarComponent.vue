<template>
  <div class="nav-bar">
    <div class="nav-bar-content">
    <RouterLink to="/" class="routerlink"><span><strong>GitHub</strong><em> Search</em></span></RouterLink>
    <div class="nav-bar-right">
      <RouterLink class="routerlink" to="/"><span
          :class="{ 'active': $route.name === 'home', 'inactive': $route.name !== 'home' }">Início</span></RouterLink>
      <RouterLink class="routerlink" to="/favourites"><span
          :class="{ 'active': $route.name === 'favourites', 'inactive': $route.name !== 'favourites' }">Favoritos</span>
      </RouterLink>
    </div></div>
  </div>
</template>

<style scoped>

*, body {
  margin-top: 0 !important;
}
.nav-bar {
  width: 100%;
  height: 86px;

}
.nav-bar-content {
  height: 86px;
  font-size: 32px;
  font-weight: 500;
  padding-left: 30px;
  background: #D9D9D9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar-right {
  width: 281px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  padding-right: 90px;
  display: flex;
  justify-content: space-between;
}

.routerlink {
  text-decoration: none;
  color: #000;
}

span {
  cursor: pointer;
}

.routerlink {
  color: ¨#000;
}

.active {
  color: red;
}

.inactive {
  color: #000;
}</style>