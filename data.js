/* Timelines v0.5 — multiple subject timelines. Dates may be approximate; sources in individual views. */
window.TIMELINES_DATA = {
  "collections": [
    {
      "slug": "marvel",
      "name": "Marvel",
      "category": "Films & television",
      "subtitle": "Films, series, story continuity and studio history.",
      "icon": "M",
      "available": true,
      "theme": "marvel",
      "blurb": "Follow films, TV series, fictional chronology, studio history and the branches that connect them."
    },
    {
      "slug": "universe",
      "name": "The Universe",
      "category": "History",
      "subtitle": "From the Big Bang to the present day",
      "icon": "✦",
      "theme": "cosmos",
      "blurb": "Cosmic history on an enormous timescale, with approximate dates and major transitions.",
      "available": true
    },
    {
      "slug": "dinosaurs",
      "name": "Dinosaurs & Prehistory",
      "category": "History",
      "subtitle": "Triassic, Jurassic, Cretaceous and beyond",
      "icon": "◆",
      "theme": "prehistoric",
      "blurb": "Explore the age of dinosaurs by geologic periods, evolution and extinction.",
      "available": true
    },
    {
      "slug": "ww1",
      "name": "World War I",
      "category": "History",
      "subtitle": "The Great War, 1914–1918",
      "icon": "✢",
      "theme": "archive",
      "blurb": "Follow the outbreak, fronts, major offensives and the armistice.",
      "available": true
    },
    {
      "slug": "ww2",
      "name": "World War II",
      "category": "History",
      "subtitle": "Global conflict, 1939–1945",
      "icon": "✢",
      "theme": "archive",
      "blurb": "A connected timeline of the war in Europe, the Pacific and worldwide.",
      "available": true
    },
    {
      "slug": "fallout",
      "name": "Fallout",
      "category": "Games",
      "subtitle": "The Great War, the Vaults and the wasteland",
      "icon": "☢",
      "theme": "fallout",
      "blurb": "A connected chronology of Fallout's fictional universe and game releases.",
      "available": true
    },
    {
      "slug": "minecraft",
      "name": "Minecraft",
      "category": "Games",
      "subtitle": "Development, Java, Bedrock and mobile",
      "icon": "▣",
      "theme": "minecraft",
      "blurb": "Track Minecraft from early Classic and Alpha through major updates and edition histories.",
      "available": true
    },
    {
      "slug": "resident-evil",
      "name": "Resident Evil",
      "category": "Games",
      "subtitle": "Umbrella, the outbreak and the aftermath",
      "icon": "☣",
      "theme": "resident",
      "blurb": "Trace the virus, Raccoon City's collapse and major survival-horror events.",
      "available": true
    }
  ],
  "marvel": {
    "release": {
      "label": "Films & series",
      "caption": "MCU films and series in premiere order, with separate Fox and Sony continuities. Scheduled releases are explicitly marked.",
      "events": [
        {
          "id": "ironman",
          "released": "2008-05-02",
          "year": 2008,
          "date": "2008",
          "title": "Iron Man",
          "icon": "⚙",
          "summary": "Tony Stark's first solo film establishes the MCU's starting point.",
          "type": "film"
        },
        {
          "id": "hulk",
          "released": "2008-06-13",
          "year": 2008,
          "date": "2008",
          "title": "The Incredible Hulk",
          "icon": "◈",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "ironman2",
          "released": "2010-05-07",
          "year": 2010,
          "date": "2010",
          "title": "Iron Man 2",
          "icon": "⚙",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "thor",
          "released": "2011-05-06",
          "year": 2011,
          "date": "2011",
          "title": "Thor",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "firstavenger",
          "released": "2011-07-22",
          "year": 2011,
          "date": "2011",
          "title": "Captain America: The First Avenger",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "avengers",
          "released": "2012-05-04",
          "year": 2012,
          "date": "2012",
          "title": "The Avengers",
          "icon": "✦",
          "summary": "The original Avengers assemble for a major crossover.",
          "type": "film"
        },
        {
          "id": "ironman3",
          "released": "2013-05-03",
          "year": 2013,
          "date": "2013",
          "title": "Iron Man 3",
          "icon": "⚙",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "darkworld",
          "released": "2013-11-08",
          "year": 2013,
          "date": "2013",
          "title": "Thor: The Dark World",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "winter",
          "released": "2014-04-04",
          "year": 2014,
          "date": "2014",
          "title": "Captain America: The Winter Soldier",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "guardians",
          "released": "2014-08-01",
          "year": 2014,
          "date": "2014",
          "title": "Guardians of the Galaxy",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "ultron",
          "released": "2015-05-01",
          "year": 2015,
          "date": "2015",
          "title": "Avengers: Age of Ultron",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "antman",
          "released": "2015-07-17",
          "year": 2015,
          "date": "2015",
          "title": "Ant-Man",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "civil",
          "released": "2016-05-06",
          "year": 2016,
          "date": "2016",
          "title": "Captain America: Civil War",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "strange",
          "released": "2016-11-04",
          "year": 2016,
          "date": "2016",
          "title": "Doctor Strange",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "guardians2",
          "released": "2017-05-05",
          "year": 2017,
          "date": "2017",
          "title": "Guardians of the Galaxy Vol. 2",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "homecoming",
          "released": "2017-07-07",
          "year": 2017,
          "date": "2017",
          "title": "Spider-Man: Homecoming",
          "icon": "🕸",
          "summary": "The MCU's Spider-Man stars in a Sony-distributed, Marvel Studios co-produced film.",
          "type": "film"
        },
        {
          "id": "ragnarok",
          "released": "2017-11-03",
          "year": 2017,
          "date": "2017",
          "title": "Thor: Ragnarok",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "blackpanther",
          "released": "2018-02-16",
          "year": 2018,
          "date": "2018",
          "title": "Black Panther",
          "icon": "♛",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "infinity",
          "released": "2018-04-27",
          "year": 2018,
          "date": "2018",
          "title": "Avengers: Infinity War",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "antwasp",
          "released": "2018-07-06",
          "year": 2018,
          "date": "2018",
          "title": "Ant-Man and the Wasp",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "captmarvel",
          "released": "2019-03-08",
          "year": 2019,
          "date": "2019",
          "title": "Captain Marvel",
          "icon": "✳",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "endgame",
          "released": "2019-04-26",
          "year": 2019,
          "date": "2019",
          "title": "Avengers: Endgame",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "farfromhome",
          "released": "2019-07-02",
          "year": 2019,
          "date": "2019",
          "title": "Spider-Man: Far From Home",
          "icon": "🕸",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "wandavision",
          "released": "2021-01-15",
          "date": "2021",
          "title": "WandaVision",
          "icon": "◈",
          "summary": "Westview and Wanda's life after Endgame.",
          "type": "series",
          "source": "https://www.marvel.com/tv-shows/wandavision/1"
        },
        {
          "id": "falcon",
          "released": "2021-03-19",
          "date": "2021",
          "title": "The Falcon and the Winter Soldier",
          "icon": "★",
          "summary": "Sam Wilson and Bucky Barnes deal with Steve Rogers' legacy.",
          "type": "series"
        },
        {
          "id": "loki-s1",
          "released": "2021-06-09",
          "date": "2021",
          "title": "Loki — Season 1",
          "icon": "⌛",
          "summary": "Loki comes face to face with the TVA and branching realities.",
          "type": "series"
        },
        {
          "id": "blackwidow",
          "released": "2021-07-09",
          "year": 2021,
          "date": "2021",
          "title": "Black Widow",
          "icon": "✧",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "whatif-s1",
          "released": "2021-08-11",
          "date": "2021",
          "title": "What If...? — Season 1",
          "icon": "∞",
          "summary": "Animated anthology of alternate Marvel realities.",
          "type": "series"
        },
        {
          "id": "shangchi",
          "released": "2021-09-03",
          "year": 2021,
          "date": "2021",
          "title": "Shang-Chi and the Legend of the Ten Rings",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "eternals",
          "released": "2021-11-05",
          "year": 2021,
          "date": "2021",
          "title": "Eternals",
          "icon": "✺",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "hawkeye",
          "released": "2021-11-24",
          "date": "2021",
          "title": "Hawkeye",
          "icon": "➶",
          "summary": "Clint Barton and Kate Bishop team up in New York.",
          "type": "series"
        },
        {
          "id": "nowayhome",
          "released": "2021-12-17",
          "year": 2021,
          "date": "2021",
          "title": "Spider-Man: No Way Home",
          "icon": "🕸",
          "summary": "Tobey Maguire's and Andrew Garfield's Spider-Man continuities cross into this MCU film.",
          "type": "film"
        },
        {
          "id": "moonknight",
          "released": "2022-03-30",
          "date": "2022",
          "title": "Moon Knight",
          "icon": "☾",
          "summary": "Marc Spector becomes entangled in an Egyptian mythological mystery.",
          "type": "series"
        },
        {
          "id": "multiverse",
          "released": "2022-05-06",
          "year": 2022,
          "date": "2022",
          "title": "Doctor Strange in the Multiverse of Madness",
          "icon": "◎",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "msmarvel",
          "released": "2022-06-08",
          "date": "2022",
          "title": "Ms. Marvel",
          "icon": "✳",
          "summary": "Kamala Khan becomes a young superhero.",
          "type": "series"
        },
        {
          "id": "lovethunder",
          "released": "2022-07-08",
          "year": 2022,
          "date": "2022",
          "title": "Thor: Love and Thunder",
          "icon": "⚡",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "shehulk",
          "released": "2022-08-18",
          "date": "2022",
          "title": "She-Hulk: Attorney at Law",
          "icon": "⚖",
          "summary": "Jennifer Walters balances the law and newfound powers.",
          "type": "series"
        },
        {
          "id": "wakandaforever",
          "released": "2022-11-11",
          "year": 2022,
          "date": "2022",
          "title": "Black Panther: Wakanda Forever",
          "icon": "♛",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "quantumania",
          "released": "2023-02-17",
          "year": 2023,
          "date": "2023",
          "title": "Ant-Man and the Wasp: Quantumania",
          "icon": "◉",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "guardians3",
          "released": "2023-05-05",
          "year": 2023,
          "date": "2023",
          "title": "Guardians of the Galaxy Vol. 3",
          "icon": "✶",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "secretinvasion",
          "released": "2023-06-21",
          "date": "2023",
          "title": "Secret Invasion",
          "icon": "◇",
          "summary": "Nick Fury confronts a secret Skrull operation.",
          "type": "series"
        },
        {
          "id": "loki-s2",
          "released": "2023-10-05",
          "date": "2023",
          "title": "Loki — Season 2",
          "icon": "⌛",
          "summary": "Loki confronts the fate of branching timelines.",
          "type": "series"
        },
        {
          "id": "marvels",
          "released": "2023-11-10",
          "year": 2023,
          "date": "2023",
          "title": "The Marvels",
          "icon": "✳",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "whatif-s2",
          "released": "2023-12-22",
          "date": "2023",
          "title": "What If...? — Season 2",
          "icon": "∞",
          "summary": "Further alternate realities in Marvel Animation.",
          "type": "series"
        },
        {
          "id": "echo",
          "released": "2024-01-09",
          "date": "2024",
          "title": "Echo",
          "icon": "✧",
          "summary": "Maya Lopez faces her past.",
          "type": "series"
        },
        {
          "id": "deadpool",
          "released": "2024-07-26",
          "year": 2024,
          "date": "2024",
          "title": "Deadpool & Wolverine",
          "icon": "✕",
          "summary": "A crossover connecting characters and continuity elements from Fox's X-Men films with the wider MCU multiverse.",
          "type": "film"
        },
        {
          "id": "agatha",
          "released": "2024-09-18",
          "date": "2024",
          "title": "Agatha All Along",
          "icon": "☾",
          "summary": "Agatha Harkness travels the Witches' Road.",
          "type": "series",
          "source": "https://www.marvel.com/tv-shows/agatha-all-along/1"
        },
        {
          "id": "whatif-s3",
          "released": "2024-12-22",
          "date": "2024",
          "title": "What If...? — Season 3",
          "icon": "∞",
          "summary": "The animated multiverse anthology concludes.",
          "type": "series"
        },
        {
          "id": "bravenewworld",
          "released": "2025-02-14",
          "year": 2025,
          "date": "2025",
          "title": "Captain America: Brave New World",
          "icon": "★",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "bornagain",
          "released": "2025-03-04",
          "date": "2025",
          "title": "Daredevil: Born Again — Season 1",
          "icon": "⚖",
          "summary": "Matt Murdock and Wilson Fisk return.",
          "type": "series"
        },
        {
          "id": "thunderbolts",
          "released": "2025-05-02",
          "year": 2025,
          "date": "2025",
          "title": "Thunderbolts*",
          "icon": "✦",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "ironheart",
          "released": "2025-06-24",
          "date": "2025",
          "title": "Ironheart",
          "icon": "⚙",
          "summary": "Riri Williams' technology intersects with magic.",
          "type": "series",
          "source": "https://www.marvel.com/tv-shows/ironheart/1"
        },
        {
          "id": "firststeps",
          "released": "2025-07-25",
          "year": 2025,
          "date": "2025",
          "title": "The Fantastic Four: First Steps",
          "icon": "④",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "eyeswakanda",
          "released": "2025-08-01",
          "date": "2025",
          "title": "Eyes of Wakanda",
          "icon": "♛",
          "summary": "An animated anthology exploring different periods of Wakanda's history.",
          "type": "series"
        },
        {
          "id": "marvelzombies",
          "released": "2025-09-24",
          "date": "2025",
          "title": "Marvel Zombies",
          "icon": "☠",
          "summary": "An animated alternate-universe horror series.",
          "type": "series"
        },
        {
          "id": "wonderman",
          "released": "2026-01-28",
          "date": "2026",
          "title": "Wonder Man",
          "icon": "★",
          "summary": "Simon Williams enters the world of acting and superhero celebrity.",
          "type": "series",
          "source": "https://www.disneyplus.com/en-gb/explore/articles/marvels-wonder-man"
        },
        {
          "id": "bornagain2",
          "released": "2026-03-25",
          "date": "2026",
          "title": "Daredevil: Born Again — Season 2",
          "icon": "⚖",
          "summary": "The next chapter of Matt Murdock's story.",
          "type": "series",
          "source": "https://www.disneyplus.com/en-gb/explore/articles/daredevil-born-again-season-2"
        },
        {
          "id": "brandnewday",
          "released": "2026-07-31",
          "year": 2026,
          "date": "2026",
          "title": "Spider-Man: Brand New Day",
          "icon": "🕸",
          "summary": "A Marvel Cinematic Universe theatrical release.",
          "type": "film"
        },
        {
          "id": "visionquest",
          "released": "2026-10-14",
          "date": "2026",
          "title": "VisionQuest",
          "icon": "◈",
          "summary": "Vision returns after WandaVision and Agatha All Along.",
          "type": "series",
          "source": "https://www.marvel.com/articles/tv-shows/marvel-television-visionquest-release-date?pubDate=20260513"
        },
        {
          "id": "doomsday",
          "released": "2026-12-16",
          "date": "Dec 2026 · UK 16 / US 18",
          "title": "Avengers: Doomsday",
          "icon": "✦",
          "type": "film",
          "status": "upcoming",
          "summary": "An upcoming Avengers crossover involving multiple Marvel screen universes. UK theatrical release: 16 December 2026; US release: 18 December.",
          "source": "https://www.disneyplus.com/en-gb/explore/articles/avengers-doomsday"
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
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "x2",
              "released": "2003-05-02",
              "year": 2003,
              "date": "2003",
              "title": "X2: X-Men United",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "laststand",
              "released": "2006-05-26",
              "year": 2006,
              "date": "2006",
              "title": "X-Men: The Last Stand",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "origins",
              "released": "2009-05-01",
              "year": 2009,
              "date": "2009",
              "title": "X-Men Origins: Wolverine",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "firstclass",
              "released": "2011-06-03",
              "year": 2011,
              "date": "2011",
              "title": "X-Men: First Class",
              "icon": "X",
              "summary": "A prequel released after the original trilogy; this view follows release dates.",
              "type": "film"
            },
            {
              "id": "wolverine",
              "released": "2013-07-26",
              "year": 2013,
              "date": "2013",
              "title": "The Wolverine",
              "icon": "⌁",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "dofp",
              "released": "2014-05-23",
              "year": 2014,
              "date": "2014",
              "title": "X-Men: Days of Future Past",
              "icon": "X",
              "summary": "Time travel connects different periods of the Fox X-Men films.",
              "type": "film"
            },
            {
              "id": "foxdeadpool",
              "released": "2016-02-12",
              "year": 2016,
              "date": "2016",
              "title": "Deadpool",
              "icon": "✕",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "apocalypse",
              "released": "2016-05-27",
              "year": 2016,
              "date": "2016",
              "title": "X-Men: Apocalypse",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "logan",
              "released": "2017-03-03",
              "year": 2017,
              "date": "2017",
              "title": "Logan",
              "icon": "⌁",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "deadpool2",
              "released": "2018-05-18",
              "year": 2018,
              "date": "2018",
              "title": "Deadpool 2",
              "icon": "✕",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "darkphoenix",
              "released": "2019-06-07",
              "year": 2019,
              "date": "2019",
              "title": "Dark Phoenix",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            },
            {
              "id": "newmutants",
              "released": "2020-08-28",
              "year": 2020,
              "date": "2020",
              "title": "The New Mutants",
              "icon": "X",
              "summary": "A feature film from Fox's X-Men and related mutant-film franchise.",
              "type": "film"
            }
          ],
          "rejoins": [
            {
              "fromId": "newmutants",
              "toId": "deadpool",
              "label": "Deadpool & Wolverine · 2024",
              "description": "Fox-era characters enter an MCU multiverse crossover; this does not make every Fox film part of the MCU's main continuity."
            },
            {
              "fromId": "logan",
              "toId": "doomsday",
              "label": "Mutant legacy",
              "description": "Announced Fox-era X-Men cast members appear in Doomsday. This represents a multiverse crossover, not a wholesale merging of continuities."
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
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "spiderman2",
              "released": "2004-06-30",
              "year": 2004,
              "date": "2004",
              "title": "Spider-Man 2",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "spiderman3",
              "released": "2007-05-04",
              "year": 2007,
              "date": "2007",
              "title": "Spider-Man 3",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "amazing",
              "released": "2012-07-03",
              "year": 2012,
              "date": "2012",
              "title": "The Amazing Spider-Man",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "amazing2",
              "released": "2014-05-02",
              "year": 2014,
              "date": "2014",
              "title": "The Amazing Spider-Man 2",
              "icon": "🕸",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "venom",
              "released": "2018-10-05",
              "year": 2018,
              "date": "2018",
              "title": "Venom",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "spiderverse",
              "released": "2018-12-14",
              "year": 2018,
              "date": "2018",
              "title": "Into the Spider-Verse",
              "icon": "✳",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "venom2",
              "released": "2021-10-01",
              "year": 2021,
              "date": "2021",
              "title": "Venom: Let There Be Carnage",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "morbius",
              "released": "2022-04-01",
              "year": 2022,
              "date": "2022",
              "title": "Morbius",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "acrossverse",
              "released": "2023-06-02",
              "year": 2023,
              "date": "2023",
              "title": "Across the Spider-Verse",
              "icon": "✳",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "madameweb",
              "released": "2024-02-14",
              "year": 2024,
              "date": "2024",
              "title": "Madame Web",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "venom3",
              "released": "2024-10-25",
              "year": 2024,
              "date": "2024",
              "title": "Venom: The Last Dance",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
            },
            {
              "id": "kraven",
              "released": "2024-12-13",
              "year": 2024,
              "date": "2024",
              "title": "Kraven the Hunter",
              "icon": "◈",
              "summary": "A Sony Pictures Marvel-character film or Spider-Man universe release.",
              "type": "film"
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
    "universe": {
      "label": "In-universe",
      "caption": "Selected events in approximate MCU story order, not release order. Alternative timelines are shown as separate branches; dates may be approximate.",
      "events": [
        {
          "id": "early",
          "date": "Ancient history",
          "title": "Wakanda's earliest adventures",
          "summary": "Eyes of Wakanda explores stories from the distant past, long before the Avengers.",
          "icon": "♛",
          "sortDate": "0001-01-01"
        },
        {
          "id": "steve",
          "date": "1943–45",
          "title": "The First Avenger",
          "summary": "Steve Rogers becomes Captain America during World War II.",
          "icon": "★",
          "sortDate": "1943-01-01"
        },
        {
          "id": "peggy",
          "date": "1946",
          "title": "Agent Carter",
          "summary": "Peggy Carter works in the post-war intelligence world.",
          "icon": "✧",
          "sortDate": "1946-01-01"
        },
        {
          "id": "carol",
          "date": "1995",
          "title": "Captain Marvel",
          "summary": "Carol Danvers becomes involved in the Kree–Skrull conflict on Earth.",
          "icon": "✳",
          "sortDate": "1995-01-01"
        },
        {
          "id": "ironman",
          "date": "c. 2010",
          "title": "Iron Man emerges",
          "summary": "Tony Stark develops the first Iron Man armours.",
          "icon": "⚙",
          "sortDate": "2010-01-01"
        },
        {
          "id": "thor",
          "date": "c. 2011",
          "title": "Thor arrives on Earth",
          "summary": "An Asgardian conflict brings Thor to Earth.",
          "icon": "⚡",
          "sortDate": "2011-01-01"
        },
        {
          "id": "battle",
          "date": "2012",
          "title": "Battle of New York",
          "summary": "The original Avengers join together to oppose Loki and the Chitauri.",
          "icon": "✦",
          "sortDate": "2012-01-01"
        },
        {
          "id": "shield",
          "date": "2014",
          "title": "S.H.I.E.L.D. falls",
          "summary": "Hydra's infiltration of S.H.I.E.L.D. is exposed.",
          "icon": "⛨",
          "sortDate": "2014-01-01"
        },
        {
          "id": "sokovia",
          "date": "2015",
          "title": "Battle of Sokovia",
          "summary": "The Avengers defeat Ultron, raising questions about oversight.",
          "icon": "◈",
          "sortDate": "2015-01-01"
        },
        {
          "id": "civilwar",
          "date": "2016",
          "title": "The Avengers divide",
          "summary": "Disagreement over the Sokovia Accords leads to Civil War.",
          "icon": "⚖",
          "sortDate": "2016-01-01"
        },
        {
          "id": "blackpanther",
          "date": "2016",
          "title": "Wakanda's new king",
          "summary": "T'Challa takes the throne and considers Wakanda's place in the world.",
          "icon": "♛",
          "sortDate": "2016-02-01"
        },
        {
          "id": "ragnarok",
          "date": "2017",
          "title": "The fall of Asgard",
          "summary": "Thor witnesses the destruction of Asgard.",
          "icon": "⚡",
          "sortDate": "2017-01-01"
        },
        {
          "id": "snap",
          "date": "2018",
          "title": "The Snap",
          "summary": "Thanos uses the Infinity Stones, causing half of all living beings to disappear.",
          "icon": "◐",
          "sortDate": "2018-01-01"
        },
        {
          "id": "fiveyears",
          "date": "2018–2023",
          "title": "The five-year Blip",
          "summary": "Survivors adapt to a world radically changed by the Snap.",
          "icon": "⌛",
          "sortDate": "2019-01-01"
        },
        {
          "id": "endgame",
          "date": "2023",
          "title": "The return",
          "summary": "The Avengers travel through time to restore those who disappeared.",
          "icon": "✦",
          "sortDate": "2023-01-01"
        },
        {
          "id": "westview",
          "date": "c. 2023",
          "title": "Wanda's Westview anomaly",
          "summary": "Wanda creates the Hex seen in WandaVision.",
          "icon": "◈",
          "sortDate": "2023-02-01"
        },
        {
          "id": "sam",
          "date": "c. 2024",
          "title": "A new Captain America",
          "summary": "Sam Wilson takes up the mantle.",
          "icon": "★",
          "sortDate": "2024-01-01"
        },
        {
          "id": "shangchi",
          "date": "c. 2024",
          "title": "The Ten Rings",
          "summary": "Shang-Chi confronts his father Wenwu and the Ten Rings.",
          "icon": "◎",
          "sortDate": "2024-02-01"
        },
        {
          "id": "nwh",
          "date": "c. 2024",
          "title": "Spider-Man multiverse crisis",
          "summary": "A failed spell brings variants from other Spider-Man realities into the MCU.",
          "icon": "🕸",
          "sortDate": "2024-03-01"
        },
        {
          "id": "strange",
          "date": "c. 2024",
          "title": "Multiverse of Madness",
          "summary": "Doctor Strange encounters alternate realities while protecting America Chavez.",
          "icon": "∞",
          "sortDate": "2024-04-01"
        },
        {
          "id": "hawkeye",
          "date": "c. 2024",
          "title": "Kate Bishop meets Hawkeye",
          "summary": "Clint Barton and Kate Bishop team up at Christmas.",
          "icon": "➶",
          "sortDate": "2024-06-01"
        },
        {
          "id": "wakanda",
          "date": "c. 2025",
          "title": "Wakanda meets Talokan",
          "summary": "New conflicts follow the death of T'Challa.",
          "icon": "♛",
          "sortDate": "2025-01-01"
        },
        {
          "id": "kamala",
          "date": "c. 2025",
          "title": "Ms. Marvel emerges",
          "summary": "Kamala Khan becomes a superhero.",
          "icon": "✳",
          "sortDate": "2025-02-01"
        },
        {
          "id": "ironheart",
          "date": "After Wakanda Forever",
          "title": "Riri returns home",
          "summary": "Riri Williams develops her own armour in Chicago.",
          "icon": "⚙",
          "sortDate": "2025-03-01"
        },
        {
          "id": "guardians",
          "date": "Later MCU era",
          "title": "The Guardians' next chapter",
          "summary": "Rocket's history comes into focus in the Guardians' third film.",
          "icon": "✶",
          "sortDate": "2026-01-01"
        },
        {
          "id": "marvels",
          "date": "Later MCU era",
          "title": "The Marvels unite",
          "summary": "Carol, Monica and Kamala discover their linked powers.",
          "icon": "✳",
          "sortDate": "2026-02-01"
        },
        {
          "id": "agatha",
          "date": "After WandaVision",
          "title": "Agatha's Witches' Road",
          "summary": "Agatha and her coven pursue the Witches' Road.",
          "icon": "☾",
          "sortDate": "2026-03-01"
        },
        {
          "id": "daredevil",
          "date": "Later MCU era",
          "title": "Daredevil: Born Again",
          "summary": "Matt Murdock faces Wilson Fisk's growing power in New York.",
          "icon": "⚖",
          "sortDate": "2026-04-01"
        },
        {
          "id": "thunderbolts",
          "date": "Later MCU era",
          "title": "The Thunderbolts assemble",
          "summary": "A team of antiheroes is drawn into a major crisis.",
          "icon": "✦",
          "sortDate": "2026-05-01"
        }
      ],
      "branches": [
        {
          "id": "tva",
          "label": "TVA · OUTSIDE LINEAR TIME",
          "side": "above",
          "events": [
            {
              "id": "lokiescapes",
              "date": "2012 divergence",
              "title": "Loki takes the Tesseract",
              "summary": "An alternate Loki escapes, drawing the attention of the TVA.",
              "icon": "⌛",
              "sortDate": "2012-02-01"
            },
            {
              "id": "tvastory",
              "date": "Outside linear time",
              "title": "The TVA",
              "summary": "TVA events cannot be reduced to a normal calendar date; this position is a narrative reference.",
              "icon": "∞",
              "sortDate": "2023-03-01"
            },
            {
              "id": "lokiends",
              "date": "Beyond the timeline",
              "title": "Loki and the branches",
              "summary": "Loki assumes a new role supporting the branching realities.",
              "icon": "✳",
              "sortDate": "2024-05-01"
            }
          ]
        },
        {
          "id": "alternates",
          "label": "MULTIVERSE · ALTERNATE REALITIES",
          "side": "below",
          "events": [
            {
              "id": "whatif",
              "date": "Alternate history",
              "title": "What If...?",
              "summary": "Animated stories based on alternate decisions and outcomes.",
              "icon": "∞",
              "sortDate": "2016-03-01"
            },
            {
              "id": "xmen",
              "date": "Separate universe",
              "title": "X-Men continuities",
              "summary": "Fox's X-Men film continuities exist outside the original MCU.",
              "icon": "X",
              "sortDate": "2023-04-01"
            },
            {
              "id": "deadpool",
              "date": "Multiverse connection",
              "title": "Deadpool & Wolverine",
              "summary": "Characters from other screen continuities cross into MCU multiverse stories.",
              "icon": "✕",
              "sortDate": "2025-04-01"
            }
          ]
        }
      ]
    },
    "industry": {
      "label": "Studio history",
      "caption": "Real-world milestones in Marvel's publishing, filmmaking, ownership, film rights and television history.",
      "events": [
        {
          "id": "timely",
          "date": "1939",
          "title": "Timely Comics",
          "summary": "The company that eventually becomes Marvel Comics begins publishing.",
          "icon": "▤",
          "sortDate": "1939-01-01"
        },
        {
          "id": "fantasticfour",
          "date": "1961",
          "title": "The Fantastic Four",
          "summary": "The comic marks a defining point for modern Marvel superheroes.",
          "icon": "④",
          "sortDate": "1961-01-01"
        },
        {
          "id": "films",
          "date": "1993",
          "title": "Marvel Films",
          "summary": "Marvel develops a dedicated film and TV adaptations arm.",
          "icon": "▣",
          "sortDate": "1993-01-01"
        },
        {
          "id": "bankruptcy",
          "date": "1996",
          "title": "Bankruptcy filing",
          "summary": "Marvel Entertainment Group files for bankruptcy protection.",
          "icon": "⚖",
          "sortDate": "1996-01-01"
        },
        {
          "id": "blade",
          "date": "1998",
          "title": "Blade reaches cinemas",
          "summary": "Blade provides an early successful Marvel superhero feature.",
          "icon": "✦",
          "sortDate": "1998-01-01"
        },
        {
          "id": "xmen",
          "date": "2000",
          "title": "X-Men franchise",
          "summary": "20th Century Fox's X-Men launches in cinemas.",
          "icon": "X",
          "sortDate": "2000-01-01"
        },
        {
          "id": "spiderman",
          "date": "2002",
          "title": "Spider-Man blockbuster",
          "summary": "Sony's Spider-Man launches a major film franchise.",
          "icon": "🕸",
          "sortDate": "2002-01-01"
        },
        {
          "id": "financing",
          "date": "2005",
          "title": "Marvel self-financing slate",
          "summary": "Marvel Studios secures a financing arrangement for self-produced films.",
          "icon": "⌁",
          "sortDate": "2005-01-01"
        },
        {
          "id": "ironman",
          "date": "2008",
          "title": "Iron Man launches MCU",
          "summary": "Marvel Studios debuts the first film in its interconnected cinematic universe.",
          "icon": "⚙",
          "sortDate": "2008-05-01"
        },
        {
          "id": "announcement",
          "date": "31 Aug 2009",
          "title": "Disney announces Marvel purchase",
          "summary": "Disney announces an agreement to acquire Marvel Entertainment.",
          "icon": "◈",
          "sortDate": "2009-08-31",
          "source": "https://d23.com/a-to-z/marvel-entertainment/"
        },
        {
          "id": "closing",
          "date": "31 Dec 2009",
          "title": "Disney completes the purchase",
          "summary": "Marvel Entertainment officially joins Disney.",
          "icon": "◈",
          "sortDate": "2009-12-31",
          "source": "https://thewaltdisneycompany.com/press-releases/disney-completes-marvel-acquisition/"
        },
        {
          "id": "avengers",
          "date": "2012",
          "title": "The Avengers",
          "summary": "Marvel's interconnected film strategy produces a landmark ensemble blockbuster.",
          "icon": "✦",
          "sortDate": "2012-05-01"
        },
        {
          "id": "netflix",
          "date": "2013",
          "title": "Marvel–Netflix series announced",
          "summary": "Netflix's connected Marvel Television slate expands the company's screen presence.",
          "icon": "▣",
          "sortDate": "2013-11-01"
        },
        {
          "id": "sonydeal",
          "date": "2015",
          "title": "Sony–Marvel Spider-Man deal",
          "summary": "The companies agree to bring Spider-Man into the MCU while Sony retains film distribution.",
          "icon": "🕸",
          "sortDate": "2015-02-01"
        },
        {
          "id": "studio",
          "date": "2015",
          "title": "Marvel Studios reporting change",
          "summary": "Marvel Studios starts reporting directly through Walt Disney Studios.",
          "icon": "⌁",
          "sortDate": "2015-09-01"
        },
        {
          "id": "foxplan",
          "date": "2017",
          "title": "Disney–Fox deal announced",
          "summary": "Disney announces its intended acquisition of major Fox assets.",
          "icon": "X",
          "sortDate": "2017-12-01"
        },
        {
          "id": "foxclose",
          "date": "20 Mar 2019",
          "title": "Disney–Fox acquisition closes",
          "summary": "Disney completes its acquisition of major assets of 21st Century Fox.",
          "icon": "X",
          "sortDate": "2019-03-20",
          "source": "https://thewaltdisneycompany.com/press-releases/disney-21st-century-fox-acquisition-closing-date/"
        },
        {
          "id": "tvrestructure",
          "date": "2019",
          "title": "Marvel Television integrates",
          "summary": "Marvel Television production begins integrating with Marvel Studios.",
          "icon": "▣",
          "sortDate": "2019-12-01"
        },
        {
          "id": "wanda",
          "date": "2021",
          "title": "WandaVision launches Disney+ MCU TV",
          "summary": "The first Marvel Studios Disney+ series premieres.",
          "icon": "◈",
          "sortDate": "2021-01-15",
          "source": "https://www.marvel.com/tv-shows/wandavision/1"
        },
        {
          "id": "tvlabel",
          "date": "2024",
          "title": "Marvel Television brand revived",
          "summary": "The Marvel Television label returns for scripted television releases.",
          "icon": "▣",
          "sortDate": "2024-05-01"
        },
        {
          "id": "bornagain",
          "date": "2025",
          "title": "Daredevil: Born Again",
          "summary": "The series resumes the story of Matt Murdock and Wilson Fisk.",
          "icon": "⚖",
          "sortDate": "2025-03-04"
        },
        {
          "id": "doomsday",
          "date": "Dec 2026 · planned",
          "title": "Avengers: Doomsday release planned",
          "summary": "A major MCU crossover is scheduled for December 2026.",
          "icon": "✦",
          "sortDate": "2026-12-16",
          "source": "https://www.disneyplus.com/en-gb/explore/articles/avengers-doomsday"
        }
      ],
      "branches": [
        {
          "id": "rights",
          "label": "FILM RIGHTS & PARTNERS",
          "side": "above",
          "events": [
            {
              "id": "foxrights",
              "date": "1990s",
              "title": "Separate character rights",
              "summary": "Marvel screen characters are licensed to multiple studios.",
              "icon": "X",
              "sortDate": "1997-01-01"
            },
            {
              "id": "sonyrights",
              "date": "1999",
              "title": "Sony's Spider-Man rights",
              "summary": "Sony secures Spider-Man film rights.",
              "icon": "🕸",
              "sortDate": "1999-01-01"
            },
            {
              "id": "sonydeal",
              "date": "2015",
              "title": "Shared Spider-Man agreement",
              "summary": "Sony and Marvel collaborate on Spider-Man film appearances.",
              "icon": "🕸",
              "sortDate": "2015-03-01"
            },
            {
              "id": "foxasset",
              "date": "2019",
              "title": "Fox film assets join Disney",
              "summary": "Fox entertainment assets transfer to Disney.",
              "icon": "X",
              "sortDate": "2019-04-01"
            }
          ],
          "rejoins": [
            {
              "fromId": "foxasset",
              "toId": "foxclose",
              "label": "Fox rights reconnect",
              "description": "A corporate ownership reconnection, not an in-universe crossover."
            }
          ]
        },
        {
          "id": "tv",
          "label": "MARVEL TELEVISION",
          "side": "below",
          "events": [
            {
              "id": "shieldseries",
              "date": "2013",
              "title": "Agents of S.H.I.E.L.D.",
              "summary": "The ABC Marvel Television series launches.",
              "icon": "▣",
              "sortDate": "2013-09-01"
            },
            {
              "id": "netflixdaredevil",
              "date": "2015",
              "title": "Daredevil on Netflix",
              "summary": "A new street-level live-action Marvel TV strand begins.",
              "icon": "⚖",
              "sortDate": "2015-04-01"
            },
            {
              "id": "disneyplus",
              "date": "2021",
              "title": "Original Disney+ series",
              "summary": "New Marvel Studios streaming series become central to the MCU.",
              "icon": "◈",
              "sortDate": "2021-03-01"
            }
          ],
          "rejoins": [
            {
              "fromId": "disneyplus",
              "toId": "wanda",
              "label": "Streaming expansion",
              "description": "Disney+ series become central to MCU storytelling."
            }
          ]
        }
      ]
    }
  },
  "universe": {
    "cosmic": {
      "label": "Cosmic timeline",
      "caption": "From the Big Bang to today. Distances on this diagram show *sequence*, not billions of years at a constant scale.",
      "source": "https://science.nasa.gov/universe/overview/",
      "events": [
        {
          "id": "bang",
          "sortDate": "0000-01-01",
          "date": "13.8 billion years ago",
          "title": "The Big Bang",
          "icon": "✦",
          "summary": "Around 13.8 billion years ago, the observable universe began expanding from an extremely hot, dense early state. As it expanded, it cooled enough for particles, atomic nuclei and eventually atoms to form. The Big Bang model describes that early expansion; it does not establish what, if anything, came before it."
        },
        {
          "id": "atoms",
          "sortDate": "0001-01-01",
          "date": "~380,000 years later",
          "title": "First neutral atoms",
          "icon": "◌",
          "summary": "As the universe cools, electrons combine with nuclei. Light begins travelling freely, leaving the cosmic microwave background."
        },
        {
          "id": "stars",
          "sortDate": "0002-01-01",
          "date": "~100–200 million years later",
          "title": "First stars",
          "icon": "✷",
          "summary": "The first generations of stars begin producing heavier elements, changing the chemistry of the cosmos."
        },
        {
          "id": "galaxies",
          "sortDate": "0003-01-01",
          "date": "Early universe",
          "title": "Galaxies take shape",
          "icon": "✺",
          "summary": "Gravity draws stars, gas and dark matter into growing galaxies and large-scale cosmic structures."
        },
        {
          "id": "sun",
          "sortDate": "0004-01-01",
          "date": "~4.6 billion years ago",
          "title": "Our solar system forms",
          "icon": "☀",
          "summary": "The Sun forms from a collapsing cloud of gas and dust, surrounded by material that will become planets."
        },
        {
          "id": "earth",
          "sortDate": "0005-01-01",
          "date": "~4.54 billion years ago",
          "title": "Earth forms",
          "icon": "◉",
          "summary": "Earth accretes from material in the young solar system, later developing an atmosphere, oceans and a dynamic crust."
        },
        {
          "id": "life",
          "sortDate": "0006-01-01",
          "date": "At least 3.5 billion years ago",
          "title": "Earliest life evidence",
          "icon": "✽",
          "summary": "Ancient geological evidence indicates microbial life existed on Earth billions of years before animals."
        },
        {
          "id": "oxygen",
          "sortDate": "0007-01-01",
          "date": "~2.4 billion years ago",
          "title": "Great Oxidation Event",
          "icon": "◍",
          "summary": "Oxygen produced by microorganisms builds up in the atmosphere, transforming Earth's chemistry."
        },
        {
          "id": "cambrian",
          "sortDate": "0008-01-01",
          "date": "~541 million years ago",
          "title": "Cambrian diversification",
          "icon": "❋",
          "summary": "Many animal groups appear or diversify in the fossil record during the early Cambrian."
        },
        {
          "id": "dinosaurs",
          "sortDate": "0009-01-01",
          "date": "~230 million years ago",
          "title": "First dinosaurs",
          "icon": "◆",
          "summary": "Dinosaurs evolve during the Triassic and later spread across most terrestrial environments."
        },
        {
          "id": "impact",
          "sortDate": "0010-01-01",
          "date": "66 million years ago",
          "title": "End-Cretaceous extinction",
          "icon": "☄",
          "summary": "An asteroid impact and environmental upheaval contribute to the extinction of non-avian dinosaurs."
        },
        {
          "id": "humans",
          "sortDate": "0011-01-01",
          "date": "~300,000 years ago",
          "title": "Homo sapiens emerges",
          "icon": "◉",
          "summary": "Anatomically modern humans evolve in Africa and eventually spread across the globe."
        },
        {
          "id": "now",
          "sortDate": "0012-01-01",
          "date": "Present day",
          "title": "The universe today",
          "icon": "◎",
          "summary": "Galaxies continue evolving while measurements of cosmic expansion, matter and energy refine our understanding of the cosmos."
        }
      ],
      "branches": []
    },
    "earth": {
      "label": "Earth & life",
      "caption": "A closer view of Earth's formation and the changing biosphere.",
      "source": "https://science.nasa.gov/exoplanets/what-is-the-universe/",
      "events": [
        {
          "id": "earth",
          "sortDate": "0001-01-01",
          "date": "~4.54 billion years ago",
          "title": "Earth forms",
          "icon": "◉",
          "summary": "Earth forms through planetary accretion and differentiates into internal layers."
        },
        {
          "id": "ocean",
          "sortDate": "0002-01-01",
          "date": "More than 4 billion years ago",
          "title": "Early oceans",
          "icon": "≋",
          "summary": "Water accumulates on a cooling planet; evidence indicates liquid water existed very early."
        },
        {
          "id": "microbes",
          "sortDate": "0003-01-01",
          "date": "At least 3.5 billion years ago",
          "title": "Microbial life",
          "icon": "✽",
          "summary": "Microbial communities leave some of the earliest evidence of life."
        },
        {
          "id": "oxygen",
          "sortDate": "0004-01-01",
          "date": "~2.4 billion years ago",
          "title": "Atmospheric oxygen rises",
          "icon": "◍",
          "summary": "Photosynthetic activity changes surface environments and ocean chemistry."
        },
        {
          "id": "complex",
          "sortDate": "0005-01-01",
          "date": "Over 1 billion years ago",
          "title": "Complex cells diversify",
          "icon": "✳",
          "summary": "Eukaryotic life expands well before large animals become common."
        },
        {
          "id": "cambrian",
          "sortDate": "0006-01-01",
          "date": "~541 million years ago",
          "title": "Cambrian diversification",
          "icon": "❋",
          "summary": "Animal forms diversify in the oceans."
        },
        {
          "id": "land",
          "sortDate": "0007-01-01",
          "date": "~470–400 million years ago",
          "title": "Life colonises land",
          "icon": "♣",
          "summary": "Land plants and arthropods establish terrestrial ecosystems."
        },
        {
          "id": "mesozoic",
          "sortDate": "0008-01-01",
          "date": "252–66 million years ago",
          "title": "Age of dinosaurs",
          "icon": "◆",
          "summary": "Dinosaurs become a major part of terrestrial ecosystems."
        },
        {
          "id": "extinction",
          "sortDate": "0009-01-01",
          "date": "66 million years ago",
          "title": "Mass extinction",
          "icon": "☄",
          "summary": "The extinction event ends the age of non-avian dinosaurs."
        },
        {
          "id": "today",
          "sortDate": "0010-01-01",
          "date": "Today",
          "title": "Living Earth",
          "icon": "◎",
          "summary": "Modern ecosystems are shaped by evolution, geology, climate and human activity."
        }
      ],
      "branches": []
    }
  },
  "dinosaurs": {
    "eras": {
      "label": "Geological periods",
      "caption": "A time-ordered overview of the Mesozoic; ages are rounded and may be revised.",
      "source": "https://www.nps.gov/subjects/geology/time-scale.htm",
      "events": [
        {
          "id": "permian",
          "sortDate": "0001-01-01",
          "date": "~252 Ma",
          "title": "End-Permian extinction",
          "icon": "☄",
          "summary": "Earth experiences its largest known mass extinction at the boundary before the Triassic."
        },
        {
          "id": "triassic",
          "sortDate": "0002-01-01",
          "date": "252–201 Ma",
          "title": "Triassic Period",
          "icon": "◆",
          "summary": "The Triassic followed the catastrophic end-Permian extinction. Much of the land lay within the supercontinent Pangaea, and reptiles diversified into many forms. The first dinosaurs appeared in the Late Triassic, but they were not yet the dominant animals everywhere."
        },
        {
          "id": "firstdinos",
          "sortDate": "0003-01-01",
          "date": "~230 Ma",
          "title": "Early dinosaurs",
          "icon": "♠",
          "summary": "The first dinosaurs arise during the Late Triassic; many other reptile lineages also thrive."
        },
        {
          "id": "triassicend",
          "sortDate": "0004-01-01",
          "date": "~201 Ma",
          "title": "Triassic–Jurassic extinction",
          "icon": "☄",
          "summary": "Environmental upheaval affects many groups, opening ecological opportunities for dinosaurs."
        },
        {
          "id": "jurassic",
          "sortDate": "0005-01-01",
          "date": "201–145 Ma",
          "title": "Jurassic Period",
          "icon": "◆",
          "summary": "Large sauropods and theropods thrive, alongside diverse marine reptiles and pterosaurs."
        },
        {
          "id": "birds",
          "sortDate": "0006-01-01",
          "date": "~150 Ma",
          "title": "Early birds",
          "icon": "✧",
          "summary": "Feathered dinosaurs give rise to early birds, one of the dinosaur lineages that survives today."
        },
        {
          "id": "cretaceous",
          "sortDate": "0007-01-01",
          "date": "145–66 Ma",
          "title": "Cretaceous Period",
          "icon": "◆",
          "summary": "Flowering plants spread as groups such as tyrannosaurs, ceratopsians and hadrosaurs evolve."
        },
        {
          "id": "asteroid",
          "sortDate": "0008-01-01",
          "date": "66 Ma",
          "title": "Chicxulub impact",
          "icon": "☄",
          "summary": "An asteroid strikes near today's Yucatán Peninsula and helps trigger global ecological collapse."
        },
        {
          "id": "survivors",
          "sortDate": "0009-01-01",
          "date": "66 Ma onward",
          "title": "Birds survive",
          "icon": "✧",
          "summary": "Non-avian dinosaurs disappear, but birds persist as living dinosaurs."
        }
      ],
      "branches": []
    },
    "evolution": {
      "label": "Dinosaur evolution",
      "caption": "Selected milestones showing how dinosaurs emerged, diversified and survived as birds.",
      "source": "https://www.nps.gov/subjects/geology/time-scale.htm",
      "events": [
        {
          "id": "ancestors",
          "sortDate": "0001-01-01",
          "date": "Early Triassic",
          "title": "Archosaur relatives diversify",
          "icon": "♣",
          "summary": "After the end-Permian crisis, multiple reptile groups adapt to changing land environments."
        },
        {
          "id": "first",
          "sortDate": "0002-01-01",
          "date": "~230 Ma",
          "title": "Earliest dinosaurs",
          "icon": "◆",
          "summary": "Small-bodied dinosaurs appear alongside crocodile-line archosaurs."
        },
        {
          "id": "split",
          "sortDate": "0003-01-01",
          "date": "Triassic",
          "title": "Major dinosaur branches",
          "icon": "◇",
          "summary": "Different lineages evolve feeding strategies and body plans that spread into the Jurassic."
        },
        {
          "id": "sauropod",
          "sortDate": "0004-01-01",
          "date": "Jurassic",
          "title": "Giant sauropods",
          "icon": "◆",
          "summary": "Long-necked herbivores reach extraordinary sizes."
        },
        {
          "id": "feathers",
          "sortDate": "0005-01-01",
          "date": "Jurassic–Cretaceous",
          "title": "Feathers and flight",
          "icon": "✧",
          "summary": "Feathered theropods demonstrate the evolutionary connection between dinosaurs and birds."
        },
        {
          "id": "flower",
          "sortDate": "0006-01-01",
          "date": "Cretaceous",
          "title": "New ecosystems",
          "icon": "❋",
          "summary": "Flowering plants and changing continents reshape habitats."
        },
        {
          "id": "birds",
          "sortDate": "0007-01-01",
          "date": "66 Ma to present",
          "title": "Living dinosaurs",
          "icon": "✧",
          "summary": "Birds carry dinosaur evolutionary history into modern ecosystems."
        }
      ],
      "branches": []
    }
  },
  "ww1": {
    "overview": {
      "label": "Major events",
      "caption": "An introductory chronology of the First World War. Further fronts and national perspectives can be added.",
      "source": "https://www.iwm.org.uk/",
      "events": [
        {
          "id": "sarajevo",
          "sortDate": "1914-06-28",
          "date": "28 June 1914",
          "title": "Assassination in Sarajevo",
          "icon": "✢",
          "summary": "On 28 June 1914, Gavrilo Princip assassinated Archduke Franz Ferdinand and his wife Sophie in Sarajevo. The attack triggered a diplomatic crisis between Austria-Hungary and Serbia. Alliances, mobilisations and decisions by European governments then escalated that crisis into a wider war."
        },
        {
          "id": "war",
          "sortDate": "1914-07-28",
          "date": "28 July 1914",
          "title": "Austria-Hungary declares war",
          "icon": "⚑",
          "summary": "Austria-Hungary declares war on Serbia, beginning a chain of mobilisations and declarations."
        },
        {
          "id": "britain",
          "sortDate": "1914-08-04",
          "date": "4 August 1914",
          "title": "Britain enters the war",
          "icon": "✢",
          "summary": "Germany's invasion of Belgium contributes to Britain's decision to declare war."
        },
        {
          "id": "marne",
          "sortDate": "1914-09-06",
          "date": "September 1914",
          "title": "First Battle of the Marne",
          "icon": "⚔",
          "summary": "French and British forces help halt the German advance towards Paris."
        },
        {
          "id": "trenches",
          "sortDate": "1915-01-01",
          "date": "1914–1915",
          "title": "Trench warfare",
          "icon": "▤",
          "summary": "Entrenched front lines and artillery fighting come to dominate much of the Western Front."
        },
        {
          "id": "gallipoli",
          "sortDate": "1915-04-25",
          "date": "1915",
          "title": "Gallipoli campaign",
          "icon": "⚓",
          "summary": "Allied forces attempt to gain control of the Dardanelles and weaken the Ottoman Empire."
        },
        {
          "id": "verdun",
          "sortDate": "1916-02-21",
          "date": "February 1916",
          "title": "Battle of Verdun",
          "icon": "⚔",
          "summary": "A prolonged and devastating battle begins between French and German forces."
        },
        {
          "id": "somme",
          "sortDate": "1916-07-01",
          "date": "1 July 1916",
          "title": "Battle of the Somme",
          "icon": "⚔",
          "summary": "A major Allied offensive begins with especially severe British casualties on its first day."
        },
        {
          "id": "us",
          "sortDate": "1917-04-06",
          "date": "6 April 1917",
          "title": "United States enters",
          "icon": "★",
          "summary": "The United States enters the war against Germany."
        },
        {
          "id": "russia",
          "sortDate": "1917-11-07",
          "date": "1917",
          "title": "Russian Revolution",
          "icon": "✢",
          "summary": "Revolution and political upheaval help remove Russia from the conflict."
        },
        {
          "id": "offensive",
          "sortDate": "1918-03-21",
          "date": "March 1918",
          "title": "German spring offensive",
          "icon": "⚔",
          "summary": "German forces launch major offensives on the Western Front before Allied counterattacks."
        },
        {
          "id": "armistice",
          "sortDate": "1918-11-11",
          "date": "11 November 1918",
          "title": "Armistice",
          "icon": "✦",
          "summary": "An armistice ends fighting on the Western Front."
        },
        {
          "id": "versailles",
          "sortDate": "1919-06-28",
          "date": "28 June 1919",
          "title": "Treaty of Versailles",
          "icon": "▤",
          "summary": "The peace treaty with Germany is signed, leaving deep political and territorial consequences."
        }
      ],
      "branches": []
    }
  },
  "ww2": {
    "overview": {
      "label": "Global chronology",
      "caption": "The main developments of the Second World War, from invasion to surrender.",
      "source": "https://www.iwm.org.uk/",
      "events": [
        {
          "id": "poland",
          "sortDate": "1939-09-01",
          "date": "1 September 1939",
          "title": "Invasion of Poland",
          "icon": "⚔",
          "summary": "On 1 September 1939, Nazi Germany invaded Poland. The offensive followed years of territorial expansion and threats against neighbouring states, and was coordinated with the secret terms of the German-Soviet pact. Britain and France declared war on Germany two days later."
        },
        {
          "id": "britain",
          "sortDate": "1939-09-03",
          "date": "3 September 1939",
          "title": "Britain and France declare war",
          "icon": "⚑",
          "summary": "Britain and France declare war on Germany after its invasion of Poland."
        },
        {
          "id": "france",
          "sortDate": "1940-05-10",
          "date": "May–June 1940",
          "title": "Battle of France",
          "icon": "⚔",
          "summary": "German offensives defeat France and force a major Allied withdrawal."
        },
        {
          "id": "dunkirk",
          "sortDate": "1940-05-26",
          "date": "May–June 1940",
          "title": "Dunkirk evacuation",
          "icon": "⚓",
          "summary": "Hundreds of thousands of Allied troops are evacuated from northern France."
        },
        {
          "id": "britainbattle",
          "sortDate": "1940-07-10",
          "date": "Summer–autumn 1940",
          "title": "Battle of Britain",
          "icon": "✦",
          "summary": "The RAF resists a German air campaign intended to weaken British defences."
        },
        {
          "id": "barbarossa",
          "sortDate": "1941-06-22",
          "date": "22 June 1941",
          "title": "Operation Barbarossa",
          "icon": "⚔",
          "summary": "Germany launches its invasion of the Soviet Union."
        },
        {
          "id": "pearl",
          "sortDate": "1941-12-07",
          "date": "7 December 1941",
          "title": "Attack on Pearl Harbor",
          "icon": "⚓",
          "summary": "Japan attacks the US naval base, bringing the United States fully into the war."
        },
        {
          "id": "midway",
          "sortDate": "1942-06-04",
          "date": "June 1942",
          "title": "Battle of Midway",
          "icon": "⚓",
          "summary": "US naval forces win a major Pacific victory over Japan."
        },
        {
          "id": "elalamein",
          "sortDate": "1942-10-23",
          "date": "October–November 1942",
          "title": "Second Battle of El Alamein",
          "icon": "⚔",
          "summary": "British-led forces defeat Axis armies in Egypt."
        },
        {
          "id": "stalingrad",
          "sortDate": "1943-02-02",
          "date": "2 February 1943",
          "title": "Stalingrad surrender",
          "icon": "⚔",
          "summary": "The remaining German forces in Stalingrad surrender after months of fighting."
        },
        {
          "id": "italy",
          "sortDate": "1943-07-10",
          "date": "July 1943",
          "title": "Allied invasion of Sicily",
          "icon": "⚓",
          "summary": "Allied forces land in Sicily; Italy's fascist government soon collapses."
        },
        {
          "id": "dday",
          "sortDate": "1944-06-06",
          "date": "6 June 1944",
          "title": "D-Day landings",
          "icon": "⚓",
          "summary": "Allied armies land in Normandy to begin liberating Western Europe."
        },
        {
          "id": "holocaust",
          "sortDate": "1945-01-27",
          "date": "27 January 1945",
          "title": "Auschwitz liberated",
          "icon": "✢",
          "summary": "Soviet troops liberate Auschwitz; the Holocaust remains a central part of the war's history."
        },
        {
          "id": "ve",
          "sortDate": "1945-05-08",
          "date": "8 May 1945",
          "title": "Victory in Europe",
          "icon": "✦",
          "summary": "Germany's surrender brings the war in Europe to an end."
        },
        {
          "id": "hiroshima",
          "sortDate": "1945-08-06",
          "date": "6 August 1945",
          "title": "Atomic bombing of Hiroshima",
          "icon": "☄",
          "summary": "The United States drops an atomic bomb on Hiroshima, causing immense civilian deaths."
        },
        {
          "id": "nagasaki",
          "sortDate": "1945-08-09",
          "date": "9 August 1945",
          "title": "Atomic bombing of Nagasaki",
          "icon": "☄",
          "summary": "A second atomic bomb devastates Nagasaki."
        },
        {
          "id": "surrender",
          "sortDate": "1945-09-02",
          "date": "2 September 1945",
          "title": "Formal Japanese surrender",
          "icon": "✦",
          "summary": "Japan signs the instrument of surrender, formally ending the Second World War."
        }
      ],
      "branches": []
    },
    "pacific": {
      "label": "Pacific theatre",
      "caption": "Selected events across the Asia-Pacific war, including turning points and civilian consequences.",
      "source": "https://www.iwm.org.uk/",
      "events": [
        {
          "id": "china",
          "sortDate": "1937-07-07",
          "date": "1937",
          "title": "Full-scale war in China",
          "icon": "⚔",
          "summary": "Fighting between China and Japan escalates years before the European war begins."
        },
        {
          "id": "pearl",
          "sortDate": "1941-12-07",
          "date": "December 1941",
          "title": "Pearl Harbor",
          "icon": "⚓",
          "summary": "Japan attacks Pearl Harbor and simultaneously launches operations across the Pacific."
        },
        {
          "id": "singapore",
          "sortDate": "1942-02-15",
          "date": "February 1942",
          "title": "Fall of Singapore",
          "icon": "⚔",
          "summary": "British forces surrender Singapore to Japan."
        },
        {
          "id": "coral",
          "sortDate": "1942-05-04",
          "date": "May 1942",
          "title": "Battle of the Coral Sea",
          "icon": "⚓",
          "summary": "A carrier battle helps limit Japanese advances towards Port Moresby."
        },
        {
          "id": "midway",
          "sortDate": "1942-06-04",
          "date": "June 1942",
          "title": "Midway",
          "icon": "⚓",
          "summary": "US carrier aircraft deliver a decisive setback to Japan's carrier force."
        },
        {
          "id": "guadalcanal",
          "sortDate": "1942-08-07",
          "date": "1942–1943",
          "title": "Guadalcanal",
          "icon": "⚔",
          "summary": "A lengthy Allied land, air and sea campaign begins in the Solomon Islands."
        },
        {
          "id": "leyte",
          "sortDate": "1944-10-23",
          "date": "October 1944",
          "title": "Battle of Leyte Gulf",
          "icon": "⚓",
          "summary": "A huge naval battle accompanies the Allied return to the Philippines."
        },
        {
          "id": "iwojima",
          "sortDate": "1945-02-19",
          "date": "February 1945",
          "title": "Iwo Jima",
          "icon": "⚔",
          "summary": "US Marines attack a heavily fortified Japanese island."
        },
        {
          "id": "okinawa",
          "sortDate": "1945-04-01",
          "date": "April–June 1945",
          "title": "Okinawa",
          "icon": "⚔",
          "summary": "A devastating battle results in extensive military and civilian casualties."
        },
        {
          "id": "surrender",
          "sortDate": "1945-09-02",
          "date": "September 1945",
          "title": "Japanese surrender",
          "icon": "✦",
          "summary": "The formal surrender ceremony ends the war."
        }
      ],
      "branches": []
    }
  },
  "fallout": {
    "lore": {
      "label": "In-universe history",
      "caption": "Major canon events through the Great War and later wasteland stories.",
      "source": "https://fallout.bethesda.net/en-US/news/fallout25-presents-the-fallout-timeline",
      "events": [
        {
          "id": "diverge",
          "sortDate": "1950-01-01",
          "date": "20th-century divergence",
          "title": "Retro-futuristic world diverges",
          "icon": "⚙",
          "summary": "Fallout's world shares parts of real history but follows a speculative technological and political path."
        },
        {
          "id": "resources",
          "sortDate": "2052-01-01",
          "date": "2052",
          "title": "Resource Wars",
          "icon": "⚔",
          "summary": "International struggles over dwindling natural resources accelerate global conflict."
        },
        {
          "id": "anchorage",
          "sortDate": "2066-01-01",
          "date": "2066",
          "title": "Battle for Alaska",
          "icon": "✦",
          "summary": "China invades Alaska, leading to years of fighting on the Anchorage front."
        },
        {
          "id": "vaults",
          "sortDate": "2076-01-01",
          "date": "Before 2077",
          "title": "Vault-Tec prepares the Vaults",
          "icon": "◈",
          "summary": "Vault-Tec markets underground shelters, many of which conceal social experiments."
        },
        {
          "id": "greatwar",
          "sortDate": "2077-10-23",
          "date": "23 October 2077",
          "title": "The Great War",
          "icon": "☢",
          "summary": "On 23 October 2077, nuclear war devastates the United States and much of the wider world. The bombardment lasts only a short time, but its consequences define the wasteland for centuries. Many survivors take shelter in Vault-Tec vaults, some of which conceal experiments rather than straightforward public protection."
        },
        {
          "id": "vault76",
          "sortDate": "2102-10-23",
          "date": "2102",
          "title": "Vault 76 opens",
          "icon": "◆",
          "summary": "The residents of Vault 76 emerge in Appalachia, beginning the setting of Fallout 76."
        },
        {
          "id": "fo1",
          "sortDate": "2161-01-01",
          "date": "2161",
          "title": "The Vault Dweller",
          "icon": "◈",
          "summary": "Fallout's protagonist leaves Vault 13 in search of a replacement water chip."
        },
        {
          "id": "fo2",
          "sortDate": "2241-01-01",
          "date": "2241",
          "title": "The Chosen One",
          "icon": "✦",
          "summary": "A descendant of the Vault Dweller journeys from Arroyo to find a G.E.C.K."
        },
        {
          "id": "fo3",
          "sortDate": "2277-01-01",
          "date": "2277",
          "title": "The Lone Wanderer",
          "icon": "◈",
          "summary": "The player leaves Vault 101 in the Capital Wasteland to search for their father."
        },
        {
          "id": "fnv",
          "sortDate": "2281-01-01",
          "date": "2281",
          "title": "The Courier",
          "icon": "♠",
          "summary": "The Courier's story unfolds around New Vegas, with factions competing over Hoover Dam."
        },
        {
          "id": "fo4",
          "sortDate": "2287-01-01",
          "date": "2287",
          "title": "The Sole Survivor",
          "icon": "⚙",
          "summary": "A Vault 111 survivor awakens in the Commonwealth in search of their child."
        },
        {
          "id": "show",
          "sortDate": "2296-01-01",
          "date": "2296",
          "title": "The television series",
          "icon": "★",
          "summary": "The first season of the Fallout TV series unfolds in a later era of the wasteland."
        }
      ],
      "branches": []
    },
    "games": {
      "label": "Game releases",
      "caption": "The games in real-world release order; years shown here are publication dates, not in-universe dates.",
      "source": "https://fallout.bethesda.net/en-US/news/fallout25-presents-the-fallout-timeline",
      "events": [
        {
          "id": "fo1",
          "sortDate": "1997-09-30",
          "date": "1997",
          "title": "Fallout",
          "icon": "☢",
          "summary": "Interplay's original post-nuclear computer role-playing game introduces the Vault Dweller."
        },
        {
          "id": "fo2",
          "sortDate": "1998-10-29",
          "date": "1998",
          "title": "Fallout 2",
          "icon": "☢",
          "summary": "The sequel expands the wasteland and the story of Arroyo."
        },
        {
          "id": "tactics",
          "sortDate": "2001-03-15",
          "date": "2001",
          "title": "Fallout Tactics",
          "icon": "⚔",
          "summary": "A squad-tactics spin-off follows the Brotherhood of Steel in the Midwest."
        },
        {
          "id": "fo3",
          "sortDate": "2008-10-28",
          "date": "2008",
          "title": "Fallout 3",
          "icon": "◈",
          "summary": "Bethesda reimagines Fallout as a first/third-person open-world RPG."
        },
        {
          "id": "fnv",
          "sortDate": "2010-10-19",
          "date": "2010",
          "title": "Fallout: New Vegas",
          "icon": "♠",
          "summary": "Obsidian brings branching faction narratives to the Mojave."
        },
        {
          "id": "fo4",
          "sortDate": "2015-11-10",
          "date": "2015",
          "title": "Fallout 4",
          "icon": "⚙",
          "summary": "The Commonwealth arrives with settlement building and new crafting systems."
        },
        {
          "id": "fo76",
          "sortDate": "2018-11-14",
          "date": "2018",
          "title": "Fallout 76",
          "icon": "◆",
          "summary": "A multiplayer prequel set in Appalachia."
        },
        {
          "id": "tv",
          "sortDate": "2024-04-10",
          "date": "2024",
          "title": "Fallout on television",
          "icon": "★",
          "summary": "A live-action TV series expands the franchise's storytelling."
        }
      ],
      "branches": []
    }
  },
  "minecraft": {
    "overview": {
      "label": "Game & update history",
      "caption": "A highlights timeline combining major stages and shared updates across Minecraft editions.",
      "source": "https://www.minecraft.net/en-us/updates/minecraft-updates-timeline-and-evolution",
      "events": [
        {
          "id": "proto",
          "sortDate": "2009-05-17",
          "date": "May 2009",
          "title": "Minecraft Classic",
          "icon": "▣",
          "summary": "Early public builds establish the block-based sandbox concept."
        },
        {
          "id": "alpha",
          "sortDate": "2010-06-30",
          "date": "June 2010",
          "title": "Java Alpha",
          "icon": "⬛",
          "summary": "Survival systems expand as development continues in public."
        },
        {
          "id": "pocket",
          "sortDate": "2011-08-16",
          "date": "August 2011",
          "title": "Pocket Edition begins",
          "icon": "▣",
          "summary": "Minecraft reaches mobile devices with a distinct codebase and feature set."
        },
        {
          "id": "javafull",
          "sortDate": "2011-11-18",
          "date": "18 November 2011",
          "title": "Java full release",
          "icon": "◆",
          "summary": "After years of public Classic, Alpha and Beta builds, Minecraft officially launches its full Java Edition at MINECON in November 2011. The release formalises a game already shaped by an active creative community, with survival, building and exploration at its core. Later updates turn that foundation into an ever-evolving sandbox."
        },
        {
          "id": "redstone",
          "sortDate": "2013-03-13",
          "date": "2013",
          "title": "Redstone Update",
          "icon": "⚙",
          "summary": "New redstone components allow more elaborate circuits and automated creations."
        },
        {
          "id": "aquatic",
          "sortDate": "2018-07-18",
          "date": "2018",
          "title": "Update Aquatic",
          "icon": "≋",
          "summary": "Oceans gain new life, environments, structures and exploration features."
        },
        {
          "id": "nether",
          "sortDate": "2020-06-23",
          "date": "2020",
          "title": "Nether Update",
          "icon": "♨",
          "summary": "The Nether gains new biomes, mobs and netherite equipment."
        },
        {
          "id": "caves",
          "sortDate": "2021-11-30",
          "date": "2021",
          "title": "Caves & Cliffs Part II",
          "icon": "◆",
          "summary": "Terrain generation expands vertical height and cave complexity."
        },
        {
          "id": "wild",
          "sortDate": "2022-06-07",
          "date": "2022",
          "title": "The Wild Update",
          "icon": "♣",
          "summary": "The deep dark, mangrove swamps, wardens, frogs and allays arrive."
        },
        {
          "id": "trails",
          "sortDate": "2023-06-07",
          "date": "2023",
          "title": "Trails & Tales",
          "icon": "✿",
          "summary": "Archaeology, cherry groves, camels and the sniffer expand exploration."
        },
        {
          "id": "tricky",
          "sortDate": "2024-06-13",
          "date": "2024",
          "title": "Tricky Trials",
          "icon": "⚔",
          "summary": "Trial chambers, the breeze, the mace and auto-crafting arrive."
        },
        {
          "id": "tiny",
          "sortDate": "2026-03-24",
          "date": "March 2026",
          "title": "Tiny Takeover",
          "icon": "✿",
          "summary": "A game drop focuses on baby mobs and new related features."
        },
        {
          "id": "chaos",
          "sortDate": "2026-06-16",
          "date": "June 2026",
          "title": "Chaos Cubed",
          "icon": "◆",
          "summary": "Sulfur caves, new blocks and the physics-based sulfur cube arrive."
        },
        {
          "id": "wilderness",
          "sortDate": "2026-09-15",
          "date": "September 2026",
          "title": "Wilderness Bound",
          "icon": "♣",
          "summary": "The dappled forest, poplar trees and camping-themed blocks arrive."
        }
      ],
      "branches": []
    },
    "java": {
      "label": "Java Edition",
      "caption": "The PC edition's development from early prototypes through named game updates.",
      "source": "https://minecraft.wiki/w/Java_Edition_version_history",
      "events": [
        {
          "id": "classic",
          "sortDate": "2009-05-17",
          "date": "May 2009",
          "title": "Classic",
          "icon": "▣",
          "summary": "Early block placement, destruction and multiplayer foundations."
        },
        {
          "id": "indev",
          "sortDate": "2009-12-23",
          "date": "December 2009",
          "title": "Indev",
          "icon": "⚙",
          "summary": "Experimental survival and world mechanics are developed."
        },
        {
          "id": "infdev",
          "sortDate": "2010-02-27",
          "date": "February 2010",
          "title": "Infdev",
          "icon": "∞",
          "summary": "Infinite-world generation starts taking shape."
        },
        {
          "id": "alpha",
          "sortDate": "2010-06-30",
          "date": "June 2010",
          "title": "Alpha",
          "icon": "◆",
          "summary": "A paid and evolving survival sandbox."
        },
        {
          "id": "beta",
          "sortDate": "2010-12-20",
          "date": "December 2010",
          "title": "Beta",
          "icon": "◈",
          "summary": "The pre-release game gains important polish and new mechanics."
        },
        {
          "id": "one",
          "sortDate": "2011-11-18",
          "date": "November 2011",
          "title": "Java 1.0",
          "icon": "✦",
          "summary": "Minecraft officially leaves beta."
        },
        {
          "id": "redstone",
          "sortDate": "2013-03-13",
          "date": "2013",
          "title": "1.5 Redstone Update",
          "icon": "⚙",
          "summary": "Hoppers, comparators and other redstone systems arrive."
        },
        {
          "id": "combat",
          "sortDate": "2016-02-29",
          "date": "2016",
          "title": "1.9 Combat Update",
          "icon": "⚔",
          "summary": "Shields, off-hand items and new combat timing arrive."
        },
        {
          "id": "aquatic",
          "sortDate": "2018-07-18",
          "date": "2018",
          "title": "Update Aquatic",
          "icon": "≋",
          "summary": "Major ocean expansion and exploration updates."
        },
        {
          "id": "nether",
          "sortDate": "2020-06-23",
          "date": "2020",
          "title": "1.16 Nether Update",
          "icon": "♨",
          "summary": "New Nether biomes and netherite tools."
        },
        {
          "id": "caves",
          "sortDate": "2021-11-30",
          "date": "2021",
          "title": "1.18 Caves & Cliffs II",
          "icon": "◆",
          "summary": "Major height and cave changes."
        },
        {
          "id": "tricky",
          "sortDate": "2024-06-13",
          "date": "2024",
          "title": "1.21 Tricky Trials",
          "icon": "⚔",
          "summary": "Trial chambers and auto-crafting."
        },
        {
          "id": "tiny",
          "sortDate": "2026-03-24",
          "date": "March 2026",
          "title": "26.1 Tiny Takeover",
          "icon": "✿",
          "summary": "New baby mob variants and related features."
        },
        {
          "id": "chaos",
          "sortDate": "2026-06-16",
          "date": "June 2026",
          "title": "26.2 Chaos Cubed",
          "icon": "◆",
          "summary": "Sulfur and cinnabar cave features."
        },
        {
          "id": "wilderness",
          "sortDate": "2026-09-15",
          "date": "September 2026",
          "title": "26.3 Wilderness Bound",
          "icon": "♣",
          "summary": "Dappled forests and campsite additions."
        }
      ],
      "branches": []
    },
    "bedrock": {
      "label": "Bedrock Edition",
      "caption": "The cross-platform C++ edition and its shared releases, descended from Pocket Edition.",
      "source": "https://minecraft.wiki/w/Bedrock_Edition_version_history",
      "events": [
        {
          "id": "pocket",
          "sortDate": "2011-08-16",
          "date": "2011",
          "title": "Pocket Edition alpha",
          "icon": "▣",
          "summary": "The foundation of modern Bedrock first appears on mobile."
        },
        {
          "id": "pefull",
          "sortDate": "2016-12-19",
          "date": "2016",
          "title": "Pocket Edition 1.0",
          "icon": "✦",
          "summary": "The End arrives in mobile's full 1.0 release."
        },
        {
          "id": "better",
          "sortDate": "2017-09-20",
          "date": "2017",
          "title": "Better Together",
          "icon": "∞",
          "summary": "Bedrock unites multiple device families and introduces broad cross-platform play."
        },
        {
          "id": "aquatic",
          "sortDate": "2018-07-10",
          "date": "2018",
          "title": "Update Aquatic",
          "icon": "≋",
          "summary": "Ocean expansion reaches Bedrock."
        },
        {
          "id": "nether",
          "sortDate": "2020-06-23",
          "date": "2020",
          "title": "Nether Update",
          "icon": "♨",
          "summary": "Nether overhaul arrives on Bedrock."
        },
        {
          "id": "caves",
          "sortDate": "2021-11-30",
          "date": "2021",
          "title": "Caves & Cliffs II",
          "icon": "◆",
          "summary": "Expanded heights and new terrain generation."
        },
        {
          "id": "wild",
          "sortDate": "2022-06-07",
          "date": "2022",
          "title": "The Wild Update",
          "icon": "♣",
          "summary": "Deep dark and mangrove swamps."
        },
        {
          "id": "trails",
          "sortDate": "2023-06-07",
          "date": "2023",
          "title": "Trails & Tales",
          "icon": "✿",
          "summary": "Archaeology and new mobs arrive."
        },
        {
          "id": "tricky",
          "sortDate": "2024-06-13",
          "date": "2024",
          "title": "1.21 Tricky Trials",
          "icon": "⚔",
          "summary": "Trial chambers and the mace launch across editions."
        },
        {
          "id": "visuals",
          "sortDate": "2025-06-17",
          "date": "2025",
          "title": "Vibrant Visuals",
          "icon": "✧",
          "summary": "A graphics refresh launches first on Bedrock."
        },
        {
          "id": "wilderness",
          "sortDate": "2026-09-15",
          "date": "2026",
          "title": "26.50 Wilderness Bound",
          "icon": "♣",
          "summary": "Poplar trees and abandoned camps are added."
        }
      ],
      "branches": []
    },
    "mobile": {
      "label": "Pocket & mobile",
      "caption": "Minecraft's path on phones and tablets from Pocket Edition into modern Bedrock.",
      "source": "https://minecraft.wiki/w/Bedrock_Edition_version_history",
      "events": [
        {
          "id": "early",
          "sortDate": "2011-08-16",
          "date": "2011",
          "title": "Pocket Edition Alpha",
          "icon": "▣",
          "summary": "Early touch-screen builds introduce Minecraft on portable devices."
        },
        {
          "id": "survival",
          "sortDate": "2012-02-11",
          "date": "2012",
          "title": "Mobile survival features",
          "icon": "♠",
          "summary": "Updates add survival play, crafting and a growing library of blocks."
        },
        {
          "id": "infinite",
          "sortDate": "2014-07-10",
          "date": "2014",
          "title": "Pocket 0.9.0",
          "icon": "∞",
          "summary": "Infinite worlds become possible on supported devices."
        },
        {
          "id": "nether",
          "sortDate": "2015-09-08",
          "date": "2015",
          "title": "Pocket 0.12.1",
          "icon": "♨",
          "summary": "The Nether and related features come to mobile."
        },
        {
          "id": "end",
          "sortDate": "2016-12-19",
          "date": "2016",
          "title": "Pocket 1.0",
          "icon": "✦",
          "summary": "The End and the Ender Dragon reach the mobile game."
        },
        {
          "id": "bedrock",
          "sortDate": "2017-09-20",
          "date": "2017",
          "title": "Pocket becomes Bedrock",
          "icon": "◆",
          "summary": "Mobile joins the cross-platform Bedrock family."
        },
        {
          "id": "aquatic",
          "sortDate": "2018-07-10",
          "date": "2018",
          "title": "Update Aquatic",
          "icon": "≋",
          "summary": "Oceans expand across mobile devices."
        },
        {
          "id": "caves",
          "sortDate": "2021-11-30",
          "date": "2021",
          "title": "Caves & Cliffs",
          "icon": "◆",
          "summary": "Modern world generation transforms mobile landscapes."
        },
        {
          "id": "tricky",
          "sortDate": "2024-06-13",
          "date": "2024",
          "title": "Tricky Trials",
          "icon": "⚔",
          "summary": "A major modern update arrives across Bedrock and Java."
        },
        {
          "id": "vibrant",
          "sortDate": "2025-06-17",
          "date": "2025",
          "title": "Vibrant Visuals",
          "icon": "✧",
          "summary": "Enhanced visual effects become available on supported Bedrock devices."
        },
        {
          "id": "wilderness",
          "sortDate": "2026-09-15",
          "date": "2026",
          "title": "Wilderness Bound",
          "icon": "♣",
          "summary": "The modern game-drop cadence continues on phones."
        }
      ],
      "branches": []
    }
  },
  "resident-evil": {
    "story": {
      "label": "In-universe outbreaks",
      "caption": "Key Resident Evil game-continuity incidents, with emphasis on the spread of biohazards.",
      "source": "https://game.capcom.com/residentevil/en/news-1834.html",
      "events": [
        {
          "id": "umbrella",
          "sortDate": "1968-01-01",
          "date": "1968",
          "title": "Umbrella is founded",
          "icon": "◈",
          "summary": "Umbrella Pharmaceutical becomes a central organisation behind the franchise's bio-organic weapons research."
        },
        {
          "id": "ecliptic",
          "sortDate": "1998-07-23",
          "date": "23 July 1998",
          "title": "Ecliptic Express incident",
          "icon": "⚗",
          "summary": "Rebecca Chambers and Billy Coen confront mutant creatures and secrets surrounding Umbrella."
        },
        {
          "id": "mansion",
          "sortDate": "1998-07-24",
          "date": "24 July 1998",
          "title": "Spencer Mansion incident",
          "icon": "⌂",
          "summary": "S.T.A.R.S. investigates bizarre killings in the Arklay Mountains and discovers a secret Umbrella laboratory."
        },
        {
          "id": "outbreak",
          "sortDate": "1998-09-23",
          "date": "September 1998",
          "title": "Raccoon City outbreak",
          "icon": "☣",
          "summary": "During September 1998, a viral outbreak overwhelms Raccoon City and its emergency services. Ordinary residents, police officers and visiting survivors face infected creatures while evidence points towards Umbrella's biological-weapons research. Several Resident Evil games depict overlapping parts of the crisis from different perspectives."
        },
        {
          "id": "nemesis",
          "sortDate": "1998-09-28",
          "date": "28 September 1998",
          "title": "Jill and Nemesis",
          "icon": "☣",
          "summary": "Jill Valentine attempts to escape Raccoon City while Nemesis hunts surviving S.T.A.R.S. members."
        },
        {
          "id": "leon",
          "sortDate": "1998-09-29",
          "date": "29 September 1998",
          "title": "Leon and Claire arrive",
          "icon": "◆",
          "summary": "Leon Kennedy and Claire Redfield enter a city devastated by the t-virus."
        },
        {
          "id": "destroyed",
          "sortDate": "1998-10-01",
          "date": "1 October 1998",
          "title": "Raccoon City destroyed",
          "icon": "☄",
          "summary": "The US government destroys the city in an attempt to contain the biohazard."
        },
        {
          "id": "veronica",
          "sortDate": "1998-12-01",
          "date": "December 1998",
          "title": "Code: Veronica",
          "icon": "✢",
          "summary": "Claire's search for Chris leads to Rockfort Island and the Antarctic research base."
        },
        {
          "id": "umbrellaend",
          "sortDate": "2003-01-01",
          "date": "2003",
          "title": "Umbrella's downfall",
          "icon": "⌁",
          "summary": "The organisation's collapse does not end the use of biological weapons."
        },
        {
          "id": "re4",
          "sortDate": "2004-10-01",
          "date": "Autumn 2004",
          "title": "Los Illuminados incident",
          "icon": "☣",
          "summary": "Leon investigates the abduction of the US president's daughter in rural Europe."
        },
        {
          "id": "rev",
          "sortDate": "2005-01-01",
          "date": "2005",
          "title": "Terragrigia and Revelations",
          "icon": "⚓",
          "summary": "Jill and Chris investigate bioterrorism connected with the Queen Zenobia."
        },
        {
          "id": "re5",
          "sortDate": "2009-01-01",
          "date": "2009",
          "title": "Kijuju incident",
          "icon": "☣",
          "summary": "Chris Redfield and Sheva Alomar confront new bioweapon threats in Africa."
        },
        {
          "id": "re6",
          "sortDate": "2012-01-01",
          "date": "2012–2013",
          "title": "Global bioterror attacks",
          "icon": "⚔",
          "summary": "Several connected campaigns depict major outbreaks and the struggle against international bioterrorism."
        },
        {
          "id": "re7",
          "sortDate": "2017-01-01",
          "date": "2017",
          "title": "Baker estate",
          "icon": "⌂",
          "summary": "Ethan Winters investigates a disappearance in Louisiana and encounters a new infection."
        },
        {
          "id": "village",
          "sortDate": "2021-01-01",
          "date": "2021",
          "title": "Village incident",
          "icon": "☣",
          "summary": "Ethan searches for his daughter amid a remote European settlement controlled by dangerous figures."
        }
      ],
      "branches": []
    },
    "raccoon": {
      "label": "Raccoon City · 1998",
      "caption": "A detailed look at the pivotal outbreak and overlapping stories in the summer and autumn of 1998.",
      "source": "https://game.capcom.com/residentevil/en/news-1834.html",
      "events": [
        {
          "id": "ecliptic",
          "sortDate": "1998-07-23",
          "date": "23 July 1998",
          "title": "Ecliptic Express incident",
          "icon": "⚗",
          "summary": "Rebecca Chambers and Billy Coen confront mutant creatures and secrets surrounding Umbrella."
        },
        {
          "id": "mansion",
          "sortDate": "1998-07-24",
          "date": "24 July 1998",
          "title": "Spencer Mansion incident",
          "icon": "⌂",
          "summary": "S.T.A.R.S. investigates bizarre killings in the Arklay Mountains and discovers a secret Umbrella laboratory."
        },
        {
          "id": "outbreak",
          "sortDate": "1998-09-23",
          "date": "September 1998",
          "title": "Raccoon City outbreak",
          "icon": "☣",
          "summary": "The t-virus spreads throughout the city, overwhelming hospitals, police and emergency systems."
        },
        {
          "id": "nemesis",
          "sortDate": "1998-09-28",
          "date": "28 September 1998",
          "title": "Jill and Nemesis",
          "icon": "☣",
          "summary": "Jill Valentine attempts to escape Raccoon City while Nemesis hunts surviving S.T.A.R.S. members."
        },
        {
          "id": "leon",
          "sortDate": "1998-09-29",
          "date": "29 September 1998",
          "title": "Leon and Claire arrive",
          "icon": "◆",
          "summary": "Leon Kennedy and Claire Redfield enter a city devastated by the t-virus."
        },
        {
          "id": "survivors",
          "sortDate": "1998-09-30",
          "date": "Late September 1998",
          "title": "Everyday survivors",
          "icon": "◉",
          "summary": "Resident Evil Outbreak depicts residents fighting to escape infected Raccoon City."
        },
        {
          "id": "destroyed",
          "sortDate": "1998-10-01",
          "date": "1 October 1998",
          "title": "Raccoon City destroyed",
          "icon": "☄",
          "summary": "The US government destroys the city in an attempt to contain the biohazard."
        },
        {
          "id": "aftermath",
          "sortDate": "1998-10-02",
          "date": "October 1998",
          "title": "Aftermath",
          "icon": "☄",
          "summary": "The destruction of Raccoon City leaves survivors and unanswered questions about Umbrella."
        },
        {
          "id": "veronica",
          "sortDate": "1998-12-01",
          "date": "December 1998",
          "title": "Code: Veronica",
          "icon": "✢",
          "summary": "Claire's search for Chris leads to Rockfort Island and the Antarctic research base."
        }
      ],
      "branches": []
    }
  }
};
