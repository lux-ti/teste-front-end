# Lux One - Teste Front-End
Esse projeto contém um arquivo README.md contendo todas as especificações para o teste de Front-end da Lux-One para nível Júnior.

## Proposta

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios de um determinado usuário. Esta aplicação deve funcionar nos principais navegadores.

## Requisitos
- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo visualizar os detalhes desse usuário que foi buscado (organização, localização, número de seguidores, repositórios e stars);
- Eu, como usuário, desejo visualizar a lista de repositórios do usuário buscado, ordenando pela quantidade de estrela de forma decrescente;
- Eu, como usuário, desejo adicionar repositórios em uma lista de repositórios favoritos e conseguir acessa-los em uma página "Favoritos".

## Navegação
- Ao buscar um usuário pelo login do github, redirecionar para página de resultados da busca.
- Se o usuário for encontrado, apresentar os detalhes do usuário, senão, exibir mensagem amigável.

## Guia de estilo
https://www.figma.com/file/tN2N6ewvYvn3Mr3HPWKzhD/Desafio-Lux?node-id=0%3A1

## Integração com a API
  
URL Base: https://developer.github.com/v3/  
Informações do usuário: https://api.github.com/users/{username}  
Repositório de um usuário: https://api.github.com/users/{username}/repos

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
