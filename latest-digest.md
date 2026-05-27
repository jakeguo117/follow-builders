AI Builders Digest — Wednesday, May 27, 2026

## X / TWITTER

**Peter Yang** — Product at Roblox; writes practical AI tutorials

Peter Yang分享了他使用不同AI模型的对比观察：Codex表现出色，尤其在通过浏览来测试自己工作成果的能力上令人印象深刻；但在任何涉及设计或前端任务时，Claude依然是赢家。他还用了一个生动的比喻来解释"tokenmaxxing"——就像在自助餐里拼命吃蟹腿一样，不限量的AI套餐不会永远持续下去，所以趁现在赶紧用。此外，他引用了Ryan Carson的核心教训：过去我们常说做MVP要做最低限度的事情，别花时间在系统上，但现在完全反过来了——你必须花大量时间搭建文档体系，把这些都做成cron job加skill file，突然间你就能完成十个人的工作量。

https://x.com/petergyang/status/2059099566377693305
https://x.com/petergyang/status/2059070818798465330
https://x.com/petergyang/status/2059029752858775581

**Amanda Askell** — Philosopher & ethicist at Anthropic

Amanda Askell澄清了一个重要事实：她已经超过5年没有写过个人博客文章了，所以如果看到任何声称是她写的博文，都是假的。她表示如果将来情况有变会更新，也许她确实应该重新开始写博客了。

https://x.com/AmandaAskell/status/2058994218484338726

**Aaron Levie** — CEO of Box

Aaron Levie引用了高盛CEO对AI与就业问题的乐观看法，并展开了自己的思考。他指出，如果回顾几十年前的工作方式，看到如今一切变得多么快速和容易，你肯定会认为工作岗位早就没有了。但实际情况是，我们不断对一切提出更高的要求——自动化并没有简单地让某个任务变得更便宜，而是让整个产品或服务的标准被拉高了。因为市场上有玩家利用自动化做得更多，所有人的期望都被抬升了。我们得到了更多的金融分析、更全面的法律建议、更定制化的金融服务、更细分的软件产品、更深入的医疗建议——这个过程会一直持续下去。

https://x.com/levie/status/2059025559896883489

**Garry Tan** — President & CEO of Y Combinator

Garry Tan连续分享了对AI agent工作流的思考。他认为这将是常态——prompters of the world unite。他分享了一个关键的eval方法：告诉agent，根据我们对正在做什么、为什么做以及发生了什么事的讨论，用三个不同的前沿模型来审视它的skill file调用代码的效果，并打分——为什么不是10分？怎样才能做到？运行几次后，你会惊讶于它变得多快多好。而且因为这一切都在skill file加代码加eval（LLM as judge）和单元测试中，效果会永久保持。他相信，终极的黄金时代将是这种技术被1000倍地构建和部署。

https://x.com/garrytan/status/2059155926939299968
https://x.com/garrytan/status/2059151927011909800
https://x.com/garrytan/status/2059148823403082154

**Nikunj Kothari** — Partner at FPV Ventures

Nikunj Kothari直言不讳地回应了那些问他"你不是VC吗，为什么在动手搭建？"的人。他的观点很明确：这个领域发展太快了，唯一能让你保持在最前沿的方式就是亲自搭建。每隔几个月就需要重新思考之前的假设。而且，探索这些模型的边界、发现尚未被记录的新能力，本身就非常有趣。他认为，手里握着外星级别的超级智能，却还愿意花几个小时用老方法做事，仅仅因为舒服——这简直荒谬。Automate or get automated，这是我们必须学习的苦涩教训。

https://x.com/nikunj/status/2058927145519562867

**Peter Steinberger** — Creator of OpenClaw

Peter Steinberger分享了OpenClaw在依赖清理方面的进展：移除了Sharp和Jimp，用photon替代——一个运行编译后Rust代码的小型WebAssembly，用于图像处理。从140MB降到了2MB。他还给社区提出建议：在写skill的时候，要让你的agent注意token效率，放松语法要求。他观察到太多skill在描述里写成了书，而这些内容会被加载到每一次上下文中。他写了一个skill来找出最严重的违规者。此外，他引用了关于安全与"clankers"的讨论。

https://x.com/steipete/status/2058922222790525272
https://x.com/steipete/status/2058917897590673525
https://x.com/steipete/status/2058884046940225918

**Dan Shipper** — CEO of Every

Dan Shipper分享了几条内容：他推荐了Every团队内部对"After Automation"一文的回应；他还注意到教皇最近发表的关于人类面临选择的言论——要么建造新的巴别塔，要么建造神与人共居的城市——与Every在2024年发表的文章不谋而合。

https://x.com/danshipper/status/2059014616059879501
https://x.com/danshipper/status/2058962119287038145

## OFFICIAL BLOGS

（本周无新的官方博客内容）

## PODCASTS

**The MAD Podcast with Matt Turck** — Why AWS and Azure Cannot Run Autonomous AI – Ivan Burazin (Daytona)

**The Takeaway:** 每一个AI agent都需要一台属于自己的电脑——这个"沙箱"不是可选项，而是基础设施层的必需品，而现有的云服务（AWS、Azure）从根本上就不适合这个新世界。

Ivan Burazin是Daytona的CEO，Daytona是当前最受关注的agent基础设施创业公司之一。如果你最近在各种AI agent讨论中频繁听到"sandbox"这个词，但不太确定它到底意味着什么，这期节目就是最好的入门指南。

Ivan的核心观点非常直接：他把agent视为"数字化知识工作者"。一个知识工作者要完成复杂的工作，就需要一台电脑。对于agent来说，这台电脑就是sandbox。他讲了一个生动的例子——有一次他让Claude去银行取数据，Claude回答说"好的，登录然后把权限给我"。他当场就意识到，这完全行不通。所以解决方案是给agent一台独立的机器，甚至给它一个独立的手机号来做2FA认证。这台机器有自己的账户、权限限制——可以查看数据但不能花钱——就像一个真正的数字员工。

最反直觉的观点在于：为什么AWS和Azure做不了这个？Ivan解释，现有云服务的基础架构是为"无状态"应用设计的——网站部署上去后，你不希望它在运行中随意变化。但agent需要的是有状态、可持久化、可随时fork和snapshot的环境。他用了一个精妙的比喻：卡车和跑车都有四个轮子和引擎，但底盘、重量平衡、设计目标完全不同。你不能用造卡车的方式去造跑车。Daytona不得不抛弃Kubernetes，自己写调度器，因为现有的编排工具根本不是为了这种超快启动、长时间运行、高并发的agent工作负载而设计的。

技术上，Daytona可以在60毫秒内启动一个sandbox，70秒内启动50,000个。他们支持多种隔离方案——从Firecracker micro VM到容器到完整的QEMU——根据用户需求自动选择最合适的。他们还实现了live migration，让sandbox可以在底层服务器维护时无缝迁移，而不中断运行。

Ivan还分享了他对agent stack的整体看法：模型是大脑，工具（MCP、sandbox等）是手，memory是短期记忆，orchestration是管理。他认为当前最未被解决的问题是模型的学习能力——模型目前不会在工作中学习，你纠正它五次，第六次它可能还会犯同样的错误。这需要根本性的改变，可能是持续的RL训练，也可能是模型架构本身的变革。

在go-to-market方面，Ivan的分享同样精彩。他从一个极度害羞、有舞台恐惧症的人，到被迫主持自己的大会，再到把活动营销做成Daytona的核心获客引擎。他的哲学是：如果产品和其他人一样好，那什么能让你胜出？答案是awareness（知名度）和preference（偏好）。他坚持认为，客户支持的核心不是解决所有问题，而是快速响应——让客户知道他们的"问题"已经转移到了你身上，他们可以安心了。

https://www.youtube.com/watch?v=kMXJrzAa5fM

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders