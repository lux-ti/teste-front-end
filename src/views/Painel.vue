<template>
    <div class="painel">
        <header>
            <section ></section>
            <section >
                <div class="btn-search">
                    <input type="search" name="" id=""><button class="btn"><Icon icon="ant-design:search-outlined" color="white" width="15"/></button>
                </div>
            </section>
            <section ></section>
        </header>
        <main>
            <section class="section-l">
                <div class="image">
                    <img :src="url_image" :alt="name" style="width:100%">
                    <p v-text="name"></p>
                    
                    <p v-text="login"></p>
                </div>
                <div class="infos">
                    <div class="info">
                        <Icon icon="bi:briefcase-fill" /> {{company}}
                    </div>
                    <div class="info">
                        <Icon icon="carbon:location-filled" /> {{location}}
                    </div>
                    <div class="info">
                        <Icon icon="akar-icons:star" />  <span if="stars">{{stars}}</span>
                    </div>
                </div>
            </section>
            <section>
                <ul id="list1">
                    <li v-for="item in repos" :key="item.id">
                        <p v-text="item.name"></p>
                        <p v-text="item.full_name"></p>
                        <p><Icon icon="akar-icons:star" /> {{item.stargazers_count}}</p>
                    </li>
                </ul>
            </section>
            <section>
                LATERAL DIREITA
            </section>
        </main>
        <footer>
        </footer>
    </div>
</template>
<style scoped>
.painel{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
            "head head head",
            "main main main",
            "footer footer footer";
    grid-template-rows: 50px 1fr 30px;
}
header{
    padding: 5px;
    grid-area: 'head';
    display: grid;
    grid-template-columns: .5fr 1fr .2fr;
}
main{
    grid-area: 'main';
    display: grid;
    grid-template-columns: .5fr 1fr .2fr;
}
footer{
    grid-area: 'footer';
}
.btn{
    width: 50px;
    padding: 3px;
    background: #000;
}
.btn-search{
    display: flex;
    justify-content: flex-end;
}
.section-l{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.image{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}
.infos{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}
.info{
    display: flex;
    justify-content: flex-start;
    text-align: left;
}
#list1{
    list-style: none;
    overflow-y: auto;
    padding: 0px;
    text-align: center;
    margin-bottom: 5px;
}
#list1 li{
    padding: 5px;
}
</style>
<script>
import { Icon } from '@iconify/vue';
export default {
    name:'painel',
    components:{
        Icon
    },
    data(){
        return {
            name:null,
            login:null,
            url_image:null,
            company:null,
            location:null,
            repos:null,
            stars:0,
            data:null
        }
    },
    methods:{
        initial(){
            return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):this.back()
        },
        back(){
            location.href = '/'
            return false
        },
        async ajaxGet(){
            let resul= await fetch(`https://api.github.com/users/${this.login}/repos`)

            this.repos =  await resul.json()
            this.repos.forEach(start => {
                this.stars+=start.stargazers_count
            });
            console.log(this.repos)
        }
    },
    mounted(){
        this.data = this.initial();
        console.log(this.data)
        this.name = this.data.name
        this.login = this.data.login
        this.url_image=this.data.avatar_url
        this.company=this.data.company
        this.location=this.data.location
        this.ajaxGet()
    }
}
</script>
