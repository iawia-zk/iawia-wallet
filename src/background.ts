/// <reference types="chrome"/>

chrome.runtime.onMessage.addListener(async (msg, sender) => {
  const currentWindow = await chrome.windows.getCurrent();

  if (msg.action === 'IMPORT_WALLET_MESSAGE') {
    chrome.tabs.create({
      url: chrome.runtime.getURL('onboarding.html'),
      active: true,
      windowId: currentWindow.id,
    });
  }

  if (msg.action === 'RUNTIME_IAWIA_OPEN_FULLSCREEN_PAGE') {
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

  if (msg.action === 'RUNTIME_IAWIA_REGISTER_SDK_TAB') {
    if (sender.tab?.id !== undefined) {
      chrome.storage.local.set({ sdkTabId: sender.tab.id });
    }
  }

  if (msg.action === 'RUNTIME_IAWIA_SEND__VERIFICATION_RESPONSE_TO_SDK') {
    chrome.storage.local.get('sdkTabId', ({ sdkTabId }) => {
      if (!sdkTabId) return;

      chrome.tabs.sendMessage(sdkTabId, {
        action: 'RUNTIME_IAWIA_FROM_WALLET_TO_SDK',
        payload: msg.payload,
      });
    });
  }
});
