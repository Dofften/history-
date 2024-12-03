var page = "index.html";
function getOwnTabs() {
  return Promise.all(
    chrome.extension
      .getViews({ type: "tab" })
      .map(
        (e) =>
          new Promise((t) =>
            e.chrome.tabs.getCurrent((n) =>
              t(Object.assign(n, { url: e.location.href }))
            )
          )
      )
  );
}
async function openHistoryPlus(e) {
  const t = (await getOwnTabs()).find((t) => t.url.includes(e));
  t ? chrome.tabs.update(t.id, { active: !0 }) : chrome.tabs.create({ url: e });
}
function initRateButton() {
  document.querySelector(
    ".teaser"
  ).href = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`;
}
openHistoryPlus(page), initRateButton();
