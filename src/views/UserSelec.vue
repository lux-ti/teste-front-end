<template>
    <div class="main-container-userselec">
        <UserProfileCard :name=data.login :img-url=data.avatar_url :bio=data.bio :organization=data.company
            :location=data.location :repository=data.public_repos :followers=data.followers />
        <div class="repo-list">
            <ul>
                <li v-for="items in dataRepo">
                    <RepCard :id=items.id :titulo=items.name :descricao=items.description
                        :stars=items.stargazers_count />
                </li>
            </ul>
            <button @click="exibemais()">Ver mais repositórios</button>
        </div>
    </div>
</template>


<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import RepCard from '../components/RepCard.vue'


export default {
    name: 'UserSelec',
    props: {
        query: String,
    },
    async setup(props) {
        const userSelec = props.query;
        const reqUserSelec = await fetch(`https://api.github.com/users/${userSelec}`);
        const data = await reqUserSelec.json();
        const reqUserRepo = await fetch(`https://api.github.com/users/${userSelec}/repos?direction=desc&per_page=4`);
        const dataRepo = await reqUserRepo.json();
        return {
            data,
            dataRepo,
            query: userSelec, // add this line to make the query accessible inside the component's methods
        }
    },
    components: {
        RepCard,
        UserProfileCard
    },
    methods: {
        async exibemais() {
        const page = Math.ceil(this.dataRepo.length / 4) + 1; // calculate next page number
        try {
        const response = await fetch(`https://api.github.com/users/${this.query}/repos?page=${page}&per_page=4`);
        const data = await response.json();
        this.dataRepo = [...this.dataRepo, ...data]; // append new data to existing list
    } catch (error) {
        console.error('Error fetching data:', error);
  }
}
    }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.repo-list {
    text-align: center;
    padding: 50px;
    width: 100%;
}

.main-container-userselec {
    font-family: 'Rubik';
    display: flex;
    text-align: center;
    margin: 50px;
}

ul {
    padding-left: 70px;
}

li {
    list-style: none;
    border-bottom: 1px solid #000000;
}

button {
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 0.5rem 2rem;
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 24px;
    cursor: pointer;
    transition: 0.5s;
    margin-top: 74px;
}

button:hover {
    background: #000000;
    color: #FFFFFF;
}

@media (max-width: 768px) {
    .main-container-userselec {
        font-family: 'Rubik';
        display: grid;
        text-align: center;
        margin: 50px;
    }

    .repo-list {
        text-align: center;
        padding: 10px;
        width: 100%;
    }

    ul {
        margin-top: 20px;
        padding: 0px;
    }
}
</style>