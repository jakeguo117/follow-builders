AI Builders Digest — Wednesday, July 1, 2026

## X / TWITTER

**Swyx (swyx on X)** — AI engineer, DX Tips, Cognition, Temporal.io

Swyx is on the ground at AIE Expo and the energy is real. He notes that non-lab workshops at 9am on a Monday are packed — with rooms from Snyk, Atlassian, Neo4j, Arize AI, Akamai, and Together running concurrently, even as OpenAI hosts a competing workshop next door. His take: "People are hungry for this." He also jokingly prescribes "one pill" for anyone who disrespects scaling laws, available at the expo.

https://x.com/swyx/status/2071634789669777716
https://x.com/swyx/status/2071613383380770823
https://x.com/swyx/status/2071692683182252317

**Boris Cherny (bcherny on X)** — Claude Code @ Anthropic

Boris previews the next version of Claude Code: subagents will run in the background by default, meaning you can keep chatting with Claude while your subagents work. If you want an agent to run in the foreground, just tell Claude. This is a significant UX upgrade for anyone who's felt blocked waiting for a subagent to finish.

https://x.com/bcherny/status/2071647677591466098

**Thibault Sottiaux (thsottiaux on X)** — Codex & ChatGPT @ OpenAI

Thibault posted a detailed postmortem on the Codex usage limit issues that some users experienced. The problems were compounded — auto-review had become too aggressive, background suggestions were running duplicates, and usage reporting was misattributing auto-review as GPT-5.4 usage. All fixes are now deployed, and they've added more monitoring. Separately, Codex shipped a major security upgrade: replacing coarse sandbox modes with reusable, inheritable permission profiles that enforce OS-level file read/write/deny rules (even `**/*.env`) per-domain for network and Unix sockets, plus fail-closed admin allowlists. Least privilege per task.

https://x.com/thsottiaux/status/2071740419030053227
https://x.com/thsottiaux/status/2071636285807059315

**Peter Yang (petergyang on X)** — AI tutorials & guides

Peter drops a simple but sharp observation: for writing and editing, plain vanilla Claude web is still better than Codex or Claude Code. His guess — something in the coding agent's system prompts makes them crappier writers. He also teases a spicy rant post about restricted access + open source.

https://x.com/petergyang/status/2071731343390851519

**Madhu Guru (realmadhuguru on X)** — Former Product Leader at Google (Gemini, Veo)

Madhu argues that the rise of strong open-weight models like GLM will actually strengthen Google's position. More companies will experiment with fine-tuning open models, and the value will accrue to the infrastructure layer. Enterprises want the flexibility to run and fine-tune open models on a managed platform with enterprise-grade reliability — and Google Cloud is well positioned there. He adds: don't forget Google owns much of the compute stack.

https://x.com/realmadhuguru/status/2071637885154148785

**Thariq (trq212 on X)** — Claude Code @ Anthropic

Thariq shares his writing process: do engineering work, talk to people, brainstorm and research with Claude, write a post, give 1–2 talks on it, rewrite, give another talk, rewrite the intro, wake up at 6am and rewrite it again, then post. The iterative, multi-modal approach is a glimpse into how a builder at Anthropic works.

https://x.com/trq212/status/2071787401475960892

**Guillermo Rauch (rauchg on X)** — Vercel CEO

Guillermo teases that you can now "deploy anything and everything to Vercel" — with more details coming tomorrow. He also highlights 20x larger functions on Vercel, and shares a curl command by Brian Zhang that streams content from Vercel.

https://x.com/rauchg/status/2071718135799927224
https://x.com/rauchg/status/2071716510389662153
https://x.com/rauchg/status/2071710688150528443

**Aaron Levie (levie on X)** — Box CEO

Aaron lays out the central debate in AI regulation with surgical clarity. If a closed stack is always far ahead of the frontier, vertical integration and gatekeeping work. But if open-weight AI can remain a close second, then the equation reverses — the vast majority of tokens will go through an alternative stack, controlled and monetized by someone else. Your opinion on regulation depends entirely on your belief about how close open weights can stay to the frontier.

https://x.com/levie/status/2071775583072375214

**Ryo Lu (ryolu_ on X)** — Design @ Cursor

Ryo shows off the new Cursor mobile app — "wherever ideas hit. Desks and laptops optional." The app is now available for download.

https://x.com/ryolu_/status/2071652629890088964
https://x.com/ryolu_/status/2071655130152493297

**Garry Tan (garrytan on X)** — Y Combinator President & CEO

Garry keeps it short: "Build power and datacenters." He also shared a link to something on his blog.

https://x.com/garrytan/status/2071600933210100074
https://x.com/garrytan/status/2071817410303393840

**Zara Zhang (zarazhangrui on X)** — Builder

Zara built a Chrome extension that turns your "read later" list into dedicated reading time on your calendar. Save 5 articles → it auto-books a 30-minute reading block on Google Calendar with links included. No account, no server, everything local. Open source. She also shares a sharp observation from an Anthropic PM: "The market value of writing has gone way up" — good writing is required for steering models and building an audience, and it's been historically undervalued in tech.

https://x.com/zarazhangrui/status/2071766827345285411
https://x.com/zarazhangrui/status/2071670108033073365

**Claude (claudeai on X)** — Anthropic's AI assistant

Claude in Microsoft Foundry is now generally available, hosted on Azure. Azure customers get Claude Opus 4.8 and Claude Haiku 4.5, with Azure authentication, billing, and commitment retirement. Inference runs on Azure infrastructure operated by Anthropic. Prompt caching and extended thinking are supported today.

https://x.com/claudeai/status/2071653958905467027
https://x.com/claudeai/status/2071653962013446586

---

## PODCASTS

**No Priors — Re-engineering the Semiconductor Supply Chain with Intel CEO Lip-Bu Tan**

**The Takeaway:** The most important story in semiconductors right now isn't just about process nodes — it's about whether the US can rebuild a domestic chip manufacturing ecosystem, and Intel CEO Lip-Bu Tan is betting his career on it.

Lip-Bu Tan, the 66-year-old legendary venture investor turned Intel CEO, sits down with No Priors to talk about his plan to save the iconic American chipmaker. This conversation is a masterclass in how an operator-investor thinks about the intersection of geopolitics, capital intensity, and technological inflection.

The most candid moment comes early: Tan reveals that President Trump asked him to resign over a conflict of interest. He had to convince himself he didn't need the job, then convince Trump to let him keep it. "I do it purely to save Intel," he says. That meeting happened on a Thursday; by Monday, Tan had explained his case — born in Malaysia, raised in Singapore, MIT, lived his whole life in the US — and Trump gave him the chance.

Tan's turnaround strategy is classic crawl-walk-run. First, strengthen the balance sheet — the US government became a major shareholder (he points out TSMC started with Taiwanese government backing), Jensen Huang invested $5 billion (now worth $25 billion), and SoftBank's Masayoshi Son lent a hand. Second, simplify the product line and listen to customers. Third, drive next-generation leadership products.

On the technology side, Tan is bullish on CPU's role in the AI era. "For reinforcement learning and orchestrating agents, the CPU is actually better," he says. He sees the ratio of training CPUs to GPUs shifting from 1:8 toward 1:1. On the foundry business, he's realistic — "we are very distant from TSMC" — but believes by 2030-2032 Intel can surface as a serious competitor.

The TeraFab partnership with Elon Musk gets interesting airtime. Tan admires Musk's unconventional approach: "He basically questioned every step and why this traditional way of doing things. It's very refreshing." Musk needs massive silicon for robots and cars, and Intel is collaborating on process technology and manufacturing.

Tan also offers a venture investor's lens on where the semiconductor opportunity lies. He looks for bottlenecks — interconnect (Cradle Semiconductor, Celestial AI), new materials (gallium nitride, silicon carbide, indium phosphide), power management (IVR conversion from 40V to 1V loses too much power), and advanced packaging (glass substrates, artificial diamond). He's invested in Israel heavily because "they have very disruptive, innovative entrepreneurs. Even in this war time, they still have conference calls from underground."

On the AI-driven shift in team structure, Tan is refreshingly honest: "My son is my teacher now." He's transforming Intel from "a very old legacy spreadsheet company" into an AI-enabled organization, and actively recruiting younger talent who understand frontier models and open source.

His goal? "Being a venture at heart, you want to look for 10x." At Cadence, he delivered 85x returns. At Intel, with a much larger base, he's aiming for 10x over 5-10 years.

https://www.youtube.com/watch?v=asCgCv2XB4s

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders