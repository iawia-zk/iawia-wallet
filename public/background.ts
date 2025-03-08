/// <reference types="chrome"/>

chrome.runtime.onMessage.addListener(async (msg) => {
  const currentWindow = await chrome.windows.getCurrent();

  if (msg.action === 'IMPORT_WALLET_MESSAGE') {
    chrome.tabs.create({
      url: chrome.runtime.getURL('onboarding.html'),
      active: true,
      windowId: currentWindow.id,
    });
  }

  if (msg.action === 'OPEN_FULLSCREEN_PAGE') {
    const url = new URL(chrome.runtime.getURL('verification.html'));
    if (msg.data) {
      url.searchParams.append('data', JSON.stringify(msg.data));
    }

    chrome.tabs.create({
      url: url.toString(),
      active: true,
      windowId: currentWindow.id,
    });
  }
});
