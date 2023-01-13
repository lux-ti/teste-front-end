<template>
  <div class="modal">
    <div class="modal-container">
      <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="alerta"/>
      <h3>Desculpe!</h3>
      <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
      <button @click="fecharModal">Certo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data(){
    return{
      modalAberto: false
    }
  },
  props:['fecharModal'],
}

</script>

<style scoped>
.modal{
  background: rgba(0, 0, 0, 0.59);
  height: 100vh !important;
  width: 100vw !important;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
  justify-content: center;
}
.modal-container{
  background-color: white;
  text-align: center;
  border-radius: 15px;
  width: 444px;
  height: 547px;
  padding: 70px 22px 28px 22px;
  box-sizing: border-box;
}
.modal-container .alerta{
  color: red;
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
}
.modal-container h3{
  margin-bottom: 25px;
  font-family: 'Inter';
  font-size: 48px;
}
.modal-container  p {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;
}
.modal-container button{
  background-color: red;
  color: white;
  border-radius: 10px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 40px;
  border: none;
  padding: 10px 21px;
  margin-top: 70px;
  cursor: pointer;
}
</style>