AI Builders Digest — Tuesday, June 16, 2026

## X / TWITTER

### Swyx (swyx on X)

Swyx highlights two big signals this week. First, he's been using Anthropic's Ultracode and notes that few outside Anthropic have access yet — it's "scarily good at burning tokens" but requires you to set up your repo for parallelization to take advantage of subagent fanout. His core insight: when you realize how much knowledge work is just "yak shaves that require judgment," you see that dynamic agent workflows aren't just for coding. Second, he quotes Satya Nadella's framing of "loops as IP" — the idea that the real enterprise opportunity isn't picking the best model, but building a learning loop on top of models where human capital and token capital compound. As Satya put it: "You can offload a task, or even a job, but you can never offload your learning."

Swyx 本周放出了两个重要信号。首先，他已经在用 Anthropic 的 Ultracode，并表示 Anthropic 之外拿到权限的人还不多——这玩意儿"烧 token 的能力强得吓人"，但你需要把仓库配置成并行化，才能充分利用子 agent 的扇出能力。他的核心洞察是：当你意识到有多少知识工作其实就是"需要判断力的琐碎破事"时，你就会明白动态 agent 工作流不只是用来写代码的。其次，他引用了 Satya Nadella 关于"循环即 IP"的框架——真正的企业机会不是选最好的模型，而是在模型之上构建一个让人力资本和 token 资本都能复利增长的学习循环。正如 Satya 所说："你可以外包一个任务，甚至一个岗位，但你永远无法外包你的学习。"

Links: https://x.com/swyx/status/2066415484149633329, https://x.com/swyx/status/2066235625695850526

---

### OpenAI Codex & ChatGPT lead Thibault Sottiaux

Thibault shares a key design principle behind Codex: the agent can see and set its own `/goal`. "Everything we build, we build also as a tool for the agent," he says. This is a generalization of meta-prompting — instead of hardcoding a task, you let the agent set its own task based on your intent. It's a small detail that hints at a much deeper philosophy: the agent isn't just executing instructions; it's defining its own mission.

Thibault 分享了 Codex 背后的一个关键设计原则：agent 可以看到并设定自己的 `/goal`。"我们构建的一切，同时也是为 agent 构建的工具。"这是 meta-prompting 的泛化——不是硬编码一个任务，而是让 agent 根据你的意图自己设定任务。这个小细节暗示了一个更深层的理念：agent 不只是执行指令，它正在定义自己的使命。

Link: https://x.com/thsottiaux/status/2066270561081454989

---

### Peter Yang (petergyang on X)

Peter shares interviews he's done with three AI builders — Kieran, Kun, and Matt — and asks who he should interview next. He also asks a genuinely curious question about why China and India can't train World Cup-qualifying football teams, which sparks a long thread.

Peter 分享了他对三位 AI 构建者（Kieran、Kun 和 Matt）的采访，并询问大家下一个该采访谁。他还问了一个发自内心好奇的问题——为什么中国和印度训练不出能打进世界杯的足球队——引发了一场长长的讨论。

Link: https://x.com/petergyang/status/2066309743619244174

---

### Linear head of product Nan Yu

Nan Yu offers a sharp counterpoint to the idea that pair programming is dead: "everyone pair programs now, with a robot." The implication is clear — the human-to-human ritual of pairing isn't disappearing, it's being augmented. The best teams will be the ones who learn how to pair well with their AI copilot.

Nan Yu 对"结对编程已死"的说法给出了犀利的反驳："现在每个人都在结对编程，只不过搭档是个机器人。"言下之意很明确——人与人之间的结对仪式并没有消失，而是在被增强。最好的团队将是那些学会如何与 AI 副驾驶好好搭档的团队。

Link: https://x.com/thenanyu/status/2066190061419282602

---

### Replit CEO Amjad Masad

Amjad calls Satya Nadella's recent essay on enterprise AI "the most inspiring positive-sum vision for AI in the enterprise." He quote-tweets it with strong approval, signaling that Replit is aligned with the idea that the real value isn't in models themselves but in the learning loops built on top of them.

Amjad 称 Satya Nadella 最近关于企业 AI 的文章是"关于企业 AI 最有启发性的正和愿景"。他引用了这篇文章并表达了强烈认同，暗示 Replit 认同一个核心理念：真正的价值不在于模型本身，而在于模型之上构建的学习循环。

Link: https://x.com/amasad/status/2066195933969412098

---

### Vercel CEO Guillermo Rauch

Guillermo celebrates two milestones. First, his flight to London is Starlink-enabled — "the greatest advancement to air travel since the Wright brothers." Second, the open-source AI skills platform at https://openai.com/skills has passed 700,000 community-built skills, all organic and community-driven. He calls it "the open⎵ai ecosystem!"

Guillermo 庆祝了两个里程碑。第一，他飞往伦敦的航班配备了 Starlink——"自莱特兄弟以来航空旅行最伟大的进步"。第二，开源 AI skills 平台（https://openai.com/skills）已突破 70 万个社区构建的技能，全部是自发和社区驱动的。他称之为"open⎵ai 生态系统！"

Links: https://x.com/rauchg/status/2066315273947500699, https://x.com/rauchg/status/2066299732277031042

---

### Box CEO Aaron Levie

Aaron Levie has two big takes. First, he doubles down on Satya's "learning loop" thesis: the companies that can encode their unique IP, institutional knowledge, and data into a format that lets them capture AI gains will be in the best position. He emphasizes that "the applied AI layer will gain so much value over the coming years" because the power accrues to whoever can best leverage any AI system against their information. Second, he makes a geopolitical argument: the big winner from model-pulling controversies will be open weights models. If any model can become unavailable to your country overnight, sovereign AI becomes a necessity — and that means non-US open weights models will thrive. His advice: America should be doing "a ton more OSS innovation."

Box CEO Aaron Levie 有两个重要观点。首先，他进一步阐述了 Satya 的"学习循环"论点：能够将自身独特的 IP、机构知识和数据编码成一种格式，从而捕获 AI 增益的公司将处于最佳位置。他强调"应用层 AI 在未来几年将获得巨大价值"，因为权力会流向那些最能利用 AI 系统处理自身信息的人。其次，他提出了一个地缘政治论点：模型被下架争议的最大赢家将是开放权重模型。如果任何模型都可能在一夜之间对你的国家不可用，那么主权 AI 就成为了必需品——这意味着非美国的开放权重模型将会蓬勃发展。他的建议是：美国应该"做更多开源创新"。

Links: https://x.com/levie/status/2066237607244427761, https://x.com/levie/status/2066167615618466060

---

### Y Combinator President & CEO Garry Tan

Garry Tan shares three thoughts. First, he quotes a post about open source being "the escape hatch for businesses to control their own destiny." Second, he notes that the next generation of world-changers will be those most adept at making "long-running multi-stage multi-team agent tasks work extremely well, at high volume, across every part of their lives." Third, in a playful post, he suggests that certain enthusiastic AI users are basically "gbrain users" — a nod to his own AI tool.

Garry Tan 分享了三个想法。第一，他引用了一篇帖子，称开源是"企业掌控自身命运的逃生舱"。第二，他指出，下一代改变世界的年轻人，将是那些最擅长让"长时间运行、多阶段、多团队的 agent 任务在个人和工作的每个方面都能高效、大规模运转"的人。第三，他在一篇调侃性帖子中暗示，某些热情的 AI 用户基本上就是"gbrain 用户"——暗指他自己的 AI 工具。

Links: https://x.com/garrytan/status/2066307697574862905, https://x.com/garrytan/status/2066269412391637050

---

### Builder Zara Zhang (zarazhangrui on X)

Zara shares a hard-won lesson about building AI skills: "You don't make a good skill by writing a skill. You make it by doing the thing, fixing it 20 times, then telling the AI to bottle up everything you just did." In other words, skills should emerge from practice, not from planning. She also posts a link to a new YouTube video.

Zara 分享了一个关于构建 AI skills 的来之不易的教训："你不是靠写一个 skill 来做出一个好 skill 的。你是通过做那件事、修复它 20 次、然后告诉 AI 把你刚才做的一切打包起来。"换句话说，skills 应该从实践中涌现，而不是从规划中产生。她还发布了一个新 YouTube 视频的链接。

Link: https://x.com/zarazhangrui/status/2066388749244854771

---

### Peter Steinberger (steipete on X)

Peter shares a practical tip for bad in-flight internet: use Mosh with tmux or zellij. He prefers zellij but says either works. A small but useful piece of craftsmanship advice for the remote-working AI builder.

Peter 分享了一个应对糟糕机上网络的小技巧：使用 Mosh 搭配 tmux 或 zellij。他个人偏好 zellij，但表示两者都行。这是给远程工作的 AI 构建者的一条小而实用的手艺建议。

Link: https://x.com/steipete/status/2066427449551036469

---

### Every CEO Dan Shipper

Dan announces that Fable is now free. No further details — just "FREE FABLE" — but the enthusiasm from 600+ likes suggests this is a significant move for the AI-powered storytelling platform.

Dan 宣布 Fable 现在免费了。没有更多细节——就是"FREE FABLE"——但 600 多个点赞的热情表明，这对这个 AI 驱动的故事平台来说是一个重要举措。

Link: https://x.com/danshipper/status/2066217865943093514

---

## PODCASTS

### Training Data — LIVE: Jensen Huang on Building the Dynamo of the Intelligence Age

**The Takeaway:** AI isn't a chatbot — it's a new kind of factory that turns electrons into intelligence, and the industrial opportunity is a five-layer cake worth trillions.

**The Takeaway：** AI 不是聊天机器人——它是一种把电子转化为智能的新型工厂，而工业机会是一个价值数万亿美元的五层蛋糕。

NVIDIA CEO Jensen Huang sat down for a live interview at what appears to be a major investment conference, and he delivered what might be the clearest mental model for the AI industry yet. He starts by reframing what AI actually is. Most people think of it as a chatbot — you prompt it, it responds. But Jensen argues that the real breakthrough happened when AI went from "generation" (text to image, image to text) to "thinking" — the ability to reason, plan, and control tools. That shift, which happened in the last two years, is what made AI valuable enough to pay for by the hour.

NVIDIA CEO 黄仁勋在一次大型投资会议的现场访谈中，提出了可能是迄今为止最清晰的 AI 产业心智模型。他首先重新定义了 AI 到底是什么。大多数人认为 AI 就是聊天机器人——你给它提示，它回应你。但 Jensen 认为，真正的突破发生在 AI 从"生成"（文本到图像、图像到文本）进化到"思考"——即推理、规划和操控工具的能力。这个转变发生在过去两年里，正是它让 AI 变得有价值到可以按小时付费。

The core of his talk is a new industrial framework. He describes a "five-layer cake" of AI investment opportunity:

他演讲的核心是一个新的产业框架。他描述了一个"五层蛋糕"式的 AI 投资机会：

1. **Energy** — The bottom layer. Power generation is the single greatest energy opportunity in generations. Every form of sustainable energy — nuclear, solar, wind — will get funded.
2. **Chips & networking** — The computers themselves. NVIDIA's racks (72 chips, 2 tons, $4M each) are the most expensive pieces of equipment in the world, and they're being manufactured at phone-like volume.
3. **Infrastructure** — Land, power, shell, money, data center operations. All in scarce supply.
4. **Models** — OpenAI, Anthropic, and beyond. But Jensen warns: don't stop here. AI has learned the "language" of anything with structure — proteins, genes, cells, physics, 3D worlds. The model layer is bigger than just language models.
5. **Applications** — $100B in VC investment last year alone. Financial services, legal, accounting, transportation, logistics. This is where the human condition gets enhanced.

1.  **能源** — 最底层。发电是几代人以来最大的能源机会。每一种形式的可持续能源——核能、太阳能、风能——都将获得资金支持。
2.  **芯片与网络** — 计算机本身。NVIDIA 的机架（72 颗芯片，2 吨重，每台 400 万美元）是世界上最昂贵的设备，而且正在以手机级别的产量被制造出来。
3.  **基础设施** — 土地、电力、厂房、资金、数据中心运营。全部供不应求。
4.  **模型** — OpenAI、Anthropic 等。但 Jensen 警告：不要止步于此。AI 已经学会了任何有结构之物的"语言"——蛋白质、基因、细胞、物理学、3D 世界。模型层比单纯的语言模型要大得多。
5.  **应用** — 仅去年就有 1000 亿美元的 VC 投资。金融服务、法律、会计、交通、物流。这里是人类境况得到改善的地方。

Perhaps the most memorable part of the conversation is Jensen's response to AI job fears. He tells a story about the computer scientist who predicted radiology would be wiped out by AI — and was wrong. Radiology demand went up; more radiologists were hired. Why? Because the *purpose* of a radiologist isn't to look at scans — it's to work with doctors to diagnose disease. AI automated the task, not the purpose. Same for software engineers: "Typing is not the job of a software engineer. Coding is not their job. Solving problems is their job."

整场对话中最令人难忘的部分，也许是 Jensen 对 AI 取代工作的恐惧所做的回应。他讲了一个故事：有计算机科学家曾预测放射学会被 AI 消灭——但错了。放射科的需求上升了；雇佣的放射科医生更多了。为什么？因为放射科医生的*目的*不是看扫描图像——而是与医生合作诊断疾病。AI 自动化的是任务，而不是目的。软件工程师也一样："打字不是软件工程师的工作。写代码不是他们的工作。解决问题才是他们的工作。"

His closing line is worth remembering: "You may or may not lose a job to an AI. But you will absolutely lose a job to someone who uses AI."

他最后的那句话值得铭记："你可能会、也可能不会被 AI 抢走工作。但你绝对会被一个使用 AI 的人抢走工作。"

Link: https://www.youtube.com/watch?v=2UpQbeAZuqA

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders