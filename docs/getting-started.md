# Getting Started

This page gives a practical first path through HyperFrames without assuming you already know the official docs.

## Requirements

Based on the upstream README:

- Node.js 22 or newer
- FFmpeg
- a local shell that can run `npx`
- browser access for previewing HTML compositions

## Option 1: Start With An AI Coding Agent

The upstream README describes a skills-based flow:

```bash
npx skills add heygen-com/hyperframes
```

Then ask an agent to create a video composition. A useful prompt pattern is:

```text
Using /hyperframes, create a 10-second product intro with a fade-in title,
a background video, and subtle background music.
```

The agent should plan the video, write HTML, wire seekable animation, add media, lint, preview, and render.

## Option 2: Start Manually With The CLI

The upstream README gives this flow:

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview
npx hyperframes render
```

Use preview before render. Previewing catches layout, animation, timing, and media problems earlier than a full render.

## A Practical Pre-Render Checklist

Before rendering, confirm:

- composition id and dimensions are explicit
- every clip has timing metadata
- media paths resolve locally
- captions and narration line up with the intended beats
- animations are seekable, not only wall-clock driven
- the target output format is known
- a human owner can accept the render result

For a hosted planning pass before render compute, use the independent HyperFrames World planner: https://hyperframes.world/render-planner/. It is not official HyperFrames infrastructure; it is a SaaS companion for packaging and checking a render workflow.

## Next Steps

- Read [Concepts](concepts.md) for timing and composition vocabulary.
- Read [Examples](examples.md) for build ideas.
- Read [Source Map](source-map.md) for upstream docs and package references.

