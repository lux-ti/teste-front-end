import { defineStore } from "pinia";
import HttpService from "@/core/HttpServices";

const service = new HttpService();

export const typeSearch = defineStore({
  id: "typeSearch",
  state: () => ({
    type: true as boolean,
    dataRepository: [] as any[],
    dataUsers: [],
    searchData: "",
    page: 1 as number,
  }),
  actions: {
    changeType(value: boolean) {
      this.type = value;
    },
    setRepository(value: any[]) {
      this.dataRepository = value;
    },
    setUsers(value: any[]) {
      this.dataRepository = value;
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
    async getMoreRepositories(currentPage: number) {
      const repositories = await this.searchList(currentPage);
      repositories.data.items.forEach((repository: any) => {
        this.dataRepository.push(repository);
      });
    },
  },
  getters: {
    getCurrentType: (state) => state.type,
    getSearchData: (state) => state.searchData,
    getDataUsers: (state) => state.dataUsers,
    getDataRepository: (state) => state.dataRepository,
    getCurrentPage: (state) => state.page,
  },
});
