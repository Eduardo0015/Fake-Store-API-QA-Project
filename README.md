# Objetivo
Projeto de automação de testes de API utilizando Cypress para validar endpoints da Fake Store API.
Os testes cobrem cenários positivos e negativos relacionados a produtos e autenticação.

# Sistema de testes
- Fake Store API

# Funcionalidades testadas
- Login
- Página de produtos
- Carrinho

# Tecnologias usadas
- Postman
- Cypress
- Github
- Javascript
- Node.js
- REST API

# Cenários testados
- Criar produto válido
- Criar produto com preço negativo (Teste negativo)
- Buscar produto existente
- Atualizar produto
- Login com credenciais válidas
- Login com credenciais inválidas

# Bugs identificados
- Durante os testes, foi identificado que a API permite criar produtos com preço negativo, o que caracteriza falha na regra de negócio

# Como executar
- npm install
- npx cypress open

# Postman
A coleção Postman está disponível na pasta /postman e contém testes automatizados de login com validação de status code e estrutura de resposta.
