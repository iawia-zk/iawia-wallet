/// <reference types="chrome"/>

chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.action === 'IMPORT_WALLET_MESSAGE') {
    const currentWindow = await chrome.windows.getCurrent();

    chrome.tabs.create({
      url: chrome.runtime.getURL('onboarding.html'),
      active: true,
      windowId: currentWindow.id,
    });
  }
});
