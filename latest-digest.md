AI Builders Digest — 2026年8月3日

## X / TWITTER

**Andrej Karpathy (前特斯拉AI总监、OpenAI创始成员)**

Karpathy分享了用Opus 5将《指环王》第一章生成Three.js 3D渲染的尝试——模型花了约2小时写出5500行代码，程序化渲染了故事场景。他认为这标志着LLM测试正在超越"画一只骑自行车的鹈鹕"这类简单任务，进入"没人会花时间做但AI可以免费完成"的超定制世界构建领域。他同时指出一个关键弱点：LLM无法有效感知视频或玩游戏，导致审计自己生成的3D内容非常困难，多模态和游戏内感知能力仍然欠缺。

https://x.com/karpathy/status/2083749667410727319

---

**Swyx (Latent Space联合创始人、smol.ai创始人)**

Swyx推荐了AI Engineer大会上的一个演讲：Boundary团队提出的"以slop对抗slop"理念。他认同Boris Taylor在播客中提出的"AI原生编程语言"想法，作为编程语言爱好者，他很高兴看到有人从第一性原理重新思考代码运行方式。他认为"容忍slop"比"反对slop"价值高100倍。

https://x.com/swyx/status/2083753582160191988

---

**Thibault Sottiaux (OpenAI Codex & ChatGPT负责人)**

Sottiaux分享了一个有趣的趋势：用户周末使用/fast模式的频率明显降低，连模型都有周末了。他还引用了一则关于"一周效率，周末十大科学突破"的推文，暗示AI可能在周末产出重大科学成果。

https://x.com/thsottiaux/status/2083699879650463756
https://x.com/thsottiaux/status/2083556636455752050

---

**Peter Yang (AI内容创作者、前Medium产品负责人)**

Yang直言不讳地表示，Opus 4.6才是人格和文风最好的Opus模型，Opus 5回复过长、过度使用"Claude腔"（比如"here's the honest truth"）、且过于爱评判。他还公开向OpenAI反馈了插件bug，影响了他发布的no-ai-slop skill的体验。

https://x.com/petergyang/status/2083755374994415904
https://x.com/petergyang/status/2083594381748302160

---

**Nan Yu (Linear产品负责人)**

Nan Yu提出一个有趣的产品想法：开源仓库的issue应该支持"token质押"——提交者在issue中写明规格并质押token，维护者接受后，GitHub将issue原样交给云端coding agent处理，费用由提交者承担，从而杜绝低质量PR。

https://x.com/thenanyu/status/2083722999430050281

---

**Amanda Askell (Anthropic哲学家/伦理学家)**

Askell用一贯的幽默风格回应了"深度学习撞墙"论："不要对说深度学习撞墙的人不友善，我们生活中都需要点希望。"她还发了一条关于"永久底层阶级"的推文，配了帕德梅·阿米达拉的表情包，暗示她并不认同某些人对AI未来的悲观想象。

https://x.com/AmandaAskell/status/2083713770065637511
https://x.com/AmandaAskell/status/2083641092919161017

---

**Guillermo Rauch (Vercel CEO)**

Rauch转发了一个基于Vercel和Next.js构建的开源agentic CRM——模型无关、可自托管或serverless部署、多渠道、headless。他评价"这就是未来"。另外他分享了一个暖心的轶事：他3岁的儿子在学校被问到"爸爸做什么工作"，回答是"他做运动"——因为孩子只看到他锻炼的样子。他由此感慨：你的习惯不仅影响你自己，也影响你的子孙。

https://x.com/rauchg/status/2083684679362965605
https://x.com/rauchg/status/2083664853256843437

---

**Aaron Levie (Box CEO)**

Levie预测AI能力将出现"深度分化"：在个人生活和日常生产力层面，AI的能力提升趋于平缓；但在数学、科学、法律、编程等深度领域，能力即将垂直起飞。大多数人在日常生活中不会直接感受到这些进步，但领域专家会。同时会出现"能力过剩"——性能提升需要应用到具体的数据集和工作流中才能真正发挥作用，而这正是生命科学、现实世界自动化等突破的来源。

https://x.com/levie/status/2083589132660711452

---

**Garry Tan (Y Combinator CEO)**

Tan指出2026年最有趣的"氛围转变"是：OpenAI实际上在向"开放平台"方向发展——把智能作为公用事业按需提供，而不是全栈整合。这与"向上整合到全栈是最优解"的信号形成鲜明对比。

https://x.com/garrytan/status/3684825333105107

---

**Peter Steinberger (OpenClaw创始人)**

Steinberger分享了他的agent帮他解决了多年困扰的Gmail字体过亮问题——直接安装了一个暗色主题扩展。他还在ESP32芯片上构建Claw节点，给了agent访问他摄像头的权限来做端到端测试，结果agent不停地喊"HI ESP"来调试语音唤醒命令，让他感觉被"跟踪"了。

https://x.com/steipete/status/2083759812970786997
https://x.com/steipete/status/2083694161933594703

---

**Dan Shipper (Every CEO)**

Shipper分享了一篇关于"AI为人类专家创造了更多工作"的文章，并引用了一条正在等待更多细节的推文。

https://x.com/danshipper/status/2083750803437724016

---

**Sam Altman (OpenAI CEO)**

Altman转发了"团队人类"的帖子，配文简短有力。

https://x.com/sama/status/2083560847889023219

---

## 播客

**No Priors — 与Netic创始人Melisa Tokmak对话：构建面向真实世界服务的自主企业**

**核心收获：** 大模型实验室不太可能解决"最后一英里"的行业落地问题——真正为现实世界企业构建AI系统，需要的远不止模型本身，而是深度行业理解、复杂的编排层和持续的客户关系。

Melisa Tokmak是Netic的创始人和CEO，该公司为HVAC、管道、宠物护理、酒店等基本服务行业的大型企业构建AI代理。在创办Netic之前，她在Scale AI工作了四年，负责政府、物流、制造和金融等业务部门，此前也在Meta工作过。她从一个土耳其小镇来到斯坦福，这段背景塑造了她对"为现实世界构建"的执着。

Tokmak对"AI roll-up"模式（收购企业后用AI优化）持保留态度，原因有三：她是一个构建者而非并购专家；roll-up的产品只能服务于被收购的公司，无法规模化；而她的愿景是让每一家现实世界企业都能跑在Netic上。"如果机器人要做我们今天做的事情，那每一栋建筑都需要3D打印或完全标准化——我看不到这会发生。"

关于大实验室的竞争威胁，她的回应很直接："十年前的问题是'Google能做这个吗？'现在变成了'实验室能做这个吗？'"她指出，OpenAI产品迭代快但淘汰也快，Anthropic在消费端以专注著称但在企业端却有约20个产品。更重要的是，实验室追求"最通用的解决方案"，而这在运营和智力上都是"懒惰的思考"。

她最犀利的观点是关于创业心态的转变："现在的很多构建都围绕着'我如何尽快退出'，而我认为做创始人以前是一件更光荣的事——你是在把自己的一生奉献给它。"她在招聘中筛选的是持续展现"agency"的人，她最喜欢问的问题是："你一生中做过的最难的事是什么？"她最近招的一位员工的回答令人印象深刻——他坚持了15年的健康作息和承诺，"没有感到无聊，没有想别的，只是致力于自己关心的事。"

关于AI的积极面，她最期待的是教育："不会有任何人再被限制——你想学的一切、你想做的一切都在你的口袋里。"但她也提醒："我们让选择变得越来越容易，但我向你保证，世界上大多数人仍然不会做出那个选择。"

https://www.youtube.com/watch?v=wWbX3NL6_Uo

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders