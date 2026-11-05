---
title: skillberry-agent
order: 6
icon: 🤖
tagline: A proxy-agent that connects your agents to Skillberry skills.
repo: https://github.com/skillberry-ai/skillberry-agent
language: Python
status: early
tags: [agent, proxy, mcp, openai-compatible]
requires: skillberry-store
install: |
  git clone https://github.com/skillberry-ai/skillberry-agent.git && cd skillberry-agent
  cp .env.example .env    # set SPA_PROVIDER_NAME, SPA_MODEL_NAME, API key
  make run                # needs a running skillberry-store
highlights:
  - "**OpenAI-compatible** — drop-in `/v1/chat/completions` endpoint for existing agents."
  - "**Skill resolution** — pulls relevant skills from Skillberry-Store as MCP tools and prompt snippets."
  - "**Trajectory tracking** — a full audit trail of decisions and tool usage for continuous improvement."
  - "**Lower TCO** — offloads work to CPU-based deterministic tools instead of the LLM."
---

The Skillberry Proxy-Agent (SPA) sits between customer agents and the Skillberry ecosystem. It
coordinates LLM communication, skill resolution and response optimization, and manages a
thread-safe virtual MCP server per session backed by [skillberry-store](../skillberry-store/).
