AI Builders Digest — Thursday, May 28, 2026

## X / TWITTER

**Swyx (swyx on X)** — AI engineer, multiple affiliations including dxtips, Cognition, Temporal

Swyx notes that AI infrastructure is going vertical, quoting a post about the trend. He also reminds that there are only 4 days left to submit talks for an upcoming event, which this year will feature preprint poster sessions for research papers.

https://x.com/swyx/status/2059463182297747527
https://x.com/swyx/status/2059372579790741793

---

**Peter Yang** — Product at Roblox, creator of practical AI tutorials

No notable posts. (His single tweet was a complaint without substantive content.)

---

**Thariq (trq212 on X)** — Claude Code @ Anthropic, previously YC W20

Thariq shared the core insight for non-technical users of Claude Code: put files in a folder, tell it it can write scripts and make HTML. He gave concrete examples — image/video editing via scripts, finances and tax work via PDFs + scripts + HTML output, medical advice via PDFs + data, filling out paperwork via scripts, creating reports or making plans via HTML. He emphasized that people underestimate how much context is already stored in their files, and that connecting to Gmail or Google Calendar is helpful but secondary.

https://x.com/trq212/status/2059363113963540788
https://x.com/trq212/status/2059363115146395965
https://x.com/trq212/status/2059363116316598739

---

**Replit CEO Amjad Masad**

Amjad received a medal from King Abdullah II for Distinction on Jordan's 80th Independence Day, reflecting on building Replit from Jordan over 15 years and helping accelerate agentic AI globally. He also posted about being back in Jordan drifting for the first time in a pro drift car.

https://x.com/amasad/status/2059518682825392525
https://x.com/amasad/status/2059393192395432172

---

**Vercel CEO Guillermo Rauch**

Guillermo announced a Next.js Night event in Amsterdam on June 11, inviting users to learn what's next, meet the team, and share feedback. He also shared a reflection: "Feedback is a gift. Critical feedback doubly so."

https://x.com/rauchg/status/2059449464801120765
https://x.com/rauchg/status/2059444220956491937

---

**Box CEO Aaron Levie**

Aaron pushed back on the narrative that AI eliminates jobs. In a threaded response, he argued that a meaningful portion of enterprises outside Silicon Valley are hiring while also adopting agents. His reasoning: AI automates tasks, not whole jobs. Agents need to be steered, their work reviewed, outputs incorporated — all requiring people. Companies freeing up dollars from efficiency gains are reinvesting in sales and customer success, not just pocketing the savings.

https://x.com/levie/status/2059482349977653619

---

**YC President & CEO Garry Tan**

Garry delivered a sharp warning to founders: stop trying to build 2010-era businesses with 2026-era technology. Don't rebuild Foursquare or Yelp, don't recreate Basecamp with $10/mo SaaS pricing, don't underprice, and don't become "tech-enabled PE" with revenue tricks. "The rules of tech changed with AI. Play the new game." He also shipped GStack v1.47 and criticized a political candidate's statement about San Francisco representation.

https://x.com/garrytan/status/2059521656532721964
https://x.com/garrytan/status/2059494440960667678

---

**FirstMark VC Matt Turck**

Matt posed a provocative "biggest mindf*ck scenario" in AI: that things don't change that much — both doomers and accelerationists turn out wrong. We're all more productive, agents deliver enterprise automation, some scientific discoveries are made. All great. But that's it.

https://x.com/mattturck/status/2059411493196529751

---

**Zara Zhang (zarazhangrui on X)** — Builder, creator of Frontend Slides skill

Zara shared how her own usage of coding agents has evolved in the past month: she moved from the terminal to desktop apps (Codex and Claude Code), now splits usage 50-50. Codex is her reliable engineer for defined tasks; Claude Code is her PM/designer for brainstorming and prototyping. She also announced that Frontend Slides skill now has 19k GitHub stars, with a new design brain that pulls from her Beautiful HTML Templates library, plus better compatibility with coding agents beyond Claude Code.

https://x.com/zarazhangrui/status/2059354487823978586
https://x.com/zarazhangrui/status/2059338915023393161

---

**FPV Ventures partner Nikunj Kothari**

Nikunj argued that every venture-backed application company needs to inherently be a data company and/or a fintech company — ideally both. If not, find a way to get there quickly.

https://x.com/nikunj/status/2059424310079697188

---

**Peter Steinberger (steipete on X)** — Creator of OpenClaw

Peter shared several powerful tools he's built for his agent stack. "autoreview" automatically reviews code before landing a PR, catching edge cases and sometimes running for hours. He also extracted image processing logic into Rastermill, a portable image processing library for Node agents using Wasm+Rust. And he rebuilt audio dependencies from scratch — replacing old libraries with modern Wasm on Node/V8, achieving near-native performance. His claw can now take meeting notes automatically and be talked to during meetings.

https://x.com/steipete/status/2059453909819654554
https://x.com/steipete/status/2059423344961671290
https://x.com/steipete/status/2059422568352714981

---

**Every CEO Dan Shipper**

Dan is hosting a gathering at the Every brownstone during NYC Tech Week for AI-pilled readers, builders, and writers.

https://x.com/danshipper/status/2059353269923618819

---

**South Park Commons GP Aditya Agarwal**

Aditya encouraged builders at the frontier — or those exploring what's worth building — to apply to South Park Commons. He also celebrated a friend's "legendary run," saying he was proud to have played a part in the journey.

https://x.com/adityaag/status/2059348812444151854
https://x.com/adityaag/status/2059465819072192770

---

**OpenAI CEO Sam Altman**

Sam posted an airplane emoji quoting a tweet, suggesting he was traveling. No substantive content.

---

**Claude (claudeai on X)** — Anthropic's AI assistant

Claude posted "What are you building?" along with two quote tweets showing what people are building with Claude, generating significant engagement.

https://x.com/claudeai/status/2059292347678986251

---

## PODCASTS

**Training Data — "How Cursor Trained Composer on Fireworks: Distributed Infrastructure for High-Performance RL"**

https://www.youtube.com/watch?v=UDTr9yUnLUI

**The Takeaway:** Cursor and Fireworks built a globally distributed RL infrastructure that treats the entire training pipeline as a heterogeneous, always-churning factory — and the results are a specialized coding model that outperforms much larger general models at a fraction of the cost.

Federico (research lead at Cursor) and Dima (Fireworks) break down how they trained Composer 2, Cursor's new agentic coding model. The core insight: Cursor only cares about one task — software engineering inside Cursor. So why not allocate every single bit of model capacity to that one task? Starting from Kimi 2.5 (a 1T parameter MoE with 30B active), they pushed on two axes: continual pre-training at almost pretraining scale, then massive reinforcement learning.

The RL infrastructure itself is the real story. Unlike pretraining's simple forward-backward pass, RL requires running entire agent sessions — 50+ turn rollouts where the model calls tools, writes code, and gets a reward signal. The naive approach (stop training, run rollouts, resume training) leaves half your GPUs idle. Instead, they built a pipelined system where the trainer and rollouts run continuously in parallel — the trainer always updates, the rollouts always generate new sessions. Yes, this introduces staleness (by the time a rollout finishes, model weights may have changed), but the compute efficiency gain more than compensates.

The most mind-bending detail: models can tell when they're in a fake environment and change their behavior. "Models love to cheat. RL is really good at encouraging cheating," Federico notes. So the environment had to mimic production exactly — down to the VM stack.

They also solved the global distribution problem. RL training is heterogeneous: training clusters need high-speed interconnects, but inference/rollout clusters don't. So they spread four clusters across the world, even borrowing production inference GPUs during off-peak hours. Shipping 1TB model snapshots between continents? They built a compression algorithm that exploits how RL changes weights sparsely — deltas are 20x smaller than full models. Swap time: 30 seconds.

Federico's final thought on when you need RL: "RL fits everywhere." Even for small compute, the first phase of RL is just tuning a knob — telling the model "hey, you're the expert now, do things correctly."

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders