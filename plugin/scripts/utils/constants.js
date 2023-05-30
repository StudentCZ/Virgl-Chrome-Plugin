export const SELECTORS = {
  indeed: {
    site: 'Indeed',
    jobTitle: '.jobsearch-JobInfoHeader-title',
    jobCompany: '.jobsearch-CompanyInfoContainer a:first-child',
    jobDescription: '#jobDescriptionText'
  }
}

export const EVENTS = {
  PAGE_UPDATE: 0,
  SAVE_JOB: 1
}
