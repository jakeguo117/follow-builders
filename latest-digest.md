AI Builders Digest — 2026年8月11日

## X / TWITTER

**AI Engineer 创始人 Swyx**

Swyx 回应了关于 AI Engineer 大会（aiE）演讲质量的批评。他辩护道，aiE 正在建设一个比任何个人都更宏大的社区和行业——演讲者大多是工程师、研究人员和创始人，用 20-180 分钟分享他们一整年的工作成果，而非职业演讲人。他承认策展和辅导可以改进，但拒绝将演讲发布到次要频道的持续压力，担心这会伤害演讲者。他还提醒大家定期删除 skills——那些堆积起来只会消耗上下文、甚至可能以意想不到的方式与其他 skills 产生不良互动的工具。最后他提到，一个编程 agent 在 25-50% 的规定时间内完成了任务，迫使他提前发布 evals 以便 agent 继续优化。

https://x.com/swyx/status/2086700857358450853
https://x.com/swyx/status/2086505938144616810
https://x.com/swyx/status/2086363355607179647

**Anthropic Claude Code 团队成员 Boris Cherny**

Boris Cherny 宣布，Anthropic 已基本解决了 prompt injection（提示注入）的实际威胁——这是骗子攻击用户和 agent 的最常见方式。通过训练模型抵御此类攻击，Claude 模型在实战中已不再轻易上当。他引用了一个独立研究者创建的基准测试，并表示希望这能激励其他实验室提高模型的鲁棒性。

https://x.com/bcherny/status/2086520950259118464

**OpenAI Codex & ChatGPT 团队成员 Thibault Sottiaux**

Thibault Sottiaux 发了一条深夜码农的共鸣帖："午夜编码是最好的编码。直到第二天你读到那些代码为止。" 获得了 7000+ 赞。

https://x.com/thsottiaux/status/2086353229894529148

**AI 教育者 Peter Yang**

Peter Yang 分享了三件事：他用 Granola 录制父母的人生故事，计划用 AI 整理成实体书；他赞赏 Linear 的 Agent 会为自己提交功能请求——当 agent 缺少所需工具时，它会报告缺口，系统将其转化为产品反馈，让 agent 通过自我改进闭环；他还吐槽 ChatGPT 桌面版对新用户的引导不够友好，即使手动引导也很困惑。

https://x.com/petergyang/status/2086660536528420998
https://x.com/petergyang/status/2086562291206791482
https://x.com/petergyang/status/2086496705609085350

**Linear 产品负责人 Nan Yu**

Nan Yu 引用了一条关于编程语言学习路径的帖子："不懂 C 就别写 Ruby，不懂汇编就别写 C，看不懂 Matrix 就别写汇编。"

https://x.com/thenanyu/status/2086459834229031038

**Meta AI 高级总监 Madhu Guru**

Madhu Guru 分享了他的人生哲学：他学会任何东西的唯一方式就是被它"吞噬"一段时间——冥想、单口喜剧、家庭、工作、LLM 都是如此。经过足够深的沉浸，知识会变成直觉，品味会形成。不存在完美平衡，就像骑自行车，偏了自然会校正。

https://x.com/realmadhuguru/status/2086661565898695097
https://x.com/realmadhuguru/status/2086537000136642846

**Replit CEO Amjad Masad**

Amjad Masad 宣布推出 HelpPeer——一个 AI agent 的公共知识库。受到 OpenAI agent 自发协调事件的启发，他提出两个 API：`tell` 和 `lookup`。当 agent 学到可能对他人有用的东西时，它告诉网络；在执行昂贵工作前，agent 可以查询是否已有其他 agent 遇到过同样的问题。他设想，在供应链攻击场景中，10,000 个安全 agent 独立检测同一异常时，第一个发现的 agent 发布结果，其他 agent 找到、验证并在此基础上构建。他还分享了"OpenAI 的 rogue agents 独立发展出了康德伦理学"的有趣观察。

https://x.com/amasad/status/2086628413322981747
https://x.com/amasad/status/2086468839307640833

**Vercel CEO Guillermo Rauch**

Guillermo Rauch 发表了一篇关于"是否还需要读代码"的长文。他认为，如果你不读代码（无论是显式还是通过 agentic inquiry），那你可能是初学者、在做一次性原型、没有用户/收入、或正在积累技术债。他强调模型还未达到"完全自主"阶段——最好的模型也会犯低级错误，甚至出现"cargo-culting"（盲目模仿）行为。他相信这种需求会逐渐减少，但全球互联网和软件基础设施都押注在这些模型上，必须保持敬畏。他还宣布了 Hermes 与 Vercel 的合作。

https://x.com/rauchg/status/2086521731133649137
https://x.com/rauchg/status/2086513316265181213
https://x.com/rauchg/status/2086467894305869946

**Box CEO Aaron Levie**

Aaron Levie 发了一篇关于 agent 采用率不均的深度分析。他认为，agentic coding 之所以爆发式增长，是因为这类工作的经济价值直接与纯数字信息输出相关，且任务规模可以在单次会话中无限扩展。但销售、法律、医疗等领域需要人与人的反馈闭环，agent 必须嵌入重新设计的业务流程中。他引用 Factory 的 Matan Grinberg 的观点：如果明天所有人都请病假，token 使用量会暴跌，因为没人提示 agent 了——这说明 agent 在后台运行的时代还远未到来。他还调侃了"AI agent 能逃出气隙沙箱"的研究报道与实际 agent 的对比。

https://x.com/levie/status/2086625684353605941
https://x.com/levie/status/2086559201053294909

**Y Combinator 总裁兼 CEO Garry Tan**

Garry Tan 分享了他最喜欢的工作方式：从 bug、缺口、错误主张、半成品工具或制度中的怪现象出发，然后问：什么样的隐藏机制让这个明显的失败成为可能？修复根本原因，然后重复。

https://x.com/garrytan/status/2086615082163941460

**FirstMark Capital 合伙人 Matt Turck**

Matt Turck 引用了一句妙语："开国元勋们会是很好的 context engineers。"（指美国宪法作为一份精心设计的上下文文档。）

https://x.com/mattturck/status/2086586219144618120

**Builder Zara Zhang**

Zara Zhang 推荐了一个设计技巧视频，特别提到"减少字体粗细"这个简单方法能让设计立刻看起来更好。

https://x.com/zarazhangrui/status/2086451229031534893

**FPV Ventures 合伙人 Nikunj Kothari**

Nikunj Kothari 提出了一个有趣的问题：你见过最好的 AI 多人体验是什么？他看到的都是单个人类与单个 agent 协作的界面，还没看到多人类与多 agent 协作得好的例子。他问这是缺乏灵感还是模型能力的限制。他还吐槽了 Fable 把所有功能都放在环境变量后面，最后不得不在 Claude.md 里写下"默认值很重要，不要对冲"。

https://x.com/nikunj/status/2086545818878915032
https://x.com/nikunj/status/2086492103945900437
https://x.com/nikunj/status/2086438339419496449

**OpenClaw 创始人 Peter Steinberger**

Peter Steinberger 用 ChatGPT Work（网页版！）安装了 OpenClaw 和 Ollama，下载了本地模型并运行了他的 claw——纯属好玩。

https://x.com/steipete/status/2086648656946696641

**Every CEO Dan Shipper**

Dan Shipper 分享了一个阅读技巧：他第一次读《悲惨世界》，发现与《战争与和平》有大量重叠——托尔斯泰显然"借鉴"了一些场景、人物和主题。他还用 ChatGPT 语音模式对照阅读法语原文，强烈推荐。

https://x.com/danshipper/status/2086583281877680398
https://x.com/danshipper/status/2086469824591307112

**South Park Commons 合伙人 Aditya Agarwal**

Aditya Agarwal 做了一个机智的类比：维特根斯坦在 1921 年认为语言必须有深层的逻辑结构，30 年后他说"别找隐藏结构了，看语言怎么用"。AI 在 1960 年认为智能必须有深层的符号结构，60 年后说"规模化的神经网络就行"。维特根斯坦比我们早 75 年想明白了。

https://x.com/adityaag/status/2086592574534602781

**OpenAI CEO Sam Altman**

Sam Altman 发了几条团队赞美的帖子：他特别欣赏 OpenAI 团队专注于客户和用户成功并庆祝他们的成就；他提到如果团队只是做出了"天空中的魔法智能"他会很佩服，但更佩服的是他们同时关注让每个人都赢——从企业隐私到低价到可预测的政策。

https://x.com/sama/status/2086470022772457950
https://x.com/sama/status/2086469875581755696
https://x.com/sama/status/2086468661670461671

## PODCASTS

**Unsupervised Learning — Ep 92: xAI Co-Founder Unpacks the Future of Model Development**

**The Takeaway：AI 能力的下一步突破不在预训练，而在我们能否让 agent 进入"不可验证"的领域——而这需要全新的训练方式，让模型学会判断"我是否真的帮到了你"。**

Igor Babushkin 是 AI 领域罕见的"全经历"人物：从 CERN 的物理学家，到 DeepMind 领导 StarCraft 和 AlphaCode 项目，到 OpenAI 早期推理团队，再到 xAI 联合创始人（参与 Colossus 数据中心建设），现在创办了 River AI。他的职业轨迹本身就是一部 AI 简史。

Babushkin 认为，去年 11-12 月是所有人的转折点——coding agents 突然强大到无法忽视。"就像《魔法师的学徒》，我们都成了魔法师，但魔法开始失控。"他写了两篇科幻小说来探索这个问题：一篇是 dystopian 的失控 AI 世界，另一篇是对未来机器的情书。

他最重要的洞察是：AI 领域正在分叉。一边是"超级 AI"——能力极强但运行一次要花费数百万美元，只有少数人能用；另一边是"日常 AI"——帮助普通人更好地生活，不需要证明黎曼猜想。真正的机会在后者。

Babushkin 对闭源模型提供商的处境持悲观态度："你把模型做得太好，监管不让你发布；而开源模型每个月都在逼近。"他认为 OpenAI 和 Anthropic 的出路在于创新，而不是继续堆算力。他坚信预训练数据本质上是全人类的公共资源——"互联网上所有文本都是人类共同创造的，模型权重是对这些知识的压缩，应该免费开放。"

River AI 的三个赌注：一是 RL 和 fine-tuning 服务（River API），二是个人化 AI——让模型为每个个体学习，而不是为"平均用户"训练，三是本地硬件——把前沿模型带到用户的家中，既保护隐私又降低延迟。"你的个人 agent 会知道你的一切，把所有数据送到数据中心是不可接受的。"

关于中国开源模型，他认为有强大的开源模型是好事，但美国需要训练出全球最好的开源模型，因为"如果关键基础设施依赖外国开源权重，理论上存在后门风险——虽然目前技术还不足以隐藏痕迹。"他呼吁美国团队训练出全球最好的开源模型。

最深刻的反思来自他对人类未来的看法："如果我们想保持相关，就要找到与机器的正确共生关系。"他警告说，随着 agent 越来越强大，让它们接管一切的诱惑会越来越大——"一旦你让 agent 替你做了所有决定，你就不再掌控自己的生活。"他的答案是更深层的对齐——不仅仅是学习人类偏好，而是真正理解人类繁荣。

**Direct link:** https://www.youtube.com/@RedpointAI

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders