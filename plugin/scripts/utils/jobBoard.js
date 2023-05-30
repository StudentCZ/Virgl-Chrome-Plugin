export class JobBoard {
  constructor (url, selectors, container = document) {
    this.title = this.queryElementText(selectors.jobTitle, container)
    this.companyElement = this.queryElementText(selectors.jobCompany, container)
    this.description = this.queryElementText(selectors.jobDescription, container)
    this.site = selectors.site
    this.url = url
  }

  queryElementText = (selector, container) => {
    return container.querySelector(selector)?.textContent ?? null
  }
}
