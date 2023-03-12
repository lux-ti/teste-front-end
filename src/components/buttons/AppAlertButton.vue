<template>
    <div class="c-alertbutton">
       Certo
    </div>
</template>

<script>
export default {
    name:'AppAlertButton'
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-alertbutton{
    width: 194px;
    height: 72px;
    background-color: #FF0000;
    color: white;
    font-size: 40px;
    font-family: $font-principal;
    font-weight: 600;
    border-radius: 10px;
    @extend .display-flex;
    @extend .align-items-center;
    @extend .justify-content-center;
    
}
.c-alertbutton:hover{
    cursor: pointer;
}
</style>
