"use strict";
var globalSettings = new Settings();
const log = (t, e) => {
  console.log(`${t} =>`, e);
};
var searchConfig = {
  collection_id: 0,
  top_host_page_size: 30,
  recent_visit_page_size: globalSettings.pageSize(),
  top_visit_page_size: 10,
  host: "",
  search_term: "",
  is_pinned: !1,
  current_page: 1,
  total_records: 0,
  is_advanced_search: !1,
  adv_search_keywords: "",
  adv_search_date_from: "",
  adv_search_date_to: "",
  adv_search_domain: "",
  adv_search_url: "",
};
let cid = utils.getParamFromUrl(window.location ?? "index.html", "cid");
const worker = new QueryableWorker(
    "assets/js/worker_with_db.js?sqlite3.dir=jswasm"
  ),
  buffer = new SharedArrayBuffer(16);
function attachEventListenerToStartpageOption() {
  const t = document.getElementById("start_page_cid");
  t.addEventListener("change", function (e) {
    globalSettings.setStartPage(t.value),
      utils.logInfo(`Option value: ${globalSettings.startPage()}`);
  });
}
function attachEventListenerToPagesizeOption() {
  const t = document.getElementById("page-size");
  t.addEventListener("change", function (e) {
    globalSettings.setPageSize(t.value),
      utils.logInfo(`Option value: ${globalSettings.startPage()}`);
  });
}
function attachEventListenerToEnableAutoBackupOption() {
  const t = document.getElementById("chk-auto-backup");
  t.addEventListener("click", function (e) {
    globalSettings.setEnableAutoBackup(t.checked),
      utils.logInfo(`Option value: ${globalSettings.enableAutoBackup()}`);
  });
}
function attachEventListenerToBackupModeOption() {
  const t = document.querySelectorAll("input[name=setting-backup-mode]");
  for (let e = 0; e < t.length; e++)
    t[e].addEventListener("click", function (n) {
      let o = t[e].value;
      globalSettings.setBackupMode(o),
        utils.logInfo(`Option value: ${globalSettings.backupMode()}`);
    });
}
function attachEventListenerToBackupIntervalOption() {
  const t = document.getElementById("setting-backup-interval");
  t.addEventListener("change", function (e) {
    let n = t.value;
    Number.isInteger(Number.parseInt(n)) && n > 0
      ? (globalSettings.setBackupInterval(n),
        utils.logInfo(`Option value: ${globalSettings.enableAutoBackup()}`))
      : window.alert("Please input a integer");
  });
}
function attachEventListenerToEnableCompressOption() {
  const t = document.getElementById("chk-compress");
  t.addEventListener("click", function (e) {
    globalSettings.setEnableCompress(t.checked),
      utils.logInfo(`Option value: ${globalSettings.enableCompress()}`);
  });
}
function attachEventListenerToExport() {
  document
    .getElementById("setting-export")
    .addEventListener("click", function (t) {
      exporter.sendExportRequest(globalSettings, worker),
        utils.logInfo("Export button clicked");
    });
}
function attachEventListenerToImport() {
  document
    .getElementById("setting-import")
    .addEventListener("change", importer.importHandler);
}
worker.postMessage(buffer),
  worker.addListener("gotAutoBackupData", (t) => {
    utils.logInfo(`gotAutoBackupData: ${t.data.length} visits`),
      exporter.exportAndSaveToFile(
        globalSettings,
        t,
        function (t) {
          utils.logInfo(t);
        },
        function (t) {
          utils.logError(t);
        }
      );
  }),
  worker.addListener("gotExportHistoryData", (t) => {
    utils.logInfo(`gotExportHistoryData: ${t.data.length} visits`),
      exporter.exportAndSaveToFile(
        globalSettings,
        t,
        !0,
        function (t) {
          utils.logInfo(t);
        },
        function (t) {
          utils.logError(t);
        }
      );
  }),
  worker.addListener("importUrlSuccess", (t) => {
    utils.logInfo(`importUrlSuccess: ${t} visits`);
  }),
  worker.addListener("updateProgressBar", (t) => {
    utils.logInfo(JSON.stringify(t));
    var e = t.type,
      n = t.msg,
      o = t.total,
      a = (t.finished, t.percentage);
    const i = document.querySelector(".modal"),
      s = document.getElementById("modal-title"),
      r = document.getElementById("modal-subtitle");
    s.innerHTML = "";
    const l = document.createElement("span");
    if (
      ((l.textContent = "Importing history"),
      s.appendChild(l),
      (r.textContent = ""),
      o > 1e4)
    ) {
      const t = document.createElement("span");
      (t.textContent = "It takes 2~10 minutes. "), r.appendChild(t);
    }
    const c = document.createElement("a");
    c.setAttribute("href", utils.extensionPageUrl("options.html")),
      (c.textContent = "Refresh"),
      r.appendChild(c);
    const u = document.createElement("span");
    (u.textContent = " to import again if it stops."), r.appendChild(u);
    if ((i.classList.remove("hidden"), 1 == e)) {
      var g = document.getElementById("modal-progressBar"),
        d = a;
      (g.style.width = d + "%"), (g.innerText = n);
    }
    if (2 == e) {
      var p = document.getElementById("modal-progressBar2"),
        m = a;
      (p.style.width = m + "%"), (p.innerText = n);
    }
    100 == a &&
      2 == e &&
      setTimeout(function () {
        i.classList.add("hidden");
      }, 2e3);
  }),
  (window.onload = function () {
    let t = globalSettings.startPage();
    utils.logInfo(`cid: ${t}`);
    "dark" === localStorage.getItem("theme") &&
      document.documentElement.setAttribute("data-theme", "dark"),
      ui.showLeftNav(t, !1),
      ui.showStartPageOptions(t),
      attachEventListenerToStartpageOption();
    let e = globalSettings.pageSize();
    ui.showPagesizeOptions(e),
      attachEventListenerToPagesizeOption(),
      ui.showBackupOptions(),
      attachEventListenerToEnableAutoBackupOption(),
      attachEventListenerToBackupModeOption(),
      attachEventListenerToBackupIntervalOption(),
      attachEventListenerToEnableCompressOption(),
      ui.showSettingExport(),
      attachEventListenerToExport(),
      ui.showSettingImport(),
      attachEventListenerToImport(),
      document
        .getElementById("theme-toggle")
        .addEventListener("click", function () {
          utils.toggleTheme();
        });
  });
