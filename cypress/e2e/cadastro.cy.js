describe('Realizar cadastro', () =>{
beforeEach(function(){
  cy.visit('http://localhost:4200/#/home')
})

describe('Happy path', () => {
  it('Preencher os campos do formário corretamente para cadastrar um novo usuário', () => {
    cy.wait(10000)
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('renata@email.com.br');
    cy.get('[data-test="fullName"]').type('Renata Barbosa');
    cy.get('[data-test="registerUserName"]').type('renatabarbosa');
    cy.get('[data-test="registerPassword"]').type('Minhasenha01');
    cy.contains('button', 'Register').click();
  })
})
describe('Unhappy path', () =>{
  it('Deixar os campos do formário de cadastro vazio para aparecer mensagem de erro', () => {
    cy.wait(10000)
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })
})
})
