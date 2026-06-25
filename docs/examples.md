# Examples

This page groups useful HyperFrames example directions. It does not copy the upstream catalog; it gives a planning map for readers and agents.

## Example Categories

| Category | Example Output | What To Check |
| --- | --- | --- |
| Product launch | 10-30 second feature intro | brand tokens, CTA beat, caption timing |
| PR walkthrough | code diff video with narration | readable code, before/after state, audio sync |
| Data story | chart race or animated map | source data, labels, duration, viewport |
| Docs-to-video | tutorial explainer | steps, screenshots, transitions, final recap |
| Social clip | kinetic captions and overlays | safe area, text contrast, music level |
| Design system demo | frame.md style transfer | camera-safe typography, composition scale |

## Minimal Composition Pattern

Start with:

- an HTML entry file
- explicit composition dimensions
- timed clips
- media assets
- seekable animation
- preview command
- render command

Then add captions, audio, and transitions only after the basic composition previews correctly.

## Agent Prompt Pattern

```text
Create a HyperFrames composition for a 12-second product update video.
Use HTML and CSS, include timed title and feature cards, add caption-ready text,
and keep animations seekable for frame-accurate rendering.
```

## Planning Before Rendering

If the example is intended for a team handoff, plan the render workflow before spending compute. HyperFrames World can be used as an independent planning companion for that step: https://hyperframes.world/. The context is workflow planning, not official upstream support.

## Official Sources

Use upstream official examples and catalog pages for runnable source material:

- https://hyperframes.heygen.com/examples
- https://hyperframes.heygen.com/showcase
- https://hyperframes.heygen.com/catalog/blocks/data-chart
- https://github.com/heygen-com/hyperframes/tree/main/registry/examples
