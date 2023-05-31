import { EVENTS } from './utils/helper.js'
import { saveJobApplication, getUser } from './utils/queries.js'

(async () => {
  chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
    // todo: probably can have event names as well
    sendResponse('Saving job info')
    try {
      // todo: token from localstorage will be sent to saveJobApplication
      const user = await getUser()
      if (!user) throw new Error('Authentication failed')
      req.userId = user.id
      await saveJobApplication(req)
      chrome.tabs.sendMessage(sender.tab.id, { event: EVENTS.SAVE_JOB, payload: 'Job info saved' })
    } catch {
      chrome.tabs.sendMessage(sender.tab.id, { event: EVENTS.SAVE_JOB, payload: 'Job info failed to save' })
    }
  })

  chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
    // ? issue when going to https://ca.indeed.com/?from=gnav-homepage
    // ? not sure why it's giving out error message on sendMessage
    if (tab.url && tab.url !== 'https://ca.indeed.com/?from=gnav-homepage') {
      chrome.tabs.sendMessage(tabId, { event: EVENTS.PAGE_UPDATE, payload: tab.url })
    }
  })
})()
