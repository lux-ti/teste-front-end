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
            <button @click="exibemais()" id="pessoa">Ver mais repositórios</button>
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
        console.log(dataRepo)
        return {
            data,
            dataRepo
        }
    },
    components: {
        RepCard,
        UserProfileCard
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
</style>