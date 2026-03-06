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
})