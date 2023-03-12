<template>
    <div class="c-user">
        <img :src="img" alt="name" class="c-user__img">
        <span class="c-user__name">{{ name }}</span>
    </div>
</template>

<script>
export default {
    name:'AppUser',

    props:{
        img:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        }  
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-user{
        height: 171px;
        @extend .display-flex;
        @extend .align-items-center;
        font-family: $font-user;
        font-weight: 300;
        font-size: 36px;
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        box-sizing: border-box;
        margin:20px 60px 20px 60px;

        &__img{
            width: 144px;
            height: 144px;
            padding: 10px;
            border-radius: 15px;     
        }
        &__name{
            height: 100%;
            margin-top: 40px;
        }
       
    }
    .c-user:hover{
        cursor: pointer;
        background-color: rgb(202, 202, 202)
    }
</style>
