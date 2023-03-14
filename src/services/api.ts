import axios from 'axios'

class apiService {
  private baseURL = ''

  public constructor(baseURL = 'https://api.github.com') {
    this.baseURL = baseURL
  }

  public getUser(params: string, baseURL = this.baseURL): Promise<any> {
    return axios.get(`${baseURL}/users/${params}`)
  }

  public getUserRepositorie(params: string, baseURL = this.baseURL): Promise<any> {
    return axios.get(`${baseURL}/users/${params}/repos`)
  }

  public getUserRepositorieDesc(params: string, baseURL = this.baseURL): Promise<any> {
    return axios.get(`${baseURL}/users/${params}/repos?direction=desc`)
  }

  public search(name: string, typeSearch: boolean): Promise<any> {
    return axios.get(
      `${this.baseURL}/search/${typeSearch ? 'repositories' : 'users'}?q=${name}`
    )
  }
}

export default new apiService()
