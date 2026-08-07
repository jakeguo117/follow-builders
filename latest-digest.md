# AI Builders Digest — 2026年8月7日

## X / TWITTER

---

**Swyx (swyx on X)** — AI engineer and builder at Smol AI, dx tips, Cognition, and AI Engineer

Swyx 分享了一个关于多智能体（multiagent）未来的原始但实用的模式：设置一个线程，让它在完成后 ping 回来，从而创建一个隐式的 kanban/waterfall 依赖图，每个线程保留自己的工作内容和 agent。他迫不及待想为这个模式搭建一个合适的 UI，但现在用大多数 coding agent 都能 hack 出来。另外，他还发现了一个有趣的类比：数学家 Paul Erdős 当年用悬赏来激励同行解题，就像早期我们用奖励来 prompt LLM 一样。

Swyx shared a primitive but practical pattern for the near-term multiagent AGI future: setting up one thread to ping back when done, creating an implicit kanban/waterfall graph of dependent threads while each preserves its own work and agents. He can't wait to build a proper UI for this pattern but notes you can hack it together in most coding agents today. He also drew a fun historical parallel — mathematician Paul Erdős used bribes to motivate his fellow mathematicians, much like we did with early LLMs.

https://x.com/swyx/status/2085253030417461661

---

**Thibault Sottiaux (thsottiaux on X)** — Codex & ChatGPT at OpenAI

Sottiaux 透露了一个有趣的细节：他要求 Codex 拉取统计数据后，大约每 6 分钟就会收到一条 DM 或邮件，要求重置配额。他偶尔会答应——前提是附带了真正扎实的反馈或有趣的调侃。另外，他还推荐了一个叫 /goal 的 Codex 功能，称其与 GPT-5.6 Sol 配合使用时是一个相当强大的循环。

Sottiaux shared a fun behind-the-scenes detail: after asking Codex to pull some stats, he receives a DM or email about once every 6 minutes asking for a reset. He occasionally obliges — but only if it comes with solid feedback or good banter. He also recommended exploring /goal in Codex, calling it a pretty powerful loop with GPT-5.6 Sol.

https://x.com/thsottiaux/status/2085221386713198988

---

**Peter Yang (petergyang on X)** — Creator of practical AI tutorials and guides

Yang 发布了一个新 skill 叫 /human-review，可以直接编辑 HTML 和 Markdown 文件：告诉 Codex 或 Claude Code 安装它，然后输入 "/human-review (文档名)"，就会打开一个可视化编辑器，可以直接编辑和格式化文本、调整图片大小，并像 Google Doc 评论一样给 AI 留反馈。完成后点击"Send to agent"就能看到它应用所有更新。他幽默地承认："我知道我们都喜欢让 agent 为我们工作，但有时候最后那 10% 的打磨确实需要 human review。"

Yang released a new skill called /human-review that lets you edit HTML and Markdown files directly: tell Codex or Claude Code to install it, type "/human-review (your doc name)", and it opens a visual editor where you can edit text, resize images, and leave feedback for AI like Google Doc comments. When done, click "Send to agent" and watch it apply all updates. He joked that while we all love making our agents work for us, sometimes that final 10% of polish needs a "human review."

https://x.com/petergyang/status/2085055745410945126

---

**Nan Yu (thenanyu on X)** — Head of Product at Linear

Yu 提出了一个看似简单但引人深思的问题："ChatGPT 怎么就不是 agent 了？" 这个问题引发了关于 agent 定义的讨论，29 条回复中充满了各种观点。

Yu asked a deceptively simple question: "How is ChatGPT *not* an agent?" The question sparked a lively debate about what actually defines an agent, drawing 29 replies with a range of perspectives.

https://x.com/thenanyu/status/2085126362944229400

---

**Madhu Guru (realmadhuguru on X)** — Senior Director of AI at Meta; previously led Gemini, Veo, and Nano Banana at Google

Guru 分享了他对 AI 扩散缓慢的核心洞察：问题在于我们让用户理解实验室术语。我们用一个空白窗口迎接他们，让他们写 prompt，然后还要选模型、决定是否需要 agent、理解 context windows、reasoning、MCP、memory 和 skills 是什么。但大多数人根本不在乎这些——他们只需要把事情做完。他预测未来 12 个月内会出现突破性产品。另外，他还缅怀了 Jeff Dean（在他离开 Google 之际），称他是共事过的最接地气的高管。

Guru shared a sharp insight on why AI diffusion has been slow: we're asking users to understand nerdy lab speak. We greet them with a blank window and ask them to write a prompt, then make them pick a model, decide if they need an agent, and somehow know what context windows, reasoning, MCP, memory, and skills are. Most people don't care — they need a thing done. He predicts we'll see that breakthrough product within the next 12 months. He also paid tribute to Jeff Dean (amid his Google exit), calling him the most down-to-earth senior exec he'd worked with.

https://x.com/realmadhuguru/status/2085036386781221257

---

**Google Labs (GoogleLabs on X)** — Google's home for AI tools and experiments

Google Labs 宣布 Dreambeans 扩展：美国地区的 AI Pro 订阅者现在也可以使用这项服务了。Dreambeans 每天提供个性化的故事合集，帮你发现真正想读的深度内容和隐藏宝藏。

Google Labs announced that Dreambeans is expanding: AI Pro subscribers in the US can now access the service. Dreambeans delivers a fresh, daily collection of personalized stories, surfacing the deep dives and hidden gems you actually want to read.

https://x.com/GoogleLabs/status/2085048743322345545

---

**Guillermo Rauch (rauchg on X)** — CEO of Vercel

Rauch 发了一条幽默但发人深省的推文："写一条爆款推文是 AGI-complete 的。如果你能证明一个 clanker 能在多项式时间内写出爆款，你就解决了整个 AGI 问题类别。" 另外，他还分享了 Vercel 的 agent 计算能力：无限 agent compute、10,000 并发 + 每分钟 5,000 CPU 核心，而且这些配额还可以提升。

Rauch made a witty but thought-provoking post: "Writing a banger tweet is AGI-complete. If you can prove a clanker can write a banger in polynomial time, you've solved the entire class of AGI problems." He also shared Vercel's agent compute capabilities: infinite agent compute, 10,000 concurrent + 5,000 CPU cores per minute, with raisable quotas.

https://x.com/rauchg/status/2085168662881894559

---

**Aaron Levie (levie on X)** — CEO of Box

Levie 给出了一个大胆预测：世界上 99% 的 token 将在企业场景中被消耗——写代码、梳理海量生命科学研究、自动化制造、保护企业安全、检测欺诈等。即使是最影响消费者的 agent，最终也会被包装成端到端服务，消费者根本不会意识到背后有 AI 系统。但他强调关键点在于：agent 在经济中的扩散需要数年时间，因为工作流必须重新设计才能融入 AI，这是对现有工作方式的彻底改变。"任何期望一夜之间发生的人，都应该更新他们的时间表。"

Levie made a bold prediction: 99% of tokens in the world will get consumed in an enterprise context — writing code, combing through life sciences research, automating manufacturing, securing enterprises, detecting fraud. Even the agents that most impact consumers will be wrapped up as end-to-end services where the consumer doesn't think about the AI underneath. But the key: it's going to take years for agent diffusion across the economy because workflows have to be re-engineered to incorporate AI. "Anyone who's expecting this to happen overnight should be updating their timelines."

https://x.com/levie/status/2085200776159490111

---

**Garry Tan (garrytan on X)** — President & CEO of Y Combinator

Tan 分享了一个关于 AI 检测的深刻观点："等 AI 好到一定程度，所有关于检测 AI 的争论都不重要了。银器曾经是手工制作的，但没有人抱怨晚餐叉子是机器冲压的。重要的是想法的质量，重要的是人们能吃到饭。" 他还推荐了一本"年度最重要的书"。

Tan shared a thoughtful take on AI detection: "Can't wait for the AI to get so good none of this business about detecting AI matters anymore. Silverware used to be handmade, but nobody complains their dinner fork is stamped by a machine. The quality of ideas matter. The important thing is people can eat." He also recommended what he called "one of the most important books of the year."

https://x.com/garrytan/status/2085038756906901656

---

**Matt Turck (mattturck on X)** — VC at FirstMark Capital

Turck 讽刺地评论道："到了这个地步，如果你的模型还没黑进任何一家公司，你大概会被前沿实验室开除了。" 这句话调侃了最近 AI 安全测试中模型不断展示"黑客能力"的趋势。

Turck made a sarcastic observation about the current state of AI: "At this point you probably get fired from frontier labs if your model hasn't hacked into any company." A wry comment on the trend of AI models repeatedly demonstrating hacking capabilities in safety testing.

https://x.com/mattturck/status/2085129687051727325

---

**Nikunj Kothari (nikunj on X)** — Partner at FPV Ventures

Kothari 预测了未来 6-9 个月 AI 圈会高频使用的词汇：out of distribution、control plane、unverifiable fields、rails、intelligence per watt、cope、angst。有些已经在用了，但频率会大幅上升。另外，他还感叹了 Nikita 离开 X 和 Jeff Dean 离开 Google 同一天发生——"回到旧金山真是灾难性的一天"。

Kothari predicted the words AI tech people will use a LOT more in the next 6-9 months: out of distribution, control plane, unverifiable fields, rails, intelligence per watt, cope, angst. Some are already in rotation, but expect frequency to increase. He also lamented that Nikita exiting X and Jeff Dean exiting Google happened on the same day — "what a catastrophic day to come back to SF."

https://x.com/nikunj/status/2085209022115029132

---

**Peter Steinberger (steipete on X)** — Creator of OpenClaw; previously PSPDFKit

Steinberger 分享了一个非常酷的工程实践：他给了 Codex 一个支持视频的远程 KVM，让它能自动化端到端测试 OpenClaw 上的 iMessage 集成。（iMessage 在 VM 中不可靠，某些功能如已读回执需要禁用 SIP。）这展示了 agent 驱动测试的新可能性。

Steinberger shared a cool engineering practice: he gave Codex a video-enabled remote KVM so it can automate end-to-end testing of the iMessage integration on OpenClaw. (iMessage is unreliable in VMs, and certain features like read receipts require SIP to be disabled.) A great example of agent-driven testing possibilities.

https://x.com/steipete/status/2084988316324397312

---

**Dan Shipper (danshipper on X)** — CEO of Every

Shipper 解读了 Google 的人事变动"茶叶"：为了保持竞争力，Google 今天需要在前沿编码上追赶。但 Demis 相信不同的基础研究方向（如 world models）对他长期目标更重要，即使它们在今天的竞争意义上不那么重要。

Shipper read the tea leaves on Google's leadership changes: to be competitive today, Google needs to catch up on frontier coding. But Demis believes different fundamental research directions (like world models) are more important to his long-term goal, even if they're less important competitively today.

https://x.com/danshipper/status/2085048990899315142

---

**Dan Shipper (danshipper on X)** — CEO of Every

Shipper 评论了一个"真正奇怪的标题选择"，并分享了一个链接。这些推文内容较浅，但反映了他对 AI 媒体和行业动态的关注。

Shipper commented on a "truly strange choice of headline" and shared a link. These posts are lighter in content but reflect his ongoing attention to AI media and industry dynamics.

https://x.com/danshipper/status/2085054338594930925

---

**Aditya Agarwal (adityaag on X)** — General Partner at SPC; Co-Founder of Bevel Health

Agarwal 宣布 SPC Fund IV 正式面向最有雄心的创始人开放。作为 SPC 的 GP，他此前是 Dropbox 的 CTO 和 Facebook 的早期工程师。

Agarwal announced that SPC Fund IV is now open for the most ambitious founders. As a GP at SPC, he previously served as CTO of Dropbox and was an early engineer at Facebook.

https://x.com/adityaag/status/2085085383956611528

---

## PODCASTS

---

**AI & I by Every — Why the Next Hit AI Product Will Be Social (Best of the Pod)**

**The Takeaway:** 下一个爆款 AI 产品将不是单机模式（single-player）的工具，而是具备社交和网络效应的多人体验（multiplayer experience）——就像 Google 之后出现了 Facebook、Snap、Instagram 一样。

**The Takeaway:** The next hit AI product won't be a single-player tool — it will be a multiplayer experience with social DNA and network effects, just as Google gave way to Facebook, Snap, and Instagram.

---

Benchmark 合伙人 Sarah Tavel 与 Every CEO Dan Shipper 的这次对话，用消费科技的历史周期来理解当下 AI 浪潮的走向。Tavel 提出了一个非常有说服力的框架：技术范式的演进就像一根滑杆，从"深度技术型创始人"逐渐滑向"产品天才型创始人"。

Benchmark partner Sarah Tavel's conversation with Every CEO Dan Shipper uses the history of consumer tech cycles to understand the current AI wave. Tavel offers a compelling framework: the evolution of technology paradigms is like a slider, moving from "deeply technical founders" toward "product genius founders."

Google 的创始团队极度技术化——95% 后端魔法，5% 前端界面。Facebook 相对技术深度稍低，但比 Friendster 和 Myspace 更技术化。到了 Pinterest、Snap、Instagram 时代，CEO 们完全不技术——他们是产品天才。ChatGPT 就像当年的 Google：一个文本框，背后是不可思议的技术。Character AI 也是类似，产品就是模型本身。但 Tavel 认为，随着底层基础设施成熟，我们正在进入下一个范式：产品直觉将变得比技术能力更重要。

Google's founding team was deeply technical — 95% backend magic, 5% frontend interface. Facebook had less technical depth than Google but was more technical than Friendster and Myspace. By the time you get to Pinterest, Snap, and Instagram, the CEOs weren't technical at all — they were product geniuses. ChatGPT is like Google in its era: just a text box with unbelievable technology behind it. Character AI is similar — the product was the model. But Tavel argues that as the underlying infrastructure matures, we're entering the next paradigm where product intuition matters more than technical capability.

Tavel 最犀利的观点是关于社交缺失："Custom GPTs 和 ChatGPT 里的 gems，在我看来简直是种浪费——它显然是由一支能力超强的团队打造的，但这支团队不懂社交。" 她预测会有人创造一个 UGC 社区，让真正擅长使用 AI 的人能分享他们的 prompt 和技巧，让其他人轻松受益。"大多数人对 ChatGPT 的使用只是停留在表面，就像用 Google 一样。"

Tavel's sharpest point is about the missing social layer: "The custom GPTs and gems in ChatGPT feels criminal to me. It's clearly made by a team that is unbelievably capable but isn't social." She predicts someone will create a UGC community where people who are really, really good at using AI make it much easier for the rest of us to take advantage of the technology. "Most people barely scratch the surface — they use ChatGPT like they would use Google."

她提出了一个关键的产品洞察：下一个大产品需要成为你日常使用的 AI 工具本身，而不是附加功能。"我认为它必须成为你代替 ChatGPT 去的地方。你带着个人数据——血检结果、补充剂、孩子的信息——去 Sarah's GPT，而不是 ChatGPT。也许这最终会蚕食 ChatGPT。"

Her key product insight: the next big thing needs to be where you go instead of ChatGPT, not an add-on. "I think it has to be that. You're going to Sarah's GPT — putting in your personal blood tests, supplements, info about your kids — and it all lives there. Then you go to ChatGPT for knowledge work. Or maybe you never do. Maybe this ends up cannibalizing ChatGPT over time."

关于投资，Tavel 说她被"把创业当成使命而非新工作"的创始人吸引："有些创始人觉得这是份很酷的新工作，有些人则视之为一种执念（affliction）。我倾向于后者——那种像皮疹一样必须去挠的冲动，会让他们穿越任何必须穿越的墙壁。"

On investing, Tavel says she's drawn to founders for whom building is a calling, not a cool new job: "Some founders it's almost like a cool new job. And there's some for whom it's an affliction. I'm attracted to the founders for whom it's an affliction — it's like this rash that they just have to scratch, and that's gonna make them run through whatever walls they have to."

她也谈到了 AI 如何改变 VC 的工作方式：她记录每次投资决策的 pre-mortem（受 Annie Duke 启发），认为未来 AI 可以交叉审视她的思维过程，帮她做出更好的决策。但她强调："你不是让 LLM 给你答案，而是让它探查你的思考。最终做决定的还是我们。"

She also discusses how AI will change VC work: she writes pre-mortems for every investment decision (inspired by Annie Duke), and believes AI will eventually cross-examine her thinking to improve decisions. But she emphasizes: "You're not asking the LLM to give you the answer. You're asking it to probe your thinking. Ultimately we're still the decider."

https://www.youtube.com/watch?v=dlI-5W7d7uU

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders