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
