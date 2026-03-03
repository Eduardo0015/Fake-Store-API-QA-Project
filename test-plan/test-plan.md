# Objetivo do projeto
Validar as principais funcionalidades da API Fake Store API garantindo que operações de autenticação, produtos e carrinho retornem respostas corretas, tratem erros adequadamente e mantenham consistência de dados.

# Escopo
1. Autenticação
- Login com credenciais válidas
- Login com senha inválida
- Login com usuário inexistente
- Campos obrigatórios ausentes
- Payload inválido

2. Produtos
- Listar produtos
- Buscar produto por ID válido e inválido
- Criar produto
- Atualizar produto
- Deletar produto

3. Carrinho
- Listar carrinhos
- Criar carrinho com produtos válidos
- Criar carrinho com produto inválido

# Fora do escopo
- Teste de segurança
- Teste de performance
- Teste de UI
- Testes mobile

# Tipos de testes
- Testes manuais exploratórios
- Testes de API com validação de status code
- Testes negativos
- Validação de schema de resposta
- Automação básica com Cypress

# Ferramentas utilizadas
- Postman
- Cypress
- Github
- VSCode

# Critério de sucesso
O projeto será considerado concluído quando:
- Todos os casos de teste planejados forem executados
- Bugs identificados forem documentados
- Testes automatizados executarem sem falha
- Documentação estiver disponível no repositório

# Estratégia de execução de testes
* Smoke tests (executados após novo deploy)
    - Login válido
    - Criação de novo usuário
    - Adição de itens ao carrinho
    - Checkout/Finalização de compra
Critério: Testar fluxos críticos que torna o sistema utilizavel e afetam a regra de negócios

* Regression tests (executados após mudanças)
    - Todos os testes de autenticação
    - Validação de status code
    - Validação de payload
    - Testes negativos
Critérios: Garantir que mudanças e novas funcionalidades não impactaram funcionalidades existentes