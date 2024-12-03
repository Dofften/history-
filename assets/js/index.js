"use strict";
var globalSettings = new Settings();
const log = (e, t) => {
  console.log(`${e} =>`, t);
};
var parent = this;
let cid_settings = globalSettings.startPage();
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
    period_date_from: "",
    period_date_to: "",
    period_search_type: "",
  },
  selectionList = { urlids_visitids: new Set(), urlids_urllist: new Set() };
(searchConfig.host = ""), (searchConfig.collection_id = cid_settings);
let cid = utils.getParamFromUrl(window.location ?? "index.html", "cid");
utils.logInfo(`[cid] : ${cid}`),
  cid ? (searchConfig.collection_id = cid) : (cid = -1);
const advSearchButton = document.getElementById("search-submit"),
  advSearchKeywordsElement = document.getElementById("search-keywords"),
  advSearchDateFromElement = document.getElementById("search-date-from"),
  advSearchDateToElement = document.getElementById("search-date-to"),
  peroidDateFromElement = document.getElementById("period-date-from"),
  peroidDateToElement = document.getElementById("period-date-to"),
  peroidSearchTypeElement = document.getElementById("period-search-type"),
  advSearchDomainElement = document.getElementById("search-domain"),
  advSearchUrlElement = document.getElementById("search-url"),
  advSearchFlagElement = document.getElementById("is-advanced-search"),
  searchResultCountElement = document.getElementById("search-result-count");
searchConfig.is_advanced_search = advSearchFlagElement.checked;
const resultCountElement = document.getElementById("search-result-count");
let hasMoreRecord = function (e, t, n) {
  return e > t * n;
};
var saveHistoryStartPoint = globalSettings.lastHistorySavedPoint() ?? 0;
utils.logInfo(
  `maxVisitTime: ${new Date(saveHistoryStartPoint).toLocaleDateString()}`
);
var currentTimestamp = Date.now();
utils.logInfo(
  `saveHistoryStartPoint: ${new Date(
    saveHistoryStartPoint
  ).toLocaleDateString()}`
),
  utils.logInfo(
    `Syncing visits since ${new Date(
      saveHistoryStartPoint
    ).toLocaleDateString()}`
  );
const worker = new QueryableWorker(
    "assets/js/worker_with_db.js?sqlite3.dir=jswasm"
  ),
  buffer = new SharedArrayBuffer(16);
worker.postMessage(buffer);
const saveFromHistory = function () {
    (saveHistoryStartPoint = globalSettings.lastHistorySavedPoint() ?? 0),
      utils.logInfo(
        `maxVisitTime: ${new Date(saveHistoryStartPoint).toLocaleDateString()}`
      ),
      (currentTimestamp = Date.now()),
      utils.logInfo(
        `saveHistoryStartPoint: ${new Date(
          saveHistoryStartPoint
        ).toLocaleDateString()}`
      ),
      utils.logInfo(
        `Syncing visits since ${new Date(
          saveHistoryStartPoint
        ).toLocaleDateString()}`
      ),
      chrome.history.search(
        { text: "", maxResults: 2e9, startTime: saveHistoryStartPoint },
        function (e) {
          e.length &&
            worker.sendQuery("saveHistoryFromLastSavedPoint", {
              timeLastSaved: saveHistoryStartPoint,
              currentTime: currentTimestamp,
              historyItems: e,
            });
        }
      );
  },
  refreshStatsInfo = function (e) {
    let t = null,
      n = "",
      a = 0,
      i = 0,
      r = 0,
      s = window.navigator.language ?? "en-US";
    if (e && ((t = e.earliest_visit_time), t)) {
      (a = e.total_urls),
        (i = e.total_visits),
        utils.logInfo(`[stats] ${t} : ${i}`),
        (n = new Date(t).toLocaleDateString(s)),
        (r = Math.floor((Date.now() - t) / 1e3 / 60 / 60 / 24));
      let o = document.getElementById("stat-number");
      o && (o.innerHTML = `${i.toLocaleString(s)}`);
      let l = document.getElementById("stat-date");
      l &&
        ((l.innerHTML = `${chrome.i18n.getMessage("left_stats_days", [n, r])}`),
        (l.innerHTML += `<span class="tooltips">${chrome.i18n.getMessage(
          "left_stats_days_tooltip"
        )}</span>`));
    }
  },
  addListenerToWorker = function () {
    worker.addListener("syncSuccess", (e) => {
      1 == cid || (cid < 0 && 1 == cid_settings)
        ? ((searchConfig.collection_id = 0),
          (searchConfig.host = ""),
          (searchConfig.is_pinned = !0),
          clearMainContent(),
          worker.sendQuery("getPinnedUrlsByCollection", {
            searchConfig: searchConfig,
            callbackContentId: "history-urls",
          }),
          worker.sendQuery("getTopVisitsBySearch", {
            searchConfig: searchConfig,
            callbackContentId: "top-urls",
          }))
        : (getAdvSearchFormData(),
          worker.sendQuery("getTopHosts", {
            searchConfig: searchConfig,
            callbackContentId: "top-hosts",
          }),
          getVisitsDynamically(),
          worker.sendQuery("getTopVisitsBySearch", {
            searchConfig: searchConfig,
            callbackContentId: "top-urls",
          }),
          worker.sendQuery("closeDatabase", { force: !1 }));
    }),
      worker.addListener("syncUrlSuccess", (e) => {
        worker.sendQuery("getTopHosts", {
          searchConfig: searchConfig,
          callbackContentId: "top-hosts",
        });
      }),
      worker.addListener("gotAutoBackupData", (e) => {
        utils.logInfo(`gotAutoBackupData: ${e.data.length} visits`),
          exporter.exportAndSaveToFile(
            globalSettings,
            e,
            !1,
            function (e) {
              utils.logInfo(e);
            },
            function (e) {
              utils.logError(e);
            }
          );
      }),
      worker.addListener("findVisits", (e) => {
        utils.logInfo(
          `findVisits urls: ${e.urls.length} - ${e.urls[0].url} at ${e.urls[0].urlid}`
        );
        let t = 0,
          n = e.syncTimeConfig.currentTimestamp,
          a = e.syncTimeConfig.maxVisitTimeSynced,
          i = e.urls.filter((e) => e.url.indexOf("chrome-extension://") < 0);
        for (var r = 0; r < i.length; r++) {
          chrome.history.getVisits(
            { url: i[r].url },
            (function (e, t) {
              return function (n) {
                s(e, t, n);
              };
            })(i, r)
          ),
            t++;
        }
        var s = function (e, i, r) {
          (e[i].visitItems = []),
            r.sort(function (e, t) {
              return e.visitTime - t.visitTime;
            });
          for (var s = 0, o = a, l = 0; l < r.length; l++) {
            var c = r[l].visitTime;
            c < saveHistoryStartPoint ||
              (c - s > 1e3 && e[i].visitItems.push(r[l]),
              (s = c),
              c <= n && c > o && (o = c));
          }
          --t ||
            worker.sendQuery("saveVisits", { urls: e, maxVisitTimeSynced: o });
        };
      }),
      worker.addListener("doAlert", (e, t) => {
        alert(`Worker waited for ${e} ${t} :-)`);
      }),
      worker.addListener("waitAndReload", (e) => {
        utils.logInfo(`Reload in ${e} seconds.`),
          setTimeout(() => {
            chrome.tabs.reload();
          }, e);
      }),
      worker.addListener("updateProgressBar", (e) => {
        utils.logInfo(JSON.stringify(e));
        var t = e.type,
          n = e.msg,
          a = e.total,
          i = (e.finished, e.percentage);
        if (a < 100) {
          var r = document.getElementById("syncProgress");
          utils.logInfo(`[saving] ${a}`),
            r.classList.remove("off"),
            r.classList.add("on");
          var s = document.getElementById("progressBar"),
            o = document.getElementById("progressBar2");
          if (1 == t) {
            var l = i;
            (s.style.width = l + "%"), (s.innerText = n);
          }
          if (2 == t) {
            var c = i;
            (o.style.width = c + "%"), (o.innerText = n);
          }
          100 == i &&
            2 == t &&
            setTimeout(function () {
              r.classList.remove("on"),
                r.classList.add("off"),
                (s.style.width = "0%"),
                (s.innerText = ""),
                (o.style.width = "0%"),
                (o.innerText = "");
            }, 3e3);
        } else {
          const e = document.getElementById("modal-progress"),
            r = document.getElementById("modal-title"),
            d = document.getElementById("modal-subtitle");
          r.innerHTML = "";
          const u = document.createElement("span");
          (u.textContent = "Saving browsing history ( "), r.appendChild(u);
          const g = document.createElement("a");
          g.setAttribute("href", utils.extensionPageUrl("index.html")),
            (g.textContent = "Refresh"),
            r.appendChild(g);
          const h = document.createElement("span");
          (h.textContent = " if it stops)"),
            r.appendChild(h),
            (d.textContent = ""),
            a > 1e4 &&
              (d.textContent =
                "It takes 2~10 minutes for the first time. It will be in seconds afterward.");
          const m = function () {
            e.classList.add("hidden");
          };
          (function () {
            e.classList.remove("hidden");
          })();
          (s = document.getElementById("modal-progressBar")),
            (o = document.getElementById("modal-progressBar2"));
          if (1 == t) {
            l = i;
            (s.style.width = l + "%"), (s.innerText = n);
          }
          if (2 == t) {
            c = i;
            (o.style.width = c + "%"), (o.innerText = n);
          }
          100 == i &&
            2 == t &&
            setTimeout(function () {
              m(),
                (s.style.width = "0%"),
                (s.innerText = ""),
                (o.style.width = "0%"),
                (o.innerText = "");
            }, 2e3);
        }
      }),
      worker.addListener("setLastHistorySavedPoint", (e) => {
        utils.logInfo(`setLastHistorySavedPoint: ${e.timeLastSaved}`),
          globalSettings.setLastHistorySavedPoint(e.timeLastSaved);
      }),
      worker.addListener("gotTopVisitsByCollectionData", (e) => {
        var t = document.getElementById("top-urls");
        if (e.length > 0) {
          refreshStatsInfo(stats);
          for (let n = 0; n < e.length; n++) {
            let a = document.createElement("li"),
              i = document.createElement("img");
            i.setAttribute("align", "center"),
              i.setAttribute("src", utils.faviconURL(e[n].url, 32)),
              a.appendChild(i);
            let r = document.createElement("a");
            (r.innerHTML = e[n].title + " (" + e[n].total_visits + ")"),
              r.setAttribute("title", e[n].title),
              r.setAttribute("href", e[n].url),
              r.setAttribute("target", "_blank"),
              a.appendChild(r),
              t.appendChild(a);
          }
        }
      }),
      worker.addListener("gotTopHostsData", (e) => {
        var t = e.data,
          n = e.callbackContentId,
          a = document.getElementById(n);
        if (((a.innerHTML = ""), t.length > 0)) {
          let e = document.createElement("p");
          e.setAttribute("class", "host-icon");
          let n = document.createElement("a");
          "" == searchConfig.host
            ? n.setAttribute("class", "host-icon-link on")
            : n.setAttribute("class", "host-icon-link off"),
            n.setAttribute("title", "All"),
            n.setAttribute("data-host", "");
          let i = document.createElement("img");
          i.setAttribute(
            "src",
            utils.extensionPageUrl("assets/icon/all-32.png")
          ),
            i.setAttribute("width", 32),
            n.appendChild(i),
            e.appendChild(n),
            a.appendChild(e);
          for (let e = 0; e < t.length; e++) {
            let n = document.createElement("p");
            n.setAttribute("class", "host-icon");
            let i = document.createElement("a");
            i.setAttribute("class", "host-icon-link off"),
              i.setAttribute("title", t[e].host),
              i.setAttribute("data-host", t[e].host);
            let r = document.createElement("img");
            r.setAttribute("src", utils.faviconURL(t[e].url, 32)),
              i.appendChild(r),
              n.appendChild(i),
              a.appendChild(n);
          }
        }
        attachEventToWebIcon();
      }),
      worker.addListener("gotCurrentSearchExportData", (e) => {
        utils.logInfo(`gotCurrentSearchExportData: ${e.data.length} visits`),
          exporter.exportCurrentSearchAndSaveToFile(
            globalSettings,
            e,
            !0,
            function (e) {
              utils.logInfo(e);
            },
            function (e) {
              utils.logError(e);
            }
          );
      }),
      worker.addListener("gotVisitsBySearchData", (e) => {
        drawItemList(e);
      }),
      worker.addListener("gotTopVisitsBySearchData", (e) => {
        var t = e.data.data,
          n = e.data.stat[0];
        refreshStatsInfo(n);
        var a = e.callbackContentId,
          i = document.getElementById(a);
        i.innerHTML = "";
        var r = "";
        if (t.length > 0)
          for (let e = 0; e < t.length; e++) {
            let n = t[e].title ?? "";
            n.replace("'", "").replace('"', "");
            let a = t[e].title
              ? t[e].title.length > 20
                ? t[e].title.substr(0, 20)
                : t[e].title
              : "untitle";
            r += `\n                    <tr>\n                        <td>\n                            <img src="${utils.faviconURL(
              t[e].url,
              16
            )}" align="center" />\n                            <a href="${
              t[e].url
            }" title="${n}">${a}</a> (${
              t[e].total_visits
            })\n                        </td>\n                    </tr>\n                `;
          }
        let s = `\n        <table class="table is-fullwidth is-narrow">\n            ${r}\n        </table>\n        `;
        i.innerHTML = s;
      }),
      worker.addListener("gotDeleteVisitsData", (e) => {
        utils.logInfo(`[delete from page] ${JSON.stringify(e)}`);
        var t = e.data.items;
        e.callbackContentId;
        const n = document.getElementById("selected-urls-visits");
        if (t.length > 0) {
          let e = "",
            a = null,
            i = [];
          for (let n = 0; n < t.length; n++)
            (i = t[n].urlid_visitid.split("|")),
              i[1] &&
                ((e = `visit-${i[1]}`),
                (a = document.getElementById(e)),
                a && a.parentNode.removeChild(a),
                selectionList.urlids_visitids.has(`${i[0]}|${i[1]}`) &&
                  selectionList.urlids_visitids.delete(`${i[0]}|${i[1]}`));
          (n.value = [...selectionList.urlids_visitids]),
            refreshOverlayStatus();
        }
      }),
      worker.addListener("gotMoveUrlsIntoCategoryData", (e) => {
        var t = e.data.items;
        utils.logInfo(`[Move item from page] ${JSON.stringify(t)}`);
        e.callbackContentId;
        const n = document.getElementById("selected-urls-visits");
        if (t.length > 0) {
          let e = "",
            a = null,
            i = !1,
            r = null,
            s = [];
          for (let n = 0; n < t.length; n++)
            (s = t[n].urlid_visitid.split("|")),
              s[1] &&
                ((i = !1),
                searchConfig.collection_id > 0 &&
                  t[n].categoryid != searchConfig.collection_id &&
                  (i = !0),
                i &&
                  ((e = `visit-${s[1]}`),
                  (a = document.getElementById(e)),
                  a && a.parentNode.removeChild(a)),
                selectionList.urlids_visitids.has("" + (s[0] | s[1])) &&
                  selectionList.urlids_visitids.delete("" + (s[0] | s[1])),
                (r = document.getElementById(`checkbox-visit-${s[1]}`)),
                r && (r.checked = !1));
          (n.value = ""), clearSelections(), refreshOverlayStatus();
        }
      }),
      worker.addListener("gotPinUrlsData", (e) => {
        utils.logInfo(`[pin from page] ${JSON.stringify(e)}`);
        var t = e.data.items;
        if (t.length > 0) {
          let e = "",
            n = null,
            a = [];
          for (let i = 0; i < t.length; i++)
            if (((a = t[i].urlid_visitid.split("|")), a[0])) {
              (e = `icon-pin-${a[0]}`),
                (n = document.getElementsByClassName(e));
              for (let e = 0; e < n.length; e++)
                n[e].classList.remove("action-pin"),
                  n[e].classList.add("action-unpin"),
                  n[e].classList.remove("mdi-pin-outline"),
                  n[e].classList.add("mdi-pin");
            }
          clearSelections(), attachEventListenerToVisitList();
        }
      }),
      worker.addListener("gotUnPinUrlsData", (e) => {
        utils.logInfo(`[unpin from page] ${JSON.stringify(e)}`);
        var t = e.data.items;
        if (t.length > 0) {
          let e = "",
            n = null,
            a = [];
          for (let i = 0; i < t.length; i++)
            if (((a = t[i].urlid_visitid.split("|")), a[0])) {
              (e = `icon-pin-${a[0]}`),
                (n = document.getElementsByClassName(e));
              for (let e = 0; e < n.length; e++)
                n[e].classList.remove("action-unpin"),
                  n[e].classList.add("action-pin"),
                  n[e].classList.remove("mdi-pin"),
                  n[e].classList.add("mdi-pin-outline");
            }
          attachEventListenerToVisitList();
        }
      }),
      worker.addListener("gotGeneratePinnedUrlsData", (e) => {
        (searchConfig.collection_id = 0),
          (searchConfig.host = ""),
          (searchConfig.is_pinned = !0),
          clearMainContent(),
          worker.sendQuery("getPinnedUrlsByCollection", {
            searchConfig: searchConfig,
            callbackContentId: "history-urls",
          }),
          worker.sendQuery("getTopVisitsBySearch", {
            searchConfig: searchConfig,
            callbackContentId: "top-urls",
          });
      }),
      worker.addListener("gotPinnedUrlsByCollectionData", (e) => {
        var t = e.data;
        t.length > 0
          ? ((resultCountElement.innerText = t.length), drawPinItemList(e))
          : ((resultCountElement.innerText = 0),
            ui.showImportPinnUrls("history-urls"),
            attachEventListenerToImportButton());
      }),
      worker.addListener("gotVisitsBySearchTermData", (e) => {
        drawItemList(e);
      }),
      worker.addListener("gotVisitsByAdvancedSearch", (e) => {
        drawItemList(e);
      });
  };
function indexSyncHistory() {
  addListenerToWorker(),
    saveFromHistory(),
    exporter.sendAutoBackupRequest(globalSettings, worker);
}
function getVisitsDynamically(e) {
  e && e.host && (searchConfig.host = e.host),
    getAdvSearchFormData(),
    utils.logInfo(`[menu click] ${searchConfig.host}`),
    searchConfig.is_advanced_search
      ? worker.sendQuery("getVisitsByAdvancedSearch", {
          searchConfig: searchConfig,
          callbackContentId: "history-urls",
        })
      : worker.sendQuery("getVisitsBySearch", {
          searchConfig: searchConfig,
          callbackContentId: "history-urls",
        });
}
function getAdvSearchFormData() {
  let e = advSearchKeywordsElement.value,
    t = advSearchDateFromElement.value,
    n = advSearchDateToElement.value,
    a = advSearchDomainElement.value,
    i = advSearchUrlElement.value,
    r = advSearchFlagElement.checked;
  (searchConfig.is_advanced_search = r),
    (searchConfig.adv_search_keywords = e || ""),
    (searchConfig.adv_search_date_from = t || ""),
    (searchConfig.adv_search_date_to = n || ""),
    (searchConfig.adv_search_domain = a || ""),
    (searchConfig.adv_search_url = i || "");
  const s = document.getElementById("period-date-from"),
    o = document.getElementById("period-date-to");
  let l = s.value;
  searchConfig.period_date_from = l;
  let c = o.value;
  searchConfig.period_date_to = c;
  document.getElementById("period-search-type").value;
}
function clearAdvSearchFormData() {
  (advSearchKeywordsElement.value = ""),
    (advSearchDateFromElement.value = ""),
    (advSearchDateToElement.value = ""),
    (advSearchDomainElement.value = ""),
    (advSearchUrlElement.value = ""),
    (advSearchFlagElement.checked = !1);
}
indexSyncHistory(),
  (window.onload = function () {
    ui.showLeftNav(searchConfig.collection_id, !0),
      ui.pageI18n(),
      attachEventListenerToMenu(),
      attachEventListenerToSearchInput(),
      attachEventListenerToExportLink(),
      attachEventToAdvancedSearch(),
      attachEventToAdvancedSearchCheckbox(),
      attachEventListenerToOverlayButtons();
  }),
  document.addEventListener("DOMContentLoaded", () => {
    function e(e) {
      e.classList.add("hidden");
    }
    (document.querySelectorAll(".i18n_message") || []).forEach((e) => {
      const t = e.dataset.i18n_name;
      e.innerHTML = chrome.i18n.getMessage(t);
    }),
      (document.querySelectorAll(".js-modal-trigger") || []).forEach((e) => {
        const t = e.dataset.target,
          n = document.getElementById(t);
        e.addEventListener("click", () => {
          n.classList.remove("hidden");
        });
      });
    "dark" === localStorage.getItem("theme") &&
      document.documentElement.setAttribute("data-theme", "dark"),
      (
        document.querySelectorAll(".modal-close, .modal-card-head .delete") ||
        []
      ).forEach((t) => {
        const n = t.closest(".modal");
        t.addEventListener("click", () => {
          e(n);
        });
      }),
      document.addEventListener("keydown", (t) => {
        "Escape" === t.key &&
          (document.querySelectorAll(".modal") || []).forEach((t) => {
            e(t);
          });
      }),
      (document.querySelectorAll(".jb-aside-mobile-toggle") || []).forEach(
        function (e) {
          e.addEventListener("click", function (e) {
            (e = e.currentTarget
              .getElementsByClassName("icon")[0]
              .getElementsByClassName("mdi")[0]),
              document.documentElement.classList.toggle(
                "has-aside-mobile-expanded"
              ),
              e.classList.toggle("mdi-forwardburger"),
              e.classList.toggle("mdi-backburger");
          });
        }
      );
    const t = document.getElementById("searchTerm");
    if (t) {
      const e = ui.drawCalendarSearch();
      t.insertAdjacentHTML("beforeend", e);
      document.querySelectorAll(".period-button").forEach((e) => {
        e.addEventListener("click", handlePeriodButtonClick);
      });
    }
    setupPeroidDateInputListeners();
  });
const handlePeriodButtonClick = function (e) {
    const t = e.currentTarget.getAttribute("data-period"),
      [n, a] = ui.calculateTimeSpan(t);
    clearPeroidNavBarStyle(),
      e.currentTarget.classList.add("active"),
      (document.getElementById("period-date-from").value = n),
      (document.getElementById("period-date-to").value = a),
      (document.getElementById("period-search-type").value = t),
      (searchConfig.period_date_from =
        document.getElementById("period-date-from").value || ""),
      (searchConfig.period_date_to =
        document.getElementById("period-date-to").value || ""),
      (advSearchDateFromElement.value = n),
      (advSearchDateToElement.value = a),
      getVisitsDynamically(searchConfig);
  },
  setupPeroidDateInputListeners = function () {
    const e = document.getElementById("period-date-from"),
      t = document.getElementById("period-date-to"),
      n = document.getElementById("period-search-type");
    e.addEventListener("change", function (e) {
      console.log("From date changed:", e.target.value),
        (n.value = "custom"),
        (searchConfig.period_date_from = e.target.value),
        (advSearchDateFromElement.value = e.target.value),
        (searchConfig.adv_search_date_from = e.target.value),
        clearPeroidNavBarStyle(),
        getVisitsDynamically(searchConfig);
    }),
      t.addEventListener("change", function (e) {
        console.log("To date changed:", e.target.value),
          (n.value = "custom"),
          (searchConfig.period_date_to = e.target.value),
          (advSearchDateToElement.value = e.target.value),
          (searchConfig.adv_search_date_to = e.target.value),
          clearPeroidNavBarStyle(),
          getVisitsDynamically(searchConfig);
      });
    const a = document.getElementById("search-date-from"),
      i = document.getElementById("search-date-to");
    a.addEventListener("change", function (t) {
      console.log("Advanced from date changed:", t.target.value),
        (e.value = t.target.value),
        (searchConfig.period_date_from = t.target.value),
        (searchConfig.adv_search_date_from = t.target.value),
        clearPeroidNavBarStyle();
    }),
      i.addEventListener("change", function (e) {
        console.log("Advanced to date changed:", e.target.value),
          (t.value = e.target.value),
          (searchConfig.period_date_to = e.target.value),
          (searchConfig.adv_search_date_to = e.target.value),
          clearPeroidNavBarStyle();
      });
    document
      .getElementById("period-rest-button")
      .addEventListener("click", function (n) {
        (e.value = ""),
          (t.value = ""),
          (searchConfig.period_date_from = ""),
          (searchConfig.period_date_to = ""),
          (advSearchDateFromElement.value = ""),
          (advSearchDateToElement.value = ""),
          (searchConfig.adv_search_date_from = ""),
          (searchConfig.adv_search_date_to = ""),
          clearPeroidNavBarStyle(),
          getVisitsDynamically(searchConfig);
      });
  };
function attachEventToWebIcon() {
  var e = document.getElementsByClassName("host-icon-link");
  for (let t = 0; t < e.length; t++) {
    e[t].addEventListener("click", function (e) {
      utils.logInfo(`${e.currentTarget.dataset.host}`),
        e.currentTarget.classList.remove("off"),
        e.currentTarget.classList.add("on"),
        (searchConfig.host = e.currentTarget.dataset.host),
        clearWebIconStyle(e.currentTarget.dataset.host),
        getVisitsDynamically({ host: e.currentTarget.dataset.host }),
        worker.sendQuery("getTopVisitsBySearch", {
          searchConfig: searchConfig,
          callbackContentId: "top-urls",
        });
    });
  }
}
function clearWebIconStyle(e) {
  var t = document.getElementsByClassName("host-icon-link");
  for (let n = 0; n < t.length; n++) {
    let a = t[n];
    a.dataset.host == e
      ? (a.classList.remove("off"), a.classList.add("on"))
      : (a.classList.remove("on"), a.classList.add("off"));
  }
}
const clearPeroidNavBarStyle = function () {
  document.querySelectorAll(".period-button").forEach((e) => {
    e.classList.remove("active");
  });
};
function attachEventListenerToMenu() {
  const e = document.getElementsByClassName("nav-menu");
  for (const t of e)
    "A" === t.tagName &&
      t.addEventListener("click", function (t) {
        let n = t.currentTarget.dataset.collectionid;
        (cid = t.currentTarget.dataset.collectionid),
          utils.logInfo(`${t.currentTarget.dataset.collectionid}`);
        for (const t of e)
          utils.logInfo(`${t.tagName}`), t.classList.remove("on");
        if ((t.currentTarget.classList.add("on"), 1 == n))
          (searchConfig.collection_id = 0),
            (searchConfig.host = ""),
            (searchConfig.is_pinned = !0),
            clearMainContent(),
            worker.sendQuery("getPinnedUrlsByCollection", {
              searchConfig: searchConfig,
              callbackContentId: "history-urls",
            }),
            worker.sendQuery("getTopVisitsBySearch", {
              searchConfig: searchConfig,
              callbackContentId: "top-urls",
            }),
            exporter.sendAutoBackupRequest(globalSettings, worker);
        else {
          (searchConfig.collection_id = t.currentTarget.dataset.collectionid),
            (searchConfig.host = ""),
            (searchConfig.is_pinned = !1),
            clearMainContent();
          let e = Date.now() - globalSettings.lastHistorySavedPoint();
          utils.logInfo(`[Menu] delta ${e}`),
            e > 6e5 && saveFromHistory(),
            getVisitsDynamically(),
            worker.sendQuery("getTopHosts", {
              searchConfig: searchConfig,
              callbackContentId: "top-hosts",
            }),
            worker.sendQuery("getTopVisitsBySearch", {
              searchConfig: searchConfig,
              callbackContentId: "top-urls",
            }),
            exporter.sendAutoBackupRequest(globalSettings, worker);
        }
      });
}
function clearMainContent() {
  let e = document.getElementById("top-hosts");
  e && (e.innerHTML = "");
  let t = document.getElementById("history-urls");
  t && (t.innerHTML = "");
  let n = document.getElementById("top-urls");
  n && (n.innerHTML = "");
  const a = document.getElementById("top-paging"),
    i = document.getElementById("page-buttons"),
    r = document.getElementById("page-of-total");
  a && (a.innerHTML = ""),
    i && (i.innerHTML = ""),
    r && (r.innerText = ""),
    (searchConfig.current_page = 1),
    (searchConfig.total_records = 0);
}
function attachEventListenerToVisitList() {
  const e = document.getElementById("selected-urls-visits"),
    t = document.getElementById("selected-urls-list"),
    n = document.getElementsByClassName("action-select");
  for (const a of n)
    a.addEventListener("click", function (n) {
      let a = n.currentTarget.dataset.urlid,
        i = n.currentTarget.dataset.visitid,
        r = n.currentTarget.dataset.url;
      "INPUT" == n.currentTarget.tagName &&
        n.currentTarget.checked &&
        (selectionList.urlids_visitids.has(`${a}|${i}`) ||
          selectionList.urlids_visitids.add(`${a}|${i}`),
        selectionList.urlids_urllist.has(`${r}`) ||
          selectionList.urlids_urllist.add(`${r}`),
        utils.logInfo(
          `Add ${n.currentTarget.dataset.urlid} with ${n.currentTarget.dataset.visitid}`
        )),
        "INPUT" != n.currentTarget.tagName ||
          n.currentTarget.checked ||
          (selectionList.urlids_visitids.has(`${a}|${i}`) &&
            selectionList.urlids_visitids.delete(`${a}|${i}`),
          selectionList.urlids_urllist.has(`${r}`) &&
            selectionList.urlids_urllist.delete(`${r}`),
          utils.logInfo(
            `Remove ${n.currentTarget.dataset.urlid} with ${n.currentTarget.dataset.visitid}`
          )),
        (e.value = [...selectionList.urlids_visitids]),
        (t.value = [...selectionList.urlids_urllist]),
        refreshOverlayStatus();
    });
  const a = document.getElementsByClassName("action-delete");
  for (const e of a)
    e.addEventListener("click", function (e) {
      let t = e.currentTarget.dataset.urlid,
        n = e.currentTarget.dataset.visitid,
        a = e.currentTarget.dataset.url,
        i = { urlid_visitid: `${t}|${n}` };
      worker.sendQuery("deleteVisits", {
        itemData: [i],
        callbackContentId: "history-urls",
      }),
        utils.deleteUrlFromHistory(a);
    });
  const i = document.getElementsByClassName("action-pin");
  for (const e of i)
    e.addEventListener("click", function (e) {
      let t = {
        urlid_visitid: `${e.currentTarget.dataset.urlid}|${e.currentTarget.dataset.visitid}`,
      };
      worker.sendQuery("pinUrls", {
        itemData: [t],
        callbackContentId: "history-urls",
      });
    });
  const r = document.getElementsByClassName("action-unpin");
  for (const e of r)
    e.addEventListener("click", function (e) {
      let t = {
        urlid_visitid: `${e.currentTarget.dataset.urlid}|${e.currentTarget.dataset.visitid}`,
      };
      worker.sendQuery("unPinUrls", {
        itemData: [t],
        callbackContentId: "history-urls",
      });
    });
  document
    .getElementById("master-checkbox")
    .addEventListener("click", function (e) {
      const t = document.getElementById("selected-urls-visits");
      let n = e.currentTarget.checked;
      (document.querySelectorAll(".action-select") || []).forEach((e) => {
        e.checked = n;
        let t = e.dataset.urlid,
          a = e.dataset.visitid;
        n
          ? selectionList.urlids_visitids.has(`${t}|${a}`) ||
            selectionList.urlids_visitids.add(`${t}|${a}`)
          : selectionList.urlids_visitids.has(`${t}|${a}`) &&
            selectionList.urlids_visitids.delete(`${t}|${a}`);
      }),
        (t.value = [...selectionList.urlids_visitids]),
        refreshOverlayStatus();
    }),
    (document.querySelectorAll(".btn-paging") || []).forEach((e) => {
      e.addEventListener("click", () => {
        let t = e.dataset.nextpage;
        (searchConfig.current_page = parseInt(t)),
          utils.logInfo(`[Paging] ${JSON.stringify(searchConfig)}`),
          getVisitsDynamically();
      });
    }),
    (document.querySelectorAll("#current_page") || []).forEach((e) => {
      e.addEventListener("blur", () => {
        handlePageInput(e.value);
      }),
        e.addEventListener("keypress", (t) => {
          "Enter" === t.key && handlePageInput(e.value);
        });
    }),
    document.addEventListener("DOMContentLoaded", () => {
      "dark" === localStorage.getItem("theme") &&
        document.documentElement.setAttribute("data-theme", "dark");
    }),
    document
      .getElementById("theme-toggle")
      .addEventListener("click", function () {
        utils.toggleTheme();
      });
}
function handlePageInput(e) {
  const t = parseInt(e),
    n = Math.ceil(
      searchConfig.total_records / searchConfig.recent_visit_page_size
    );
  !isNaN(t) && t > 0 && t <= n
    ? ((searchConfig.current_page = t),
      utils.logInfo(`[Paging Input] ${JSON.stringify(searchConfig)}`),
      getVisitsDynamically())
    : (document.querySelectorAll("#current_page") || []).forEach((e) => {
        e.value = searchConfig.current_page;
      });
}
function attachEventListenerToPinnedList() {
  document.getElementById("selected-urls-visits");
  const e = document.getElementsByClassName("action-delete");
  for (const t of e)
    t.addEventListener("click", function (e) {
      let t = { urlid_visitid: `${e.currentTarget.dataset.urlid}|0` };
      worker.sendQuery("unPinUrls", {
        itemData: [t],
        callbackContentId: "history-urls",
      });
    });
}
function attachEventListenerToSearchInput() {
  const e = document.getElementById("search-input");
  e.addEventListener("keypress", function (t) {
    ("Enter" != t.key && 0 != e.value.length) ||
      ((searchConfig.search_term = e.value),
      (advSearchFlagElement.checked = !1),
      (searchConfig.is_advanced_search = !1),
      worker.sendQuery("getVisitsBySearchTerm", {
        searchConfig: searchConfig,
        callbackContentId: "history-urls",
      }));
  }),
    e.addEventListener("keyup", function (t) {
      0 == e.value.length &&
        ((searchConfig.search_term = e.value),
        (advSearchFlagElement.checked = !1),
        (searchConfig.is_advanced_search = !1),
        worker.sendQuery("getVisitsBySearchTerm", {
          searchConfig: searchConfig,
          callbackContentId: "history-urls",
        }));
    }),
    e.addEventListener("search", function (t) {
      (searchConfig.search_term = e.value),
        (advSearchFlagElement.checked = !1),
        (searchConfig.is_advanced_search = !1),
        0 == e.value.length &&
          worker.sendQuery("getVisitsBySearchTerm", {
            searchConfig: searchConfig,
            callbackContentId: "history-urls",
          });
    }),
    e.addEventListener("change", function (t) {
      (searchConfig.search_term = e.value),
        (advSearchFlagElement.checked = !1),
        (searchConfig.is_advanced_search = !1),
        0 == searchConfig.search_term.length &&
          ((searchConfig.search_term = e.value),
          worker.sendQuery("getVisitsBySearchTerm", {
            searchConfig: searchConfig,
            callbackContentId: "history-urls",
          }));
    });
}
function attachEventListenerToExportLink() {
  document
    .getElementById("search-result-export-link")
    .addEventListener("click", function (e) {
      utils.logInfo("Export button clicked");
      const t = parseInt(searchResultCountElement.innerText);
      t > 0 &&
        (utils.logInfo(`Export ${t} records`),
        getAdvSearchFormData(),
        exporter.sendCurrentSearchExportRequest(searchConfig, worker));
    });
}
const openSearchModal = function () {
    document.querySelector("#modal-search").classList.remove("hidden");
  },
  closeSearchModal = function () {
    document.querySelector("#modal-search").classList.add("hidden");
  };
function attachEventToAdvancedSearch() {
  advSearchButton.addEventListener("click", function (e) {
    utils.logInfo("Search button clicked"),
      getAdvSearchFormData(),
      searchConfig.adv_search_keywords ||
      searchConfig.adv_search_date_from ||
      searchConfig.adv_search_date_to ||
      searchConfig.adv_search_domain ||
      searchConfig.adv_search_url
        ? (closeSearchModal(),
          (advSearchFlagElement.checked = !0),
          (searchConfig.is_advanced_search = !0),
          worker.sendQuery("getTopHosts", {
            searchConfig: searchConfig,
            callbackContentId: "top-hosts",
          }),
          worker.sendQuery("getVisitsByAdvancedSearch", {
            searchConfig: searchConfig,
            callbackContentId: "history-urls",
          }))
        : utils.logInfo("No advanced search condition found");
  });
  document
    .getElementById("search-clear")
    .addEventListener("click", function (e) {
      utils.logInfo("Search clear clicked"),
        (advSearchFlagElement.checked = !1),
        clearAdvSearchFormData(),
        getAdvSearchFormData();
    });
  document
    .getElementById("search-close")
    .addEventListener("click", function (e) {
      utils.logInfo("Search close clicked"), closeSearchModal();
    });
}
function attachEventToAdvancedSearchCheckbox() {
  const e = document.getElementById("is-advanced-search");
  e.addEventListener("click", function (t) {
    e.checked
      ? openSearchModal()
      : ((searchConfig.is_advanced_search = !1),
        closeSearchModal(),
        1 == cid || (cid < 0 && 1 == cid_settings)
          ? ((searchConfig.collection_id = 0),
            (searchConfig.host = ""),
            (searchConfig.is_pinned = !0),
            clearMainContent(),
            worker.sendQuery("getPinnedUrlsByCollection", {
              searchConfig: searchConfig,
              callbackContentId: "history-urls",
            }),
            worker.sendQuery("getTopVisitsBySearch", {
              searchConfig: searchConfig,
              callbackContentId: "top-urls",
            }))
          : (getAdvSearchFormData(),
            worker.sendQuery("getTopHosts", {
              searchConfig: searchConfig,
              callbackContentId: "top-hosts",
            }),
            getVisitsDynamically(),
            worker.sendQuery("getTopVisitsBySearch", {
              searchConfig: searchConfig,
              callbackContentId: "top-urls",
            }),
            worker.sendQuery("closeDatabase", { force: !1 })));
  });
}
function refreshOverlayStatus() {
  const e = document.getElementById("selection-overlay"),
    t = document.getElementById("selected-msg"),
    n = document.getElementById("selected-urls-visits").value.trim();
  let a = n ? n.split(",").length : 0;
  utils.logInfo(`${n} = ${a}`),
    a > 0
      ? (e.classList.remove("off"),
        e.classList.add("on"),
        (t.innerText = `${a} selected`))
      : (e.classList.remove("on"), e.classList.add("off"), (t.innerText = ""));
}
const clearSelections = function () {
  const e = document.getElementById("master-checkbox");
  e && e.checked && (e.checked = !1);
  const t = document.getElementById("selected-urls-visits");
  utils.logInfo(`[Overlay] clear ${t.value}`);
  const n = t.value.split(",");
  let a = null,
    i = [];
  if (n.length > 0)
    for (let e = 0; e < n.length; e++)
      (i = n[e].split("|")),
        (a = document.getElementById(`checkbox-visit-${i[1]}`)),
        a && (a.checked = !1);
  (t.value = ""), selectionList.urlids_visitids.clear(), refreshOverlayStatus();
};
function attachEventListenerToOverlayButtons() {
  const e = document.getElementById("selected-urls-visits");
  document
    .getElementById("ol-btn-clear-selection")
    .addEventListener("click", function (e) {
      clearSelections();
    });
  document
    .getElementById("ol-btn-delete-all")
    .addEventListener("click", function (t) {
      utils.logInfo(`[Overlay] to delete ${e.value}`);
      const n = e.value.split(",");
      let a = [];
      if (n.length > 0) {
        for (let e = 0; e < n.length; e++) a.push({ urlid_visitid: n[e] });
        worker.sendQuery("deleteVisits", {
          itemData: a,
          callbackContentId: "history-urls",
        });
      }
      selectionList.urlids_urllist.forEach((e) => {
        utils.deleteUrlFromHistory(e);
      }),
        selectionList.urlids_urllist.clear();
    });
  document
    .getElementById("ol-btn-pin-all")
    .addEventListener("click", function (t) {
      utils.logInfo(`[Overlay] pin ${e.value}`);
      const n = e.value.split(",");
      let a = [];
      if (n.length > 0) {
        for (let e = 0; e < n.length; e++) a.push({ urlid_visitid: n[e] });
        worker.sendQuery("pinUrls", {
          itemData: a,
          callbackContentId: "history-urls",
        });
      }
    });
  const t = document.getElementById("ol-category");
  document
    .getElementById("ol-btn-move")
    .addEventListener("click", function (n) {
      utils.logInfo(
        `[Overlay] move ${e.value} to category #${
          t.options[t.selectedIndex].value
        }`
      );
      const a = e.value.split(","),
        i = t.options[t.selectedIndex].value;
      if (i && i > 0) {
        let e = [];
        if (a.length > 0) {
          for (let t = 0; t < a.length; t++)
            e.push({ urlid_visitid: a[t], categoryid: i });
          worker.sendQuery("moveUrlsIntoCategory", {
            itemData: e,
            callbackContentId: "history-urls",
          });
        }
      }
    });
}
function drawItemList(e) {
  var t = e.data,
    n = e.paging.current_page ?? 1,
    a = e.paging.total_records ?? 0;
  a >= 0 && (resultCountElement.innerText = a.toLocaleString());
  var i = e.callbackContentId,
    r = document.getElementById(i);
  if ((1 == n && (r.innerHTML = ""), t.length > 0)) {
    (searchConfig.current_page = n),
      (searchConfig.total_records = a),
      drawPagenation(searchConfig);
    var s = "",
      o = "",
      l = "",
      c = "";
    for (let e = 0; e < t.length; e++)
      (l = (l = t[e].title ?? "").replace("'", "").replace('"', "")),
        (o = t[e].title
          ? t[e].title.length > 100
            ? t[e].title.substr(0, 100)
            : t[e].title
          : "untitle"),
        s != t[e].visit_date &&
          (c += `\n                    <tr><th>&nbsp;</th><th colspan="3">${utils.timestampToString(
            t[e].visit_date,
            !0
          )}</th></tr>\n                `),
        (s = t[e].visit_date),
        (c += `\n            <tr id="visit-${
          t[e].visitid
        }">\n                <td>\n                    <input type="checkbox" \n                        class="chk-url action-select" \n                        id="checkbox-visit-${
          t[e].visitid
        }"\n                        tabindex = ${e}\n                        data-urlid="${
          t[e].urlid
        }"\n                        data-visitid="${
          t[e].visitid
        }"\n                        data-url="${
          t[e].url
        }" />\n                    <span>\n                        <i\n                        data-urlid="${
          t[e].urlid
        }"\n                        data-visitid="${
          t[e].visitid
        }"\n                        class="icon mdi ${
          1 == t[e].is_pinned
            ? "mdi-pin action-unpin icon-pin-" + t[e].urlid
            : "mdi-pin-outline action-pin icon-pin-" + t[e].urlid
        }"></i>\n                    </span>\n                    <span class="icon action-delete" \n                        data-urlid="${
          t[e].urlid
        }"\n                        data-visitid="${
          t[e].visitid
        }"\n                        data-url="${
          t[e].url
        }"\n                        >\n                        <i class="mdi mdi-delete-forever-outline"></i>\n                    </span>\n                </td>\n                <td>${
          utils.getVisitTime(t[e].visit_time) + " "
        }</td>\n                <td>\n                    <img align="center" src="${utils.faviconURL(
          t[e].url,
          16
        )}" />\n                    <a href="${
          t[e].url
        }"\n                        target="_blank"\n                        title="${
          l.length > 100 ? l : ""
        }"\n                        >${o}</a>\n                </td>\n                <td>${
          t[e].host
        }</td>\n              </tr>\n            `);
    let e = `\n        <table class="table is-fullwidth is-narrow">\n            <tr>\n            <th width="100">\n                <label class="checkbox">\n                <input type="checkbox" value="false" id="master-checkbox">\n                <span class="check"></span>\n                </label>\n            </th>\n            <th width="85">${chrome.i18n.getMessage(
      "UI_table_header_time"
    )}</th>\n            <th>${chrome.i18n.getMessage(
      "UI_table_header_title"
    )}</th>\n            <th>${chrome.i18n.getMessage(
      "UI_table_header_domain"
    )}</th>\n            </tr>\n            ${c}\n        </table>\n        `;
    (r.innerHTML = e), attachEventListenerToVisitList();
  } else {
    r.innerHTML = "";
    const e = document.getElementById("top-paging"),
      t = document.getElementById("page-buttons"),
      n = document.getElementById("page-of-total");
    e && (e.innerHTML = ""), t && (t.innerHTML = ""), n && (n.innerText = "");
  }
}
function drawPinItemList(e) {
  var t = e.data,
    n = e.callbackContentId,
    a = document.getElementById(n);
  a.innerHTML = "";
  var i = "";
  if (t.length > 0) {
    var r = "",
      s = "",
      o = "",
      l = 1;
    for (let e = 0; e < t.length; e++) {
      if (i !== t[e].name) {
        s &&
          ((o += s =
            `\n                        <div class="column card m-1 is-one-third">\n                            <table class="table is-fullwidth is-narrow">\n                                <tr><th colspan="2">${i}</th></tr>\n                                ${s}\n                            </table>\n                        </div>\n                    `),
          l > 1 &&
            l % 3 == 1 &&
            ((r += `\n                            <div class="columns m-3 p-1 pr-5">\n                                ${o}\n                            </div>\n                        `),
            (o = ""))),
          (l += 1);
        let n = t[e].title ?? "";
        n.replace("'", "").replace('"', "");
        let a = t[e].title
          ? t[e].title.length > 35
            ? t[e].title.substr(0, 35)
            : t[e].title
          : "untitle";
        s = `\n                    <tr>\n                        <td>\n                            <span>\n                            <i\n                                id="url-${
          t[e].urlid
        }"\n                                class="url-container"\n                                data-urlid="${
          t[e].urlid
        }"\n                                data-visitid="${
          t[e].visitid
        }"\n                                class="icon mdi ${
          1 == t[e].is_pinned
            ? "mdi-pin action-unpin icon-pin-" + t[e].urlid
            : "mdi-pin-outline action-pin icon-pin-" + t[e].urlid
        }">\n                            </i>\n                            </span>\n                        </td>\n                        <td>\n                            <img src="${utils.faviconURL(
          t[e].url,
          16
        )}" align="center" />\n                            <a href="${
          t[e].url
        }" title="${n}">${a}</a>\n                             (${
          t[e].visit_count
        } visits)\n                        </td>\n                    </tr>\n                `;
      } else {
        let n = t[e].title ?? "";
        n.replace("'", "").replace('"', "");
        let a = t[e].title
          ? t[e].title.length > 35
            ? t[e].title.substr(0, 35)
            : t[e].title
          : "untitle";
        s += `\n                    <tr>\n                        <td>\n                            <span>\n                            <i\n                                id="url-${
          t[e].urlid
        }"\n                                class="url-container"\n                                data-urlid="${
          t[e].urlid
        }"\n                                data-visitid="${
          t[e].visitid
        }"\n                                class="icon mdi ${
          1 == t[e].is_pinned
            ? "mdi-pin action-unpin icon-pin-" + t[e].urlid
            : "mdi-pin-outline action-pin icon-pin-" + t[e].urlid
        }">\n                            </i>\n                            </span>\n                        </td>\n                        <td>\n                            <img src="${utils.faviconURL(
          t[e].url,
          16
        )}" align="center" />\n                            <a href="${
          t[e].url
        }" title="${n}">${a}</a>\n                             (${
          t[e].visit_count
        } visits)\n                        </td>\n                    </tr>\n                `;
      }
      i = t[e].name;
    }
    s &&
      (r += `\n                <div class="columns m-3 p-1">\n                    ${(o += `\n                <div class="column card m-1">\n                    <table class="table is-fullwidth is-narrow">\n                        <tr><th colspan="2">${i}</th></tr>\n                        ${s}\n                    </table>\n                </div>\n            `)}\n                </div>\n            `),
      (a.innerHTML = r),
      attachEventListenerToPinnedList();
  }
}
function attachEventListenerToImportButton() {
  const e = document.getElementById("btn-import-pinned-urls");
  e.addEventListener("click", function (t) {
    utils.logInfo("[Import] to pinned urls"),
      (e.textContent = e.textContent + " ... "),
      worker.sendQuery("generatePinnedUrls", {
        itemData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        callbackContentId: "history-urls",
      });
  });
}
function autoBackup() {
  exporter.sendAutoBackupRequest(globalSettings, worker);
}
function drawPagenation(e) {
  const t = document.getElementById("top-paging"),
    n = document.getElementById("page-buttons"),
    a = document.getElementById("page-of-total");
  if (e.total_records <= 0)
    return (
      t && (t.innerHTML = ""),
      n && (n.innerHTML = ""),
      void (a && (a.innerText = ""))
    );
  const i = e.recent_visit_page_size || 20,
    r = Math.ceil(e.total_records / i),
    s = `\n        <button \n            class="button is-small btn-paging" ${
      e.current_page <= 1 ? "disabled" : ""
    }\n            data-nextpage="${
      e.current_page - 1
    }"\n        >\n        ${chrome.i18n.getMessage(
      "UI_pagenation_prev"
    )}\n        </button>\n        \x3c!--<button class="button is-small " disabled>${
      e.current_page
    } / ${r}</button>--\x3e\n        <input class="is-small" id="current_page" value="${
      e.current_page
    }" /> / ${r}\n        <button\n            class="button is-small btn-paging" ${
      e.current_page == r ? "disabled" : ""
    }\n            data-nextpage="${
      e.current_page + 1
    }"\n        >\n        ${chrome.i18n.getMessage(
      "UI_pagenation_next"
    )}\n        </button>\n    `;
  t && (t.innerHTML = s),
    n && (n.innerHTML = s),
    a &&
      (a.innerText = chrome.i18n.getMessage("UI_pagenation_total_counts", [
        e.total_records.toLocaleString(),
      ]));
}
