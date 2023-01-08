const BASE_URL = "https://api.github.com/";

export const GET_REPOSITORIES_OR_USERS = (query, option, page = 1) => {
  return `${BASE_URL}search/${option}?q=${query}&page=${page}&per_page=4`;
};

export const GET_USER_REPOSITORIES = (username, page) => {
  return `${BASE_URL}users/${username}/repos?sort=pushed&direction=desc&per_page=4&page=${page}`;
};

export const GET_USER_INFOS = (username) => {
  return `${BASE_URL}users/${username}`;
};
