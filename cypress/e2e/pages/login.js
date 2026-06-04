class LoginPage {

  userName_input = '[name="username"]'
  password_input = '[name="password"]'
  login_button = '.oxd-button'

  enterUsername(username) {
    if (username === undefined || username === null) {
      throw new Error('LoginPage.enterUsername received undefined username')
    }
    cy.get(this.userName_input).type(username)
  }

  enterPassword(password) {
    if (password === undefined || password === null) {
      throw new Error('LoginPage.enterPassword received undefined password')
    }
    cy.get(this.password_input).type(password)
  }

 clickLogin() {
    cy.get(this.login_button).click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default LoginPage


