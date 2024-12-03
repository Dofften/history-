"use strict";
var importer = {
  importHandler: function (i) {
    var e = i.target.files[0];
    if (e && "application/zip" != e.type) {
      utils.logInfo("import: begin");
      var t = new FileReader(),
        n = {
          lastIncompleteLine: null,
          numParsed: 0,
          numErrors: 0,
          urlsInserted: 0,
          visitsInserted: 0,
          visitsIgnored: 0,
          fileType: null,
        };
      (t.onload = function (i) {
        var e = importer.onImportDone,
          t = importer.parseChunk(i.target.result, n);
        utils.logInfo(`[import] ${t.urlCount} urls`),
          t.urlCount ? importer.saveChunk(t, n, e) : e(n);
      }),
        t.readAsText(e, "UTF-8");
    }
  },
  splitChunkRegex: function () {
    return new RegExp("^.*(?:[\r\n]+|$)", "gm");
  },
  parseChunk: function (i, e) {
    var t = i.match(importer.splitChunkRegex()),
      n = t.length;
    utils.logInfo(`[import] lines: ${n}`), "" == t[n - 1] && --n;
    for (var r = { urls: {}, urlCount: 0 }, l = 0; l < n; l++) {
      var o = t[l],
        s = 0 == l,
        u = l == n - 1;
      if (e.lastIncompleteLine || 1 != o.length || "\n" != o) {
        s &&
          e.lastIncompleteLine &&
          ((o = e.lastIncompleteLine + o), (e.lastIncompleteLine = null));
        var a = importer.parseLine(o);
        if ((e.fileType || (e.fileType = a.fileType), a.error))
          u && "NO_LINEBREAK" == a.error
            ? (e.lastIncompleteLine = o)
            : (utils.logError("[import] " + a.errorMsg), ++e.numErrors);
        else {
          e.lastIncompleteLine &&
            utils.logWarning(
              "[import] partial line: " +
                e.lastIncompleteLine +
                ", numParsed = " +
                e.numParsed
            ),
            ++e.numParsed,
            r.urls[a.url] ||
              ((r.urls[a.url] = {
                visits: [],
                title: null,
                collection_id: 0,
                is_pinned: 0,
              }),
              ++r.urlCount);
          var p = r.urls[a.url];
          p.visits.push({ visitTime: a.visitTime, transition: a.transition }),
            null == p.title && null != a.title && (p.title = a.title),
            0 == p.collection_id &&
              0 != a.collection_id &&
              (p.collection_id = a.collection_id),
            0 == p.is_pinned && 0 != a.is_pinned && (p.is_pinned = a.is_pinned);
        }
      }
    }
    return r;
  },
  saveChunk: function (i, e, t) {
    worker.sendQuery("importFromFiles", { historyItems: i });
  },
  parseLine: function (i) {
    var e = {
      url: null,
      visitTime: null,
      transition: null,
      error: null,
      errorMsg: null,
      title: null,
      fileType: null,
    };
    if (!/[\r\n]+$/.test(i))
      return (
        (e.error = "NO_LINEBREAK"),
        (e.errorMsg = "Missing linebreaks at: '" + i + "'"),
        e
      );
    var t,
      n,
      r,
      l,
      o,
      s,
      u = i.replace(/[\r\n]+$/, ""),
      a = u.split("\t");
    if (3 != a.length && 4 != a.length && 6 != a.length && 8 != a.length)
      return (
        (e.error = "COLUMN_COUNT_ERROR"),
        (e.errorMsg =
          "Number of columns (" + a.length + ") is not allowed: '" + u + "'"),
        e
      );
    3 == a.length || 4 == a.length || 6 == a.length
      ? ((t = a[0]),
        (n = a[1]),
        (r = a[2]),
        (l = 4 == a.length || 5 == a.length ? a[3] : null),
        (o = 5 == a.length ? a[4] : 0),
        (s = 6 == a.length ? a[5] : 0))
      : 8 == a.length &&
        ((t = a[0]), (n = a[3]), (r = a[6]), (l = a[7]), (o = 0), (s = 0));
    var p = [];
    if (
      (importer.isValidUrl(t) || p.push("url"),
      importer.isValidVisitTime(n) || p.push("visitTime"),
      importer.isValidTransition(r) || p.push("transition"),
      importer.isValidTitle(l) || p.push("title"),
      p.length)
    )
      return (
        (e.error = "INVALID_FIELD"),
        (e.errorMsg = "Invalid " + p.join(", ") + " for line '" + u + "'"),
        e
      );
    var m = a.length + "_col";
    return (
      8 != a.length
        ? (n.match(/^U/)
            ? ((m += "_linux"), (n = parseFloat(n.replace("U", ""))))
            : ((m += "_windows"), (n = utils.convertToUnixEpoch(n))),
          (r = utils.getTransitionText(r)))
        : (n = parseFloat(n)),
      (e.url = t),
      (e.visitTime = n),
      (e.transition = r),
      (e.title = l),
      (e.collection_id = o),
      (e.is_pinned = s),
      (e.fileType = m),
      e
    );
  },
  isValidUrl: function (i) {
    if ("string" == typeof i) return i.length > 0;
  },
  isValidVisitTime: function (i) {
    if ("string" == typeof i) return /^U?\d+\.?\d*$/.test(i);
  },
  isValidTransition: function (i) {
    if ("string" == typeof i) return /^(?:-?\d+|[a-z_]+)$/i.test(i);
  },
  isValidTitle: function (i) {
    return !0;
  },
  onImportDone: function (i) {},
};
