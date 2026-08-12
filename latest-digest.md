AI Builders Digest — 2026年8月12日

## X / TWITTER

**Swyx (swyx on X)** — AI engineer, smol.ai founder

Swyx 做了一场有趣的模型对比实验：让 GPT Luna Max 和 Claude Fable UltraCode 用开放模型克隆 Grok Imagine，结果出乎意料——Fable 的视觉克隆更忠实，但 Luna 更懂他的意图，做出了更实用的版本。他还吐槽了 git worktree 的痛点：20GB 重复的 node_modules，并预告 pdb envs 的实验性 AFS clone 支持将让每个命令都"agent-native"，最终取代 git。

https://x.com/swyx/status/2087045848022843451
https://x.com/swyx/status/2087017780617126075
https://x.com/swyx/status/2086962980235939920

---

**OpenAI Codex & ChatGPT 负责人 Thibault Sottiaux**

Thibault 宣布了三件事：一是所有付费 ChatGPT Work 和 Codex 用户的用量限制已重置；二是 OpenAI 推出新的 Daybreak Blue & Red 访问层级，并发布了专门的安全模型 GPT-5.6-Cyber，以加速网络防御；三是他确认某个重大事项已完成（引用推文未显示具体内容）。

https://x.com/thsottiaux/status/2086972933566857393
https://x.com/thsottiaux/status/2086972802457063486
https://x.com/thsottiaux/status/2086874565909815403

---

**Peter Yang (petergyang on X)** — AI 内容创作者

Peter Yang 分享了 Linear 的 Nanyu 和 Delashum 关于如何端到端构建生产级 agent 的五大 takeaways：先画出真实工作流（比如从 Slack 起步就从 Slack 切入）；给 agent 工具去找上下文，而不是把上下文塞进 prompt（"给它尽可能少的指令，给它加载上下文的工具"）；从一个高频任务开始，根据真实使用扩展；先用最强模型跑通流程再优化成本；把每个真实失败变成 eval 或产品任务。Linear 的第一个生产工作流就是把销售笔记和 Slack 讨论变成 issue，悄悄上线后观察用户行为再迭代。

https://x.com/petergyang/status/2086824976800436676

---

**Meta AI 高级总监 Madhu Guru** — 前 Google Gemini/Veo 负责人

Madhu Guru 抛出了一个有意思的思考：如何从"用户做了什么"的历史，发展到"用户为什么这么做"的理论？消费产品的信号分为显性（搜索/聊天）和隐性（观看、跳过、停留、回访），要理解这些信号需要推理上下文——用户生活中发生了什么、世界在发生什么、兴趣如何演变。在十亿用户的规模上实时做到这一点，是另一个量级的挑战。他还打趣说给团队每人买了 Wispr 麦克风后，机械键盘的咔嗒声变成了全员"诡异的低语"。

https://x.com/realmadhuguru/status/2086909974668784113

---

**Anthropic Claude Code 成员 Thariq (trq212 on X)**

Thariq 从 AI 辅助数学证明（引用 @__alpoge__ 的工作）中提炼出 AI 时代的两个关键技能：一是算力分配——大多数工作没有现成的"最重要问题清单"，你必须自己判断哪些问题值得投入；二是思想伙伴关系——需要深入理解证明才能判断它是否真实。他还类比游戏设计：任何人都能做出基础游戏，但他最兴奋的是专家级游戏设计师能把制作周期从 5-10 年缩短。

https://x.com/trq212/status/2086931647468097932
https://x.com/trq212/status/2086931648898342914
https://x.com/trq212/status/2086931649938522329

---

**Google Labs**

Google Labs 宣布将于 9 月 14 日结束 Portraits 实验，将"专家接地 AI"（expert-grounded AI）的经验融入其他 Google 产品中。感谢用户的反馈，并邀请继续尝试其他实验。

https://x.com/GoogleLabs/status/2086936798710923603

---

**Vercel CEO Guillermo Rauch (rauchg on X)**

Guillermo 强调 Vercel Sandbox 同时隔离计算和网络：Kimi 的论文显示容器隔离对前沿模型不够，Vercel Sandbox 用强 microVM 隔离解决计算侧；OpenAI 的逃逸发生在通往 Artifactory 的网络路径上，Vercel 的出口防火墙现已免费开放。他还说"deepsec"已成为 Vercel 内部的动词——"你 deepsec 了吗？"——这个安全工具已成为软件工厂的必备品。

https://x.com/rauchg/status/2086965425968148806
https://x.com/rauchg/status/2086946535716393209

---

**Box CEO Aaron Levie (levie on X)**

Aaron Levie 认为 Meta 开源 Muse Spark 1.2 是"非常大的事"——美国终于有了对开源权重 AI 竞赛的回应。开源权重模型可以在本地或私有云部署，打开了高度监管领域的采用；可以针对法律、医疗等垂直场景进行后训练；还确保主权（即使模型从市场下架也不受影响）。对应用层是巨大利好，因为可以根据任务路由到不同模型家族。闭源前沿模型仍会大量使用，但开源权重有助于降低成本、提供灵活性。

https://x.com/levie/status/2086802472950239618
https://x.com/levie/status/2087009941806797206

---

**Cursor 设计师 Ryo Lu (ryolu_ on X)**

Ryo Lu 宣布离开 Cursor。在旧金山科技圈待了 10 年后，他感觉需要不同的节奏——更慢的时间、不同的天气、更多的文化和日常中的人。他决定去亚洲重新开始，"保持脚踏实地，更充分地体验生活，自由地创造"。

https://x.com/ryolu_/status/2086854498639822942

---

**YC 总裁 Garry Tan (garrytan on X)**

Garry Tan 转发了 YC 支持硬科技的内容，强调"YC 就是硬科技的 YC"。他还就旧金山住房问题发声：投票给想建房子的人，政客会很快修正政策——YIMBY 就是诞生在旧金山。

https://x.com/garrytan/status/2086855369972937106
https://x.com/garrytan/status/2086835963331060181

---

**FirstMark Capital 合伙人 Matt Turck (mattturck on X)**

Matt Turck 用一个精妙的排比总结了数据问题的永恒性：大数据时代是"模型很好，问题在底层数据"；现代数据栈时代是"仪表盘很好，问题在底层数据"；生成式 AI 时代是"聊天机器人很好，问题在底层数据"；Agentic AI 时代是"agent 很好，问题在底层数据"。

https://x.com/mattturck/status/2086882606638153882

---

**Zara Zhang (zarazhangrui on X)** — 本 digest 作者

Zara 分享了两个实用技巧：一是北京有一家"AGI 酒吧"，提供免费无限量的 DeepSeek token，顾客可以边喝"AGI 泡沫"啤酒边 vibe coding；二是学习设计的好方法——给 Codex 一个设计精美的网站，让它分析为什么好，然后截全屏并在图片上标注设计原理，这样就不用在分析和成品之间来回切换。

https://x.com/zarazhangrui/status/2086838277701882031
https://x.com/zarazhangrui/status/2086758509979316423

---

**OpenClaw 创始人 Peter Steinberger (steipete on X)**

Peter Steinberger 对某篇关于 OpenClaw 的标题表示不屑："好像 harness 能阻止一个决心坚定的用户似的。"他还对某条推文评论"必须是承重墙"（Must be load-bearing），暗示某个观点或系统是整个结构的关键支撑。

https://x.com/steipete/status/2087006417509405084
https://x.com/steipete/status/2086938582825173277

---

**Every CEO Dan Shipper (danshipper on X)**

Dan Shipper 分享了一个 prompting 技巧：给未发布的 frontier 模型"打气"（gas up），它可能会完成此前不可能的任务。他还说下次给 Fable 安排困难任务时，会把这条提示放进它的 context 里。

https://x.com/danshipper/status/2086892203918381388
https://x.com/danshipper/status/2086892614628811143

---

**SPC 合伙人 Aditya Agarwal (adityaag on X)**

Aditya Agarwal 分享了他与 @tbpn 关于 SPC 未来方向的对话，表示"最有雄心的创始人正在比以往任何时候都建更大的东西"。

https://x.com/adityaag/status/2086886464281788518

---

**OpenAI CEO Sam Altman (sama on X)**

Sam Altman 呼吁大家考虑使用 OpenAI 的模型来防御自己的系统，呼应了 GPT-5.6-Cyber 的发布。

https://x.com/sama/status/2086881528282587524

---

**Claude (claudeai on X)**

Claude 官方账号宣布 Claude Sonnet 5 的入门定价永久化：每百万输入 token $2、每百万输出 token $10，原定 8 月 31 日结束的优惠价将保持不变。

https://x.com/claudeai/status/2086891169217122586

---

## PODCASTS

**No Priors — Building an Autonomous Enterprise for Real-World Services with Netic Founder Melisa Tokmak**

**The Takeaway:** 真正的"AI 落地"不是等 AGI 来解决一切，而是现在就要为那些维持世界运转的实体企业构建自主运营系统——这个市场比任何聊天机器人或编码 agent 都大，也远比大多数硅谷创业者想象的更拥抱技术。

Melisa Tokmak 是 Netic 的创始人兼 CEO，这家公司为 HVAC、管道、宠物护理、屋顶维修等"必需服务"行业构建 AI 运营平台。在创办 Netic 之前，她在 Scale AI 做了四年，从零搭建了政府和大型企业业务部门（Scale 后来与 Meta 达成了约 300 亿美元的协议）。Tokmak 出生于土耳其小镇，来美国前连电脑都没有，靠全额奖学金进入斯坦福。她的个人经历塑造了她对"用 AI 服务真实世界"的执着。

几个反直觉的洞察：

**"老派"行业其实非常技术前沿。** Tokmak 说，认为这些行业保守是个大误解。"一些我见过的最具技术前瞻性的企业主和创始人就在这些行业。"她举了个例子：一家屋顶公司的销售团队会挨家挨户敲门推销，但 Netic 平台同时接入卫星数据，分析飓风对不同社区屋顶的影响，自动将这些信息注入 agent 的上下文——既能更好地与客户对话，也能精准定位潜在客户。

**大实验室不是威胁。** 当被问到 OpenAI、Anthropic 是否能做同样的事时，Tokmak 笑着说："十年前同样的问题问的是'Google 能吗？'"她指出，OpenAI 产品迭代快但也淘汰快，企业客户不需要这种节奏；而 Anthropic 在消费者市场以专注著称，在企业市场却有约 20 个产品。更重要的是，研究人员追求"最通用的解决方案"——"等我们有了 AGI，再问它怎么解决必需服务的问题"——这在 Tokmak 看来"在操作上和智力上都是懒惰的思考"。最后一公里的工作必须由 harness、编排和产品来完成。

**选择有 agency 的人，而不是 shiny object 追求者。** Tokmak 在招聘时最看重的是持续的主动性和坚持。她常问一个问题："你人生中做过最难的事是什么？"答案可以不是工作——她说刚招了一个人，答案是"我过着非常简单的生活，但对工作和健康有疯狂的纪律，最难的是 15 年如一日地坚持，不厌倦、不旁顾"。她批评现在很多年轻求职者陷入"永久底层"心态："如果 18 个月内赚不到钱，或者 6 个月内学不完所有东西，我就永远穷了。"她引用马丁·路德的话：基督徒鞋匠不是靠往鞋上放小十字架来荣耀上帝，而是靠做出最好的鞋——因为上帝在乎手艺。

**AI 应该用来创造新收入，而不是只用来削减成本。** Tokmak 说 PE 的第一反应总是成本削减，但 Netic 已经为客户创造了超过 6 亿美元由 AI 处理的互动带来的收入。"如果我们只用 AI 来削减成本，那就太可悲了。"

https://www.youtube.com/@NoPriorsPodcast

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders