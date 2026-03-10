it('Should a especific cart', () => {
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
        url:'https://fakestoreapi.com/carts/1',
        body: cart
    }).then((response) => {
        expect(response.status).to.be.eq(200)
        expect(response.body).to.be.an('object')
    })
})