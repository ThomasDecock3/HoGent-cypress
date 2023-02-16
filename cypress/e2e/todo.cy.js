import todoObject from '../data-objects/todoObject.json'
import { todoPage } from "../page-objects/todoPage"

const baseUrl = 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/api/todo'

describe('Todo homepage', () => {
    beforeEach(() => {
        cy.intercept('GET', baseUrl, {
            fixture: 'todo.json'
        }).as('todos')
        cy.visit('/')
        cy.wait('@todos')
    })

    it('App title should be visible', () => {
        cy.get(todoPage.title)
            .should('be.visible')
            .and('not.be.empty')
            .and('have.text', todoObject.TODOTITLE)
        // cy.get('.app-title').should('be.visible').and('not.be.empty').contains('Todo App')
    })
    it('Show All/Incomplete radio buttons should be visible', () => {
        cy.get(todoPage.showallradiobutton)
            .should('be.checked')
        cy.get(todoPage.showalllabel)
            .should('be.visible')
            .should('have.text', 'Show all')
        cy.get(todoPage.showincompleterb)
            .should('not.be.checked')
        cy.get(todoPage.showincompletelabel)
            .should('be.visible')
            .should('have.text', 'Show incomplete')
    })

    it('Column names should be visible', () => {
        cy.get(todoPage.columns.complete).should('have.text', 'Complete')
        cy.get(todoPage.columns.description).should('have.text', 'Description')
    })

    it('todo items should be shown', () => {
        cy.get(todoPage.rows.first).should('be.visible')
            .get(todoPage.completebutton).should('be.visible')
            .get(todoPage.completebuttonlabel).should('have.text', 'Complete')
            .get(todoPage.edittodobutton.first).should('be.visible')
            .get(todoPage.detailbutton.first).should('be.visible')
            .get(todoPage.description.first).should('have.text', todoObject.DESCRIPTION.FIRST)

        cy.get(todoPage.rows.second).should('be.visible')
            .get(todoPage.completedicon.first).should('be.visible')
            .get(todoPage.completebuttonlabel).should('have.text', 'Complete')
            .get(todoPage.edittodobutton.second).should('be.visible')
            .get(todoPage.detailbutton.second).should('be.visible')
            .get(todoPage.description.second).should('have.text', todoObject.DESCRIPTION.SECOND)
    })
})
