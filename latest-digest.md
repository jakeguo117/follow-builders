AI Builders Digest — Wednesday, July 22, 2026

## X / TWITTER

**Swyx (swyx on X) — AI engineer, Cognition, Temporal, AI Engineer, Latent Space**

Swyx highlighted a notable trajectory comparison analysis buried in the RLM paper from Alex Zhang and Omar Khattab. He explains an open secret of frontier model training: even without training on test data, you can effectively cheat by training on test lookalikes, enabling goal-seeking on almost any benchmark. However, when models are released as open weights, 99% of the time you don't get the datasets or RL environments that would reveal such training. Alex and Omar apply standard NLP distance metrics on hidden trajectories as a preliminary exploration, finding that RLMs can generalize to unseen tasks sharing latent structure from training.

Swyx 提到RLM论文中藏着一个值得关注的轨迹对比分析。他解释了前沿模型训练中一个公开的秘密：即使不直接在测试集上训练，也可以通过训练"测试集仿冒品"来作弊，从而在几乎任何基准测试上达成目标分数。但模型以开放权重发布时，99%的情况下你不会拿到能暴露这种训练的数据集或RL环境。Alex和Omar尝试对隐藏轨迹应用标准NLP距离度量，初步发现RLM可以泛化到训练中未曾见过但共享潜在结构的任务。

https://x.com/swyx/status/2079411861150429402

**OpenAI Codex & ChatGPT engineer Thibault Sottiaux (thsottiaux on X)**

Thibault Sottiaux posted a short but emphatic note: "Never a dull moment when you work at OpenAI. Absolutely incredible place." The tweet received 3,672 likes and 1,310 replies, suggesting something significant may be happening internally at OpenAI.

Thibault Sottiaux 发了一条简短但意味深长的推文："在OpenAI工作永远不会无聊。绝对不可思议的地方。"这条推文获得了3672个赞和1310条回复，暗示OpenAI内部可能正在发生重要的事情。

https://x.com/thsottiaux/status/2079355529101705264

**Peter Yang (petergyang on X) — AI tutorials & interviews**

Peter Yang shared a practical agentic pattern from Thariq at Anthropic: use one agent to do the work and another to review it against a rubric. For subjective tasks like evaluating video shorts, you can't rely on deterministic answers, so you need a separate verification agent with a rubric. Thariq calls this "self-preferential bias" — when a model prefers its own output, it's more lenient in verifying it.

Peter Yang 分享了一个来自Anthropic的Thariq的实用agent模式：用一个agent做工作，用另一个agent按评分标准审查。对于像评估短视频这样的主观任务，你无法依赖确定性答案，所以需要一个独立的验证agent配合评分标准。Thariq称之为"自我偏好偏差"——当模型偏好自己的输出时，它在验证时会更加宽容。

https://x.com/petergyang/status/2079257646939742542

He also made a bold prediction: banning Chinese models will be the same self-own as banning Chinese EVs, receiving 1,019 likes.

他还做了一个大胆的预测：禁止中国模型将和禁止中国电动车一样是自损行为，这条推文获得了1019个赞。

https://x.com/petergyang/status/2079273815004303477

**Meta Sr. Director of AI Madhu Guru (realmadhuguru on X)**

Madhu Guru made a sharp observation: "The road to AGI is paved with economically valuable tasks. That's why enterprise AI is one of the most important frontiers. It's where many of those tasks live." He also noted that four years after peak web3 and crypto tokenomics debates, the tokenomics debate that actually matters is open vs. closed weights, inference costs, and model routing.

Madhu Guru 提出了一个尖锐的观察："通往AGI的道路是由具有经济价值的任务铺就的。这就是为什么企业AI是最重要的前沿之一——那里正是这些任务所在的地方。"他还指出，在web3和加密代币经济学辩论达到顶峰四年后，真正重要的代币经济学辩论是开放权重与封闭权重、推理成本和模型路由。

https://x.com/realmadhuguru/status/2079369965569003691
https://x.com/realmadhuguru/status/2079227605031829700

**Anthropic Claude Code engineer Thariq (trq212 on X)**

Thariq noted a bug that was live for only a few minutes on his personal account while doing late-night coding. Nothing more substantive this week.

Thariq 提到他在深夜编码时遇到了一个只上线了几分钟的bug。本周没有更多实质内容。

https://x.com/trq212/status/2079105479125741675

**Replit CEO Amjad Masad (amasad on X)**

Amjad Masad asked a provocative question: "First physical product shipped by a coding agent?" — pointing to a future where AI agents don't just write code but orchestrate the entire production pipeline. He also quote-tweeted "Being cancelled is a choice" calling it a nice soundbite.

Amjad Masad 提出了一个引人深思的问题："第一个由编码agent交付的实体产品？"——指向一个未来：AI agent不仅编写代码，还能编排整个生产流程。他还引用转推了"被取消是一种选择"的说法，称其为一句好听的俏皮话。

https://x.com/amasad/status/2079282869063786541
https://x.com/amasad/status/2079401256448340378

**Vercel CEO Guillermo Rauch (rauchg on X)**

Guillermo Rauch dropped a powerful framing: "The big lesson from AI is that everything is code. A slide deck is code. Design is code. That cool promo video? Code. Excel automation? Code. The universe? Probably made of code too." This tweet received 4,300 likes and 400 retweets.

Guillermo Rauch 提出了一个强有力的框架："AI给我们的重要启示是：一切都是代码。幻灯片是代码，设计是代码，那个酷炫的宣传视频？代码。Excel自动化？代码。宇宙？大概也是代码构成的。"这条推文获得了4300个赞和400次转发。

https://x.com/rauchg/status/2079274102129304026

**Box CEO Aaron Levie (levie on X)**

Aaron Levie unpacked Cursor's new research on multi-model agentic systems, calling it the future. The key insight: a frontier model as planner/orchestrator with a cheaper workhorse model can reduce total token costs by 15x. "Few moments in a large task genuinely require frontier intelligence — the original decomposition, design decisions, and certain trade-offs. Once a frontier planner has collapsed the ambiguity into detailed explicit instructions, less expensive models simply have to follow it." Levie argues this is becoming the core design pattern for complex agents, and companies that can route to different models based on task phase will differentiate in the applied layer.

Aaron Levie 解读了Cursor关于多模型agentic系统的最新研究，称其为未来方向。核心洞见：用前沿模型作为规划者/编排者，搭配更便宜的劳动模型，可以将总token成本降低15倍。"大型任务中真正需要前沿智能的时刻很少——最初的分解、设计决策和某些权衡。一旦前沿规划者将模糊性消解为详细明确的指令，较便宜的模型只需执行即可。"Levie认为这正在成为复杂agent的核心设计模式，能够根据任务阶段路由到不同模型的公司将在应用层获得差异化优势。

https://x.com/levie/status/2079402164988895293

**YC President & CEO Garry Tan (garrytan on X)**

Garry Tan posted "Compute rules everything around me CREAM" — a play on the Wu-Tang Clan lyric, emphasizing that compute is the most valuable asset in the AI era. He also warned about California's "asset seizure tax," arguing it will only make the state more impoverished.

Garry Tan 发布了"计算统治一切 CREAM"——这是对Wu-Tang Clan歌词的改编，强调算力是AI时代最有价值的资产。他还警告加州"资产没收税"只会让该州更加贫困。

https://x.com/garrytan/status/2079240755135357356
https://x.com/garrytan/status/2079369233218306285

**FirstMark Capital VC Matt Turck (mattturck on X)**

Matt Turck posted a humorous meme: "OpenAI and Anthropic when a top free Chinese open source model drops" — capturing the competitive pressure Western AI labs feel when high-quality open-source models emerge from China.

Matt Turck 发布了一个幽默的meme："当一个顶级的免费中国开源模型发布时，OpenAI和Anthropic的反应"——捕捉了当高质量开源模型从中国出现时，西方AI实验室感受到的竞争压力。

https://x.com/mattturck/status/2079198838741458989

**Zara Zhang (zarazhangrui on X) — Builder, Harvard '17**

Zara Zhang proposed a novel two-round interview structure for the AI era: Round 1 is in-person with no AI allowed, testing domain expertise and knowledge on the fly. Round 2 is a project that must be done with AI (impossible without it), where the candidate is assessed not just on the result but also on the chat transcript with agents.

Zara Zhang 提出了一个面向AI时代的新型两轮面试结构：第一轮是现场面试，不允许使用AI，测试领域专业知识和临场反应能力。第二轮是一个必须用AI完成的项目（没有AI就无法完成），候选人不只看结果，还要看与agent的对话记录。

She also observed there are now two kinds of companies: those built before coding agents showed up (scrambling to retrofit) and those founded after. The second type is different from day one — teams under ten, work organized by projects not departments, each person closes their own loop, almost no internal meetings.

她还观察到，现在基本有两种公司：编码agent出现之前建立的公司（忙着改造）和之后成立的公司。第二种从第一天就不同——团队不到十人，按项目而非部门组织工作，每个人闭环完成自己的工作，几乎没有内部会议。

https://x.com/zarazhangrui/status/2079409165424799889
https://x.com/zarazhangrui/status/2079225776545968166

**FPV Ventures partner Nikunj Kothari (nikunj on X)**

Nikunj Kothari warned founders: just because there are no more "moats" in AI doesn't mean "scale and capital" become your main moat. He cites historical examples — Webvan, Groupon, MySpace, Yahoo, Blockbuster, Nokia — each structurally and capital-wise well-positioned, but eventually beaten by a company with a much better unique insight. "This is the needle founders have to thread: find a unique insight worth a 10+ year journey, while being prudent enough to not let capital & scale become a substitute for it."

Nikunj Kothari 警告创业者：AI领域没有"护城河"了，并不意味着"规模和资本"就成了你的主要护城河。他引用了历史案例——Webvan、Groupon、MySpace、Yahoo、Blockbuster、Nokia——每个在结构和资本上都处于有利地位，但最终被拥有更好独特洞察的公司击败。"这就是创业者必须把握的关键：找到一个值得十年以上旅程的独特洞察，同时保持足够的审慎，不让资本和规模成为它的替代品。"

https://x.com/nikunj/status/2079328912912355470

**Every CEO Dan Shipper (danshipper on X)**

Dan Shipper posted that Every is hiring a senior engineer to work on their agent, preference for people he knows. Not much else substantive this week.

Dan Shipper 发布说Every正在招聘一名高级工程师来开发他们的agent，优先考虑他认识的人。本周没有更多实质内容。

https://x.com/danshipper/status/2079331654359818503

**OpenAI CEO Sam Altman (sama on X)**

Sam Altman quote-tweeted something with "it is good now!" — receiving 2,820 likes. No further context provided.

Sam Altman 引用转推了一条消息，说"现在已经很好了！"——获得了2820个赞。没有提供更多背景。

https://x.com/sama/status/2079258683884917013

## PODCASTS

**No Priors — Travel Through the Lens of AI with Booking.com CEO Glenn Fogel**

**The Takeaway:** Booking Holdings CEO Glenn Fogel doesn't believe in moats — he believes in relentless innovation, and he's betting that AI-powered travel agents will be the next great leap for the $186B travel giant.

In this candid conversation, Fogel — a 27-year Booking veteran who joined when Priceline was worth a few hundred million dollars and helped grow it to a $180B peak — shares a contrarian perspective on AI disruption in travel. While Silicon Valley was quick to declare travel companies dead when OpenAI launched ChatGPT with travel features, Fogel was unbothered. "There is no such thing as a moat," he says flatly. "Today, we have a competitive advantage on areas. Absolutely. But those can go away tomorrow."

The real story is what Booking is building. Fogel demos Penny, Priceline's agentic AI system, with a real-world example: planning a complex family trip to Europe with multiple cabins, different departure cities, and frequent flyer mile optimization. Penny asked clarifying questions, made recommendations, and handled the domino effect of travel logistics. "It was wonderful," Fogel says. Adoption has doubled every month, and while the absolute numbers are still small against Booking's $186B in annual travel volume, the trajectory is clear.

Fogel also reveals that AI has already reduced customer service costs by ~10% while improving satisfaction. But he's careful about the human element: "Some customers want a human being." Booking is investing ~$700M this year in AI and platform improvements, with a focus on upskilling employees. "I feel a real obligation for that," he says, noting that government retraining programs historically haven't worked well.

On the broader AI job displacement question, Fogel is measured but concerned. He points to the speed of change as the real issue — jobs disappear faster than new ones are created, and people like the "50-year-old truck driver" may not be able to retrain. "If we end up in a situation where people will start rejecting technology because of fear, that would end up being bad for us as a society."

His closing advice for founders: "Choose wisely. You only get one life." And for anyone thinking travel is easy to disrupt: "If you think you're just gonna come in and do this business and knock away these very big players, I'd say you should really understand what the business is before you decide to commit your capital."

https://www.youtube.com/watch?v=8nj_0wZkbtA

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders