<template>
    <TopBarComponent />
    <div class="container-content">
        <div class="container-content-user">
            <img class="profilePicture" :src="user.profilePictureURL" alt="">

            <div class="container-content-user-username">
                <h2>{{ user.name }}</h2>
                <p>{{ user.login }}</p>
            </div>

            <div class="container-content-user-infos">
                <p>
                    <img src="../components/icons/company.svg" alt="Company">
                    <span>{{ user.company }}</span>
                </p>
                <p>
                    <img src="../components/icons/location.svg" alt="City">
                    <span>{{ user.city }}</span>
                </p>
                <p>
                    <img src="../components/icons/repository.svg" alt="Repositories">
                    <span>{{ user?.repositories?.length }}</span>
                </p>
                <p>
                    <img src="../components/icons/followers.svg" alt="Followers">
                    <span>{{ user.followers }}</span>
                </p>
            </div>
        </div>

        <ListRepositories :repositories="user.repositories" />

    </div>
</template>

<script setup>
import TopBarComponent from '../components/TopBarComponent.vue';
import ListRepositories from '../components/ListRepositories.vue';
import githubService from '../services/github/github.service';
</script>
  
<script>

export default {
    props: {
        username: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            repositories: [],
            user: {},
            showCount: 4,
        }
    },

    mounted() {
        this.userInfo()
    },

    methods: {
        async userInfo() {
            const user = await githubService.getUserDetailsAndRepositories(this.username)
            this.user = user
            console.log(user);
        },


    }
}
</script>

<style scoped>
* {
    font-family: 'Rubik', sans-serif;
}

.container-content {
    display: flex;
    margin-top: 36px;
    margin-left: 17px;
}

.profilePicture {
    width: 300px;
    height: 300px;

    filter: drop-shadow(0px 0px 4px #000000);
    border-radius: 5px;
}

.container-content-user {
    display: flex;
    flex-direction: column;
    width: 339px;
    height: 644px;
    background: #D9D9D9;
    border-radius: 5px;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 19px;
}

.container-content-user-username h2{
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 36px;
    font-weight: 300;
}

.container-content-user-username p {
    margin-top: 0;
    font-size: 24px;
    font-weight: 300;
    color: #757575;
}

.container-content-user-infos p {
    display: flex;
    align-items: center;
}

.container-content-user-infos span {
    margin-left: 4px;
    color: #757575;
    font-size: 20px;
    font-weight: 300;
}
</style>