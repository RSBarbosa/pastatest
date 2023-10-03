describe('Página de login', () => {
  beforeEach(() => {
      cy.visit('http://localhost:4200');
      cy.intercept('POST', 'http://localhost:3000/user/login', {
              statusCode: 400
              }).as('stubPost')
  })
      
 it('Verifica mensagens de campos obrigatórios na página de login', () => {
   cy.wait(1000);
   cy.contains('User name is required!').should('be.visible');
   cy.contains('Password is required!').should('be.visible');
  })
      
   it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.wait(1000);
    cy.login('carowl', '12345678')
    cy.wait('@stubPost')
  })
})
