import LoginPage from './pages/login.js';
import PerformancePage from './pages/performance.js';

describe('Performance Page', () => {
  let loginPage;
  let performancePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    performancePage = new PerformancePage();

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.fixture('data').then(({ username, password }) => {
      loginPage.login(username, password);
    });
  });

  it.skip('Navigate to Performance Page', () => {
    performancePage.clickPerformanceMenu();
    cy.url().should('include', '/performance');
  });

  it('Employee Review', () =>{
    performancePage.clickPerformanceMenu();
    performancePage.enterEmployeeName('Christopher  Mcmillan');
    performancePage.selectJobTitle('Account Assistant');
    performancePage.selectSubUnit('Administration');
    performancePage.selectInclude('Current Employees Only');
   // performancePage.selectReviewStatus('In Progress');
    performancePage.enterFromDate('2023-01-01');
    performancePage.enterToDate('2023-12-31');
    performancePage.clickSubmit();


  })


});