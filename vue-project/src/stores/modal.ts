import { defineStore } from "pinia";

export const useModal = defineStore({
  id: "modal",
  state: () => ({
    showingModal: true as boolean,
  }),
  actions: {
    actionModal(value: boolean) {
      this.showingModal = value;
    },
  },
});
