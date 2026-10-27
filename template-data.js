/* Green Timelines base-example data. Uses the same current app.js and styles.css. */
window.TIMELINES_DATA = {
  "collections": [
    {
      "slug": "marvel",
      "name": "Example timeline",
      "category": "Films & television",
      "subtitle": "A reusable example with branching histories.",
      "icon": "◉",
      "available": true
    },
    {
      "slug": "history",
      "name": "Historical example",
      "category": "History",
      "subtitle": "Sample collection category.",
      "icon": "◷",
      "available": false
    },
    {
      "slug": "games",
      "name": "Games example",
      "category": "Games",
      "subtitle": "Another possible category.",
      "icon": "✦",
      "available": false
    }
  ],
  "marvel": {
    "release": {
      "label": "Events",
      "caption": "An editable base timeline with a focal origin, earlier events, later milestones and reconnections.",
      "events": [
        {
          "id": "origin",
          "released": "2008-01-01",
          "date": "2008",
          "title": "Origin event",
          "icon": "◎",
          "type": "film",
          "summary": "A sample starting point for your own collection."
        },
        {
          "id": "middle",
          "released": "2012-01-01",
          "date": "2012",
          "title": "Important milestone",
          "icon": "★",
          "type": "film",
          "summary": "A key event later in the chronology."
        },
        {
          "id": "linked",
          "released": "2020-01-01",
          "date": "2020",
          "title": "Connected event",
          "icon": "◇",
          "type": "series",
          "summary": "A branch reconnects to this point."
        },
        {
          "id": "future",
          "released": "2024-01-01",
          "date": "2024",
          "title": "Later chapter",
          "icon": "✦",
          "type": "film",
          "summary": "A later milestone along the main branch."
        }
      ],
      "branches": [
        {
          "id": "parallel",
          "label": "ALTERNATE PATH",
          "side": "above",
          "events": [
            {
              "id": "early",
              "released": "2002-01-01",
              "date": "2002",
              "title": "An earlier entry",
              "icon": "◌",
              "type": "film",
              "summary": "An event can predate the focal origin."
            },
            {
              "id": "other",
              "released": "2015-01-01",
              "date": "2015",
              "title": "Parallel milestone",
              "icon": "◇",
              "type": "film",
              "summary": "A separate branch can carry its own history."
            }
          ],
          "rejoins": [
            {
              "fromId": "other",
              "toId": "linked",
              "label": "Cross-branch link",
              "description": "A sample reconnection."
            }
          ]
        }
      ]
    },
    "universe": {
      "label": "Story order",
      "caption": "Example of a fictional chronology independent of release dates.",
      "events": [
        {
          "id": "prologue",
          "sortDate": "1940-01-01",
          "date": "1940",
          "title": "The prologue",
          "icon": "◎",
          "summary": "An earlier story event."
        },
        {
          "id": "turning",
          "sortDate": "2000-01-01",
          "date": "2000",
          "title": "A turning point",
          "icon": "✦",
          "summary": "The story changes direction."
        },
        {
          "id": "era",
          "sortDate": "2020-01-01",
          "date": "2020",
          "title": "A new era",
          "icon": "◉",
          "summary": "A later point in fictional history."
        }
      ],
      "branches": []
    },
    "industry": {
      "label": "History",
      "caption": "Example of a real-world subject and its milestones.",
      "events": [
        {
          "id": "founded",
          "sortDate": "1900-01-01",
          "date": "1900",
          "title": "Founded",
          "icon": "▤",
          "summary": "An organisation or movement begins."
        },
        {
          "id": "growing",
          "sortDate": "1950-01-01",
          "date": "1950",
          "title": "Expansion",
          "icon": "⌁",
          "summary": "The subject changes over time."
        },
        {
          "id": "today",
          "sortDate": "2000-01-01",
          "date": "2000",
          "title": "Modern era",
          "icon": "✦",
          "summary": "A later historical milestone."
        }
      ],
      "branches": []
    }
  }
};
