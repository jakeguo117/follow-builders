AI Builders Digest — 2026年8月27日 星期四

---

## X / TWITTER

**OpenAI CEO Sam Altman** 发布了一条简短但重磅的消息："we made a chip and it is fast"（我们做了一颗芯片，而且它很快），暗示OpenAI自研芯片取得重大进展。这引发了超过3.2万点赞和3000多条回复，是本周最受关注的一条推文。

原文链接：https://x.com/sama/status/2092339694210040187

---

**Anthropic Claude Code团队成员Boris Cherny** 宣布了一个小改进：Claude的记忆功能现在更简单也更强大。用户可以通过简单的指令让Claude记住信息，并在对话和Claude Cowork之间共享记忆上下文。

原文链接：https://x.com/bcherny/status/2092355642363453943

---

**OpenAI Codex与ChatGPT负责人Thibault Sottiaux** 发布了三条重要消息：

1. 宣布了ChatGPT Team计划的新定价方案，专为团队和小公司设计，包含所有ChatGPT、ChatGPT Work和Codex功能，支持连接Google Workspace、Slack、GitHub、Microsoft 365等，提供SAML/SSO/MFA安全认证、集中式账单管理、用量分析和消费控制，且没有5小时限制。

2. 发布了一条耐人寻味的推文："Good products take time. At least 34 days."（好产品需要时间。至少34天。）暗示OpenAI DevDay即将到来。

3. 对Polymarket上的某个预测市场表达了兴趣。

原文链接：
- https://x.com/thsottiaux/status/2092345330272780499
- https://x.com/thsottiaux/status/2092487667426738179

---

**AI教育者Peter Yang** 开源了一个名为/fuck-cancer的AI技能（skill），帮助患者和家属应对癌症诊断和治疗过程。该技能会创建并更新一份实用的简报，包含五个部分：患者和护理团队信息、下一步行动（限制为三项）、已知信息（区分已确认事实和未明确事项）、医学术语通俗解释、护理日志。它使用美国国家癌症研究所和ClinicalTrials.gov API等可信来源进行研究和信息更新，支持本地Markdown文件或共享Google Doc保存。Peter表示这是他基于母亲的经历和患者社区的反馈而构建的。

原文链接：https://x.com/petergyang/status/2092249012913258946

---

**Meta AI高级总监Madhu Guru** 发布了"如何构建优秀evals"系列的第9部分——"Eval路线图问题"。他指出，大多数evals失败是因为团队把它们当作静态产物，而用户的期望和行为已经发生了变化。以金融研究agent为例，用户需求会从"总结这份5页财报"演变为"查看过去5份财报并解释增长故事"，再到"基于15份文件构建投资论点"，最终变成"监控我的投资组合并在重大变化时提醒我"。每个阶段需要不同的能力和相应的evals。他建议：1) 映射使用演进的维度（轮次、文档大小、工具使用、自主性等）；2) 优先考虑最重要的用例；3) 与用户交流并挖掘生产日志；4) 为下一阶段构建P0 evals；5) 运行evals、发现失败模式并逐步优化。

原文链接：https://x.com/realmadhuguru/status/2092426017118028266

---

**Anthropic Claude Code团队成员Cat Wu** 宣布，根据用户反馈，Claude的记忆功能已在Chat和Cowork之间统一。现在用户只需告诉Claude记住某件事一次，它就能在不同界面间共享该上下文。

原文链接：https://x.com/_catwu/status/2092337156455051345

---

**Anthropic Claude Code团队成员Thariq** 透露，他们正在让Claude Code变得更可hack（可定制），并承诺很快会分享更多细节。这条消息获得了1100多个点赞，社区反响热烈。

原文链接：https://x.com/trq212/status/2092303682616627311

---

**Google Labs** 推出新的实验项目"Play with Putty"——一个协作式vibe coding工具，允许多人实时共同构建工具和网站。目前仅限美国地区、18岁以上用户，可通过waitlist加入。

原文链接：https://x.com/GoogleLabs/status/2092293667688173593

---

**Vercel CEO Guillermo Rauch** 发布了两条重要产品消息：

1. **Run SDK**：一个安全的eval工具，用于动态Code Mode执行。当agent编写代码时，不需要完整的沙箱环境，可以在轻量级的QuickJS安全上下文中运行代码，更快且成本更低。命令：`npm i run`

2. **Vercel Connect正式GA**：解决构建agent时最困难的问题——安全连接到服务和数据。例如运行`vercel connect create notion`，即可获得一个MCP客户端，代表已认证用户查询数据。

原文链接：
- https://x.com/rauchg/status/2092382653161107534
- https://x.com/rauchg/status/2092352411839193234

---

**Box CEO Aaron Levie** 评论了一篇关于企业级AI应用策略的文章，强调模型与企业底层工作流之间存在巨大差距，这为应用型AI公司创造了大量机会。他引用文章观点："世界不只需要原始的模型和agent，它需要问题被解决、结果被实现。溢价将属于那些能够将智能渗透到文明各个方面的公司，将原始token转化为现实世界的结果。"Levie指出，这需要理解业务上下文、推动变革管理、构建能够路由到多种模型的框架、连接关键业务系统、解决UX挑战以及理解eval体系——这些都是超越模型智能本身的大量价值。

原文链接：https://x.com/levie/status/2092466424694649066

---

**Y Combinator总裁Garry Tan** 发布了几条轻松风格的推文，包括一张获得4686个赞的表情包（lmao），以及一条关于"cross-harness memory maxxing"（跨工具记忆最大化）的评论。另外还涉及一些社交媒体上的小争执。

原文链接：
- https://x.com/garrytan/status/2092321194037195022
- https://x.com/garrytan/status/2092277912053657722

---

**FPV Ventures合伙人Nikunj Kothari** 发布了一个"厄尔尼诺实时监测站"（elneenyo.com），提供来自政府来源的实时更新、各区域影响和成本、历史记录、术语表和FAQ。这个项目受Bloomberg Odd Lots播客启发，使用ChatGPT Codex和Railway构建，设计由Emil Kowalski和Kasturiii的生成式加载器完成。

原文链接：https://x.com/nikunj/status/2092383834470002922

---

**OpenClaw创始人Peter Steinberger** 发布了一张"本周"的预告图片，暗示OpenClaw即将有新的更新。

原文链接：https://x.com/steipete/status/2092294123638362346

---

**South Park Commons普通合伙人Aditya Agarwal** 发表了对AI数据中心建设的看法：普通民众讨厌数据中心建设完全不令人意外，因为AI目前主要帮助知识工作者和高收入群体。他认为，当AI能够找到治愈各种疾病的方案时，情况才会发生大变化。他还批评AI行业自身通过制造恐惧来损害形象，而不是描绘积极的未来图景。

原文链接：https://x.com/adityaag/status/2092290497826173186

---

**Anthropic官方账号Claude** 宣布了一项重要更新：Claude现在在Chat和Claude Cowork之间拥有统一的记忆功能。用户可以在设置中查看、编辑或删除所有记忆条目。记忆在Free、Pro和Max计划上默认开启，健康或宗教信仰等敏感话题默认不进入记忆，除非用户在设置中手动开启。

原文链接：
- https://x.com/claudeai/status/2092299704864284888
- https://x.com/claudeai/status/2092299707653439497
- https://x.com/claudeai/status/2092299710002319742

---

**Every CEO Dan Shipper** 发布了几条关于测试新设备的推文，预告即将推出vibe check评测。内容较为轻松。

---

## 播客

**Training Data — "Parallel's Parag Agrawal: Building a New Web for AI Agents"**

**核心要点：** 人类点击数据是bug，agent反馈才是未来。搜索引擎需要为agent重新设计，而互联网的经济模式必须从"眼球经济"转向"价值经济"。

前Twitter CEO Parag Agrawal在离开Twitter后创办了Parallel Web Systems，致力于为agent构建新一代搜索基础设施。他的核心论点非常大胆：人类搜索行为（关键词输入、点击链接、浏览页面）本质上是一种低效的信息获取方式，而agent可以做得更好——不是通过模仿人类，而是通过全新的交互协议。

Agrawal认为，Parallel的搜索agent平均每次任务会执行5到20次搜索，而随着agent的普及，这个数字会呈指数级增长。"我三年前每天大概做20到30次Google搜索。今天，我的所有agent加起来可能做了1000倍的搜索量。"他说。

一个关键洞察是：Parallel刻意选择从"搜索agent"而非传统搜索引擎起步。"我们最初的产品不是搜索引擎，而是搜索agent。它会实时爬取网页——如果你在做深度研究，你有一分钟的耐心，我们的产品有时会做10分钟的研究。"这种策略让公司能够逐步构建索引，而不是一开始就投入数十亿美元。

在商业模型方面，Agrawal提出了一个引人深思的观点：广告经济建立在人类注意力稀缺的基础上，但agent不会"看广告"。他主张用Shapley值（博弈论中的贡献分配方法）来公平分配内容价值——即通过模拟"如果某个内容源不存在，agent输出质量会下降多少"来计算每个内容源的贡献。他预测，12到24个月内，这种模式就能为广泛的内容创作者带来实质性的收入。

"想象一下，如果agent无处不在且能做很多事情。如果今天能做的事情值得做，而且我们还有GPU可用，就直接去做。明天做什么？明天做的是响应昨天发生的变化——另一个agent的工作、卫星图像中可见的世界变化、某个客户的评论、某个agent完成的计算、人类的新洞察。"

视频链接：https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders