AI Builders Digest — Tuesday, May 12, 2026

## X / TWITTER

**Swyx (swyx on X)**

Swyx weighed in on the classic build vs. buy debate in SaaS, responding to a thread from Box CEO Aaron Levie. He highlighted the tradeoffs companies face when deciding whether to build internal tools or buy off-the-shelf solutions, especially in an AI era where custom models are becoming more accessible.

https://x.com/swyx/status/2053572059767427302

---

**Peter Yang (petergyang on X)**

Peter Yang, Product at Roblox, shared a simple but relatable AI automation wish: when his kid's school sends those dense 10-page weekly newsletters, he wants AI to automatically flag important items like early dismissal days. It's a perfect example of a low-hanging fruit use case — structured documents with high signal-to-noise ratio — that most parents would pay for.

He also quote-tweeted something he found "pretty unexpected," though the context wasn't fully clear from the post alone.

https://x.com/petergyang/status/2053672364681134511

---

**Thariq (trq212 on X) — Claude Code @ Anthropic**

Thariq shared two notable observations. First, he's been using HTML for planning, spec writing, exploration, code review, and reporting — an interesting workflow choice that suggests HTML's structured nature works well as a universal intermediate format for AI-assisted work.

More provocatively, he noted that Jarred Sumner, creator of Bun, tried rewriting Bun in Rust and it passes 99.8% of the existing test suite. Thariq's punchline: "we're not being ambitious enough." The implication is that if a full rewrite of a major JavaScript runtime can hit near-perfect compatibility, the AI community should be thinking bigger about what's possible.

https://x.com/trq212/status/2053632475294040084
https://x.com/trq212/status/2053559397654348159

---

**Aaron Levie (levie on X) — CEO of Box**

Levie laid out his thesis on why AI agent deployment in enterprises is harder than it looks. As agents move from coding to general knowledge work, companies need to solve for context and data access, secure system wiring, quality control, human-in-the-loop workflows, and ongoing maintenance through model upgrades. "This isn't a side project or something you can just do on nights and weekends," he wrote.

Box is responding by hiring for "AI automation engineering" roles — a technical position that partners directly with business functions, akin to a forward-deployed engineer for internal workflows. Levie predicts most companies will have similar roles going forward.

https://x.com/levie/status/2053672965125140915

---

**Ryo Lu (ryolu_ on X) — Design @ Cursor**

Ryo shared that his personal OS project, ryOS, now has an IRC bridge connecting to Levelsio's retro PC — a charming crossover between two builder communities. The project continues to explore what a personal operating system could look like in the AI era.

https://x.com/ryolu_/status/2053523477878259951

---

**Garry Tan (garrytan on X) — President & CEO of Y Combinator**

Tan posted a philosophical take: "The highest and most important form of design is actually pure transmutation of human pain and suffering." It's a classic startup founder framing — great products don't just look good, they eliminate real pain points for real people.

https://x.com/garrytan/status/2053689459032379860

---

**Peter Steinberger (steipete on X) — Creator of OpenClaw**

Steinberger shared a flurry of updates from his OpenClaw project. He challenged Codex (likely OpenAI's coding agent) to improve end-to-end tests on OpenClaw's chat completion endpoint *using OpenClaw itself* — a dogfooding loop that's both practical and meta.

He also built Birdclaw, which ingests his complete Twitter archive so he can ask Codex about any old tweet he ever favorited or bookmarked. And he added a browser into RepoBar for viewing issues, PRs, commits, and workflows with context. His philosophy: "You gotta build yourself the tools to work more efficient."

https://x.com/steipete/status/2053744332675408151
https://x.com/steipete/status/2053737275268177980
https://x.com/steipete/status/2053717468623872230

---

**Dan Shipper (danshipper on X) — CEO of Every**

Shipper made an intriguing claim: there are a few people in a tiny office in Brooklyn who are 1-2 months ahead of Silicon Valley founders and engineers on AI. He didn't specify who, but the implication is that the center of gravity for AI innovation isn't exclusively in the Bay Area anymore.

He also shared a weekend hack: connecting a MIDI keyboard to his computer, then telling Codex to build a watcher script and web app that shows which chords he's playing. Five minutes, start to finish, worked flawlessly. It's a concrete demo of how AI is collapsing the time from idea to working software.

https://x.com/danshipper/status/2053628011233095875
https://x.com/danshipper/status/2053551046299959760

---

**Sam Altman (sama on X) — CEO of OpenAI**

Altman floated a playful naming idea for OpenAI's next model: "goblin." The tweet got 9,000+ likes, suggesting the community has opinions. He also responded to an interesting thread with a simple "interesting" — not much to go on, but it signals he's paying attention to whatever it was.

https://x.com/sama/status/2053572868936761350
https://x.com/sama/status/2053566155571560868

---

## PODCASTS

**No Priors — Baseten CEO Tuhin Srivastava on the AI Inference Crunch, Custom Models, and Building the Inference Cloud**

**The Takeaway:** The AI inference market is in a severe supply crunch — worse than most people realize — and the winning inference cloud will be defined not by GPU access alone, but by the software layer that ties together compute, post-training, and the feedback loop that creates more inference.

Tuhin Srivastava, founder and CEO of Baseten (the inference cloud that's grown 30x in a year and is on track to do over a billion dollars in revenue), sat down with No Priors to explain why inference is "the last market." Even if we reach AGI, he argues, all that's left is running it — and that's a massive business.

The most striking data point: 90-95% of tokens served on Baseten come from custom models, not vanilla open-source weights. "No one is just running the vanilla open source weights," Srivastava said. "You might be customizing it for quality, but you also might be customizing it for performance." This suggests the market has already moved past the "which base model do I use?" question into "how do I fine-tune and compile this for my specific use case?"

On the supply side, Srivastava painted a grim picture. Baseten runs at "uncomfortably high utilization" — mid-90s most of the time — across 90 clusters in 18 different clouds. Even with that diversification, they have a standing 4 PM company meeting just to figure out how to manage capacity for the day's demand. "There's very, very little slack compute available," he said. And it's not just about quantity: "There are probably a dozen good clouds, and I'd probably put three or four of them in the gold tier." The rest are "grifty" — operators who don't understand inference SLAs.

On the question of whether the independent application layer survives against the frontier labs, Srivastava made a sharp argument: "What is valuable to a company is the user signal that they can gather that only they can gather." Companies like Abridge (ambient scribe for hospitals) have deep workflow integrations that a frontier model company can't replicate. That proprietary signal, encoded into post-trained models, is the moat.

**Memorable quote:** "There is very, very little slack compute available. We run pretty large clusters ourselves, and we run them at, like, uncomfortably high utilization. Mid-nineties utilization most of the time."

https://www.youtube.com/watch?v=XAbKflCncDo

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders