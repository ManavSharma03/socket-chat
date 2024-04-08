const apiEndpoints = [];

console.debug({ chrome })
// chrome.webRequest.onBeforeRequest.addListener(
//   (details) => {
//     if (details.method === "GET" || details.method === "POST") {
//       const endpoint = `${details.url} ${details.method}`;
//       apiEndpoints.push(endpoint);
//       console.log({endpoint});
//     }
//   },
//   { urls: ["<all_urls>"] }
// );

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getApiEndpoints") {
    sendResponse({ apiEndpoints });
  }
});

//   "content_scripts": [
//     {
//       "matches": ["<all_urls>"],
//       "js": ["content.js"]
//     }
//   ],