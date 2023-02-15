import { editPage } from "../page-objects/editPage"
import { todoPage } from "../page-objects/todoPage"

const todoUrl = 'http://localhost:4200/api/todo'

describe('Todo edit page', () => {
    beforeEach(() => {
        cy.intercept('GET', todoUrl, {
            fixture: 'todo.json'
        }).as('todos')
        cy.visit('/todo')
    })
    it('Edit modal should be visible', () => {
        cy.get(todoPage.edittodobutton.first).click()
        cy.get(editPage.title).should('have.text', 'Edit todo')
        cy.get(editPage.descriptionlabel).should('have.text', 'Description')
        cy.get(editPage.description).should('have.value', 'clean my garage')
        cy.get(editPage.cancelbutton).should('be.visible')
        cy.get(editPage.updatebutton).should('be.visible')
    })

    it('Cancel editing todo', () => {
        cy.get(todoPage.description.first).should('have.text', 'clean my garage')
            .get(todoPage.edittodobutton.first).click()
            .get(editPage.description).type('s')
            .get(editPage.cancelbutton).click()
            .get(todoPage.description.first).should('have.text', 'clean my garage')
    })
    it('Update todo', () => {
        cy.intercept('PUT', 'http://localhost:4200/api/todo/2', {
            fixture: 'update.json'
        }).as('update')

        cy.intercept('PUT', 'http://localhost:4200/api/todo/complete/2', {
            fixture: 'complete.json'
        }).as('complete')

        cy.get(todoPage.description.first).should('have.text', 'clean my garage')
            .get(todoPage.edittodobutton.first).click()
            .get(editPage.description).type('s')
            .get(editPage.updatebutton).click()
            .wait('@update')
            .get(todoPage.description.first).should('have.text', 'make my home work')

        cy.get(todoPage.completebutton).click({ force: true })
            .wait('@complete')
            .get(todoPage.completedicon.first).should('be.visible')
    })

})
