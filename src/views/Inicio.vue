<template>
  <div class="inicio">
    <img src="/src/assets/image/github.png" alt="" />
    <div class="buttons">

      <input id="radio_rep" type="radio" name="op" />
      <label for="radio_rep">
        <p class="btn_">Repositório</p>
      </label>

      <input id="radio_usu" type="radio" name="op" checked />
      <label for="radio_usu">
        <p class="btn_">Usuários</p>
      </label>
      

    </div>
    <div class="busca">
      <label for="buscar_github" class="input_busca">
        <input type="text" placeholder="Buscar..." id="buscar_github" @keyup.enter="busca" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:"ok"
    }
  },
  created(){
    // let x = document.getElementById("buscar_github")
    // console.log(x)
    // buscar_github.value = "ok"
    // buscar_github.focus()
  },
  methods:{
    busca(){

      console.log(radio_rep.checked)

      if(!radio_rep.checked)
        this.$router.push(`/search?name=${buscar_github.value}&page=1`)
      else
        this.$router.push(`/searchrepositories?name=${buscar_github.value}&page=1`)
    }
  }
}
</script>

<style>
* {
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: "Inter", sans-serif;
}
.inicio {
  margin: 0 auto;
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="radio"]{
  display: none
}

input + label > p{
  opacity: 0.3;
}

input:checked + label > p{
  opacity: 1;
  background-color: #000000;
  color: #ffffff;
}

.btn_ {
  font-weight: 700;
  width: 186px;
  height: 51px;
  margin-top: 51px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.repositorio {
  color: #ffffff;
  background-color: #000000;
}

.user {
  border: 2px solid #000000;
  color: #000000;
  margin-left: 45px;
  background-color: #ffffff;
}
.busca {
  display: flex;
  margin-top: 46px;
}

.input_busca {
  width: 780px;
  /* padding-left: 41px; */
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  display: flex;
  border: #000000 2px solid;
  justify-content: space-between;
}
input {
  border: none;
  font-size: 24px;
  background: url("../assets/image/search.png") no-repeat right;
  background-position-x: right;
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  margin: 20px;
  outline: none;
}


input::placeholder {
  color: #000000;
}

#buscar-github:active {
  border: none;
}
</style>
