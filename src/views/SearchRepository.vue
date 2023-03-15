<template>
  <p class="count">{{ this.total_count }} RESULTADOS ENCONTRADOS</p>
  <hr>
  <div class="list-repos">
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <!-- <img src="../assets/star.svg" alt="star icon" class="icon" style="float: right; background: #FFC700;"> -->
        <div v-if="index < max_repo">
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
          <span><img src="../assets/star.svg" alt="star icon" class="icon">{{ item.stargazers_count }}</span>
          <hr>
        </div>
      </li>
    </ul>
    <center v-if="max_repo < items.length">
      <button @click="max_repo = max_repo + 5" class="load">Ver mais</button>
    </center>
  </div>
</template>

<script>
  import GitApi from '../services/gitApi'

  export default {
    data() {
      return {
        total_count: 0,
        items: [],
        max_repo: 10
      }
    },

    mounted(){   
      if(this.$route.params.repo){
        GitApi.repository_search(this.$route.params.repo).then(response => {
          const result = response.data

          if(result.total_count > 0){
            this.total_count = result.total_count
            this.items = result.items
          } else {
            this.$router.push({ name:"home_page", params: { showModalNoResults: true }})
          }
        })
      }
    }
  }
</script>

<style>

</style>
