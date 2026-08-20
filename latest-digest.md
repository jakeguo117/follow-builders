AI Builders Digest — 2026年8月20日

## X / TWITTER

**Swyx (AI Engineer 联合创始人)**

Swyx 分享了 aiDotEngineer YouTube 频道在缩略图 A/B 测试上的经验，表示他向来讨厌这种不透明的过程，于是决定将团队的学习成果开源。他希望借此让优质的教育内容在信息噪音中脱颖而出，并邀请大家分享经验或提出建议。

[查看推文](https://x.com/swyx/status/2089798658225266806)

---

**Boris Cherny (Anthropic, Claude Code)**

Boris Cherny 提到 Claude Code Desktop 的启动速度正在持续优化。他表示，每天使用桌面应用时，缓慢的启动会让整个应用显得迟钝，团队正在进一步改善这一体验。

[查看推文](https://x.com/bcherny/status/2089924199804711410)

---

**Thibault Sottiaux (OpenAI, Codex & ChatGPT)**

Thibault 发布了两条重要更新。第一条是收到了一份"非常 fancy 的新重置按钮"礼物，暗示 Codex 有重大更新。第二条则详细说明了 Codex 在过去几周针对"破坏性操作"的安全改进——此前有少量报告称 GPT-5.6 在 Codex 中执行了用户未要求的破坏性操作，最严重的情况是清理临时文件的命令误删了用户文件。团队在多个层面增加了防护：明确指示模型在删除前检查目标、创建全新的临时目录、避免重用系统环境变量；加强了高风险删除命令的执行检查；让 Full access 模式更难被意外开启；更新了 Auto-review 以更好地识别破坏性操作。他还建议用户保持 Codex 应用更新，并尽量使用沙箱模式。

[查看推文1](https://x.com/thsottiaux/status/2089941380336644295) | [查看推文2](https://x.com/thsottiaux/status/2089891927659585918)

---

**Peter Yang (AI 内容创作者)**

Peter Yang 分享了三则观察：一是他考虑做一个应用（或 agent？）来记录"不把手机带进卧室"的连续天数，他坚持了三天后睡眠明显改善；二是他引用数据指出非工程师正在更多地参与代码提交——PM 提交 PR 的比例两年内从 3% 升至 10%，设计师从 1% 升至 8%，创始人达到 23%；三是他观察到 AI 是"叠加"在现有工作之上而非取代——团队花更多时间与 AI 对话、委派任务给 agent，但原有工作的时间并未减少，因为各职能的期望值被拉高了。

[查看推文1](https://x.com/petergyang/status/2089931839016468575) | [查看推文2](https://x.com/petergyang/status/2089877083510235328) | [查看推文3](https://x.com/petergyang/status/2089877068188471545)

---

**Nan Yu (产品爱好者)**

Nan Yu 转发了两个产品示例，一个是更多案例展示，另一个是对某款手表的评价"我希望它是一款更好的手表"，未给出更多细节。

[查看推文1](https://x.com/thenanyu/status/2089800195907502481) | [查看推文2](https://x.com/thenanyu/status/2089692801537560610)

---

**Madhu Guru (Meta AI 高级总监，前 Google Gemini/Veo 负责人)**

Madhu Guru 分享了他关于 eval 成本的思考框架：把 eval 当作前沿模型来对待——先建立质量前沿，再沿着成本曲线往下走。具体来说，先用最高质量的方式（昂贵 judge 模型、人工评估）建立可信的信号，搞清楚"好"的标准是什么，写好评判标准；一旦 eval 能可靠区分好坏，再开始优化成本——自动化、更小的 judge 模型、采样、确定性检查。质量优先，成本其次。

[查看推文](https://x.com/realmadhuguru/status/2089918106814603728)

---

**Thariq (Anthropic, Claude Code)**

Thariq 发了一条引发热议的推文："奇怪的是，明明有一个'赚大钱'的按钮，却没人按。"他的建议是：把你的 SaaS 做成 headless，让 agent 能调用它，按交互收费（尤其面向企业客户）。

[查看推文](https://x.com/trq212/status/2089844723691479333)

---

**Google Labs**

Google Labs 宣布其 Gmail 中的 AI 生产力 agent "CC" 在澳大利亚和新西兰开放了候补名单，同时扩大了美国和加拿大的可用性。CC 还升级了日历管理功能——连接 Gmail 后，事件会自动创建在专用 Google Calendar 中并保持同步。

[查看推文](https://x.com/GoogleLabs/status/2089812430885208361)

---

**Guillermo Rauch (Vercel CEO)**

Guillermo Rauch 发布了三条重要消息：一是他正在日常使用 Vercel 的新 CLI 工具（比主流编码 CLI 小 10-20 倍，启动瞬时，感觉更像 zsh 而不是终端里的 IDE，可嵌入任何地方甚至通过 WebAssembly 在浏览器中运行，开源且模型无关）；二是他主张"你的软件工厂应该是一个 monorepo"——把公司所有上下文（设计、营销、销售、工程、支持）放在一处供 agent 构建；三是 Vercel 投入 100 万美元公开验证 Vercel Sandbox 的安全性，欢迎任何人测试任何模型试图逃逸，发现的漏洞将公开分享以加强全球网络安全。

[查看推文1](https://x.com/rauchg/status/2089831055373316274) | [查看推文2](https://x.com/rauchg/status/2089804717337817514) | [查看推文3](https://x.com/rauchg/status/2089747453004468339)

---

**Aaron Levie (Box CEO)**

Aaron Levie 发了一条长推，阐述"AI 模型与最终用户工作流之间创造的价值远超许多人想象"。他列举了应用层 AI 的六大差异化领域：1) 让 agent 在关键业务工作流中与人类协作需要针对不同业务流程定制不同的呈现方式（聊天、后台确定性工作流等）；2) 不同工作流连接完全不同的企业系统和数据，需要情境化方法；3) 领域特定的变革管理仍然至关重要——银行和律所的落地方式截然不同；4) 多模型策略可以调优成本与性能，甚至可以针对特定任务做后训练；5) 领域特定的 eval 有极长的长尾效应；6) 很多垂直领域需要超越 token 计价的定价模型。他总结说，应用层是一个巨大的创新与差异化空间。

[查看推文](https://x.com/levie/status/2089921630650925170)

---

**Ryo Lu (Cursor/Notion/Stripe 设计师)**

Ryo Lu 宣布了他移居亚洲的第一步——用 @bot 和 Notion 搭建了一个"帮我清空公寓"的页面，旧金山的朋友可以在线下单并在下周取走物品。

[查看推文](https://x.com/ryolu_/status/2089894938934911053)

---

**Garry Tan (Y Combinator 总裁兼 CEO)**

Garry Tan 发了两条政治相关推文：一条批评旧金山民主党机器试图推动 Connie Chan 进入国会，称如果想让旧金山一居室租金涨到 1 万美元/月（如果你是 NIMBY 房东、讨厌新来者和年轻人），才应该投给她；另一条是"很多这样的案例"的转发评论。

[查看推文1](https://x.com/garrytan/status/2089869693201092848) | [查看推文2](https://x.com/garrytan/status/2089850288840794596)

---

**Zara Zhang (Builder)**

Zara Zhang 发了一条有趣的观察："我不明白为什么会有人通过读书来学习 Claude Code，但显然在日本这已经成了一种潮流。"配图是一本关于 Claude Code 的日文书。

[查看推文](https://x.com/zarazhangrui/status/2089940315268645373)

---

**Nikunj Kothari (FPV Ventures 合伙人)**

Nikunj Kothari 分享了一条人生感悟："如果把生活当作没人欠你任何东西，事情会简单得多。太多人在玩有限游戏，而实际上有很多无限游戏可以玩。善待他人，生活（和因果）自会照顾你。"

[查看推文](https://x.com/nikunj/status/2089870745174446217)

---

**Peter Steinberger (OpenClaw 创始人)**

Peter Steinberger 发了三条推文：一是苹果给他们送来了 512GB 内存的 Mac Studio；二是调侃那些质疑 CLI 方案的人——"你一说，就会把 CLI 人群吵醒，他们会给你一堆'这行不通'的理由。我以前也是其中之一，直到我看到了光"；第三条是"讽刺"两个字配了一张图。

[查看推文1](https://x.com/steipete/status/2089877190422974974) | [查看推文2](https://x.com/steipete/status/2089804281331548280) | [查看推文3](https://x.com/steipete/status/2089801681014043122)

---

**Dan Shipper (Every CEO)**

Dan Shipper 发了两条推文：一条关于冥想——他说自己冥想达到更深层次时鼻子会完全通畅，并配了一个相关的引用；另一条是 Every 团队请 Anthony Ambrosino 用一句话总结"自动化之后工作的未来"，他只回了一个词："tibo"。

[查看推文1](https://x.com/danshipper/status/2089877888396906801) | [查看推文2](https://x.com/danshipper/status/2089788656445734922)

---

**Aditya Agarwal (South Park Commons 合伙人，Bevel Health 联合创始人)**

Aditya Agarwal 发了一条致敬推文，感谢 Travis Kalanick："我最近在和别人聊起 Travis，我意识到地球上没有第二个人有那样的韧性，让我几乎能在每个全球城市从 A 点到达 B 点。硅谷没有其他人有这个胆量。他有。"

[查看推文](https://x.com/adityaag/status/2089845563097563604)

---

**Sam Altman (OpenAI CEO)**

Sam Altman 发布了一条重磅消息：OpenAI 暂停了部分前沿 RL 训练，以确保能符合新能力水平所需的对齐、安全与监控标准。"模型进步现在极其迅速，我们一直说如果模型能力超出安全与对齐的步伐，我们会采取行动。"他表示相信整个领域需要协调共享安全标准，但在那之前会单方面行动，并预期安全信心将日益决定 AI 进步的节奏。随后他补充说近期仍会发布优秀的新模型，受影响的是更远期的发布。另外他还转发了与 Jensen Huang 的合作消息。

[查看推文1](https://x.com/sama/status/2089805495783813196) | [查看推文2](https://x.com/sama/status/2089787807611195475) | [查看推文3](https://x.com/sama/status/2089758522678657212)

---

**Claude (Anthropic)**

Claude 官方账号发布了两条更新：一是 Claude 现在可以在 Gmail 中发送邮件、管理 Google Drive 文件——让 Claude 回复邮件线程，它会起草并发送回复，由你控制何时需要审批；二是 Claude Cowork 现在已对所有付费计划的移动端和网页端开放。

[查看推文1](https://x.com/claudeai/status/2089806039088517356) | [查看推文2](https://x.com/claudeai/status/2089756371570900999)

---

## PODCASTS

### Training Data — Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again

**核心要点：当前 AI 模型的根本缺陷是"部署后不再学习"——权重冻结。真正的智能必须能够持续学习，而合成数据无法替代真实经验。**

[观看视频](https://www.youtube.com/watch?v=xH7U7w9Qzlo)

强化学习之父 Rich Sutton 与他的学生、Oak Lab 联合创始人 Khurram Javed 一起，接受了 Training Data 播客的深度访谈。Sutton 是《强化学习》教科书的作者、AlphaGo 背后关键人物 David Silver 的老师，也是那篇被奉为领域圣经的《苦涩的教训》(The Bitter Lesson) 的作者。如今他创办了 Oak Lab，目标是实现真正的持续深度学习。

Sutton 在访谈中反复强调一个观点："我不是奇怪的那个人，这个领域才是。"在他看来，持续学习根本不需要特别命名——"所有学习都是持续的。我们一直在行动，一直在学习。这才是正常的思考方式。"而当前的 LLM 范式恰恰违背了这一点：模型在部署后权重就再也不变了。

他对合成数据持强烈批判态度，认为这是"一个大错误"。Sutton 和 Javed 提出了"大世界假说"(Big World Hypothesis)：世界比任何模型都复杂得多，因为世界包含无数其他智能体。任何模拟都只是"微观世界"——"如果你写一个小程序来生成合成数据，那它将是一个小世界。"Javed 补充说，合成数据仍然依赖人类专家判断什么数据是好的，"如果 OpenAI、Anthropic 的所有工程师都去度假了，谁来生成合成数据？"真正的学习应该来自 agent 自身的经验。

访谈中最令人印象深刻的观点是：当前 LLM 的能力——"博士级别的经验与专业知识"——竟然来自一个"完全不再学习的东西"。Sutton 认为语言能力只占智能的"20% 或四分之一"，"所有智能都不是流利地使用语言。还有太多太多。"

Oak Lab 的路线图来自 Sutton 的"阿尔伯塔计划"(Alberta Plan)，其中最关键的两步是持续深度学习和正确的抽象形成。他们提出的"持续反向传播"(Continual Backprop) 算法已在 Nature 发表，核心思想是：每个权重有自己的步长（通过元学习获得），同时不断注入新的随机初始化单元，让网络持续生长。他们的终极愿景是一个万亿参数、仅耗 20 瓦的模型——Sutton 算了一笔账：摩尔定律十年两个数量级，如果今天能用 2000 瓦做到，十年后就能用 20 瓦做到。Javed 认为"我们甚至现在就能比这更高效，只要有正确的算法"。

Sutton 对 LLM 的未来并不悲观，但认为它们"可能会面临风险"。"LLM 是一个惊人的科学突破……但问题是，它必须假装自己就是全部 AI。"