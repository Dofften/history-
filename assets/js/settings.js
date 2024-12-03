"use strict";
function Settings(t) {
  this._locale = t || navigator.language;
}
(Settings.prototype.startPage = function () {
  return window.localStorage.getItem("setting-startpage") || 0;
}),
  (Settings.prototype.setStartPage = function (t) {
    window.localStorage.setItem("setting-startpage", t);
  }),
  (Settings.prototype.pageSize = function () {
    return window.localStorage.getItem("setting-pagesize") || 20;
  }),
  (Settings.prototype.setPageSize = function (t) {
    window.localStorage.setItem("setting-pagesize", t);
  }),
  (Settings.prototype.enableAutoBackup = function () {
    let t = window.localStorage.getItem("setting-enable-auto-backup");
    return !t || "true" === t;
  }),
  (Settings.prototype.setEnableAutoBackup = function (t) {
    window.localStorage.setItem("setting-enable-auto-backup", t);
  }),
  (Settings.prototype.backupMode = function () {
    return window.localStorage.getItem("setting-backup-mode") || 1;
  }),
  (Settings.prototype.setBackupMode = function (t) {
    window.localStorage.setItem("setting-backup-mode", t);
  }),
  (Settings.prototype.backupInterval = function () {
    return window.localStorage.getItem("setting-backup-interval") || 7;
  }),
  (Settings.prototype.setBackupInterval = function (t) {
    window.localStorage.setItem("setting-backup-interval", t);
  }),
  (Settings.prototype.lastHistorySavedPoint = function () {
    var t = window.localStorage.getItem("date-last-saved");
    if (t) return parseFloat(t);
  }),
  (Settings.prototype.setLastHistorySavedPoint = function (t) {
    t
      ? window.localStorage.setItem("date-last-saved", t)
      : window.localStorage.removeItem("date-last-saved");
  }),
  (Settings.prototype.lastBackupTime = function () {
    var t = window.localStorage.getItem("date-last-backup");
    if (t) return parseFloat(t);
  }),
  (Settings.prototype.setLastBackupTime = function (t) {
    t
      ? window.localStorage.setItem("date-last-backup", t)
      : window.localStorage.removeItem("date-last-backup");
  }),
  (Settings.prototype.enableCompress = function () {
    let t = window.localStorage.getItem("setting-enable-compress");
    return !t || "true" === t;
  }),
  (Settings.prototype.setEnableCompress = function (t) {
    window.localStorage.setItem("setting-enable-compress", t);
  });
