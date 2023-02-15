import todoObject from '../data-objects/todoObject.json'
import { editPage } from "../page-objects/editPage"
import { todoPage } from "../page-objects/todoPage"

const todoUrl = 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/api/todo'

describe('Todo edit page', () => {
    beforeEach(() => {
        cy.intercept('GET', todoUrl, {
            fixture: 'todo.json'
        }).as('todos')
        cy.visit('/')
    })
    it('Edit modal should be visible', () => {
        cy.get(todoPage.edittodobutton.first).click()
        cy.get(editPage.title).should('have.text', todoObject.EDITTITLE)
        cy.get(editPage.descriptionlabel).should('have.text', 'Description')
        cy.get(editPage.description).should('have.value', todoObject.DESCRIPTION.FIRST)
        cy.get(editPage.cancelbutton).should('be.visible')
        cy.get(editPage.updatebutton).should('be.visible')
    })

    it('Cancel editing todo', () => {
        cy.get(todoPage.description.first).should('have.text', todoObject.DESCRIPTION.FIRST)
            .get(todoPage.edittodobutton.first).click()
            .get(editPage.description).type('s')
            .get(editPage.cancelbutton).click()
            .get(todoPage.description.first).should('have.text', todoObject.DESCRIPTION.FIRST)
    })
    it('Update todo', () => {
        cy.intercept('PUT', 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/api/todo/2', {
            fixture: 'update.json'
        }).as('update')

        cy.get(todoPage.description.first).should('have.text', todoObject.DESCRIPTION.FIRST)
            .get(todoPage.edittodobutton.first).click()
            .get(editPage.description).type('s')
            .get(editPage.updatebutton).click()
            .wait('@update')
            .get(todoPage.description.first).should('have.text', todoObject.DESCRIPTION.SECOND)
    })
    it('Complete todo', () => {
        cy.intercept('PUT', 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/api/todo/complete/2', {
            fixture: 'complete.json'
        }).as('complete')

        cy.get(todoPage.completebutton).click({ force: true })
            .wait('@complete')
            .get(todoPage.completedicon.first).should('be.visible')
    })

})
