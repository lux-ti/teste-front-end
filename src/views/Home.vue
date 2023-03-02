<script>
import { router } from "../routes";
import useFetch from "../hooks/Fetch";
import SearchError from "../components/SearchError.vue";
import GithubApi from "../Api-Links";

const githubApi = new GithubApi();

export default {
    name: "Home",

    components: { SearchError },

    setup() {
        const { data, loading, error, fetchData, resetStates } = useFetch();
        return { error, data, loading, fetchData, resetStates };
    },

    data() {
        return {
            searchValue: "",
            selectedOption: "repositories",
        };
    },

    methods: {
        async searchHandler() {
            await this.fetchData(
                githubApi.getSearchUrl(this.searchValue, this.selectedOption)
            );

            if (this.data && this.data.total_count > 0) {
                router.push({
                    path: this.selectedOption,
                    query: { q: this.searchValue },
                });
            }
        },
        closeErrorModal() {
            this.resetStates();
        },
    },

    computed: {
        isErrorModalShown() {
            if (this.error || (this.data && this.data.total_count === 0)) {
                return true;
            }

            return false;
        },
    },
};
</script>

<template>
    
    <main class="home">
        <div class="container">
            <form>
                <div class="options">
                    <input 
                        type="radio" 
                        value="repositories" 
                        name="search_option" 
                        v-model="selectedOption"
                        id="repository" 
                    />
                    <label for="repository">Repositório</label>

                    <input 
                        type="radio" 
                        value="users" 
                        name="search_option" 
                        v-model="selectedOption" 
                        id="user" 
                    />
                    <label for="user"> Usuário </label>
                </div>

                <div class="searchField">
                    <input 
                        type="search" 
                        placeholder="Buscar..." 
                        id="search" 
                        v-model="searchValue" 
                    />
                    <button 
                        title="Procurar" 
                        @click.prevent="searchHandler" 
                        v-if="!loading"
                    >
                    <!-- icone de lupa -->
                    </button>
                </div>
            </form>
        </div>
    </main>
    
    <SearchError 
        v-if="isErrorModalShown" 
        @onClose="closeErrorModal" 
    />
</template>

<style scoped>
.home {
    text-align: center;
}

#repository,
#user,
label[for="search"] {
    position: absolute;
    visibility: hidden;
}

form {
    max-width: 780px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
}

#search {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 2px solid #000;
    padding: 1.2rem 2rem;
    width: 100%;
}

.searchField {
    position: relative;
}

.searchField button {
    position: absolute;
    top: 1.1rem;
    right: 1rem;
    height: 1.7rem;
    width: 1.7rem;
}

.options {
    margin-bottom: 2.5rem;
}

.options label {
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    width: 186px;
    cursor: pointer;
    font-weight: 400;
}

.options label:first-of-type {
    margin-right: 2.5rem;
}

.options input:checked+label {
    background: #000;
    color: #fff;
}
</style>