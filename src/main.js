import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createStore } from 'vuex'


const store = createStore({
    state () {
      return {
        likedRepositories: []
      }
    },
    mutations: {
      addLikedRepository (state, repository) {
        const indexToRemove = state.likedRepositories.map(likedRepository => likedRepository.id).indexOf(repository.id);
        if (indexToRemove > -1) state.likedRepositories.splice(indexToRemove, 1)
        else state.likedRepositories.push(repository)
        
      },
    }
  })


const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')

