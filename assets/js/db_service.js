"use strict";
var dbService = {};
function Performance(i, e, t) {
  (this._start_at = i),
    (this._end_at = e),
    (this._record_count = t),
    (this._time_spent = 0),
    (this._avgTimeSpent = 0);
}
(dbService.db = null),
  (dbService.prefs = new Settings()),
  (dbService.config = {
    timeLastSaved: void 0,
    currentTimestamp: Date.now(),
    historyItems: [],
  }),
  (Performance.prototype.setStartAt = function (i) {
    this._start_at = i;
  }),
  (Performance.prototype.setEndAt = function (i) {
    (this._end_at = i), (this._time_spent = this._end_at - this._start_at);
  }),
  (Performance.prototype.timeSpent = function () {
    return this._end_at - this._start_at;
  }),
  (Performance.prototype.setRecordCount = function (i) {
    (this._record_count = i),
      (this._avgTimeSpent =
        this._record_count > 0
          ? this._time_spent / (1 * this._record_count)
          : 0);
  }),
  (Performance.prototype.avgTimeSpent = function () {
    return this._avgTimeSpent;
  }),
  (dbService.init = function (i) {
    try {
      (dbService.performance = new Performance(Date.now(), Date.now(), 0)),
        (dbService.db = i),
        dbService.db.exec(
          "CREATE TABLE IF NOT EXISTS hp_url(urlid INTEGER PRIMARY KEY ASC,url TEXT,host TEXT,root_domain TEXT,title TEXT,name TEXT,collection_id INTEGER DEFAULT 0,is_pinned INTEGER DEFAULT 0,priority INTEGER DEFAULT 100000)"
        ),
        dbService.db.exec(
          "CREATE UNIQUE INDEX IF NOT EXISTS ix_hp_url_url ON hp_url(url)"
        ),
        dbService.db.exec(
          "CREATE INDEX IF NOT EXISTS ix_hp_url_host ON hp_url(host)"
        ),
        dbService.db.exec(
          "CREATE INDEX IF NOT EXISTS ix_hp_url_root_domain ON hp_url(root_domain)"
        ),
        dbService.db.exec(
          "CREATE TABLE IF NOT EXISTS hp_visit(visitid INTEGER PRIMARY KEY ASC ,urlid INTEGER ,visit_time INTEGER ,visit_date TEXT ,year INTEGER ,month INTEGER ,month_day INTEGER ,week_day INTEGER ,hour INTEGER ,transition_type TEXT)"
        ),
        dbService.db.exec(
          "CREATE UNIQUE INDEX IF NOT EXISTS idx_hp_visit_urlid_visit_time ON hp_visit(urlid, visit_time)"
        ),
        dbService.db.exec(
          "CREATE INDEX IF NOT EXISTS idx_hp_visit_visit_time ON hp_visit(visit_time)"
        ),
        dbService.db.exec(
          "CREATE INDEX IF NOT EXISTS idx_hp_visit_visit_date ON hp_visit(visit_date)"
        ),
        dbService.db.exec(
          "CREATE TABLE IF NOT EXISTS collection(collection_id INTEGER PRIMARY KEY ASC,name TEXT,create_time INTEGER,is_disable SMALLINT DEFAULT 0,priority INTEGER DEFAULT 100000)"
        ),
        dbService.db.exec(
          "CREATE UNIQUE INDEX IF NOT EXISTS ix_collection_name ON collection(name)"
        ),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [1, "Pinned", Date.now(), 10],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [2, "Documents", Date.now(), 20],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [3, "Email", Date.now(), 30],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [4, "Morning Read", Date.now(), 40],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [5, "Tools", Date.now(), 50],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [6, "News", Date.now(), 60],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [7, "Social", Date.now(), 70],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [8, "Entertainment", Date.now(), 80],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [9, "Learning", Date.now(), 90],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [10, "Shop", Date.now(), 100],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [11, "Finance", Date.now(), 110],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [12, "Travel", Date.now(), 120],
        }),
        dbService.db.exec({
          sql: "INSERT OR IGNORE INTO collection (collection_id, name, create_time, priority) VALUES (?, ?, ?, ?)",
          bind: [13, "Hobby", Date.now(), 130],
        });
      let e = [];
      dbService.db.exec({
        sql: "select * from hp_url WHERE is_pinned=1",
        rowMode: "object",
        resultRows: e,
      }),
        (e = []),
        dbService.db.exec({
          sql: "select hp_visit.* from hp_visit hp_visit \n                INNER JOIN hp_url hp_url ON hp_visit.urlid=hp_url.urlid\n                WHERE hp_url.is_pinned=1\n            ",
          rowMode: "object",
          resultRows: e,
        });
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.clearUrls = async function (i, e) {
    dbService.db || dbService.init(i),
      utils.logInfo("Clearing browser urls ...");
    let t = 0;
    dbService.db.exec({
      sql: "SELECT count(1) FROM hp_url",
      rowMode: "array",
      callback: function (i) {
        (t = i[0]), utils.logInfo(`${t} urls will be cleared.`);
      },
    }),
      t >= 0 &&
        (dbService.db.exec({ sql: "DROP TABLE hp_url", rowMode: "array" }),
        utils.logInfo("TABLE hp_url dropped."));
  }),
  (dbService.clearVisits = async function (i, e) {
    dbService.db || dbService.init(i),
      utils.logInfo("Clearing browser visits ...");
    let t = 0;
    dbService.db.exec({
      sql: "SELECT count(1) FROM hp_visit",
      rowMode: "array",
      callback: function (i) {
        (t = i[0]), utils.logInfo(`${t} visits will be cleared.`);
      },
    }),
      t >= 0 &&
        (dbService.db.exec({ sql: "DROP TABLE hp_visit", rowMode: "array" }),
        utils.logInfo("TABLE hp_visit dropped."));
  }),
  (dbService.clearCollection = async function (i, e) {
    dbService.db || dbService.init(i), utils.logInfo("Clearing collection ...");
    let t = 0;
    dbService.db.exec({
      sql: "SELECT count(1) FROM collection",
      rowMode: "array",
      callback: function (i) {
        (t = i[0]),
          utils.logInfo(`${t} collections of work will be cleared.`),
          t > 0 &&
            (dbService.db.exec({
              sql: "DELETE FROM collection",
              rowMode: "array",
            }),
            utils.logInfo(`${t} collections of work cleared.`));
      },
    });
  }),
  (dbService.clearPinned = async function (i, e) {
    dbService.db || dbService.init(i),
      dbService.updateSyncProgress("Clearing pinned flag ...");
    let t = 0;
    dbService.db.exec({
      sql: "SELECT count(1) FROM hp_url WHERE is_pinned=1",
      rowMode: "array",
      callback: function (i) {
        (t = i[0]),
          utils.logInfo(`${t} pin flags will be cleared.`),
          t > 0 &&
            (dbService.db.exec({
              sql: "UPDATE hp_url SET is_pinned=0 WHERE is_pinned=1",
              rowMode: "array",
            }),
            utils.logInfo(`${t} pin flags cleared.`));
      },
    });
  }),
  (dbService.initAndSync = async function (i, e, t) {
    dbService.db || dbService.init(i),
      utils.logInfo(`[performance] ${JSON.stringify(dbService.performance)}`);
    var r = e.historyItems,
      l = e.timeLastSaved;
    dbService.updateSyncProgress(`Saving ${r.length} browser history ...`);
    var o = e.currentTime;
    l &&
      l > o &&
      (dbService.updateSyncProgress(
        "Ignoring a last sync time in the future: " + new Date(l).toString()
      ),
      (l = 0)),
      l
        ? (dbService.updateSyncProgress("Using last history sync time: " + l),
          await dbService.syncHistory(i, l, o, r, t))
        : (dbService.updateSyncProgress("Looking up max visit time"),
          dbService.db.exec({
            sql: `SELECT IFNULL(MAX(visit_time),0) AS max_visit_time FROM hp_visit WHERE visit_time <= ${o}`,
            rowMode: "array",
            callback: function (e) {
              dbService.updateSyncProgress(`maxVisitTime in db: ${e[0]}`);
              var l = e[0];
              dbService.updateSyncProgress("Using max visit time: " + l),
                dbService.syncHistory(i, l, o, r, t);
            },
          }));
  }),
  (dbService.syncHistory = async function (i, e, t, r, l) {
    dbService.db || dbService.init(i);
    dbService.updateSyncProgress(`maxVisitTime: ${new Date(e)}`);
    var o = e + 1;
    dbService.updateSyncProgress(
      "Syncing visits since " + new Date(o).toString()
    );
    var s = { currentTimestamp: t, maxVisitTime: e, maxVisitTimeSynced: 0 };
    utils.logInfo("======== Performance Start ========"),
      utils.logInfo("=============== URLs =============="),
      dbService.performance.setStartAt(Date.now()),
      dbService.performance.setEndAt(Date.now()),
      dbService.performance.setRecordCount(0),
      utils.logInfo(
        `[performance][urls] ${JSON.stringify(dbService.performance)}`
      );
    let n = "";
    r.length > 0
      ? (function (i, e) {
          for (var t = [], r = 0, l = i.length, o = 0, c = 0; c < l; ++c) {
            var d = i[c].url,
              _ = utils.formatTitle(i[c].title),
              u = utils.extractHost(d),
              p = utils.getDomainPortion(u),
              h = utils.getDomainCategory(p, d),
              a = h.name ?? "",
              v = h.collection_id ?? 0;
            "" == _ && (_ = null),
              n.length > 0 && (n += " UNION "),
              (n += `\n                SELECT '${utils.sqlReplace(d)}','${
                void 0 === u ? "" : utils.sqlReplace(u)
              }', '${
                void 0 === p ? "" : utils.sqlReplace(p)
              }','${utils.sqlReplace(_)}','${utils.sqlReplace(
                a
              )}', ${v}\n            `),
              r++,
              (++o % 200 != 0 && o != l) ||
                (dbService.db.exec({
                  sql: `INSERT OR IGNORE INTO hp_url (url, host, root_domain, title, name, collection_id) \n                     ${n}\n                    `,
                }),
                (n = ""),
                dbService.updateSyncProgressPercentage({
                  type: 1,
                  total: l,
                  finished: o,
                  msg: `Saved ${o} / ${l} browsing URLs - ${Math.round(
                    (o / l) * 100
                  ).toFixed(2)}%`,
                  percentage: Math.round((o / l) * 100).toFixed(0),
                }));
          }
          utils.logInfo("=============== URLs =============="),
            utils.logInfo("======== Performance End ========"),
            dbService.performance.setEndAt(Date.now()),
            dbService.performance.setRecordCount(o),
            utils.logInfo(
              `[performance][urls] ${JSON.stringify(dbService.performance)}`
            );
          let S = "",
            E = 0,
            b = [];
          for (c = 0; c < l; c++)
            if (
              ((d = i[c].url),
              (S = S.length > 0 ? S + " UNION ALL " : S),
              (S += ` SELECT urlid, url FROM hp_url WHERE url='${d.replaceAll(
                "'",
                "''"
              )}' `),
              E++,
              E % 200 == 0 || E == l)
            ) {
              if (
                (dbService.db.exec({
                  sql: S,
                  rowMode: "object",
                  resultRows: b,
                }),
                b.length > 0)
              )
                for (let i = 0; i < b.length; i++)
                  t.push({ urlid: b[i].urlid, url: b[i].url });
              (S = ""), (b = []);
            }
          utils.logInfo("URLS: " + l + " found. " + r + " inserted."),
            reply("findVisits", { urls: t, syncTimeConfig: s }),
            e();
        })(r, l)
      : (dbService.updateSyncProgress("No history items found to sync"), l());
  }),
  (dbService.saveVisits = async function (i, e, t) {
    dbService.db || dbService.init(i);
    var r = e.urls,
      l = e.maxVisitTimeSynced;
    dbService.updateSyncProgress(`[saveVisits]: ${r.length}`),
      dbService.performance.setStartAt(Date.now());
    var o = 0,
      s = 0;
    var n = l;
    utils.logInfo("======== Performance Start ========"),
      utils.logInfo("============== Visits ============="),
      dbService.performance.setStartAt(Date.now()),
      dbService.performance.setEndAt(Date.now()),
      dbService.performance.setRecordCount(0),
      utils.logInfo(
        `[performance][visits] ${JSON.stringify(dbService.performance)}`
      );
    let c = "";
    for (var d = 0; d < r.length; d++) {
      var _ = r[d];
      o += _.visitItems.length;
      for (var u = d == r.length - 1, p = 0; p < _.visitItems.length; p++) {
        var h = p == _.visitItems.length - 1,
          a = _.visitItems[p],
          v = new Date(a.visitTime),
          S = utils.dateToString(v);
        n < a.visitTime && (n = a.visitTime),
          c.length > 0 && (c += " UNION "),
          (c += ` SELECT ${_.urlid}, ${
            a.visitTime
          },'${S}', ${v.getFullYear()}, ${v.getMonth()},${v.getDate()},${v.getDay()},${v.getHours()},'${
            a.transition
          }' `),
          ++s % 500 == 0 &&
            (dbService.db.exec({
              sql: `INSERT OR IGNORE INTO hp_visit (urlid, visit_time, visit_date, year, month, month_day, week_day, hour, transition_type) \n                    ${c}`,
            }),
            (c = ""),
            dbService.updateSyncProgressPercentage({
              type: 2,
              total: r.length,
              finished: s,
              msg: `Saved ${s} visits items - ${Math.round(
                ((d + 1) / r.length) * 100
              ).toFixed(2)}%`,
              percentage: Math.round(
                Math.round(((d + 1) / r.length) * 100).toFixed(0)
              ),
            })),
          await (async function (i, e) {
            i &&
              e &&
              (reply("setLastHistorySavedPoint", { timeLastSaved: n }),
              utils.logInfo("Setting last history sync time: " + l),
              utils.logInfo("VISITS: " + o + " found. " + s + " inserted."),
              c.length > 0 &&
                (dbService.db.exec({
                  sql: `INSERT OR IGNORE INTO hp_visit (urlid, visit_time, visit_date, year, month, month_day, week_day, hour, transition_type) \n                            ${c}`,
                }),
                (c = "")),
              dbService.updateSyncProgressPercentage({
                type: 2,
                total: o,
                finished: s,
                msg: `Saved ${s} visits items - 100.00%`,
                percentage: 100,
              }),
              t());
          })(u, h);
      }
    }
    utils.logInfo("============== Visits ============="),
      utils.logInfo("======== Performance End ========"),
      dbService.performance.setEndAt(Date.now()),
      dbService.performance.setRecordCount(s),
      utils.logInfo(
        `[performance][visits] ${JSON.stringify(dbService.performance)}`
      );
  }),
  (dbService.importFromUrls = async function (i, e, t) {
    dbService.db || dbService.init(i);
    dbService.updateSyncProgress(
      `Start importing: ${e.historyItems.urlCount} URLs`
    );
    e.historyItems.urlCount > 0
      ? (function (e, t) {
          var r = e.urlCount,
            l = 0,
            o = {};
          utils.logInfo("======== Performance Start ========"),
            utils.logInfo("=========== Import URLs ==========="),
            dbService.performance.setStartAt(Date.now()),
            dbService.performance.setEndAt(Date.now()),
            dbService.performance.setRecordCount(l),
            utils.logInfo(
              `[performance][urls] ${JSON.stringify(dbService.performance)}`
            );
          let s = "";
          for (var n in e.urls) {
            let i,
              t = utils.extractHost(n);
            o[t] ? (i = o[t]) : ((i = utils.getDomainPortion(t)), (o[t] = i));
            let c = "",
              d = e.urls[n].collection_id;
            if (0 == d) {
              let e = utils.getDomainCategory(i, n);
              (c = e.name ?? ""), (d = e.collection_id ?? 0);
            }
            let _ = utils.formatTitle(e.urls[n].title);
            "" == _ && (_ = null),
              s.length > 0 && (s += " UNION "),
              (s += `\n                SELECT '${utils.sqlReplace(n)}','${
                void 0 === t ? "" : utils.sqlReplace(t)
              }', '${
                void 0 === i ? "" : utils.sqlReplace(i)
              }','${utils.sqlReplace(_)}','${utils.sqlReplace(
                c
              )}', ${d}\n            `),
              (++l % 200 != 0 && l != r) ||
                (dbService.db.exec({
                  sql: `INSERT OR IGNORE INTO hp_url (url, host, root_domain, title, name, collection_id) \n                     ${s}\n                    `,
                }),
                (s = ""),
                dbService.updateSyncProgressPercentage({
                  type: 1,
                  total: r,
                  finished: l,
                  msg: `Imported ${l} / ${r} URLs - ${Math.round(
                    (l / r) * 100
                  ).toFixed(2)}%`,
                  percentage: Math.round((l / r) * 100).toFixed(0),
                }));
          }
          utils.logInfo("======== Performance End ========"),
            utils.logInfo("=========== Import URLs ==========="),
            dbService.performance.setEndAt(Date.now()),
            dbService.performance.setRecordCount(r),
            utils.logInfo(
              `[performance][urls] ${JSON.stringify(dbService.performance)}`
            );
          let c = "",
            d = 0,
            _ = [];
          for (var n in e.urls)
            if (
              ((c = c.length > 0 ? c + " UNION ALL " : c),
              (c += ` SELECT urlid, url FROM hp_url WHERE url='${n.replaceAll(
                "'",
                "''"
              )}' `),
              d++,
              d % 200 == 0 || d == r)
            ) {
              if (
                (dbService.db.exec({
                  sql: c,
                  rowMode: "object",
                  resultRows: _,
                }),
                _.length > 0)
              )
                for (let i = 0; i < _.length; i++)
                  e.urls.hasOwnProperty(_[i].url) &&
                    (e.urls[_[i].url].urlid = _[i].urlid);
              (c = ""), (_ = []);
            }
          dbService.saveImportVisits(i, e, t), t();
        })(e.historyItems, t)
      : (dbService.updateSyncProgress("No history items found to be imported"),
        t());
  }),
  (dbService.saveImportVisits = async function (i, e, t) {
    dbService.db || dbService.init(i);
    var r = e.urls,
      l = e.urlCount;
    dbService.updateSyncProgress(`[saveImportVisits]: ${r.length}`);
    var o = 0,
      s = 0;
    var n = 0;
    utils.logInfo("======== Performance Start ========"),
      utils.logInfo("=========== Import Visits ==========="),
      dbService.performance.setStartAt(Date.now()),
      dbService.performance.setEndAt(Date.now()),
      dbService.performance.setRecordCount(s),
      utils.logInfo(
        `[performance][import visits] ${JSON.stringify(dbService.performance)}`
      );
    let c = "";
    for (var d in r) {
      ++n;
      var _ = r[d];
      o += _.visits.length;
      for (var u = n == e.urlCount, p = 0; p < _.visits.length; p++) {
        var h = p == _.visits.length - 1,
          a = _.visits[p],
          v = new Date(a.visitTime),
          S = utils.dateToString(v);
        c.length > 0 && (c += " UNION "),
          (c += ` SELECT ${_.urlid}, ${
            a.visitTime
          },'${S}', ${v.getFullYear()}, ${v.getMonth()},${v.getDate()},${v.getDay()},${v.getHours()},'${
            a.transition
          }' `),
          ++s % 500 == 0 &&
            (dbService.db.exec({
              sql: `INSERT OR IGNORE INTO hp_visit (urlid, visit_time, visit_date, year, month, month_day, week_day, hour, transition_type) \n                    ${c}`,
            }),
            (c = ""),
            dbService.updateSyncProgressPercentage({
              type: 2,
              total: r.length,
              finished: s,
              msg: `Imported ${s} visits - ${Math.round((n / l) * 100).toFixed(
                2
              )}%`,
              percentage: Math.round((n / l) * 100).toFixed(0),
            })),
          await (async function (i, e) {
            i &&
              e &&
              (utils.logInfo("VISITS: " + o + " found. " + s + " inserted."),
              c.length > 0 &&
                (utils.logInfo(`[sqlInsert] ${c}`),
                dbService.db.exec({
                  sql: `INSERT OR IGNORE INTO hp_visit (urlid, visit_time, visit_date, year, month, month_day, week_day, hour, transition_type) \n                            ${c}`,
                }),
                (c = "")),
              dbService.updateSyncProgressPercentage({
                type: 2,
                total: o,
                finished: s,
                msg: `Imported ${s} visits - 100.00%`,
                percentage: 100,
              }),
              t());
          })(u, h);
      }
    }
    utils.logInfo("======== Performance Start ========"),
      utils.logInfo("=========== Import Visits ==========="),
      dbService.performance.setEndAt(Date.now()),
      dbService.performance.setRecordCount(s),
      utils.logInfo(
        `[performance][import visits] ${JSON.stringify(dbService.performance)}`
      );
  }),
  (dbService.getTopVisitsByCollection = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        dbService.updateSyncProgress("Getting top visits by collection...");
      let r =
        "SELECT hp_url.collection_id,hp_url.name,hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.urlid) AS total_visits FROM hp_url hp_url INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid GROUP BY hp_url.collection_id, iu.urlid ORDER BY total_visits DESC LIMIT ?;";
      if (0 == e.collections.length || 0 == e.collections[0]) {
        let i = [];
        dbService.db.exec({
          sql: r,
          bind: [e.top],
          rowMode: "object",
          resultRows: i,
        }),
          t(i);
      }
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.autoBackup = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        dbService.updateSyncProgress("Getting records for auto backup...");
      let r = "",
        l = e.lastBackupTime,
        o = e.backupMode;
      (l || "1" === o) && (r = ` WHERE hp_visit.visit_time >= ${l}`),
        utils.logInfo(`[auto backup] ${r}`);
      let s =
          "SELECT hp_url.url,hp_url.host,hp_url.title,hp_url.root_domain ,hp_visit.visit_time, hp_visit.transition_type, hp_url.collection_id, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          r +
          " ORDER BY hp_url.root_domain, hp_url.host, hp_url.url, hp_visit.visit_time;",
        n = [];
      dbService.db.exec({ sql: s, bind: [], rowMode: "object", resultRows: n }),
        t(n);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.exportHistory = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        dbService.updateSyncProgress("Getting records for exporting...");
      let e =
          "SELECT hp_url.url,hp_url.host,hp_url.title,hp_url.root_domain ,hp_visit.visit_time, hp_visit.transition_type, hp_url.collection_id, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  ORDER BY hp_url.root_domain, hp_url.host, hp_url.url, hp_visit.visit_time;",
        r = [];
      dbService.db.exec({ sql: e, bind: [], rowMode: "object", resultRows: r }),
        t(r);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.exportCurrentSearch = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        dbService.updateSyncProgress("Getting records for exporting...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s =
          "SELECT hp_url.url,hp_url.host,hp_url.title,hp_url.root_domain ,hp_visit.visit_time, hp_visit.transition_type, hp_url.collection_id, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          " ORDER BY hp_url.root_domain, hp_url.host, hp_url.url, hp_visit.visit_time ",
        n = [];
      dbService.db.exec({ sql: s, bind: o, rowMode: "object", resultRows: n }),
        t(n);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getVisitsBySearch = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo("Getting visits by search...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s = r.offset,
        n = 0,
        c =
          "SELECT COUNT(hp_visit.visitid) AS total_records  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l;
      utils.logInfo(`sql: ${c}`);
      let d = [];
      dbService.db.exec({
        sql: c,
        bind: [...o],
        rowMode: "object",
        resultRows: d,
      }),
        (n = d[0].total_records),
        (c =
          "SELECT hp_visit.urlid, hp_url.url,hp_url.title,hp_url.host,hp_visit.visitid,hp_visit.visit_time,hp_visit.visit_date,hp_visit.year,hp_visit.month,hp_visit.month_day,hp_visit.week_day,hp_visit.hour, hp_url.collection_id, hp_url.root_domain, hp_url.is_pinned FROM hp_url hp_url INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          "ORDER BY hp_visit.visit_time DESC LIMIT ? OFFSET ?;"),
        utils.logInfo(`sql: ${c}`),
        utils.logInfo(`sql bind: ${o}`),
        utils.logInfo(`sql limit: ${e.recent_visit_page_size}`),
        utils.logInfo(`sql offset: ${s}`),
        (d = []),
        dbService.db.exec({
          sql: c,
          bind: [...o, e.recent_visit_page_size, s],
          rowMode: "object",
          resultRows: d,
        }),
        t(d, {
          total_records: n,
          current_page: e.current_page ?? 1,
          page_size: e.recent_visit_page_size,
        });
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getTopVisitsBySearch = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo("Getting top visits by search...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s =
          "SELECT hp_visit.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS total_visits, hp_url.collection_id, hp_url.root_domain FROM hp_url hp_url INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          " GROUP BY hp_url.urlid  ORDER BY total_visits DESC LIMIT ?;",
        n = [];
      dbService.db.exec({
        sql: s,
        bind: [...o, e.top_visit_page_size],
        rowMode: "object",
        resultRows: n,
      }),
        (s =
          "SELECT min(hp_visit.visit_time) AS earliest_visit_time, count(distinct hp_url.urlid) AS total_urls, count(hp_visit.visitid) AS total_visits FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid" +
          l),
        utils.logInfo(`[TOP URLS] ${s}`);
      let c = [];
      dbService.db.exec({ sql: s, bind: [], rowMode: "object", resultRows: c }),
        t(n, c);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getVisitsBySearchTerm = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        utils.logInfo("Gettig visits by search term...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s = r.offset,
        n = 0;
      utils.logInfo(`WHERE clause: ${JSON.stringify(r)}`),
        utils.logInfo(`Binds clause: ${[...o]}`),
        utils.logInfo(`Pagesize: ${e.recent_visit_page_size}`);
      let c =
        "SELECT COUNT(hp_visit.visitid) AS total_records  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
        l;
      utils.logInfo(`sql: ${c}`);
      let d = [];
      dbService.db.exec({
        sql: c,
        bind: [...o],
        rowMode: "object",
        resultRows: d,
      }),
        (n = d[0].total_records),
        (c =
          "SELECT hp_visit.urlid, hp_url.url,hp_url.title,hp_url.host,hp_visit.visitid,hp_visit.visit_time,hp_visit.visit_date,hp_visit.year,hp_visit.month,hp_visit.month_day,hp_visit.week_day,hp_visit.hour, hp_url.collection_id, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          " ORDER BY hp_visit.visit_time DESC LIMIT ? OFFSET ?;"),
        utils.logInfo(`sql: ${c}`),
        (d = []),
        dbService.db.exec({
          sql: c,
          bind: [...o, e.recent_visit_page_size, s],
          rowMode: "object",
          resultRows: d,
        }),
        t(d, {
          total_records: n,
          current_page: e.current_page ?? 1,
          page_size: e.recent_visit_page_size,
        });
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getVisitsAdvancedSearch = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        utils.logInfo("Gettig visits by advanced search ...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s = r.offset,
        n = 0;
      utils.logInfo(`WHERE clause: ${JSON.stringify(r)}`),
        utils.logInfo(`Binds clause: ${[...o]}`),
        utils.logInfo(`Pagesize: ${e.recent_visit_page_size}`);
      let c =
        "SELECT COUNT(hp_visit.visitid) AS total_records  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
        l;
      utils.logInfo(`sql: ${c}`);
      let d = [];
      dbService.db.exec({
        sql: c,
        bind: [...o],
        rowMode: "object",
        resultRows: d,
      }),
        (n = d[0].total_records),
        (c =
          "SELECT hp_visit.urlid, hp_url.url,hp_url.title,hp_url.host,hp_visit.visitid,hp_visit.visit_time,hp_visit.visit_date,hp_visit.year,hp_visit.month,hp_visit.month_day,hp_visit.week_day,hp_visit.hour, hp_url.collection_id, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          " ORDER BY hp_visit.visit_time DESC LIMIT ? OFFSET ?;"),
        utils.logInfo(`sql: ${c}`),
        (d = []),
        dbService.db.exec({
          sql: c,
          bind: [...o, e.recent_visit_page_size, s],
          rowMode: "object",
          resultRows: d,
        }),
        t(d, {
          total_records: n,
          current_page: e.current_page ?? 1,
          page_size: e.recent_visit_page_size,
        });
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getPinnedUrlsByCollection = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        utils.logInfo("Gettig pinned urls by collection...");
      dbService.buildWhereClause(e);
      let r =
        " SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,'All' as name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M2  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=2 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M2  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=3 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M3  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=4 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M4  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=5 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M5  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=6 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M6  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=7 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M7  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=8 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M8  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=9 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M9  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=10 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M10  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=11 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M11  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=12 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M12  UNION ALL SELECT * FROM (SELECT hp_url.urlid, hp_url.url,hp_url.title,hp_url.host,COUNT(hp_visit.visitid) AS visit_count,hp_url.collection_id,collection.name, hp_url.root_domain, hp_url.is_pinned  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid  INNER JOIN collection collection ON hp_url.collection_id=collection.collection_id  WHERE collection.collection_id=13 AND hp_url.is_pinned=1  GROUP BY hp_url.urlid ORDER BY visit_count DESC LIMIT 10 ) M13 ";
      utils.logInfo(`sql: ${r}`);
      let l = [];
      dbService.db.exec({ sql: r, bind: [], rowMode: "object", resultRows: l }),
        t(l);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.deleteVisits = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        utils.logInfo("Delete visits ...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds;
      utils.logInfo(`WHERE clause: ${JSON.stringify(r)}`),
        utils.logInfo(`Binds clause: ${[...o]}`),
        utils.logInfo(`Pagesize: ${e.recent_visit_page_size}`);
      let s = "DELETE FROM hp_visit AS hp_visit " + l;
      utils.logInfo(`sql: ${s}`);
      dbService.db.exec({ sql: s, bind: [...o], rowMode: "object" }), t(e);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.pinUrls = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        dbService.updateSyncProgress("Pin urls ...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s = "UPDATE hp_url AS hp_url SET is_pinned=1 " + l;
      utils.logInfo(`sql: ${s}`),
        dbService.db.exec({ sql: s, bind: [...o], rowMode: "object" }),
        t(e);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.moveUrlsIntoCategory = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i);
      let r = e.items[0],
        l = 0;
      r && (l = e.items[0].categoryid),
        utils.logInfo(`[data config]: ${JSON.stringify(e.items[0])}`),
        utils.logInfo("Move urls into category ...");
      let o = dbService.buildWhereClause(e),
        s = o.sql,
        n = o.binds;
      utils.logInfo(`WHERE clause: ${JSON.stringify(o)}`),
        utils.logInfo(`Binds clause: ${[...n]}`);
      let c = "UPDATE hp_url AS hp_url SET collection_id=? " + s;
      utils.logInfo(`[sql]: ${c}`),
        dbService.db.exec({ sql: c, bind: [l, ...n], rowMode: "object" }),
        t(e);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.unPinUrls = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i),
        utils.logInfo(`data config: ${JSON.stringify(e)}`),
        utils.logInfo("Unpin urls ...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s = "UPDATE hp_url AS hp_url SET collection_id=0, is_pinned=0 " + l;
      utils.logInfo(`sql: ${s}`),
        dbService.db.exec({ sql: s, bind: [...o], rowMode: "object" }),
        t(e);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.generatePinnedUrls = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i);
      let r = e.items;
      utils.logInfo(`[data config]: ${JSON.stringify(r)}`),
        utils.logInfo("Generate pinned urls by category ...");
      let l =
        "UPDATE hp_url AS hp_url SET is_pinned=1\n            WHERE hp_url.urlid IN (\n                SELECT hp_url.urlid FROM hp_url hp_url\n                INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid\n                WHERE hp_url.collection_id=?\n                GROUP BY hp_url.collection_id, hp_url.urlid\n                ORDER BY COUNT(hp_visit.visitid) DESC LIMIT 10\n            )\n            ";
      for (let i = 0; i < r.length; i++)
        utils.logInfo(`[sql]: ${l}`),
          dbService.db.exec({ sql: l, bind: [r[i]], rowMode: "object" });
      t(e);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.getTopHosts = async function (i, e, t) {
    try {
      dbService.db || dbService.init(i), utils.logInfo("Getting top hosts...");
      let r = dbService.buildWhereClause(e),
        l = r.sql,
        o = r.binds,
        s =
          "SELECT hp_url.host, hp_url.root_domain, hp_url.url, COUNT(hp_visit.urlid) AS total_visits  FROM hp_url hp_url  INNER JOIN hp_visit hp_visit ON hp_url.urlid=hp_visit.urlid " +
          l +
          " GROUP BY hp_url.host  ORDER BY total_visits DESC LIMIT ?;",
        n = [];
      dbService.db.exec({
        sql: s,
        bind: [...o, e.top_host_page_size],
        rowMode: "object",
        resultRows: n,
      }),
        t(n);
    } catch (i) {
      utils.logError(i.message);
    }
  }),
  (dbService.buildWhereClause = function (i) {
    if (i.is_advanced_search) return this.buildWhereClauseForAdvancedSearch(i);
    if (1 == i.collection_id) return this.buildWhereClauseForPinnedCategory(i);
    var e = [],
      t = [],
      r = 0,
      l = i.collection_id ?? 0;
    l > 0 && (e.push(" hp_url.collection_id = ?"), t.push(l));
    var o = i.host ?? "";
    o && (e.push(" hp_url.host = ?"), t.push(o)),
      (i.is_pinned ?? !1) && (e.push(" hp_url.is_pinned = ?"), t.push(1));
    var s = i.period_date_from,
      n = i.period_date_to;
    if (s) {
      e.push(" hp_visit.visit_time >= ?");
      var c = new Date(s);
      t.push(c.getTime() + 6e4 * c.getTimezoneOffset());
    }
    if (n) {
      e.push(" hp_visit.visit_time <= ?");
      c = new Date(n);
      t.push(c.getTime() + 6e4 * c.getTimezoneOffset() + 864e5);
    }
    var d = i.is_for_visit ?? !1,
      _ = i.items;
    if (d && _.length > 0) {
      var u = "",
        p = [];
      for (let i = 0; i < _.length; i++)
        (p = _[i].urlid_visitid.split("|"))[1] &&
          (u && (u += ", "), (u += "? "), t.push(p[1]));
      u && e.push(` hp_visit.visitid in (${u})`);
    }
    var h = i.is_for_url ?? !1,
      a = i.items;
    if (h && a.length > 0) {
      (u = ""), (p = []);
      for (let i = 0; i < a.length; i++)
        (p = a[i].urlid_visitid.split("|"))[0] &&
          (u && (u += ", "), (u += "? "), t.push(p[0]));
      u && e.push(` hp_url.urlid in (${u})`);
    }
    var v = "";
    e.length && (v = " WHERE " + e.join(" AND ") + " ");
    var S = i.search_term ?? "",
      E = "";
    if ((S = S.replace(",", " ").trim())) {
      var b = S.split(" ");
      for (let i = 0; i < b.length; i++) {
        let e = b[i].trim();
        e &&
          (E.length > 0 && (E += " AND "),
          (E += ` (hp_url.title like '%${e}%' OR hp_url.url like '%${e}%'  OR hp_url.host like '%${e}%')`));
      }
      v ? (v += ` AND ${E} `) : (v = `WHERE ${E} `);
    }
    return (
      (r = (i.current_page - 1) * i.recent_visit_page_size) < 0 && (r = 0),
      { sql: v, binds: t, offset: r }
    );
  }),
  (dbService.buildWhereClauseForAdvancedSearch = function (i) {
    var e = [],
      t = [],
      r = 0,
      l = i.collection_id ?? 0;
    l > 0 && (e.push(" hp_url.collection_id = ?"), t.push(l));
    var o = i.host ?? "";
    o && (e.push(" hp_url.host = ?"), t.push(o));
    var s = "",
      n = i.adv_search_date_from,
      c = i.adv_search_date_to;
    if (n) {
      e.push(" hp_visit.visit_time >= ?");
      var d = new Date(n);
      t.push(d.getTime() + 6e4 * d.getTimezoneOffset());
    }
    if (c) {
      e.push(" hp_visit.visit_time <= ?");
      d = new Date(c);
      t.push(d.getTime() + 6e4 * d.getTimezoneOffset() + 864e5);
    }
    e.length && (s = " WHERE " + e.join(" AND ") + " ");
    var _ = i.adv_search_keywords ?? "",
      u = "";
    if ((_ = _.replace(",", " ").trim())) {
      var p = _.split(" ");
      for (let i = 0; i < p.length; i++) {
        let e = p[i].trim();
        e &&
          (u.length > 0 && (u += " AND "),
          (u += ` (hp_url.title like '%${e}%' OR hp_url.url like '%${e}%'  OR hp_url.host like '%${e}%')`));
      }
      s ? (s += ` AND ${u} `) : (s = `WHERE ${u} `);
    }
    var h = i.adv_search_domain ?? "",
      a = "";
    if ((h = h.trim())) {
      p = h.split(",");
      for (let i = 0; i < p.length; i++) {
        let e = p[i].trim();
        e &&
          (a.length > 0 && (a += " OR "),
          e.startsWith("=")
            ? e.substring(1) && (a += ` hp_url.host='${e.substring(1)}' `)
            : (a += ` hp_url.host like '%${e}' `));
      }
      s ? (s += ` AND (${a})`) : (s = `WHERE (${a}) `);
    }
    var v = i.adv_search_url ?? "",
      S = "";
    return (
      (v = v.trim()) &&
        ((S += ` hp_url.url like '%${v}%'`),
        s ? (s += ` AND (${S})`) : (s = `WHERE ${S} `)),
      (r = (i.current_page - 1) * i.recent_visit_page_size) < 0 && (r = 0),
      { sql: s, binds: t, offset: r }
    );
  }),
  (dbService.buildWhereClauseForPinnedCategory = function (i) {
    var e = [],
      t = [],
      r = i.collection_id ?? 0;
    r > 0 && (e.push(" hp_url.collection_id = ?"), t.push(r)),
      e.push(" hp_url.is_pinned = 1");
    var l = "";
    return (
      e.length && (l = " WHERE " + e.join(" AND ") + " "),
      0,
      { sql: l, binds: t, offset: 0 }
    );
  }),
  (dbService.updateSyncProgress = function (i) {
    utils.logInfo(`[db service] ${i}`);
  }),
  (dbService.updateSyncProgressPercentage = function (i) {
    reply("updateProgressBar", i);
  });
