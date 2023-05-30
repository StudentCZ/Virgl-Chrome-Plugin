// const tabObj = {}
// const urlStatus = {
//   complete: true,
//   loading: false
// }

// chrome.tabs.onActivated.addListener(async (tab) => {
//   if (tabObj[tab.tabId] === undefined) {
//     tabObj[tab.tabId] = {};
//   }
//   const [tabQuery] = await chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true,
//   });
//   tabObj[tab.tabId] = {
//     ...tabObj[tab.tabId],
//     isComplete: urlStatus[tabQuery.status],
//     url: tabQuery.url,
//   };
//   chrome.tabs.sendMessage(tab.tabId, tabObj[tab.tabId]);
// });

// chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
//   if (tabObj[tabId] === undefined) {
//     tabObj[tabId] = {};
//   }
//   if (tab.url) {
//     tabObj[tabId] = {
//       ...tabObj[tabId],
//       isComplete: urlStatus[tab.status],
//       url: tab.url,
//     };
//   }

//   if (tab.status === 'complete') {
//     tabObj[tabId] = { ...tabObj[tabId], isComplete: urlStatus[tab.status] };
//   }

//   chrome.tabs.sendMessage(tabId, tabObj[tabId]);
//   console.log(tabObj);
// });

// chrome.tabs.onDetached.addListener((tabId) => {
//   console.log('detached', tabId);
// });

// todo: data fetching here

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('sender', sender.tab)
  console.log('request', req);
  sendResponse('Data received')
})
