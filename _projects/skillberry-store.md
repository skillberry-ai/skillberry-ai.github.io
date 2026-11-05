---
title: skillberry-store
order: 2
icon: 🫐
tagline: The open-source control plane for agent skills, tools and snippets.
repo: https://github.com/skillberry-ai/skillberry-store
site: https://skillberry-ai.github.io/skillberry-store/
demo: https://skillberry-store-demo-adv.onrender.com
language: Python 3.11+
status: beta (0.x)
tags: [skills, mcp, tools, registry, plugins]
install: |
  pip install skillberry-store              # minimal
  pip install "skillberry-store[plugins-all]"  # with plugins
  make docker-run                           # or run in a container
highlights:
  - "**Lifecycle management** — add, version, search (semantic + classic), label by namespace, and control visibility."
  - "**Many frontends** — REST/OpenAPI, CLI, virtual MCP servers, mountable WebDAV/NFS filesystems, and `npx skills add`."
  - "**Sandboxed execution** — invoke tools with parameters inside Docker."
  - "**Plugin framework** — event-driven plugins scan, tag, dedupe, evaluate and optimize skills; 16 ship in-tree."
  - "**Observability** — Prometheus metrics and Jaeger traces for tool usage."
---

Skillberry-Store (SBS) is a smart skills repository for agentic workflows: one Apache-2.0 service
that holds every skill your agents can reach — versioned, access-controlled, and served to many
runtimes, including as an MCP endpoint or a mounted filesystem.

Install a skill from a running store straight into Claude Code, Cursor, Codex and ~70 other agents:

```bash
npx skills add http://localhost:8000/pub/<skill> -y -a claude-code
```
