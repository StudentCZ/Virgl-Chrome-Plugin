export class JobBoard {
  constructor (url, selectors) {
    this.title = this.queryElementText(selectors.jobTitle)
    this.companyElement = this.queryElementText(selectors.jobCompany)
    this.description = this.queryElementText(selectors.jobDescription)
    this.site = selectors.site
    this.url = url
  }

  queryElementText = (selector) => {
    return document.querySelector(selector)?.textContent ?? null
  }
}
