AI Builders Digest — June 13, 2026

## X/TWITTER

### swyx (swyx on X) — AI engineer, DX Tips, Cognition, Temporal, AI Engineer Summit, Latent Space

Swyx shared a concept he calls "Loopcraft" — the ability to stack loops effectively will define the next century of AI work. The key insight: knowing when to go **down** a loop (for reliability when things go wrong) is valuable early on, but going **up** a loop as models improve (for leverage) will be even more important.

He also vented a builder pain point: none of the existing vibecoding platforms (Vercel, Cloudflare, Netlify) truly "close the loop" on error handling and failure notifications. He's building his own platform because he's tired of configuring Posthog, Arize, and other infra for every single project — all of that should be swallowed into one thing.

Lastly, he congratulated Ona on joining OpenAI, hinting at what's next for Codex.

https://x.com/swyx/status/2065307558198567206
https://x.com/swyx/status/2065264832056889711
https://x.com/swyx/status/2065176231453282777

### Thibault Sottiaux (thsottiaux on X) — Codex & ChatGPT @ OpenAI

Thibault welcomed Ona to OpenAI, saying he's "beyond excited" to work with Johannes and team to build the future of Codex.

https://x.com/thsottiaux/status/2065193272952422852

### Peter Yang (petergyang on X) — AI tutorials & interviews

Peter shared that you can now play FIFA on Netflix using your phone as a controller — and it's pretty great. He also compared AI models to RPGs, and shared his current learning plan.

https://x.com/petergyang/status/2065294767760769222
https://x.com/petergyang/status/2065283568918794658

### Amjad Masad (amasad on X) — CEO @ Replit

Amjad declared a milestone: for the first time, he's vibecoding with zero frustration and in a complete state of flow, so much so that he's running out of ideas. His take: we don't need more IQ for vibecoding, just cheaper and faster models.

He also showed what building a company looks like on Replit — one canvas with your web app, mobile app, marketing, and App Store materials. Click into any one and start building.

Finally, he noted that Replit's Agent team made Fable's cost "stomachable" — fewer mistakes net net makes it more affordable.

https://x.com/amasad/status/2065236013627351551
https://x.com/amasad/status/2065241626436583860
https://x.com/amasad/status/2065259509082411233

### Guillermo Rauch (rauchg on X) — CEO @ Vercel

Guillermo announced Vercel + Grok integration. He also highlighted a case study where a Shopify storefront built with v0 + Cursor AI processed 500+ orders in 2 minutes on a fully custom Next.js storefront — calling it proof that anyone can now dream → build → ship → sell.

https://x.com/rauchg/status/2065118448947216681
https://x.com/rauchg/status/2065116986678624419

### Aaron Levie (levie on X) — CEO @ Box

Aaron shared data from Box's survey of 1,640 IT leaders: the companies that adopted AI the most are planning to grow headcount the most. His read: the narrative of jobs being wiped out assumes companies take a fixed approach to what they want to accomplish. In practice, AI adoption causes companies to light up more projects, sell to more customers, and automate more processes — all of which leads to more work for people.

https://x.com/levie/status/2065287110744297809

### Garry Tan (garrytan on X) — President & CEO @ Y Combinator

Garry pushed back on a writer's claim that "gifted" is a meaningless category. He pointed out that a 35-year study found 12.3% of 677 gifted kids reached "eminence" (full professor, Fortune 500 exec, federal judge) — and that the general population's base rate for such outcomes is far closer to zero. 12.3% is the selection mechanism working spectacularly.

He also hosted Gavin Newsom at a Garry's List event at YC, discussing YIMBY, the "asset seizure tax" (Prop 13 reform), and keeping California's innovation wave going.

https://x.com/garrytan/status/2065314389196959813
https://x.com/garrytan/status/2065298785463579053

### Zara Zhang (zarazhangrui on X) — Builder, Follow Builders

Zara shared a sneak peek of a deck she'll be presenting at an upcoming event, generating 47 likes and engagement from the builder community.

https://x.com/zarazhangrui/status/2065140462709506108

### Nikunj Kothari (nikunj on X) — Partner @ FPV Ventures

Nikunj shared a simple but powerful take: what you work on has never been more important. Make sure it's fun. Make sure it's insanely ambitious. That's the greatest moat.

https://x.com/nikunj/status/2065075361969500162

### Peter Steinberger (steipete on X) — Creator of OpenClaw

Peter continues his OpenClaw hardening work. He replaced shelling out to ffmpeg for media conversion with a wasm-based approach, reducing surface risk while maintaining similar performance.

He also noted that "writing Mac apps is still hard" — a reminder that even with AI, native platform development remains challenging.

Most notably, he got someone named Chris to do a PR with Codex, which generated 802 likes — suggesting Codex is being used for real open source contributions.

https://x.com/steipete/status/2064999763397980286
https://x.com/steipete/status/2065132980398444945
https://x.com/steipete/status/2065176989359808636

### Dan Shipper (danshipper on X) — CEO @ Every

Dan tried to use Fable for a big project, set it up, and let it cook. Came back an hour later to find it had triggered safeguards and fell back to a weaker model 10 minutes in. His verdict: back to Codex.

https://x.com/danshipper/status/2065269582961737957

### Aditya Agarwal (adityaag on X) — GP @ South Park Commons, Co-Founder @ Bevel

Aditya highlighted what "production-grade visual AI looks like" and shared a quote: "Things are only impossible to build until someone builds them."

https://x.com/adityaag/status/2065155724850942050
https://x.com/adityaag/status/2065155311770440097

### Sam Altman (sama on X) — CEO @ OpenAI

Sam welcomed Ona to OpenAI, saying he's "really looking forward to working together."

https://x.com/sama/status/2065160791205310565

---

## PODCASTS

### Google DeepMind's Logan Kilpatrick: Why the Model Eats the Harness

**The Takeaway:** The "model" is no longer just weights — it's an expanding system that will eventually absorb the agent harness, and the smartest bet is to build for the frontier, not the scaffolding.

Logan Kilpatrick runs Google AI Studio and the Gemini API at Google DeepMind. In this conversation, he lays out a vision that feels both pragmatic and profound.

The most provocative idea? "The model eats the harness." Logan argues that what we call "the model" today is already far more than a set of weights — it's an entire system with tool calling, search, code execution, and an agent harness baked in. The scaffolding that startups are building today as their moat? The model will "digest" it within 12 months. "The alpha will be somewhere else," he says. The implication: building a generic agent harness as a startup is a race against the model labs' roadmap.

On coding, Logan is refreshingly honest about where Google stands. He acknowledges that Claude and Codex dominate developer mindshare, but points out that the narrative shifts fast — in December, "Google had won" with Gemini 3.0. The Windsurf acquisition and the Antigravity team (which he calls "the Avengers of AI internally") are Google's bet to close the gap. His meta point: you can't make a great coding model without a product that does long-running autonomous coding, and now Google has that flywheel spinning.

On agentic AI in the enterprise, Logan agrees that coding agents are the only place agents truly work today — but argues that's changing this year. He points to rising token consumption and agent run lengths as early signals that other domains (finance, science, math) are about to cross the quality threshold.

On Omni, Google's new world model, Logan emphasizes that it's a single model (not routing between eight different models) and that its real power is in subtle world understanding — like editing a video to add a dog that interacts with the speaker, where the model understands physics, social dynamics, and timing. He personally finds this more authentic than AI avatars: "It's not changing me. It's changing the bits that aren't me."

The episode closes with a reflection on DeepMind's culture — scientific, mission-driven, and anchored by Demis Hassabis's Nobel Prize legacy. Logan's favorite Silicon Valley quote: "We can't let other people make the world a better place more than we can."

https://www.youtube.com/watch?v=cMAs8z2dehs

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders