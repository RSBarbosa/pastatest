describe('Página de cadastro', () => {
  it('Preencher os campos do formário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('renata@email.com.br');
    cy.get('[data-test="fullName"]').type('Renata Barbosa');
    cy.get('[data-test="registerUserName"]').type('renatabarbosa');
    cy.get('[data-test="registerPassword"]').type('Minhasenha01');
    cy.contains('button', 'Register').click();

  })
})