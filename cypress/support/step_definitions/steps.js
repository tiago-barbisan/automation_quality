import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Cypress.on('uncaught:exception', () => false)

Given('i access the login page', ()=>{
   // cy.visit('https://demo.automationtesting.in/Register.html')

   cy.visit('https://secure.smrholding.com/api/io/login?returnUrl=%2Fapi%2Fio%2Faccount')
})

When('i fill all input fields', ()=>{
    cy.get('[placeholder="E-mail"]').type('tiago.barbisan@acct.global')
    cy.get('[placeholder="Senha"]').type('@Aa12345')
    
    cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()
})

Given('i access homepage', ()=>{
    cy.visit('https://automationexercise.com/')
})

When('i access login page',()=>{
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

And('user fill username and password field and click submit',()=>{
    cy.get('[data-qa="login-email"]').type('tiago.barbisan@acct.global')
    cy.get('[data-qa="login-password"]').type('teste1234')
    cy.get('[data-qa="login-button"]').click()
})

Then('error message show display',()=>{
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
})
