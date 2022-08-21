import loginPageLocators from "../locators/loginPageLocators";
import User from "../interfaces/users";

const LoginPage = new loginPageLocators();

class loginPage {

    clickOnLoginButton = () => {

        LoginPage.loginBtn().click();

    }

    loginUser = (user: User) => {

        LoginPage.usernameInput().type(user.login);
        LoginPage.passwordInput().type(user.password);

        this.clickOnLoginButton();

    }

    shouldDisplayLoginErrorMsg = (message: string) => {

        cy.url().should('eq', Cypress.config().baseUrl);
        LoginPage.loginWrapper().should('be.visible');
        LoginPage.errorMsg().should('contain', message);

    }

    shouldLoginSuccessfuly = () => {

        cy.url().should('not.eq', Cypress.config().baseUrl);
        LoginPage.loginWrapper().should('not.exist');

    }

    shouldDisplayLoginWrapper = () => {

        LoginPage.loginWrapper().should('be.visible');

    }

    shouldInputsBeEmpty = () => {

        LoginPage.usernameInput().should('be.empty');
        LoginPage.passwordInput().should('be.empty');

    }

}

export default loginPage
