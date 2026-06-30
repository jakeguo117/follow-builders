AI Builders Digest — Tuesday, June 30, 2026

## X / TWITTER

### swyx (swyx on X) — AI Engineer / Temporal / Cognition

Swyx is deep in the weeds of organizing the AI Engineer conference. He shared a photo showing 1,000 people registered within the first three hours, and warned that Monday and Tuesday are going to be "absolutely batshit." He also highlighted the Design Engineers track, which he finds hard to curate himself, so he brought in Geoff to host it — the track kicks off Wednesday.

https://x.com/swyx/status/2071480924810969331
https://x.com/swyx/status/2071478390172049555

### Boris Cherny — Claude Code @ Anthropic

在一条获得 11,000+ 赞的帖子中，Boris Cherny 提出了一个关于 AI 时代工程角色的新框架。他观察到，随着工程、产品、设计等职能融合，Claude Code 团队中出现了五种原型：**Prototyper（原型师）**——产生新想法；**Builder（建造者）**——将原型转化为生产级产品；**Sweeper（清理者）**——简化代码、优化性能；**Grower（增长者）**——迭代产品以提升 PMF；**Maintainer（维护者）**——确保成熟系统的安全与效率。他认为，未来产品角色可能更像这样，而不是今天的按职能划分。

https://x.com/bcherny/status/2071379474277613732

### Thibault Sottiaux — Codex & ChatGPT @ OpenAI

Thibault 透露，Codex 团队周日正在"作战室"（warroom）排查日志，调查部分用户使用额度异常消耗的问题。作为临时措施，他重置了所有用户的 Codex 使用限制——即使有人已经攒了三次重置机会。有趣的是，这周 OpenAI 内部叫做"RESET week"（休息周），结果变成了另一种意义上的"重置周"。

https://x.com/thsottiaux/status/2071357473659707441
https://x.com/thsottiaux/status/2071381664853319742
https://x.com/thsottiaux/status/2071383430634344902

### Peter Yang (petergyang on X) — AI Tutorials & Guides

Peter Yang 分享了 Anthropic Managed Agents 产品负责人 Jess 的一段话：通过让 agent 访问代码库，她可以直接跟踪 PR 和部署状态，而不用追着工程师问进度。"我比以往任何时候都更深入地理解和交互我的产品。"Peter 还诚实地承认——他仍然不知道 Salesforce 的 Agentforce 到底是什么。

https://x.com/petergyang/status/2071292628302434361
https://x.com/petergyang/status/2071353107242774863

### Thariq (trq212 on X) — Claude Code @ Anthropic

Thariq 注意到一个有趣的现象：Riot Games 正在将《英雄联盟》客户端从 Adobe Air 迁移到 Unreal Engine。他猜测，这一定是因为 coding agent 改变了处理遗留代码库的工程成本结构——"有人能确认吗？"

https://x.com/trq212/status/2071419473433854221

### Guillermo Rauch — Vercel CEO

Guillermo Rauch 发了两条关于个人品牌的推文："你不需要 LinkedIn，你需要的是在你自己的网站上创建一个页面，描述并链接到你交付的东西。"他的总结："你需要的是 Link（链接），而不是 LinkedIn。"

https://x.com/rauchg/status/2071284129275285580
https://x.com/rauchg/status/2071287181650653372

### Aaron Levie — Box CEO

Aaron Levie 对 AI 监管提出了一个尖锐的论点：很快就会出现开源的、神话级别的网络安全模型，任何人都可以使用。如果中国无论如何都能赶上（而且他们正在赶上），那么美国限制模型发布只会让自己处于不对称劣势。正确的策略不是设门，而是确保自己始终处于前沿。

https://x.com/levie/status/2071253118252356001

### Zara Zhang (zarazhangrui on X) — Builder / Follow Builders

Zara Zhang 分享了一条关于"建造"与"传播"比例的心得：每花一小时建造产品，就应该花两小时解释、演示、销售和教授它。"这是我最喜欢的建造部分：告诉世界你做了什么，然后根据现实反馈进行改进。"她还发布了一个教程视频，讲解如何安装和使用 Follow Builders 技能，以及如何自己构建类似的技能。

https://x.com/zarazhangrui/status2071319754128978030
https://x.com/zarazhangrui/status/2071335200802648420

### Dan Shipper — CEO of Every

Dan Shipper 自荐了一个内容链接。

https://x.com/danshipper/status/2071304948390752557

---

## PODCASTS

### The MAD Podcast with Matt Turck — "The GPU Myth: State of AI Compute 2026 | Stephen Balaban"

**The Takeaway:** GPU 计算从未真正商品化，那些说"五年后 GPU 就过时了"的人完全错了——事实上，2023 年部署的 H100 今天能以更高的价格出租。

Lambda Labs 的 CTO 兼联合创始人 Stephen Balaban 在这期播客中，从物理层到金融层，完整拆解了 AI 计算堆栈。Lambda 的故事本身就够传奇：2012 年以面部识别软件起家，做过内置摄像头的棒球帽（Lambda Hat），2015 年靠 Deep Dream 滤镜积累了 100 万用户，然后因为 AWS 账单太高（每月 4 万美元）被迫自建计算集群——结果发现自建更省钱，于是阴差阳错进入了云服务生意。今天 Lambda 的年收入接近 10 亿美元。

Stephen 的核心论点：**云服务从来不是商品，而是高度垂直整合的复杂业务**，涵盖土地许可、建筑、HPC 设计、软件、虚拟化等每一层。大多数 Neo Cloud 连真正的云服务软件都没有——它们无法将 GPU 集群分区出租，因此只能做批发，拿不到零售价。Lambda 的"一键集群"产品允许用户在网页界面上启动 16 到 4,000 个 GPU，这才是真正的技术壁垒。

关于"是否在过度建设"的争论，Stephen 非常坚定："我们仍然普遍建设不足。"他的论据是 scaling laws 尚未见顶——每次模型能力提升，都扩大了可寻址市场的范围：从客服到搜索，再到软件工程。"我们现在有一个惊人的系统，可以输入金钱，输出软件。"

关于社区对数据中心的抵制，Stephen 认为很大程度上是 misinformation。现代数据中心使用闭环液冷系统（几乎零蒸发），而且通常自带发电和电池储能，实际上在加强电网。"如果人们知道 AI 数据中心其实就是服务他们 ChatGPT 请求的地方，可能就不会那么反感了。"

最令人印象深刻的洞察是**"神经软件"（Neural Software）**的概念：未来 AI 不再生成代码，而是本身成为软件。你可以让 LLM 模拟一个操作系统——没有代码在运行，只有特征激活空间和上下文的修改。"不可能有 bug，只有对 prompt 的误解。"Stephen 认为大规模采用还需要 10-15 年，但原型已经存在。

关于 agent 的影响，Stephen 指出：agent 驱动的开发意味着大量时间花在运行测试和编译上，而不是推理——这意味着云服务需要做更多的传统 CPU 工作负载。他在 Lambda 内部已经在运行"自组装软件"（self-assembling software）：一个 24/7 运行的 agent 集群，根据产品需求和用户反馈实时实现功能。

最后，他的 hot take：**agentic workflow 在软件工程之外被过度炒作**——因为 agent 需要非常具体的反馈机制（自动化测试），而"帮我赚十亿美元"这样的任务无法验证。但 CAD、有限元分析等领域确实有巨大潜力。

https://www.youtube.com/watch?v=0NttU4CbyVs

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders