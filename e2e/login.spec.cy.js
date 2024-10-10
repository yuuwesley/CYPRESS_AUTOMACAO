/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso', () => {

        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('.woocommerce-form > .button').click();

        cy.get('.page-title').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')
    });

    it('Deve apresentar mensagem de erro ao utilizar senha incorreta', () => {

        const invalidPassword = Cypress.env('invalidPassword');
        const username = Cypress.env('username');

        cy.get('#username').type(username);
        cy.get('#password').type(invalidPassword);
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?');
    });

    it('Deve apresentar mensagem de erro ao utilizar usuario incorreto', () => {

        const password = Cypress.env('password');
        const invalidUsername = Cypress.env('invalidUsername');

        cy.get('#username').type(invalidUsername);
        cy.get('#password').type(password);
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.');


    });

});