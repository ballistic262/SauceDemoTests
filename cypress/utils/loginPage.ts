import loginPageLocators from "../locators/loginPageLocators";
import User from "../interfaces/users";

const LoginPage = new loginPageLocators();

class loginPage {

    clickOnLoginButton = () => {

        LoginPage.loginBtn().click();

    }

    fillUsernameInput = (login: string) => {

        LoginPage.usernameInput().type(login);
        LoginPage.usernameInput().should('have.value', login);

    }
    
    fillPasswordInput = (password: string) => {

        LoginPage.passwordInput().type(password);
        LoginPage.passwordInput().should('have.value', password);

    }

    loginUser = (user: User) => {

        this.fillUsernameInput(user.login);
        this.fillPasswordInput(user.password);

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

        LoginPage.usernameInput().should('have.value', '');
        LoginPage.passwordInput().should('have.value', '');

    }

}

export default loginPage
