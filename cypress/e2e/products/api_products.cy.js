describe('POST /products', () =>{
    it('Should create a product successfully', () =>{
        const product = {
            title: "QA Automation Product",
            price: 25.50,
            description: "Created during Cypress API test",
            image: "https://i.pravatar.cc",
            category: "Eletronics"
        }

        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/products',
            body: product
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(product.title)
            expect(response.body.price).to.eq(product.price)
        })
    })

})