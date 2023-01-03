<template>
    <button @click="pesquisa()" id="pessoa">Repositório</button>
</template>

<script>
export default{
    name: 'SubmitRep',
    props:{
      entrada: String
    },
        data (){
      return{

      }
    },
    methods:{
      async pesquisa(){
        const reqUser = await fetch("https://api.github.com/search/repositories?q=Vue_Practicing");
        const data = await reqUser.json();

        console.log(data);
        }
    }
}
</script>

<style scoped>
button{
  font-family: 'Inter';
  font-weight: 700;
  size: 20px;
  color: #000000;
  width: 186px;
  height: 51px;
  left: 518px;
  top: 379px;
  background: #FFFFFF;
  border-radius: 5px;
  border-color: #000000;
  margin-inline: 20.5px;
}
</style>