<template>
  <main>
    <div class="container">
      <form class="form-search">
        <label for="search-repo">Procure por um repositório</label>
        <input type="search" placeholder="Palavra chave" id="search-repo" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            />
          </svg>
        </button>
      </form>
      <ul>
        <li v-for="repo in repositories" :key="repo.id" class="item-repo">
          <div>
            <h2 class="repo-name">{{ repo.full_name }}</h2>
            <p class="description">{{ repo.description }}</p>
            <span class="stars">{{ repo.stargazers_count }}</span>
          </div>
          <button class="btn-favorite">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.12202 41.5949L21.0623 34.5913L34.0025 41.5949L31.5312 26.761L42 16.2555L27.5324 14.0913L21.0623 0.59491L14.5921 14.0913L0.124512 16.2555L10.5934 26.761L8.12202 41.5949ZM29.2325 34.8361L21.0623 30.4141L12.8921 34.8361L14.4524 25.4702L7.84259 18.8372L16.9772 17.4708L21.0623 8.94943L25.1474 17.4708L34.2819 18.8372L27.6721 25.4702L29.2325 34.8361Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div class="div-btn">
        <button @click="loadMoreDataHandler" class="load-more">Ver mais</button>
      </div>
    </div>
  </main>
</template>

<script>
import { GET_REPOSITORIES_OR_USERS } from "../api_links";
import { router } from "../routes";
import useFetch from "../useFetch";

export default {
  name: "Repositories",
  setup() {
    const { data, loading, error, fetchData } = useFetch();

    return { error, data, fetchData };
  },
  data() {
    return {
      query: "",
      repositories: [],
      currentPage: 1,
    };
  },
  methods: {
    async fetchGithubHandler() {
      this.query = this.$route.query.q;
      this.option = this.$route.name;

      const backToHome = () =>
        router.push({
          path: "/",
        });

      //se a query "q" não existir ou não possuir valor, a página é redirecionada a "home"
      if (!this.query) {
        backToHome();
      } else {
        await this.fetchData(
          GET_REPOSITORIES_OR_USERS(this.query, this.option)
        );

        //se o total de itens puxados da API for igual a 0, a página é redirecionada a "home"
        if (this.data.total_count === 0) {
          backToHome();
          return;
        }
        this.repositories = this.data.items;
      }
    },
    async loadMoreDataHandler() {
      ++this.currentPage;

      await this.fetchData(
        GET_REPOSITORIES_OR_USERS(this.query, this.option, this.currentPage)
      );

      this.repositories = [...this.repositories, ...this.data.items];
    },
  },
  mounted() {
    this.fetchGithubHandler();
  },
};
</script>

<style scoped>
.description {
  font-weight: 300;
  color: var(--gray-2);
  font-size: 24px;
  margin: 0.7rem 0;
}
.repo-name {
  font-weight: 400;
  font-size: 36px;
}

.item-repo {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.item-repo + .item-repo {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--black);
}
.stars {
  color: var(--gray-2);
  display: flex;
  align-items: center;
}

.stars::before {
  content: "";
  width: 24px;
  height: 24px;
  background: url("../assets/icon.svg");
  display: block;
  background-size: 24px;
  margin-right: 0.5rem;
}

.div-btn {
  text-align: center;
  border-top: 1px solid var(--black);
  margin-top: 1rem;
}

.load-more {
  border: 2px solid var(--black);
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  margin-top: 3rem;
}
.form-search {
  max-width: 490px;
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  margin-bottom: 3rem;
}
.form-search label {
  position: absolute;
  visibility: hidden;
}

.form-search input {
  border: 2px solid var(--black);
  padding: 0.5rem 1rem;
  flex: 1;
}

.form-search button {
  width: 50px;
  background: var(--black);
  color: var(--white);
  padding: 0.8rem;
}
</style>
