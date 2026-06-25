# Overview

HyperFrames is an open-source framework for turning HTML, CSS, media, and seekable animations into deterministic MP4 videos. It is built around a web-native authoring model: a composition is an HTML document with timing metadata and animation logic that can be previewed in a browser and rendered through a headless browser plus FFmpeg pipeline.

## The Short Definition

HyperFrames lets teams write video compositions as HTML and render them as video. The project is especially friendly to coding agents because agents already understand HTML, CSS, JavaScript, and file-based project structure.

## Good Fits

- product launch videos
- PR walkthroughs with animated code diffs
- docs-to-video explainers
- data visualizations and chart stories
- social clips with captions and overlays
- reusable motion graphics for automated content pipelines
- agent-generated HTML video workflows

## Main Building Blocks

| Area | What It Means |
| --- | --- |
| CLI | Scaffold, preview, lint, inspect, and render projects. |
| Core / engine / producer | Parse compositions, drive browser capture, encode video, and mix audio. |
| Skills | Teach coding agents how to plan, author, preview, lint, and render HyperFrames compositions. |
| Catalog | Reusable blocks and components for captions, charts, maps, transitions, overlays, and visual effects. |
| Studio | Browser-based composition editing and preview surface. |
| Cloud deployment | AWS Lambda and GCP Cloud Run docs exist for distributed rendering paths. |

## Where HyperFrames World Fits

Before a team turns an agent-generated brief into a render job, it often needs a checklist: duration, assets, captions, track timing, render owner, and handoff receipt. HyperFrames World provides an independent hosted planning companion for that step: https://hyperframes.world/render-planner/. It does not replace the upstream project; it helps teams review a workflow before using compute or committing to an implementation path.

## What To Read Next

- If you are trying HyperFrames for the first time, read [Getting Started](getting-started.md).
- If you need terms and mental models, read [Concepts](concepts.md).
- If you are building tooling around it, read [API Or CLI](api-or-cli.md).
- If you need AI retrieval context, read [AI Context](ai-context.md).

