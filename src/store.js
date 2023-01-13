import { createStore } from 'vuex';

const store = createStore({
  state: {
    busca: '',
    repositorios: null,
    favoritos: [],
    usuarios: null,
    usuario: null,
    pagina: 1,
  },
  mutations: {
    REPOSITORIOS_RESULTADO(state, payload) {
      state.repositorios = payload;
    },

    REPOSITORIOS_DECRESCENTE(state, payload) {
      let url = `https://api.github.com/users/${payload}/repos?direction=desc`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.repositorios = r;
        });
    },

    USUARIOS_RESULTADO(state, payload) {
      state.usuarios = payload;
    },

    USUARIO_ESCOLHIDO(state, payload) {
      let url = `https://api.github.com/users/${payload}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.usuario = r;
        });
    },

    ADICIONAR_FAVORITO(state, payload) {
      state.favoritos.push(payload);
    },
  },
});

export default store;
