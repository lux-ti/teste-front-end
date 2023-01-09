import { defineStore } from "pinia";

export const useFavoritosStore = defineStore("favoritos", {
  state: () => {
    const defaultData = localStorage.getItem("favoritos");
    let lista = [];
    if (defaultData) {
      lista = JSON.parse(defaultData); // "[{ id: 1234345, stars: 1, .... }]" transforma string em objeto
    }
    return { lista };
  },
  actions: {
    favoritar(repo) {
      let favorito = this.lista.find((f) => f.id === repo.id);
      if (favorito) {
        // se existe o repo na lista de favoritos, ele remove
        this.lista = this.lista.filter((f) => f.id !== repo.id);
      } else {
        // senão ele adiciona
        this.lista.push(repo);
      }
      // salva a lista atualizada na localStorage para não perder se reiniciar a aplicação
      localStorage.setItem("favoritos", JSON.stringify(this.lista)); // transforma objeto em string
    },
  },
});
