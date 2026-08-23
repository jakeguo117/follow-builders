# AI Builders Digest — 2026年8月23日

## X / TWITTER

---

**Swyx (swyx on X)** — AI engineer, smol.ai founder, Latent Space podcast co-host

Swyx 在播客访谈中坦言自己曾经对"Simulation is a new scaling law"嗤之以鼻，但采访到一半时他从半开玩笑变得非常严肃。他花了两年时间才真正理解为什么 Karpathy、李飞飞等人投资了 Smallville 团队——当时 Smallville 零商业应用，但如果你认真对待 RSI（递归自我改进），当模型自动化了越来越多的 ML 研究和 AI 工程后，最后的壁垒就是模拟人类和人类反馈。Simile 显然就是这个领域的团队，而且已经在 Fortune 100 公司找到 PMF。他说"从未如此高兴自己错了"。

另外，Swyx 宣布要"再杀一个 SaaS"——他的 Kill My SaaS 系列第一期结果将在下周公布。

🔗 [Tweet](https://x.com/swyx/status/2090948945753076141) | [Tweet](https://x.com/swyx/status/2090908959590740033)

---

**OpenAI Codex & ChatGPT 负责人 Thibault Sottiaux**

Thibault 宣布 Codex 的 banked reset 功能已上线——所有 ChatGPT Work 和 Codex 付费用户都可以使用。同时他承认本周部分用户的缓存命中率低于前几周的稳定状态，这可能导致使用额度消耗更快，团队正在调查并将在明天更新进展。

🔗 [Tweet](https://x.com/thsottiaux/status/2090964822422949999) | [Tweet](https://x.com/thsottiaux/status/2091033630147854385)

---

**AI 创作者 Peter Yang**

Peter Yang 评测了新的 AI 助手 Instinct，对它的 onboarding 体验印象深刻——连接 iMessages、Google Workspace 和 MCP 的过程非常顺滑，而且它比竞争对手更主动，连接 MCP 后会立即建议可以做的事。但他指出 Instinct 所有对话都在一个线程里，无法多线程并行，所以真实工作场景下他还是会选择 ChatGPT Work 和 Codex。此外他公开质疑 Instinct 索引和保留他的邮件却不允许删除的做法，表示在解决之前不会推荐给任何人。

🔗 [Tweet](https://x.com/petergyang/status/2090814910720835633) | [Tweet](https://x.com/petergyang/status/2090936583814025417)

---

**Meta AI 高级总监 Madhu Guru（前 Google Gemini/Veo 负责人）**

Madhu Guru 继续他的 eval 系列第五篇："平均值的暴政"。他警告团队不要把你精心设计的 eval 套件结果压缩成一个单一分数——这在 Gemini 早期就发生过。一个从 85%→89% 的摘要模型、80%→85% 的事实问答、但 70%→63% 的复杂金融分析的模型，单一分数会掩盖它在最前沿用例上的退步。他建议按优先级维护 eval 清单，找能看细节的人做判断，而不是追求抽象简化。

🔗 [Tweet](https://x.com/realmadhuguru/status/2090930137885774324)

---

**Anthropic Claude Code 团队成员 Thariq**

Thariq 分享了一个 Anthropic 内部最近很火的 skill：ELI5。用 `/eli5 <你想了解的东西>` 就能让 Claude 用"完全不懂这个主题的人"的视角，配合大图和少文字的 HTML artifact 来解释。他在考虑是否将其做成官方插件，目前可以通过 `claude plugin marketplace add anthropics/claude-plugins-community` 和 `claude plugin install eli5@claude-community` 安装试用。他个人喜欢用它来拆解问题，比如"这个模块怎么工作的"、"为什么做这个取舍"、"这次事故是什么原因"。

🔗 [Tweet](https://x.com/trq212/status/2090884854590382515) | [Tweet](https://x.com/trq212/status/2090884855798407576)

---

**Replit CEO Amjad Masad**

Amjad 转发了几个令人兴奋的 demo，包括"用手机就能赚钱"的案例，以及一个让他发出"🤯"的项目。具体内容未展开，但看起来都是 Replit 平台上用户构建的真实应用。

🔗 [Tweet](https://x.com/amasad/status/2090922626890031428) | [Tweet](https://x.com/amasad/status/2090845035537522925)

---

**Vercel CEO Guillermo Rauch**

Guillermo 宣布 v0 现在支持用户的 Grok 和 Codex 订阅，可以在 sandbox 里直接测试。另外他分享了一个疯狂的内部过程：他们用 `is-agenitic` 对 v0 循环跑分直到拿到 100/100，这个过程逼他们修复了不少差距。Python 团队也在快速进展中。

🔗 [Tweet](https://x.com/rauchg/status/2090953806624489501) | [Tweet](https://x.com/rauchg/status/2090858571613470919)

---

**Box CEO Aaron Levie**

Aaron Levie 表示当前 AI 的进步速度是科技史上任何时期都无法比拟的——模型在同等任务上越来越便宜、越来越通用、越来越快，而且在几乎每个领域都在深入。当智能变得"便宜到无法计量"时，最大的机会就是将 AI 扩散到整个经济中。这对应用层 AI 公司来说是巨大的顺风，现在是创业公司抓住这个机遇的伟大时刻。

🔗 [Tweet](https://x.com/levie/status/2091038566260539574)

---

**Y Combinator 总裁 Garry Tan**

Garry Tan 发表了几个观点性推文：批评"奢侈信念工业综合体"依然活跃；对一位 UC Berkeley 计算机系教授的观点表示震惊；以及再次指出亚裔美国人被系统性抹除的现象（他称之为"例证 #107492"）。

🔗 [Tweet](https://x.com/garrytan/status/2090889728719777952) | [Tweet](https://x.com/garrytan/status/2090801607894344047)

---

**FirstMark Capital 投资人 Matt Turck**

Matt Turck 发了一个幽默 meme：VC 看到自己 seed 阶段错过的公司又完成一轮巨额融资时的表情。

🔗 [Tweet](https://x.com/mattturck/status/2090870362007281984)

---

**Zara Zhang（Builder，Follow Builders 作者）**

Zara 分享了她作为 builder 的核心理念：每天出现、永远在发布、不要害怕一遍又一遍地重复自己。

🔗 [Tweet](https://x.com/zarazhangrui/status/2090702627206214081)

---

**FPV Ventures 合伙人 Nikunj Kothari**

Nikunj 分享了一个很实用的真实案例：他女儿上幼儿园了，每天的菜单在一个结构混乱的随机网站上。他让 Claude Code 通过网络请求找到了那个 API（恰好无需认证），搞清楚了正确的格式，然后接入他们现有的 Hermes bot。现在每天早上家里的 Home bot 会告诉他们早餐和午餐吃什么，方便准备食物。他还预告了与 Todd Saunders 的新一期播客。

🔗 [Tweet](https://x.com/nikunj/status/2090884422178627624)

---

**OpenClaw 创始人 Peter Steinberger**

Peter 在 Berkeley 的 Agentic AI Summit 上发表了演讲，主题是"No Doors for Agents"——关于 agent 如何应对那些没有 API、没有文档、没有"门"的真实世界环境。同时他预告即将发布一个新 skill。

🔗 [Tweet](https://x.com/steipete/status/2090898421108605078)

---

**Every CEO Dan Shipper**

Dan Shipper 转发了某个内容并配文"gang gang"，未提供更多细节。

🔗 [Tweet](https://x.com/danshipper/status/2090860697504653480)

---

**South Park Commons 合伙人 Aditya Agarwal（前 Dropbox CTO）**

Aditya 分享了与 Sridhar Ramaswamy（Snowflake CEO）在 SPC 的完整访谈，并评论说"前沿模型竞赛才刚刚开始"。

🔗 [Tweet](https://x.com/adityaag/status/2090814574400307585)

---

**Claude 官方账号**

Claude 官方发布了 Claude Security 的新能力：将 Claude Security 指向一个 GitHub repo，Mythos 就会扫描漏洞，追踪跨文件的数据流并推理组件间的交互方式。每个发现都附带 CWE 分类、置信度和严重性评级，以及建议的修复方案。这些建议补丁可以直接在 Claude Code on the web 中打开，使用团队现有的模型。扫描按标准 token 用量计费。此外 Anthropic 正在与合作伙伴将 Mythos 5 集成到他们的安全产品中，新的 Defender Advantage Fund 为开源安全提供 3500 万美元的 credits，Cyber Verification Program 也将在未来几周扩展。

🔗 [Tweet](https://x.com/claudeai/status/2090852316328902930) | [Tweet](https://x.com/claudeai/status/2090852318527033804) | [Tweet](https://x.com/claudeai/status/2090852320128938319)

---

## PODCASTS

---

### No Priors — What Chess.com Teaches Us About Superhuman Capabilities, with CEO Erik Allebest

**核心观点：当机器在某个领域超越人类之后，人类对这个领域的热情不降反升——关键不在于工具本身，而在于文化如何定义"参与"和"精通"。**

Erik Allebest 在 2005 年以 5.5 万美元从破产拍卖中买下 chess.com 域名时，几乎所有投资人都告诉他这是一个"不可投资的小众爱好项目"。二十年后，chess.com 拥有超过 2.5 亿注册会员、年收入超过 2 亿美元，使命是让 10 亿人下棋——尽管计算机在三十年前就已经在象棋上碾压人类了。

这个故事的特别之处在于它违背了几乎所有硅谷的创业教条：没有融资（一开始融不到，后来不需要）、没有烧钱获客、选了一个"太小"的市场、从 2007 年上线后 18 个月内就开始盈利。Allebest 的反思很直接："如今做创始人的一个诅咒就是有太多创始人建议了。二十年前的标准剧本是：从斯坦福找个技术合伙人、融一大笔钱、租办公室、打大市场、花钱买用户。我们做的每一件事都和这个剧本相反。"

关于 AI 与人类技能的关系，Allebest 提供了一个难得的长周期观察。Deep Blue 击败 Kasparov 后，很多人预言象棋"结束了"，但事实恰恰相反。有意思的是，计算机先让象棋变得无聊——Stockfish 太完美了，所有棋手都试图模仿它，比赛变得枯燥。但神经网络（Leela Chess Zero）出现后，AI 开始下出激进而非常规的棋，反而把比赛推向了前所未有的精彩。他说："人类根本上是想做人类的事——人与人的竞争、人创造东西、人解决问题。机器在某些方面更强，但在象棋这件事上，它把人类推向了更高的水平。"

作为拥有数百万人在每个等级犯错和改进的数据平台，Allebest 说人类获取专长的方式"不幸又幸运地"很简单：重复。做 puzzle、复盘错误、训练。"没有捷径可以绕过练习本身，工具可以缩短路径，但你必须把重复输入大脑，就像训练神经网络一样——只不过我们不能并行处理。"

chess.com 现在把象棋的玩法带到了扑克上——新推出的 Gambit 平台核心是 rating 系统。"你有多强？不是你能不能买最多的筹码，不是你能不能开 bot，不是你能不能偷最多的钱。" Allebest 认为人们最终会像在乎钱一样在乎自己的扑克 rating，因为"它是你作为玩家价值的体现。输 100 美元我不太在乎，但输 100 个 rating 点真的让我很难受。"

他对 AGI 的态度是审慎的乐观："我确实相信超人类智能会以越来越快的速度前进。如果不在它和人类互动的方式上设好护栏，会有点可怕。但技术问题其实是文化问题——核技术、枪支、经济体系，我们早就有了。真正重要的是文化怎么使用它。"

🔗 [观看完整访谈](https://www.youtube.com/@NoPriorsPodcast)

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders