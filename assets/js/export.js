"use strict";
var exporter = {
  sendAutoBackupRequest: function (t, e) {
    if (!exporter.isBackupNeeded(t, Date.now())) return;
    let o = t.lastBackupTime(),
      n = t.backupMode();
    utils.logInfo(`Start auto backup from ${o}`),
      e.sendQuery("autoBackup", { lastBackupTime: o, backupMode: n });
  },
  sendExportRequest: function (t, e) {
    let o = t.lastBackupTime(),
      n = t.backupMode();
    utils.logInfo("Start export history"),
      e.sendQuery("exportHistory", { lastBackupTime: o, backupMode: n });
  },
  sendCurrentSearchExportRequest: function (t, e) {
    utils.logInfo("Start export current result"),
      e.sendQuery("exportCurrentSearchResult", t);
  },
  isBackupNeeded: function (t, e) {
    if (!t.enableAutoBackup()) return !1;
    let o = t.lastBackupTime(),
      n = t.backupInterval();
    return (
      !!t.lastHistorySavedPoint() &&
      (null == o || utils.daysDifference(o, e) >= n)
    );
  },
  exportAndSaveToFile: function (t, e, o, n, i) {
    utils.logInfo(`[export] ${e.data.length} items`),
      (e && 0 != e.data.length) || n("No new visits need to backup");
    let l = 1 == t.backupMode() ? "incremental" : "full",
      s = (t.lastBackupTime(), t.enableCompress()),
      r = new Date(Date.now()),
      a = o
        ? `history_plus_export_${utils.dateToString(r, "-")}_full.html`
        : `history_plus_autobackup_${utils.dateToString(r, "-")}_${l}.html`;
    utils.logInfo(`[export] ${a}`);

    let p = exporter.generateHTMLTable(e.data); // Generate HTML table from data
    try {
      utils.logInfo("Found " + e.data.length + " visits. Exporting...");
      const blob = new Blob([p], { type: "text/html;charset=utf-8" });
      utils.logInfo("Downloading file"),
        saveAs(blob, a),
        n && n(`[export] ${a}`);
      t.setLastBackupTime(Date.now());
    } catch (t) {
      i && i(t);
    }
  },
  exportCurrentSearchAndSaveToFile: function (t, e, o, n, i) {
    utils.logInfo(`[export] ${e.data.length} items`),
      (e && 0 != e.data.length) || n("No new visits need to backup");
    let l = new Date(Date.now()),
      // Get the date part (YYYY-MM-DD) and time part (HHMM)
      dateStr = utils.dateToString(l, "-"), // YYYY-MM-DD
      timeStr =
        l.getHours().toString().padStart(2, "0") +
        l.getMinutes().toString().padStart(2, "0"), // HHMM
      a = `history_plus_${dateStr} ${timeStr}.html`;
    utils.logInfo(`[export] ${a}`);

    let p = exporter.generateHTMLTable(e.data); // Generate HTML table from data
    try {
      utils.logInfo("Found " + e.data.length + " visits. Exporting...");
      const blob = new Blob([p], { type: "text/html;charset=utf-8" });
      utils.logInfo("Downloading file"),
        saveAs(blob, a),
        n && n(`[export] ${a}`);
    } catch (t) {
      i && i(t);
    }
  },
  generateHTMLTable: function (data) {
    // Sort data by most recent visit_time
    data.sort((a, b) => b.visit_time - a.visit_time); // Sort in descending order
    let table = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>History Table for</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                background-color: #f4f4f9;
            }
            h1 {
                text-align: center;
                color: #333;
            }
            .search-container {
                text-align: center;
                margin-bottom: 20px;
            }
            .search-input {
                padding: 8px;
                font-size: 14px;
                width: 50%;
                max-width: 400px;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin: 10px auto;
                display: block;
            }
            .table-container {
                width: 100%;
                overflow-x: auto;
                margin: 0 auto;
                max-width: 90%;
            }
            table {
                width: 80%;
                border-collapse: collapse;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: white;
                margin: 0 auto;
            }
            th, td {
                padding: 8px 10px;
                font-size: 14px; /* Reduced font size */
                text-align: left;
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
                border: 1px solid #ddd;
            }
            th {
                background-color: #007BFF;
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            td a {
                color: #007BFF;
                text-decoration: none;
            }
            td a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>History+ Table</h1>
        <div class="search-container">
            <input type="text" id="myInput" onkeyup="searchFunction()" placeholder="Search.." class="search-input">
        </div>
        <div class="table-container">
            <table border="1" cellspacing="0" cellpadding="5" id="historyTable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Visit Time</th>
                    </tr>
                </thead>
                <tbody>`;

    // Iterate over data and add rows to the table
    data.forEach((item) => {
      const visitTime = new Date(item.visit_time).toLocaleString(); // Convert timestamp to readable date
      // const transitionType = item.transition_type; // You can map transition_type using a utility function if needed
      const title = item.title || "N/A"; // Fallback for missing title
      // const collectionId = item.collection_id || "N/A"; // Fallback for missing collection ID
      // const isPinned = item.is_pinned ? "Yes" : "No"; // Convert to "Yes" or "No"

      table += `
            <tr>
              <td>${title}</td>
              <td><a href="${item.url}" target="_blank">${item.url}</a></td>
              <td>${visitTime}</td>
            </tr>`;
    });

    table += `</tbody></table></div>

        <script>
            function searchFunction() {
            // Declare variables
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("historyTable");
            tr = table.getElementsByTagName("tr");

            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
                }
            }
            }
        </script>
    </body>
    </html>`;

    return table;
  },
};
