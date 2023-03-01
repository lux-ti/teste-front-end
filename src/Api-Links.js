const BASE_URL = "https://api.github.com/";

class GithubApi {
  constructor() {
    this.baseUrl = BASE_URL;
  }

  getSearchUrl(query, option, page = 1) {
    return `${this.baseUrl}search/${option}?q=${query}&page=${page}&per_page=4`;
  }

  getUserReposUrl(username, page) {
    return `${this.baseUrl}users/${username}/repos?sort=pushed&direction=desc&per_page=4&page=${page}`;
  }

  getUserInfoUrl(username) {
    return `${this.baseUrl}users/${username}`;
  }
}

export default GithubApi;
