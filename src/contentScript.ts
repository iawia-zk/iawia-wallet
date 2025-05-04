interface IawiaConnectEvent {
  companyName: string;
  companyLogo: string;
  zkTypes: Array<
    | 'NATIONALITY_IS_TUR'
    | 'NATIONALITY_IS_NOT_TUR'
    | 'AGE_IS_OVER_18'
    | 'AGE_IS_OVER_24'
    | 'AGE_IS_UNDER_18'
    | 'GENDER_IS_MAN'
    | 'GENDER_IS_WOMAN'
    | 'PASSPORT_ID_IS_VALID'
    | 'NATIONALITY_ID_IS_VALID'
  >;
  circuits?: string[];
}

chrome.runtime.sendMessage({ action: 'RUNTIME_IAWIA_REGISTER_SDK_TAB' });

window.addEventListener('IAWIA_CONNECT', ((event: CustomEvent<IawiaConnectEvent>) => {
  const { companyName, companyLogo, zkTypes, circuits } = event.detail;

  chrome.runtime.sendMessage({
    action: 'RUNTIME_IAWIA_OPEN_FULLSCREEN_PAGE',
    data: {
      companyName,
      companyLogo,
      zkTypes,
      circuits,
    },
  });
}) as EventListener);

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'RUNTIME_IAWIA_FROM_WALLET_TO_SDK') {
    const event = new CustomEvent('IAWIA_WALLET_MESSAGE', {
      detail: message.payload,
    });

    window.dispatchEvent(event);
  }
});
