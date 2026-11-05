---
title: llm-switchboard
order: 5
icon: 🎛️
tagline: One client for many LLM providers — tool calls, structured outputs, retries.
repo: https://github.com/skillberry-ai/llm-switchboard
language: Python
status: available on PyPI
tags: [llm, client, litellm, openai, watsonx, ollama]
install: |
  pip install llm-switchboard
  pip install "llm-switchboard[all]"   # direct OpenAI / watsonx SDKs
highlights:
  - "**One interface** — LiteLLM (default), OpenAI, Azure OpenAI, Ollama and watsonx behind the same API."
  - "**Sync and async** generation with standardized tool calling."
  - "**Schema-validated outputs** — structured output with validation and retries."
  - "**Debuggable** — provider-specific parameter mapping and configurable logging hooks."
---

LLM Switchboard is a small Python library for building reliable LLM apps: call different model
providers through one consistent interface.

```python
from llm_switchboard.llm import get_llm

client = get_llm("litellm")(model_name="openai/gpt-4o-mini")
print(client.generate("Summarize the role of a model gateway."))
```
