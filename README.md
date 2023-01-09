# Lux One - Teste Front-End Vue.JS
Esse projeto contém um arquivo README.md contendo todas as especificações para o teste de Front-end da Lux-One para nível Júnior.

## Proposta

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios de um determinado usuário. Esta aplicação deve funcionar nos principais navegadores.

## Requisitos
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=3145%3A63&t=ADFxoq9K71CaywhF-0" target="_blank">Resultado de busca por usuário</a>] Eu, como usuário, desejo buscar por um usuário do GitHub, me será mostrado uma lista com o(s) usuário(s) com o nome que eu digitei, onde será mostrado o nome de usuário (login). Quando eu clicar no nome do usuário desejo ir para a tela que mostrará os detalhes sobre o usuário;
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4678%3A100&t=ADFxoq9K71CaywhF-0" target="_blank">Usuário selecionado</a>] Eu, como usuário, desejo visualizar os detalhes desse(s) usuário(s) que foi buscado (organização, localização, número de seguidores e repositórios), onde os repositórios tem que ser ordenado em ordem <strong>DECRESCENTE</strong>;
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=3145%3A172&t=ADFxoq9K71CaywhF-0" target="_blank">Favoritos</a>] Eu, como usuário, desejo visualizar a tela com os repositórios que eu favoritei acessando na página de "Favoritos".
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4550%3A81&t=ADFxoq9K71CaywhF-0" target="_blank">Não encontrando usuário ou repositório</a>] Eu, como usuário, desejo visualizar um aviso informando que não foi possível encontrar um usuário ou um repositório.
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4549%3A81&t=ADFxoq9K71CaywhF-0" target="_blank">Página não encontrada</a>] Eu, como usuário, desejo visualizar uma tela de erro caso eu vá para alguma tela que não exista no projeto.

### Requisito Bônus
- [<a href="https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=4568%3A87&t=ADFxoq9K71CaywhF-0" target="_blank">Resultado de Busca por Repositório</a>] Eu, como usuário, desejo buscar por um repositório no GitHub, me será mostrado uma lista com o(s) repositório(s) com o nome que eu digitei, onde será mostrado o nome, descrição, quantidade de estrelas e poderei marcar algum repositório como favorito;

## Navegação
- Ao buscar um usuário pelo login do github, se o usuário for encontrado,redirecionar para página de resultados da busca e apresentar os detalhes do usuário, senão, exibir mensagem amigável.

## Guia de estilo
https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=0%3A1

## Integração com a API
  
- URL Base: https://developer.github.com/v3/  
- Informações do usuário: https://api.github.com/users/{username}  
- Repositório de um usuário: https://api.github.com/users/{username}/repos
- Pesquisar por usuários: https://api.github.com/search/users?q={nome_do_usuário}&page={número_da_página}
- Pesquisar por repositórios: https://api.github.com/search/repositories?q={nome_do_repositório}&page={número_da_página}

## Definição de pronto

O layout deve ser implementado de acordo com a especificação do Figma.  
É obrigatório o uso do Vue.js e opcionalmente, Nuxt.

## Critérios de avaliação

- **Organização do projeto**  
  _Avalia a estrutura do projeto, documentação e uso de controle de versão;_  
- **Inovação tecnológica**  
  _Avalia o uso de tecnologias mais recentes, desde que estáveis;_  
- **Coerência**  
  _Avalia se os requisitos foram atendidos;_
- **Boas práticas**  
  _Avalia se o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização;_

## Submissão

O desafio deve ser entregue pelo GitHub.  
A aplicação deve estar hospedada em algum lugar (Github Pages, Netlify, Heroku, Firebase, etc)  
Envie um Pull-Request para https://github.com/lux-ti/teste-front-end contendo o link público de teste do projeto.

Divirta-se!
