<template>
    <div class="main-container-userselec">
        <UserProfileCard :name=data.login :img-url=data.avatar_url :bio=data.bio :organization=data.company
            :location=data.location :repository=data.public_repos :followers=data.followers />
        <div>
            <ol>
                <li v-for="items in dataRepo">
                    <RepCard :id=items.id :titulo=items.name :descricao=items.description
                        :stars=items.stargazers_count />
                </li>
            </ol>
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
        //console.log(userSelec)
        const reqUserRepo = await fetch(`https://api.github.com/users/${userSelec}/repos?direction=desc`);
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

.main-container-userselec {
    font-family: 'Rubik';
    display: flex;
    text-align: center;
    margin: 50px;
}

ol {
    padding-left: 70px;
}

li {
    list-style: none;
    border-bottom: 1px solid #000000;
}
</style>