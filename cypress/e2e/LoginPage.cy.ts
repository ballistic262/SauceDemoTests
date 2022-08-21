import loginPage from '../utils/loginPage'
import * as users from '../datasets/users.json';
import * as loginPageCopy from '../datasets/loginPageCopy.json';

describe('LoginPage', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should login successfuly correct user', () => {
    
    const LoginPage = new loginPage();

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.loginUser(users.standardUser);
    LoginPage.shouldLoginSuccessfuly();
  })

  it('should display error message for empty login and password inputs', () => {
    
    const LoginPage = new loginPage();

    LoginPage.shouldInputsBeEmpty();
    LoginPage.clickOnLoginButton();
    LoginPage.shouldDisplayLoginErrorMsg(loginPageCopy.errorMsg.emptyLogin);
    
  })

})