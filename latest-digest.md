AI Builders Digest — Monday, June 29, 2026

## X/TWITTER

### Swyx (swyx on X) — AI Engineer, Cognition, Temporal, dx.tips

Swyx shared a membership application for companies and creative individuals, and hosted an impromptu AI Engineer pre-show floor tour and AMA.

In a quote tweet, he made an interesting point about eval reporting: if you take Noam's advice to always keep a constant inference budget, then open models (which have more dollar-per-token mileage than closed model APIs) should report "thinking levels" measured by dollar cost on popular inference providers, rather than by token count.

https://x.com/swyx/status/2071005276644553091
https://x.com/swyx/status/2070971772548366788
https://x.com/swyx/status/2070949306060931312

### Thibault Sottiaux — Codex & ChatGPT @ OpenAI

Thibault shared a major Codex update landing "tons of improvements": smooth handling of super long threads, a hoverable navigation rail for previewing and jumping between turns, improved settings search, zoom-level changes no longer misaligning UI elements, better Markdown preservation when copying into Slack, and — most importantly — a dedicated Pets panel.

He also posted a playful quote tweet suggesting that "talking to your plants isn't weird anymore. You can just Codex things."

https://x.com/thsottiaux/status/2071089307062837744
https://x.com/thsottiaux/status/2071077932244570112
https://x.com/thsottiaux/status/2071071289247244481

### Peter Yang — AI Tutorials & Guides

Peter shared a practical project: every Saturday, his AI agent Hermes sends him a health check email pulling data from his smart scale (Withings API), Fitbit/Google Health, and a custom MCP server/mobile fitness app he vibe-coded. He's considering making a tutorial on building the fitness app.

He also pushed back on a "levels of problem-solving" framework, arguing that waiting until you have a polished solution to speak up is often worse than a junior person who flags a problem early and works through it collaboratively — there's nuance, not black-and-white.

https://x.com/petergyang/status/2070906940352520477
https://x.com/petergyang/status/2071058953115767275

### Nan Yu — Head of Product @ Linear

Nan Yu shared a contrarian take: if 90% of problems you encounter aren't worth solving, then "level 1" and "level 6" problem-solvers are 90% the same — meaning the skill of *ignoring* the right things matters more than skill at solving everything.

https://x.com/thenanyu/status/2070821322901397645

### Guillermo Rauch — Vercel CEO

Guillermo announced he now owns the domain and is excited to give his children clean email handles: "Domains are awesome. The internet is awesome."

In a more serious thread, he warned about the dual-use nature of advanced AI cybersecurity capabilities: "Mythos/Sol cybersecurity capabilities are equally useful in an offensive as well a defensive capacity." He strongly recommended running deepsec or similar harnesses with frontier models, noting that if adversaries gain equivalent offensive capability, it poses a serious threat to US companies unaware of latent vulnerabilities.

He also posted an image of himself with the caption "Me and my agents."

https://x.com/rauchg/status/2071085680017773046
https://x.com/rauchg/status/2071047674187714830
https://x.com/rauchg/status/2070982746080715052

### Aaron Levie — Box CEO

Aaron shared a detailed thread on AI token cost optimization. He argues that the real value comes from a layer between the work and the underlying intelligence that deeply understands workflows, context, and business processes. Individual companies doing this alone won't be effective at scale — so this is effectively the playbook for any applied AI company right now. By evaluating models for specific use cases, deeply understanding the domain, and tuning UX/features, this layer adds huge value. Enterprises get higher ROI because optimal architecture delivers more intelligence per dollar. He predicts many horizontal and vertical versions of this approach — a huge opportunity.

https://x.com/levie/status/2070937863806751154

### Matt Turck — VC at FirstMark Capital

Matt posted a humorous "history of smart glasses" timeline, tracing the failures from Google Glass (2013) through Microsoft HoloLens (2016), Meta's Ray-Ban Stories (2023), Apple Vision Pro (2024), and Snap's latest attempt (2026). The punchline: everyone keeps trying, and everyone keeps saying no.

https://x.com/mattturck/status/2070972014945243622

### Zara Zhang — Builder, Harvard '17

Zara shared a milestone: last year she barely knew how GitHub worked, now she has 10k followers on GitHub — and still can't write code by hand. She emphasized that she's not an engineer; these are all side projects built for fun, connecting technology with user problems and telling stories about the products.

https://x.com/zarazhangrui/status/2070982013822333007
https://x.com/zarazhangrui/status/2070982170219593904
https://x.com/zarazhangrui/status/2071116793234813272

### Nikunj Kothari — Partner @ FPV Ventures

Nikunj shared his enthusiasm for a visually stunning article about ice cream — as someone who eats it daily.

https://x.com/nikunj/status/2070922974493036773

### Peter Steinberger — Polyagentmous ClawFather, OpenClaw + OpenAI

Peter shared a quote: "History teaches us that access blockage rarely stops determined users" — likely in reference to AI model access restrictions.

He also documented his monitor setup struggle: got excited about a 52" Dell, but it requires BetterDisplay hacking for usable resolution on his M4 Max MBP, with flicker and wake issues. Apple wins this round — "2xXDR it is."

https://x.com/steipete/status/2071063588329193551
https://x.com/steipete/status/2071034256051097799
https://x.com/steipete/status/2071017970953052160

## PODCASTS

### Training Data — Memory and Continual Learning: Engram's Dan Biderman and Jessy Lin

**The Takeaway:** The next frontier for AI isn't raw intelligence — it's memory and continual learning. Engram's co-founders argue that models need to internalize context into their weights, not just rely on RAG or prompt engineering, and that everyone will eventually have their own personalized model that learns continuously.

Dan Biderman and Jessy Lin, co-founders of Engram (a NeoLab focused on memory and continual learning), joined Training Data to discuss why "models are always training" is the philosophy behind their work. Their core insight: current frontier models are incredibly smart, but they don't *learn* — they don't get better from interacting with you over time. The bottleneck is no longer raw intelligence, but understanding new and evolving context.

**The RAG problem:** Engram's approach challenges the dominant RAG paradigm. As Dan put it: "If you are always doing RAG, you can't make associations like 'Oh, I see somebody on the team is doing this research. I recall at an abstract level, there's this related thing you might want to know about.' These kinds of associations can only happen in weights." Jessy Lin added that current solutions are "externalized memory" — like sticky notes — but miss what makes human memory powerful: fuzzy, compressed representations that form connections and abstractions.

**The KV cache monstrosity:** One of the most concrete insights: a KV cache for a single Wikipedia article (say, Taylor Swift) takes ~80GB of HBM memory on a GPU, while the entire weights of a 70B Llama model are ~100GB. "How come this thing is so bit-efficient?" Dan asks. "Gradient descent can pack a lot of information in very few numbers, whereas this KV cache thing takes a few tens of kilobytes of article and becomes 80 gigabytes of brain state." Their vision: spend compute offline to compress that 80GB into something 1000x smaller.

**Personalized models for everyone:** The Engram team envisions a world where everyone has their own model — different from everyone else's and different from frontier models. Dan: "A lot of things people want to learn are either private, things that will never see the light of day in a post-training dataset, or even conflicting." They're working with partners like Notion, Microsoft, and Harvey to train per-team models that deeply understand organizational context — not just reading files at test time, but understanding them "the way an employee who's worked at your company for years has."

**Why not just wait for frontier labs?** The frontier labs' P0 is AGI — one generic model that's extremely capable at coding and math. "They're all thinking about memory and continual learning," Jessy says, "but it's more of a product effort right now. We think it deserves its own attention. Breakthroughs need to happen there."

On the question of whether language models will keep dominating over vision, Dan offered a fascinating perspective: "Language should be pretty hard — each word has this one-hot embedding vector that's as dissimilar to any other word... it's completely artificial in a sense. And we learn it with models that are orders of magnitude bigger than the best vision models. And still, things work pretty well."

https://www.youtube.com/watch?v=aiR7F4jqjXY

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders