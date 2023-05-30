(async () => {
  const { addButton, BUTTON_ID } = await import(chrome.runtime.getURL('scripts/utils/helper.js'))
  const { SELECTORS, EVENTS } = await import(chrome.runtime.getURL('scripts/utils/constants.js'))
  const { sendJobInfoToExtension } = await import(chrome.runtime.getURL('scripts/utils/jobBoard.js'))

  const addButtonScript = (location) => {
    const baseUrl = window.location.origin
    const urlParams = (new URL(location)).searchParams
    const vjk = urlParams.get('vjk')
    const jk = urlParams.get('jk')
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

    if (vjk === null) {
      button.addEventListener('click', async () => {
        sendJobInfoToExtension(url, SELECTORS.indeed)
      })
    } else {
      button.addEventListener('click', async () => {
        // * check if the information is within an iframe or not
        const iframe = document.getElementById('vjs-container-iframe')
        const iframeDoc = iframe?.contentDocument ?? iframe?.contentWindow?.document
        sendJobInfoToExtension(url, SELECTORS.indeed, iframeDoc ?? document)
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
        console.log('Virgl Updated', req.payload)
        addButtonScript(req.payload)
        break
      default:
        console.log('default', req)
    }
  })
})()
