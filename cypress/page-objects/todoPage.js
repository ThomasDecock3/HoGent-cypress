export const todoPage = {
    title: '.app-title',
    showallradiobutton: '#mat-radio-2-input',
    showalllabel: '#mat-radio-2 > .mdc-form-field > label',
    showincompleterb: '#mat-radio-3-input',
    showincompletelabel: '#mat-radio-3 > .mdc-form-field > label',
    columns: {
        complete: '.cdk-column-complete',
        description: '.cdk-column-description'
    },
    rows: {
        first: ':nth-child(1) > .table-row',
        second: ':nth-child(2) > .table-row'
    },
    completebutton: '#btn-complete-todo-2 > .mat-mdc-button-touch-target',
    completebuttonlabel: '.mdc-button__label > span',
    detailbutton: {
        first: ':nth-child(1) > .table-row > [tabindex="0"] > .mat-mdc-button-touch-target',
        second: ':nth-child(2) > .table-row > [tabindex="0"] > .mat-mdc-button-touch-target',
    },
    edittodobutton: {
        first: ':nth-child(1) > .table-row > :nth-child(1) > .mat-mdc-button-touch-target',
        second: ':nth-child(2) > .table-row > :nth-child(1) > .mat-mdc-button-touch-target',
    },
    description: {
        first: ':nth-child(1) > .table-row > .description-text',
        second: ':nth-child(2) > .table-row > .description-text',
    },
    completedicon: {
        first: '#icn-completed-todo-2',
        second: '#icn-completed-todo-1'
    }

}