const correctPassword = "Aaaaaaaaaa1**"
const incorrectPassword = "1111111111"
const email = "test@test.com"
const errorNotCorrectPassword = "Your password must be at least 10 characters";
const errorNotCorrectConfirmationPassword = "The passwords you entered didn't match – try again";


function openSite() {
    cy.visit('https://www.booking.com/')
}

function EnterTheEmail() {
    cy.get('button').contains('Register').click()
    cy.get('input[type="email"]').type(email)
    cy.get('button').type('submit').click()
}


function EnterThePassword() {
    cy.get('input[type="new_password"]').type(correctPassword)
    cy.get('input[id="confirmed_password"]').type(correctPassword)
    cy.get('button').type('submit').click()
}

function EnterIncorrectPassword() {
    cy.get('input[type="new_password"]').type(incorrectPassword)
    cy.get('input[id="confirmed_password"]').type(incorrectPassword)
    cy.get('button').type('submit').click()
}

function EnterIncorrectConfirmationPassword() {
    cy.get('input[type="new_password"]').type(correctPassword)
    cy.get('input[id="confirmed_password"]').type(incorrectPassword)
    cy.get('button').type('submit').click()
}

function verifyHomePageOpened() {
    cy.url().should('contain', 'index.html')
}

function verifyHomePageIsNotOpened() {
    cy.url().should('not.contain', 'index.html')
}

function verifyConfirmationPasswordError() {
    cy.get('input[id="confirmed_password-note"]').should('contain.text', errorNotCorrectConfirmationPassword)
}

function verifyPasswordError() {
    cy.get('input[id="new_password-note"]').should('contain.text', errorNotCorrectPassword)
}

function verifyUserNameProfile() {
    cy.get('input[data-testid="header-profile"]').should('contain.text', 'Your Account')
}
export default openSite();
export default EnterTheEmail;
export default correctPassword;
export default incorrectPassword;
export default EnterIncorrectConfirmationPassword;
export default verifyHomePageOpened;
export default verifyHomePageIsNotOpened;
export default verifyUserNameProfile;
export default verifyPasswordError;
export default verifyConfirmationPasswordError();