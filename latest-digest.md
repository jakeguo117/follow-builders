AI Builders Digest — June 7, 2026

## X/Twitter

### Swyx (swyx on X) — AI Engineer / Temporal / Cognition
Swyx 分享了一个比"总是用计划模式"更聪明的替代方案：把你的任务表述成一个问题，让模型有机会提出异议、评估想法的质量、提供替代方案，而不是盲目执行你嘴上说的（往往不等于你真正想表达的意思）。光是在 prompt 末尾加个问号就能做到。他还分享了 AI Engineer London 大会的趣事，包括 AGI 药丸和设计师 Vincent 再次挑战前沿能力测试。

Swyx offers a smarter alternative to "always use plan mode": frame your task as a question so the model can push back and rate the quality of the idea, rather than blindly executing what you said (which is often not what you meant). Literally just appending "?" to your prompt often does it. He also shared fun moments from AI Engineer London, including AGI pills and designer Vincent's frontier capability tests.

https://x.com/swyx/status/2063082950317486133
https://x.com/swyx/status/2063029941202239645
https://x.com/swyx/status/2063013079974367557

### Boris Cherny — Claude Code @ Anthropic
Boris 宣布 Claude Cowork 在未来一个月内翻倍了使用限制（5小时 rate limit）。他表示 Cowork 最适合那些对一个聊天来说太大的工作：跨几十个账号的研究、定期报告、整理收件箱和起草回复。鼓励大家趁这个月试试能帮自己卸下多少负担。

Boris announced doubled usage limits for Claude Cowork for the next month (5-hour rate limits). He says Cowork is at its best on work that's too big for a chat: research across dozens of accounts, recurring reports, triaging inboxes, and drafting replies. He encourages people to find out what it can take off their plate this month.

https://x.com/bcherny/status/2063028956211867837
https://x.com/bcherny/status/2063028954546733462

### Thibault Sottiaux — Codex & ChatGPT @ OpenAI
Thibault 观察到 Codex 的"纸面瑕疵"在减少，而采用率在攀升。他还指出一个关键洞察：更好的记忆 = 更短的 prompt = 每个 token 的效用更高。同时点赞了团队在 Codex 上的出色工作。

Thibault notes that Codex "papercuts" are decreasing while adoption is increasing. He also highlights a key insight: better memory = shorter prompts = more utility per token. He praised the team's incredible work on Codex.

https://x.com/thsottiaux/status/2062997876297609257
https://x.com/thsottiaux/status/2062997768470474765
https://x.com/thsottiaux/status/2062966625733861752

### Peter Yang — Product at Roblox
Peter 采访了一位没有 CS 学位、没有工程背景的开发者 mvanhorn，后者却为 Python 和 Go 等仓库贡献了大量代码。他分享了一套构建 AI 技能（skills）的 5 步法：给上下文、让触发变容易、加评估、加记忆、再建一个技能来编辑其他技能。完整教程在他的 YouTube 频道上。

Peter interviewed a developer with no CS degree or engineering background who has contributed to repos like Python and Go. He shared a 5-step framework for building AI skills: give it context, make it easy to trigger, add evals, add memory, and build a skill to edit other skills. Full walkthrough on his YouTube channel.

https://x.com/petergyang/status/2062959766314582064
https://x.com/petergyang/status/2062899832965255443

### Madhu Guru — Former Product Leader at Google (Gemini, Veo)
Madhu 指出了企业 AI 团队最常见的错误：根据今天模型的能力和价格来构建。他建议思考 6 个月后的情况——模型会更聪明、更便宜。应该围绕今天模型的弱点搭建"脚手架"，押注下一代模型会原生解决这些缺陷，然后继续推进前沿。这种反复识别和弥合模型差距的能力本身就会成为护城河。

Madhu identifies the most common mistake enterprise AI teams make: building for today's model capabilities and price points. He advises thinking 6 months out when models will be smarter and cheaper. Scaffold around today's model weaknesses, bet the next generation will natively solve for the scaffold, then push the frontier again. That ability to repeatedly identify and bridge model gaps becomes a moat of its own.

https://x.com/realmadhuguru/status/2063024953721827329

### Amjad Masad — CEO @ Replit
Amjad 几乎每天都会听到某种版本的故事——暗示 AI 编码的某种趋势。他宣布了 Replit x Shopify 的集成合作。另外感叹"疯狂的时代"。

Amjad hears a version of this story almost daily, implying a trend in AI coding. He announced the Replit x Shopify integration. Also remarked on "crazy times."

https://x.com/amasad/status/2063089288997491063
https://x.com/amasad/status/2063065480878063694
https://x.com/amasad/status/2062902535153910081

### Guillermo Rauch — CEO @ Vercel
Guillermo 宣布 agent 文件系统状态现在可以独立于 Sandbox 生命周期进行读写和挂载。Vercel 开发了一种新的虚拟存储基础设施方案，存储解耦但可附加到 Builds、Functions、Sandboxes 等。他还推广了 Skills API，称其为 agent 能力和扩展性的 npm 注册表——免费且开放。

Guillermo announced that agent filesystem state can now be read, written, and mounted independently of Sandbox lifecycle. Vercel developed a novel virtual storage infrastructure where storage is decoupled but attachable to Builds, Functions, Sandboxes, and more. He also promoted the Skills API as the npm registry for agent capabilities and extensibility—free and open.

https://x.com/rauchg/status/2063009510503932181
https://x.com/rauchg/status/2062954780465434779
https://x.com/rauchg/status/2062951924677128455

### Aaron Levie — CEO @ Box
Aaron 提出了一个有力的反叙事：编码是 AI 最有可能实现自动化的领域——有海量高质量训练数据、用户本身是技术人员、工作可验证、上下文已数字化。但即便如此，我们仍然需要人类工程师来监督 agent 才能让它们有效。如果连在这种理想条件下工程师依然供不应求，那么其他知识工作领域被取代的风险就更低了。Agent 让人能做得更多，但人不会消失。

Aaron offers a powerful counter-narrative: coding is the pinnacle of what AI could reasonably automate—vast training data, technical users, verifiable work, digitized context. Yet even with all that, we still need human engineers to oversee agents. If engineers remain in high demand under these ideal conditions, the risks are even lower for other knowledge work. Agents let people do far more, but the people don't go away.

https://x.com/levie/status/2063055332545540096

### Ryo Lu — Design @ Cursor
Ryo 展示了 Cursor 的新能力：在代码中设计现在和点击、聊天、按住 shift 多选一样简单。配合 Composer 2.5 效果最佳。

Ryo demonstrates that designing in code is now as easy as click, chat, hold shift to multi-select. Works best with Composer 2.5.

https://x.com/ryolu_/status/2063038983408615435

### Garry Tan — President & CEO @ Y Combinator
Garry 宣布了 GBrain 的新能力——让 OpenClaw 和 Hermes Agent 如虎添翼。他还推出了一个几个月前开始酝酿的大项目，旨在帮助人们学习构建更好软件的最佳技巧。另外评论了未来无人机战争的"必备品"。

Garry announced GBrain giving wings to OpenClaw and Hermes Agent. He also launched a big project he started working on months ago, aimed at helping people learn the best techniques to build better software faster. Also commented on a "must-have" for the future of drone warfare.

https://x.com/garrytan/status/2063157328753594505
https://x.com/garrytan/status/2063146456106795457
https://x.com/garrytan/status/2063146111960019028

### Matt Turck — VC @ FirstMark Capital
Matt 以幽默的方式回应了 X 上关于 VC 的负面故事——VC 也有关于创始人的恐怖故事。比如创始人明明知道我们能带来价值、思想领导和供应商折扣，却还是选择了估值更高的 term sheet。

Matt humorously responds to the bad stories about VCs spreading on X—VCs have horror stories about founders too. Like the founder who took another term sheet with a higher valuation despite their obvious ability to add value, thought leadership, and vendor discounts.

https://x.com/mattturck/status/2063035894790345200

### Nikunj Kothari — Partner @ FPV Ventures
Nikunj 预告明天上午会发布完整视频。他还引用了一条推文强调：没有创始人就没有 VC——这个永恒的提醒在 quote tweets 中得到了印证。

Nikunj teases a full video coming out tomorrow morning. He also quotes a tweet emphasizing the evergreen reminder that without founders, there are no VCs.

https://x.com/nikunj/status/2063143108070744492
https://x.com/nikunj/status/2062910976018854252

### Dan Shipper — CEO @ Every
Dan 预告了完整的 workflow 和 prompt 将很快提供给 Every 订阅者。另外为尼克斯队加油。

Dan teases that the full workflow and prompts will be available to Every subscribers soon. Also cheering for the Knicks.

https://x.com/danshipper/status/2063100104274280597
https://x.com/danshipper/status/2063015392092524924
https://x.com/danshipper/status/2062930113390354641

### Aditya Agarwal — General Partner @ South Park Commons
Aditya 分享了一个深刻的反省：有时候速度只是伪装成野心的不耐烦。

Aditya shares a profound reflection: sometimes speed is just impatience disguised as ambition.

https://x.com/adityaag/status/2062917028558639292
https://x.com/adityaag/status/2062917027103130013

### Claude (@claudeai) — Anthropic
Claude 官方宣布在接下来一个月内将 Claude Cowork 的使用限制翻倍。所有付费计划即日起至 7 月 5 日可用。下载 Claude 桌面应用即可试用 Cowork。

Claude officially announces doubled usage limits in Claude Cowork for the next month. Live now on all paid plans through July 5. Download the Claude desktop app to give Cowork a try.

https://x.com/claudeai/status/2063018339710992794
https://x.com/claudeai/status/2063018337567670285

## Podcasts

### AI & I by Every — The SaaS Apocalypse Is a Goldmine With Figma's Matt Colyer

**The Takeaway: SaaS 不会被 AI 消灭——反而会迎来黄金时代。因为 AI 让软件开发者的数量从 3000 万变成 10 亿，而维护一个真正好用的 SaaS 产品仍然比"自己写个凑合用的"要划算得多。**

Figma 开发者产品管理总监 Matt Colyer 与 Dan Shipper 展开了一场坦诚的对话，从"SaaS 末日论"出发，一路聊到 agent 的实际落地。Matt 的立场很明确：SaaS 不是末日，是金矿。原因是——全球开发者数量将从几千万膨胀到 10 亿，这意味着对好工具的需求只会更大。

Matt 用亲身经历说明了"自己动手"的局限性。两年前他写了个 Python 脚本做邮件 agent，结果发现维护 SMTP 版本升级、处理各种边缘情况比想象中痛苦得多。"我现在买的软件比以前更多了，因为我就想付钱让别人替我跑 agent。"

Dan 分享了他在 Codex 中搭建的邮件 workflow：一个本地运行的 app 每天扫描所有邮件，生成草稿，他通过语音（monologue）快速审阅和修改——已经连续四周保持 inbox zero，连助理都惊呆了。Matt 对此深有共鸣，并透露他的 trick 是用 Loom 录屏来假装自己在跟别人说话，这样对着电脑说话就没那么奇怪了。

关于 Figma 的 AI 策略，Matt 强调了两条腿走路：一是自建 agent（在 Infinite Canvas 上直接工作），二是通过 MCP server 支持第三方 agent。他特别看重"个性化"——一个 agent 的好坏往往取决于它是否理解你的设计系统。"没有设计系统概念的 assistant，生成的设计根本不能用。"

Matt 认为当前最大的瓶颈不是生成内容，而是审核内容。"Agent 能生产海量东西，但我们只有这么多双人眼去检查。" 他预测未来一年行业的核心问题将是：如何规模化地维护价值观和品质标准。

对于 PM 和设计师的职业前景，Matt 的建议出乎意料地传统：基础仍然重要。"就像数学课上学了计算器还是会学长除法一样。" 他真正看重的是好奇心——"能把工具用到极致的人，不是接受输出的人，而是不断追问'这是怎么拼起来的？'的人。"

> "软件公司 build 的不只是代码。我付钱用 Gmail 是因为——SMTP 版本需要升级的时候，我根本不想管，我只想收邮件。"

https://www.youtube.com/watch?v=kYKebKB3-d0

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders