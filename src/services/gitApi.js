import { http } from './config'

export default {
  
  user_search:(username) => {
    return http.get(`search/users?q=${username}`)
  },

  repository_search:(repo) => {
    return http.get(`search/repositories?q=${repo}`)
  },

  user_details:(user) => {
    return http.get(`users/${user}`)
  },

  user_repositories:(user) => {
    return http.get(`users/${user}/repos`)
  },

  my_favorites:(username) => {
    return http.get(`users/${username}/starred`)
  }

}
