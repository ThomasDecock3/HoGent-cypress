import todoObject from '../data-objects/todoObject.json'
import { detailPage } from '../page-objects/detailPage'
import { editPage } from "../page-objects/editPage"
import { todoPage } from "../page-objects/todoPage"

const baseUrl = 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/api/todo'

describe('e2e - create and complete todo', () => {
    beforeEach(() => {
        cy.intercept('GET', baseUrl, {
            fixture: 'todo.json'
        }).as('todos')
        cy.visit('/')
    })

    it('Create and complete todo item', () => {

        cy.intercept('POST', baseUrl, {
            fixture: 'new-todo.json'
        }).as('new-todo')

        cy.intercept('PUT', baseUrl + '/complete/3', {
            fixture: 'complete-todo3.json'
        }).as('complete3')

        cy.get(todoPage.addbutton).should('be.visible').click()

        cy.get(editPage.title).should('have.text', todoObject.ADDTITLE)
        cy.get(editPage.descriptionlabel).should('have.text', 'Description')
        cy.get(editPage.description).should('be.empty')
        cy.get(editPage.cancelbutton).should('be.visible')
        cy.get(editPage.updatebutton).should('be.visible')
        cy.get(editPage.description).type(todoObject.DESCRIPTION.THIRD)
        cy.get(editPage.updatebutton).click()
        cy.wait('@new-todo')

        cy.get(todoPage.description.newlyadded).should('be.visible').and('have.text', todoObject.DESCRIPTION.THIRD)

        cy.get(todoPage.completebuttonnewlyadded).should('be.visible').click({force:true})

        cy.wait('@complete3')

        cy.get(todoPage.completedicon.third).should('be.visible')
    })

    it('Edit todo detail', () => {
        cy.intercept('GET', baseUrl + '/2', {
            fixture: 'detail.json'
        }).as('detail')

        cy.intercept('PUT', baseUrl + '/2', {
            fixture: 'update.json'
        }).as('update')

        cy.get(todoPage.detailbutton.first).click()
        cy.wait('@detail')
        
        cy.get(detailPage.unlockbutton).click()
        cy.get(detailPage.description).clear().type(todoObject.DESCRIPTION.SECOND)
        cy.get(detailPage.editbutton).click()
        cy.wait('@update')
    })
})
