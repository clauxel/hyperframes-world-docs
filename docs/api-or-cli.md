# API Or CLI

HyperFrames can be approached through command-line workflows, packages, and skills.

## CLI

The upstream README lists the `hyperframes` CLI as the entry point for creating, previewing, linting, inspecting, and rendering compositions.

Typical commands from the upstream README:

```bash
npx hyperframes init my-video
npx hyperframes preview
npx hyperframes render
```

Use the upstream package docs for exact flags and current behavior:

- official CLI package docs: https://hyperframes.heygen.com/packages/cli
- upstream package source: https://github.com/heygen-com/hyperframes/tree/main/packages/cli

## Core Packages

The upstream README identifies these package areas:

| Package Area | Role |
| --- | --- |
| `hyperframes` | CLI for local composition workflows. |
| `@hyperframes/core` | Types, parsers, generators, linter, runtime, and frame adapters. |
| `@hyperframes/engine` | Seekable page-to-video capture engine using Puppeteer and FFmpeg. |
| `@hyperframes/producer` | Capture, encode, and audio mix pipeline. |
| `@hyperframes/studio` | Browser-based composition editor UI. |
| `@hyperframes/player` | Embeddable player web component. |
| `@hyperframes/shader-transitions` | WebGL shader transitions. |
| `@hyperframes/aws-lambda` | AWS Lambda SDK and deployment surface. |

## Agent Skills

The upstream project includes skills for:

- core HyperFrames authoring
- media use
- animation
- registry workflows
- PR-to-video
- product launch video
- faceless explainer
- graphic overlays
- slideshow

When using these skills, verify the generated HTML follows timing, media, and determinism rules before rendering.

## Hosted Workflow Planning

The CLI can produce and render projects, but it does not decide whether a team has a complete render brief. For a hosted planning step, HyperFrames World offers an independent SaaS companion: https://hyperframes.world/pricing/. Use it when you need package choice, paid access, and render-plan review around a HyperFrames workflow.

