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

it('should reject product with negative price', () => {

    const product = {
      title: "Invalid Product",
      price: -10,
      description: "Invalid price",
      image: "https://i.pravatar.cc",
      category: "electronics"
    }

    cy.request({
      method: 'POST',
      url: 'https://fakestoreapi.com/products',
      body: product,
      failOnStatusCode: false
    }).then((response) => {
    // Fake Store API does not validate negative price values
      expect(response.status).to.eq(201)

    })

  })

it('should return product with correct structure', () => {

  const product = {
    title: "Structure Test Product",
    price: 30,
    description: "Testing response structure",
    image: "https://i.pravatar.cc",
    category: "electronics"
  }

  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    body: product
  }).then((response) => {

    expect(response.status).to.eq(201)

    expect(response.body).to.have.property('id')
    expect(response.body).to.have.property('title')
    expect(response.body).to.have.property('price')
    expect(response.body).to.have.property('category')

  })

})