AI Builders Digest — 2026年8月19日（周三）

---

## X / TWITTER

---

**AI Engineer创始人、Smol AI联合创始人swyx（Shawn Wang）**

Trajectory在AI持续学习（Continual Learning）领域给他留下了深刻印象——联合创始人Ronak在AI Engineer大会上做了一场非常扎实的分享，讲他们如何解决持续学习中剩余的核心数据问题，包括为什么GRPO不够用、必须转向on-policy训练，以及随之而来的一系列工程问题。swyx评价这是该领域早期领导者之一给出的高质量综述。此外他还转发确认了Cursor相关动态。

链接：https://x.com/swyx/status/2089393073327653344

---

**Google VP Josh Woodward**

Josh Woodward对之前收集的Gemini用户反馈逐条做了进度更新：Workspace工具改进版正在测试中、预计1-2周内推出；Gemini 3.7 Flash在工具调用方面有改进；新的"Projects"设计已完成、正在实现中；目前已支持49个连接器；10条反馈里有7条已完成或接近完成。这种公开、透明的产品迭代节奏值得关注。

链接：https://x.com/joshwoodward/status/2089520767281324112

---

**Anthropic Claude Code团队Boris Cherny**

Boris分享了Claude Code的几个小质量改进，强调这类细节优化累积起来对日常开发体验的提升非常明显，并透露更多改进正在路上。他还邀请用户反馈使用体验。

链接：https://x.com/bcherny/status/2089538781909332210

---

**OpenAI Codex与ChatGPT产品负责人Thibault Sottiaux**

Thibault做了一个非常有意思的开放提问：Codex、API或模型层面，有什么显而易见但我们还没做的事情？100%在能力范围内、却一直被忽视的改进是什么？这条帖子获得了3726个赞和4727条回复，说明社区对OpenAI的期待值极高。另外他还用ABBA的歌词恶搞了一把Codex："Gimme, gimme, gimme Codex after midnight——能不能有人把这些失败的测试都修掉？"（深夜提交代码的开发者应该都懂）

链接：https://x.com/thsottiaux/status/2089500941842342287

---

**AI教程创作者Peter Yang**

Peter Yang在寻找用AI编辑YouTube口播视频片头（zoom in、动态字幕、logo动画、B-roll）的工具，目前正在测试HyperFrames，但想知道有没有更好的替代方案。他的终极目标是：全程只靠跟Codex或其他agent对话完成整个剪辑流程。

链接：https://x.com/petergyang/status/2089519732336787619

---

**Meta AI高级总监Madhu Guru（此前在Google主导Gemini、Veo、Nano Banana）**

Madhu分享了一套非常实用的eval方法论：最好的学习方式是把一个你非常熟悉的工作流拿来，想办法让它的质量变得可衡量。具体做法是研究真实的trace数据——用户典型的prompt序列、每一步和最终结果的好回答长什么样；然后找到产品失败的地方，创建能捕获这些失败场景的trace（比如混乱的工具调用、缺失上下文等）。有了好的eval之后，再思考如何让它自动化、可重复运行，以及如何确保eval能持续反映线上流量的变化。他还问大家要不要把这个做成一个系列。

链接：https://x.com/realmadhuguru/status/2089480958571331623

---

**Anthropic Claude Code团队Thariq**

Thariq有一个非常强烈的判断：最近涌现的程序化生成艺术、视频编辑和3D游戏demo让他越来越倾向于认为，LLM编程模型在很多创意工作上会比扩散模型（diffusion models）做得更好。原因很简单——代码比像素更容易编辑、微调，也更方便导出到现有工具链中。他还强烈推荐大家在Claude Code里试试新的/design命令。

链接：https://x.com/trq212/status/2089415712007938315

---

**Replit CEO Amjad Masad**

Amjad转发了一个让他印象深刻的团队：他们的pitch里完全没有提"AI"，但增长曲线完全是AI公司的水平——如果不是因为深度拥抱AI，他们的团队规模会大10倍。另外他还强调了一个安全观点：仅仅扫描代码漏洞是不够的，必须主动进行渗透测试来尝试攻破自己的系统。

链接：https://x.com/amasad/status/2089525819567739264

---

**Vercel CEO Guillermo Rauch**

Guillermo宣布了一个有趣的生态整合：现在可以在Cursor Origin上托管代码仓库，并通过Cursor Origin（本身托管在Vercel上）直接部署到Vercel。他调侃说，和GitHub不一样，这回是"在线"的。

链接：https://x.com/rauchg/status/2089409162270965858

---

**Box CEO Aaron Levie**

Aaron Levie对"数据是新石油"这句话给出了一个非常具体的注脚：AI对数据的渴求已经到了几乎任何形式的数据都有价值的程度。在一个AI世界里，信息实际上应该作为资产出现在资产负债表上。他判断，企业如何管理和挖掘自身组织 intelligence 的能力，将成为未来竞争力的决定性因素之一。

链接：https://x.com/levie/status/2089499887905997272

---

**Y Combinator总裁兼CEO Garry Tan**

Garry Tan开源了一套"个人AGI"工具包：一个包含70个经过验证的skills的私有GitHub仓库，外加一个Karpathy风格的知识wiki起步模板。全部MIT许可、免费使用，并且可以直接配合现有的Claude Code或Codex订阅使用——只需新建一个目录，把设置图片粘贴给CC或Codex就能自动搭建agent仓库。这个项目源于他今年早些时候在Startup School的演讲。

链接：https://x.com/garrytan/status/2089425134339961173

---

**FPV Ventures合伙人Nikunj Kothari**

Nikunj发了一条火力全开的帖子，逐一点名AI生态各层的"护城河困境"：模型层（OpenAI、Anthropic、xAI）、IDE层（Cursor、Windsurf）、harness层（Cognition、Factory、LangChain）、应用构建层（Replit、Lovable、Bolt）、wrapper层（Harvey、Abridge、OpenEvidence）、推理层（Together、Fireworks、Groq）、语音层（Sierra、Decagon、ElevenLabs）、数据标注（Scale、Surge、Mercor）、AI基础设施（Baseten、Modal、Railway）、neocloud（CoreWeave、Lambda、Crusoe）、生成式媒体（Runway、Higgsfield、Suno）——"显然AI圈没人有护城河，除了VC机构☠️"。

另外他的另一个观点是：品牌营销将成为未来公司最重要的差异化因素和最珍贵的资产之一。尤其是在agent成为大多数产品的主要用户之后，要吸引注意力稀缺的人类用户，持续一致的品牌呈现会变得至关重要。他预测未来10年，擅长品牌的人会被提拔为联合创始人级别，而不是像现在这样被降级为二等角色。

链接：https://x.com/nikunj/status/2089486802356961364

---

## PODCASTS

---

**No Priors — "Chasing Trillion-Dollar Companies, Founder Ambition, Token Budgets, and Regulatory Capture with Sarah & Elad"**

**核心要点：未来五年内能诞生多少家万亿美元公司？答案可能比你想的少得多。**

这期No Priors是Sarah Guo（Conviction创始合伙人）和Elad Gil（知名投资人、多家AI独角兽背后的推手）之间的一场坦诚对谈。两人都是硅谷AI投资圈最有影响力的声音之一——Sarah创办的Conviction是Cognition、Physical Intelligence等前沿公司的早期投资人，Elad则是GitHub、Stripe、Instacart等公司背后的传奇天使投资人。

**关于万亿美元公司：Elad的冷静判断**

过去五年，Anthropic、OpenAI、SpaceX三家公司在极短时间内从零冲到万亿美元市值——这在人类历史上是前所未有的。通常这需要15到20年（Google用了90年代至今，SpaceX从2000年代初开始）。Elad认为，很多人现在默认3到5年内还会有一批新的万亿美元公司出现，但他对此持怀疑态度："1000亿美元的公司还能建很多，但万亿美元级的公司很难达到。"他的框架很直接：要支撑万亿美元市值，你需要500亿到1000亿美元的收入——这不是"市场很大"就能解决的问题。

**关于创始人野心：Sarah的失望**

Sarah提出了一个值得深思的观察："我最近更常感到失望的是，创始人们的野心不够大。"她认为很多优秀创始人因为害怕与AI labs正面竞争，纷纷转向了更小众、更衍生的方向。Elad同意这是一个令人担忧的趋势："我不担心普通创始人，我担心的是最好的那些创始人。"他鼓励创始人在某些市场应该直接与labs竞争——产品体验和分发能力仍然是可打的牌。

**关于退出时机：每年做一次"退出演练"**

Elad给了一个非常实用的建议：每年开一次预设的董事会会议，议题就是"未来六个月我们是否应该考虑退出"——不带情绪、不是创始人push、也不是投资人push，就是一次理性的讨论。因为在AI时代，"一年的AI时间相当于正常周期的三到四年"，三年就是十年。你的假设和事实基础变化太快，必须更频繁地重新校验。

**关于token预算：下一个ROI战场**

Elad提出了"投入token的回报率"（return on invested tokens）这个概念——你有一定量的token预算，应该给谁、为什么？他类比了当年公司内部工具团队总是被饿死的现象："为什么要把token花在一堆SaaS上，而不是投到核心产品或大幅提升利润率的事情上？"他预测企业会从"大家都来试试AI"转向"我们必须衡量开支，把更多东西迁移到开源"。

**关于18个月后RSI的信仰：Sarah的担忧**

Elad提到，实验室里弥漫着一种狂热的能量——有人预计6个月左右代码问题将被彻底解决，明年年底可能出现某种形式的递归自我改进（RSI）。但Sarah对此提出了一个清醒的提醒："过去五年里，每隔18个月就有人声称ASI还有18个月就到了。"她认为从代码到训练代码的延伸是可信的，但真正的瓶颈在于物理算力的可及性，而不是算法可能性。

**关于监管：一个被引用的历史教训**

Elad用核电做了一个有力的类比：法国70%的电力来自核电，几十年零事故；美国18%，40年没建过新反应堆。"70年代的安全游说团体基本上扼杀了我们获得丰富清洁能源的机会。"他的结论是：历史上，大行业在安全监管上往往走得太远，而科技之所以能快速成功并产生巨大影响，恰恰是因为监管宽松。"我们会在安全与风险的天平上把指针放在哪里，这最终是我们社会要做的选择。"

**金句：**

"你的生命中最有生产力的那些年正押在这上面。你可以带着一笔可观的资金离开，去做下一件大事——你已经做成过一次了，人们还会愿意跟你合作——或者你可以掷骰子。" —— Elad Gil

链接：https://www.youtube.com/watch?v=6l8oAO_LBx4

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders