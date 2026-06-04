import LoginPage from './pages/login.js'

describe('Login Page', () => {
  let loginPage

  beforeEach(() => {
    loginPage = new LoginPage()
    
  })

  it('Login with valid credentials', () => {
    cy.fixture('data').then(({ username, password }) => {
      expect(username, 'fixture username').to.be.a('string').and.not.be.empty
      expect(password, 'fixture password').to.be.a('string').and.not.be.empty

      cy.log(`fixture username: ${username}`)
      cy.log(`fixture password: ${password}`)

      loginPage.enterUsername(username)
      loginPage.enterPassword(password)
      loginPage.clickLogin()
      cy.contains('Dashboard').should('be.visible')
    })
  })
  
})