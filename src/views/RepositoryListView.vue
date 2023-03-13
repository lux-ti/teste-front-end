<template>
    <div>
        <div class="topbar">
            <TopBarComponent />
        </div>

        <ListRepositories :repositories="repositories"/>

    </div>
</template>
  
<script setup>
import TopBarComponent from '../components/TopBarComponent.vue';
import ListRepositories from '../components/ListRepositories.vue';
import githubService from '../services/github/github.service';
</script>
  
<script>
export default {
    props: {
        searchTerm: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            repositories: [],
            showCount: 4,
        }
    },

    mounted() {
        this.searchGithubRepositories()
    },

    methods: {
        async searchGithubRepositories() {
            this.repositories = await githubService.getRepositoriesByName(this.searchTerm);
        },

        showMore() {
            this.showCount += 4;
        }
    }
}
</script>
  