# GitHub Search - Lux One - Teste Front-End Vue.JS

Aplicação client-side, que consulta a API do GitHub e realiza uma pesquisa com base no nome do repositório e nome do usuário.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Requisitos implementados

- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=3145%3A63&t=ADFxoq9K71CaywhF-0" target="_blank">Resultado de busca por usuário</a>] O usuário é capaz de realizar buscas por usuários do GitHub. Após a pesquisa, uma lista com o(s) usuário(s) com o nome digitado é mostrada; nela é mostrado o nome de usuário (login). Quando o nome do usuário desejado é clicado, há o direcionamento para a tela que contém os detalhes sobre o usuário (Para realizar a busca, digitar o nome desejado e depois clicar no botão para selecionar se a busca será feita por repositório ou por usuário);
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4678%3A100&t=ADFxoq9K71CaywhF-0" target="_blank">Usuário selecionado</a>] O usuário é capaz de visualizar os detalhes desse(s) usuário(s) que foi buscado (organização, localização, número de seguidores e repositórios), e os repositórios estão ordenados em ordem <strong>DECRESCENTE</strong>;
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=3145%3A172&t=ADFxoq9K71CaywhF-0" target="_blank">Favoritos</a>] O usuário é capaz de visualizar a tela com os repositórios favoritados ao acessar a página de "Favoritos. O usúário ainda é capaz de remover itens da lista de favoritos, ao clicar na estrela à direita da tela;
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4550%3A81&t=ADFxoq9K71CaywhF-0" target="_blank">Não encontrando usuário ou repositório</a>] O usuário é capaz de visualizar um aviso informando que não foi possível encontrar um usuário ou um repositório, caso o input do formulário esteja vazio;
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4549%3A81&t=ADFxoq9K71CaywhF-0" target="_blank">Página não encontrada</a>] O usuário é capaz de visualizar uma tela de erro caso vá para alguma tela que não exista no projeto.

### Requisito Bônus

- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4568%3A87&t=ADFxoq9K71CaywhF-0" target="_blank">Resultado de Busca por Repositório</a>] O usuário é capaz de buscar por um repositório no GitHub, é mostrada uma lista com o(s) repositório(s) com o nome digitado, na qual é mostrado o nome, descrição, quantidade de estrelas. Nessa tela o usuário ainda é capaz de marcar algum repositório como favorito.
