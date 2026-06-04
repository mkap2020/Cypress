export default class PerformancePage {

   
    //performanceMenu = 'a[href="/web/index.php/performance/viewPerformanceModule"]';

    performanceMenu(){
        return cy.get('a[href="/web/index.php/performance/viewPerformanceModule"]');
    }

    employeeNameLabel(){
        return cy.contains('label', 'Employee Name');
    }

    employeeNameInput(){
        return cy.contains('label', 'Employee Name')
            .parents('div.oxd-input-group')
            .find('input');
    }

    jobTitleDropdown(){
         return cy.contains('label', 'Job Title')
            .parents('div.oxd-input-group')
            .find('div.oxd-select-text-input');
    }
    subUnitDropdown(){
         return cy.contains('label', 'Sub Unit')
            .parents('div.oxd-input-group')
            .find('div.oxd-select-text-input');
    }

    includeDropdown(){
        return cy.contains('label', 'Current Employees Only')
            .parents('div.oxd-input-group')
            .find('div.oxd-select-text-input');
    }

    reviewStatusDropdown(){
        return cy.contains('label', 'Review Status')
        .parents('div.oxd-input-group')
        .find('div.oxd-select-text-input');
    }

    fromDateInput(){
        return cy.contains('label', 'From Date')
        .parents('.oxd-input-group')
        .find('input');
}
    

    toDateInput(){
        return cy.contains('label', 'To Date')
        .parents('.oxd-input-group')
        .find('input');
    }

    submitButton(){
        return cy.get('button[type="submit"]');
    }


    clickPerformanceMenu() {
        this.performanceMenu().click();
    }

    enterEmployeeName(employeeName) {
        this.employeeNameInput().clear().type(employeeName);
    }

    selectJobTitle(jobTitle) {
        this.jobTitleDropdown().click();
        cy.contains('div[role="option"]', jobTitle).click();
    }

    selectSubUnit(subUnit) {
        this.subUnitDropdown().click();
        cy.contains('div[role="option"]', subUnit).click();
    }

    selectInclude(includeOption) {
        this.includeDropdown().click();
        cy.contains('div[role="option"]', includeOption).click();
    }

    selectReviewStatus(reviewStatus) {
        this.reviewStatusDropdown().click();
        cy.contains('div[role="option"]', reviewStatus).click();
    }

    enterFromDate(fromDate) {
        this.fromDateInput().clear().type(fromDate);
    }

    enterToDate(toDate) {
        this.toDateInput().clear().type(toDate);
    }

    clickSubmit() {
        this.submitButton().click();
    }
}
