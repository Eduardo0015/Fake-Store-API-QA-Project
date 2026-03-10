# Objetivo
Este projeto demonstra a execução de testes manuais e automatizados em uma API REST de e-commerce. O objetivo foi planejar cenários de teste, validar respostas da API, identificar possíveis defeitos e implementar verificações automatizadas utilizando Cypress.

# Sistema de testes
- Fake Store API - API pública utilizada para simular funcionalidades de um sistema de e-commerce.

# Estratégia de testes
A abordagem de testes incluiu:

- Testes funcionais de API
- Cenários positivos e negativos
- Validação de status codes
- Validação da estrutura das respostas JSON
- Verificação de regras de negócio
- Automação de endpoints críticos

# Coberturas de testes
Endpoints testados:
- Autenticação(Login)
- Página de produtos
- Carrinho de compras

# Artefatos produzidos durante os testes:
- 13 casos de teste
- 9 Testes automatizados (Cypress)
- 3 Arquivos de coleção do Postman
- 1 Test plan
- 1 Bug report

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
- Buscar todos os carrinhos existentes
- Buscar carrinho especifico existente

# Automação
Os testes automatizados validam:
- Status codes HTTP
- Estrutura das respostas da API
- Presença de campos obrigatórios
- Tipos de dados
- Estruturas aninhadas (produtos dentro do carrinho)

# Bugs identificados
Durante os testes foi identificado um possível problema de regra de negócio: a API permite a criação ou atualização de produtos com valores inválidos (por exemplo, preço negativo), comportamento que normalmente deveria ser rejeitado pelo sistema.

# Como executar
1. Instalar as dependências
2. Executar os testes com Cypress
- npm install
- npx cypress open

# Postman
A coleção Postman está disponível na pasta /postman e contém testes automatizados de login com validação de status code e estrutura de resposta.
