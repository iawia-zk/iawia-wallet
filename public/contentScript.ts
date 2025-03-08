window.addEventListener('IAWIA_CONNECT', () => {
  chrome.runtime.sendMessage({ action: 'OPEN_FULLSCREEN_PAGE' });
});
