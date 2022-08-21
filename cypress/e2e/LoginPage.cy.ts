import loginPage from '../utils/loginPage'
import * as users from '../datasets/users.json';
import * as loginPageCopy from '../datasets/loginPageCopy.json';

const LoginPage = new loginPage();

describe('LoginPage', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should login successfuly correct user', () => {

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.loginUser(users.standardUser);
    LoginPage.shouldLoginSuccessfuly();
  })

  it('should display error message for empty login and password inputs', () => {

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.shouldInputsBeEmpty();
    LoginPage.clickOnLoginButton();
    LoginPage.shouldDisplayLoginErrorMsg(loginPageCopy.errorMsg.emptyLogin);
    
  })

  it('should display error message for empty password input', () => {

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.shouldInputsBeEmpty();
    LoginPage.fillUsernameInput(users.standardUser.login)
    LoginPage.clickOnLoginButton();
    LoginPage.shouldDisplayLoginErrorMsg(loginPageCopy.errorMsg.emptyPassword);
    
  })

  it('should display error message for locked user data', () => {

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.loginUser(users.lockedOutUser);
    LoginPage.clickOnLoginButton();
    LoginPage.shouldDisplayLoginErrorMsg(loginPageCopy.errorMsg.lockedUser);

  })

  it('should display error message for wrong user data', () => {

    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.shouldDisplayLoginWrapper();
    LoginPage.loginUser(users.wrongUser);
    LoginPage.clickOnLoginButton();
    LoginPage.shouldDisplayLoginErrorMsg(loginPageCopy.errorMsg.wrongUser);
    
  })

})