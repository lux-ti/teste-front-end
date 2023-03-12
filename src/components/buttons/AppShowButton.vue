<template>
    <div class="c-showbutton">
        {{ name }}
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-showbutton{
    width: max-content;
    height: 46px;
    padding: 0px 30px 0px 30px;
    border: 2px solid #000000;
    border-radius: 10px;
    font-family: $font-user;
    font-size: 24px;
    font-weight: 400;
    color:#000000;
    @extend .display-flex;
    @extend .justify-content-center;
    @extend .align-items-center;
    flex-wrap: nowrap;
}
.c-showbutton:hover{
    cursor: pointer;
}
</style>
