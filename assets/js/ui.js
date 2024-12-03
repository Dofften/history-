"use strict";
var ui = {
  menus: [
    { name: "All", icon: "mdi mdi-home", collection_id: 0 },
    { name: "Pinned", icon: "mdi mdi-pin", collection_id: 1 },
    { name: "Documents", icon: "mdi mdi-file-document", collection_id: 2 },
    { name: "Email", icon: "mdi mdi-email", collection_id: 3 },
    { name: "Morning Read", icon: "mdi mdi-book", collection_id: 4 },
    { name: "Tools", icon: "mdi mdi-tools", collection_id: 5 },
    { name: "News", icon: "mdi mdi-newspaper", collection_id: 6 },
    { name: "Social", icon: "mdi mdi-account-group", collection_id: 7 },
    { name: "Entertainment", icon: "mdi mdi-animation-play", collection_id: 8 },
    { name: "Learning", icon: "mdi mdi-school", collection_id: 9 },
    { name: "Shop", icon: "mdi mdi-shopping", collection_id: 10 },
    { name: "Finance", icon: "mdi mdi-finance", collection_id: 11 },
    { name: "Travel", icon: "mdi mdi-airplane", collection_id: 12 },
    { name: "Hobby", icon: "mdi mdi-rocket", collection_id: 13 },
  ],
  showLeftNav: function (e, t) {
    let i = "",
      n = "#",
      a = "",
      s = t ?? !1,
      l = ui.menus;
    for (let t = 0; t < l.length; t++)
      (n = s
        ? "#"
        : utils.extensionPageUrl("index.html", [
            { param: "cid", value: l[t].collection_id },
          ])),
        (a = ""),
        e == l[t].collection_id && (a = " on"),
        (i += `\n            <li>\n            <a href="${n}" aria-current="page" data-collectionId=${
          l[t].collection_id
        } class="nav-menu has-icon ${a}">\n                <span class="icon"><i class="${
          l[t].icon
        }"></i></span>\n                <span class="menu-item-label"> ${chrome.i18n.getMessage(
          "left_nav_menu_category_" + l[t].collection_id
        )}</span>\n            </a>\n            </li>\n        `);
    let o = `\n            <div class="aside-tools">\n                <div class="navbar-brand">\n                    <img src="${utils.extensionPageUrl(
      "assets/icon/history_plus_512.png"
    )}" class="logo" />\n                    <span class="name">History+</span>\n                </div>\n            </div>\n            <div class="aside-settings has-text-centered">\n                <a href="${utils.extensionPageUrl(
      "options.html"
    )}" aria-current="page">\n                    <span class="icon"><i class="mdi mdi-cog-outline"></i></span>\n                </a>\n                <a href="https://sites.google.com/view/history-plus-extension/faq" target="_blank" aria-current="page">\n                    <span class="icon"><i class="mdi mdi-help-circle-outline"></i></span>\n                </a>\n                <a href="https://sites.google.com/view/history-plus-extension/feeback" target="_blank" aria-current="page">\n                    <span class="icon"><i class="mdi mdi-comment-check-outline"></i></span>\n                </a>\n                <a href="javascript:void(0);" id="theme-toggle" aria-current="page">\n                    <span class="icon"><i class="mdi mdi-theme-light-dark"></i></span>\n                </a>\n            </div>\n            <div id="stat-section"> \n                <span id="stat-number"></span>\n                <span id="stat-date">\n                    <span class="tooltips">Chrome only keeps 90 days of browsing history. History+ accumulates it if you keep using it.</span>\n                </span>\n            </div>\n            <div class="menu is-menu-main is-boxed">\n                <ul class="menu-list" id="menu-list">\n                    ${i}\n                </ul\n            </div>\n    `;
    document.getElementById("left-sidebar").innerHTML = o;
  },
  showStartPageOptions: function (e) {
    let t = ui.menus,
      i = `<span class="setting-header">${chrome.i18n.getMessage(
        "settings_start_page"
      )}: </span> `;
    i +=
      '<div class="select is-small"><select name="start_page_cid" id="start_page_cid">';
    for (let n = 0; n < t.length; n++) {
      let a = "";
      e == t[n].collection_id && (a = " selected"),
        (i += `<option value="${
          t[n].collection_id
        }"${a}>${chrome.i18n.getMessage(
          "left_nav_menu_category_" + t[n].collection_id
        )}</option>`);
    }
    (i += "</select></div>"),
      (document.getElementById("setting-start-page").innerHTML = i);
  },
  showPagesizeOptions: function (e) {
    let t = [
        { pagesize: 20 },
        { pagesize: 30 },
        { pagesize: 50 },
        { pagesize: 100 },
        { pagesize: 200 },
        { pagesize: 400 },
        { pagesize: 800 },
      ],
      i = `<span class="setting-header">${chrome.i18n.getMessage(
        "settings_show"
      )} </span> `;
    i +=
      '<div class="select is-small"><select name="page-size" id="page-size">';
    for (let n = 0; n < t.length; n++) {
      let a = "";
      e == t[n].pagesize && (a = " selected"),
        (i += `<option value="${t[n].pagesize}"${a}>${t[n].pagesize}</option>`);
    }
    (i += `</select></div> ${chrome.i18n.getMessage(
      "settings_items_per_page"
    )}.`),
      (document.getElementById("setting-pagesize").innerHTML = i);
  },
  showBackupOptions: function () {
    let e = globalSettings.enableAutoBackup() ? " checked" : "",
      t = " checked",
      i = "";
    2 == globalSettings.backupMode() && ((i = " checked"), (t = ""));
    let n = globalSettings.enableCompress() ? " checked" : "",
      a = globalSettings.backupInterval(),
      s = globalSettings.lastBackupTime(),
      l = s ? utils.timestampToString(s, !1) : " No backup yet",
      o = `\n        <input type="checkbox" id="chk-auto-backup" ${e}/> ${chrome.i18n.getMessage(
        "settings_enable_autobackup"
      )}\n        <br/>Backup Mode: \n        <br/><input type="radio" name="setting-backup-mode" value="1" ${t} />  ${chrome.i18n.getMessage(
        "settings_incremental_backup_description"
      )}\n        <br/><input type="radio" name="setting-backup-mode" value="2" ${i}/>  ${chrome.i18n.getMessage(
        "settings_full_backup_description"
      )}\n        <br/>\n        ${chrome.i18n.getMessage(
        "settings_backup_interval",
        ["<input type='text' id='setting-backup-interval' value='" + a + "' />"]
      )}\n        <br/>\n        ${chrome.i18n.getMessage(
        "settings_compress_file",
        ["<input type='checkbox' id='chk-compress' " + n + "/>"]
      )}\n        <br/>\n        ${chrome.i18n.getMessage(
        "settings_last_backup_at"
      )}: <span id="setting-last-backup-time">${l}</span>\n    `;
    document.getElementById("setting-backup").innerHTML = o;
  },
  showSettingExport: function () {
    let e = chrome.i18n.getMessage("settings_export");
    document.getElementById("setting-export").innerHTML = e;
  },
  showSettingImport: function () {
    let e = `\n        ${chrome.i18n.getMessage(
      "settings_import"
    )}\n        <div class="file">\n            <label class="file-label">\n                <input class="file-input" type="file" id="setting-import" name="setting-import"  accept=".tsv" />\n                <span class="file-cta">\n                <span class="file-icon">\n                    <i class="mdi mdi-file-upload-outline"></i>\n                </span>\n                <span class="file-label"> ${chrome.i18n.getMessage(
      "settings_choose_a_file"
    )}… </span>\n                </span>\n            </label>\n        </div>\n    `;
    document.getElementById("setting-import").innerHTML = e;
  },
  showImportPinnUrls: function (e) {
    let t = document.getElementById(e),
      i = document.createElement("div");
    i.setAttribute("id", "section-import-pinned-urls");
    let n = document.createElement("h3");
    (n.textContent = chrome.i18n.getMessage("UI_auto_generate_description")),
      i.appendChild(n);
    let a = document.createElement("Button");
    a.setAttribute("class", "button is-primary"),
      a.setAttribute("id", "btn-import-pinned-urls"),
      a.setAttribute("name", "btn-import-pinned-urls"),
      (a.textContent = chrome.i18n.getMessage("UI_auto_generate_button_text")),
      i.appendChild(a),
      t.appendChild(i);
  },
  buildTable: function (e, t, i) {
    var n = document.createElement("table");
    for (var a in i) n.setAttribute(a, i[a]);
    var s = document.createElement("thead");
    if (e) {
      for (var l = document.createElement("tr"), o = 0; o < e.length; o++) {
        var r = document.createElement("th");
        r.appendChild(document.createTextNode(e[o][0]));
        var c = e[o][1];
        for (var d in c) r.setAttribute(a, c[d]);
        r.setAttribute("class", "col" + (o + 1)), l.appendChild(r);
      }
      s.appendChild(l);
    }
    for (var u = document.createElement("tbody"), m = 0; m < t.length; m++) {
      l = document.createElement("tr");
      for (var p = t[m], g = 0; g < p.length; g++) {
        var b = document.createElement("td");
        b.setAttribute("class", "col" + (g + 1)),
          b.appendChild(p[g]),
          l.appendChild(b);
      }
      u.appendChild(l);
    }
    return n.appendChild(s), n.appendChild(u), n;
  },
  switchTab: function (e) {
    window.sessionStorage.setItem("activeTab", e),
      (document.getElementById("domain_container").style.display =
        "tab1" == e ? "" : "none"),
      (document.getElementById("url_container").style.display =
        "tab2" == e ? "" : "none"),
      (document.getElementById("unique_url_container").style.display =
        "tab3" == e ? "" : "none"),
      document.body.setAttribute("id", e);
  },
  applyUrlFilter: function (e) {
    globalFilters.setUrl(e), ui.reload();
  },
  applyDomainFilter: function (e) {
    globalFilters.setDomain(e), ui.reload();
  },
  applyDateFilter: function (e) {
    globalFilters.setDate(e), ui.reload();
  },
  applyRemoveAllFilters: function () {
    globalFilters.removeAll(), ui.reload();
  },
  applyRemoveFilter: function (e) {
    globalFilters.remove(e), ui.reload();
  },
  applyLimiter: function (e) {
    globalPrefs.setLimiter(e), ui.reload();
  },
  createFilterDiv: function (e) {
    var t = document.createElement("div");
    t.setAttribute("id", "filters");
    var i = globalFilters.getAll();
    if (!i) return t;
    for (
      var n = chrome.i18n.getMessage("results_filtered") + "<br />",
        a = 0,
        s = 0;
      s < i.length;
      s++
    ) {
      var l = i[s],
        o = "removeFilter" + ++a;
      n +=
        '<div class="filter_value">' +
        ui.getFilterDisplayValue(l.key, l.value) +
        '&nbsp;&nbsp;&nbsp;<input id="' +
        o +
        '" type="submit" value="' +
        chrome.i18n.getMessage("clear") +
        '" /> </div>';
      e.click[o] = (function (e) {
        return function () {
          ui.applyRemoveFilter(e);
        };
      })(l.key);
    }
    return (
      a > 1 &&
        ((n +=
          '<div class="filter_value"><input id="clear_all" type="submit" value="' +
          chrome.i18n.getMessage("clear_all") +
          '" /></div>'),
        (e.click.clear_all = ui.applyRemoveAllFilters)),
      (t.innerHTML += n),
      t
    );
  },
  getFilterDisplayValue: function (e, t) {
    return "url" == e
      ? "URL"
      : "domain" == e
      ? t
      : "date" == e
      ? globalPrefs.getTrendsDateDisplay(t)
      : "hour" == e
      ? globalPrefs.getHourDisplay(t)
      : "weekday" == e
      ? globalPrefs.getWeekdayDisplay(t)
      : "monthday" == e
      ? t
      : "month" == e
      ? globalPrefs.getMonthDisplay(t)
      : "year" == e || "transition" == e
      ? t
      : void utils.logError("unrecognized key: " + e + ", value: " + t);
  },
  populateCounts: function (e) {
    var t = globalPrefs.getNumberDisplay(e.historyItems);
    globalPrefs.getNumberDisplay(e.visitItems);
    document
      .getElementById("content-header-counter")
      .appendChild(document.createTextNode(t));
  },
  createLimiterDiv: function (e) {
    var t = document.createElement("div");
    t.setAttribute("id", "limiter_container"),
      t.appendChild(
        document.createTextNode(chrome.i18n.getMessage("limiter_label"))
      );
    var i = document.createElement("select");
    i.setAttribute("id", "limiter"), i.setAttribute("name", "limiter");
    for (
      var n = [
          "limiter_7",
          "limiter_30",
          "limiter_90",
          "limiter_180",
          "limiter_365",
          "limiter_all",
        ],
        a = globalPrefs.getLimiter(),
        s = 0;
      s < n.length;
      s++
    ) {
      var l = n[s],
        o = document.createElement("option");
      o.setAttribute("value", l),
        l == a && o.setAttribute("selected", "selected"),
        o.appendChild(document.createTextNode(chrome.i18n.getMessage(l))),
        i.appendChild(o);
    }
    return (
      (e.change.limiter = function (e) {
        ui.applyLimiter(e.target.value);
      }),
      t.appendChild(i),
      t
    );
  },
  createTabsContainer: function (e) {
    var t = document.createElement("div");
    t.setAttribute("id", "tab_container");
    var i = chrome.i18n.getMessage("domain_tab_name"),
      n = chrome.i18n.getMessage("url_tab_name"),
      a = chrome.i18n.getMessage("unique_url_tab_name");
    return (
      (t.innerHTML =
        '<ul id="tabnav"><li class="tab1"><a id="tablink1" href="javascript:void(0);">' +
        i +
        '</a></li><li class="tab2"><a id="tablink2" href="javascript:void(0);">' +
        n +
        '</a></li><li class="tab3"><a id="tablink3" href="javascript:void(0);">' +
        a +
        "</a></li></ul>"),
      (e.click.tablink1 = function (e) {
        ui.switchTab("tab1"), e.preventDefault();
      }),
      (e.click.tablink2 = function (e) {
        ui.switchTab("tab2"), e.preventDefault();
      }),
      (e.click.tablink3 = function (e) {
        ui.switchTab("tab3"), e.preventDefault();
      }),
      t
    );
  },
  createTab: function (e, t, i, n) {
    var a = ui.createTable(i, n);
    return t != e && a.setAttribute("style", "display: none;"), a;
  },
  createTable: function (e, t) {
    var i = document.createElement("div");
    i.setAttribute("id", e.containerId),
      i.setAttribute("class", "light_background");
    for (
      var n = e.rows.length > 10 ? 10 : e.rows.length,
        a = ui.createTableRows(e, 0, n),
        s = [],
        l = 0;
      l < e.tableHeaders.normal.length;
      l++
    )
      s.push([
        chrome.i18n.getMessage(e.tableHeaders.normal[l]),
        { class: "col" + (l + 1) },
      ]);
    var o = e.tableClass ? " " + e.tableClass : "";
    i.appendChild(
      ui.buildTable(s, a, { id: e.tableId, class: "top10 main_table" + o })
    );
    var r,
      c,
      d = document.createElement("div");
    if ((d.setAttribute("class", "tab_bottom_row"), e.filterTextBoxId)) {
      var u = document.createElement("div");
      u.setAttribute("class", "filter_controls"),
        u.appendChild(document.createTextNode(e.filterText));
      var m = document.createElement("input");
      m.setAttribute("id", e.filterTextBoxId),
        m.setAttribute("type", "text"),
        m.setAttribute("placeholder", e.filterPlaceholder),
        m.setAttribute("size", "35"),
        u.appendChild(m);
      var p = document.createElement("input");
      p.setAttribute("type", "submit"),
        p.setAttribute("id", e.filterSubmitId),
        p.setAttribute("value", chrome.i18n.getMessage("go")),
        u.appendChild(p),
        d.appendChild(u),
        (t.click[e.filterSubmitId] = function () {
          e.onclickFunction(document.getElementById(e.filterTextBoxId).value);
        }),
        (t.keyup[e.filterTextBoxId] = function (t) {
          13 == t.which &&
            e.onclickFunction(document.getElementById(e.filterTextBoxId).value);
        });
    }
    if (e.rows.length > 10) {
      var g = e.rows.length > 100 ? 100 : e.rows.length,
        b = ui.createTableRows(e, 0, g),
        h = [];
      for (l = 0; l < e.tableHeaders.popup.length; l++)
        h.push([
          chrome.i18n.getMessage(e.tableHeaders.popup[l]),
          { class: "col" + (l + 1) },
        ]);
      var _ = e.tableId + "_more",
        v = document.createElement("div"),
        f = e.containerId + "_more";
      v.setAttribute("id", f),
        v.appendChild(
          ui.buildTable(h, b, {
            id: _,
            class: "top10 main_table light_background popup" + o,
          })
        );
      var y = document.createElement("div");
      y.setAttribute("style", "display: none;"),
        y.appendChild(v),
        i.appendChild(y);
      var M = document.createElement("a"),
        k = f + "_link";
      M.setAttribute("href", "javascript:void(0);"),
        M.setAttribute("id", k),
        M.appendChild(
          document.createTextNode(chrome.i18n.getMessage("view_more"))
        );
      t.click[k] =
        ((r = f),
        (c = _),
        function (t) {
          $.colorbox({
            inline: !0,
            transition: "none",
            fadeOut: 0,
            href: "#" + r,
            height: "85%",
            width: e.popupWidth,
            onComplete: function () {
              $("#" + c).dataTable({
                aaSorting: [[1, "desc"]],
                aoColumns: e.dataTableColumns,
                bAutoWidth: !1,
                bPaginate: !1,
                bProcessing: !1,
                bSort: !0,
                bStateSave: !1,
                bFilter: !1,
                bInfo: !1,
                bRetrieve: !0,
              });
            },
          }),
            t.preventDefault();
        });
      var T = document.createElement("div");
      T.setAttribute("class", "tab_view_more"),
        T.appendChild(M),
        d.appendChild(T);
    }
    return i.appendChild(d), i;
  },
  createTableRows: function (e, t, i) {
    for (var n = [], a = t; a < i; a++) {
      var s = [],
        l = ui.formatValue(e.rows[a][0], e.columnFormats[0]),
        o = document.createElement("a"),
        r = e.rowIdPrefix + a;
      o.setAttribute("href", "javascript:void(0);"),
        o.setAttribute("id", r),
        o.setAttribute("title", e.linkTitle),
        o.setAttribute("data-sort", e.rows[a][0]),
        o.appendChild(document.createTextNode(l)),
        s.push(o);
      for (var c = 1; c < e.rows[a].length; c++) {
        var d = e.rows[a][c],
          u = ui.formatValue(d, e.columnFormats[c]),
          m = document.createElement("span");
        m.setAttribute("data-sort", d),
          m.appendChild(document.createTextNode(u)),
          s.push(m);
      }
      n.push(s);
    }
    return n;
  },
  createDailyStats: function (e) {
    var t = document.createElement("a");
    t.setAttribute("href", "javascript: void(0);"),
      t.setAttribute("id", "todaylink"),
      t.setAttribute("title", chrome.i18n.getMessage("today_hover_text")),
      t.setAttribute("data-sort", new Date().getTime()),
      t.appendChild(document.createTextNode(chrome.i18n.getMessage("today")));
    var i = document.createElement("div");
    i.setAttribute("id", "daily_stats_container"),
      i.setAttribute("class", "light_background");
    var n,
      a,
      s,
      l = chrome.i18n.getMessage("average_visits"),
      o = chrome.i18n.getMessage("median_visits"),
      r = chrome.i18n.getMessage("not_applicable");
    e.busiestDayMean && (n = globalPrefs.getNumberDisplay(e.busiestDayMean)),
      e.busiestDayMedian &&
        (a = globalPrefs.getNumberDisplay(e.busiestDayMedian));
    var c = e.byBusiestDay[new Date().toDateString()];
    return (
      c && (s = globalPrefs.getNumberDisplay(c)),
      i.appendChild(
        ui.buildTable(
          [
            [chrome.i18n.getMessage("daily_stats"), {}],
            ["", {}],
          ],
          [
            [document.createTextNode(l), document.createTextNode(n || r)],
            [document.createTextNode(o), document.createTextNode(a || r)],
            [t, document.createTextNode(s || r)],
          ],
          { id: "per_day_stats", class: "top10" }
        )
      ),
      i
    );
  },
  createClearDiv: function () {
    var e = document.createElement("div");
    return e.setAttribute("style", "clear: both;"), e;
  },
  formatValue: function (e, t) {
    return "p" == t
      ? globalPrefs.getPercentDisplay(e)
      : "n" == t
      ? globalPrefs.getNumberDisplay(e)
      : "d" == t
      ? globalPrefs.getTrendsDateDisplay(e)
      : e;
  },
  reload: function () {
    window.location = window.location;
  },
  pageI18n: function () {
    document.title = chrome.i18n.getMessage("global_extensionName");
    const e = document.getElementById("adv-search-link");
    e && (e.innerText = chrome.i18n.getMessage("top_search_advanced_search"));
    const t = document.getElementById("txt_visits_found");
    t && (t.innerText = chrome.i18n.getMessage("top_search_record_count"));
    const i = document.getElementById("search-result-export-link");
    i && (i.innerText = chrome.i18n.getMessage("top_search_export"));
    const n = document.getElementById("section_name_top_visits");
    n && (n.innerText = chrome.i18n.getMessage("UI_section_name_top_visits"));
    const a = document.getElementById("link-submit-feedback");
    a && (a.innerText = chrome.i18n.getMessage("UI_submit_feedback"));
  },
  drawCalendarSearch: function () {
    const e = [
      { name: chrome.i18n.getMessage("period_range_all"), period: "" },
      { name: chrome.i18n.getMessage("period_range_today"), period: "0d" },
      { name: chrome.i18n.getMessage("period_range_yesterday"), period: "1d" },
      {
        name: chrome.i18n.getMessage("period_range_past_7_days"),
        period: "7d",
      },
      {
        name: chrome.i18n.getMessage("period_range_past_30_days"),
        period: "30d",
      },
      {
        name: chrome.i18n.getMessage("period_range_past_90_days"),
        period: "90d",
      },
      {
        name: chrome.i18n.getMessage("period_range_past_180_days"),
        period: "180d",
      },
      {
        name: chrome.i18n.getMessage("period_range_past_year"),
        period: "365d",
      },
    ];
    let t =
      '\n      <div id="calendar-search" class="mt-1">\n        <div class="calendar-nav">\n          <div class="calendar-periods">\n    ';
    return (
      e.forEach(({ name: e, period: i }) => {
        t += `\n        <button class="period-button" data-period="${i}">\n          <div class="period-name">${e}</div>\n        </button>\n      `;
      }),
      (t += `\n          </div>\n        </div>\n        <div id="date-range" class="is-size-7 mt-1">\n        ${chrome.i18n.getMessage(
        "period_start_from"
      )}\n        <input type="date" id="period-date-from" class="date-input">\n        ${chrome.i18n.getMessage(
        "period_end_to"
      )}\n        <input type="date" id="period-date-to" class="date-input">\n        <input type="hidden" id="period-search-type" value="">\n        <button class="button is-small" id="period-rest-button">${chrome.i18n.getMessage(
        "period_button_clear"
      )}</button>\n        </div>\n      </div>\n    `),
      t
    );
  },
  calculateTimeSpan: function (e) {
    let t = new Date();
    t.setHours(23, 59, 59, 999);
    let i = new Date(t);
    if ("" === e) i = new Date(0);
    else {
      const n = parseInt(e);
      switch (e.slice(-1)) {
        case "d":
          1 === n && (t.setDate(t.getDate() - 1), t.setHours(0, 0, 0, 0)),
            i.setDate(i.getDate() - n),
            i.setHours(0, 0, 0, 0);
          break;
        case "w":
          t.setDate(t.getDate() - t.getDay()),
            (i = new Date(t)),
            i.setDate(i.getDate() - 7 * n),
            t.setDate(t.getDate() - 1);
          break;
        case "m":
          t.setDate(1),
            (i = new Date(t)),
            i.setMonth(i.getMonth() - n),
            t.setDate(0);
          break;
        case "y":
          t.setMonth(0, 1),
            (i = new Date(t)),
            i.setFullYear(i.getFullYear() - n),
            t.setFullYear(t.getFullYear() - 1),
            t.setMonth(11, 31);
      }
    }
    i.setHours(0, 0, 0, 0);
    return [
      "" == e ? "" : i.toISOString().split("T")[0],
      t.toISOString().split("T")[0],
    ];
  },
};
