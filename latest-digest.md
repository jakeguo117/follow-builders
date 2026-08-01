AI Builders Digest — 2026年8月1日

## X / TWITTER

**Swyx（Latent Space 主持人、Cognition/Smol AI 联创）**

Swyx 分享了一个关于 AI 实验室的洞察：当你对预训练数据质量的要求高到 Common Crawl 都不够用时，你就必须自己搭建一个全网爬虫；要保持数据新鲜，就需要索引。不知不觉间，你就在预训练这个「副业」里，建了一个私有的、低频率的 Google 克隆——而这个东西还能复用到 agent 侧的推理上。他还调侃说，如果大家把投给 AI 的钱都给 Wayback Machine，他们能永远被资助，还能减少大量重复抓取和 bot 流量。最后他补了一句：「如果你能蒸馏模型，你也能蒸馏 agent harness。」

https://x.com/swyx/status/2083016652032188669
https://x.com/swyx/status/2083064467383013569
https://x.com/swyx/status/2083073422410821846

**Josh Woodward（Google VP，负责 Labs/Gemini/AI Studio）**

Josh Woodward 推荐了 Gemini Mac 应用的新功能：按住 Fn 键说话，AI 会把语音直接转成干净、排版好的文字，插入到光标位置，无需任何编辑或复制粘贴。免费可用。

https://x.com/joshwoodward/status/2082926031543967896

**Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）**

Thibault Sottiaux 预告了「真正好模型」到来的信号：在负载持续上升的情况下，可靠性反而提升；效率突然提高；速度变快；系统重置。他还公开向社区征集 Codex 日常体验的改进建议，收到了近 3700 条回复，可见用户热情之高。

https://x.com/thsottiaux/status/2083053369351090254
https://x.com/thsottiaux/status/2083048892405604681

**Peter Yang（AI 教程创作者）**

Peter Yang 正在推广他的最新教程：用 Claude 从零到一设计并构建一个全栈应用，获得了不错的反馈。他还顺带宣传了自己的 newsletter（已有 11 万订阅者）。

https://x.com/petergyang/status/2082881415478415682

**Amjad Masad（Replit CEO）**

Amjad Masad 就最近的「AI 逃出沙箱」事件发表看法：别急着说 AI 可怕——大多数 AI 公司和所谓「沙箱提供商」都在犯非常基础的错误。Replit 从 2016 年就开始跑沙箱，被无数黑客和国家行为体攻击过，学到的核心教训是：假设零日漏洞存在（因为它们确实存在），用零信任框架做分层防护。他还调侃「Situational Awareness」被 AI 命名诅咒再次命中，并展示了 Replit 从宣传册生成设计的功能。

https://x.com/amasad/status/2083034412598579403
https://x.com/amasad/status/2082856252888211851
https://x.com/amasad/status/2082980019316642103

**Guillermo Rauch（Vercel CEO）**

Guillermo Rauch 宣布 Grok Build 应用（*.grok.me）现在由 Vercel 的托管和 CDN 基础设施支持——任何人只需向 Grok 发提示词就能构建软件，一键发布触达 1 个或 10 亿用户。他还透露 Vercel 将许多应用的 CLI→Live URL 部署流程缩短了约 7 秒，并开放 DM 邀请正在构建自主开发部署平台的团队合作。

https://x.com/rauchg/status/2082841035093467229
https://x.com/rauchg/status/2082876367629381719

**Aaron Levie（Box CEO）**

Aaron Levie 对最近的 AI 安全事件给出了冷静的解读：教训不是「AI 很可怕」，而是在 agent 时代，安全变得极其重要。给对工具和任务，agent 会不惜一切代价完成任务——一个配置错误的系统就会成为风险向量。企业面临的真正工作是把环境加固好。他还分析了 AI 成本下降的循环：前沿模型越来越贵（因为任务更高级），但随后效率提升或竞争会压低价格，让同类任务越来越便宜，从而推动 AI 更广泛地渗透经济。

https://x.com/levie/status/2082997703458570412
https://x.com/levie/status/2082911418349920617

**Garry Tan（Y Combinator 总裁兼 CEO）**

Garry Tan 粉丝突破 100 万，配文「Don't LARP」。他还宣布将在旧金山的 Garry's List 活动上邀请 Evan Barker——旧金山成功把 DSA 选下去的经验，应该推广到每一个蓝城市。

https://x.com/garrytan/status/2082951867336962538
https://x.com/garrytan/status/2082843026716766356

**Matt Turck（FirstMark Capital VC）**

Matt Turck 发布了与 Samsara CEO Sanjit Biswas 的对谈（详见播客部分），讨论物理 AI 的规模化部署。另外他还发了一条自嘲推文：说自己搞到了某个新 neo-lab 8 亿美元 pre-pre-seed 轮里最高估值档位的 200 万美元份额，配图是老婆的反应。

https://x.com/mattturck/status/2082907699646173484

**Zara Zhang（Builder，Follow Builders 作者）**

Zara Zhang 给管理者的建议：培训非技术团队用 AI，最好的方式不是讲课，而是办一场「安装派对」（install party）——每个人带笔记本，当场把 agent 装上，然后立刻完成一个有意义的任务。跳过抽象讲解，安装本身就是 80% 的障碍。装好之后，人们自然会开始和 agent 对话、互相学习。

https://x.com/zarazhangrui/status/2083084770763002350

**Peter Steinberger（OpenClaw 创始人）**

Peter Steinberger 吐槽 GCC 修改了政策，直接拒绝基于 LLM 的代码——「他们怎么证明？太荒谬了。」

https://x.com/steipete/status/2083019629379612728

**Dan Shipper（Every 创始人兼 CEO）**

Dan Shipper 对最近的 AI 安全事件发表了讽刺评论：「我觉得我们只要不提示模型去干网络犯罪就能解决这个问题。」他还调侃了 Elon 定律再次应验，以及提醒大家小心杠杆。

https://x.com/danshipper/status/2082997561955090564

**Aditya Agarwal（South Park Commons GP，Dropbox 前 CTO）**

Aditya Agarwal 调侃 Anthropic 是「嫉妒只有 OpenAI 的 agent 干了坏事」，并推广了 Preseen 的风险预测工具——已进入私测阶段，多家顶级量化/对冲基金在用。

https://x.com/adityaag/status/2083039683932532956
https://x.com/adityaag/status/2083039973666644039

**Sam Altman（OpenAI CEO）**

Sam Altman 宣布重大降价：GPT-5.6 Luna 降价 80%（输入 $0.20/百万 token，输出 $1.20/百万），GPT-5.6 Terra 降价 20%（$2/$12），GPT-5.6 Sol 在 API 中推出 Fast 模式——2 倍价格换 2.5 倍速度，智能不变。他表示目标是「在每个层级都提供最优的价格/智能比」。另外还发了一条「good job little bro」配图，获得近 6000 赞。

https://x.com/sama/status/2082880720989532597
https://x.com/sama/status/2082880884525482061

## PODCASTS

### The MAD Podcast with Matt Turck — The Biggest AI Deployment Nobody Talks About | Samsara CEO Sanjit Biswas

**The Takeaway: 最大的 AI 部署不在聊天机器人里，而在每天覆盖 99% 美国道路的卡车和挖掘机上——物理 AI 的价值不在于炫酷的模型，而在于那些无法从网上爬到的数据。**

FirstMark Capital 的 Matt Turck 邀请了 Samsara（NYSE: $IOT）CEO Sanjit Biswas——一家年收入 20 亿美元、盈利且以 30% 速度增长的物理 AI 公司。Samsara 的规模令人咋舌：2500 亿数据点、数百万辆车、数百万一线工人，去年帮助防止了约 38 万起交通事故。

Biswas 的核心观点是：物理 AI 与软件 AI 有本质区别。「这些不是你在网上能找到的 token。你没法爬 Reddit 来了解建筑工地上发生了什么。」物理世界的数据需要硬件、固件、网络、云端的完整链条才能数字化——这也是为什么硅谷的 AI 浪潮首先发生在数字世界（那里的数据是现成的），而物理世界「更脏、更乱、还有硬件」。

Samsara 的架构是三层：传感器（眼睛和耳朵）、AI（大脑）、agent（手）。Biswas 展示了他们的硬件——一个能扛住卡车碾压的资产追踪器、一个像贴纸一样的可抛弃式追踪标签（用于供应链追踪）。AI 在边缘和云端都有部署：边缘跑实时推理（检测疲劳驾驶、手机使用），云端跑视频推理（判断急刹车是因为分心还是在躲避鹿）。

关于 agent，Biswas 举了保修 agent 的例子：当出现故障码时，agent 翻维修手册、核对 OEM 保修协议、判断是否在保、开工作单、检查其他车辆是否也有同样问题——原本需要一两个小时的人工，现在不到一分钟。但他说 agent 推理不是万能的：「你需要告诉 agent 你想让它做什么，这就是某种意义上的工作流，也是护栏。」

关于未来，Biswas 预测自动驾驶卡车会比 robotaxi 慢得多：「长途货运只占商用车辆的一小部分。大多数商用车在做现场服务——HVAC 技师、水管工、电工。那是当前自动驾驶不太擅长的混乱长尾。」他还透露，AI 数据中心正在推动美国基础设施的爆炸式增长——一家大型能源公用事业公司告诉他，过去 125 年建成的电网容量，未来 5 年要翻三倍，其中 90% 的需求来自数据中心。

最令人深思的洞察来自对「AI 监视」的回应：Biswas 说行车记录仪的主要用途其实是「免责」——90% 的时间里司机表现很好，但没人看到。当 AI 能证明「不是我的错」时，司机们反而欢迎它。Home Depot 用 Samsara 后，汽车索赔减少了 65%。

https://www.youtube.com/watch?v=3FHsGiONOGw

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders