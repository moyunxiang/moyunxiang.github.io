---
permalink: /zh/
title: "莫云翔 &nbsp;Yunxiang Mo"
author_profile: true
---

<span class="anchor" id="about"></span>

我是[香港科技大学(HKUST)](https://hkust.edu.hk)的**大二本科生**,主修**计算机科学**、**数学**与**电子工程**(三主修),并辅以**人工智能延伸主修**(**CGA: 4.1 / 4.3**)。我有幸师从[宋阳秋(Prof. Yangqiu Song)](https://www.cse.ust.hk/~yqsong/)教授与[郑天石(Dr. Tianshi Zheng)](https://stonetzheng.github.io/)博士,在 HKUST [KnowComp](https://github.com/HKUST-KnowComp) 课题组从事研究。

我的研究兴趣集中在大语言模型的**推理**能力,关注**强化学习(Reinforcement Learning)**与**测试时扩展(Test-Time Scaling)** —— 即模型如何从反馈中学习,以及如何在推理阶段分配算力以获得更可靠的推理表现。

我正在**积极寻找相关方向的研究合作或实习(internship)**机会。如果您在相关方向工作并有合适的机会,欢迎通过邮件联系我。

<span class="anchor" id="news"></span>

🔥 最新动态
======
- *2026.03*: 🎉 *DixitWorld* 的扩展版被 **ACL 2026 主会**接收。\[[OpenReview](https://openreview.net/forum?id=ikU0NDfKvO)\]
- *2026.01*: 🎉 *ScaleCUA* 被 **ICLR 2026** 接收为 **Oral**。\[[arXiv](https://arxiv.org/abs/2509.15221)\]
- *2025.10*: 🎉 *DixitWorld* 获得 **EMNLP 2025 Workshop**(BlackBox NLP)**Spotlight**。\[[arXiv](https://arxiv.org/abs/2510.10117)\]

<span class="anchor" id="experience"></span>

💼 经历
======

<div class="exp-item">
  <img class="exp-logo" src="/images/logos/stanford.jpeg?v=3" alt="Stanford">
  <div class="exp-text">
    <p class="exp-meta"><em>2026.04 – 至今</em> | <strong>研究实习生</strong>,Stanford HAI,美国斯坦福</p>
    <p class="exp-desc">由 <a href="https://smiles724.github.io/">吴方(Dr. Fang Wu)</a> 博士指导,在 <a href="https://yejinc.github.io/">Yejin Choi</a> 教授与 <a href="https://cs.stanford.edu/~jure/">Jure Leskovec</a> 教授的课题组。</p>
  </div>
</div>

<div class="exp-item">
  <img class="exp-logo" src="/images/logos/hkust.png?v=2" alt="HKUST KnowComp">
  <div class="exp-text">
    <p class="exp-meta"><em>2025.04 – 至今</em> | <strong>本科研究员</strong>,HKUST <a href="https://github.com/HKUST-KnowComp">KnowComp</a> 课题组,中国香港特区</p>
    <p class="exp-desc">由 <a href="https://stonetzheng.github.io/">郑天石(Dr. Tianshi Zheng)</a> 博士指导,在 <a href="https://www.cse.ust.hk/~yqsong/">宋阳秋(Prof. Yangqiu Song)</a> 教授的课题组。</p>
  </div>
</div>

<div class="exp-item">
  <img class="exp-logo" src="/images/logos/ingenic.jpg?v=2" alt="Ingenic Semiconductor">
  <div class="exp-text">
    <p class="exp-meta"><em>2025.06 – 2025.08</em> | <strong>机器学习工程师实习生</strong>,北京君正集成电路股份有限公司,中国北京</p>
    <p class="exp-desc">面向嵌入式与片上 AI 场景开发和优化机器学习模型;使用 PyTorch 搭建模型训练、评估与推理流水线;在严格的延迟与内存约束下将模型部署至边缘设备。</p>
  </div>
</div>

<div class="exp-item">
  <img class="exp-logo" src="/images/logos/benchmark.jpg?v=2" alt="Benchmark Architectural Design">
  <div class="exp-text">
    <p class="exp-meta"><em>2025.01</em> | <strong>实习生</strong>,基准方中(Benchmark Architectural Design Co., Ltd.)</p>
    <p class="exp-desc">使用 MFC 框架开发小程序项目的前端模块;参与 UI 设计、事件处理与系统调试。</p>
  </div>
</div>

<span class="anchor" id="publications"></span>

📚 论文发表
======

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-title">Robust Decision-Making for LLM Agents in Multi-Turn Reasoning</p>
    <p class="paper-meta"><span class="paper-meta-highlight under-review">在投</span></p>
    <p class="paper-extra">LLM 智能体在多轮推理中常常陷入自锁循环 —— 由于近似的信念追踪,模型反复回到相同假设而无法取得认知进展。我们形式化了这类循环出现的结构性条件,并指出该失败模式即便对前沿模型、即便采用标准的信息获取目标依然存在。为此,我们提出一种免训练、分布鲁棒的信息增益目标,显式对信念追踪误差进行对冲,从而在无需微调的情况下恢复探索性进展。该方法在多轮推理、规划与决策等多个基准上进行了评测,涵盖开源与闭源 LLM 智能体。</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link-arxiv" href="https://arxiv.org/abs/2609.07611" target="_blank" rel="noopener">arXiv</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2609.07611">AgentIdeaBench: Benchmarking Scientific Ideation in the Agent Era</a></p>
    <p class="paper-authors"><strong>Yunxiang Mo</strong>, Tianshi Zheng, Yisen Gao, Rui Wang, Newt Nguyen Kim Hue Nam, Kelvin Kiu Wai Tam, Jiaxin Bai, Yangqiu Song, Ginny Wong, Simon See.</p>
    <p class="paper-meta"><span class="paper-meta-highlight under-review">在投</span></p>
    <p class="paper-extra">面向科学构想(scientific ideation)的多学科基准,在"静态观察"与"主动探索"两种对齐设置下评测模型,覆盖五大学科、40 个密集打分的子领域,并采用文献可验证的评分框架 —— 由 critic 对照检索到的已有工作判定原创性。结果显示主动探索暴露出明显更大的能力上限,其增长速度约为静态观察的两倍,且该收益具有"能力门槛":越强的模型收益越大。</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link-openreview" href="https://openreview.net/forum?id=ikU0NDfKvO" target="_blank" rel="noopener">OpenReview</a>
      <a class="paper-link-details" href="/publication/2026-acl-dixitworld">详情</a>
    </p>
    <p class="paper-title"><a href="https://openreview.net/forum?id=ikU0NDfKvO">DixitWorld: Evaluating Multimodal Abductive Reasoning in Vision-Language Models with Multi-Agent Dixit Gameplay</a></p>
    <p class="paper-authors"><strong>Yunxiang Mo</strong>, Tianshi Zheng, Qing Zong, Jiayu Liu, Baixuan Xu, Yauwai Yim, Chunkit Chan, Jiaxin Bai, Yangqiu Song.</p>
    <p class="paper-meta"><strong>ACL 2026</strong></p>
    <p class="paper-extra">下方 workshop 版本的扩展版 —— 新增 Medium 难度档(252 vs 168 道 QA),72B 参数规模消融,以及 calibration / sensitivity 分析。</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link-arxiv" href="https://arxiv.org/abs/2509.15221" target="_blank" rel="noopener">arXiv</a>
      <a class="paper-link-details" href="/publication/2026-iclr-scalecua">详情</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2509.15221">ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data</a></p>
    <p class="paper-authors">Zhaoyang Liu, Jingjing Xie, Zichen Ding, Zehao Li, Bowen Yang, Zhenyu Wu, Xuehui Wang, Qiushi Sun, Shi Liu, Weiyun Wang, Shenglong Ye, Qingyun Li, Xuan Dong, Yue Yu, Chenyu Lu, <strong>Yunxiang Mo</strong>, Yao Yan, Zeyue Tian, Xiao Zhang, Yuan Huang, Yiqian Liu, Weijie Su, Gen Luo, Xiangyu Yue, Biqing Qi, Kai Chen, Bowen Zhou, Yu Qiao, Qifeng Chen, Wenhai Wang.</p>
    <p class="paper-meta"><strong>ICLR 2026</strong> <span class="paper-meta-highlight">Oral</span></p>
    <p class="paper-extra">我的贡献:开源代码库中的数据流水线与跨平台 workflow 组件。</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-links">
      <a class="paper-link-arxiv" href="https://arxiv.org/abs/2510.10117" target="_blank" rel="noopener">arXiv</a>
      <a class="paper-link-details" href="/publication/2025-emnlp-dixitworld-workshop">详情</a>
    </p>
    <p class="paper-title"><a href="https://arxiv.org/abs/2510.10117">DixitWorld: Evaluating Multimodal Abductive Reasoning in Vision-Language Models with Multi-Agent Dixit Gameplay</a></p>
    <p class="paper-authors"><strong>Yunxiang Mo</strong>, Tianshi Zheng, Qing Zong, Jiayu Liu, Baixuan Xu, Yauwai Yim, Chunkit Chan, Jiaxin Bai, Yangqiu Song.</p>
    <p class="paper-meta"><strong>EMNLP 2025 Workshop</strong> <span class="paper-meta-highlight spotlight">Spotlight</span></p>
    <p class="paper-extra">Workshop 原始版本;扩展版被 ACL 2026 主会接收(见上)。</p>
  </div>
</div>

<span class="anchor" id="projects"></span>

🛠️ 项目
======

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-title"><a href="https://web.facere.cc/" target="_blank" rel="noopener">Facere — AI 原生硬件设计 Agent</a></p>
    <p class="paper-meta"><strong>端到端硬件设计 CLI —— 原理图、PCB 布线与物理仿真。</strong></p>
    <p class="paper-authors">与 Yiping Zhao、Jiahao Zhang、Zichen Lin 合作。<em>独立开发。</em></p>
    <p class="paper-extra">一个 terminal-native 的 agent,与 KiCad 9 协作绘制和编辑原理图与 PCB 布线。我们构建了一个 hardware-aware 的 MCP server,后端为一套精心整理的 153 模板原理图语料库,并配备独立的 PCB 物理仿真包,使 agent 能够端到端规划、编辑并验证设计。通过单条命令的 bootstrap 安装器分发。</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p class="paper-title"><a href="https://pastpaper.knowit.top/" target="_blank" rel="noopener">PastPaper Master — AI 真题辅导工具</a></p>
    <p class="paper-meta"><strong>辅助 HKUST 学生练习历年真题的 Web 应用。</strong></p>
    <p class="paper-authors">与 Yiping Zhao 和 Jiahao Zhang 合作。<em>独立开发。</em></p>
    <p class="paper-extra">为 HKUST 学生准备真题的全栈 AI 辅导工具。GPT-4o 自动从上传的 PDF 中切分并标注每一道题;Qwen-plus 为每道题生成知识点回顾、阶梯式提示与分步解答。工作台支持左右双栏 PDF↔题目联动、拍照手写答题 OCR 批改、相似变体题自动生成,以及带遗忘曲线复习的错题本。</p>
  </div>
</div>

<span class="anchor" id="honors-and-awards"></span>

🏆 荣誉与奖项
======
- **University's Scholarship Scheme for Continuing Undergraduate Students**(在校生奖学金计划),HKUST,2024。*在校生前 1%。*
- **[S.S. Chern Class](https://www.math.hkust.edu.hk/ug/chern_class/)**(陈省身班),HKUST。*表彰所有数学课程上的顶尖学术表现。*
- **Dean's List Honor**(院长嘉许),HKUST,2024 & 2025。*GPA 高于 3.7。*

<span class="anchor" id="academic-services"></span>

🤝 学术服务
======
*(更新中。)*

<span class="anchor" id="teaching"></span>

🎓 教学
======
- **课程助教**,*Discrete Mathematics(离散数学)* —— HKUST。
- **课程助教**,*Exploring Artificial Intelligence(探索人工智能)* —— HKUST。
