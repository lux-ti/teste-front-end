import { userApiToUserEntity, repositoriesApiToRepositoryEntity } from '../mappers/github.mapper'
import axios from 'axios'

class GithubService {
    constructor(){
        this.http = axios.create({
            baseURL: 'https://api.github.com' ,
        })
    }

    async getUsersByUsername(username) {
        const response = await this.http.get('/search/users?q=' + username);
        return response.data.items?.map(user => userApiToUserEntity(user));
    }

    async getUserDetailsAndRepositories(username){
        const userDetailsResponse = await this.http.get('/users/' + username);
        const userDetails = userDetailsResponse.data;

        const userRepositoriesResponse = await this.http.get('/users/' + username + '/repos');
        userDetails.repositories = userRepositoriesResponse.data.map(repo => repositoriesApiToRepositoryEntity(repo));

        return userApiToUserEntity(userDetails);
    }

    async getRepositoriesByName(name) {
        const response = await this.http.get('/search/repositories?q=' + name);
        return response.data.items?.map(repo => repositoriesApiToRepositoryEntity(repo));
    }
}

const githubService = new GithubService()
export default githubService