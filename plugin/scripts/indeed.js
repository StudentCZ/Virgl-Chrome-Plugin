(async () => {
  const { addButton, BUTTON_ID } = await import(chrome.runtime.getURL('scripts/utils/helper.js'))
  const { SELECTORS, EVENTS } = await import(chrome.runtime.getURL('scripts/utils/constants.js'))
  const { saveJobInfo } = await import(chrome.runtime.getURL('scripts/utils/jobBoard.js'))

  const addButtonScript = (location) => {
    const baseUrl = window.location.origin
    const urlParams = (new URL(location)).searchParams
    const vjk = urlParams.get('vjk')
    const jk = urlParams.get('jk')
    const from = urlParams.get('from')
    const jobNumber = vjk ?? jk
    const url = `${baseUrl}/viewjob?jk=${jobNumber}`

    const existingButton = document.getElementById(BUTTON_ID)

    if (existingButton) {
      existingButton.remove()
    }

    if (jobNumber === null) {
      return
    }

    const button = addButton('Save to My Jobs')

    if (from === null) {
      button.addEventListener('click', async () => {
        saveJobInfo(url, SELECTORS.indeed)
      })
    } else {
      button.addEventListener('click', async () => {
        const iframe = document.getElementById('vjs-container-iframe')
        const iframeDoc = iframe.contentDocument ?? iframe.contentWindow.document
        saveJobInfo(url, SELECTORS.indeed, iframeDoc)
      })
    }
  }

  addButtonScript(window.location.href)

  chrome.runtime.onMessage.addListener((req, _sender, _sendResponse) => {
    switch (req.event) {
      case EVENTS.SAVE_JOB:
        console.log('Virgl', req.payload)
        break
      case EVENTS.PAGE_UPDATE:
      default:
        console.log('Virgl', req.payload)
        addButtonScript(req.payload)
    }
  })
})()
