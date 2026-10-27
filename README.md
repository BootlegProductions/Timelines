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
