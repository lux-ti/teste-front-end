<script>
export default {
  name: "SearchError",
  emits: ["onClose"],
};
</script>

<template>
  <Teleport to="body">
    <div class="notification" @click.self="$emit('onClose')">
      <div class="alert">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h2>Desculpe!</h2>
        <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
        <button @click="$emit('onClose')">Certo</button>
      </div>
    </div>
  </Teleport>
</template>


<style scoped>
.fa-circle-exclamation {
  color: #c50000;
  font-size: 8rem;
  padding-top: 2rem;
}

.notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.59);
  padding: 1rem;
}

.alert {
  background: #fff;
  padding: 2rem;
  max-width: 444px;
  width: 100%;
  border-radius: 15px;
  text-align: center;
}

.alert p {
  font-size: 24px;
  margin: 3rem 0;
}

.alert button {
  font-size: 40px;
  padding: 1rem 2.5rem;
  font-weight: bold;
  background: #c50000;
  color: #fff;
  border-radius: 10px;
}

.alert h2 {
  font-size: 48px;
  font-weight: 400;
  margin-top: 3rem;
}
</style>
