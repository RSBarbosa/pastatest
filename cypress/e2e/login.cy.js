describe('Login', () =>{
  beforeEach(function(){
  cy.visit('http://localhost:4200/#/home')
  })

describe('Happy path', () =>{
  it('Deve realizar o login', () =>{
    cy.wait(1000)
    cy.get('[data-test="loginUserName"]').type('carowl');
    cy.get('[data-test="loginPassword"]').type('12345678')
    cy.contains('button', 'login').click()
  })


// Se usar cy.login pega a "função" que escrevi dentro do support/commands.js, se usar o código
// Que está comentado roda normal. Esse cy.login é para evitar repetição de código.

//  describe('Happy path', () =>{
// it('Deve realizar o login', () =>{
//   cy.login('carowl','12345678' );
// })
})

describe('Unhappy Path', () => {
 it('Verificar mensagem de campos obrigatórios', () => {
    cy.wait(1000);
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })
})
})
