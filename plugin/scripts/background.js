import { saveJobApplication } from './utils/queries.js'

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  console.log(sender)
  sendResponse('Saving job info')
  try {
    await saveJobApplication(req)
    await chrome.tabs.sendMessage(sender.tab.id, 'Job info saved')
  } catch {
    await chrome.tabs.sendMessage(sender.tab.id, 'Job info failed to save')
  }
})
