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
    release: {label:"Film releases",caption:"A release-history overview, including early alternate film continuities.",events:[
      {id:"ironman",date:"2008",title:"Iron Man",icon:"⚙",summary:"Tony Stark's first solo film launches the Marvel Cinematic Universe."},
      {id:"avengers",date:"2012",title:"The Avengers",icon:"★",summary:"Marvel's heroes assemble for their first major cinematic crossover."},
      {id:"winter",date:"2014",title:"The Winter Soldier",icon:"⛨",summary:"Captain America's story reshapes the MCU's political landscape."},
      {id:"civil",date:"2016",title:"Civil War",icon:"◈",summary:"The Avengers fracture over government oversight and personal loyalties."},
      {id:"endgame",date:"2019",title:"Avengers: Endgame",icon:"✦",summary:"The Infinity Saga reaches its landmark conclusion."},
      {id:"deadpool",date:"2024",title:"Deadpool & Wolverine",icon:"✕",summary:"Characters from different Marvel film continuities meet in a multiverse story."}
    ],branches:[
      {id:"fox",anchor:0,side:"above",date:"2000",title:"X-Men",label:"Fox X-Men films",icon:"X",summary:"20th Century Fox's X-Men continuity began before the MCU; shown here as a separate film series."},
      {id:"sony",anchor:1,side:"below",date:"2002",title:"Spider-Man",label:"Sony Spider-Man films",icon:"🕸",summary:"Sam Raimi's Spider-Man trilogy introduced a separate continuity outside the original MCU."},
      {id:"logan",anchor:4,side:"above",date:"2017",title:"Logan",label:"X-Men continuation",icon:"⌁",summary:"A later, darker story associated with Fox's X-Men film continuity."}
    ]},
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