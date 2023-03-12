<template>
    <div class="c-notfound">
        <img src="../../assets/github.png" alt="github" class="c-notfound__image">
        <div  class="c-notfound__text">
            <span>Desculpe!</span>
        </div>
        <div  class="c-notfound__text">
            <span>404</span>
        </div>
        <div  class="c-notfound__text">
            <span>Página não encontrada</span>
        </div>
    </div>
</template>

<script>

export default {
    name:'AppNotFound',

}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-notfound{
    font-family: $font-principal;
    font-weight: 700;
    font-size: 48px;
    @extend .display-flex;
    @extend .align-items-center;
    flex-direction: column;

    &__image{
        width: 169px;
        height: 169px;
        margin-top: 40px;
        margin-bottom: 80px;
    }
    &__text{
        margin-top: 30px;
    }
}

</style>
