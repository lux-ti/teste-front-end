import { defineStore } from "pinia";

export const useStore = defineStore("searchParameters", {
  state: () => {
    return {
        cat: "default",
        prompt: "default",
        userName: "default",
        favorites: [],
        page: 1,
        fetchAddress: `https://api.github.com/search/`,
    }
    }
  },
);
