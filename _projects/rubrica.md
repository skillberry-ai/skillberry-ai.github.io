---
title: rubrica
order: 4
icon: 📋
tagline: Skill-based test suite generator for agentic systems.
repo: https://github.com/skillberry-ai/rubrica
language: Python 3.13+
status: early
tags: [testing, evals, test-generation, skills]
install: |
  git clone https://github.com/skillberry-ai/rubrica.git && cd rubrica
  make setup   # venv + deps via uv
  make test
highlights:
  - "**Bring any artifact** — specs, captured trajectories or source code become a single world model of claims."
  - "**Every arrow is a file on disk** — each stage reads and writes schema-validated artifacts you can open and diff."
  - "**Traceable tests** — every test traces to a claim, and every claim to the evidence it came from."
  - "**Human gates** — you sign off between phases; nothing past a gate runs until you do."
---

Rubrica builds an agent test suite for a target system out of whatever artifacts describe it, by
chaining AI skills over a schema-validated, on-disk artifact contract. It proposes scenarios that
test the system's claims, turns surviving scenarios into concrete test cases, attacks the cases to
weed out the ones that don't hold up, and compiles the rest into a runnable suite.

Five phases — **select → understand → cover → build → compile** — with a human-held gate between them.
