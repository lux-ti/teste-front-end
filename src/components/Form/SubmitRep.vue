<template>
    <button @click="pesquisa()" id="pessoa">Repositório</button>
</template>

<script>
export default{
    name: 'SubmitRep',
    props:{
      entrada:{
        type: String,
      }
    },
        data (){
      return{

      }
    },
    methods:{
      async pesquisa(){
        const rep = this.entrada;
        const reqRep = await fetch(`https://api.github.com/search/repositories?q=${rep}`);
        const data = await reqRep.json();
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