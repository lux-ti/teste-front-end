import axios from "axios";

class HttpServices {
  private defaultUrl = "";

  public constructor(defaultUrl = "https://api.github.com/") {
    this.defaultUrl = defaultUrl;
  }

  public searchList(
    currentType: boolean,
    params = {},
    defaultUrl = this.defaultUrl
  ) {
    return axios.get(
      `${defaultUrl}search/${currentType ? "repositories" : "users"}`,
      { params }
    );
  }

  public searchUsers(url: string | string[], params = {}) {
    return axios.get(`${this.defaultUrl}users/${url}`, { params });
  }
}

export default HttpServices;
