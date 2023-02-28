<script>
export default {
    name: "header",
};
</script>

<template>
    <header class="header">
        <div class="container">
            <router-link to="/" class="title">
                <span class="github">GitHub</span>
                <span class="search">Search</span>
            </router-link>
            <nav class="menu">
                <router-link to="/">Inicío</router-link>
                <router-link to="/favoritos">Favoritos</router-link>
            </nav>
        </div>
    </header>
</template>
  
<style scoped>
* {
    color: #000;
}

.header {
    padding-left: 20px;
    padding-right: 20px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.title {
    font-weight: 400;
    font-size: 2rem;
}

.github {
    font-weight: bold;
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

.menu a{
    margin-left: 2rem;
    font-weight: bold;
}

.menu .router-link-active {
    color: #ff0000;
}

@media (max-width: 500px) {
    .title {
        font-size: 1.3rem;
    }

    .search {
        margin-left: 0.2rem;
    }

    .menu a {
        margin-left: 0.5rem;
    }
}
</style>