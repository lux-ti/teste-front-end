<template>
    <div class="profile-user">
        <img class="profile-img" :src=imgUrl alt="Logo GitHub">
        <h2>{{ name }}</h2>
        <p class="profile-bio">{{ bio }}</p>
        <div class="profile-user-details">
            <div class="profile-user-detail">
                <img src="/img/icon.png" alt="Logo GitHub">
                <p>{{ organization }}</p>
            </div>
            <div class="profile-user-detail">
                <img src="/img/location.png" alt="Logo GitHub">
                <p>{{ location }}</p>
            </div>
            <div class="profile-user-detail">
                <img src="/img/icon(1).png" alt="Logo GitHub">
                <p>{{ repository }}</p>
            </div>
            <div class="profile-user-detail">
                <img src="/img/followers.png" alt="Logo GitHub">
                <p class="seguidor">{{ followers }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserProfileCard',
    props: {
        name: {
            type: String,
        },
        imgUrl: {
            type: String,
        },
        bio: {
            type: String,
        },
        organization: {
            type: String,
        },
        location: {
            type: String,
        },
        repository: {
            type: Number,
        },
        followers: {
            type: Number,
        },
    },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.profile-img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
}

h2 {
    color: #000000;
}

.profile-user {
    color: #757575;
    font-size: 20px;
    font-family: 'Rubik';
    margin-top: 48px;
    background-color: #D9D9D9;
    padding: 1rem;
    width: 339px;
    height: fit-content;
    border-radius: 5px;
    text-align: start;

}

.profile-bio {
    font-size: 24px;
}

.profile-user-detail {
    display: flex;
    padding-top: 16px;
}

.profile-user-detail img {
    padding-right: 12px;
}

.profile-user-detail p {
    font-size: 20px;
}

.profile-user-details {
    margin-top: 28px;
    margin-bottom: 56px;
}
</style>