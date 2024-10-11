///  <reference types="cypress" />

describe('Funcionalidade Pagina de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click();
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        let quantidade = 5
        cy.get('[class="product-block grid"]').eq(3).click();
        cy.get('.button-variable-item-M').click();
        cy.get('.button-variable-item-Green').click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade);
        cy.get('.woocommerce-message').should('contain',  quantidade + ' × “Ajax Full-Zip Sweatshirt”')

    });
});