<script>
import Navig from "./components/Navbar.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default {
    components: { Navig },
};
</script>

<template>
    <Navig/>
    <router-view/>
</template>

<style></style>