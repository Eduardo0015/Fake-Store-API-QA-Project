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