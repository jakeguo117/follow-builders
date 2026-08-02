AI Builders Digest — 2026年8月2日

## X / TWITTER

**Swyx（smol.ai 创始人，Latent Space 播客联合主持人）**

Swyx 表示，在 AI 领导者中，他依然是少数仍在积极使用 /loop 和 /goal 功能的人，并认为那些停止使用的人放弃得太早了——尤其是在 g5.6/c5 时代。他指出，现在使用这些功能的时机是：当你想要可操控性和自主性的正确组合时，或者当你想要开放式“循环生成循环”的最终状态而不需要深入指定路径时。他还观察到，“vibe coding”一词的贬义内涵已经彻底消失——从非技术人员到超级技术大牛，现在每个人都在这么做。此外，他评论了 MITM agent 蒸馏技术，称其为研究生级别的工作，但当然有效。

https://x.com/swyx/status/2083439562437673053
https://x.com/swyx/status/2083294839186260385
https://x.com/swyx/status/2083237045720465504

**OpenAI Codex 与 ChatGPT 负责人 Thibault Sottiaux**

OpenAI 的 Thibault Sottiaux 宣布，为庆祝一周的效率提升，他们重置了 Codex 和 ChatGPT Work 的使用限制，让用户可以在这个周末运行 100,000 个 Luna 线程。他还发布了一条简洁有力的帖子：“为好奇心而优化”，获得了超过 1,400 个赞。另外，他确认 ChatGPT Work 已被官方计入统计数据。

https://x.com/thsottiaux/status/2083427516996292992
https://x.com/thsottiaux/status/2083395449814229287
https://x.com/thsottiaux/status/2083387677945036995

**Linear 产品负责人 Nan Yu**

Linear 产品负责人 Nan Yu 分享了他们内部最常用的 agent 循环：Issue → Agent → PR → Release，约 30% 的 bug 能完整走完这个流程。他分享了关键经验：指令应要求 agent 深入研究问题的根本原因，并使用 Datadog 和 Sentry 的 MCP 收集更多证据；只有在高度确定时才尝试提供修复，否则会浪费大量 token；如果 agent 认为更多证据有帮助（如要求报告者提供复现步骤），应在 issue 上留言请求。他强调：“Agent 需要被告知遵循良好实践，就像人一样！”

https://x.com/thenanyu/status/2083340761488126101
https://x.com/thenanyu/status/2083230295206121807

**Replit CEO Amjad Masad**

Replit CEO Amjad Masad 分享了一个约 1500 Elo 的 8B 参数国际象棋模型，该模型持续击败前沿模型和 Stockfish 第 0 级。有趣的是，这个 8B 模型通过高推理和响应链式处理击败了 GPT 5.6，每步棋只需 1-2 秒，而后者需要 30 秒。他提供了试玩链接。

https://x.com/amasad/status/2083424608993300824

**Vercel CEO Guillermo Rauch**

Vercel CEO Guillermo Rauch 强调了 AI Gateway 的关键基础设施价值：按 key/团队/项目设置预算、故障转移以确保最大可用性、模型和供应商选择，以及实时可观测性。他调侃道：“如果你还活在‘token 最大化’的狂热梦里，是时候醒醒了”。他还预测，随着软件项目转向 agentic 软件工厂，Issue → Agent → PR → Release 将成为常态，作者/维护者的工作是优化产生最高质量产品的循环，并设定应该做什么的标准。

https://x.com/rauchg/status/2083319868766699699
https://x.com/rauchg/status/2083208578526314513

**Box CEO Aaron Levie**

Box CEO Aaron Levie 提出了一个前瞻性观点：harness（编排层）将成为 AI 栈中仅次于模型能力的最重要变量。他解释说，当任务只消耗数十万或数百万 token 时，harness 并不重要；但随着任务消耗数千万甚至数亿 token，harness 以最高效方式分解工作并在正确时间路由到正确模型的能力，将成为最大化准确性和降低成本的关键变量。他认为我们在这个旅程中仍然非常早期。

https://x.com/levie/status/2083389460679373135

**Y Combinator 总裁兼 CEO Garry Tan**

Y Combinator 总裁兼 CEO Garry Tan 推荐了他们团队自建并每天使用的开源工具，作为个人 AI 或公司大脑的干净 harness，免费且开源。他还发表了政治观点，认为如果民主党想赢得重要选举，需要研究旧金山过去五年的地方政治故事：尽早且频繁地投票淘汰当地的民主社会主义者。

https://x.com/garrytan/status/2083353760701833546
https://x.com/garrytan/status/2083331028446523842

**Zara Zhang（Builder，GitHub 项目 Follow Builders 作者）**

Zara Zhang 分享了对内容创作的洞察：每条爆款帖子背后都需对抗“这不显而易见吗”的内心声音——对你显而易见的事情，对大多数人来说并非如此。她建议想发帖但不知道说什么的人：记住，一切对你来说自然而然的东西，对圈子外的人都是全新的。做好本职工作，然后谈谈它，不要试图成为别人，不要过度思考。她还分享了对 Anthropic 内部 Claude Tag 使用情况的观察：产品与工程团队 65% 的 PR 现在由 Claude Tag 提交。她认为对非工程团队来说，最终的 agent 界面是他们已经在工作的地方（如 Slack 等协作工具），并回顾了自己与 agent 交互界面的演变：一月是终端，三月是桌面应用（如 Codex），六月是工作协作工具——每一步都更接近人类的自然交流方式。

https://x.com/zarazhangrui/status/2083354965482062079
https://x.com/zarazhangrui/status/2083349919172313367
https://x.com/zarazhangrui/status/2083161173563003268

**FPV Ventures 合伙人 Nikunj Kothari**

FPV Ventures 合伙人 Nikunj Kothari 写了一篇新文章，探讨风投界一个潜在信念：最好的创始人往往在逃离某些东西——艰难的童年、肩上的负担、让脚踩油门的痛苦。他思考了驱动力的真正来源，以及大多数人从未达到的档位。他还发了一条轻松的家庭帖，自嘲“爸爸们是最原始的厨余垃圾桶”。

https://x.com/nikunj/status/2083307235619287363
https://x.com/nikunj/status/2083281124302676322
https://x.com/nikunj/status/2083140308045271325

**OpenClaw 创始人 Peter Steinberger**

Peter Steinberger 分享了对模型能力提升的观察：以前需要队列机制，但现在使用 5.5 版本，模型不会再混淆了——你可以在它工作时随时抛给它新任务，它会认真处理你扔给它的任何东西。他还幽默地转发了关于辐射屏蔽内衣的帖子，并称赞 Jason 的工作。

https://x.com/steipete/status/2083369880599015713
https://x.com/steipete/status/2083328272444915831
https://x.com/steipete/status/2083094971167781317

**Every CEO Dan Shipper**

Every CEO Dan Shipper 在 WSJ 关于 OpenAI 与 Anthropic 对比的文章中发表了评论，坚持认为自春初以来势头已明显转向 OpenAI，称这是一个引人入胜的回归故事。他还以幽默的方式展望了 2027 年的人类程序员面试：“请描述你解决的最近 3 个未解数学猜想，并分享你的提示词”“请描述你的 agent 无意中犯下的最近一次网络重罪，以及你采取的缓解措施”“请告诉我们 strawberry 里有几个 R，seventeen 里有几个 e”。

https://x.com/danshipper/status/2083380721607921904
https://x.com/danshipper/status/2083352181776732326
https://x.com/danshipper/status/2083239700664349128

**OpenAI CEO Sam Altman**

OpenAI CEO Sam Altman 分享了一个 ChatGPT Work 的有趣用例：连接家庭日历并解释孩子的兴趣，每天早上送孩子上学的路上，让它制作一个播客，谈论当天下午某个孩子的足球赛、另一个孩子即将到来的生日和一些新闻。他还转发了关于计算能力增长的内容，幽默地说“你出摩尔定律，我跟 20 倍”，并评论说“还可以更快”。

https://x.com/sama/status/2083221585792762171
https://x.com/sama/status/2083203642975502640
https://x.com/sama/status/2083198135812383197

## PODCASTS

**Unsupervised Learning — Ep 92: xAI Co-Founder Unpacks the Future of Model Development**

**核心观点：AI 能力的进步正在放缓，而封闭源模型提供商正被日益强大的开源模型挤压——出路在于创新和分布式价值创造，而不是试图捕获全人类的知识。**

Igor Babushkin 是 AI 领域最资深的从业者之一。他曾任 DeepMind 研究工程师，领导了 StarCraft 和 AlphaCode 项目；随后加入 OpenAI 参与早期推理工作；2023 年联合创立 xAI，在 Colossus 数据中心和 Grok 模型的开发中发挥了关键作用。2025 年离开 xAI 后，他创办了 River AI，致力于个人 AI、本地硬件和分布式 AI 控制。他的经历使他成为少数同时见证过 DeepMind、OpenAI 和 xAI 三种截然不同文化的人。

Babushkin 的核心理念是：AI 的控制权和收益应该分散，而不是集中在少数大公司手中。他认为，当前“大型预训练 + API 按 token 收费”的模式并非唯一路径。River AI 的三项押注包括：提供强化学习和微调服务的 River API、为每个个体量身定制的个人 AI（而非为“平均用户”训练的模型），以及让前沿模型能在本地设备上运行的硬件。

关于封闭源模型提供商的处境，他直言不讳：“你让模型太好，就不被允许发布；但开源模型每个月都在变得更强大。这其实不是一个好位置。”他认为，OpenAI 和 Anthropic 的出路在于持续创新，否则将被开源社区追赶。他特别强调了一个哲学观点：模型的预训练建立在全人类知识之上——互联网上所有文本本质上是一种公共资源，因此预训练权重应该免费开放。

关于开源生态，他承认目前最先进的开源模型主要来自中国实验室，这虽然降低了 AI 入门门槛，但也让中国实验室处于有利地位——他们可能停止发布权重或更改许可条款。他呼吁道：“美国需要训练出世界上最好的开源模型，这绝对是至关重要的。”

被问及 AI 是否会让人类失去意义时，他给出了深思熟虑的回答：“如果我们想保持相关性，就需要找到与机器的正确共生关系。今天已经存在某种共生——编码 agent 处理低级细节，我仍然做架构和规划。但风险在于，随着 agent 越来越强大，激励总是倾向于让它们接管更多。”他主张需要更深入的 alignment（对齐），甚至预见了 Neuralink 这类脑机接口的长期可能性。

当被问到这一切最终是否会好的概率时，他指出了最紧迫的风险：“AI 可能加剧世界不平等——有些人会从中受益巨大，而有些人会感到被抛在后面。这是最直接、最紧迫的风险。”至于模型是否最终会脱离人类控制，他认为那是更遥远的未来。

他回忆起第一次让模型工作时那种“魔幻”的感觉：“当模型第一次做一些简单但以前任何机器都做不到的事情时——哪怕只是写一个生成素数的 Python 函数——你会觉得这不真实。”这种对 AI 早期魔力的怀念，正是他作品中反复出现的主题。

https://www.youtube.com/@RedpointAI

---
Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders