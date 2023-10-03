describe('Api Alurapic', () => {
  it('Fotos do usuário', () => {
    const tempoEsperado = Math.random() * 50;
    cy.request({
      method: 'GET',
       url: 'http://localhost:3000/carowl/photos',
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[1]).to.have.property('description')
      expect(res.body[1].description).to.be.not.equal("Hello")
      expect(res.duration).to.be.lte(tempoEsperado)
    })
  })
})