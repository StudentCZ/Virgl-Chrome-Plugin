export class JobBoard {
    constructor(selectors) {
        this.titleElement = this.queryElementText(selectors.jobTitle)
        this.companyElement = this.queryElementText(selectors.jobCompany)
        this.description = this.queryElementText(selectors.jobDescription)
    }

    queryElementText = (selector) => {
        return document.querySelector(selector)?.textContent ?? null
    }
}