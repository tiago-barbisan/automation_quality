/// <reference types="Cypress" />

const elSignup = require('./elements').ELEMENTS

class Signup{

     accessRegistrationPage(){
        
        cy.get(elSignup.signup_name).type('Tiago')
        cy.get(elSignup.signup_email).type('tiago.barbisan@acct.global')
        cy.get(elSignup.signup_button).click()
        
    }

    fillAllInputsAccount(){
         // input radio 
         cy.get(elSignup.account_gender).click()

         cy.get(elSignup.account_password).type('Pass1234')

        // campo aniversario select
        cy.get(elSignup.account_days).select('2')
        cy.get(elSignup.account_months).select('October')
        cy.get(elSignup.account_years).select('2000')
   
        cy.get(elSignup.account_newsletter).click()
        cy.get(elSignup.account_optin).click() 

         cy.get(elSignup.account_first_name).type('Tiago')
         cy.get(elSignup.account_last_name).type('Barbisan')
         cy.get(elSignup.account_company).type('Quality Digital')

         cy.get(elSignup.account_address).type('Rua das flores')

         cy.get(elSignup.account_country).select('Canada')
         cy.get(elSignup.account_state).type('Quebec')
         cy.get(elSignup.account_city).type('Alma')
         cy.get(elSignup.account_zipcode).type('A0A 0A0')

        cy.get(elSignup.account_mobile_number).type('11 99945-5050')

    }

}

export default new Signup()