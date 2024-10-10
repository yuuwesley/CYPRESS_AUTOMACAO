/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')
    })

    it('Deve apresentar mensagem de erro ao utilizar senha incorreta', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        const senhaIncorreta = Cypress.env('senhaIncorreta')
        const username = Cypress.env('username')

        cy.get('#username').type(username)
        cy.get('#password').type(senhaIncorreta)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    })

    it('Deve apresentar mensagem de erro ao utilizar usuario incorreto', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        const password = Cypress.env('password')
        const usuarioIncorreto = Cypress.env('usuarioIncorreto')

        cy.get('#username').type(usuarioIncorreto)
        cy.get('#password').type(password)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')


    })

})