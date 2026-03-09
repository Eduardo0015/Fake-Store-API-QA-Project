<<<<<<< HEAD
it('Should get all carts', () => {
    const cart = {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 1
            }
        ],  
        "__v": 1
    }

    cy.request({
        method: 'GET',
        url:'https://fakestoreapi.com/carts',
        body: cart
    }).then((response) => {
        expect(response.status).to.be.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
    })

    
=======
it('Should get all carts', () => {
    const cart = {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 1
            }
        ],  
        "__v": 1
    }

    cy.request({
        method: 'GET',
        url:'https://fakestoreapi.com/carts',
        body: cart
    }).then((response) => {
        expect(response.status).to.be.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
    })

    
>>>>>>> 0bde45c29466be2356c5a037fb16449b103f7b64
})