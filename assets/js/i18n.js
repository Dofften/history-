document.addEventListener('DOMContentLoaded', () => {  
    // get data from local messages
    (document.querySelectorAll('.i18n_message') || []).forEach(($trigger) => {
      const message_name = $trigger.dataset.i18n_name;

      $trigger.innerHTML = chrome.i18n.getMessage(message_name)
    });
  
});