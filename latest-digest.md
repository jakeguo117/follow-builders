AI Builders Digest — Thursday, May 14, 2026

## PODCASTS

### Training Data — Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy

**The Takeaway:** Waymo didn't just survive the AV winter — it built a foundation model that treats driving as a multimodal world-action-language problem, and that architectural bet is now paying off in exponential scaling.

Waymo co-CEO Dmitri Dolgov has been in autonomous vehicles for over two decades, starting with the DARPA Urban Challenge in 2007. He joined the Google Self-Driving Car Project in 2009 when the team was a dozen people sleeping at the office, writing code during the day and testing at night. That early team set two audacious goals: drive 100,000 miles fully autonomously and complete ten 100-mile routes across the Bay Area without a single intervention. It took 18 months. Today, Waymo has given over 20 million fully autonomous rides — and the last 10 million came in just seven months.

Dolgov is refreshingly clear about what made Waymo different when the AV hype cycle crashed. "It's very easy to get started, but it's very difficult to take it all the way to a real product," he says. The problem has a long tail that no single breakthrough — whether convolutional nets, transformers, or LLMs — can flatten overnight. Waymo's edge was understanding that and not looking for silver bullets.

The technical core is what Dolgov calls the Waymo Foundation Model — an end-to-end multimodal model that powers three pillars: the driver, the simulator, and the critic. It's not just about perception; the model has to understand physics, dynamics, and what it means to be a good agent in a world full of unpredictable humans. But Dolgov pushes back on the "end-to-end vs. everything else" framing. "It's end-to-end *and* what else?" Waymo augments its learned representations with structured, materialized intermediate outputs, which enables richer closed-loop training, validation at runtime, and more effective reinforcement learning. This matters at scale: "There's a massive difference between using end-to-end versus purely relying on it."

On safety, Dolgov shares a striking stat: Waymo's driver is 13 times safer than a human driver in the cities where it operates, preventing a serious injury every eight days. His favorite story? A Waymo in San Francisco detected a pedestrian's footsteps *under a bus* using a sparse LiDAR return — enough for the AI to predict the person would emerge and react defensively before they ever appeared. "It blew my mind," he says.

Dolgov's philosophy for navigating the hard years is simple: believe in the mission. Every 26 seconds, someone dies in a road crash worldwide. "The status quo is not okay." Waymo is now in 11 U.S. cities, with plans to launch in London and Tokyo this year. The company has transitioned from sequential de-risking to parallel global commercialization — and Dolgov's kids, who've never known a world without Waymo, now get annoyed when they have to ride in a car driven by a human.

**链接:** https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

---

**核心要点：** Waymo 不仅挺过了自动驾驶的寒冬——它还构建了一个将驾驶视为多模态-世界-行动-语言问题的基础模型，而这个架构上的赌注如今正在以指数级扩张的方式兑现。

Waymo 联合 CEO Dmitri Dolgov 投身自动驾驶已超过二十年，最早可以追溯到 2007 年的 DARPA 城市挑战赛。2009 年他加入 Google 自动驾驶汽车项目时，团队只有十几个人，睡在办公室，白天写代码，晚上测试。那个早期团队设定了两个雄心勃勃的目标：全自动驾驶 10 万英里，以及在湾区完成十条 100 英里的路线，全程零人工干预。这花了 18 个月。如今，Waymo 已经完成了超过 2000 万次全自动驾驶行程——而最近的一千万次，只用了七个月。

Dolgov 对 Waymo 在 AV 炒作周期崩溃时为何能存活下来的解释令人耳目一新。他说："起步很容易，但要把产品做到真正成熟非常困难。"这个问题有一条很长的尾巴，没有任何单一突破——无论是卷积网络、Transformer 还是大语言模型——能在一夜之间把它压平。Waymo 的优势在于理解这一点，并且不寻找银弹。

技术核心是 Dolgov 所说的 Waymo 基础模型——一个端到端的多模态模型，驱动着三大支柱：驾驶系统、模拟系统和评估系统。它不仅仅是感知问题；模型必须理解物理规律、动力学，以及在一个充满不可预测人类的世界里成为一个好的智能体意味着什么。但 Dolgov 反驳了"端到端 vs. 其他一切"的二元对立。"它是端到端*加上*什么？" Waymo 用结构化的、具象化的中间输出来增强其学习到的表征，这使得更丰富的闭环训练、运行时验证和更有效的强化学习成为可能。这在规模化时至关重要："使用端到端和纯粹依赖端到端之间有着巨大的区别。"

在安全方面，Dolgov 分享了一个惊人的数据：在其运营的城市中，Waymo 驾驶系统的安全性是人类驾驶员的 13 倍，每八天就能防止一次严重伤害。他最喜欢的故事是什么？旧金山的一辆 Waymo 利用激光雷达的零星回波，检测到了*一辆公交车下方*行人的脚步声——足以让 AI 预测此人会从车后出现，并在对方现身之前就做出防御性反应。"这让我震惊了，"他说。

Dolgov 度过艰难时期的哲学很简单：相信使命。全球每 26 秒就有一人死于交通事故。"现状是不可接受的。" Waymo 现在已进入 11 个美国城市，并计划今年在伦敦和东京启动服务。公司已从顺序式降低风险转向并行式全球商业化——而 Dolgov 的孩子们，从未经历过没有 Waymo 的世界，现在偶尔坐人类驾驶的车时会感到不满。

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders