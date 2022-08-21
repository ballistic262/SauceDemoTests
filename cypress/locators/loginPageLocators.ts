class loginPage {

    loginWrapper() {
        return cy.get('.login_wrapper')
    }

    usernameInput() {
        return cy.get('[data-test="username"]')
    }

    passwordInput() {
        return cy.get('[data-test="password"]')
    }

    loginBtn() {
        return cy.get('[data-test="login-button"]')
    }

    errorMsg() {
        return cy.get('[data-test="error"]')
    }

}

export default loginPage