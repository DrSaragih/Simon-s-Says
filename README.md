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

The four toy illustrations are original inline SVG assets in `src/main.jsx`. The original workshop illustration is at `public/assets/toy-factory.png`; the Christmas and New Year edition uses `public/assets/holiday-factory.png` in the banner and game guide. No account, API key, backend, or external game asset service is required. Google Fonts are optional; system fonts provide a fallback.

## Validation

Production build and a browser smoke check cover correct sequences across two rounds, incorrect input, reset, pace selection, the guide, score persistence, and mobile overflow.

## Factory shifts and soundtrack

An original synthesized music-box waltz starts on the first play gesture. The Music button controls the background soundtrack separately from toy sound effects. Music softens during pattern playback and pauses while the browser tab is hidden. No music files or external audio services are required.

Every 3 rounds begins a new shift with faster playback. Classic introduces a per-response time limit at round 4; Turbo is timed from round 1. From round 7, every third round (7, 10, 13, …) requires the pattern in reverse order, indicated by the order badge and instructions. Each correct input refreshes the response timer; timeout ends the run. The soundtrack is in `src/music.js`.

Additional browser validation covers seven consecutive rounds, reverse input, timed failure, music toggling, and mobile overflow.

## Christmas & New Year edition

The holiday workshop includes an original snowy factory illustration, evergreen and cranberry machine colors, festive string lights, Santa-hat robot, scarf-wearing duck, gift ribbon, and peppermint rocket details.

Background music and toy effects now have higher output gain. The master Volume slider controls both from 0–100% (default 85%) and persists across reloads. Music also has its own on/off button; the speaker button controls toy effects. A dynamics compressor on the music bus manages overlapping notes. The holiday arrangement adds high bell accents; playback still softens while the pattern is demonstrated.

Browser checks verify increased music/effect gain, volume at zero and maximum, saved volume, holiday image loading, responsive layout, and the seven-round challenge flow. Physical laptop speaker loudness varies; it was not measured on the user's device.

## Round review and brighter signals

A failed round now opens a workshop quality-check popup. It shows the reached round, completed rounds, full expected input order, actual button presses, correct steps, and the failed step. Reverse rounds are displayed in their required reversed order. Timeouts identify the next missing toy. Dismiss with Escape or the close button, reopen with “View sequence & round review”, or start a fresh game with Try again. Keyboard input stays within the modal and Tab cycles through its controls.

During sequence playback, inactive pads dim while the active toy receives a bright cream spotlight, golden outline and glow, enlarged toy, and a star marker. These are steady highlights rather than strobe effects. The original Pip & Bolt workshop-inspector illustration is stored in `public/assets/workshop-inspector.png` and appears on the board and in the round review. Toy SVG filters use unique IDs so repeated illustrations in the review remain independent.

Browser validation covers reverse-round failure, expected versus entered history, failed-step markers, timeout review, retry cleanup, modal keyboard handling, mobile width, new asset loading, and brighter pad styles.

## Paused phase instructions

Before new shifts (rounds 4, 7, 10, …), a modal explains the upcoming rules. Reverse rounds explicitly explain last-to-first input with a separate illustrative example. The next forward round (8, 11, …) announces the return to normal order. Turbo also explains its timer before round 1.

Instruction modals impose a 3-second minimum reading pause and then wait indefinitely for “Saya mengerti, mulai”. Neither pattern playback nor the response timer starts while instructions are open. Clicking outside or pressing Escape does not silently start the game; “Akhiri sesi” resets it. Keyboard focus stays within the modal. Examples are clearly labeled as examples, not the current round's sequence.

Browser validation completes 10 rounds, checks the briefings at rounds 4/7/8/10 and Turbo startup, verifies 30 seconds without gameplay during each briefing, and checks mobile width and exit/reset behavior.
