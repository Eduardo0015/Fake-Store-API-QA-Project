<<<<<<< HEAD
it('Should not validate incomplete product', () =>{

  const product = {
    title: "Incomplete Product"
  }

  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    body: product
  }).then((response) => {
    expect(response.status).to.eq([400])
  })
=======
it('Should not validate incomplete product', () =>{

  const product = {
    title: "Incomplete Product"
  }

  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    body: product
  }).then((response) => {
    expect(response.status).to.eq([400])
  })
>>>>>>> 0bde45c29466be2356c5a037fb16449b103f7b64
})