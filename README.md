# Toybox Works

An original toy factory themed sequence memory game built with React 19 and Vite 6.

## Development

Requires Node.js 22+ and npm. Use the existing checkout; no worktree is needed.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

Vite listens on port 5173. Build with `npm run build`, or serve the production build with `npm run preview`.

## Play

Start the machine, watch the toy sequence, and repeat it by clicking toys or pressing 1–4. Each completed round adds a toy. Classic offers a slower pace; Turbo speeds up playback. Space starts a new run. The best completed round is stored locally in the browser. Audio is generated with the Web Audio API and can be muted.

The four toy illustrations are original inline SVG assets in `src/main.jsx`. The original generated workshop illustration is at `public/assets/toy-factory.png` and appears in the game guide. No account, API key, backend, or external game asset service is required. Google Fonts are optional; system fonts provide a fallback.

## Validation

Production build and a browser smoke check cover correct sequences across two rounds, incorrect input, reset, pace selection, the guide, score persistence, and mobile overflow.

## Factory shifts and soundtrack

An original synthesized music-box waltz starts on the first play gesture. The Music button controls the background soundtrack separately from toy sound effects. Music softens during pattern playback and pauses while the browser tab is hidden. No music files or external audio services are required.

Every 3 rounds begins a new shift with faster playback. Classic introduces a per-response time limit at round 4; Turbo is timed from round 1. From round 7, every third round (7, 10, 13, …) requires the pattern in reverse order, indicated by the order badge and instructions. Each correct input refreshes the response timer; timeout ends the run. The soundtrack is in `src/music.js`.

Additional browser validation covers seven consecutive rounds, reverse input, timed failure, music toggling, and mobile overflow.
