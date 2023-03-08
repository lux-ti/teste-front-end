import { http } from './config'

export default {
  
  user_search:(username) => {
    return http.get(`search/users?q=${username}`)
  },

  repository_search:(repo) => {
    return http.get(`search/repositories?q=${repo}`)
  },

  user_details:(username) => {
    return http.get(`users/${username}`)
  },

  my_favorites:(username) => {
    return http.get(`users/${username}/starred`)
  }

}
