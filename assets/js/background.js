chrome.runtime.onInstalled.addListener(function (n) {
  if ("install" == n.reason) {
    chrome.runtime.setUninstallURL &&
      chrome.runtime.setUninstallURL("https://forms.gle/5udKJYZfQ2sCL1BE8");
  }
});
