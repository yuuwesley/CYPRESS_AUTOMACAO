/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type(faker.internet.password());
        cy.get(':nth-child(4) > .button').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.person.firstName());  // preciso descobrir o que usar nessa parte deprecated
        cy.get('#account_last_name').type(faker.person.lastName());   // preciso descobrir o que usar nessa parte deprecated
        cy.get('#account_display_name').type(faker.internet.userName()); 

        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });

});
