import Repository from "../../domain/entities/repository.entity"
import User from "../../domain/entities/user.entity"

export function userApiToUserEntity(data){
    return new User(data.name, data.login, data.avatar_url, data.company, data.location, data.repositories, data.followers)
}

export function repositoriesApiToRepositoryEntity(data){
    return new Repository(data.id, data.name, data.description, data.stargazers_count)
}