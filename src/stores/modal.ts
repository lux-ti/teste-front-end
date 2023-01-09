import { defineStore } from "pinia";

export const useModal = defineStore({
  id: "modal",
  state: () => ({
    showingModal: false as boolean,
  }),
  actions: {
    actionModal(value: boolean) {
      this.showingModal = value;
    },
  },
});
