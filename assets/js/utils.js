"use strict";
var utils = {};
(utils.env = CONFIG.ENV),
  (utils.logError = function (e) {
    console.log(utils.getLogMessage("ERROR", e));
  }),
  (utils.logWarning = function (e) {
    "development" == utils.env &&
      console.log(utils.getLogMessage("WARNING", e));
  }),
  (utils.logInfo = function (e) {
    "development" == utils.env && console.log(utils.getLogMessage("INFO", e));
  }),
  (utils.stripSubDomain = function (e) {
    if (e != domain_root.getRootFromDomain(e)) {
      var t = e.match(/^[^.]+\.([^.]+\..+)$/);
      return t ? t[1] : void 0;
    }
  }),
  (utils.getDomainPortion = function (e, t) {
    var n;
    if (((e = e || ""), (t = t || "").length)) {
      var o = new RegExp("[^.]*\\.?" + utils.escapeDots(t) + "$"),
        r = e.match(o);
      n = r ? r[0] : void 0;
    } else n = domain_root.getRootFromDomain(e);
    return n;
  }),
  (utils.extractHost = function (e) {
    var t = e.match(/^.+?:\/\/(?:[^:@]+:[^@]+@)?([^/?:]+)/);
    return t ? t[1] : void 0;
  }),
  (utils.getDomainCategory = function (e, t) {
    let n = { name: "", collection_id: 0 };
    if (!(e in DOMAIN_CATEGORY)) return n;
    const o = DOMAIN_CATEGORY[e];
    for (let e = 0; e < o.length; e++) {
      let r = o[e].rules;
      for (let i = 0; i < r.length; i++) {
        if (new RegExp(r[i]).test(t))
          return (n.name = o[e].name), (n.collection_id = o[e].cid), n;
      }
    }
    return n;
  }),
  (utils.formatTitle = function (e) {
    return null == e
      ? null
      : (e = (e = e.replace(/[\t\r\n]/g, " ")).replace(/\s\s+/g, " ")).trim();
  }),
  (utils.needUpdateTitle = function (e, t) {
    let n = [
      "Access Denied",
      "Sign in",
      "Sign-in",
      "Log-in",
      "Log in",
      "Login",
    ];
    if (!t) return !1;
    if (0 == t.length) return !1;
    let o = n.some(
      (e) => t.toLocaleLowerCase().indexOf(e.toLocaleLowerCase()) >= 0
    );
    if (o) return !1;
    let r = e + "",
      i = n.some(
        (e) => r.toLocaleLowerCase().indexOf(e.toLocaleLowerCase()) >= 0
      );
    return !(!i || o) || e != t;
  }),
  (utils.escapeDots = function (e) {
    return e.replace(/\./g, "\\.");
  }),
  (utils.dateToString = function (e, t) {
    return (
      null == t && (t = "/"),
      e.getFullYear() +
        t +
        utils.padZero(e.getMonth() + 1) +
        t +
        utils.padZero(e.getDate())
    );
  }),
  (utils.timestampToString = function (e, t, n) {
    let o = new Date(e),
      r = {};
    if (
      (n &&
        (r = {
          weekday: "short",
          year: "numeric",
          month: "2-digit",
          day: "numeric",
        }),
      t)
    )
      return o.toLocaleDateString(t, r);
    const i =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    return o.toLocaleDateString(i, r);
  }),
  (utils.padZero = function (e, t) {
    var n = e.toString();
    for (t = t || 2; n.length < t; ) n = "0" + n;
    return n;
  }),
  (utils.getLogMessage = function (e, t) {
    var n = new Date();
    return (
      n.getFullYear() +
      "-" +
      utils.padZero(n.getMonth() + 1) +
      "-" +
      utils.padZero(n.getDate()) +
      " " +
      utils.padZero(n.getHours()) +
      ":" +
      utils.padZero(n.getMinutes()) +
      ":" +
      utils.padZero(n.getSeconds()) +
      "." +
      utils.padZero(n.getMilliseconds(), 3) +
      ": " +
      e +
      ": " +
      t
    );
  }),
  (utils.faviconURL = function (e, t = 32) {
    const n = new URL(chrome.runtime.getURL("/_favicon/"));
    return (
      n.searchParams.set("pageUrl", e),
      n.searchParams.set("size", t),
      n.toString()
    );
  }),
  (utils.extensionPageUrl = function (e, t) {
    const n = new URL(chrome.runtime.getURL(e));
    if (t)
      for (let e = 0; e < t.length; e++)
        utils.logInfo(`${t[e].param} - ${t[e].value}`),
          n.searchParams.set(t[e].param, t[e].value);
    return n.toString();
  }),
  (utils.getParamFromUrl = function (e, t) {
    return new URL(e).searchParams.get(t);
  }),
  (utils.getVisitTime = function (e) {
    const t = navigator.language;
    return new Intl.DateTimeFormat(t, {
      hour12: !1,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }).format(e);
  }),
  (utils.backupIsNeeded = function (e, t) {
    if (!e.enableAutoBackup()) return !1;
    let n = e.lastBackupTime(),
      o = e.backupInterval(),
      r = e.lastHistorySavedPoint();
    return !(null != n || !r) || utils.daysBetweenDates(n, t) >= o;
  }),
  (utils.daysDifference = function (e, t) {
    let n = new Date(e),
      o = new Date(t),
      r = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
      i = new Date(o.getFullYear(), o.getMonth(), o.getDate());
    return Math.floor(Math.abs(i.getTime() - r.getTime()) / 864e5);
  }),
  (utils.getTransitionId = function (e) {
    return {
      link: 0,
      typed: 1,
      auto_bookmark: 2,
      auto_subframe: 3,
      manual_subframe: 4,
      generated: 5,
      auto_toplevel: 6,
      form_submit: 7,
      reload: 8,
      keyword: 9,
      keyword_generated: 10,
    }[e];
  }),
  (utils.getTransitionText = function (e) {
    if (/^-?\d+$/.test(e)) {
      var t = [
          "link",
          "typed",
          "auto_bookmark",
          "auto_subframe",
          "manual_subframe",
          "generated",
          "auto_toplevel",
          "form_submit",
          "reload",
          "keyword",
          "keyword_generated",
        ],
        n = 255 & e;
      return n < t.length
        ? t[n]
        : (utils.logWarning("import: unrecognized transition id: " + n),
          "unknown");
    }
    return e;
  }),
  (utils.sqlReplace = function (e) {
    return e ? e.replaceAll("'", "''") : "";
  }),
  (utils.deleteUrlFromHistory = function (e) {
    utils.logInfo(`chrome.history: ${chrome.history}`),
      utils.logInfo(`chrome.history.deleteUrl: ${chrome.history.deleteUrl}`),
      chrome.history && chrome.history.deleteUrl
        ? chrome.history.deleteUrl({ url: e }, function () {
            utils.logInfo(`Deleted ${e} from browser history`);
          })
        : utils.logWarning(
            "Browser doesn't support deleting specific URLs from history"
          );
  }),
  (utils.toggleTheme = function () {
    const e = document.documentElement;
    "dark" === e.getAttribute("data-theme")
      ? (e.removeAttribute("data-theme"),
        localStorage.setItem("theme", "light"))
      : (e.setAttribute("data-theme", "dark"),
        localStorage.setItem("theme", "dark"));
  });
