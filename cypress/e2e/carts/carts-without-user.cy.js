it('Should show carts without users', () => {
    const cart = {
        "id": 1,
        "userId": 0,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 1
            }
        ],  
        "__v": 1
    }

    //Regra de negócios permite criação de carrinho sem usuário atrelado
    cy.request({
        method: 'POST',
        url:'https://fakestoreapi.com/carts',
        body: cart
    }).then((response) => {
        expect(response.status).to.be.eq(400)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
    })
})