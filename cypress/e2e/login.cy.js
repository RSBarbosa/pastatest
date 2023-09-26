describe('Login', () =>{
  beforeEach(function(){
  cy.visit('http://localhost:4200/#/home')
  })

// describe('Happy path', () =>{
  it('Deve realizar o login', () =>{
  //   cy.wait(1000)
  //   cy.get('[data-test="loginUserName"]').type('renatabarbosa');
  //   cy.get('[data-test="loginPassword"]').type('Minhasenha')
  //   cy.contains('button', 'login').click()

  // })
  cy.login('renatabarbosa','Minhasenha' );
})

// Se usar cy.login pega a "função" que escrevi dentro do support/commands.js, se usar o c´digo
// Que está comentado roda normal. Esse cy.login é para evitar repetição de código.

describe('Unhappy Path', () => {
  it('Verificar mensagem de campos obrigatórios', () => {
    cy.wait(1000)
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })
})
})

