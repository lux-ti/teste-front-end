<template>
  <section>
    <aside>
      <div class="info-header">
        <img v-bind:src="user.avatar_url" alt="avatar user" class="avatar">
        <p>
          <label>{{ user.name }}</label>
          <br>
          <span>{{ user.login }}</span>
        </p>
      </div>
      <ul class="content-info">
        <li>
          <img src="../assets/organization.svg" alt="organization icon" class="icon">
          <span>{{ user.company }}</span>
        </li>
        <li>
          <img src="../assets/location.svg" alt="location icon" class="icon">
          <span>{{ user.location }}</span>
        </li>
        <li>
          <img src="../assets/repository.svg" alt="repository icon" class="icon">
          <span>{{ user.public_repos }}</span>
        </li>
        <li>
          <img src="../assets/followers.svg" alt="followers icon" class="icon">
          <span>{{ user.followers }}</span>
        </li>
      </ul>
    </aside>
    <div class="list-repos">
      <ul>
        <li v-for="(repo, index) in repos" :key="repo.id">
          <!-- <img src="../assets/star.svg" alt="star icon" class="icon" style="float: right; background: #FFC700;"> -->
          <div v-if="index < max_repo">
            <h1>{{ repo.name }}</h1>
            <p>{{ repo.description }}</p>
            <span><img src="../assets/star.svg" alt="star icon" class="icon">{{ repo.stargazers_count }}</span>
            <hr>
          </div>
        </li>
      </ul>
      <center v-if="max_repo < repos.length">
        <button @click="max_repo = max_repo + 5" class="load">Ver mais repositórios</button>
      </center>
    </div>
  </section>
</template>

<script>
  import GitApi from '../services/gitApi'

  export default {
    data() {
      return {
        user: '',
        repos: [],
        max_repo: 4
      }
    },

    mounted(){   
      if(this.$route.params.username){
        GitApi.user_details(this.$route.params.username).then(response => {
          this.user = response.data
        })
        
        GitApi.user_repositories(this.$route.params.username).then(response => {
          this.repos = response.data
          console.log(response.data)
        })
      }

    }
  }
</script>

<style scoped>
  section {
    display: flex;
  }
  aside {
    max-width: 25%;
    height: max-content;
    background: #D9D9D9;
    border-radius: 5px;
    padding: 2%;   
  }
  .content-info {
    display: grid;
    padding-left: 0;
  }
  .content-info li {
    list-style: none;
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;;
  }
  .avatar {
    height: 180px;
    filter: drop-shadow(0px 0px 4px #000000);
    border-radius: 5px;
  }
  .info-header label {
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 24px;
  }
  .content-info span {
    font-size: 11px;
  }
  .info-header span,
  .content-info span {
    color: #757575;
  }

</style>
