export const BUTTON_ID = 'virgl-save-job-button'

export const EVENTS = {
  PAGE_UPDATE: 0,
  SAVE_JOB: 1
}

export const addButton = (label = 'Save to My Jobs') => {
  const saveAppliedJob = document.createElement('button')
  document.body.append(saveAppliedJob)

  saveAppliedJob.innerText = label
  saveAppliedJob.id = BUTTON_ID

  saveAppliedJob.style.setProperty('position', 'fixed')
  saveAppliedJob.style.setProperty('left', '2rem')
  saveAppliedJob.style.setProperty('bottom', '2rem')
  saveAppliedJob.style.setProperty('padding', '1rem')
  saveAppliedJob.style.setProperty('z-index', '99999')
  saveAppliedJob.style.setProperty('cursor', 'pointer')
  saveAppliedJob.style.setProperty('background-color', 'blue')
  saveAppliedJob.style.setProperty('color', 'white')

  return saveAppliedJob
}

export const chromeOnMessageListener = (callbackScript) => {
  chrome.runtime.onMessage.addListener((req, _sender, _sendResponse) => {
    switch (req.event) {
      case EVENTS.SAVE_JOB:
        console.log('Virgl', req.payload)
        break
      case EVENTS.PAGE_UPDATE:
        console.log('Virgl Updated', req.payload)
        callbackScript(req.payload)
        break
      default:
        console.log('default', req)
    }
  })
}
