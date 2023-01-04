<template>

  <div class="main-container-repos">
    <div class="repos-busca">
      <input v-model="entrada" class="rep-search" placeholder="Buscar...">
      <button type='submit'><img src="/img/searchw.png"></button>
    </div>

    <ul>
      <li>
        <RepCard />
      </li>
      <li>
        <RepCard />
      </li>
      <li>
        <RepCard />
      </li>
    </ul>
  </div>


</template>

<script>
import RepCard from '../components/RepCard.vue'


export default {
  name: 'Repos',
  components: {
    RepCard,
  }

}
</script>

<style scoped>
.main-container-repos {
  text-align: center;
  padding: 50px;
}

.repos-busca {
  display: flex;
  /* margin-top: 48px; */
  justify-content: flex-end;
}

li {
  list-style: none;
  border-bottom: 1px solid #000000;
}

button {
  background-color: #000000;
  background-image: url("/public/img/searchw.png") no-repeat;
  padding: 0.5rem;
  cursor: pointer;
}

input {
  background: #FFFFFF;
  border: solid #000000;
  padding: 10px;
  width: 20%;
}
</style>