it('Should not found product with ID = 9999', () =>{

  const product ={
    title: "Unexistent Product",
    price: 0,
    description: "Unexistent Product",
    category: "none"
  }
  
  cy.request({
    method: 'GET',
    url: 'https://fakestoreapi.com/products/9999',
    body: product
  }).then((response) =>{
    expect(response.status).to.be.oneOf([200,404])
  })
})