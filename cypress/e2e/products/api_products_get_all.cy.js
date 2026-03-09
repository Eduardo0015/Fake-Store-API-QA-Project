<<<<<<< HEAD
it('Should get all products', () => {

  const product = {
    title: "Structure Test Product",
    price: 30,
    description: "Testing response structure",
    image: "https://i.pravatar.cc",
    category: "electronics"
  }
  
  cy.request({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
    body: product
  }).then((response) => {
    expect(response.status).to.be.eq(200)
    expect(response.body).to.be.an('array')
    expect(response.body.length).to.be.greaterThan(0)
  })
=======
it('Should get all products', () => {

  const product = {
    title: "Structure Test Product",
    price: 30,
    description: "Testing response structure",
    image: "https://i.pravatar.cc",
    category: "electronics"
  }
  
  cy.request({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
    body: product
  }).then((response) => {
    expect(response.status).to.be.eq(200)
    expect(response.body).to.be.an('array')
    expect(response.body.length).to.be.greaterThan(0)
  })
>>>>>>> 0bde45c29466be2356c5a037fb16449b103f7b64
})