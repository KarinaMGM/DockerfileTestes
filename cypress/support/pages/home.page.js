/// <reference types="cypress" />

export const homePage = {
    openMenu () {
        return cy.get('[href="/Tab/Account"] > .r-g6644c').click(),
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    },
    openLogin() {
        return cy.get('[href="/Tab/Account"]').click()
    },
    // openSearchProduct() {
    //     cy.get('[data-testid="search-products"]').click()
    // },
    // openCategoriesFilter() {
    //     cy.get('[data-testid="Category"]').click()
    // },
    // categories() {
    //     return cy.get('[data-testid^="search-category-"]')
    // },
    addProdutoCarrinho() {
        cy.get('[href="/Tab/Browse"]').click()
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
    },
    confirmarCompra(){
        return cy.get('[data-testid="itemsQty"]')
    }
}