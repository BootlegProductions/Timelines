/* Timelines' content is separate from the interface. Add entries here. Dates in the
   "release" and "industry" views are historical examples; the story view is fictional. */
window.TIMELINES_DATA = {
  collections: [
    {slug:"marvel",name:"Marvel",category:"Films & television",subtitle:"A cinematic universe. Many connected histories.",icon:"M",available:true},
    {slug:"star-wars",name:"Star Wars",category:"Films & television",subtitle:"A galaxy of connected stories.",icon:"✦",available:false},
    {slug:"fallout",name:"Fallout",category:"Games",subtitle:"A retro-futuristic alternate history.",icon:"☢",available:false},
    {slug:"nintendo",name:"Nintendo",category:"Games",subtitle:"The evolution of an entertainment icon.",icon:"N",available:false},
    {slug:"world-history",name:"World History",category:"History",subtitle:"The people and events that shaped our world.",icon:"◷",available:false},
    {slug:"doctor-who",name:"Doctor Who",category:"Television",subtitle:"Travels in time and space.",icon:"✳",available:false}
  ],
  marvel: {
    release: {
      "label": "Film releases",
      "caption": "Explore MCU film releases alongside Fox's X-Men films and Sony's Spider-Man worlds. Follow the crossover links where screen continuities intersect.",
      "events": [
        {
          "id": "ironman",
          "released": "2008-05-02",
          "year": 2008,
          "date": "2008",
          "title": "Iron Man",
          "icon": "⚙",
          "summary": "Tony Stark's first solo film establishes the MCU's starting point."
        },
        {
          "id": "hulk",
          "released": "2008-06-13",
          "year": 2008,
          "date": "2008",
          "title": "The Incredible Hulk",
          "icon": "◈",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "ironman2",
          "released": "2010-05-07",
          "year": 2010,
          "date": "2010",
          "title": "Iron Man 2",
          "icon": "⚙",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "thor",
          "released": "2011-05-06",
          "year": 2011,
          "date": "2011",
          "title": "Thor",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "firstavenger",
          "released": "2011-07-22",
          "year": 2011,
          "date": "2011",
          "title": "Captain America: The First Avenger",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "avengers",
          "released": "2012-05-04",
          "year": 2012,
          "date": "2012",
          "title": "The Avengers",
          "icon": "✦",
          "summary": "The original Avengers assemble for a major crossover."
        },
        {
          "id": "ironman3",
          "released": "2013-05-03",
          "year": 2013,
          "date": "2013",
          "title": "Iron Man 3",
          "icon": "⚙",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "darkworld",
          "released": "2013-11-08",
          "year": 2013,
          "date": "2013",
          "title": "Thor: The Dark World",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "winter",
          "released": "2014-04-04",
          "year": 2014,
          "date": "2014",
          "title": "Captain America: The Winter Soldier",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "guardians",
          "released": "2014-08-01",
          "year": 2014,
          "date": "2014",
          "title": "Guardians of the Galaxy",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "ultron",
          "released": "2015-05-01",
          "year": 2015,
          "date": "2015",
          "title": "Avengers: Age of Ultron",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "antman",
          "released": "2015-07-17",
          "year": 2015,
          "date": "2015",
          "title": "Ant-Man",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "civil",
          "released": "2016-05-06",
          "year": 2016,
          "date": "2016",
          "title": "Captain America: Civil War",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "strange",
          "released": "2016-11-04",
          "year": 2016,
          "date": "2016",
          "title": "Doctor Strange",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "guardians2",
          "released": "2017-05-05",
          "year": 2017,
          "date": "2017",
          "title": "Guardians of the Galaxy Vol. 2",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "homecoming",
          "released": "2017-07-07",
          "year": 2017,
          "date": "2017",
          "title": "Spider-Man: Homecoming",
          "icon": "🕸",
          "summary": "The MCU's Spider-Man stars in a Sony-distributed, Marvel Studios co-produced film."
        },
        {
          "id": "ragnarok",
          "released": "2017-11-03",
          "year": 2017,
          "date": "2017",
          "title": "Thor: Ragnarok",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "blackpanther",
          "released": "2018-02-16",
          "year": 2018,
          "date": "2018",
          "title": "Black Panther",
          "icon": "♛",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "infinity",
          "released": "2018-04-27",
          "year": 2018,
          "date": "2018",
          "title": "Avengers: Infinity War",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "antwasp",
          "released": "2018-07-06",
          "year": 2018,
          "date": "2018",
          "title": "Ant-Man and the Wasp",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "captmarvel",
          "released": "2019-03-08",
          "year": 2019,
          "date": "2019",
          "title": "Captain Marvel",
          "icon": "✳",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "endgame",
          "released": "2019-04-26",
          "year": 2019,
          "date": "2019",
          "title": "Avengers: Endgame",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "farfromhome",
          "released": "2019-07-02",
          "year": 2019,
          "date": "2019",
          "title": "Spider-Man: Far From Home",
          "icon": "🕸",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "blackwidow",
          "released": "2021-07-09",
          "year": 2021,
          "date": "2021",
          "title": "Black Widow",
          "icon": "✧",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "shangchi",
          "released": "2021-09-03",
          "year": 2021,
          "date": "2021",
          "title": "Shang-Chi and the Legend of the Ten Rings",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "eternals",
          "released": "2021-11-05",
          "year": 2021,
          "date": "2021",
          "title": "Eternals",
          "icon": "✺",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "nowayhome",
          "released": "2021-12-17",
          "year": 2021,
          "date": "2021",
          "title": "Spider-Man: No Way Home",
          "icon": "🕸",
          "summary": "Tobey Maguire's and Andrew Garfield's Spider-Man continuities cross into this MCU film."
        },
        {
          "id": "multiverse",
          "released": "2022-05-06",
          "year": 2022,
          "date": "2022",
          "title": "Doctor Strange in the Multiverse of Madness",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "lovethunder",
          "released": "2022-07-08",
          "year": 2022,
          "date": "2022",
          "title": "Thor: Love and Thunder",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "wakandaforever",
          "released": "2022-11-11",
          "year": 2022,
          "date": "2022",
          "title": "Black Panther: Wakanda Forever",
          "icon": "♛",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "quantumania",
          "released": "2023-02-17",
          "year": 2023,
          "date": "2023",
          "title": "Ant-Man and the Wasp: Quantumania",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "guardians3",
          "released": "2023-05-05",
          "year": 2023,
          "date": "2023",
          "title": "Guardians of the Galaxy Vol. 3",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "marvels",
          "released": "2023-11-10",
          "year": 2023,
          "date": "2023",
          "title": "The Marvels",
          "icon": "✳",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "deadpool",
          "released": "2024-07-26",
          "year": 2024,
          "date": "2024",
          "title": "Deadpool & Wolverine",
          "icon": "✕",
          "summary": "A crossover connecting characters and continuity elements from Fox's X-Men films with the wider MCU multiverse."
        },
        {
          "id": "bravenewworld",
          "released": "2025-02-14",
          "year": 2025,
          "date": "2025",
          "title": "Captain America: Brave New World",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "thunderbolts",
          "released": "2025-05-02",
          "year": 2025,
          "date": "2025",
          "title": "Thunderbolts*",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "firststeps",
          "released": "2025-07-25",
          "year": 2025,
          "date": "2025",
          "title": "The Fantastic Four: First Steps",
          "icon": "④",
          "summary": "A Marvel Cinematic Universe theatrical release."
        },
        {
          "id": "brandnewday",
          "released": "2026-07-31",
          "year": 2026,
          "date": "2026",
          "title": "Spider-Man: Brand New Day",
          "icon": "🕸",
          "summary": "A Marvel Cinematic Universe theatrical release."
        }
      ],
      "branches": [
        {
          "id": "fox",
          "label": "FOX / X-MEN FILMS",
          "side": "above",
          "events": [
            {
              "id": "xmen",
              "released": "2000-07-14",
              "year": 2000,
              "date": "2000",
              "title": "X-Men",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "x2",
              "released": "2003-05-02",
              "year": 2003,
              "date": "2003",
              "title": "X2: X-Men United",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "laststand",
              "released": "2006-05-26",
              "year": 2006,
              "date": "2006",
              "title": "X-Men: The Last Stand",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "origins",
              "released": "2009-05-01",
              "year": 2009,
              "date": "2009",
              "title": "X-Men Origins: Wolverine",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "firstclass",
              "released": "2011-06-03",
              "year": 2011,
              "date": "2011",
              "title": "X-Men: First Class",
              "icon": "X",
              "summary": "A prequel released after the original trilogy; this view follows release dates."
            },
            {
              "id": "wolverine",
              "released": "2013-07-26",
              "year": 2013,
              "date": "2013",
              "title": "The Wolverine",
              "icon": "⌁",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "dofp",
              "released": "2014-05-23",
              "year": 2014,
              "date": "2014",
              "title": "X-Men: Days of Future Past",
              "icon": "X",
              "summary": "Time travel connects different periods of the Fox X-Men films."
            },
            {
              "id": "foxdeadpool",
              "released": "2016-02-12",
              "year": 2016,
              "date": "2016",
              "title": "Deadpool",
              "icon": "✕",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "apocalypse",
              "released": "2016-05-27",
              "year": 2016,
              "date": "2016",
              "title": "X-Men: Apocalypse",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "logan",
              "released": "2017-03-03",
              "year": 2017,
              "date": "2017",
              "title": "Logan",
              "icon": "⌁",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "deadpool2",
              "released": "2018-05-18",
              "year": 2018,
              "date": "2018",
              "title": "Deadpool 2",
              "icon": "✕",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "darkphoenix",
              "released": "2019-06-07",
              "year": 2019,
              "date": "2019",
              "title": "Dark Phoenix",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            },
            {
              "id": "newmutants",
              "released": "2020-08-28",
              "year": 2020,
              "date": "2020",
              "title": "The New Mutants",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise."
            }
          ],
          "rejoins": [
            {
              "fromId": "newmutants",
              "toId": "deadpool",
              "label": "Deadpool & Wolverine · 2024",
              "description": "Fox-era characters enter an MCU multiverse crossover; this does not make every Fox film part of the MCU's main continuity."
            }
          ]
        },
        {
          "id": "sony",
          "label": "SONY / SPIDER-MAN WORLDS",
          "side": "below",
          "events": [
            {
              "id": "spiderman",
              "released": "2002-05-03",
              "year": 2002,
              "date": "2002",
              "title": "Spider-Man",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "spiderman2",
              "released": "2004-06-30",
              "year": 2004,
              "date": "2004",
              "title": "Spider-Man 2",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "spiderman3",
              "released": "2007-05-04",
              "year": 2007,
              "date": "2007",
              "title": "Spider-Man 3",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "amazing",
              "released": "2012-07-03",
              "year": 2012,
              "date": "2012",
              "title": "The Amazing Spider-Man",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "amazing2",
              "released": "2014-05-02",
              "year": 2014,
              "date": "2014",
              "title": "The Amazing Spider-Man 2",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "venom",
              "released": "2018-10-05",
              "year": 2018,
              "date": "2018",
              "title": "Venom",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "spiderverse",
              "released": "2018-12-14",
              "year": 2018,
              "date": "2018",
              "title": "Into the Spider-Verse",
              "icon": "✳",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "venom2",
              "released": "2021-10-01",
              "year": 2021,
              "date": "2021",
              "title": "Venom: Let There Be Carnage",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "morbius",
              "released": "2022-04-01",
              "year": 2022,
              "date": "2022",
              "title": "Morbius",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "acrossverse",
              "released": "2023-06-02",
              "year": 2023,
              "date": "2023",
              "title": "Across the Spider-Verse",
              "icon": "✳",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "madameweb",
              "released": "2024-02-14",
              "year": 2024,
              "date": "2024",
              "title": "Madame Web",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "venom3",
              "released": "2024-10-25",
              "year": 2024,
              "date": "2024",
              "title": "Venom: The Last Dance",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            },
            {
              "id": "kraven",
              "released": "2024-12-13",
              "year": 2024,
              "date": "2024",
              "title": "Kraven the Hunter",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release."
            }
          ],
          "rejoins": [
            {
              "fromId": "amazing2",
              "toId": "nowayhome",
              "label": "No Way Home · 2021",
              "description": "Earlier live-action Spider-Man continuities cross over in No Way Home; the individual film series remain distinct."
            }
          ]
        }
      ]
    },
    universe: {label:"In-universe",caption:"Selected events in fictional story order. Dates are approximate within MCU continuity.",events:[
      {id:"first",date:"1943–45",title:"The First Avenger",icon:"★",summary:"Steve Rogers becomes Captain America during the Second World War."},
      {id:"marvel",date:"1995",title:"Captain Marvel",icon:"✦",summary:"Carol Danvers becomes involved in a conflict between the Kree and Skrulls."},
      {id:"iron",date:"2010",title:"Tony becomes Iron Man",icon:"⚙",summary:"Tony Stark develops the Iron Man armour after his captivity."},
      {id:"newyork",date:"2012",title:"Battle of New York",icon:"✳",summary:"The Avengers join forces to oppose Loki's attack on Earth."},
      {id:"snap",date:"2018",title:"The Blip begins",icon:"◐",summary:"Thanos uses the Infinity Stones, erasing half of all life in the universe."},
      {id:"return",date:"2023",title:"The return",icon:"✹",summary:"The Avengers undo the Snap, restoring those who disappeared."}
    ],branches:[
      {id:"multiverse",anchor:4,side:"above",date:"Alternate",title:"Branching realities",label:"The multiverse",icon:"∞",summary:"Some Marvel stories unfold across alternate timelines and realities rather than a single chronology."}
    ]},
    industry: {label:"Studio history",caption:"Major production and ownership milestones, rather than events in the story world.",events:[
      {id:"marvel-comics",date:"1939",title:"Timely Comics",icon:"▤",summary:"The company that eventually became Marvel Comics begins publishing."},
      {id:"marvel-name",date:"1961",title:"Marvel era",icon:"M",summary:"Fantastic Four marks the beginning of the modern Marvel superhero publishing era."},
      {id:"studio",date:"1993",title:"Marvel Films",icon:"▣",summary:"Marvel creates a film-focused division, a predecessor to Marvel Studios."},
      {id:"ironfilm",date:"2008",title:"Marvel Studios' Iron Man",icon:"⚙",summary:"An independently produced film proves the potential of an interconnected cinematic universe."},
      {id:"disney",date:"2009",title:"Disney acquisition",icon:"◈",summary:"Disney announces its agreement to acquire Marvel Entertainment."},
      {id:"foxdeal",date:"2019",title:"Disney–Fox deal",icon:"✦",summary:"Disney completes its acquisition of major 21st Century Fox assets, bringing key Marvel screen franchises into the group."}
    ],branches:[
      {id:"rights",anchor:3,side:"below",date:"1990s–2000s",title:"Film rights licensed",label:"Other studios",icon:"↗",summary:"Marvel characters are adapted by different film studios, creating separate continuities and complicated rights arrangements."}
    ]}
  }
};