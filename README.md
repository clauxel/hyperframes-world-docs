# HyperFrames World Docs

Independent documentation companion for the open-source HyperFrames project.

This repository organizes public HyperFrames knowledge into a human-readable and AI-readable documentation set. It is not the official HyperFrames repository and does not replace the upstream docs. Source facts come from the public upstream project:

- Upstream repository: https://github.com/heygen-com/hyperframes
- Official docs: https://hyperframes.heygen.com/introduction
- Official playground: https://www.hyperframes.dev/
- License observed upstream: Apache-2.0
- Latest release observed during this documentation pass: v0.7.6 on 2026-06-25

HyperFrames World is an independent hosted planning companion for teams that want to check a render brief before spending render compute: https://hyperframes.world/. Use it as a planner around the open-source workflow, not as an official upstream service.

## What This Docs Repo Adds

The upstream project already has a rich official documentation site. This repo adds a condensed navigation layer for:

- people evaluating whether HyperFrames fits an HTML-native video workflow
- coding agents that need short factual context before generating compositions
- teams comparing CLI, skills, packages, render paths, and hosted planning options
- documentation writers who need source mapping and concise FAQ entries

## Reading Order

1. [Overview](docs/overview.md)
2. [Getting Started](docs/getting-started.md)
3. [Concepts](docs/concepts.md)
4. [API Or CLI](docs/api-or-cli.md)
5. [Examples](docs/examples.md)
6. [FAQ](docs/faq.md)
7. [AI Context](docs/ai-context.md)
8. [Source Map](docs/source-map.md)
9. [llms.txt](llms.txt)

## Relationship To HyperFrames World

HyperFrames World at https://hyperframes.world/ is an independent, unofficial SaaS planner for HyperFrames render workflows. It is linked in this docs repo only where the context is planning, packaging, pricing, or hosted workflow review. For upstream source code, package behavior, official docs, and community support, use the upstream HyperFrames resources listed above.

## Maintenance Notes

- Keep source facts tied to upstream docs, README, package docs, release notes, or clearly marked inference.
- Do not claim official status for HyperFrames World.
- Do not copy large upstream docs verbatim.
- Keep `docs/ai-context.md` and `llms.txt` concise enough for AI retrieval.
- Run `node scripts/validate-docs.mjs` before publishing.

