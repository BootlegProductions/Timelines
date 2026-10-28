# Timelines

**Timelines** is a visual chronology explorer for film franchises, historical subjects, games and more.

This repository is the first interactive prototype, inspired by the original concept sketch.

## Preview

Open \`index.html\` in a browser. No installation, backend, paid API or build step is needed.

For a hosted version, enable **GitHub Pages** under **Settings → Pages**, choose **Deploy from a branch**, and select \`main\` / \`/(root)\`. Depending on your GitHub plan, public visibility may be required for Pages on a private repository.

## What's included

- Landing page with an animated hourglass and growing timeline.
- Collection cards and search / category filters.
- Marvel release timeline, fictional chronology, and studio-history timeline.
- Related branches, including X-Men and Spider-Man series.
- Selectable nodes and event detail panels.
- Horizontal desktop and vertical mobile timeline layouts; manual layout override.
- Simple JavaScript content catalogue.

## Editing content

Open \`data.js\` to add new collections, modes, events, and branches. A main event has \`id\`, \`date\`, \`title\`, \`icon\`, and \`summary\`. A branch adds \`anchor\` (the index of its main-line junction), \`side\` and \`label\`.

The icons and circle gradients are temporary graphic placeholders. Replace them with original artwork as assets are supplied.

## Files

- \`index.html\` — HTML entry point
- \`styles.css\` — responsive layout and visual styling
- \`data.js\` — collections and event content
- \`app.js\` — navigation, scrollable timeline and interactive controls

### Notes

The first Marvel events are illustrative, not a complete canon or definitive chronology. Entries should be reviewed and linked to reliable sources before expanding into a public reference website. Timelines is an independent fan-oriented prototype and not affiliated with Marvel.

© 2026 Timelines prototype.

## v0.3 release-map connections

The film-release view currently lists Marvel Studios MCU films through 2026 and examples from the Fox X-Men and Sony Spider-Man-related film catalogues. The axis orders individual releases rather than placing every film from a year on top of another. Branches support `rejoins: [{fromId, toId, label, description}]` to mark identifiable crossover films. The crossing line describes a link between film continuities, not a claim that their histories or canons merge completely.

Release-order reference: https://editorial.rottentomatoes.com/guide/marvel-movie-release-timeline/ and https://www.thewrap.com/x-men-movies-in-chronological-order-how-to-watch/

## Version 0.4 — Marvel content, red theme & maintained base template

- Marvel timeline pages receive a distinct red visual palette; the Timelines homepage keeps its original green theme.
- Release history now includes selected Marvel Studios and Marvel Television series, plus **Avengers: Doomsday** (planned 16 December 2026 in the UK, 18 December in the US).
- **All / Films / Series** filters help readers navigate the expanded release history. The other two views retain their own independent chronology.
- The in-universe view uses `sortDate` for **editorial story order**; labels may use approximate years or "outside linear time" instead of pretending every event can be given an exact date.
- Studio history now covers comics, cinema, television, ownership and rights milestones.
- Where available, events support a `source` URL, shown in the detail panel. Upcoming entries can use `status: "upcoming"`.
- **`template.html`** is an intentionally unlinked, functional **green base template** with its own sample events in `template-data.js`. Open it directly, or open `template.html#/marvel/release` for the working example timeline.
- Crucially, the template **shares `app.js` and `styles.css`** with the main website. Keep generic UI and timeline updates in those files so the template improves whenever the timeline engine does; isolate Marvel-specific colour changes under `.theme-marvel`.

### Research and dates

Release dates vary by territory. The Doomsday timeline entry shows the official UK and US dates instead of mixing them up. Historical facts and approximate fictional ordering should be independently checked before treating Timelines as a comprehensive reference. Starting points:

- https://www.disneyplus.com/en-gb/explore/articles/avengers-doomsday
- https://www.marvel.com/tv-shows/
- https://www.marvel.com/articles/tv-shows/marvel-television-visionquest-release-date?pubDate=20260513
- https://www.disneyplus.com/en-gb/explore/articles/daredevil-born-again-season-2
- https://thewaltdisneycompany.com/press-releases/disney-completes-marvel-acquisition/
- https://thewaltdisneycompany.com/press-releases/disney-21st-century-fox-acquisition-closing-date/

## Version 0.5 — History, Games and immersive mobile viewing

The website now includes eight subjects, each with one or more timeline views:

- **Marvel** — film/series releases, fictional chronology and studio history
- **The Universe** — cosmic evolution and the history of Earth and life
- **Dinosaurs & Prehistory** — the Triassic/Jurassic/Cretaceous eras and dinosaur evolution
- **World War I** — major events from 1914 through the peace negotiations
- **World War II** — global chronology and a separate Pacific theatre view
- **Fallout** — fictional events and real-world game-release chronology
- **Minecraft** — overview, Java Edition, Bedrock Edition, and Pocket/Mobile Edition development
- **Resident Evil** — outbreak/character chronology and a focused Raccoon City 1998 view

### How navigation works

Browse at `#/collections`, choose `#/category/History` or `#/category/Games`, or use `#/collection/fallout` to enter a subject. Open an individual view using `#/t/<slug>/<view>` (for example, `#/t/minecraft/java`).

Legacy `#/marvel/release` URLs remain supported.

### Full-screen timeline

On a touchscreen, **double-tap the negative space** inside the timeline canvas to expand it to a full-viewport overlay. A visible **Expand** button offers the same result. Use **Close**, the same button or Escape to exit. Touch-dragging, arrow navigation and event details work inside this mode. Horizontal remains the automatic layout on mobile and desktop, with vertical available as a manual override.

### Artwork and future assets

Temporary original symbolic SVG artwork lives in `assets/`. The shared event renderer selects a pictogram by collection/character. Future user-supplied assets can be assigned per event using `image: "assets/your-file.webp"` in its data entry. Avoid copying copyrighted promotional art without appropriate rights. The green `template.html` uses exactly the same shared JavaScript and CSS and continues to receive generic improvements.

### Editorial notes

The world-history, game-lore and entertainment timelines are starter editorial selections rather than exhaustive databases. Prehistoric and cosmic ages are approximate and **node spacing is not proportional to elapsed time**. Fictional chronologies can contain branching canon and ambiguities. Before expanding into a reference encyclopaedia, review each entry and add event-level primary or authoritative citations.

Useful starting sources:

- https://science.nasa.gov/universe/overview/
- https://www.nps.gov/subjects/geology/time-scale.htm
- https://www.iwm.org.uk/
- https://fallout.bethesda.net/en-US/news/fallout25-presents-the-fallout-timeline
- https://www.minecraft.net/en-us/updates/minecraft-updates-timeline-and-evolution
- https://game.capcom.com/residentevil/en/
