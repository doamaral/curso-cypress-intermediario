/// <reference types="Cypress"/>

beforeEach(() => cy.login())
describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: "project-123",
            description: "lorem ipsum"
        }
        cy.gui_createProject(project);
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/project-123`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})
