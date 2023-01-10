<template>
    <nav>
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>

        <router-link to="/">INÍCIO</router-link>
        <router-link to="/favoritos">FAVORITOS</router-link>
    </nav>
</template>
  
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>
  
<style scoped>
nav {
    font-family: 'Inter';
    font-weight: 700;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#logo-url {
    margin: auto;
    margin-left: 0;
}

nav a {
    color: #000000;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

nav a:hover {
    color: red;
}

@media (max-width: 768px) {

    img {
        display: none;
    }

    nav {
        text-align: center;
        display: block;
    }

}
</style>
  
  
  
  
