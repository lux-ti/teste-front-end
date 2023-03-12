import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            repositorySearch: true,
            userSearch: false,
            alert: false,
            text:'',
            users:[],
            repositories:[],
            favoriterepositories:[],
            user:[],
            userrepositories:[],
            repositoriespage:1,
            usersitems:3,
            repositoriesitems:4,
            userrepositoriesitems:4
        }
    },
    mutations:{
        changeSearch(state, params){
            if(params === 'Repositório'){
                state.repositorySearch = true
                state.userSearch = false
            }else{
                state.repositorySearch = false
                state.userSearch = true
            } 
        },
        changeAlert(state){
            state.alert = !state.alert 
        },
        sendingUsers(state, params){
            state.users = params
        },
        sendingRepositories(state, params){
            state.repositories = params
        },
        addfavoriterepoitory(state, params){
            const index = state.favoriterepositories.findIndex( repository => repository.id === params.id)
          
            if(index != -1){
                state.favoriterepositories.splice(index, 1)
            } else{
                state.favoriterepositories.push(params)
            }
        },
        selecteduser(state, params){
            state.user = params
        },
        sendrepositories(state, params){
            state.userrepositories = params
        },
        setusersitems(state){
            state.usersitems = state.usersitems + 4
        },
        setrepositoriesitems(state){
            state.repositoriesitems = state.repositoriesitems + 5
        },
        setuserrepositoriesitems(state){
            state.userrepositoriesitems = state.userrepositoriesitems + 5
            console.log('oi')
        },
        set_text (state, params) {
            state.text = params
        }
    },

    actions: {
        getUsers ({ commit, state }) {
            return fetch(`https://api.github.com/search/users?q=${state.text}&per_page=${state.usersitems}&page=1`)
                .then(response => response.json())
                .then(data => {
                    commit('sendingUsers', data.items)
                    return data
                })
        },
        getRepositories ( {commit, state}){
            return fetch(`https://api.github.com/search/repositories?q=${state.text}&per_page=${state.repositoriesitems}&page=1`)
            .then(response => response.json())
            .then(data => { 
                commit('sendingRepositories', data.items)
                return data
            })     
        },
        getUser ({commit}, params){
            return fetch(`https://api.github.com/users/${params}`)
            .then(response => response.json())
            .then(data => {
                commit('selecteduser', data)
            });
        },
        getUserRepositories ({commit, state}, params){
            return fetch(`https://api.github.com/users/${params}/repos?direction=desc&per_page=${state.userrepositoriesitems}`)
            .then(response => response.json())
            .then(data => {
                commit('sendrepositories', data)
            });  
        }
    }
})

