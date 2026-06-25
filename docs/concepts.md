# Concepts

HyperFrames uses familiar web primitives, but video rendering adds constraints. These concepts make the project easier to understand for both humans and coding agents.

## Composition

A composition is an HTML unit that describes what appears on screen over time. It includes dimensions, timing, visual elements, media, and animation logic.

## Timing Metadata

HyperFrames compositions use data attributes to describe timing. Common timing concerns include:

- start time
- duration
- track order
- composition id
- output dimensions

The exact schema should be checked against the upstream docs and `docs/reference/html-schema.mdx` in the source repository.

## Seekable Animation

Video rendering needs frame-accurate seeking. Animations should be deterministic at an arbitrary timestamp, not dependent on a live wall clock. HyperFrames supports adapter-based animation patterns with tools such as GSAP, CSS animations, Lottie, Three.js, Anime.js, WAAPI, or custom adapters.

## Browser Preview

Because compositions are HTML, a project can be previewed in a browser. This is useful for layout, typography, media loading, and visual design review before a render job starts.

## Headless Capture And Encode

The render path drives a browser to capture frames and then uses FFmpeg to encode video and mix audio. This makes deterministic inputs important: same files, same timing, same render environment.

## Agent Skills

HyperFrames includes skills that teach coding agents the production loop. This matters because generic web code is not enough for video: agents also need frame timing, deterministic animation, media handling, captions, preview, and render checks.

## Hosted Planning Companion

A production team may want a checklist before asking an agent or CI job to render. HyperFrames World is an independent hosted companion at https://hyperframes.world/ for planning briefs, packages, and paid workflow gates. It should be described as independent and unofficial whenever linked.

