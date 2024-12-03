let sqlite3Js = "sqlite3.js";
const urlParams = new URL(self.location.href).searchParams;
let db;
urlParams.has("sqlite3.dir") &&
  (sqlite3Js = urlParams.get("sqlite3.dir") + "/" + sqlite3Js),
  importScripts(
    sqlite3Js,
    "../../config.js",
    "settings.js",
    "domain_category.js",
    "domain_root.js",
    "utils.js",
    "db_service.js"
  ),
  utils.logInfo("Worker is working.");
var parent = self;
let config = {
  timeLastSaved: 0,
  currentTimestamp: Date.now(),
  historyItems: [],
};
var sqliteModule = self.sqlite3InitModule({
  print: utils.logInfo,
  printErr: utils.logError,
});
const getDatabase = function (e) {
    if (!self.db || !self.db.isOpen()) {
      e.capi;
      const t = e.oo1;
      e.opfs
        ? (utils.logInfo("Got OPFS db"),
          (self.db = new e.opfs.OpfsDb("/history_plus.sqlite3")))
        : (utils.logInfo("Got OO db"),
          (self.db = new t.DB("/history_plus.sqlite3", "ct")));
    }
    return utils.logInfo(`[DB] ${e.opfs.OpfsDb}`), self.db;
  }.bind(parent),
  processCloseDatabase = function (e, t) {}.bind(parent),
  processSaveHistory = function (e, t) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start database initializing..."),
        utils.logInfo(`${self.db.isOpen()}`),
        dbService.db || dbService.init(self.db),
        dbService.initAndSync(self.db, t, function () {
          reply("syncUrlSuccess", t.historyItems.length);
        });
    } catch (e) {
      utils.logError(e.message), reply("waitAndReload", { waiting: 2e3 });
    }
  }.bind(parent),
  processImportFromFiles = function (e, t) {
    try {
      (self.db = getDatabase(e)),
        dbService.db || dbService.init(self.db),
        dbService.importFromUrls(self.db, t, function () {
          reply("importUrlSuccess", t.historyItems.urlCount);
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processSaveVisits = function (e, t) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start saving visits..."),
        dbService.db || dbService.init(self.db),
        dbService.saveVisits(self.db, t, function () {
          utils.logInfo("Visits saved..."), reply("syncSuccess", {});
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processClearData = function (e, t) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start clear data..."),
        dbService.db || dbService.init(self.db),
        t.url &&
          dbService.clearUrls(self.db, function () {
            utils.logInfo("Urls cleared...");
          }),
        t.visit &&
          dbService.clearVisits(self.db, function () {
            utils.logInfo("Visits cleared...");
          }),
        t.collection &&
          dbService.clearCollection(self.db, function () {
            utils.logInfo("Collection cleared...");
          }),
        t.pinned &&
          dbService.clearPinned(self.db, function () {
            utils.logInfo("Pinned cleared...");
          });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processTopVisitsByCollection = function (e, t) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get top visits by collection..."),
        dbService.db || dbService.init(self.db),
        dbService.getTopVisitsByCollection(self.db, t, function (e) {
          utils.logInfo("Got top visits by collection..."),
            reply("gotTopVisitsByCollectionData", e);
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processVisitsBySearch = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get visits by search..."),
        dbService.db || dbService.init(self.db),
        dbService.getVisitsBySearch(self.db, t, function (e, t) {
          utils.logInfo("Got visits by search..."),
            reply("gotVisitsBySearchData", {
              data: e,
              paging: t,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processTopVisitsBySearch = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get top visits by search..."),
        dbService.db || dbService.init(self.db),
        dbService.getTopVisitsBySearch(self.db, t, function (e, t) {
          utils.logInfo("Got top visits by search..."),
            reply("gotTopVisitsBySearchData", {
              data: { data: e, stat: t },
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processVisitsBySearchTerm = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get visits by search term..."),
        dbService.db || dbService.init(self.db),
        dbService.getVisitsBySearchTerm(self.db, t, function (e, t) {
          utils.logInfo("Got visits by search term..."),
            reply("gotVisitsBySearchTermData", {
              data: e,
              paging: t,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processVisitsByAdvancedSearch = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get visits by advanced search..."),
        dbService.db || dbService.init(self.db),
        dbService.getVisitsAdvancedSearch(self.db, t, function (e, t) {
          utils.logInfo("Got visits by advanced search..."),
            reply("gotVisitsByAdvancedSearch", {
              data: e,
              paging: t,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processPinnedUrlsByCollection = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start pinned urls by collection..."),
        dbService.db || dbService.init(self.db),
        dbService.getPinnedUrlsByCollection(self.db, t, function (e) {
          utils.logInfo("Got pinned urls by collection..."),
            reply("gotPinnedUrlsByCollectionData", {
              data: e,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processDeleteVisits = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start deleting visits..."),
        dbService.db || dbService.init(self.db),
        dbService.deleteVisits(self.db, t, function (e) {
          utils.logInfo("Deleted visits..."),
            reply("gotDeleteVisitsData", { data: t, callbackContentId: s });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processPinUrls = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start pinning urls..."),
        dbService.db || dbService.init(self.db),
        dbService.pinUrls(self.db, t, function (e) {
          utils.logInfo("Pin url..."),
            reply("gotPinUrlsData", { data: t, callbackContentId: s });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processMoveUrlsIntoCategory = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start moving urls into category..."),
        dbService.db || dbService.init(self.db),
        dbService.moveUrlsIntoCategory(self.db, t, function (e) {
          utils.logInfo("Moving urls into category..."),
            reply("gotMoveUrlsIntoCategoryData", {
              data: t,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processGeneratePinnedUrls = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start generate pinned urls..."),
        dbService.db || dbService.init(self.db),
        dbService.generatePinnedUrls(self.db, t, function (e) {
          utils.logInfo("Generating pinned urls by category..."),
            reply("gotGeneratePinnedUrlsData", {
              data: t,
              callbackContentId: s,
            });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processUnPinUrls = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start pinning urls..."),
        dbService.db || dbService.init(self.db),
        dbService.unPinUrls(self.db, t, function (e) {
          utils.logInfo("Pin url..."),
            reply("gotUnPinUrlsData", { data: t, callbackContentId: s });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processTopHosts = function (e, t, s) {
    try {
      (self.db = getDatabase(e)),
        utils.logInfo("Start get top hosts..."),
        dbService.db || dbService.init(self.db),
        dbService.getTopHosts(self.db, t, function (e) {
          utils.logInfo("Got top hosts..."),
            reply("gotTopHostsData", { data: e, callbackContentId: s });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processAutoBackup = function (e, t) {
    try {
      self.db = getDatabase(e);
      let s = {
        lastBackupTime: t.lastBackupTime ?? 0,
        backupMode: t.backupMode ?? 1,
      };
      utils.logInfo("Start auto backup..."),
        dbService.db || dbService.init(self.db),
        dbService.autoBackup(self.db, s, function (e) {
          utils.logInfo("Got auto backup data..."),
            reply("gotAutoBackupData", { data: e });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processExportHistory = function (e, t) {
    try {
      self.db = getDatabase(e);
      let s = { lastBackupTime: 0, backupMode: t.backupMode ?? 1 };
      utils.logInfo("Start exporting..."),
        dbService.db || dbService.init(self.db),
        dbService.exportHistory(self.db, s, function (e) {
          utils.logInfo("Got exporting data..."),
            reply("gotExportHistoryData", { data: e });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  processCurrentSearchExport = function (e, t) {
    try {
      self.db = getDatabase(e);
      let s = t;
      utils.logInfo("Start exporting current search ..."),
        dbService.db || dbService.init(self.db),
        dbService.exportCurrentSearch(self.db, s, function (e) {
          utils.logInfo("Got exporting current search data..."),
            reply("gotCurrentSearchExportData", { data: e });
        });
    } catch (e) {
      utils.logError(e.message);
    }
  }.bind(parent),
  queryableFunctions = {
    saveHistoryFromLastSavedPoint(e) {
      utils.logInfo(`worker:timeLastSaved-> ${e.timeLastSaved}`),
        utils.logInfo(`worker:currentTime-> ${e.currentTime}`),
        utils.logInfo(`worker:historyItem-> ${e.historyItems.length}`);
      let t = {
        timeLastSaved: e.timeLastSaved ?? 0,
        currentTime: e.currentTime ?? Date.now(),
        historyItems: e.historyItems,
      };
      parent.sqliteModule.then(function (e) {
        utils.logInfo("Get into lastHistorySavedPoint event");
        try {
          processSaveHistory(e, t);
        } catch (e) {
          utils.logError("Exception:", e.message);
        }
      });
    },
    saveVisits(e) {
      utils.logInfo("worker:saveVisits-> ", e.urls[0]);
      let t = { urls: e.urls, maxVisitTimeSynced: e.maxVisitTimeSynced };
      parent.sqliteModule.then(function (e) {
        utils.logInfo("Get into saveVisits event");
        try {
          processSaveVisits(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    importFromFiles(e) {
      utils.logInfo(`worker:importFromFiles-> ${e.historyItems.urlCount} URLs`);
      let t = { historyItems: e.historyItems };
      parent.sqliteModule.then(function (e) {
        utils.logInfo("Get into importFromFiles event");
        try {
          processImportFromFiles(e, t);
        } catch (e) {
          utils.logError("Exception:", e.message);
        }
      });
    },
    getTopVisitsByCollection(e) {
      utils.logInfo(`worker:getTopVisitsByCollection-> ${e}`);
      let t = {
        date_from: e.date_from ?? 1,
        date_to: e.date_to ?? Date.now(),
        top: e.top ?? 10,
        collections: e.collections,
      };
      parent.sqliteModule.then(function (e) {
        try {
          processTopVisitsByCollection(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getTopHosts(e) {
      utils.logInfo(`worker:getTopHosts-> ${e}`);
      let t = {
          collection_id: e.searchConfig.collection_id ?? 0,
          top_host_page_size: e.searchConfig.top_host_page_size ?? 30,
          recent_visit_page_size: e.searchConfig.recent_visit_page_size ?? 500,
          top_visit_page_size: e.searchConfig.top_visit_page_size ?? 10,
          host: e.searchConfig.host ?? "",
          search_term: e.searchConfig.search_term ?? "",
          is_pinned: e.searchConfig.is_pinned ?? !1,
          is_advanced_search: e.searchConfig.is_advanced_search,
          adv_search_keywords: e.searchConfig.adv_search_keywords,
          adv_search_date_from: e.searchConfig.adv_search_date_from,
          adv_search_date_to: e.searchConfig.adv_search_date_to,
          adv_search_domain: e.searchConfig.adv_search_domain,
          adv_search_url: e.searchConfig.adv_search_url,
        },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processTopHosts(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getVisitsBySearch(e) {
      utils.logInfo(`worker:getVisitsBySearch-> ${JSON.stringify(e)}`);
      let t = {
          collection_id: e.searchConfig.collection_id ?? 0,
          top_host_page_size: e.searchConfig.top_host_page_size ?? 30,
          recent_visit_page_size: e.searchConfig.recent_visit_page_size ?? 500,
          top_visit_page_size: e.searchConfig.top_visit_page_size ?? 10,
          host: e.searchConfig.host ?? "",
          search_term: e.searchConfig.search_term ?? "",
          is_pinned: e.searchConfig.is_pinned ?? !1,
          current_page: e.searchConfig.current_page ?? 1,
          period_date_from: e.searchConfig.period_date_from ?? "",
          period_date_to: e.searchConfig.period_date_to ?? "",
        },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processVisitsBySearch(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getTopVisitsBySearch(e) {
      let t = {
          collection_id: e.searchConfig.collection_id ?? 0,
          top_host_page_size: e.searchConfig.top_host_page_size ?? 30,
          recent_visit_page_size: e.searchConfig.recent_visit_page_size ?? 500,
          top_visit_page_size: e.searchConfig.top_visit_page_size ?? 10,
          host: e.searchConfig.host ?? "",
          search_term: e.searchConfig.search_term ?? "",
          is_pinned: e.searchConfig.is_pinned ?? !1,
        },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processTopVisitsBySearch(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getVisitsBySearchTerm(e) {
      let t = {
          collection_id: e.searchConfig.collection_id ?? 0,
          top_host_page_size: e.searchConfig.top_host_page_size ?? 30,
          recent_visit_page_size: e.searchConfig.recent_visit_page_size ?? 500,
          top_visit_page_size: e.searchConfig.top_visit_page_size ?? 10,
          host: e.searchConfig.host ?? "",
          search_term: e.searchConfig.search_term ?? "",
          is_pinned: e.searchConfig.is_pinned ?? !1,
          current_page: e.searchConfig.current_page ?? 1,
        },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processVisitsBySearchTerm(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getVisitsByAdvancedSearch(e) {
      let t = {
          collection_id: e.searchConfig.collection_id ?? 0,
          top_host_page_size: e.searchConfig.top_host_page_size ?? 30,
          recent_visit_page_size: e.searchConfig.recent_visit_page_size ?? 500,
          top_visit_page_size: e.searchConfig.top_visit_page_size ?? 10,
          host: e.searchConfig.host ?? "",
          search_term: e.searchConfig.search_term ?? "",
          is_pinned: e.searchConfig.is_pinned ?? !1,
          current_page: e.searchConfig.current_page ?? 1,
          is_advanced_search: e.searchConfig.is_advanced_search,
          adv_search_keywords: e.searchConfig.adv_search_keywords,
          adv_search_date_from: e.searchConfig.adv_search_date_from,
          adv_search_date_to: e.searchConfig.adv_search_date_to,
          adv_search_domain: e.searchConfig.adv_search_domain,
          adv_search_url: e.searchConfig.adv_search_url,
        },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processVisitsByAdvancedSearch(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    deleteVisits(e) {
      let t = { items: e.itemData ?? [], is_for_visit: !0 },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processDeleteVisits(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    pinUrls(e) {
      let t = { items: e.itemData ?? [], is_for_url: !0 },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processPinUrls(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    unPinUrls(e) {
      let t = { items: e.itemData ?? [], is_for_url: !0 },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processUnPinUrls(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    moveUrlsIntoCategory(e) {
      let t = { items: e.itemData ?? [], is_for_url: !0 },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processMoveUrlsIntoCategory(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    generatePinnedUrls(e) {
      let t = { items: e.itemData ?? [] },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processGeneratePinnedUrls(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    getPinnedUrlsByCollection(e) {
      let t = { collection_id: e.searchConfig.collection_id },
        s = e.callbackContentId;
      parent.sqliteModule.then(function (e) {
        try {
          processPinnedUrlsByCollection(e, t, s);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    closeDatabase(e) {
      let t = { force: e.force ?? !1 };
      parent.sqliteModule.then(function (e) {
        try {
          processCloseDatabase(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    clearData(e) {
      utils.logInfo(`Clear data: ${e}`);
      let t = e;
      parent.sqliteModule.then(function (e) {
        utils.logInfo("Get into clearData event");
        try {
          processClearData(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    autoBackup(e) {
      let t = e;
      parent.sqliteModule.then(function (e) {
        try {
          processAutoBackup(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    exportHistory(e) {
      let t = e;
      parent.sqliteModule.then(function (e) {
        try {
          processExportHistory(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    exportCurrentSearchResult(e) {
      let t = e;
      parent.sqliteModule.then(function (e) {
        try {
          processCurrentSearchExport(e, t);
        } catch (e) {
          utils.logError(e.message);
        }
      });
    },
    waitSomeTime() {
      setTimeout(() => {
        reply("doAlert", 3, "seconds");
      }, 3e3);
    },
  };
function defaultReply(e) {}
function reply(e, ...t) {
  if (!e) throw new TypeError("reply - not enough arguments");
  postMessage({ queryMethodListener: e, queryMethodArguments: t });
}
onmessage = (e) => {
  e.data instanceof Object &&
  Object.hasOwn(e.data, "queryMethod") &&
  Object.hasOwn(e.data, "queryMethodArguments")
    ? queryableFunctions[e.data.queryMethod].apply(
        self,
        e.data.queryMethodArguments
      )
    : defaultReply(e.data);
};
