(async () => {
  const baseUrl = window.location.origin
  const urlParams = new URLSearchParams(window.location.search)
  const jobNumber = urlParams.get('vjk') ?? urlParams.get('jk')
  const url = `${baseUrl}/viewjob?jk=${jobNumber}`

  const { addSaveButton } = await import(chrome.runtime.getURL('scripts/utils/helper.js'))
  const { SELECTORS } = await import(chrome.runtime.getURL('scripts/utils/constants.js'))
  const { JobBoard } = await import(chrome.runtime.getURL('scripts/utils/jobBoard.js'))

  const button = addSaveButton()

  button.addEventListener('click', async () => {
    const jobInfo = new JobBoard(url, SELECTORS.indeed)
    const response = await chrome.runtime.sendMessage(jobInfo)
    console.log('response', response)
  })
})()
