<<<<<<< HEAD
Title: Carrinho sem Usuário atrelado

Description:
A API permite que um carrinho seja criado sem um usuário valido atrelado, violando a regra de negócios esperada para um sistema de e-commerce

Steps:
1. Enviar requisição POST /carts
2. Body com "userID" = 0 ou sem campo "userID"

Expected Result:
- Status code 400 Bad Request
- API deve rejeitar request

Actual Result:
- Status code 201 Created
=======
Title: Carrinho sem Usuário atrelado

Description:
A API permite que um carrinho seja criado sem um usuário valido atrelado, violando a regra de negócios esperada para um sistema de e-commerce

Steps:
1. Enviar requisição POST /carts
2. Body com "userID" = 0 ou sem campo "userID"

Expected Result:
- Status code 400 Bad Request
- API deve rejeitar request

Actual Result:
- Status code 201 Created
>>>>>>> 0bde45c29466be2356c5a037fb16449b103f7b64
