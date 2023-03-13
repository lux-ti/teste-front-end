class User {
    constructor(name, login, profilePictureURL, company, city, repositories, followers){
        this.name = name;
        this.login = login;
        this.profilePictureURL = profilePictureURL;
        this.company = company;
        this.city = city;
        this.repositories = repositories;
        this.followers = followers;
    }
}

export default User