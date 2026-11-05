---
title: cap-evolve
order: 1
icon: 🧬
tagline: Optimize any AI agent's skills, tools/MCP and prompts against your own evals.
repo: https://github.com/skillberry-ai/cap-evolve
site: https://skillberry-ai.github.io/cap-evolve/
language: Python 3.10+
status: beta (0.x)
tags: [optimization, evals, skills, mcp, prompts]
install: |
  git clone https://github.com/skillberry-ai/cap-evolve.git && cd cap-evolve
  pip install ./core   # zero runtime deps
  bash examples/toy_calc/run.sh   # no API key needed
highlights:
  - "**More than prompts** — system prompts, executable tool code, MCP tool surfaces and whole skill packages, alone or jointly."
  - "**Learns from real failures** — reads full trajectories and per-task causal feedback, so edits don't regress past wins."
  - "**Honest evaluation** — a val-only significance gate accepts edits; the test split is sealed and scored once."
  - "**Inspectable** — every candidate is a git commit; the dashboard shows cost, diffs, lineage and a pass/fail heatmap."
---

cap-evolve improves an AI agent's prompts, tools and skills by learning from failed evaluation traces.
You bring the agent and the eval you already have; cap-evolve runs the loop —
**evaluate → diagnose failures → propose an edit → keep it only if it beats a held-out split → commit** —
and reports one honest number. It optimizes what your agent *reads*, not its weights.

### Results at a glance

| Benchmark | Split | Baseline → Optimized |
|---|---|---|
| τ²-bench airline (policy + tools) | sealed test | 30.0 → 47.5 (+58%) |
| SkillsBench (skill package) | sealed test | 0.556 → 0.667 (+20%) |
| RH-SWE-bench (skill + system prompt) | val, fit metric | 0.580 → 0.765 (+32%) |

See the project's [RESULTS.md](https://github.com/skillberry-ai/cap-evolve/blob/main/docs/RESULTS.md) for methodology and caveats.
