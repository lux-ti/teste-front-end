import axios from "axios";

class HttpServices {
  private defaultUrl = "";
  private slug = "";

  public constructor(defaultUrl = "https://api.github.com/") {
    this.defaultUrl = defaultUrl;
  }

  public get(slug = "", params = {}, defaultUrl = this.defaultUrl) {
    return axios.get(`${defaultUrl}${slug}`, { params });
  }

  public searchUsers(params = {}, defaultUrl = this.defaultUrl) {
    return axios.get(`${defaultUrl}search/users`, { params });
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
}

export default HttpServices;
