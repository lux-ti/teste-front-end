<template>
 <p class="count">{{ this.total_count }} RESULTADOS ENCONTRADOS</p>
  <hr>
  <div class="list-repos">
    <ul>
      <li v-for="item in items" :key="item.id">
        <!-- <img src="../assets/star.svg" alt="star icon" class="icon" style="float: right; background: #FFC700;"> -->
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
        <span><img src="../assets/star.svg" alt="star icon" class="icon">{{ item.stargazers_count }}</span>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  import GitApi from '../services/gitApi'

  export default {
    data() {
      return {
        total_count: 0,
        items: []
      }
    },

    mounted(){   
      if(this.$route.params.repo){
        GitApi.repository_search(this.$route.params.repo).then(response => {
          const result = response.data
          this.total_count = result.total_count
          this.items = result.items
        })
      }
    }
  }
</script>

<style>

</style>
