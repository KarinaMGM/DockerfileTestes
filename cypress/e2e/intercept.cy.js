/// <reference types="cypress" />

const { email, password } = require('../fixtures/data.json')
const { homePage } = require('../support/pages/home.page')

describe('Teste de', () => {
    before(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit("/")
    });

    beforeEach(() => {
        cy.login(email, password)
    });

    it('Teste de intercept', () => {
        // Interceptar a requisição e responder com o arquivo de fixture
        cy.intercept('GET', 'http://lojaebac.ebaconline.art.br/public/getProducts?limit=10&skip=0', {
            fixture: 'products2.json'
        }).as('getProducts');
        // Visitar a página que faz a requisição
        cy.visit('/');
        // Esperar pela requisição interceptada
        cy.wait('@getProducts');
        // Adicionar um produto ao carrinho
        homePage.addProdutoCarrinho()
        // Confirmar que o produto foi adicionado ao carrinho
        homePage.confirmarCompra().should('have.length.greaterThan', 0)
    });
});
