<template>
  <p class="count">{{ this.total_count }} RESULTADOS ENCONTRADOS</p>
  <hr>
  <div class="search-result">
    <ul>
      <li v-for="item in items" :key="item.id">
          <router-link :to="{ path: `/user_details/${item.login}` }">
            <img width="100" v-bind:src="item.avatar_url"/>
            <p>{{ item.login }}</p>
          </router-link>
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
      if(this.$route.params.username){
        GitApi.user_search(this.$route.params.username).then(response => {
          const result = response.data
          this.total_count = result.total_count
          this.items = result.items
        })
      }
    },

  }

</script>

<style scoped>
  .search-result li {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    list-style: none;
    padding: 1%;
    display: flex;
    margin-bottom: 2%
  }

  img {
    filter: drop-shadow(0px 0px 4px #000000);
    border-radius: 5px;
  }

  li a {
    display: contents;
  }

  li p {
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 30px;
    line-height: 43px;
    margin: 2%;
  }

</style>
