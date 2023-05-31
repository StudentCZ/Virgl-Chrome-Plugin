(async () => {
    const { addButton, chromeOnMessageListener } = await import(chrome.runtime.getURL('scripts/utils/helper.js'))
  const { SELECTORS } = await import(chrome.runtime.getURL('scripts/utils/constants.js'))
  const { sendJobInfoToExtension } = await import(chrome.runtime.getURL('scripts/utils/jobBoard.js'))

  const getCurrentJobIdFromUrl = (location) => {
    const locationUrl = new URL(location)
    const urlParams = locationUrl.searchParams
    const fromParams = urlParams.get('currentJobId');
    const fromPathName = /(?<=(\/jobs\/view\/))\w+/.exec(locationUrl.pathname)?.[0]
    return fromParams ?? fromPathName
  }

  const addButtonScript = (location) => {
    const baseUrl = window.location.origin
    const currentJobId = getCurrentJobIdFromUrl(location)
    const url = `${baseUrl}/jobs/view/${currentJobId}`
    
    if (!currentJobId) {
        return
    }

    const button = addButton()

    button.addEventListener('click', async () => {
        sendJobInfoToExtension(url, SELECTORS.linkedin)
    })
  }

  addButtonScript(window.location.href)

  chromeOnMessageListener(addButtonScript)
})()