const apiEndpoints = [];

console.debug({ chrome }, 'background')
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.debug({ details });
    if (details.method === "GET" || details.method === "POST") {
      const endpoint = `${details.url} ${details.method}`;
      apiEndpoints.push(endpoint);
      console.log({background: endpoint});
    }
  },
  { urls: ["<all_urls>"] }
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getApiEndpoints") {
    sendResponse({ apiEndpoints });
  }
});