import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    }) 
            
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

            // código comentado omitido…

            Cadastro.acessarPaginaDeCadastro();
            Cadastro.preencherFormulario();
            Cadastro.submeterCadastro();
        
        })
  })

  

// Cadastro usando as classes feitas no javascript
