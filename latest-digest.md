AI Builders Digest — June 11, 2026

## X/TWITTER

### Andrej Karpathy (karpathy on X)

Andrej Karpathy is absolutely thrilled about Claude Fable 5, calling it a "major-version-bump-deserving step change forward" on par with Claude 4.5 from last November. He emphasizes that the model qualitatively excels on long, difficult problem-solving sessions, and he feels the temptation to stop looking at code entirely — though he warns against doing that in production. Karpathy notes that Jevon's paradox is kicking in: as software becomes easier to produce, his own demand for software is growing substantially. He encourages people to "free your mind" and build ambitious things — explainers, visualizers, dashboards, bespoke single-use apps — because the model really "gets it" in a way previous versions didn't.

Andrej Karpathy 对 Claude Fable 5 的发布感到非常兴奋，称其是"值得大版本号的阶跃式进步"，与去年 11 月的 Claude 4.5 同等级别。他强调该模型在长时间、高难度的编程会话中表现出色，甚至让他产生了"不再看代码"的冲动——不过他警告说在生产环境中千万别这么做。Karpathy 指出杰文斯悖论正在显现：软件越容易生产，他自己对软件的需求反而大幅增长。他鼓励大家"解放思维"，去构建各种有雄心的项目——解释器、可视化工具、仪表盘、定制的单次应用——因为模型真的"懂"了。

https://x.com/karpathy/status/2064409694761054332

### Swyx (swyx on X)

Swyx dropped a practical tip: right now, Claude Code on Fable 5 is not pay-per-use, so you should absolutely ask it to "review my code for issues" — and be prepared to be horrified by what you shipped without a "Fable Check." He also notes that Anthropic went from signing a deal with NVIDIA to launching a Mythos-class model GA in just 34 days, which he frames as a testament to building on NVIDIA's stack. He also shared more benchmark charts.

Swyx 分享了一个实用技巧：目前 Claude Code 在 Fable 5 上还不是按用量收费，所以你应该让它"审查你的代码中的问题"——然后准备好为你没有经过"Fable 检查"就上线的代码感到震惊。他还提到，Anthropic 从与 NVIDIA 签署合作协议到推出 Mythos 级别模型的正式版，只用了 34 天，他认为这证明了在 NVIDIA 的堆栈上构建的效率。

https://x.com/swyx/status/2064492823781789969
https://x.com/swyx/status/2064421542503797186
https://x.com/swyx/status/2064415059003248694

### Josh Woodward (joshwoodward on X)

Google VP Josh Woodward simply quoted Karpathy's tweet about growing demand for software, adding his own agreement: "The demand for software is going to be off the charts."

Google VP Josh Woodward 引用了 Karpathy 关于软件需求增长的推文，并表示赞同："对软件的需求将会爆棚。"

https://x.com/joshwoodward/status/2064509357216428171

### Boris Cherny (bcherny on X)

Boris Cherny, who works on Claude Code at Anthropic, describes Fable 5 as the biggest step up since Opus 4.5. He says the model has graduated from being a coding agent to a "thought and design partner" — it has judgment, taste, and dimensionality. His first "aha" moment came when he asked Fable to debug something: it was methodical, took measurements, added logs, and verified the fix before declaring victory, without any prompting to do so. He calls this "big model smell." Cherny also emphasizes the importance of self-verification loops, especially for long-running model sessions, and points to Delba Oliveira's breakdown of how that works.

在 Anthropic 从事 Claude Code 工作的 Boris Cherny 形容 Fable 5 是自 Opus 4.5 以来最大的进步。他说这个模型已经从编码代理升级为"思考和设计伙伴"——它具备了判断力、品味和维度感。他的第一个"顿悟时刻"是让 Fable 调试代码：它有条不紊地测量、添加日志、验证修复，然后才宣布胜利，这一切都不需要提示。他称之为"大模型气味"。Cherny 还强调了自验证循环的重要性，特别是对于长时间运行的模型会话。

https://x.com/bcherny/status/2064431111154053187
https://x.com/bcherny/status/2064426115255730578

### Thibault Sottiaux (thsottiaux on X)

OpenAI's Thibault Sottiaux (Codex & ChatGPT) joked he wants his "1% royalty fee" from a product that was built using his earlier idea. He also polled his followers on whether they use Codex /goal occasionally or as their main workflow, and shared that he uses Codex "like an orchestra, one /goal at a time."

OpenAI 的 Thibault Sottiaux（负责 Codex 和 ChatGPT）开玩笑说，有人用他之前的想法做成了产品，他想要"1% 的版税"。他还做了一个投票，问大家是把 Codex /goal 当作偶尔使用的工具还是主要工作方式，并分享说他"像指挥管弦乐队一样使用 Codex，一次一个 /goal"。

https://x.com/thsottiaux/status/2064572276180484475
https://x.com/thsottiaux/status/2064308436133716008
https://x.com/thsottiaux/status/2064307859903447396

### Peter Yang (petergyang on X)

Peter Yang shared his experience building an F-Zero racing game with Fable 5, including the exact prompt he used. He noted that "browser use is really slowing Fable down" for him, and also asked a question on everyone's mind: "wtf does 'big model smell' mean" — referring to Boris Cherny's terminology.

Peter Yang 分享了他用 Fable 5 构建 F-Zero 赛车游戏的经历，包括他使用的完整提示词。他注意到"浏览器使用真的拖慢了 Fable 的速度"，还问了一个大家都很关心的问题："'大模型气味'到底是什么意思"——指的是 Boris Cherny 的术语。

https://x.com/petergyang/status/2064577126385459265
https://x.com/petergyang/status/2064563041166090672
https://x.com/petergyang/status/2064550073594446059

### Thariq (trq212 on X)

Thariq, who works on Claude Code at Anthropic, was at the "Code w/ Claude Tokyo" event and encouraged people to say hi. He also echoed the Fable 5 sentiment, calling it a "step-change in models" and urging people to "be more ambitious."

在 Anthropic 从事 Claude Code 工作的 Thariq 正在参加"Code w/ Claude Tokyo"活动，欢迎大家来打招呼。他也呼应了 Fable 5 的发布，称其为"模型的阶跃式变化"，并鼓励大家"更有野心一些"。

https://x.com/trq212/status/2064521202622960058
https://x.com/trq212/status/2064437561930682672

### Amjad Masad (amasad on X)

Replit CEO Amjad Masad announced that users can try Claude Mythos at 25% off on Replit, making Anthropic's latest model more accessible to developers on the platform.

Replit CEO Amjad Masad 宣布，用户可以在 Replit 上以 75 折的价格试用 Claude Mythos，让更多开发者能接触到 Anthropic 的最新模型。

https://x.com/amasad/status/2064411791015432466

### Guillermo Rauch (rauchg on X)

Vercel CEO Guillermo Rauch announced a new Vercel CLI feature that allows users to create AI Gateway API keys, cap spend with a `--budget` flag, and set a `--refresh-period` for quotas — "virtual credit cards for AI tokens." He also shared a fun demo where Opus wrote a VM and then Mythos verified it.

Vercel CEO Guillermo Rauch 宣布了 Vercel CLI 的新功能：用户可以创建 AI Gateway API 密钥，使用 `--budget` 标志设置支出上限，以及设置 `--refresh-period` 配额——他称之为"AI token 的虚拟信用卡"。他还分享了一个有趣的演示：Opus 写了一个虚拟机，然后 Mythos 验证了它。

https://x.com/rauchg/status/2064551967461114111
https://x.com/rauchg/status/2064419055726215438

### Alex Albert (alexalbert__ on X)

Anthropic researcher Alex Albert shared four tips for using Fable 5 effectively: (1) give it bigger, more ambitious tasks; (2) use xhigh/high effort as default; (3) rewrite your skills and CLAUDE.md files — instructions written for prior models anchor Fable to stale patterns; (4) move from providing tasks to providing objectives — describe what "done" looks like and let Fable find the path. He also reflected on his time at Anthropic, calling Fable 5 one of the few "step-change" launches alongside Opus 3, Sonnet 3.5, and Opus 4.5. "With Fable, the model stopped feeling like a tool I direct and started feeling more like something I collaborate with."

Anthropic 研究员 Alex Albert 分享了有效使用 Fable 5 的四个技巧：(1) 给它更大、更有雄心的任务；(2) 默认使用 xhigh/high effort；(3) 重写你的 skills 和 CLAUDE.md 文件——为之前模型写的指令会让 Fable 受限于旧模式；(4) 从提供任务转向提供目标——描述"完成"的样子，让 Fable 自己找路径。他还回顾了在 Anthropic 的经历，称 Fable 5 是少数几个"阶跃式变化"的发布之一，与 Opus 3、Sonnet 3.5 和 Opus 4.5 并列。"有了 Fable，模型不再感觉像是我指挥的工具，而更像是我合作的对象。"

https://x.com/alexalbert__/status/2064467657483829441
https://x.com/alexalbert__/status/2064394410004304003

### Aaron Levie (levie on X)

Box CEO Aaron Levie shared a thoughtful thread on the state of applied AI. He argues that there remains an "insanely large gulf" between model capabilities and what it takes to apply them to specific corporate workflows — much of which comes down to data access, change management, and implementation work. He quotes a post about how "an application earns its place in the untrainable corner by doing unglamorous work: arranging a company's private reality so a model can act on it." Levie believes two things can be true simultaneously: frontier models will continue to improve dramatically, and there will be a vast ecosystem of software and services companies that emerge to bring those models to real enterprises. He also weighed in on benchmark methodology, arguing that compute-normalized benchmarks are the only logical path forward given how much inference-time compute affects performance.

Box CEO Aaron Levie 分享了一篇关于应用 AI 现状的深度思考。他认为，模型能力与将其应用于特定企业工作流程之间仍然存在"巨大的鸿沟"——其中很大一部分来自数据访问、变更管理和实施工作。他引用了一篇文章的观点："一个应用通过做不显眼的工作来赢得其在'不可训练角落'的位置：整理公司的私有现实，让模型能够对其采取行动。"Levie 认为两件事可以同时成立：前沿模型将继续大幅改进，同时会有一个庞大的软件和服务公司生态系统出现，将这些模型带给真正的企业。他还就基准测试方法论发表了看法，认为计算标准化的基准测试是唯一合理的路径，因为推理时的计算量对性能影响巨大。

https://x.com/levie/status/2064569513023328268
https://x.com/levie/status/2064396746953023647
https://x.com/levie/status/2064379199629181139

### Garry Tan (garrytan on X)

YC CEO Garry Tan called Fable 5 "the biggest model energy I've ever seen." He also shared a more relatable moment: while trying to fix GStack, he ran into an issue with Fable 5 and let out a "long sigh." Separately, he posted a politically charged message about San Francisco politics.

YC CEO Garry Tan 称 Fable 5 是"我见过的最大的模型能量"。他还分享了一个更接地气的时刻：在尝试修复 GStack 时，他在 Fable 5 上遇到了问题，发出了"长长的叹息"。另外，他还发了一条关于旧金山政治的内容。

https://x.com/garrytan/status/2064573857911152710
https://x.com/garrytan/status/2064559225859416186
https://x.com/garrytan/status/2064519190061666393

### Zara Zhang (zarazhangrui on X)

Zara Zhang shared an insight about non-technical people using coding agents: the barrier isn't the interface (chatting is the easiest UI), but that people don't know what to ask for. A blank chat box assumes you know what's possible — most people don't. She was impressed by Town's onboarding process, where the agent proactively suggests workflows rather than waiting for instructions. She also announced a virtual talk on her vibe coding process, covering how a non-technical person managed to get 30K GitHub stars.

Zara Zhang 分享了关于非技术人员使用编码代理的见解：障碍不在于界面（聊天是最简单的 UI），而在于人们不知道要问什么。一个空白的聊天框假设你知道什么是可能的——但大多数人不知道。她对 Town 的 onboarding 过程印象深刻，代理会主动建议工作流程，而不是等待指令。她还宣布将举办一场关于她的 vibe coding 流程的线上讲座，分享一个非技术人员如何获得 3 万个 GitHub star。

https://x.com/zarazhangrui/status/2064587398529606082
https://x.com/zarazhangrui/status/2064486120386379950

### Nikunj Kothari (nikunj on X)

FPV Ventures partner Nikunj Kothari shared a creative workflow: he listened to an episode of Invest Like the Best about S-curves, dumped the transcript into Claude with research mode, and had Fable one-shot a website (escurves.com) that visualizes all the S-curves from the last 200 years, their inflection points, and commentary on whether each was a bubble. He shared the exact prompt he used — a great example of the new workflows Fable enables.

FPV Ventures 合伙人 Nikunj Kothari 分享了一个创意工作流程：他听了 Invest Like the Best 关于 S 曲线的播客，把文字稿扔进 Claude 的研究模式，然后让 Fable 一次性生成了一个网站 (escurves.com)，展示了过去 200 年的所有 S 曲线、它们的拐点以及关于每个是否是泡沫的评论。他分享了他使用的确切提示——这是 Fable 所支持的新工作流程的一个绝佳例子。

https://x.com/nikunj/status/2064508462034501997
https://x.com/nikunj/status/2064506504888373758

### Dan Shipper (danshipper on X)

Every CEO Dan Shipper announced the Fable 5 release with a "VIBE CHECK" and shared a link to Every's in-depth review after a week of testing. He also promoted the corresponding YouTube video.

Every CEO Dan Shipper 宣布了 Fable 5 的发布，并分享了 Every 经过一周测试后的深度评测链接。他还推广了相应的 YouTube 视频。

https://x.com/danshipper/status/2064395458777108707
https://x.com/danshipper/status/2064395167658860859
https://x.com/danshipper/status/2064398724495737180

### Aditya Agarwal (adityaag on X)

South Park Commons GP and Dropbox ex-CTO Aditya Agarwal shared a moment of investor pride, saying "these are the moments that remind you why you fund startups to do important things."

South Park Commons GP、前 Dropbox CTO Aditya Agarwal 分享了一个投资者感到自豪的时刻，说"这些时刻提醒你为什么要资助初创公司去做重要的事情。"

https://x.com/adityaag/status/2064391655453802773

### Claude (claudeai on X)

The official Claude account announced that Claude Fable 5 is available everywhere today, while Claude Mythos 5 is initially restricted to Glasswing partners. They explained that Mythos 5 shares the same underlying model as Fable 5 but with safeguards lifted in some areas, and is being launched for a small group of cyber defenders and critical infrastructure providers. They intend to expand access to Mythos 5 through a broader trusted access program for defensive cybersecurity and biomedical research.

Claude 官方账号宣布 Claude Fable 5 现已全面上线，而 Claude Mythos 5 最初仅限 Glasswing 合作伙伴使用。他们解释说，Mythos 5 与 Fable 5 共享相同的底层模型，但在某些领域取消了安全限制，目前面向一小部分网络防御者和关键基础设施提供商推出。他们计划通过更广泛的信任访问计划，将 Mythos 5 的访问权限扩大到防御性网络安全和生物医学研究领域。

https://x.com/claudeai/status/2064394160522559632
https://x.com/claudeai/status/2064394159318782217
https://x.com/claudeai/status/2064394158056386684

## PODCASTS

### AI & I by Every — "We Automated Everything With AI and Tripled Our Headcount"

**The Takeaway:** Even the most AI-native companies are finding that automation creates *more* human work, not less — and the key to staying relevant isn't fighting the models, it's riding them.

Every CEO Dan Shipper sits down with his COO Brandon to unpack a paradox he's been living: Every has fully embraced AI and agents across every function, yet the company has grown from 4 to 30 people since the GPT-3 days. They're hiring more, not less. Shipper argues that the popular narrative — AI will eliminate white-collar jobs — is the wrong read. Instead, what's happening is that AI makes "yesterday's expert competence cheap." Anyone can now produce decent code, writing, or design with a prompt. But this floods the zone with work that's "close but not quite right," which actually *increases* demand for experts who can curate, fix, and build systems around the AI output.

Shipper's core insight: "The further away an agent gets from a human, the less valuable it is." The human connection — steering, reviewing, deciding what matters — is the irreplaceable layer. He also takes aim at CEOs who lay off workers and blame AI, calling that narrative self-serving and often a cover for poor management or strategy shifts. His advice? "If you just ride the models, you're going to be fine." Learn the new tools as they come out, and you'll find you can do more fulfilling work, not less.

One memorable moment: Shipper describes the writing process for his 8,000-word essay. He would monologue his thoughts into a transcript, ask Claude to help him articulate what he was really trying to say, and then have Codex turn the latest draft into a podcast he could listen to on his walk to work. "That would be completely impossible otherwise," he says — a meta example of his own thesis.

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders