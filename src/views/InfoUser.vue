<script>
import useFetch from "../hooks/Fetch";
import UserRepos from "../components/UserRepo.vue";
import GithubApi from "../ApiLinks";

const githubApi = new GithubApi();

export default {
    name: "InfoUser",
    props: ["username"],
    setup(props) {
        const {
            data,
            loading,
            error,
            fetchData
        } = useFetch();

        return {
            data,
            loading,
            error,
            fetchData
        };
    },

    components: { UserRepos },

    methods: {
        fetchUserInfos() {
            this.fetchData(githubApi.getUserInfoUrl(this.username));
        },
    },

    mounted() {
        this.fetchUserInfos();
    },
};
</script>

<template>
    <main>
        <div class="container">
            <p v-if="error">
                Usuário "{{ username }}" não encontrado.
            </p>

            <section v-if="data" class="userInfo">
                <div class="img">
                    <img :src="data.avatar_url" :alt="data.login" />
                </div>

                <h2>
                    {{ data.name }}
                </h2>

                <p>
                    {{ data.login }}
                </p>

                <span aria-label="empresa atual" v-if="data.company">
                    {{ data.company }}
                </span>
                <span aria-label="localização" v-if="data.location">
                    {{ data.location }}
                </span>
                <span aria-label="repositórios públicos">
                    {{ data.public_repos }}
                </span>
                <span aria-label="seguidores">
                    {{ data.followers }}
                </span>
            </section>
            <UserRepos v-if="data" :username="data.login" :totalUserRepos="data.public_repos" class="repos" />
        </div>
    </main>
</template>
  
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

img {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
}

h2 {
    font-size: 36px;
    font-weight: 300;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
}

p {
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 2rem;
}

p,
span {
    color: #757575;
}

span {
    margin: 0.5rem 0;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

}

.userInfo {
    background-color: #d9d9d9;
    border-radius: 5px;
    width: 339px;
    height: 644px;
    padding: 20px;
    margin: 2rem 0 2rem 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>