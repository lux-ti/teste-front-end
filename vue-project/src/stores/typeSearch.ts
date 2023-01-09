import { defineStore } from "pinia";
import HttpService from "@/core/HttpServices";

const service = new HttpService();

export const typeSearch = defineStore({
  id: "typeSearch",
  state: () => ({
    type: true as boolean,
    dataRepository: [] as any[],
    dataUsers: [] as any[],
    searchData: "",
    page: 1 as number,
    currentUser: {} as any,
    currentRepository: [] as any,
    repositoryFavorite: [] as any,
  }),
  actions: {
    changeType(value: boolean) {
      this.type = value;
    },
    setRepository(value: any[]) {
      this.dataRepository = value;
    },
    setUsers(value: any[]) {
      this.dataUsers = value;
    },
    setSearchData(value: string) {
      this.searchData = value;
    },
    async searchList(currentPage?: number) {
      return service.searchList(this.type, {
        q: this.searchData,
        page: currentPage ?? this.page,
        per_page: 4,
      });
    },

    async setCurrentUser(username: string | string[]) {
      const user = await service.searchUsers(username);
      this.currentUser = user.data;
      return this.currentUser;
    },

    async setCurrentRepository(
      username: string | string[],
      currentPage?: number
    ) {
      const repositories = await service.searchUsers(`${username}/repos`, {
        page: currentPage ?? this.page,
        per_page: 4,
      });
      repositories.data.forEach((repository: any) => {
        this.currentRepository.push(repository);
      });
      return this.currentRepository;
    },

    async getMoreData(currentPage: number) {
      const { data } = await this.searchList(currentPage);
      data.items.forEach((repository: any) => {
        this[this.type ? "dataRepository" : "dataUsers"].push(repository);
      });
    },

    actionFavorite(repository: any) {
      for (var i = 0; i < this.repositoryFavorite.length; i++) {
        if (this.repositoryFavorite[i].id === repository.id) {
          this.repositoryFavorite.splice(i, 1);
          return;
        }
      }
      this.repositoryFavorite.push(repository);
    },

    clearState() {
      this.currentUser = {};
      this.currentRepository = [];
    },
  },
  getters: {
    getCurrentType: (state) => state.type,
    getSearchData: (state) => state.searchData,
    getDataUsers: (state) => state.dataUsers,
    getDataRepository: (state) => state.dataRepository,
    getCurrentPage: (state) => state.page,
    getFavorites: (state) => state.repositoryFavorite,
    getCurrentUser: (state) => state.currentUser,
  },
});
