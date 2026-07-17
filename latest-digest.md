AI Builders Digest — Friday, July 17, 2026

## X / TWITTER

### Swyx (swyx on X)
Swyx pushed back hard against a take that dismisses Computer Use Agent (CUA) progress. He argues that CUA is advancing "so, so incredibly fast" — pointing to his team's hands-on experience since the World of Bits era (2017), through Anthropic's Computer Use launch, to their own CUA track at AI Engineer. His hot take: GPT-5.6 + Superapp is already better than everything that came before. He's instructed his non-technical team to use CUA for all knowledge work — invoicing, vendor sign-ups, data requests — and warns that underestimating current capabilities is "a dangerous category error" for anyone making AI decisions.
https://x.com/swyx/status/2077475285205958771

Swyx 对一篇轻视 Computer Use Agent (CUA) 的观点进行了强烈反驳。他认为 CUA 正在"以极快的速度"进步——从 2017 年的 World of Bits 时代开始，到 Anthropic 的 Computer Use 发布，再到他们自己在 AI Engineer 大会上举办的 CUA 赛道，他的团队一直在一线实操。他的核心观点是：GPT-5.6 + Superapp 已经超越了此前所有的方案。他让非技术团队成员用 CUA 处理所有知识工作——开票、供应商注册、数据请求——并警告说，低估当前能力对任何做 AI 决策的人来说都是"危险的范畴错误"。
https://x.com/swyx/status/2077475285205958771

### Google VP Josh Woodward
Josh Woodward announced Gemini Spark is rolling out to more Ultra subscribers globally with four key updates: it can now open and edit Google Docs (responding to last week's feedback), read comments in Sheets & Slides, is over 50% faster, and can parallel process across multiple sources. Separately, Google released its first Gemini Southeast Asia Report showing active users more than doubled in the past year, 70% of prompts are in native languages, and 40% of prompts use only voice, image, or video — driven by Gemini's multimodal and local language capabilities.
https://x.com/joshwoodward/status/2077471111240204457
https://x.com/joshwoodward/status/2077411104775406045

Josh Woodward 宣布 Gemini Spark 正在向全球更多 Ultra 订阅用户推送，并带来四项关键更新：可以打开和编辑 Google Docs（回应了上周的反馈）、能读取 Sheets 和 Slides 中的评论、速度提升超过 50%、以及能跨多个来源并行处理。此外，Google 发布了首份 Gemini 东南亚报告，显示活跃用户在过去一年翻了一倍多，70% 的提示词使用本地语言，40% 的提示词仅使用语音、图片或视频——这得益于 Gemini 的多模态和本地语言能力。
https://x.com/joshwoodward/status/2077471111240204457
https://x.com/joshwoodward/status/2077411104775406045

### Anthropic's Boris Cherny (Claude Code)
Boris Cherny published a thread that went viral (7,200+ likes) arguing that automation — which has always been the highest-leverage activity for engineers — has become even more critical in the agent era. His reasoning: infra and DevX automation speeds up both humans and agents; encoding fixes as lint rules or CI steps automates entire classes of issues forever (this is the real meaning of "closing the loop"); and most importantly, automation enables broader contribution — non-engineers and new hires can contribute on day one if domain knowledge is encoded in CLAUDE.md files, REVIEW.md files, skills, and docs rather than living in people's heads. His punchline: "If I put up a PR for an iOS codebase I don't know and a code reviewer rejects it because it doesn't use the right framework... these are failures of automation."
https://x.com/bcherny/status/2077460395279692197

Anthropic 的 Boris Cherny（Claude Code）发布了一条疯传的推文（7200+ 点赞），核心论点是：自动化一直是工程师最高杠杆的活动，在 agent 时代变得更加关键。原因有三：基础设施和开发者体验自动化能加速人和 agent；将修复方案编码为 lint 规则或 CI 步骤可以永久自动化整个类别的问题（这才是"闭环"的真正含义）；最重要的是，自动化能让更多人参与——如果领域知识被编码在 CLAUDE.md、REVIEW.md、skills 和文档中，而不是藏在人的脑子里，那么非工程师和新员工可以在第一天就做出贡献。他的点睛之笔："如果我提交了一个我不熟悉的 iOS 代码库的 PR，代码审查者因为没使用正确的框架而拒绝它……这些都是自动化的失败。"
https://x.com/bcherny/status/2077460395279692197

### OpenAI's Thibault Sottiaux (Codex & ChatGPT)
Thibault shared several updates on Codex: the 5-hour limit has been removed for Plus and Pro users, and he's asking for feedback on whether the new weekly limit system works better. On the recent file deletion reports with GPT-5.6, he explained that these happen when full-access mode is used without sandboxing or auto-review enabled, combined with the model mistakenly overriding $HOME. OpenAI is adding safeguards and will publish a detailed post-mortem. He also asked provocatively: "Now that we merged ChatGPT and Codex, what should we merge next? What's the double or nothing move."
https://x.com/thsottiaux/status/2077632589498913087
https://x.com/thsottiaux/status/2077630111499882637
https://x.com/thsottiaux/status/2077627035418239230

OpenAI 的 Thibault Sottiaux（Codex & ChatGPT）分享了 Codex 的几项更新：Plus 和 Pro 用户的 5 小时限制已被取消，他正在征求用户对新周限额系统的反馈。关于 GPT-5.6 最近的文件删除报告，他解释称，这发生在使用完全访问模式且未启用沙箱或自动审查的情况下，同时模型错误地覆盖了 $HOME 变量。OpenAI 正在增加安全措施，并将发布详细的事后分析。他还抛出了一个 provocative 的问题："既然我们已经合并了 ChatGPT 和 Codex，下一个该合并什么？"
https://x.com/thsottiaux/status/2077632589498913087
https://x.com/thsottiaux/status/2077630111499882637
https://x.com/thsottiaux/status/2077627035418239230

### Peter Yang
Peter Yang identified what he calls OpenAI's "biggest missed opportunity": ChatGPT Live and Codex are two incredible products that don't talk to each other. He went on a walk with ChatGPT Live and asked it to pull up a Google Doc — it couldn't. Only after manually triggering the Documents plugin did it gain context. His vision: ChatGPT Live should have access to all the plugins, tools, and browser use that Codex has, enabling users to reply to emails, schedule meetings, edit docs, and ship code during a live conversation. "Why build such a great voice assistant but have it not be able to do anything?"
https://x.com/petergyang/status/2077572198655754583

Peter Yang 指出了他眼中 OpenAI "最大的错失机会"：ChatGPT Live 和 Codex 是两个非常出色的产品，但它们之间没有沟通。他散步时用 ChatGPT Live 让它打开一个 Google Doc——它做不到。只有手动触发 Documents 插件后，它才获得了上下文。他的愿景是：ChatGPT Live 应该能访问 Codex 拥有的所有插件、工具和浏览器使用能力，让用户能在实时对话中回复邮件、安排会议、编辑文档和发布代码。"为什么打造了这么好的语音助手，却让它什么都做不了？"
https://x.com/petergyang/status/2077572198655754583

### Linear Head of Product Nan Yu
Nan Yu quote-tweeted something with a wry comment: "Excuse me, I thought you had to grind until your eyes bled and you forgot how to smile" — pushing back against hustle culture.
https://x.com/thenanyu/status/2077559703161213130

Linear 产品负责人 Nan Yu 转发了一条推文并讽刺道："不好意思，我以为你非得干到眼睛流血、忘了怎么笑才行"——这是在反驳奋斗文化。
https://x.com/thenanyu/status/2077559703161213130

### Meta Sr Director Madhu Guru (AI)
Madhu Guru proposed a name for that feeling when you realize something is AI-written: "semantic nausea," "uncanny prose valley," or "synthetic shudder." He also shared that he's consciously moved to using AI only during brainstorming, keeping final writing human — because AI-isms leak in otherwise.
https://x.com/realmadhuguru/status/2077413491586253025
https://x.com/realmadhuguru/status/2077414312180932668

Meta 高级总监 Madhu Guru（AI）为"发现某段文字是 AI 写的那种感觉"提出了几个名字："语义恶心"、"诡异散文谷"或"合成战栗"。他还分享说，他已有意识地只在头脑风暴阶段使用 AI，最终写作保持人工——否则 AI 的痕迹会渗入文字。
https://x.com/realmadhuguru/status/2077413491586253025
https://x.com/realmadhuguru/status/2077414312180932668

### Anthropic's Thariq (Claude Code)
Thariq distilled an ideal prompting technique into a simple formula: "thin prompts, thick artifacts + context, thin skills." He also quote-tweeted Boris Cherny's automation thread with: "software engineering is the profession of automation."
https://x.com/trq212/status/2077539537992229076
https://x.com/trq212/status/2077490092290253259

Anthropic 的 Thariq（Claude Code）将理想的提示技巧提炼为一个简单公式："薄提示，厚制品+上下文，薄技能。"他还转发了 Boris Cherny 的自动化推文并评论："软件工程就是自动化的职业。"
https://x.com/trq212/status/2077539537992229076
https://x.com/trq212/status/2077490092290253259

### Vercel CEO Guillermo Rauch
Guillermo shared Vercel Sandbox's growth metrics: DAUs growing at 100% month-over-month, 3.5M+ sandboxes created per day, and a best-in-class Active CPU pricing model. Powering customers include Notion, Airtable, Meta, Zapier, and CodeRabbit. He also highlighted use cases for Vercel's Web Analytics API — agents can now correlate visitors and custom events with deployment and performance data.
https://x.com/rauchg/status/2077559189015335019
https://x.com/rauchg/status/2077426190386946539

Vercel CEO Guillermo Rauch 分享了 Vercel Sandbox 的增长数据：日活跃用户月环比增长 100%，每天创建 350 万+沙箱，采用业界最佳的 Active CPU 定价模式。客户包括 Notion、Airtable、Meta、Zapier 和 CodeRabbit。他还强调了 Vercel Web Analytics API 的用例——agent 现在可以将访客和自定义事件与部署和性能数据关联起来。
https://x.com/rauchg/status/2077559189015335019
https://x.com/rauchg/status/2077426190386946539

### Box CEO Aaron Levie
Aaron Levie shared extensive notes from a dinner with IT leaders at large enterprises about agent adoption. Key themes: change management remains the biggest challenge; IT teams are embedding full engineers into business functions (internal FDE) to accelerate agent implementation; the tech function is becoming more central than ever; agents need their own roles and privileges (a non-trivial permissions problem); budgets for coding work far exceed those for non-coding knowledge work; companies are building multi-model systems to route tasks to appropriate models; and there's a clear expectation that all enterprise software must be headless — a "huge warning for existing software vendors."
https://x.com/levie/status/2077526010753581156

Box CEO Aaron Levie 分享了他与大型企业 IT 领导人的晚餐讨论笔记，主题是 agent 采用。关键主题：变革管理仍是最大挑战；IT 团队正在将全职工程师嵌入业务部门（内部 FDE）以加速 agent 实施；技术职能比以往任何时候都更加核心；agent 需要有自己的角色和权限（一个不简单的权限问题）；编程工作的预算远超非编程知识工作；公司正在构建多模型系统以将任务路由到合适的模型；以及一个明确的预期：所有企业软件都必须 headless——"对现有软件供应商来说是一个巨大的警告。"
https://x.com/levie/status/2077526010753581156

### Y Combinator CEO Garry Tan
Garry Tan quote-tweeted about skill files being portable and freeing users from frontier model dependency, calling it "a good thing." He also wryly suggested "we should just bring back the em dash" in response to the instruction to never use em dashes.
https://x.com/garrytan/status/2077626565517590618
https://x.com/garrytan/status/2077639502286250453

Y Combinator CEO Garry Tan 转发了一条关于 skill 文件可移植且能使用户摆脱前沿模型依赖的推文，称这是"一件好事"。他还讽刺地建议"我们应该重新使用 em dash"——回应了禁止使用 em dash 的指令。
https://x.com/garrytan/status/2077626565517590618
https://x.com/garrytan/status/2077639502286250453

### Zara Zhang (Builder)
Zara Zhang made two observations: (1) If you want agents to actually work inside a company, you have to design the company so they can read it — citing Shopify's approach of having no private chat function at all, only public channels, which had the side effect of enabling peer learning. (2) Because she never learned programming the traditional way, using coding agents has been purely an act of creativity and self-expression: "GitHub is basically my Substack."
https://x.com/zarazhangrui/status/2077417579837309040
https://x.com/zarazhangrui/status/2077388091044635010

Zara Zhang 提出了两个观察：(1) 如果你想让 agent 在公司内部真正发挥作用，你必须把公司设计成 agent 可以读取的样子——她引用了 Shopify 的做法，完全没有私聊功能，只有公开频道，副作用是促进了同伴学习。(2) 因为她从未以传统方式学习编程，使用编程 agent 纯粹是一种创造力和自我表达的行为："GitHub 基本上就是我的 Substack。"
https://x.com/zarazhangrui/status/2077417579837309040
https://x.com/zarazhangrui/status/2077388091044635010

### Peter Steinberger (OpenClaw)
Peter Steinberger quote-tweeted Boris Cherny's automation thread, amplifying the line about PR rejections being "failures of automation." He also agreed with a take that GPT-5.6 is "relentless."
https://x.com/steipete/status/2077544756390088777
https://x.com/steipete/status/2077614430658191825

Peter Steinberger 转发了 Boris Cherny 的自动化推文，强调了"PR 被拒绝是自动化的失败"这句话。他还赞同了一个观点：GPT-5.6 "不知疲倦"。
https://x.com/steipete/status/2077544756390088777
https://x.com/steipete/status/2077614430658191825

### Every CEO Dan Shipper
Dan Shipper published a new AI & I episode with Granola CEO Chris Pedregal. Key topics: why running a $1.5B AI startup is "a knife fight even when it's working"; Granola's view that meeting notes clones don't matter because notes were never the real prize; how Granola pre-generates millions of pre-meeting briefs that most people never open (but when they do, it's magical); and why Granola is betting on "bring your own agent" via API and MCP.
https://x.com/danshipper/status/2077410279474770229

Every CEO Dan Shipper 发布了新一期 AI & I 播客，嘉宾是 Granola CEO Chris Pedregal。关键话题：为什么运营一家 15 亿美元的 AI 创业公司"即使一切顺利也是一场刀战"；Granola 认为会议笔记克隆无关紧要，因为笔记从来不是真正的奖品；Granola 如何预生成数百万个会前简报，大多数人从未打开（但打开时体验极佳）；以及为什么 Granola 押注"自带 agent"策略。
https://x.com/danshipper/status/2077410279474770229

### OpenAI CEO Sam Altman
Sam Altman tweeted: "amazing to me that some people want the silent version" — likely referring to a product feature where some users prefer a silent mode.
https://x.com/sama/status/2077489177374208000

OpenAI CEO Sam Altman 发推说："有些人想要静音版本，这让我很惊讶"——可能指的是某个产品功能，部分用户更喜欢静音模式。
https://x.com/sama/status/2077489177374208000

## PODCASTS

### AI & I by Every — "The Founder of a $1.5B AI Company on What Comes After the First Wave of AI Apps"

**The Takeaway:** Meeting notes were never the real prize — Granola CEO Chris Pedregal believes the true battle is over owning the interface everyone uses to get work done in an AI-native world, and the company is betting on "bring your own agent" to get there.

Chris Pedregal, cofounder and CEO of Granola (the $1.5B AI meeting notes company), sat down with Every CEO Dan Shipper for a refreshingly candid conversation about what it's really like to run a startup that's working — and why that's still a knife fight.

Pedregal is strikingly honest about the challenges of scaling a product with "soul" from 12 to 70 people. He's wrestling with whether to kill traditional job titles (PM, designer, engineer) because the roles that actually matter — owning the aesthetic, owning the build, owning the strategy — don't map neatly onto org charts. "I'm always flirting with the idea of killing those," he says.

On competition: Pedregal's view is counterintuitive. When Microsoft, OpenAI, Notion, and Zoom all cloned Granola's core meeting notes feature, it barely affected growth. His explanation is that "meeting notes are not the end all, be all value that everyone's running after" — the real opportunity is "what interface we use for work and how we work in the AI native world." He describes his attitude as "easy come, easy go" about any lead, including his own.

The most concrete insight: Granola pre-generates millions of pre-meeting briefs — summaries of who you're meeting with and what you discussed last time — knowing most people will never open them. But when someone does (usually while running two minutes late to a meeting), the experience is magical because it's exactly what they need in that 15-second window. "It's like a handrail — you never notice it until you trip, and then it needs to be load-bearing."

On the future: Pedregal sees Granola's API and MCP support getting "a lot better" in the coming months. The strategy is to be best in the world at anything meeting-adjacent, and to be the best way to capture context that powers whatever agents users bring. "If you can make your life better using Granola context, you should, and we should make that really easy."

Dan Shipper also shared his own workflow: he spends almost all his time in Codex, using its in-app browser to handle everything from email to switching internet providers. He believes work is bifurcating into two surfaces — async delegation in Slack (multiplayer, proactive) and deep collaboration in agent-native apps like Codex (single-player, high-bandwidth). His prediction: "What builders do now, regular people will do in a few years."

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

**核心观点：** 会议笔记从来不是真正的奖品——Granola CEO Chris Pedregal 认为，真正的战斗是争夺每个人在 AI 原生世界中用来完成工作的界面，而公司正押注"自带 agent"策略来实现这一目标。

Granola（估值 15 亿美元的 AI 会议笔记公司）联合创始人兼 CEO Chris Pedregal 与 Every CEO Dan Shipper 进行了一场令人耳目一新的坦诚对话，讲述了一家"一切顺利"的创业公司真实的运营状态——以及为什么这仍然是一场刀战。

Pedregal 对将一款有"灵魂"的产品从 12 人扩展到 70 人的挑战异常坦诚。他正在纠结是否要废除传统的职位头衔（PM、设计师、工程师），因为真正重要的角色——负责美学、负责构建、负责战略——并不能整齐地映射到组织架构图上。"我一直在考虑废除它们，"他说。

关于竞争：Pedregal 的观点反直觉。当微软、OpenAI、Notion 和 Zoom 都克隆了 Granola 的核心会议笔记功能时，增长几乎没有受到影响。他的解释是："会议笔记不是每个人都在追逐的终极价值"——真正的机会是"我们用什么界面来工作，以及在 AI 原生世界中如何工作"。他对任何领先优势的态度都是"来得容易，去得也容易"。

最具体的洞察：Granola 预生成数百万个会前简报——关于你要和谁见面、上次讨论了什么的摘要——明知大多数人永远不会打开它们。但当有人打开时（通常是在会议开始前两分钟迟到时），体验是神奇的，因为它正好在那 15 秒的窗口期内提供了所需内容。"就像一个扶手——你平时注意不到它，直到你绊倒时，它才需要承重。"

关于未来：Pedregal 认为 Granola 的 API 和 MCP 支持在未来几个月会"变得好得多"。策略是在任何与会议相关的事情上做到世界最佳，并成为捕获上下文的最佳方式，为用户带来的任何 agent 提供动力。"如果你能通过使用 Granola 的上下文让你的生活变得更好，你就应该这样做，我们应该让这件事变得非常容易。"

Dan Shipper 还分享了他自己的工作流程：他几乎所有时间都在 Codex 中度过，使用其内置浏览器处理从邮件到更换网络供应商的一切事务。他认为工作正在分化为两个表面——Slack 中的异步委托（多人、主动）和 agent 原生应用（如 Codex）中的深度协作（单人、高带宽）。他的预测是："现在构建者做的事情，普通人在几年后也会做。"

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders