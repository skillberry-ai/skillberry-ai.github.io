---
title: simulation-harness
order: 3
icon: 🧪
tagline: Simulate MCP tools and skills — no backends, credentials or side effects.
repo: https://github.com/skillberry-ai/simulation-harness
language: Python 3.11+
status: early (phase 1)
tags: [mcp, simulation, testing, openapi]
install: |
  git clone https://github.com/skillberry-ai/simulation-harness.git && cd simulation-harness
  make dev-install
  export LLM_API_KEY=...
  make start            # MCP on http://localhost:8086
  # or: docker pull ghcr.io/skillberry-ai/simulation-harness
highlights:
  - "**One OpenAPI spec → one simulation** — generates a simulation skill and serves schema-valid, plausible responses."
  - "**MCP-native** — exposes tools over SSE and Streamable HTTP to any MCP-capable consumer."
  - "**Stateful sessions** — multi-call coherence with configurable limits and idle timeouts."
  - "**Zero setup** — no credentials, sandboxes or test data required."
---

The Simulation Harness is a platform-agnostic, LLM-driven environment for simulating MCP tools and
skills. Agent developers and DevOps engineers can execute tools without real backends, credentials,
or the risk of irreversible side effects.

### Use cases

- **Catalog exploration** — click "Try" in a catalog and see realistic responses in seconds.
- **Skill/tool optimization** — run hundreds of optimization trials per hour without burning real API budgets.
- **Course-of-action rehearsal** — let agents rehearse potentially irreversible actions before doing them for real.
