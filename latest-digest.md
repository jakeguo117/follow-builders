AI Builders Digest — 2026年8月24日

## X / TWITTER

**OpenAI Codex负责人 Thibault Sottiaux**

Thibault Sottiaux在Codex中解决了速率限制问题，他识别出效率低下的问题，包括长时间会话中的图像使用、高p95+的计算机使用，以及一个消耗过多使用量的标题生成功能。一支专项团队正在修复这些问题，并将在明天为所有付费订阅用户完全重置使用量。他还提到发现了一种无关的新方法，可以显著提高效率，将于下周进行探索。

链接：https://x.com/thsottiaux/status/2091407991736332689

**AI教育创作者 Peter Yang**

Peter Yang分享了一个隐私技巧：在Chrome中打开Google账户权限页面，然后让Codex或Claude Code扫描打开的标签页，选择要撤销访问权限的应用，AI会帮你完成操作。他借此机会断开了大约一半不应该再拥有其Google信息的应用。他还宣布正在开发一个名为"/fuck-cancer"的新AI技能，旨在帮助患者及其家属应对治疗过程，并征求社区意见。

链接：https://x.com/petergyang/status/2091331251211059468
链接：https://x.com/petergyang/status/2091239339204415969

**Meta AI高级总监 Madhu Guru**

Madhu Guru继续他的"如何构建优秀评估"系列，分享了第六部分，关于在评估上进行爬山优化——选择一个重要的维度并对其进行优化，无论是提高现有功能的质量、扩展到相邻用例，还是降低成本或延迟。他建议先用最好的模型推出产品，一旦用户喜欢这种体验，再通过爬山优化来用更小、更便宜、更快的模型实现类似的质量。关键是要有能告诉你是否在朝正确方向前进的评估。

链接：https://x.com/realmadhuguru/status/2091278653435072523

**Replit CEO Amjad Masad**

Amjad Masad发布了一条简短但有力的推文，指出"一周有7天，这意味着7次发布"，暗示Replit的快速发布节奏。"很快"变成了3个月。

链接：https://x.com/amasad/status/2091346778746757204
链接：https://x.com/amasad/status/2091217410615644349

**Vercel CEO Guillermo Rauch**

Guillermo Rauch分享了他对美国和阿根廷的看多观点，称这两个国家是"最自由的国家"，同时也拥有"最壮丽的大地和地理"。他还称旧金山是"地球上的天堂"。

链接：https://x.com/rauchg/status/2091338152791474331
链接：https://x.com/rauchg/status/2091263423359389951

**Box CEO Aaron Levie**

Aaron Levie认为，AI的普及受限于缺乏好的评估，这比大多数人意识到的更重要。虽然模型发布时的通用评估很有帮助，但更大的机会在于针对企业主要工作流程的评估，甚至细化到单个公司的具体情况。"你无法自动化你无法评估进展的东西。企业不能只凭感觉行事。"

链接：https://x.com/levie/status/2091359223368315050

**Builder Zara Zhang**

Zara Zhang观察到一种现象：有才华的人在自己的项目上借助AI可以实现10倍的潜力提升，但放在大型组织中，最多只能提升20%的潜力，有时甚至会降低。这就是为什么越来越多有才华的人离开大公司——唯一的例外可能是OpenAI和Anthropic这样的顶级AI实验室。她还指出："每个在AI使用上领先的人都觉得自己落后了。"

链接：https://x.com/zarazhangrui/status/2091379220257603593
链接：https://x.com/zarazhangrui/status/2091338374447763481

**FPV Ventures合伙人 Nikunj Kothari**

Nikunj Kothari批评了一些年轻创业者试图通过激怒投资者来获取资金的策略，指出"用愤怒诱饵吸引投资者，然后给他们发SAFE文件让他们直接给你打钱，这不是投资运作的方式"。他还评论了LinkedIn上的内容质量，称其"已经跌到了难以想象的低水平"。

链接：https://x.com/nikunj/status/2091381756012511244
链接：https://x.com/nikunj/status/2091220881590927441

**Every CEO Dan Shipper**

Dan Shipper宣布Every正在招聘，并分享了他对"agent native"（原生代理）方法的认可。

链接：https://x.com/danshipper/status/2091361962068254840
链接：https://x.com/danshipper/status/2091162447029608735

## PODCASTS

**AI & I by Every — Microsoft的代理互联网愿景：CTO Kevin Scott（播客精选）**

**核心观点：** AI模型的能力已经超过了我们在产品中实际交付的能力——这个"能力过剩"（capability overhang）是当前行业最大的机遇，而弥合这一差距的关键在于构建一个类似互联网的"代理网络"（agentic web），让代理能够通过开放协议与系统交互。

微软CTO Kevin Scott与Every CEO Dan Shipper的对话深入探讨了代理如何改变软件开发和互联网本身。Scott提出了一个引人注目的论点：去年人们还在质疑scaling laws是否会继续成立，但今年已经证明它们依然有效，模型的能力已经超过了产品实际交付的能力。这意味着行业需要集体努力，缩小模型能力与用户实际体验之间的差距。

Scott将当前的代理网络与早期互联网进行了类比：MCP之于代理网络，就像HTTP之于互联网；NL Web则扮演着类似HTML的角色。"如果代理要有用，它们就必须代表你采取行动。它们必须能够使用工具、修改系统、查阅多样且丰富的信息源。"

在安全方面，Scott认为MCP的简洁性使得社区能够相对容易地确定安全模型。他提到需要为代理建立身份系统，以便构建授权体系，让代理能够代表特定用户请求权限。他还驳斥了"封闭垂直整合vs开放创新"的二元对立，认为两者可以兼得——AI本身可以用来增强安全性，比如代理能够注意到可疑活动并主动提醒用户。

关于AI辅助编程对"手艺感"的影响，Scott以自己40年的编程经验和木工爱好为例，指出这并非第一次技术变革引发争论——就像当年"用电动工具还算不算真正的木工"的争论一样。"保持好奇心。尝试一下。如果对你有用，就用它。如果没用，就不用。"他预测一年后，那些还在以"技术不够成熟"为借口拖延的人将远远落后，因为一切都在逐年变得更便宜、更强大。

链接：https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders