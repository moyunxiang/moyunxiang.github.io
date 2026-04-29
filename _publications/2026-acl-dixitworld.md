---
title: "DixitWorld: Evaluating Multimodal Abductive Reasoning in Vision-Language Models with Multi-Agent Dixit Gameplay"
collection: publications
category: conferences
permalink: /publication/2026-acl-dixitworld
excerpt: 'Extended version of the EMNLP 2025 Workshop paper, accepted at ACL 2026 Main Conference. Adds a third difficulty tier (252 questions total), a 72B-scale ablation, and calibration/sensitivity analyses.'
date: 2026-08-01
venue: 'ACL 2026 (Main Conference)'
paperurl: 'https://openreview.net/forum?id=ikU0NDfKvO'
citation: 'Yunxiang Mo, Tianshi Zheng, Qing Zong, Jiayu Liu, Baixuan Xu, Yauwai Yim, Chunkit Chan, Jiaxin Bai, Yangqiu Song. (2026). &quot;DixitWorld: Evaluating Multimodal Abductive Reasoning in Vision-Language Models with Multi-Agent Dixit Gameplay.&quot; <i>Proceedings of ACL 2026 (Main Conference)</i>.'
---

**Authors:** <u>Yunxiang Mo</u>, Tianshi Zheng, Qing Zong, Jiayu Liu, Baixuan Xu, Yauwai Yim, Chunkit Chan, Jiaxin Bai, Yangqiu Song.

**Venue:** **ACL 2026 — Main Conference**. AC meta-review **9/10 (Strong Accept)**; recommended for oral presentation (decision pending).

*Extended version of the [DixitWorld workshop paper](/publication/2025-emnlp-dixitworld-workshop) at EMNLP 2025 Workshop (Spotlight).*

**Links:** \[[OpenReview](https://openreview.net/forum?id=ikU0NDfKvO)\]

## What's new in the ACL version

Beyond the workshop paper, this version contributes:

- **A larger and finer-grained DixitBench**: expanded from 168 to **252 questions** (84 images × 3 difficulty tiers — Easy / Medium / Hard) with systematically controlled distractor difficulty.
- **A frontier-scale ablation**: a new **72B-parameter open-source VLM** is added to confirm that the storyteller–listener asymmetry persists at the open-source frontier and is not an artifact of model capacity.
- **Calibration and sensitivity analyses**: additional studies (Appendices) showing the structural nature of the asymmetry, with **r = 0.947 correlation** between DixitBench and DixitArena.
- **Sharper headline result**: **78%** of storyteller rounds yield zero points, while listener accuracy reaches **75.6%** for the best model — a precise quantification of the generation–discrimination gap.
- **Three-fold contribution framing**: (i) DixitArena + DixitBench as complementary benchmarks under adversarial conditions, (ii) a critical storyteller–listener asymmetry, and (iii) extensive analyses showing the gap is structural, not artifactual.

## Abstract

We introduce **DixitWorld**, an evaluation framework for assessing multimodal abductive reasoning in vision-language models (VLMs). DixitWorld has two components:

- **DixitArena** — a dynamic multi-agent setting in which models alternate between generating cryptic clues (*storyteller*) and selecting the target image from alternatives (*listener*).
- **DixitBench** — a static QA benchmark that isolates the listener task for efficient, controlled assessment.

We find that **smaller open-source models often excel as creative storytellers**, producing imaginative but less discriminative clues, while larger proprietary models show stronger overall performance — particularly as listeners. Performance on DixitBench strongly correlates with listener results in DixitArena, validating it as a reliable proxy for hypothesis selection. Our findings reveal a key tradeoff between *generative creativity* and *discriminative understanding* in multimodal abductive reasoning — a central challenge for developing more balanced and capable vision-language agents.
