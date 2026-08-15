AI Builders Digest — 2026年8月15日

## X / TWITTER

**Anthropic Claude Code 的 Boris Cherny** 分享了一项实验：让 Claude 接管应用日常维护。他在 Slack 频道中设置了日常例行任务，包括崩溃模糊测试、重复代码统一、死代码清理和抽象违规检查。几周内，这些例行任务在代码库中开启了 388 个 PR，其中 180 个在 Claude Code Review 和人工审核后合并。Claude 通常一次就能写对 PR；如果不对，团队会让 Claude 调整其例行程序，以便第二天做得更好。他邀请其他人尝试类似的工作流程。链接：https://x.com/bcherny/status/2088014489438621990

**OpenAI Codex 与 ChatGPT 的 Thibault Sottiaux** 推广了 ChatGPT 的 Google Docs/Sheets/Slides 集成，称这改变了他写文档、头脑风暴和校对的方式——直接在流程中聊天或口述修改。他还分享了一个有趣的用法：让 ChatGPT 通过 Computer History 插件"吐槽"你一天的电脑使用情况，结果既搞笑又引人深思——比如"你的 Mac 基本上是一台 3000 美元的 Slack 通知机"和"你的生产力系统就是狂点'清除'直到上帝介入"。链接：https://x.com/thsottiaux/status/2088103609477238858 和 https://x.com/thsottiaux/status/2088133823619895712

**Google VP Josh Woodward** 宣布了 3.7 Flash：更快、便宜 50%，而且只用了大约三周就完成了。链接：https://x.com/joshwoodward/status/2088016871710957587

**Replit CEO Amjad Masad** 发表了大胆预测："到明年，使用电脑将是可选的。工作将发生根本性改变。"他还指出 ARC-AGI-3 几乎仅通过添加编码 harness 就解决了，印证了"编码使 LLM 泛化"的预测。链接：https://x.com/amasad/status/2088110851681386864 和 https://x.com/amasad/status/2088124774824521786

**Box CEO Aaron Levie** 反驳了"AI 消灭工程师"的假设，称其"荒谬地错误"。他认为 AI 给了工程师一个加速开发的强力工具，他们的价值不仅保持关键，而且在许多领域实际上是上升的——因为工程师可以应用于比以前多得多的领域。无论是自动化药物发现、制造业还是更大的软件项目，都需要工程师。他还预测这一趋势将扩展到工程以外的领域：AI 让公司承担更多工作，从而需要更多专家来监督。链接：https://x.com/levie/status/2088105350201270529

**Meta AI 高级总监 Madhu Guru** 提出了两个观点。第一："Prompt 债务是新的技术债务。"随着每次模型更新，你应该至少削减 50% 的 prompt。大多数 AI 产品都有臃肿的 prompt，反而损害了产品质量——三个月后你的 system prompt 变成了一本小说，而模型本身已经更聪明了，你的微管理式 prompt 正在把它变成一台愚蠢的规则机器。第二：他吐槽 AI 行业都爱给产品起名叫"Studio"——他数了 20 多个，从 Google AI Studio 到 Copilot Studio 到 LangGraph Studio。链接：https://x.com/realmadhuguru/status/2087916590964851172 和 https://x.com/realmadhuguru/status/2088074515188519182

**Anthropic Claude Code 的 Swyx** 分享了一个巧妙的修改：受到 Matt Pocock 和 Thariq 的启发，他给 /align-me 做了一个批处理问题版本，而不是逐轮交互——和 spec decoding 同样的直觉，通过向前看 2-10 步来加速。他说这对设计探索效果"惊人地好"。链接：https://x.com/swyx/status/2088073777779515615

**FirstMark Capital 的 Matt Turck** 对 AI 创业生态做出了尖锐观察：现在你要么是"AI 原生火箭船"——听起来很有趣，直到你意识到这意味着永远在融资、估值越来越吓人、和其他火箭船进行生死搏斗抢客户、牺牲毛利率；要么基本上"被宣判死刑"，不管你的公司实际上有多好。他说这种情况已经持续了一段时间，但感觉刚刚又升级了一档。链接：https://x.com/mattturck/status/2087978386195103916

**South Park Commons 的 Aditya Agarwal** 分享了他与 Samir Kaji 的对话，讨论了什么造就伟大的公司以及 SPC 对未来的思考。链接：https://x.com/adityaag/status/2087959516545470973

**Zara Zhang** 指出一个讽刺现象：很多人以为 AI 编程会让工程师贬值，但实际上最抢手的职位全都带"工程师"三个字——forward-deployed engineer、design engineer、product engineer、growth engineer……链接：https://x.com/zarazhangrui/status/2088087765267386564

**Vercel CEO Guillermo Rauch** 预测"一条命令统治所有 token"将成为规模化使用编程 AI 的默认方式——涵盖 uptime、模型选择、更低成本、可观测性、ZDR 等。最酷的是这条命令可以配置所有现有的编码 harness，包括 Claude Code 和 Codex。他还推广了在 Vercel 上免费使用 GLM 5.2，速度高达 500 TPS。链接：https://x.com/rauchg/status/2088020529039180204 和 https://x.com/rauchg/status/2087982033499042205

**FPV Ventures 的 Nikunj Kothari** 对 Grok Bot 的发布发表了深思熟虑的看法：用户最终会想要一个掌握所有上下文的超级 agent，还是多个各自负责一小块任务的子 agent？如果把人比作 agent，Grok Bot 的设计很有道理——你可以按部门划分工具、上下文和结果。但如果你把 agent 当作 Jarvis，你会想要一个能搞定一切的主 agent，它可以创建和协调所有需要的 bot。他预测最终会走向一个主 agent 作为编排者，但会从窄范围开始。链接：https://x.com/nikunj/status/2087906119914340540

**Anthropic Claude Code 的 Cat Wu** 邀请营销、销售、财务、法务、运营等非工程岗位的用户与 Cowork 团队进行 15 分钟的 office hours，分享使用反馈以改进产品。链接：https://x.com/_catwu/status/2088006642189361564

**OpenAI CEO Sam Altman** 发布了 /ultrafast 模式。链接：https://x.com/sama/status/2088101491802243121

**Peter Yang** 分享了一个个人观察：他在处理家庭健康问题时，以为会用 AI 来研究病情，但实际上 AI 最有帮助的是应对医疗系统的官僚流程。他还向社区提问：现在人们写产品规格时，会包含什么内容使其对人类和 agent 都友好、简洁？链接：https://x.com/petergyang/status/2087946170274570385 和 https://x.com/petergyang/status/2088108304274960667

**Every CEO Dan Shipper** 正在为某个项目招聘，平均每分钟收到 2 份申请，来自 Citadel、OpenAI、Microsoft、Google、NASDAQ 等公司。链接：https://x.com/danshipper/status/2087995350745244083

**YC CEO Garry Tan** 主持了一场公民联盟聚会，接待了他希望成为加州下一任州长的 Xavier Becerra，并表示"我们可以让加州成为最好的双赢之地"。他还回应了"每个 bot 需要独立话题"的建议。链接：https://x.com/garrytan/status/2088066634074443901 和 https://x.com/garrytan/status/2088029937714565260

## PODCASTS

### No Priors — 与 CEO Erik Allebest 探讨 Chess.com 关于超人能力的启示

**核心要点：当机器在某个领域超越人类时，人类并不会放弃这个领域——反而会更投入。Chess.com 用 30 年的数据证明了这一点，而 AI 时代的其他行业也可以从中借鉴。**

Erik Allebest 在 2005 年以 55 美元从破产拍卖中买下了 chess.com 域名——当时几乎所有投资人都告诉他这是一个不可投资的利基爱好项目。20 年后，他建立了拥有超过 2.5 亿注册会员、年收入超过 2 亿美元的全球最大国际象棋平台。这段对话不只是关于国际象棋，更是关于一个根本性问题：当 AI 超越人类时，人类活动会发生什么？

**当机器成为超人后，人类反而更投入了。** 1997 年深蓝击败卡斯帕罗夫时，很多人预测国际象棋"完了"。事实恰恰相反。Allebest 说，早期 Stockfish 这样的引擎确实让棋局变得无聊——棋手们试图模仿计算机的"完美"风格，磨出枯燥的残局。但后来神经网络引擎（如 Leela Chess Zero）出现了，它们下棋激进、不按常理出牌，反而把棋局推向了更令人兴奋的方向。"计算机先让国际象棋变得有点无聊，然后让它变得前所未有的精彩。"

**AI 没有取代人类技能，而是加速了人类技能的获取。** Allebest 观察到，现在的 7 岁孩子已经能给特级大师制造麻烦。关键是工具让学习曲线变陡了——但前提是你仍然要投入重复练习。"你生命中任意一天乘以一千，就是你人生的样子。"每天做 5 道棋题，乘以一千就是 5000 道。AI 是极好的研究伙伴，但无法替代练习本身。

**Chess.com 正在把国际象棋的玩法搬到扑克上。** 他们推出了 Gambit 扑克平台，核心创新是"为评级而玩"而不是"为钱而玩"——就像国际象棋的 ELO 评级一样，扑克评级衡量你作为棋手的真实水平，而不是你能买多少筹码。"人们会像在乎钱一样在乎自己的扑克评级，因为它是你作为玩家价值的体现。"Allebest 说，输 100 美元他不太在乎，但输 100 个评级点会让他真的很不爽。

**对创始人的建议：** "现在创始人最大的诅咒之一就是市面上有太多创始人建议。"Allebest 和他的朋友走了所有"反常规"的路——没有斯坦福技术合伙人、没有融资、没有办公室、没有获客预算、选了一个小市场。他的建议很简单："倾听你的内心，想清楚你想让世界上出现什么，然后不计代价地去做。别再听别人告诉你该怎么做了。"

**关于 AGI：** Allebest 相信超人智能会到来，但他认为这更多是一个文化问题而非技术问题。"我们已经有核技术、有枪、有经济体系很长时间了，真正重要的是我们作为一个文化如何运用它们。"他担心太多钱流向了太少的人，"我不确定我们是怎么走到让不该掌控世界的人掌控世界的境地的。"

视频链接：https://www.youtube.com/@NoPriorsPodcast

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders