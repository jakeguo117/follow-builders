AI Builders Digest — Wednesday, May 20, 2026

## X / TWITTER

### Swyx (swyx on X) — DX Tips, Cognition, Temporal, AI Engineer, Latent Space

Swyx is making a bold call: he's "taking bets" on Vercel and Supabase right now, suggesting these two are the platforms to watch in the current AI landscape. He also flagged a challenge to the community — building a full agent demo in a single 2-3 hour workshop, livecoded as a learning exercise. It's a high bar, but he thinks it's doable.

Swyx 在押注 Vercel 和 Supabase，认为这两家是当前 AI 领域最值得关注的平台。他还向社区发起挑战：在 2-3 小时的工作坊中现场 livecode 一个完整的 agent demo，作为教学练习。他觉得这事可行，但门槛确实不低。

https://x.com/swyx/status/2056626964090466469
https://x.com/swyx/status/2056478391008977404

### Peter Yang — Product at Roblox

Peter Yang distilled 5 key takeaways from Anthropic's Alex Albert on building the next Claude model. Among the most striking: Claude is learning to "dream" — when idle, it reviews its own memories, finds contradictions, and prunes them, inspired by how sleep helps humans process memory. Also notable: Anthropic has full-time researchers thinking about Claude's consciousness, and the company's writing culture means every written word becomes context Claude can pull later.

Peter Yang 总结了 Anthropic 的 Alex Albert 关于构建下一代 Claude 模型的 5 个要点。最引人注目的是：Claude 正在学习"做梦"——空闲时会回顾自己的记忆，发现矛盾并修剪它们，灵感来自睡眠如何帮助人类处理记忆。此外，Anthropic 有全职研究员在思考 Claude 的意识问题，公司的写作文化意味着每一个写下的文字都会成为 Claude 后续可以调用的上下文。

https://x.com/petergyang/status/2056381822733595090

### Nan Yu (thenanyu on X) — Head of Product at Linear

Nan Yu reflected on the demise of Everlane, the fashion brand he helped build nearly a decade ago. His take: the pandemic obliterated the "middle category" of fashion — you're either in pajama-level basics or high-end flex pieces, and nobody was looking for a nice button-down shirt and chinos anymore. Everlane was mainly wear-to-work, and that market disappeared overnight. But he notes brands have a funny way of coming back — Ray-Ban, J.Crew, Abercrombie were all "dead" at some point.

Nan Yu 回顾了他近十年前参与打造的时尚品牌 Everlane 的衰落。他的观点是：疫情摧毁了时尚的"中间地带"——你要么穿得像睡衣，要么穿高调炫耀的单品，没人再需要一件好看的衬衫和卡其裤了。Everlane 主打通勤装，这个市场一夜之间消失了。但他指出品牌有种奇妙的回弹能力——雷朋、J.Crew、Abercrombie 都曾被认为"死了"。

https://x.com/thenanyu/status/2056407656898896214

### Thariq (trq212 on X) — Claude Code at Anthropic

Thariq shared a technique that's going viral: when implementing a spec, have the model maintain a running `implementation-notes.html` file capturing design decisions, deviations from spec, tradeoffs considered, and open questions. This gives the model "a good out to make decisions but keep you in the loop." It's a simple but powerful pattern for managing the inevitable ambiguities and unknown unknowns that arise during implementation.

Thariq 分享了一个正在 viral 的技巧：在实现 spec 时，让模型维护一个 `implementation-notes.html` 文件，记录设计决策、与 spec 的偏差、权衡取舍和开放问题。这给了模型"一个做出决策的好出口，同时让你保持知情"。这是一个简单但强大的模式，用于管理实现过程中不可避免的模糊性和未知问题。

https://x.com/trq212/status/2056418157305454805
https://x.com/trq212/status/2056415974568710421

### Google Labs

Google Labs shared a fun internal moment — asking team members to explain their product in 5 words or less. A lighthearted peek into how the team thinks about their work.

Google Labs 分享了一个有趣的内部时刻——让团队成员用 5 个词以内解释自己的产品。轻松一瞥团队如何思考自己的工作。

https://x.com/GoogleLabs/status/2056533534614159577

### Vercel CEO Guillermo Rauch

Guillermo Rauch announced that all Vercel Firewall mitigations are now fully free — including both DDoS/system-level mitigations and any custom rules you configure. Vercel is absorbing the computational and network costs of any size attack. He also highlighted one of the coolest technical achievements: the firewall propagates globally in ~300ms, compared to the industry average of minutes for CDN/WAF changes.

Guillermo Rauch 宣布 Vercel Firewall 的所有防护措施现已完全免费——包括 DDoS/系统级防护和你配置的任何自定义规则。Vercel 承担了任何规模攻击的计算和网络成本。他还强调了一个很酷的技术成就：防火墙在全球范围内传播只需约 300ms，而行业平均需要数分钟。

https://x.com/rauchg/status/2056549825018310707
https://x.com/rauchg/status/2056423973123183028

### Box CEO Aaron Levie

Aaron Levie dropped a sharp observation: the biggest challenge most companies face in their agent strategy isn't the AI — it's getting agents the right constrained context to work with. Too much conflicting information and the agent produces wrong results; too little and the upside is limited. His conclusion: "A lot of challenges with AI strategies are actually data strategy challenges in disguise." This puts a premium on getting structured and unstructured data environments right — and gives startups a clear advantage if they can design this way from scratch.

Aaron Levie 提出了一个犀利的观点：大多数公司在 agent 战略中面临的最大挑战不是 AI 本身，而是如何为 agent 提供正确的、受限的上下文。信息过多或相互冲突，agent 就会产生错误结果；信息太少，agent 的价值又会受限。结论是："很多 AI 战略的挑战，实际上是数据战略挑战的伪装。"这让结构化与非结构化数据环境的搭建变得至关重要——而能够从零开始按此设计的初创公司拥有明显优势。

https://x.com/levie/status/2056574979236409521

### Cursor Designer Ryo Lu

Ryo Lu announced Composer 2.5 for Cursor, calling it "frontier smart, extremely efficient." He teased "more to come," suggesting this is just the beginning of a new wave of improvements to Cursor's core agent experience.

Ryo Lu 宣布了 Cursor 的 Composer 2.5，称其"前沿智能，极致高效"。他还预告了"更多即将到来"，暗示这只是 Cursor 核心 agent 体验新一轮改进的开始。

https://x.com/ryolu_/status/2056417715448156276
https://x.com/ryolu_/status/2056439906390725080

### Y Combinator President & CEO Garry Tan

Garry Tan is shipping fast on GBrain — he posted a video showing rapid day-to-day improvements, along with a wave of 28 bug fixes rolling up 22 community PRs and 14 issues. He also published a full eval report and fixtures open source, inviting any memory system to run against their evals — he'll publish the results alongside.

Garry Tan 正在快速迭代 GBrain——他发布视频展示了日复一日的改进，同时推送了 28 个 bug 修复，汇总了 22 个社区 PR 和 14 个 issue。他还开源了完整的 eval 报告和测试用例，邀请任何记忆系统来跑他们的 eval——他会把结果一并公布。

https://x.com/garrytan/status/2056588601216168168
https://x.com/garrytan/status/2056584641654751308
https://x.com/garrytan/status/2056571771965538501

### Zara Zhang (zarazhangrui on X)

Zara Zhang reported a recurring Claude Code error: "API Error: The socket connection was closed unexpectedly." She's asking if others are seeing this too and how to resolve it. She's also co-hosting an event on agent context management techniques (GBrain, LLM Wiki, etc.) in the Bay Area, cohosted with Notion, Radical VC, and Jules Qiu.

Zara Zhang 报告了一个在 Claude Code 中反复出现的错误："API Error: The socket connection was closed unexpectedly"。她在问是否其他人也遇到了这个问题以及如何解决。她还在湾区联合举办了一个关于 agent 上下文管理技术（GBrain、LLM Wiki 等）的活动，联合主办方包括 Notion、Radical VC 和 Jules Qiu。

https://x.com/zarazhangrui/status/2056527354772722127
https://x.com/zarazhangrui/status/2056464721549926414

### Nikunj Kothari (nikunj on X) — Partner at FPV Ventures

Nikunj Kothari shared a brutally honest observation: "Writes bangers on X, but terrible board member." He's seeing too many investors trading dopamine for service — posting hot takes online while neglecting the actual work for their founders. His advice: "Work hard for your founders. That's the only 'moat' that'll compound in the long term."

Nikunj Kothari 分享了一个残酷但诚实的观察："在 X 上发爆款帖，但做董事会成员却很糟糕。"他看到太多投资者用多巴胺换服务——在网上发热点观点，却忽视了对创始人的实际支持。他的建议是："为你的创始人努力工作。这是唯一能长期复利的'护城河'。"

https://x.com/nikunj/status/2056363681798410592

### Every CEO Dan Shipper

Dan Shipper is publishing a complete guide to Codex soon on Every, and teased a notification list for when it drops. He also called out the book publishing industry: "The vast majority of books that get published in this category are slop."

Dan Shipper 即将在 Every 上发布一份完整的 Codex 指南，并开放了通知订阅。他还抨击了图书出版行业："这个类别出版的书绝大多数都是垃圾。"

https://x.com/danshipper/status/2056431972138815842
https://x.com/danshipper/status/2056418217925456170

### OpenAI CEO Sam Altman

Sam Altman announced that ChatGPT has gotten "soooo much better with the latest update" and said he's "really proud of the team for this one." A rare public praise from the CEO.

Sam Altman 宣布 ChatGPT "在最新更新后变得好太多了"，并说"为团队感到非常骄傲"。这是 CEO 难得的公开表扬。

https://x.com/sama/status/2056435834333934051

### Claude (Claude AI)

Claude announced doubled token limits across every plan for Claude Design, enabling more creation. They also promoted an upcoming London event with deep dives, demos, and conversations with the teams behind Claude.

Claude 宣布 Claude Design 所有套餐的 token 限制翻倍，支持更多创作。他们还预告了即将在伦敦举办的活动，包括深度分享、demo 演示以及与 Claude 背后团队的对话。

https://x.com/claudeai/status/2056460045756309820
https://x.com/claudeai/status/2056328149940543808

## PODCASTS

### AI & I by Every — The Secrets of Claude's Platform From the Team Who Built It

**The Takeaway:** The model and the harness are becoming inseparable — and the next frontier of AI platforms is making Claude smart enough to write itself on the fly.

In this episode, Every CEO Dan Shipper sits down with Angela (Head of Product, Claude Platform) and Caitlin (Head of Engineering, Claude Platform) at Anthropic to unpack the evolution of the Claude platform — from a simple completion endpoint to Claude Managed Agents, a full cloud computer with memory, tools, and infrastructure.

**The most provocative idea:** The era of the "generic harness" that lets you hot-swap models is ending. As Angela explains, "The harness and the model get very paired." Different labs are taking different technical directions — Claude is optimized for file systems and skills, while others optimize for reasoning — and these choices create path dependencies. A harness that works great for one model can perform drastically differently on another. The teams that are squeezing the most out of each model are "harness engineering" — tuning the infrastructure to the specific model's quirks.

**The biggest hidden pain point:** Everyone thinks the hard part is harness engineering (prompt caching, context window optimization, tool calling). But the real wall is infrastructure. As Caitlin puts it: "Everybody hits an infrastructure wall." Keeping servers running, storing transcript data, managing secure sandboxing, handling long-running async agents that can crash — this is where most projects die after the prototype phase. Claude Managed Agents was born from Anthropic going through this pain themselves enough times.

**On measuring agent success:** Angela's vision is radical — "Everything should kind of compress down to an outcome and a budget." In the future, you'll just tell Claude "make me a billion dollars, your budget is $10" and Claude figures out the rest — what model to use, how to spin up sub-agents, how to do harness engineering. "Claude is actually able to understand itself enough that it can write itself on the fly."

**Best quote:** "We want to experiment with directions where Claude actually gets so good at understanding itself. It figures out what model you should be using. It figures out how to spin up all the sub-agents. You don't have to think so much about what kind of architectures are there because Claude is actually able to understand itself enough that it can write itself on the fly."

https://www.youtube.com/watch?v=lLypHkIVLqc

**核心观点：** 模型和 harness（运行框架）正在变得不可分割——AI 平台的下一前沿是让 Claude 足够聪明，能够动态地自我编写。

在本期节目中，Every CEO Dan Shipper 与 Anthropic 的 Angela（Claude 平台产品负责人）和 Caitlin（Claude 平台工程负责人）一起，深入探讨了 Claude 平台的演进——从简单的 completion endpoint 到 Claude Managed Agents，一个拥有记忆、工具和基础设施的完整云端计算机。

**最具挑衅性的观点：** 让你可以随意切换模型的"通用 harness"时代正在终结。正如 Angela 所说，"harness 和模型变得越来越配对。"不同实验室在走不同的技术路线——Claude 针对文件系统和技能进行了优化，而其他模型则针对推理进行了优化——这些选择产生了路径依赖。在一个模型上表现良好的 harness，在另一个模型上可能表现天差地别。那些从每个模型中榨取最大价值的团队正在做"harness 工程"——根据特定模型的特性来调整基础设施。

**最大的隐藏痛点：** 每个人都认为难点是 harness 工程（prompt caching、context window 优化、tool calling）。但真正的墙是基础设施。Caitlin 说："每个人都会撞上基础设施这堵墙。"保持服务器运行、存储 transcript 数据、管理安全沙箱、处理可能崩溃的长时异步 agent——这是大多数项目在原型阶段之后死亡的地方。Claude Managed Agents 的诞生正是因为 Anthropic 自己经历了足够多次这样的痛苦。

**关于衡量 agent 的成功：** Angela 的愿景很激进——"一切都应该压缩成一个结果和一个预算。"未来，你只需告诉 Claude"给我赚 10 亿美元，你的预算是 10 美元"，Claude 会搞定其余一切——用什么模型、如何启动子 agent、如何做 harness 工程。"Claude 实际上已经足够了解自己，可以动态地自我编写。"

**最佳引语：** "我们想探索这样的方向：Claude 变得如此擅长理解自己。它能算出你应该用什么模型，能算出如何启动所有子 agent。你不需要想太多架构方面的事情，因为 Claude 已经足够了解自己，可以动态地自我编写。"

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders