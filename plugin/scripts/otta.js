(async () => {
  const { addButton, chromeOnMessageListener, BUTTON_ID } = await import(chrome.runtime.getURL('scripts/utils/helper.js'))
  const { SELECTORS } = await import(chrome.runtime.getURL('scripts/utils/constants.js'))
  const { sendJobInfoToExtension } = await import(chrome.runtime.getURL('scripts/utils/jobBoard.js'))

  const getCurrentJobIdFromUrl = (location) => {
    const locationUrl = new URL(location)
    const pathPattern = /(?<=(\/jobs\/))\w+/
    const fromPathName = pathPattern.exec(locationUrl.pathname)?.[0]
    return fromPathName
  }

  const addButtonScript = (location) => {
    console.log({ location })
    const baseUrl = window.location.origin
    const currentJobId = getCurrentJobIdFromUrl(location)
    console.log(currentJobId)
    const url = `${baseUrl}/jobs/${currentJobId}`

    const existingButton = document.getElementById(BUTTON_ID)

    if (existingButton) {
      existingButton.remove()
    }

    if (!currentJobId) {
      return
    }

    const button = addButton()

    button.addEventListener('click', async () => {
      sendJobInfoToExtension(url, SELECTORS.otta)
    })
  }
  
  console.log({location: window.location.href})
  addButtonScript(window.location.href)

  chromeOnMessageListener(addButtonScript)
})()
