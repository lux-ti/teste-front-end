import { defineStore } from "pinia";

export const typeSearch = defineStore({
  id: "typeSearch",
  state: () => ({
    type: true as boolean,
    dataRepository: [] as any[],
    dataUsers: [],
    searchData: "",
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
  },
  getters: {
    getCurrentType: (state) => state.type,
    getSearchData: (state) => state.searchData,
    getDataUsers: (state) => state.dataUsers,
    getDataRepository: (state) => state.dataRepository,
  },
});
