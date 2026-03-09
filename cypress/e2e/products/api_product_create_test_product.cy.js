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