export const SELECTORS = {
  indeed: {
    site: 'Indeed',
    jobTitle: '.jobsearch-JobInfoHeader-title',
    jobCompany: '.jobsearch-CompanyInfoContainer a:first-child',
    jobDescription: '#jobDescriptionText'
  },
  linkedin: {
    site: 'LinkedIn',
    jobTitle: '.jobs-unified-top-card__job-title',
    jobCompany: '.jobs-unified-top-card__company-name',
    jobDescription: '#job-details'
  }

}
