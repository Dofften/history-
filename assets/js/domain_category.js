const DOMAIN_CATEGORY = {
  "google.com": [
    {
      url: "https://mail.google.com",
      name: "google.com",
      cid: 3,
      rules: ["https://mail.google.com/.*"],
    },
    {
      url: "https://docs.google.com/document/",
      name: "google.com",
      cid: 2,
      rules: ["https://docs.google.com/document/d/.*"],
    },
    {
      url: "https://docs.google.com/drawings",
      name: "google.com",
      cid: 2,
      rules: ["https://docs.google.com/drawings/d/.*"],
    },
    {
      url: "https://drive.google.com",
      name: "google.com",
      cid: 2,
      rules: [
        "https://drive.google.com/drive/.*",
        "https://drive.google.com/file/d/.*",
      ],
    },
    {
      url: "https://docs.google.com/forms/",
      name: "google.com",
      cid: 2,
      rules: ["https://docs.google.com/forms/d/.*"],
    },
    {
      url: "https://www.google.com",
      name: "google.com",
      cid: 5,
      rules: ["https://www.google.com/search.*"],
    },
    {
      url: "https://docs.google.com/spreadsheets",
      name: "google.com",
      cid: 2,
      rules: ["https://docs.google.com/spreadsheets/d/.*"],
    },
    {
      url: "https://docs.google.com/presentation",
      name: "google.com",
      cid: 2,
      rules: ["https://docs.google.com/presentation/d/.*"],
    },
    {
      url: "https://analytics.google.com",
      name: "google.com",
      cid: 5,
      rules: ["https://analytics.google.com/analytics/.*"],
    },
    {
      url: "https://calendar.google.com",
      name: "google.com",
      cid: 5,
      rules: ["https://calendar.google.com/calendar/.*"],
    },
    {
      url: "https://keep.google.com/",
      name: "google.com",
      cid: 2,
      rules: ["https://keep.google.com/.*"],
    },
    {
      url: "https://news.google.com",
      name: "google.com",
      cid: 6,
      rules: ["https://[^/]*news.google.com/*"],
    },
  ],
  "live.com": [
    {
      url: "https://outlook.live.com/",
      name: "live.com",
      cid: 3,
      rules: ["https://outlook.live.com/mail/.*"],
    },
    {
      url: "https://onedrive.live.com/",
      name: "live.com",
      cid: 2,
      rules: ["https://onedrive.live.com/edit.*"],
    },
    {
      url: "https://teams.live.com/",
      name: "live.com",
      cid: 7,
      rules: ["https://teams.live.com/.*"],
    },
    {
      url: "https://outlook.live.com/calendar/0/view/month",
      name: "live.com",
      cid: 5,
      rules: ["https://outlook.live.com/calendar/.*"],
    },
    {
      url: "https://outlook.live.com/people/0/",
      name: "live.com",
      cid: 7,
      rules: ["https://outlook.live.com/people/.*"],
    },
  ],
  "office.com": [
    {
      url: "https://www.office.com/",
      name: "office.com",
      cid: 2,
      rules: ["https://www.office.com/launch/word.*"],
    },
    {
      url: "https://forms.office.com/",
      name: "office.com",
      cid: 2,
      rules: ["https://forms.office.com/.*"],
    },
  ],
  "aol.com": [
    {
      url: "https://mail.aol.com/",
      name: "aol.com",
      cid: 3,
      rules: ["https://mail.aol.com/.*"],
    },
  ],
  "yahoo.com": [
    {
      url: "https://mail.yahoo.com",
      name: "yahoo.com",
      cid: 3,
      rules: ["https://mail.yahoo.com/.*"],
    },
  ],
  "titan.email": [
    {
      url: "https://app.titan.email",
      name: "titan.email",
      cid: 3,
      rules: ["https://app.titan.email/.*"],
    },
  ],
  "icloud.com": [
    {
      url: "https://www.icloud.com/mail",
      name: "icloud.com",
      cid: 3,
      rules: ["https://www.icloud.com/mail.*"],
    },
  ],
  "proton.me": [
    {
      url: "https://proton.me/mail/*",
      name: "proton.me",
      cid: 3,
      rules: ["https://mail.proton.me/u/.*"],
    },
  ],
  "mail.com": [
    {
      url: "https://www.mail.com/",
      name: "mail.com",
      cid: 3,
      rules: ["https://[^/]*.mail.com/mail.*"],
    },
  ],
  "affinity.co": [
    {
      url: "https://www.affinity.co",
      name: "affinity.co",
      cid: 5,
      rules: ["https://[^/]*.affinity.co/.*"],
    },
  ],
  "airtable.com": [
    {
      url: "https://airtable.com",
      name: "airtable.com",
      cid: 5,
      rules: ["https://airtable.com/.*"],
    },
  ],
  "amplitude.com": [
    {
      url: "https://analytics.amplitude.com",
      name: "amplitude.com",
      cid: 5,
      rules: ["https://analytics.amplitude.com/.*"],
    },
  ],
  "asana.com": [
    {
      url: "https://app.asana.com",
      name: "asana.com",
      cid: 5,
      rules: ["https://app.asana.com/.*"],
    },
  ],
  "basecamp.com": [
    {
      url: "https://3.basecamp.com",
      name: "basecamp.com",
      cid: 5,
      rules: ["https://3.basecamp.com/.*"],
    },
  ],
  "behance.net": [
    {
      url: "https://www.behance.net",
      name: "behance.net",
      cid: 5,
      rules: ["https://www.behance.net/.*"],
    },
  ],
  "bitbucket.org": [
    {
      url: "https://bitbucket.org",
      name: "bitbucket.org",
      cid: 5,
      rules: ["https://bitbucket.org/.*"],
    },
  ],
  "box.com": [
    {
      url: "https://app.box.com",
      name: "box.com",
      cid: 5,
      rules: ["https://app.box.com/.*"],
    },
  ],
  "calendly.com": [
    {
      url: "https://calendly.com",
      name: "calendly.com",
      cid: 5,
      rules: ["https://calendly.com/.*"],
    },
  ],
  "canva.com": [
    {
      url: "https://www.canva.com",
      name: "canva.com",
      cid: 5,
      rules: ["https://[^/]*.canva.com/.*"],
    },
  ],
  "clickup.com": [
    {
      url: "https://app.clickup.com/",
      name: "clickup.com",
      cid: 5,
      rules: ["https://app.clickup.com/.*"],
    },
  ],
  "cloudflare.com": [
    {
      url: "https://cloudflare.com",
      name: "cloudflare.com",
      cid: 5,
      rules: ["https://dash.cloudflare.com/.*"],
    },
  ],
  "clubhouse.io": [
    {
      url: "https://www.clubhouse.io",
      name: "clubhouse.io",
      cid: 5,
      rules: ["https://[^/]*.clubhouse.io/.*"],
    },
  ],
  "coda.io": [
    {
      url: "https://coda.io",
      name: "coda.io",
      cid: 5,
      rules: ["https://coda.io/.*"],
    },
  ],
  "columns.app": [
    {
      url: "https://www.columns.app",
      name: "columns.app",
      cid: 5,
      rules: ["https://[^/]*.columns.app/.*"],
    },
  ],
  "atlassian.net": [
    {
      url: "https://atlassian.net/wiki",
      name: "atlassian.net",
      cid: 5,
      rules: ["https://[^/]*.atlassian.net/wiki/spaces/.*"],
    },
    {
      url: "https://atlassian.net/browse",
      name: "atlassian.net",
      cid: 5,
      rules: [
        "https://[^/]*.atlassian.net/browse/.*",
        "https://[^/]*.atlassian.net/projects/.*",
        "https://[^/]*.atlassian.net/secure/RapidBoard.jspa/.*",
        "https://[^/]*.atlassian.net/jira/.*",
      ],
    },
  ],
  "creately.com": [
    {
      url: "https://app.creately.com",
      name: "creately.com",
      cid: 5,
      rules: ["https://app.creately.com/diagram/.*"],
    },
  ],
  "docusign.com": [
    {
      url: "https://docusign.com",
      name: "docusign.com",
      cid: 5,
      rules: ["https://[^/]*.docusign.com/documents/.*"],
    },
  ],
  "dovetailapp.com": [
    {
      url: "https://dovetailapp.com",
      name: "dovetailapp.com",
      cid: 5,
      rules: ["https://dovetailapp.com/.*"],
    },
  ],
  "dribbble.com": [
    {
      url: "https://dribbble.com",
      name: "dribbble.com",
      cid: 5,
      rules: ["https://dribbble.com/shots/.*"],
    },
  ],
  "dropbox.com": [
    {
      url: "https://dropbox.com/home",
      name: "dropbox.com",
      cid: 2,
      rules: ["https://www.dropbox.com/.*"],
    },
    {
      url: "https://paper.dropbox.com/",
      name: "dropbox.com",
      cid: 2,
      rules: ["https://paper.dropbox.com/.*"],
    },
  ],
  "evernote.com": [
    {
      url: "https://www.evernote.com",
      name: "evernote.com",
      cid: 2,
      rules: ["https://www.evernote.com/client/.*"],
    },
  ],
  "figma.com": [
    {
      url: "https://www.figma.com",
      name: "figma.com",
      cid: 2,
      rules: [
        "https://www.figma.com/file/.*",
        "https://www.figma.com/project/.*",
        "https://www.figma.com/proto/.*",
      ],
    },
  ],
  "framer.com": [
    {
      url: "https://www.framer.com",
      name: "framer.com",
      cid: 2,
      rules: [
        "https://[^/]*.framer.com/projects/.*",
        "https://[^/]*.framer.com/share/.*",
      ],
    },
  ],
  "freshsales.io": [
    {
      url: "https://freshsales.io",
      name: "freshsales.io",
      cid: 5,
      rules: ["https://[^/]*.freshsales.io/leads/.*"],
    },
  ],
  "github.com": [
    {
      url: "https://github.com",
      name: "github.com",
      cid: 5,
      rules: ["https://gist.github.com/.*", "https://github.com/.*"],
    },
  ],
  "gitlab.com": [
    {
      url: "https://gitlab.com",
      name: "gitlab.com",
      cid: 5,
      rules: ["https://gitlab.com/.*"],
    },
  ],
  "greenhouse.io": [
    {
      url: "https://www.greenhouse.io",
      name: "greenhouse.io",
      cid: 5,
      rules: ["https://[^/]*.greenhouse.io/.*"],
    },
  ],
  "getguru.com": [
    {
      url: "https://www.getguru.com",
      name: "getguru.com",
      cid: 5,
      rules: ["https://app.getguru.com/.*"],
    },
  ],
  "ycombinator.com": [
    {
      url: "https://news.ycombinator.com",
      name: "ycombinator.com",
      cid: 6,
      rules: ["https://news.ycombinator.com/"],
    },
  ],
  "hey.com": [
    {
      url: "https://app.hey.com",
      name: "hey.com",
      cid: 5,
      rules: ["https://app.hey.com/.*"],
    },
  ],
  "hubspot.com": [
    {
      url: "https://app.hubspot.com",
      name: "hubspot.com",
      cid: 5,
      rules: ["https://app.hubspot.com/.*"],
    },
  ],
  "intercom.io": [
    {
      url: "https://app.intercom.io",
      name: "intercom.io",
      cid: 5,
      rules: ["https://app.intercom.*/a/apps/.*"],
    },
  ],
  "invisionapp.com": [
    {
      url: "https://projects.invisionapp.com",
      name: "invisionapp.com",
      cid: 2,
      rules: ["https://projects.invisionapp.com/"],
    },
  ],
  "june.so": [
    {
      url: "https://june.so",
      name: "june.so",
      cid: 5,
      rules: ["https://app.june.so/a/.*"],
    },
  ],
  "linkedin.com": [
    {
      url: "https://www.linkedin.com",
      name: "linkedin.com",
      cid: 7,
      rules: ["https://www.linkedin.com/.*"],
    },
  ],
  "loom.com": [
    {
      url: "https://loom.com",
      name: "loom.com",
      cid: 5,
      rules: ["https://[^/]*.loom.com/share/.*"],
    },
  ],
  "marvelapp.com": [
    {
      url: "https://marvelapp.com",
      name: "marvelapp.com",
      cid: 2,
      rules: ["https://marvelapp.com/.*"],
    },
  ],
  "microsoft.com": [
    {
      url: "https://teams.microsoft.com/",
      name: "microsoft.com",
      cid: 7,
      rules: ["https://teams.microsoft.com/.*"],
    },
  ],
  "miro.com": [
    {
      url: "https://miro.com",
      name: "miro.com",
      cid: 5,
      rules: ["https://[^/]*.miro.com/app/.*"],
    },
  ],
  "mixpanel.com": [
    {
      url: "https://mixpanel.com",
      name: "mixpanel.com",
      cid: 5,
      rules: [
        "https://mixpanel.com/report/.*",
        "https://mixpanel.com/project/.*",
      ],
    },
  ],
  "mode.com": [
    {
      url: "https://app.mode.com/",
      name: "mode.com",
      cid: 5,
      rules: [
        "https://app.mode.com/editor/.*",
        "https://app.mode.com/*/reports/.*",
      ],
    },
  ],
  "monday.com": [
    {
      url: "https://www.monday.com",
      name: "monday.com",
      cid: 5,
      rules: [
        "https://[^/]*.monday.com/overviews/.*",
        "https://[^/]*.monday.com/docs/.*",
        "https://[^/]*.monday.com/boards/.*",
        "https://[^/]*.monday.com/my_inbox/.*",
        "https://[^/]*.monday.com/my_week*",
      ],
    },
  ],
  "notion.so": [
    {
      url: "https://notion.so",
      name: "notion.so",
      cid: 2,
      rules: ["https://[^/]*.notion.so/.*"],
    },
  ],
  "live.com": [
    {
      url: "https://onedrive.live.com",
      name: "live.com",
      cid: 2,
      rules: [
        "https://onedrive.live.com/edit.aspx/.*",
        "https://onedrive.live.com/.*",
        "https://[^/]*.sharepoint.com/:f:/.*",
        "https://[^/]*.sharepoint.com/:w:/.*",
        "https://[^/]*.sharepoint.com/:x:/.*",
        "https://[^/]*.sharepoint.com/:p:/.*",
        "https://[^/]*.sharepoint.com/:b:/.*",
        "https://[^/]*.sharepoint.com/sites/.*",
        "https://[^/]*.sharepoint.com/personal/.*",
      ],
    },
  ],
  "paperform.co": [
    {
      url: "https://www.paperform.com",
      name: "paperform.co",
      cid: 2,
      rules: ["https://[^/]*.paperform.co/edit/.*"],
    },
  ],
  "pasteapp.com": [
    {
      url: "https://pasteapp.com",
      name: "pasteapp.com",
      cid: 2,
      rules: ["https://pasteapp.com/p/.*"],
    },
  ],
  "pipedrive.com": [
    {
      url: "https://pipedrive.com",
      name: "pipedrive.com",
      cid: 2,
      rules: [
        "https://[^/]*.pipedrive.com/deal/.*",
        "https://[^/]*.pipedrive.com/deals/.*",
        "https://[^/]*.pipedrive.com/pipeline/.*",
        "https://[^/]*.pipedrive.com/person/.*",
        "https://[^/]*.pipedrive.com/activites/.*",
        "https://[^/]*.pipedrive.com/organization/.*",
        "https://[^/]*.pipedrive.com/organizations/.*",
        "https://[^/]*.pipedrive.com/products/.*",
        "https://[^/]*.pipedrive.com/persons/.*",
        "https://[^/]*.pipedrive.com/timeline/.*",
        "https://[^/]*.pipedrive.com/activities/.*",
        "https://[^/]*.pipedrive.com/progress/.*",
        "https://[^/]*.pipedrive.com/mail/.*",
      ],
    },
  ],
  "pitch.com": [
    {
      url: "https://www.pitch.com",
      name: "pitch.com",
      cid: 2,
      rules: ["https://[^/]*.pitch.com/app/.*"],
    },
  ],
  "producthunt.com": [
    {
      url: "https://www.producthunt.com",
      name: "producthunt.com",
      cid: 5,
      rules: ["https://www.producthunt.com/.*"],
    },
  ],
  "productboard.com": [
    {
      url: "https://app.productboard.com",
      name: "productboard.com",
      cid: 5,
      rules: ["https://[^/]*.productboard.com/.*"],
    },
  ],
  "quip.com": [
    {
      url: "https://quip.com",
      name: "quip.com",
      cid: 5,
      rules: ["https://[^/]*.quip.com/.*"],
    },
  ],
  "qwilr.com": [
    {
      url: "https://app.qwilr.com",
      name: "qwilr.com",
      cid: 5,
      rules: ["https://app.qwilr.com/.*", "https://pages.qwilr.com/.*"],
    },
  ],
  "reactjs.org": [
    {
      url: "https://reactjs.org/docs",
      name: "reactjs.org",
      cid: 2,
      rules: ["https://reactjs.org/docs/.*"],
    },
  ],
  "reflect.app": [
    {
      url: "https://reflect.app",
      name: "reflect.app",
      cid: 2,
      rules: ["https://reflect.app/g/.*", "https://reflect.site/g/.*"],
    },
  ],
  "reflektive.com": [
    {
      url: "https://www.reflektive.com",
      name: "reflektive.com",
      cid: 2,
      rules: ["https://www.reflektive.*/app*"],
    },
  ],
  "roamresearch.com": [
    {
      url: "https://www.roamresearch.com",
      name: "roamresearch.com",
      cid: 2,
      rules: ["https://[^/]*.roamresearch.com/"],
    },
  ],
  "salesforce.com": [
    {
      url: "https://salesforce.com",
      name: "salesforce.com",
      cid: 5,
      rules: [
        "https://[^/]*.my.salesforce.com/.*",
        "https://[^/]*.lightning.force.com/lightning/r/.*",
      ],
    },
  ],
  "scribehow.com": [
    {
      url: "https://scribehow.com",
      name: "scribehow.com",
      cid: 5,
      rules: [
        "https://scribehow.com/page/.*",
        "https://scribehow.com/shared/.*",
      ],
    },
  ],
  "sentry.io": [
    {
      url: "https://sentry.io",
      name: "sentry.io",
      cid: 5,
      rules: ["https://sentry.io/organizations/.*"],
    },
  ],
  "myshopify.com": [
    {
      url: "https://myshopify.com",
      name: "myshopify.com",
      cid: 5,
      rules: ["https://[^/]*.myshopify.com/admin/.*"],
    },
  ],
  "slack.com": [
    {
      url: "https://app.slack.com",
      name: "slack.com",
      cid: 7,
      rules: ["https://app.slack.com/client/.*"],
    },
  ],
  "slite.com": [
    {
      url: "https://www.slite.com",
      name: "slite.com",
      cid: 7,
      rules: ["https://[^/]*.slite.com/app/channels/.*"],
    },
  ],
  "taskade.com": [
    {
      url: "https://www.taskade.com",
      name: "taskade.com",
      cid: 2,
      rules: [
        "https://[^/]*.taskade.com/v/.*",
        "https://[^/]*.taskade.com/spaces/.*",
      ],
    },
  ],
  "trello.com": [
    {
      url: "https://trello.com",
      name: "trello.com",
      cid: 2,
      rules: ["https://trello.com/b/.*", "https://trello.com/c/.*"],
    },
  ],
  "twitter.com": [
    {
      url: "https://twitter.com",
      name: "twitter.com",
      cid: 7,
      rules: ["https://twitter.com/.*"],
    },
  ],
  "vowel.com": [
    {
      url: "https://www.vowel.com",
      name: "vowel.com",
      cid: 7,
      rules: ["https://[^/]*.vowel.[^/]*/.*"],
    },
  ],
  "webflow.com": [
    {
      url: "https://webflow.com/",
      name: "webflow.com",
      cid: 2,
      rules: [
        "https://[^/]*.webflow.com/design/.*",
        "https://[^/]*.webflow.com/preview/.*",
        "https://[^/]*.webflow.com/dashboard/.*",
      ],
    },
  ],
  "whimsical.com": [
    {
      url: "https://whimsical.com",
      name: "whimsical.com",
      cid: 7,
      rules: ["https://whimsical.com/.*"],
    },
  ],
  "workplace.com": [
    {
      url: "https://workplace.com",
      name: "workplace.com",
      cid: 7,
      rules: ["https://[^/]*.workplace.com/profile.php.*"],
    },
  ],
  "youtube.com": [
    {
      url: "https://youtube.com",
      name: "youtube.com",
      cid: 8,
      rules: ["https://[^/]*.youtube.com/watch*"],
    },
  ],
  "zendesk.com": [
    {
      url: "https://zendesk.com/chat",
      name: "zendesk.com",
      cid: 5,
      rules: ["https://[^/]*.zendesk.com/chat/agent*"],
    },
  ],
  "zendesk.com": [
    {
      url: "https://zendesk.com/explore",
      name: "zendesk.com",
      cid: 5,
      rules: ["https://[^/]*.zendesk.com/explore/.*"],
    },
    {
      url: "https://zendesk.com/knowledge",
      name: "zendesk.com",
      cid: 5,
      rules: ["https://[^/]*.zendesk.com/knowledge/.*"],
    },
    {
      url: "https://zendesk.com/agent",
      name: "zendesk.com",
      cid: 5,
      rules: ["https://[^/]*.zendesk.com/agent/.*"],
    },
  ],
  "zoho.com": [
    {
      url: "https://www.zoho.com/",
      name: "zoho.com",
      cid: 5,
      rules: ["https://crm.zoho.[^/]*/crm/.*"],
    },
  ],
  "chime.aws": [
    {
      url: "https://app.chime.aws/meetings/",
      name: "chime.aws",
      cid: 7,
      rules: ["https://[^/]*.chime.aws/meetings/"],
    },
  ],
  "morningbrew.com": [
    {
      url: "https://www.morningbrew.com/daily/issues/latest",
      name: "morningbrew.com",
      cid: 4,
      rules: ["https://[^/]*morningbrew.com/daily/issues/.*"],
    },
  ],
  "inside.com": [
    {
      url: "https://inside.com/daily",
      name: "inside.com",
      cid: 4,
      rules: ["https://[^/]*inside.com/daily.*"],
    },
  ],
  "biztoc.com": [
    {
      url: "https://biztoc.com/",
      name: "biztoc.com",
      cid: 4,
      rules: ["https://[^/]*biztoc.com/.*"],
    },
  ],
  "thehustle.co": [
    {
      url: "https://thehustle.co/daily/",
      name: "thehustle.co",
      cid: 4,
      rules: ["https://[^/]*thehustle.co/daily/.*"],
    },
  ],
  "thedailyupside.com": [
    {
      url: "https://www.thedailyupside.com/",
      name: "thedailyupside.com",
      cid: 4,
      rules: ["https://[^/]*thedailyupside.com/.*"],
    },
  ],
  "echcrunch.com": [
    {
      url: "https://techcrunch.com/tag/daily-crunch/",
      name: "echcrunch.com",
      cid: 4,
      rules: ["https://[^/]*techcrunch.com/tag/daily-crunch/.*"],
    },
  ],
  "futureparty.com": [
    {
      url: "https://futureparty.com/newsletter/",
      name: "futureparty.com",
      cid: 4,
      rules: ["https://[^/]*futureparty.com/newsletter/.*"],
    },
  ],
  "chartr.co": [
    {
      url: "https://www.chartr.co/newsletters",
      name: "chartr.co",
      cid: 4,
      rules: ["https://[^/]*www.chartr.co/newsletters.*"],
    },
  ],
  "cnn.com": [
    {
      url: "https://www.cnn.com/specials/5-things",
      name: "cnn.com",
      cid: 4,
      rules: ["https://[^/]*cnn.com/specials/5-things.*"],
    },
    {
      url: "https://cnn.com",
      name: "cnn.com",
      cid: 6,
      rules: ["https://[^/]*cnn.com/*"],
    },
  ],
  "amazon.com": [
    {
      url: "https://amazon.com",
      name: "amazon.com",
      cid: 10,
      rules: ["https://www.amazon.com/*"],
    },
  ],
  "ebay.com": [
    {
      url: "https://ebay.com",
      name: "ebay.com",
      cid: 10,
      rules: ["https://[^/]*ebay.com/*"],
    },
  ],
  "amazon.co.jp": [
    {
      url: "https://amazon.co.jp",
      name: "amazon.co.jp",
      cid: 10,
      rules: ["https://[^/]*amazon.co.jp/*"],
    },
  ],
  "rakuten.co.jp": [
    {
      url: "https://rakuten.co.jp",
      name: "rakuten.co.jp",
      cid: 10,
      rules: ["https://[^/]*rakuten.co.jp/*"],
    },
  ],
  "etsy.com": [
    {
      url: "https://etsy.com",
      name: "etsy.com",
      cid: 10,
      rules: ["https://[^/]*etsy.com/*"],
    },
  ],
  "amazon.de": [
    {
      url: "https://amazon.de",
      name: "amazon.de",
      cid: 10,
      rules: ["https://www.amazon.de/*"],
    },
  ],
  "aliexpress.com": [
    {
      url: "https://aliexpress.com",
      name: "aliexpress.com",
      cid: 10,
      rules: ["https://[^/]*aliexpress.com/*"],
    },
  ],
  "walmart.com": [
    {
      url: "https://walmart.com",
      name: "walmart.com",
      cid: 10,
      rules: ["https://[^/]*walmart.com/*"],
    },
  ],
  "amazon.co.uk": [
    {
      url: "https://amazon.co.uk",
      name: "amazon.co.uk",
      cid: 10,
      rules: ["https://www.amazon.co.uk/*"],
    },
  ],
  "avito.ru": [
    {
      url: "https://avito.ru",
      name: "avito.ru",
      cid: 10,
      rules: ["https://[^/]*avito.ru/*"],
    },
  ],
  "wildberries.ru": [
    {
      url: "https://wildberries.ru",
      name: "wildberries.ru",
      cid: 10,
      rules: ["https://[^/]*wildberries.ru/*"],
    },
  ],
  "amazon.in": [
    {
      url: "https://amazon.in",
      name: "amazon.in",
      cid: 10,
      rules: ["https://www.amazon.in/*"],
    },
  ],
  "ozon.ru": [
    {
      url: "https://ozon.ru",
      name: "ozon.ru",
      cid: 10,
      rules: ["https://[^/]*ozon.ru/*"],
    },
  ],
  "mercadolivre.com.br": [
    {
      url: "https://mercadolivre.com.br",
      name: "mercadolivre.com.br",
      cid: 10,
      rules: ["https://[^/]*mercadolivre.com.br/*"],
    },
  ],
  "ebay.co.uk": [
    {
      url: "https://ebay.co.uk",
      name: "ebay.co.uk",
      cid: 10,
      rules: ["https://[^/]*ebay.co.uk/*"],
    },
  ],
  "taobao.com": [
    {
      url: "https://taobao.com",
      name: "taobao.com",
      cid: 10,
      rules: ["https://[^/]*taobao.com/*"],
    },
  ],
  "allegro.pl": [
    {
      url: "https://allegro.pl",
      name: "allegro.pl",
      cid: 10,
      rules: ["https://[^/]*allegro.pl/*"],
    },
  ],
  "craigslist.org": [
    {
      url: "https://craigslist.org",
      name: "craigslist.org",
      cid: 10,
      rules: ["https://[^/]*craigslist.org/*"],
    },
  ],
  "flipkart.com": [
    {
      url: "https://flipkart.com",
      name: "flipkart.com",
      cid: 10,
      rules: ["https://[^/]*flipkart.com/*"],
    },
  ],
  "market.yandex.ru": [
    {
      url: "https://market.yandex.ru",
      name: "market.yandex.ru",
      cid: 10,
      rules: ["https://[^/]*market.yandex.ru/*"],
    },
  ],
  "amazon.it": [
    {
      url: "https://amazon.it",
      name: "amazon.it",
      cid: 10,
      rules: ["https://[^/]*amazon.it/*"],
    },
  ],
  "amazon.com.br": [
    {
      url: "https://amazon.com.br",
      name: "amazon.com.br",
      cid: 10,
      rules: ["https://[^/]*amazon.com.br/*"],
    },
  ],
  "amazon.fr": [
    {
      url: "https://amazon.fr",
      name: "amazon.fr",
      cid: 10,
      rules: ["https://[^/]*amazon.fr/*"],
    },
  ],
  "amazon.ca": [
    {
      url: "https://amazon.ca",
      name: "amazon.ca",
      cid: 10,
      rules: ["https://[^/]*amazon.ca/*"],
    },
  ],
  "target.com": [
    {
      url: "https://target.com",
      name: "target.com",
      cid: 10,
      rules: ["https://[^/]*target.com/*"],
    },
  ],
  "ebay.de": [
    {
      url: "https://ebay.de",
      name: "ebay.de",
      cid: 10,
      rules: ["https://[^/]*ebay.de/*"],
    },
  ],
  "shopee.co.id": [
    {
      url: "https://shopee.co.id",
      name: "shopee.co.id",
      cid: 10,
      rules: ["https://[^/]*shopee.co.id/*"],
    },
  ],
  "pinduoduo.com": [
    {
      url: "https://pinduoduo.com",
      name: "pinduoduo.com",
      cid: 10,
      rules: ["https://[^/]*pinduoduo.com/*"],
    },
  ],
  "ebay-kleinanzeigen.de": [
    {
      url: "https://ebay-kleinanzeigen.de",
      name: "ebay-kleinanzeigen.de",
      cid: 10,
      rules: ["https://[^/]*ebay-kleinanzeigen.de/*"],
    },
  ],
  "amazon.es": [
    {
      url: "https://amazon.es",
      name: "amazon.es",
      cid: 10,
      rules: ["https://[^/]*amazon.es/*"],
    },
  ],
  "trendyol.com": [
    {
      url: "https://trendyol.com",
      name: "trendyol.com",
      cid: 10,
      rules: ["https://[^/]*trendyol.com/*"],
    },
  ],
  "mercadolibre.com.ar": [
    {
      url: "https://mercadolibre.com.ar",
      name: "mercadolibre.com.ar",
      cid: 10,
      rules: ["https://[^/]*mercadolibre.com.ar/*"],
    },
  ],
  "jd.com": [
    {
      url: "https://jd.com",
      name: "jd.com",
      cid: 10,
      rules: ["https://[^/]*jd.com/*"],
    },
  ],
  "mercari.com": [
    {
      url: "https://mercari.com",
      name: "mercari.com",
      cid: 10,
      rules: ["https://[^/]*mercari.com/*"],
    },
  ],
  "leboncoin.fr": [
    {
      url: "https://leboncoin.fr",
      name: "leboncoin.fr",
      cid: 10,
      rules: ["https://[^/]*leboncoin.fr/*"],
    },
  ],
  "sahibinden.com": [
    {
      url: "https://sahibinden.com",
      name: "sahibinden.com",
      cid: 10,
      rules: ["https://[^/]*sahibinden.com/*"],
    },
  ],
  "tokopedia.com": [
    {
      url: "https://tokopedia.com",
      name: "tokopedia.com",
      cid: 10,
      rules: ["https://[^/]*tokopedia.com/*"],
    },
  ],
  "coupang.com": [
    {
      url: "https://coupang.com",
      name: "coupang.com",
      cid: 10,
      rules: ["https://[^/]*coupang.com/*"],
    },
  ],
  "mercadolibre.com.mx": [
    {
      url: "https://mercadolibre.com.mx",
      name: "mercadolibre.com.mx",
      cid: 10,
      rules: ["https://[^/]*mercadolibre.com.mx/*"],
    },
  ],
  "shopping.yahoo.co.jp": [
    {
      url: "https://shopping.yahoo.co.jp",
      name: "shopping.yahoo.co.jp",
      cid: 10,
      rules: ["https://[^/]*shopping.yahoo.co.jp/*"],
    },
  ],
  "wayfair.com": [
    {
      url: "https://wayfair.com",
      name: "wayfair.com",
      cid: 10,
      rules: ["https://[^/]*wayfair.com/*"],
    },
  ],
  "aliexpress.ru": [
    {
      url: "https://aliexpress.ru",
      name: "aliexpress.ru",
      cid: 10,
      rules: ["https://[^/]*aliexpress.ru/*"],
    },
  ],
  "magazineluiza.com.br": [
    {
      url: "https://magazineluiza.com.br",
      name: "magazineluiza.com.br",
      cid: 10,
      rules: ["https://[^/]*magazineluiza.com.br/*"],
    },
  ],
  "kakaku.com": [
    {
      url: "https://kakaku.com",
      name: "kakaku.com",
      cid: 10,
      rules: ["https://[^/]*kakaku.com/*"],
    },
  ],
  "amazon.com.mx": [
    {
      url: "https://amazon.com.mx",
      name: "amazon.com.mx",
      cid: 10,
      rules: ["https://[^/]*amazon.com.mx/*"],
    },
  ],
  "olx.pl": [
    {
      url: "https://olx.pl",
      name: "olx.pl",
      cid: 10,
      rules: ["https://[^/]*olx.pl/*"],
    },
  ],
  "shopee.vn": [
    {
      url: "https://shopee.vn",
      name: "shopee.vn",
      cid: 10,
      rules: ["https://[^/]*shopee.vn/*"],
    },
  ],
  "dns-shop.ru": [
    {
      url: "https://dns-shop.ru",
      name: "dns-shop.ru",
      cid: 10,
      rules: ["https://[^/]*dns-shop.ru/*"],
    },
  ],
  "ticketmaster.com": [
    {
      url: "https://ticketmaster.com",
      name: "ticketmaster.com",
      cid: 10,
      rules: ["https://[^/]*ticketmaster.com/*"],
    },
  ],
  "alibaba.com": [
    {
      url: "https://alibaba.com",
      name: "alibaba.com",
      cid: 10,
      rules: ["https://[^/]*alibaba.com/*"],
    },
  ],
  "paypal.com": [
    {
      url: "https://paypal.com",
      name: "paypal.com",
      cid: 11,
      rules: ["https://[^/]*paypal.com/*"],
    },
  ],
  "caixa.gov.br": [
    {
      url: "https://caixa.gov.br",
      name: "caixa.gov.br",
      cid: 11,
      rules: ["https://[^/]*caixa.gov.br/*"],
    },
  ],
  "chase.com": [
    {
      url: "https://chase.com",
      name: "chase.com",
      cid: 11,
      rules: ["https://[^/]*chase.com/*"],
    },
  ],
  "tradingview.com": [
    {
      url: "https://tradingview.com",
      name: "tradingview.com",
      cid: 11,
      rules: ["https://[^/]*tradingview.com/*"],
    },
  ],
  "intuit.com": [
    {
      url: "https://intuit.com",
      name: "intuit.com",
      cid: 11,
      rules: ["https://[^/]*intuit.com/*"],
    },
  ],
  "investing.com": [
    {
      url: "https://investing.com",
      name: "investing.com",
      cid: 11,
      rules: ["https://[^/]*investing.com/*"],
    },
  ],
  "coil.com": [
    {
      url: "https://coil.com",
      name: "coil.com",
      cid: 11,
      rules: ["https://[^/]*coil.com/*"],
    },
  ],
  "wellsfargo.com": [
    {
      url: "https://wellsfargo.com",
      name: "wellsfargo.com",
      cid: 11,
      rules: ["https://[^/]*wellsfargo.com/*"],
    },
  ],
  "capitalone.com": [
    {
      url: "https://capitalone.com",
      name: "capitalone.com",
      cid: 11,
      rules: ["https://[^/]*capitalone.com/*"],
    },
  ],
  "bankofamerica.com": [
    {
      url: "https://bankofamerica.com",
      name: "bankofamerica.com",
      cid: 11,
      rules: ["https://[^/]*bankofamerica.com/*"],
    },
  ],
  "coinmarketcap.com": [
    {
      url: "https://coinmarketcap.com",
      name: "coinmarketcap.com",
      cid: 11,
      rules: ["https://[^/]*coinmarketcap.com/*"],
    },
  ],
  "fidelity.com": [
    {
      url: "https://fidelity.com",
      name: "fidelity.com",
      cid: 11,
      rules: ["https://[^/]*fidelity.com/*"],
    },
  ],
  "americanexpress.com": [
    {
      url: "https://americanexpress.com",
      name: "americanexpress.com",
      cid: 11,
      rules: ["https://[^/]*americanexpress.com/*"],
    },
  ],
  "adp.com": [
    {
      url: "https://adp.com",
      name: "adp.com",
      cid: 11,
      rules: ["https://[^/]*adp.com/*"],
    },
  ],
  "moneycontrol.com": [
    {
      url: "https://moneycontrol.com",
      name: "moneycontrol.com",
      cid: 11,
      rules: ["https://[^/]*moneycontrol.com/*"],
    },
  ],
  "marketwatch.com": [
    {
      url: "https://marketwatch.com",
      name: "marketwatch.com",
      cid: 11,
      rules: ["https://[^/]*marketwatch.com/*"],
    },
  ],
  "binance.com": [
    {
      url: "https://binance.com",
      name: "binance.com",
      cid: 11,
      rules: ["https://[^/]*binance.com/*"],
    },
  ],
  "hdfcbank.com": [
    {
      url: "https://hdfcbank.com",
      name: "hdfcbank.com",
      cid: 11,
      rules: ["https://[^/]*hdfcbank.com/*"],
    },
  ],
  "money.pl": [
    {
      url: "https://money.pl",
      name: "money.pl",
      cid: 11,
      rules: ["https://[^/]*money.pl/*"],
    },
  ],
  "sberbank.ru": [
    {
      url: "https://sberbank.ru",
      name: "sberbank.ru",
      cid: 11,
      rules: ["https://[^/]*sberbank.ru/*"],
    },
  ],
  "poste.it": [
    {
      url: "https://poste.it",
      name: "poste.it",
      cid: 11,
      rules: ["https://[^/]*poste.it/*"],
    },
  ],
  "fatulichin.com": [
    {
      url: "https://fatulichin.com",
      name: "fatulichin.com",
      cid: 11,
      rules: ["https://[^/]*fatulichin.com/*"],
    },
  ],
  "credit-agricole.fr": [
    {
      url: "https://credit-agricole.fr",
      name: "credit-agricole.fr",
      cid: 11,
      rules: ["https://[^/]*credit-agricole.fr/*"],
    },
  ],
  "trustpilot.com": [
    {
      url: "https://trustpilot.com",
      name: "trustpilot.com",
      cid: 11,
      rules: ["https://[^/]*trustpilot.com/*"],
    },
  ],
  "economictimes.com": [
    {
      url: "https://economictimes.com",
      name: "economictimes.com",
      cid: 11,
      rules: ["https://[^/]*economictimes.com/*"],
    },
  ],
  "citi.com": [
    {
      url: "https://citi.com",
      name: "citi.com",
      cid: 11,
      rules: ["https://[^/]*citi.com/*"],
    },
  ],
  "bwanet.ca": [
    {
      url: "https://bwanet.ca",
      name: "bwanet.ca",
      cid: 11,
      rules: ["https://[^/]*bwanet.ca/*"],
    },
  ],
  "investopedia.com": [
    {
      url: "https://investopedia.com",
      name: "investopedia.com",
      cid: 11,
      rules: ["https://[^/]*investopedia.com/*"],
    },
  ],
  "creditkarma.com": [
    {
      url: "https://creditkarma.com",
      name: "creditkarma.com",
      cid: 11,
      rules: ["https://[^/]*creditkarma.com/*"],
    },
  ],
  "tinkoff.ru": [
    {
      url: "https://tinkoff.ru",
      name: "tinkoff.ru",
      cid: 11,
      rules: ["https://[^/]*tinkoff.ru/*"],
    },
  ],
  "bancoestado.cl": [
    {
      url: "https://bancoestado.cl",
      name: "bancoestado.cl",
      cid: 11,
      rules: ["https://[^/]*bancoestado.cl/*"],
    },
  ],
  "toyokeizai.net": [
    {
      url: "https://toyokeizai.net",
      name: "toyokeizai.net",
      cid: 11,
      rules: ["https://[^/]*toyokeizai.net/*"],
    },
  ],
  "discover.com": [
    {
      url: "https://discover.com",
      name: "discover.com",
      cid: 11,
      rules: ["https://[^/]*discover.com/*"],
    },
  ],
  "rakuten-sec.co.jp": [
    {
      url: "https://rakuten-sec.co.jp",
      name: "rakuten-sec.co.jp",
      cid: 11,
      rules: ["https://[^/]*rakuten-sec.co.jp/*"],
    },
  ],
  "zerodha.com": [
    {
      url: "https://zerodha.com",
      name: "zerodha.com",
      cid: 11,
      rules: ["https://[^/]*zerodha.com/*"],
    },
  ],
  "finance.yahoo.co.jp": [
    {
      url: "https://finance.yahoo.co.jp",
      name: "finance.yahoo.co.jp",
      cid: 11,
      rules: ["https://[^/]*finance.yahoo.co.jp/*"],
    },
  ],
  "serasa.com.br": [
    {
      url: "https://serasa.com.br",
      name: "serasa.com.br",
      cid: 11,
      rules: ["https://[^/]*serasa.com.br/*"],
    },
  ],
  "rakuten-card.co.jp": [
    {
      url: "https://rakuten-card.co.jp",
      name: "rakuten-card.co.jp",
      cid: 11,
      rules: ["https://[^/]*rakuten-card.co.jp/*"],
    },
  ],
  "sbisec.co.jp": [
    {
      url: "https://sbisec.co.jp",
      name: "sbisec.co.jp",
      cid: 11,
      rules: ["https://[^/]*sbisec.co.jp/*"],
    },
  ],
  "foxbusiness.com": [
    {
      url: "https://foxbusiness.com",
      name: "foxbusiness.com",
      cid: 11,
      rules: ["https://[^/]*foxbusiness.com/*"],
    },
  ],
  "td.com": [
    {
      url: "https://td.com",
      name: "td.com",
      cid: 11,
      rules: ["https://[^/]*td.com/*"],
    },
  ],
  "taroads.com": [
    {
      url: "https://taroads.com",
      name: "taroads.com",
      cid: 11,
      rules: ["https://[^/]*taroads.com/*"],
    },
  ],
  "adyen.com": [
    {
      url: "https://adyen.com",
      name: "adyen.com",
      cid: 11,
      rules: ["https://[^/]*adyen.com/*"],
    },
  ],
  "synchrony.com": [
    {
      url: "https://synchrony.com",
      name: "synchrony.com",
      cid: 11,
      rules: ["https://[^/]*synchrony.com/*"],
    },
  ],
  "syf.com": [
    {
      url: "https://syf.com",
      name: "syf.com",
      cid: 11,
      rules: ["https://[^/]*syf.com/*"],
    },
  ],
  "coingecko.com": [
    {
      url: "https://coingecko.com",
      name: "coingecko.com",
      cid: 11,
      rules: ["https://[^/]*coingecko.com/*"],
    },
  ],
  "icicibank.com": [
    {
      url: "https://icicibank.com",
      name: "icicibank.com",
      cid: 11,
      rules: ["https://[^/]*icicibank.com/*"],
    },
  ],
  "emofid.com": [
    {
      url: "https://emofid.com",
      name: "emofid.com",
      cid: 11,
      rules: ["https://[^/]*emofid.com/*"],
    },
  ],
  "experian.com": [
    {
      url: "https://experian.com",
      name: "experian.com",
      cid: 11,
      rules: ["https://[^/]*experian.com/*"],
    },
  ],
  "schwab.com": [
    {
      url: "https://schwab.com",
      name: "schwab.com",
      cid: 11,
      rules: ["https://[^/]*schwab.com/*"],
    },
  ],
  "netflix.com": [
    {
      url: "https://netflix.com",
      name: "netflix.com",
      cid: 8,
      rules: ["https://[^/]*netflix.com/*"],
    },
  ],
  "bilibili.com": [
    {
      url: "https://bilibili.com",
      name: "bilibili.com",
      cid: 8,
      rules: ["https://[^/]*bilibili.com/*"],
    },
  ],
  "fandom.com": [
    {
      url: "https://fandom.com",
      name: "fandom.com",
      cid: 8,
      rules: ["https://[^/]*fandom.com/*"],
    },
  ],
  "imdb.com": [
    {
      url: "https://imdb.com",
      name: "imdb.com",
      cid: 8,
      rules: ["https://[^/]*imdb.com/*"],
    },
  ],
  "spotify.com": [
    {
      url: "https://spotify.com",
      name: "spotify.com",
      cid: 8,
      rules: ["https://[^/]*spotify.com/*"],
    },
  ],
  "archiveofourown.org": [
    {
      url: "https://archiveofourown.org",
      name: "archiveofourown.org",
      cid: 8,
      rules: ["https://[^/]*archiveofourown.org/*"],
    },
  ],
  "pixiv.net": [
    {
      url: "https://pixiv.net",
      name: "pixiv.net",
      cid: 8,
      rules: ["https://[^/]*pixiv.net/*"],
    },
  ],
  "disneyplus.com": [
    {
      url: "https://disneyplus.com",
      name: "disneyplus.com",
      cid: 8,
      rules: ["https://[^/]*disneyplus.com/*"],
    },
  ],
  "hotstar.com": [
    {
      url: "https://hotstar.com",
      name: "hotstar.com",
      cid: 8,
      rules: ["https://[^/]*hotstar.com/*"],
    },
  ],
  "hbomax.com": [
    {
      url: "https://hbomax.com",
      name: "hbomax.com",
      cid: 8,
      rules: ["https://[^/]*hbomax.com/*"],
    },
  ],
  "kinopoisk.ru": [
    {
      url: "https://kinopoisk.ru",
      name: "kinopoisk.ru",
      cid: 8,
      rules: ["https://[^/]*kinopoisk.ru/*"],
    },
  ],
  "aparat.com": [
    {
      url: "https://aparat.com",
      name: "aparat.com",
      cid: 8,
      rules: ["https://[^/]*aparat.com/*"],
    },
  ],
  "syosetu.com": [
    {
      url: "https://syosetu.com",
      name: "syosetu.com",
      cid: 8,
      rules: ["https://[^/]*syosetu.com/*"],
    },
  ],
  "dcinside.com": [
    {
      url: "https://dcinside.com",
      name: "dcinside.com",
      cid: 8,
      rules: ["https://[^/]*dcinside.com/*"],
    },
  ],
  "worldstar.com": [
    {
      url: "https://worldstar.com",
      name: "worldstar.com",
      cid: 8,
      rules: ["https://[^/]*worldstar.com/*"],
    },
  ],
  "primevideo.com": [
    {
      url: "https://primevideo.com",
      name: "primevideo.com",
      cid: 8,
      rules: ["https://[^/]*primevideo.com/*"],
    },
  ],
  "hulu.com": [
    {
      url: "https://hulu.com",
      name: "hulu.com",
      cid: 8,
      rules: ["https://[^/]*hulu.com/*"],
    },
  ],
  "nicovideo.jp": [
    {
      url: "https://nicovideo.jp",
      name: "nicovideo.jp",
      cid: 8,
      rules: ["https://[^/]*nicovideo.jp/*"],
    },
  ],
  "zoro.to": [
    {
      url: "https://zoro.to",
      name: "zoro.to",
      cid: 8,
      rules: ["https://[^/]*zoro.to/*"],
    },
  ],
  "miguvideo.com": [
    {
      url: "https://miguvideo.com",
      name: "miguvideo.com",
      cid: 8,
      rules: ["https://[^/]*miguvideo.com/*"],
    },
  ],
  "pikabu.ru": [
    {
      url: "https://pikabu.ru",
      name: "pikabu.ru",
      cid: 8,
      rules: ["https://[^/]*pikabu.ru/*"],
    },
  ],
  "animeflv.net": [
    {
      url: "https://animeflv.net",
      name: "animeflv.net",
      cid: 8,
      rules: ["https://[^/]*animeflv.net/*"],
    },
  ],
  "gogoanime.bid": [
    {
      url: "https://gogoanime.bid",
      name: "gogoanime.bid",
      cid: 8,
      rules: ["https://[^/]*gogoanime.bid/*"],
    },
  ],
  "wattpad.com": [
    {
      url: "https://wattpad.com",
      name: "wattpad.com",
      cid: 8,
      rules: ["https://[^/]*wattpad.com/*"],
    },
  ],
  "xfinity.com": [
    {
      url: "https://xfinity.com",
      name: "xfinity.com",
      cid: 8,
      rules: ["https://[^/]*xfinity.com/*"],
    },
  ],
  "soundcloud.com": [
    {
      url: "https://soundcloud.com",
      name: "soundcloud.com",
      cid: 8,
      rules: ["https://[^/]*soundcloud.com/*"],
    },
  ],
  "twimg.com": [
    {
      url: "https://twimg.com",
      name: "twimg.com",
      cid: 8,
      rules: ["https://[^/]*twimg.com/*"],
    },
  ],
  "dailymotion.com": [
    {
      url: "https://dailymotion.com",
      name: "dailymotion.com",
      cid: 8,
      rules: ["https://[^/]*dailymotion.com/*"],
    },
  ],
  "9gag.com": [
    {
      url: "https://9gag.com",
      name: "9gag.com",
      cid: 8,
      rules: ["https://[^/]*9gag.com/*"],
    },
  ],
  "asurascans.com": [
    {
      url: "https://asurascans.com",
      name: "asurascans.com",
      cid: 8,
      rules: ["https://[^/]*asurascans.com/*"],
    },
  ],
  "cmoa.jp": [
    {
      url: "https://cmoa.jp",
      name: "cmoa.jp",
      cid: 8,
      rules: ["https://[^/]*cmoa.jp/*"],
    },
  ],
  "rumble.com": [
    {
      url: "https://rumble.com",
      name: "rumble.com",
      cid: 8,
      rules: ["https://[^/]*rumble.com/*"],
    },
  ],
  "douban.com": [
    {
      url: "https://douban.com",
      name: "douban.com",
      cid: 8,
      rules: ["https://[^/]*douban.com/*"],
    },
  ],
  "manganato.com": [
    {
      url: "https://manganato.com",
      name: "manganato.com",
      cid: 8,
      rules: ["https://[^/]*manganato.com/*"],
    },
  ],
  "programme-tv.net": [
    {
      url: "https://programme-tv.net",
      name: "programme-tv.net",
      cid: 8,
      rules: ["https://[^/]*programme-tv.net/*"],
    },
  ],
  "nhk.or.jp": [
    {
      url: "https://nhk.or.jp",
      name: "nhk.or.jp",
      cid: 8,
      rules: ["https://[^/]*nhk.or.jp/*"],
    },
  ],
  "npr.org": [
    {
      url: "https://npr.org",
      name: "npr.org",
      cid: 8,
      rules: ["https://[^/]*npr.org/*"],
    },
  ],
  "genius.com": [
    {
      url: "https://genius.com",
      name: "genius.com",
      cid: 8,
      rules: ["https://[^/]*genius.com/*"],
    },
  ],
  "deviantart.com": [
    {
      url: "https://deviantart.com",
      name: "deviantart.com",
      cid: 8,
      rules: ["https://[^/]*deviantart.com/*"],
    },
  ],
  "tenki.jp": [
    {
      url: "https://tenki.jp",
      name: "tenki.jp",
      cid: 8,
      rules: ["https://[^/]*tenki.jp/*"],
    },
  ],
  "ficbook.net": [
    {
      url: "https://ficbook.net",
      name: "ficbook.net",
      cid: 8,
      rules: ["https://[^/]*ficbook.net/*"],
    },
  ],
  "screenrant.com": [
    {
      url: "https://screenrant.com",
      name: "screenrant.com",
      cid: 8,
      rules: ["https://[^/]*screenrant.com/*"],
    },
  ],
  "mediaset.it": [
    {
      url: "https://mediaset.it",
      name: "mediaset.it",
      cid: 8,
      rules: ["https://[^/]*mediaset.it/*"],
    },
  ],
  "rottentomatoes.com": [
    {
      url: "https://rottentomatoes.com",
      name: "rottentomatoes.com",
      cid: 8,
      rules: ["https://[^/]*rottentomatoes.com/*"],
    },
  ],
  "9anime.gs": [
    {
      url: "https://9anime.gs",
      name: "9anime.gs",
      cid: 8,
      rules: ["https://[^/]*9anime.gs/*"],
    },
  ],
  "bookmyshow.com": [
    {
      url: "https://bookmyshow.com",
      name: "bookmyshow.com",
      cid: 8,
      rules: ["https://[^/]*bookmyshow.com/*"],
    },
  ],
  "soap2day.to": [
    {
      url: "https://soap2day.to",
      name: "soap2day.to",
      cid: 8,
      rules: ["https://[^/]*soap2day.to/*"],
    },
  ],
  "fanfiction.net": [
    {
      url: "https://fanfiction.net",
      name: "fanfiction.net",
      cid: 8,
      rules: ["https://[^/]*fanfiction.net/*"],
    },
  ],
  "crunchyroll.com": [
    {
      url: "https://crunchyroll.com",
      name: "crunchyroll.com",
      cid: 8,
      rules: ["https://[^/]*crunchyroll.com/*"],
    },
  ],
  "booking.com": [
    {
      url: "https://booking.com",
      name: "booking.com",
      cid: 12,
      rules: ["https://[^/]*booking.com/*"],
    },
  ],
  "tripadvisor.com": [
    {
      url: "https://tripadvisor.com",
      name: "tripadvisor.com",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.com/*"],
    },
  ],
  "airbnb.com": [
    {
      url: "https://airbnb.com",
      name: "airbnb.com",
      cid: 12,
      rules: ["https://[^/]*airbnb.com/*"],
    },
  ],
  "expedia.com": [
    {
      url: "https://expedia.com",
      name: "expedia.com",
      cid: 12,
      rules: ["https://[^/]*expedia.com/*"],
    },
  ],
  "agoda.com": [
    {
      url: "https://agoda.com",
      name: "agoda.com",
      cid: 12,
      rules: ["https://[^/]*agoda.com/*"],
    },
  ],
  "southwest.com": [
    {
      url: "https://southwest.com",
      name: "southwest.com",
      cid: 12,
      rules: ["https://[^/]*southwest.com/*"],
    },
  ],
  "jalan.net": [
    {
      url: "https://jalan.net",
      name: "jalan.net",
      cid: 12,
      rules: ["https://[^/]*jalan.net/*"],
    },
  ],
  "uber.com": [
    {
      url: "https://uber.com",
      name: "uber.com",
      cid: 12,
      rules: ["https://[^/]*uber.com/*"],
    },
  ],
  "aa.com": [
    {
      url: "https://aa.com",
      name: "aa.com",
      cid: 12,
      rules: ["https://[^/]*aa.com/*"],
    },
  ],
  "vrbo.com": [
    {
      url: "https://vrbo.com",
      name: "vrbo.com",
      cid: 12,
      rules: ["https://[^/]*vrbo.com/*"],
    },
  ],
  "marriott.com": [
    {
      url: "https://marriott.com",
      name: "marriott.com",
      cid: 12,
      rules: ["https://[^/]*marriott.com/*"],
    },
  ],
  "hotels.com": [
    {
      url: "https://hotels.com",
      name: "hotels.com",
      cid: 12,
      rules: ["https://[^/]*hotels.com/*"],
    },
  ],
  "delta.com": [
    {
      url: "https://delta.com",
      name: "delta.com",
      cid: 12,
      rules: ["https://[^/]*delta.com/*"],
    },
  ],
  "ryanair.com": [
    {
      url: "https://ryanair.com",
      name: "ryanair.com",
      cid: 12,
      rules: ["https://[^/]*ryanair.com/*"],
    },
  ],
  "united.com": [
    {
      url: "https://united.com",
      name: "united.com",
      cid: 12,
      rules: ["https://[^/]*united.com/*"],
    },
  ],
  "navitime.co.jp": [
    {
      url: "https://navitime.co.jp",
      name: "navitime.co.jp",
      cid: 12,
      rules: ["https://[^/]*navitime.co.jp/*"],
    },
  ],
  "kayak.com": [
    {
      url: "https://kayak.com",
      name: "kayak.com",
      cid: 12,
      rules: ["https://[^/]*kayak.com/*"],
    },
  ],
  "tripadvisor.co.uk": [
    {
      url: "https://tripadvisor.co.uk",
      name: "tripadvisor.co.uk",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.co.uk/*"],
    },
  ],
  "makemytrip.com": [
    {
      url: "https://makemytrip.com",
      name: "makemytrip.com",
      cid: 12,
      rules: ["https://[^/]*makemytrip.com/*"],
    },
  ],
  "skyscanner.net": [
    {
      url: "https://skyscanner.net",
      name: "skyscanner.net",
      cid: 12,
      rules: ["https://[^/]*skyscanner.net/*"],
    },
  ],
  "irctc.co.in": [
    {
      url: "https://irctc.co.in",
      name: "irctc.co.in",
      cid: 12,
      rules: ["https://[^/]*irctc.co.in/*"],
    },
  ],
  "eastday.com": [
    {
      url: "https://eastday.com",
      name: "eastday.com",
      cid: 12,
      rules: ["https://[^/]*eastday.com/*"],
    },
  ],
  "hilton.com": [
    {
      url: "https://hilton.com",
      name: "hilton.com",
      cid: 12,
      rules: ["https://[^/]*hilton.com/*"],
    },
  ],
  "rome2rio.com": [
    {
      url: "https://rome2rio.com",
      name: "rome2rio.com",
      cid: 12,
      rules: ["https://[^/]*rome2rio.com/*"],
    },
  ],
  "thetrainline.com": [
    {
      url: "https://thetrainline.com",
      name: "thetrainline.com",
      cid: 12,
      rules: ["https://[^/]*thetrainline.com/*"],
    },
  ],
  "travel.rakuten.co.jp": [
    {
      url: "https://travel.rakuten.co.jp",
      name: "travel.rakuten.co.jp",
      cid: 12,
      rules: ["https://[^/]*travel.rakuten.co.jp/*"],
    },
  ],
  "trip.com": [
    {
      url: "https://trip.com",
      name: "trip.com",
      cid: 12,
      rules: ["https://[^/]*trip.com/*"],
    },
  ],
  "flightaware.com": [
    {
      url: "https://flightaware.com",
      name: "flightaware.com",
      cid: 12,
      rules: ["https://[^/]*flightaware.com/*"],
    },
  ],
  "priceline.com": [
    {
      url: "https://priceline.com",
      name: "priceline.com",
      cid: 12,
      rules: ["https://[^/]*priceline.com/*"],
    },
  ],
  "latamairlines.com": [
    {
      url: "https://latamairlines.com",
      name: "latamairlines.com",
      cid: 12,
      rules: ["https://[^/]*latamairlines.com/*"],
    },
  ],
  "tutu.ru": [
    {
      url: "https://tutu.ru",
      name: "tutu.ru",
      cid: 12,
      rules: ["https://[^/]*tutu.ru/*"],
    },
  ],
  "bahn.de": [
    {
      url: "https://bahn.de",
      name: "bahn.de",
      cid: 12,
      rules: ["https://[^/]*bahn.de/*"],
    },
  ],
  "123milhas.com": [
    {
      url: "https://123milhas.com",
      name: "123milhas.com",
      cid: 12,
      rules: ["https://[^/]*123milhas.com/*"],
    },
  ],
  "viator.com": [
    {
      url: "https://viator.com",
      name: "viator.com",
      cid: 12,
      rules: ["https://[^/]*viator.com/*"],
    },
  ],
  "klook.com": [
    {
      url: "https://klook.com",
      name: "klook.com",
      cid: 12,
      rules: ["https://[^/]*klook.com/*"],
    },
  ],
  "tripadvisor.in": [
    {
      url: "https://tripadvisor.in",
      name: "tripadvisor.in",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.in/*"],
    },
  ],
  "tfl.gov.uk": [
    {
      url: "https://tfl.gov.uk",
      name: "tfl.gov.uk",
      cid: 12,
      rules: ["https://[^/]*tfl.gov.uk/*"],
    },
  ],
  "easyjet.com": [
    {
      url: "https://easyjet.com",
      name: "easyjet.com",
      cid: 12,
      rules: ["https://[^/]*easyjet.com/*"],
    },
  ],
  "indianrail.gov.in": [
    {
      url: "https://indianrail.gov.in",
      name: "indianrail.gov.in",
      cid: 12,
      rules: ["https://[^/]*indianrail.gov.in/*"],
    },
  ],
  "tripadvisor.it": [
    {
      url: "https://tripadvisor.it",
      name: "tripadvisor.it",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.it/*"],
    },
  ],
  "tripadvisor.es": [
    {
      url: "https://tripadvisor.es",
      name: "tripadvisor.es",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.es/*"],
    },
  ],
  "aircanada.com": [
    {
      url: "https://aircanada.com",
      name: "aircanada.com",
      cid: 12,
      rules: ["https://[^/]*aircanada.com/*"],
    },
  ],
  "ikyu.com": [
    {
      url: "https://ikyu.com",
      name: "ikyu.com",
      cid: 12,
      rules: ["https://[^/]*ikyu.com/*"],
    },
  ],
  "tripadvisor.com.br": [
    {
      url: "https://tripadvisor.com.br",
      name: "tripadvisor.com.br",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.com.br/*"],
    },
  ],
  "tripadvisor.fr": [
    {
      url: "https://tripadvisor.fr",
      name: "tripadvisor.fr",
      cid: 12,
      rules: ["https://[^/]*tripadvisor.fr/*"],
    },
  ],
  "airbnb.co.uk": [
    {
      url: "https://airbnb.co.uk",
      name: "airbnb.co.uk",
      cid: 12,
      rules: ["https://[^/]*airbnb.co.uk/*"],
    },
  ],
  "jal.co.jp": [
    {
      url: "https://jal.co.jp",
      name: "jal.co.jp",
      cid: 12,
      rules: ["https://[^/]*jal.co.jp/*"],
    },
  ],
  "tui.co.uk": [
    {
      url: "https://tui.co.uk",
      name: "tui.co.uk",
      cid: 12,
      rules: ["https://[^/]*tui.co.uk/*"],
    },
  ],
  "kr-weathernews.com": [
    {
      url: "https://kr-weathernews.com",
      name: "kr-weathernews.com",
      cid: 12,
      rules: ["https://[^/]*kr-weathernews.com/*"],
    },
  ],
  "mta.info": [
    {
      url: "https://mta.info",
      name: "mta.info",
      cid: 12,
      rules: ["https://[^/]*mta.info/*"],
    },
  ],
  "shutterstock.com": [
    {
      url: "https://shutterstock.com",
      name: "shutterstock.com",
      cid: 13,
      rules: ["https://[^/]*shutterstock.com/*"],
    },
  ],
  "flickr.com": [
    {
      url: "https://flickr.com",
      name: "flickr.com",
      cid: 13,
      rules: ["https://[^/]*flickr.com/*"],
    },
  ],
  "ancestry.com": [
    {
      url: "https://ancestry.com",
      name: "ancestry.com",
      cid: 13,
      rules: ["https://[^/]*ancestry.com/*"],
    },
  ],
  "istockphoto.com": [
    {
      url: "https://istockphoto.com",
      name: "istockphoto.com",
      cid: 13,
      rules: ["https://[^/]*istockphoto.com/*"],
    },
  ],
  "pexels.com": [
    {
      url: "https://pexels.com",
      name: "pexels.com",
      cid: 13,
      rules: ["https://[^/]*pexels.com/*"],
    },
  ],
  "pixabay.com": [
    {
      url: "https://pixabay.com",
      name: "pixabay.com",
      cid: 13,
      rules: ["https://[^/]*pixabay.com/*"],
    },
  ],
  "unsplash.com": [
    {
      url: "https://unsplash.com",
      name: "unsplash.com",
      cid: 13,
      rules: ["https://[^/]*unsplash.com/*"],
    },
  ],
  "dreamstime.com": [
    {
      url: "https://dreamstime.com",
      name: "dreamstime.com",
      cid: 13,
      rules: ["https://[^/]*dreamstime.com/*"],
    },
  ],
  "furaffinity.net": [
    {
      url: "https://furaffinity.net",
      name: "furaffinity.net",
      cid: 13,
      rules: ["https://[^/]*furaffinity.net/*"],
    },
  ],
  "familysearch.org": [
    {
      url: "https://familysearch.org",
      name: "familysearch.org",
      cid: 13,
      rules: ["https://[^/]*familysearch.org/*"],
    },
  ],
  "derstandard.at": [
    {
      url: "https://derstandard.at",
      name: "derstandard.at",
      cid: 13,
      rules: ["https://[^/]*derstandard.at/*"],
    },
  ],
  "alamy.com": [
    {
      url: "https://alamy.com",
      name: "alamy.com",
      cid: 13,
      rules: ["https://[^/]*alamy.com/*"],
    },
  ],
  "imagetwist.com": [
    {
      url: "https://imagetwist.com",
      name: "imagetwist.com",
      cid: 13,
      rules: ["https://[^/]*imagetwist.com/*"],
    },
  ],
  "ravelry.com": [
    {
      url: "https://ravelry.com",
      name: "ravelry.com",
      cid: 13,
      rules: ["https://[^/]*ravelry.com/*"],
    },
  ],
  "hobbylobby.com": [
    {
      url: "https://hobbylobby.com",
      name: "hobbylobby.com",
      cid: 13,
      rules: ["https://[^/]*hobbylobby.com/*"],
    },
  ],
  "gettyimages.com": [
    {
      url: "https://gettyimages.com",
      name: "gettyimages.com",
      cid: 13,
      rules: ["https://[^/]*gettyimages.com/*"],
    },
  ],
  "depositphotos.com": [
    {
      url: "https://depositphotos.com",
      name: "depositphotos.com",
      cid: 13,
      rules: ["https://[^/]*depositphotos.com/*"],
    },
  ],
  "cabelas.com": [
    {
      url: "https://cabelas.com",
      name: "cabelas.com",
      cid: 13,
      rules: ["https://[^/]*cabelas.com/*"],
    },
  ],
  "123rf.com": [
    {
      url: "https://123rf.com",
      name: "123rf.com",
      cid: 13,
      rules: ["https://[^/]*123rf.com/*"],
    },
  ],
  "myheritage.com": [
    {
      url: "https://myheritage.com",
      name: "myheritage.com",
      cid: 13,
      rules: ["https://[^/]*myheritage.com/*"],
    },
  ],
  "imgsrc.ru": [
    {
      url: "https://imgsrc.ru",
      name: "imgsrc.ru",
      cid: 13,
      rules: ["https://[^/]*imgsrc.ru/*"],
    },
  ],
  "viet69.lol": [
    {
      url: "https://viet69.lol",
      name: "viet69.lol",
      cid: 13,
      rules: ["https://[^/]*viet69.lol/*"],
    },
  ],
  "fotor.com": [
    {
      url: "https://fotor.com",
      name: "fotor.com",
      cid: 13,
      rules: ["https://[^/]*fotor.com/*"],
    },
  ],
  "alltrails.com": [
    {
      url: "https://alltrails.com",
      name: "alltrails.com",
      cid: 13,
      rules: ["https://[^/]*alltrails.com/*"],
    },
  ],
  "geneanet.org": [
    {
      url: "https://geneanet.org",
      name: "geneanet.org",
      cid: 13,
      rules: ["https://[^/]*geneanet.org/*"],
    },
  ],
  "workupload.com": [
    {
      url: "https://workupload.com",
      name: "workupload.com",
      cid: 13,
      rules: ["https://[^/]*workupload.com/*"],
    },
  ],
  "detik.net.id": [
    {
      url: "https://detik.net.id",
      name: "detik.net.id",
      cid: 13,
      rules: ["https://[^/]*detik.net.id/*"],
    },
  ],
  "etsystatic.com": [
    {
      url: "https://etsystatic.com",
      name: "etsystatic.com",
      cid: 13,
      rules: ["https://[^/]*etsystatic.com/*"],
    },
  ],
  "22pixx.xyz": [
    {
      url: "https://22pixx.xyz",
      name: "22pixx.xyz",
      cid: 13,
      rules: ["https://[^/]*22pixx.xyz/*"],
    },
  ],
  "skillshare.com": [
    {
      url: "https://skillshare.com",
      name: "skillshare.com",
      cid: 13,
      rules: ["https://[^/]*skillshare.com/*"],
    },
  ],
  "23andme.com": [
    {
      url: "https://23andme.com",
      name: "23andme.com",
      cid: 13,
      rules: ["https://[^/]*23andme.com/*"],
    },
  ],
  "huaban.com": [
    {
      url: "https://huaban.com",
      name: "huaban.com",
      cid: 13,
      rules: ["https://[^/]*huaban.com/*"],
    },
  ],
  "freepikcompany.com": [
    {
      url: "https://freepikcompany.com",
      name: "freepikcompany.com",
      cid: 13,
      rules: ["https://[^/]*freepikcompany.com/*"],
    },
  ],
  "worthpoint.com": [
    {
      url: "https://worthpoint.com",
      name: "worthpoint.com",
      cid: 13,
      rules: ["https://[^/]*worthpoint.com/*"],
    },
  ],
  "dpreview.com": [
    {
      url: "https://dpreview.com",
      name: "dpreview.com",
      cid: 13,
      rules: ["https://[^/]*dpreview.com/*"],
    },
  ],
  "peakpx.com": [
    {
      url: "https://peakpx.com",
      name: "peakpx.com",
      cid: 13,
      rules: ["https://[^/]*peakpx.com/*"],
    },
  ],
  "creativefabrica.com": [
    {
      url: "https://creativefabrica.com",
      name: "creativefabrica.com",
      cid: 13,
      rules: ["https://[^/]*creativefabrica.com/*"],
    },
  ],
  "girlscouts.org": [
    {
      url: "https://girlscouts.org",
      name: "girlscouts.org",
      cid: 13,
      rules: ["https://[^/]*girlscouts.org/*"],
    },
  ],
  "yupoo.com": [
    {
      url: "https://yupoo.com",
      name: "yupoo.com",
      cid: 13,
      rules: ["https://[^/]*yupoo.com/*"],
    },
  ],
  "smugmug.com": [
    {
      url: "https://smugmug.com",
      name: "smugmug.com",
      cid: 13,
      rules: ["https://[^/]*smugmug.com/*"],
    },
  ],
  "artnet.com": [
    {
      url: "https://artnet.com",
      name: "artnet.com",
      cid: 13,
      rules: ["https://[^/]*artnet.com/*"],
    },
  ],
  "ancestry.co.uk": [
    {
      url: "https://ancestry.co.uk",
      name: "ancestry.co.uk",
      cid: 13,
      rules: ["https://[^/]*ancestry.co.uk/*"],
    },
  ],
  "postermywall.com": [
    {
      url: "https://postermywall.com",
      name: "postermywall.com",
      cid: 13,
      rules: ["https://[^/]*postermywall.com/*"],
    },
  ],
  "todocoleccion.net": [
    {
      url: "https://todocoleccion.net",
      name: "todocoleccion.net",
      cid: 13,
      rules: ["https://[^/]*todocoleccion.net/*"],
    },
  ],
  "picsart.com": [
    {
      url: "https://picsart.com",
      name: "picsart.com",
      cid: 13,
      rules: ["https://[^/]*picsart.com/*"],
    },
  ],
  "recreation.gov": [
    {
      url: "https://recreation.gov",
      name: "recreation.gov",
      cid: 13,
      rules: ["https://[^/]*recreation.gov/*"],
    },
  ],
  "petapixel.com": [
    {
      url: "https://petapixel.com",
      name: "petapixel.com",
      cid: 13,
      rules: ["https://[^/]*petapixel.com/*"],
    },
  ],
  "500px.com": [
    {
      url: "https://500px.com",
      name: "500px.com",
      cid: 13,
      rules: ["https://[^/]*500px.com/*"],
    },
  ],
  "digitalcameraworld.com": [
    {
      url: "https://digitalcameraworld.com",
      name: "digitalcameraworld.com",
      cid: 13,
      rules: ["https://[^/]*digitalcameraworld.com/*"],
    },
  ],
  "findesie.com": [
    {
      url: "https://findesie.com",
      name: "findesie.com",
      cid: 13,
      rules: ["https://[^/]*findesie.com/*"],
    },
  ],
  "facebook.com": [
    {
      url: "https://facebook.com",
      name: "facebook.com",
      cid: 7,
      rules: ["https://[^/]*facebook.com/*"],
    },
  ],
  "instagram.com": [
    {
      url: "https://instagram.com",
      name: "instagram.com",
      cid: 7,
      rules: ["https://[^/]*instagram.com/*"],
    },
  ],
  "whatsapp.com": [
    {
      url: "https://whatsapp.com",
      name: "whatsapp.com",
      cid: 7,
      rules: ["https://[^/]*whatsapp.com/*"],
    },
  ],
  "tiktok.com": [
    {
      url: "https://tiktok.com",
      name: "tiktok.com",
      cid: 7,
      rules: ["https://[^/]*tiktok.com/*"],
    },
  ],
  "reddit.com": [
    {
      url: "https://reddit.com",
      name: "reddit.com",
      cid: 7,
      rules: ["https://[^/]*reddit.com/*"],
    },
  ],
  "vk.com": [
    {
      url: "https://vk.com",
      name: "vk.com",
      cid: 7,
      rules: ["https://[^/]*vk.com/*"],
    },
  ],
  "discord.com": [
    {
      url: "https://discord.com",
      name: "discord.com",
      cid: 7,
      rules: ["https://[^/]*discord.com/*"],
    },
  ],
  "pinterest.com": [
    {
      url: "https://pinterest.com",
      name: "pinterest.com",
      cid: 7,
      rules: ["https://[^/]*pinterest.com/*"],
    },
  ],
  "ok.ru": [
    {
      url: "https://ok.ru",
      name: "ok.ru",
      cid: 7,
      rules: ["https://[^/]*ok.ru/*"],
    },
  ],
  "zhihu.com": [
    {
      url: "https://zhihu.com",
      name: "zhihu.com",
      cid: 7,
      rules: ["https://[^/]*zhihu.com/*"],
    },
  ],
  "messenger.com": [
    {
      url: "https://messenger.com",
      name: "messenger.com",
      cid: 7,
      rules: ["https://[^/]*messenger.com/*"],
    },
  ],
  "line.me": [
    {
      url: "https://line.me",
      name: "line.me",
      cid: 7,
      rules: ["https://[^/]*line.me/*"],
    },
  ],
  "telegram.org": [
    {
      url: "https://telegram.org",
      name: "telegram.org",
      cid: 7,
      rules: ["https://[^/]*telegram.org/*"],
    },
  ],
  "tumblr.com": [
    {
      url: "https://tumblr.com",
      name: "tumblr.com",
      cid: 7,
      rules: ["https://[^/]*tumblr.com/*"],
    },
  ],
  "namu.wiki": [
    {
      url: "https://namu.wiki",
      name: "namu.wiki",
      cid: 7,
      rules: ["https://[^/]*namu.wiki/*"],
    },
  ],
  "ppgames.net": [
    {
      url: "https://ppgames.net",
      name: "ppgames.net",
      cid: 7,
      rules: ["https://[^/]*ppgames.net/*"],
    },
  ],
  "ameblo.jp": [
    {
      url: "https://ameblo.jp",
      name: "ameblo.jp",
      cid: 7,
      rules: ["https://[^/]*ameblo.jp/*"],
    },
  ],
  "nextdoor.com": [
    {
      url: "https://nextdoor.com",
      name: "nextdoor.com",
      cid: 7,
      rules: ["https://[^/]*nextdoor.com/*"],
    },
  ],
  "weibo.com": [
    {
      url: "https://weibo.com",
      name: "weibo.com",
      cid: 7,
      rules: ["https://[^/]*weibo.com/*"],
    },
  ],
  "redd.it": [
    {
      url: "https://redd.it",
      name: "redd.it",
      cid: 7,
      rules: ["https://[^/]*redd.it/*"],
    },
  ],
  "pgf-asqb7a.com": [
    {
      url: "https://pgf-asqb7a.com",
      name: "pgf-asqb7a.com",
      cid: 7,
      rules: ["https://[^/]*pgf-asqb7a.com/*"],
    },
  ],
  "snapchat.com": [
    {
      url: "https://snapchat.com",
      name: "snapchat.com",
      cid: 7,
      rules: ["https://[^/]*snapchat.com/*"],
    },
  ],
  "patreon.com": [
    {
      url: "https://patreon.com",
      name: "patreon.com",
      cid: 7,
      rules: ["https://[^/]*patreon.com/*"],
    },
  ],
  "livejournal.com": [
    {
      url: "https://livejournal.com",
      name: "livejournal.com",
      cid: 7,
      rules: ["https://[^/]*livejournal.com/*"],
    },
  ],
  "zalo.me": [
    {
      url: "https://zalo.me",
      name: "zalo.me",
      cid: 7,
      rules: ["https://[^/]*zalo.me/*"],
    },
  ],
  "hatenablog.com": [
    {
      url: "https://hatenablog.com",
      name: "hatenablog.com",
      cid: 7,
      rules: ["https://[^/]*hatenablog.com/*"],
    },
  ],
  "discordapp.com": [
    {
      url: "https://discordapp.com",
      name: "discordapp.com",
      cid: 7,
      rules: ["https://[^/]*discordapp.com/*"],
    },
  ],
  "ssstik.io": [
    {
      url: "https://ssstik.io",
      name: "ssstik.io",
      cid: 7,
      rules: ["https://[^/]*ssstik.io/*"],
    },
  ],
  "omegle.com": [
    {
      url: "https://omegle.com",
      name: "omegle.com",
      cid: 7,
      rules: ["https://[^/]*omegle.com/*"],
    },
  ],
  "pinterest.es": [
    {
      url: "https://pinterest.es",
      name: "pinterest.es",
      cid: 7,
      rules: ["https://[^/]*pinterest.es/*"],
    },
  ],
  "snaptik.app": [
    {
      url: "https://snaptik.app",
      name: "snaptik.app",
      cid: 7,
      rules: ["https://[^/]*snaptik.app/*"],
    },
  ],
  "ninisite.com": [
    {
      url: "https://ninisite.com",
      name: "ninisite.com",
      cid: 7,
      rules: ["https://[^/]*ninisite.com/*"],
    },
  ],
  "slideshare.net": [
    {
      url: "https://slideshare.net",
      name: "slideshare.net",
      cid: 7,
      rules: ["https://[^/]*slideshare.net/*"],
    },
  ],
  "pinterest.com.mx": [
    {
      url: "https://pinterest.com.mx",
      name: "pinterest.com.mx",
      cid: 7,
      rules: ["https://[^/]*pinterest.com.mx/*"],
    },
  ],
  "bakusai.com": [
    {
      url: "https://bakusai.com",
      name: "bakusai.com",
      cid: 7,
      rules: ["https://[^/]*bakusai.com/*"],
    },
  ],
  "fb.com": [
    {
      url: "https://fb.com",
      name: "fb.com",
      cid: 7,
      rules: ["https://[^/]*fb.com/*"],
    },
  ],
  "pinterest.co.uk": [
    {
      url: "https://pinterest.co.uk",
      name: "pinterest.co.uk",
      cid: 7,
      rules: ["https://[^/]*pinterest.co.uk/*"],
    },
  ],
  "ptt.cc": [
    {
      url: "https://ptt.cc",
      name: "ptt.cc",
      cid: 7,
      rules: ["https://[^/]*ptt.cc/*"],
    },
  ],
  "pinterest.fr": [
    {
      url: "https://pinterest.fr",
      name: "pinterest.fr",
      cid: 7,
      rules: ["https://[^/]*pinterest.fr/*"],
    },
  ],
  "iganony.com": [
    {
      url: "https://iganony.com",
      name: "iganony.com",
      cid: 7,
      rules: ["https://[^/]*iganony.com/*"],
    },
  ],
  "youtubekids.com": [
    {
      url: "https://youtubekids.com",
      name: "youtubekids.com",
      cid: 7,
      rules: ["https://[^/]*youtubekids.com/*"],
    },
  ],
  "heylink.me": [
    {
      url: "https://heylink.me",
      name: "heylink.me",
      cid: 7,
      rules: ["https://[^/]*heylink.me/*"],
    },
  ],
  "kwai.com": [
    {
      url: "https://kwai.com",
      name: "kwai.com",
      cid: 7,
      rules: ["https://[^/]*kwai.com/*"],
    },
  ],
  "ameba.jp": [
    {
      url: "https://ameba.jp",
      name: "ameba.jp",
      cid: 7,
      rules: ["https://[^/]*ameba.jp/*"],
    },
  ],
  "pinterest.ca": [
    {
      url: "https://pinterest.ca",
      name: "pinterest.ca",
      cid: 7,
      rules: ["https://[^/]*pinterest.ca/*"],
    },
  ],
  "dcard.tw": [
    {
      url: "https://dcard.tw",
      name: "dcard.tw",
      cid: 7,
      rules: ["https://[^/]*dcard.tw/*"],
    },
  ],
  "pinterest.de": [
    {
      url: "https://pinterest.de",
      name: "pinterest.de",
      cid: 7,
      rules: ["https://[^/]*pinterest.de/*"],
    },
  ],
  "turbopages.org": [
    {
      url: "https://turbopages.org",
      name: "turbopages.org",
      cid: 6,
      rules: ["https://[^/]*turbopages.org/*"],
    },
  ],
  "naver.com": [
    {
      url: "https://naver.com",
      name: "naver.com",
      cid: 6,
      rules: ["https://[^/]*naver.com/*"],
    },
  ],
  "msn.com": [
    {
      url: "https://msn.com",
      name: "msn.com",
      cid: 6,
      rules: ["https://[^/]*msn.com/*"],
    },
  ],
  "qq.com": [
    {
      url: "https://qq.com",
      name: "qq.com",
      cid: 6,
      rules: ["https://[^/]*qq.com/*"],
    },
  ],
  "globo.com": [
    {
      url: "https://globo.com",
      name: "globo.com",
      cid: 6,
      rules: ["https://[^/]*globo.com/*"],
    },
  ],
  "news.yahoo.co.jp": [
    {
      url: "https://news.yahoo.co.jp",
      name: "news.yahoo.co.jp",
      cid: 6,
      rules: ["https://[^/]*news.yahoo.co.jp/*"],
    },
  ],
  "aajtak.in": [
    {
      url: "https://aajtak.in",
      name: "aajtak.in",
      cid: 6,
      rules: ["https://[^/]*aajtak.in/*"],
    },
  ],
  "nytimes.com": [
    {
      url: "https://nytimes.com",
      name: "nytimes.com",
      cid: 6,
      rules: ["https://[^/]*nytimes.com/*"],
    },
  ],
  "bbc.co.uk": [
    {
      url: "https://bbc.co.uk",
      name: "bbc.co.uk",
      cid: 6,
      rules: ["https://[^/]*bbc.co.uk/*"],
    },
  ],
  "bbc.com": [
    {
      url: "https://bbc.com",
      name: "bbc.com",
      cid: 6,
      rules: ["https://[^/]*bbc.com/*"],
    },
  ],
  "uol.com.br": [
    {
      url: "https://uol.com.br",
      name: "uol.com.br",
      cid: 6,
      rules: ["https://[^/]*uol.com.br/*"],
    },
  ],
  "dailymail.co.uk": [
    {
      url: "https://dailymail.co.uk",
      name: "dailymail.co.uk",
      cid: 6,
      rules: ["https://[^/]*dailymail.co.uk/*"],
    },
  ],
  "theguardian.com": [
    {
      url: "https://theguardian.com",
      name: "theguardian.com",
      cid: 6,
      rules: ["https://[^/]*theguardian.com/*"],
    },
  ],
  "foxnews.com": [
    {
      url: "https://foxnews.com",
      name: "foxnews.com",
      cid: 6,
      rules: ["https://[^/]*foxnews.com/*"],
    },
  ],
  "wp.pl": [
    {
      url: "https://wp.pl",
      name: "wp.pl",
      cid: 6,
      rules: ["https://[^/]*wp.pl/*"],
    },
  ],
  "infobae.com": [
    {
      url: "https://infobae.com",
      name: "infobae.com",
      cid: 6,
      rules: ["https://[^/]*infobae.com/*"],
    },
  ],
  "news.yahoo.com": [
    {
      url: "https://news.yahoo.com",
      name: "news.yahoo.com",
      cid: 6,
      rules: ["https://[^/]*news.yahoo.com/*"],
    },
  ],
  "onet.pl": [
    {
      url: "https://onet.pl",
      name: "onet.pl",
      cid: 6,
      rules: ["https://[^/]*onet.pl/*"],
    },
  ],
  "finance.yahoo.com": [
    {
      url: "https://finance.yahoo.com",
      name: "finance.yahoo.com",
      cid: 6,
      rules: ["https://[^/]*finance.yahoo.com/*"],
    },
  ],
  "livedoor.jp": [
    {
      url: "https://livedoor.jp",
      name: "livedoor.jp",
      cid: 6,
      rules: ["https://[^/]*livedoor.jp/*"],
    },
  ],
  "timesofindia.com": [
    {
      url: "https://timesofindia.com",
      name: "timesofindia.com",
      cid: 6,
      rules: ["https://[^/]*timesofindia.com/*"],
    },
  ],
  "bild.de": [
    {
      url: "https://bild.de",
      name: "bild.de",
      cid: 6,
      rules: ["https://[^/]*bild.de/*"],
    },
  ],
  "interia.pl": [
    {
      url: "https://interia.pl",
      name: "interia.pl",
      cid: 6,
      rules: ["https://[^/]*interia.pl/*"],
    },
  ],
  "rbc.ru": [
    {
      url: "https://rbc.ru",
      name: "rbc.ru",
      cid: 6,
      rules: ["https://[^/]*rbc.ru/*"],
    },
  ],
  "vnexpress.net": [
    {
      url: "https://vnexpress.net",
      name: "vnexpress.net",
      cid: 6,
      rules: ["https://[^/]*vnexpress.net/*"],
    },
  ],
  "news.163.com": [
    {
      url: "https://news.163.com",
      name: "news.163.com",
      cid: 6,
      rules: ["https://[^/]*news.163.com/*"],
    },
  ],
  "news.sohu.com": [
    {
      url: "https://news.sohu.com",
      name: "news.sohu.com",
      cid: 6,
      rules: ["https://[^/]*news.sohu.com/*"],
    },
  ],
  "nypost.com": [
    {
      url: "https://nypost.com",
      name: "nypost.com",
      cid: 6,
      rules: ["https://[^/]*nypost.com/*"],
    },
  ],
  "news.naver.com": [
    {
      url: "https://news.naver.com",
      name: "news.naver.com",
      cid: 6,
      rules: ["https://[^/]*news.naver.com/*"],
    },
  ],
  "people.com": [
    {
      url: "https://people.com",
      name: "people.com",
      cid: 6,
      rules: ["https://[^/]*people.com/*"],
    },
  ],
  "indiatimes.com": [
    {
      url: "https://indiatimes.com",
      name: "indiatimes.com",
      cid: 6,
      rules: ["https://[^/]*indiatimes.com/*"],
    },
  ],
  "washingtonpost.com": [
    {
      url: "https://washingtonpost.com",
      name: "washingtonpost.com",
      cid: 6,
      rules: ["https://[^/]*washingtonpost.com/*"],
    },
  ],
  "detik.com": [
    {
      url: "https://detik.com",
      name: "detik.com",
      cid: 6,
      rules: ["https://[^/]*detik.com/*"],
    },
  ],
  "ria.ru": [
    {
      url: "https://ria.ru",
      name: "ria.ru",
      cid: 6,
      rules: ["https://[^/]*ria.ru/*"],
    },
  ],
  "kompas.com": [
    {
      url: "https://kompas.com",
      name: "kompas.com",
      cid: 6,
      rules: ["https://[^/]*kompas.com/*"],
    },
  ],
  "news.mail.ru": [
    {
      url: "https://news.mail.ru",
      name: "news.mail.ru",
      cid: 6,
      rules: ["https://[^/]*news.mail.ru/*"],
    },
  ],
  "douyin.com": [
    {
      url: "https://douyin.com",
      name: "douyin.com",
      cid: 6,
      rules: ["https://[^/]*douyin.com/*"],
    },
  ],
  "t-online.de": [
    {
      url: "https://t-online.de",
      name: "t-online.de",
      cid: 6,
      rules: ["https://[^/]*t-online.de/*"],
    },
  ],
  "rambler.ru": [
    {
      url: "https://rambler.ru",
      name: "rambler.ru",
      cid: 6,
      rules: ["https://[^/]*rambler.ru/*"],
    },
  ],
  "goo.ne.jp": [
    {
      url: "https://goo.ne.jp",
      name: "goo.ne.jp",
      cid: 6,
      rules: ["https://[^/]*goo.ne.jp/*"],
    },
  ],
  "sina.com.cn": [
    {
      url: "https://sina.com.cn",
      name: "sina.com.cn",
      cid: 6,
      rules: ["https://[^/]*sina.com.cn/*"],
    },
  ],
  "ndtv.com": [
    {
      url: "https://ndtv.com",
      name: "ndtv.com",
      cid: 6,
      rules: ["https://[^/]*ndtv.com/*"],
    },
  ],
  "cnbc.com": [
    {
      url: "https://cnbc.com",
      name: "cnbc.com",
      cid: 6,
      rules: ["https://[^/]*cnbc.com/*"],
    },
  ],
  "auone.jp": [
    {
      url: "https://auone.jp",
      name: "auone.jp",
      cid: 6,
      rules: ["https://[^/]*auone.jp/*"],
    },
  ],
  "sina.cn": [
    {
      url: "https://sina.cn",
      name: "sina.cn",
      cid: 6,
      rules: ["https://[^/]*sina.cn/*"],
    },
  ],
  "hurriyet.com.tr": [
    {
      url: "https://hurriyet.com.tr",
      name: "hurriyet.com.tr",
      cid: 6,
      rules: ["https://[^/]*hurriyet.com.tr/*"],
    },
  ],
  "scribd.com": [
    {
      url: "https://scribd.com",
      name: "scribd.com",
      cid: 9,
      rules: ["https://[^/]*scribd.com/*"],
    },
  ],
  "duolingo.com": [
    {
      url: "https://duolingo.com",
      name: "duolingo.com",
      cid: 9,
      rules: ["https://[^/]*duolingo.com/*"],
    },
  ],
  "index-education.net": [
    {
      url: "https://index-education.net",
      name: "index-education.net",
      cid: 9,
      rules: ["https://[^/]*index-education.net/*"],
    },
  ],
  "librus.pl": [
    {
      url: "https://librus.pl",
      name: "librus.pl",
      cid: 9,
      rules: ["https://[^/]*librus.pl/*"],
    },
  ],
  "grammarly.com": [
    {
      url: "https://grammarly.com",
      name: "grammarly.com",
      cid: 9,
      rules: ["https://[^/]*grammarly.com/*"],
    },
  ],
  "gdz.ru": [
    {
      url: "https://gdz.ru",
      name: "gdz.ru",
      cid: 9,
      rules: ["https://[^/]*gdz.ru/*"],
    },
  ],
  "blackboard.com": [
    {
      url: "https://blackboard.com",
      name: "blackboard.com",
      cid: 9,
      rules: ["https://[^/]*blackboard.com/*"],
    },
  ],
  "schoology.com": [
    {
      url: "https://schoology.com",
      name: "schoology.com",
      cid: 9,
      rules: ["https://[^/]*schoology.com/*"],
    },
  ],
  "academia.edu": [
    {
      url: "https://academia.edu",
      name: "academia.edu",
      cid: 9,
      rules: ["https://[^/]*academia.edu/*"],
    },
  ],
  "coursera.org": [
    {
      url: "https://coursera.org",
      name: "coursera.org",
      cid: 9,
      rules: ["https://[^/]*coursera.org/*"],
    },
  ],
  "clever.com": [
    {
      url: "https://clever.com",
      name: "clever.com",
      cid: 9,
      rules: ["https://[^/]*clever.com/*"],
    },
  ],
  "brainly.co.id": [
    {
      url: "https://brainly.co.id",
      name: "brainly.co.id",
      cid: 9,
      rules: ["https://[^/]*brainly.co.id/*"],
    },
  ],
  "quizizz.com": [
    {
      url: "https://quizizz.com",
      name: "quizizz.com",
      cid: 9,
      rules: ["https://[^/]*quizizz.com/*"],
    },
  ],
  "uchi.ru": [
    {
      url: "https://uchi.ru",
      name: "uchi.ru",
      cid: 9,
      rules: ["https://[^/]*uchi.ru/*"],
    },
  ],
  "education.gouv.fr": [
    {
      url: "https://education.gouv.fr",
      name: "education.gouv.fr",
      cid: 9,
      rules: ["https://[^/]*education.gouv.fr/*"],
    },
  ],
  "examinationservices.nic.in": [
    {
      url: "https://examinationservices.nic.in",
      name: "examinationservices.nic.in",
      cid: 9,
      rules: ["https://[^/]*examinationservices.nic.in/*"],
    },
  ],
  "vedantu.com": [
    {
      url: "https://vedantu.com",
      name: "vedantu.com",
      cid: 9,
      rules: ["https://[^/]*vedantu.com/*"],
    },
  ],
  "brainly.in": [
    {
      url: "https://brainly.in",
      name: "brainly.in",
      cid: 9,
      rules: ["https://[^/]*brainly.in/*"],
    },
  ],
  "pdfdrive.com": [
    {
      url: "https://pdfdrive.com",
      name: "pdfdrive.com",
      cid: 9,
      rules: ["https://[^/]*pdfdrive.com/*"],
    },
  ],
  "myflixer.to": [
    {
      url: "https://myflixer.to",
      name: "myflixer.to",
      cid: 9,
      rules: ["https://[^/]*myflixer.to/*"],
    },
  ],
  "pearson.com": [
    {
      url: "https://pearson.com",
      name: "pearson.com",
      cid: 9,
      rules: ["https://[^/]*pearson.com/*"],
    },
  ],
  "khanacademy.org": [
    {
      url: "https://khanacademy.org",
      name: "khanacademy.org",
      cid: 9,
      rules: ["https://[^/]*khanacademy.org/*"],
    },
  ],
  "benesse.ne.jp": [
    {
      url: "https://benesse.ne.jp",
      name: "benesse.ne.jp",
      cid: 9,
      rules: ["https://[^/]*benesse.ne.jp/*"],
    },
  ],
  "studocu.com": [
    {
      url: "https://studocu.com",
      name: "studocu.com",
      cid: 9,
      rules: ["https://[^/]*studocu.com/*"],
    },
  ],
  "learncbse.in": [
    {
      url: "https://learncbse.in",
      name: "learncbse.in",
      cid: 9,
      rules: ["https://[^/]*learncbse.in/*"],
    },
  ],
  "unam.mx": [
    {
      url: "https://unam.mx",
      name: "unam.mx",
      cid: 9,
      rules: ["https://[^/]*unam.mx/*"],
    },
  ],
  "ruangguru.com": [
    {
      url: "https://ruangguru.com",
      name: "ruangguru.com",
      cid: 9,
      rules: ["https://[^/]*ruangguru.com/*"],
    },
  ],
  "chegg.com": [
    {
      url: "https://chegg.com",
      name: "chegg.com",
      cid: 9,
      rules: ["https://[^/]*chegg.com/*"],
    },
  ],
  "coursehero.com": [
    {
      url: "https://coursehero.com",
      name: "coursehero.com",
      cid: 9,
      rules: ["https://[^/]*coursehero.com/*"],
    },
  ],
  "school.mosreg.ru": [
    {
      url: "https://school.mosreg.ru",
      name: "school.mosreg.ru",
      cid: 9,
      rules: ["https://[^/]*school.mosreg.ru/*"],
    },
  ],
  "dnevnik.ru": [
    {
      url: "https://dnevnik.ru",
      name: "dnevnik.ru",
      cid: 9,
      rules: ["https://[^/]*dnevnik.ru/*"],
    },
  ],
  "study.com": [
    {
      url: "https://study.com",
      name: "study.com",
      cid: 9,
      rules: ["https://[^/]*study.com/*"],
    },
  ],
  "powerschool.com": [
    {
      url: "https://powerschool.com",
      name: "powerschool.com",
      cid: 9,
      rules: ["https://[^/]*powerschool.com/*"],
    },
  ],
  "grancursosonline.com.br": [
    {
      url: "https://grancursosonline.com.br",
      name: "grancursosonline.com.br",
      cid: 9,
      rules: ["https://[^/]*grancursosonline.com.br/*"],
    },
  ],
  "pw.live": [
    {
      url: "https://pw.live",
      name: "pw.live",
      cid: 9,
      rules: ["https://[^/]*pw.live/*"],
    },
  ],
  "toshin.com": [
    {
      url: "https://toshin.com",
      name: "toshin.com",
      cid: 9,
      rules: ["https://[^/]*toshin.com/*"],
    },
  ],
  "collegeboard.org": [
    {
      url: "https://collegeboard.org",
      name: "collegeboard.org",
      cid: 9,
      rules: ["https://[^/]*collegeboard.org/*"],
    },
  ],
  "wordwall.net": [
    {
      url: "https://wordwall.net",
      name: "wordwall.net",
      cid: 9,
      rules: ["https://[^/]*wordwall.net/*"],
    },
  ],
  "k12.com": [
    {
      url: "https://k12.com",
      name: "k12.com",
      cid: 9,
      rules: ["https://[^/]*k12.com/*"],
    },
  ],
  "mheducation.com": [
    {
      url: "https://mheducation.com",
      name: "mheducation.com",
      cid: 9,
      rules: ["https://[^/]*mheducation.com/*"],
    },
  ],
  "nta.nic.in": [
    {
      url: "https://nta.nic.in",
      name: "nta.nic.in",
      cid: 9,
      rules: ["https://[^/]*nta.nic.in/*"],
    },
  ],
  "myschoolapp.com": [
    {
      url: "https://myschoolapp.com",
      name: "myschoolapp.com",
      cid: 9,
      rules: ["https://[^/]*myschoolapp.com/*"],
    },
  ],
  "brainly.lat": [
    {
      url: "https://brainly.lat",
      name: "brainly.lat",
      cid: 9,
      rules: ["https://[^/]*brainly.lat/*"],
    },
  ],
  "jagranjosh.com": [
    {
      url: "https://jagranjosh.com",
      name: "jagranjosh.com",
      cid: 9,
      rules: ["https://[^/]*jagranjosh.com/*"],
    },
  ],
  "brainly.com": [
    {
      url: "https://brainly.com",
      name: "brainly.com",
      cid: 9,
      rules: ["https://[^/]*brainly.com/*"],
    },
  ],
};
