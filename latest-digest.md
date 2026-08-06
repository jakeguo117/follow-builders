AI Builders Digest — 2026年8月6日

---

## X / TWITTER

**Swyx (AI engineer, smol.ai & Latent Space)**

Swyx attended a Midjourney meetup and shared a key insight: ontologies and graph knowledge are trending now (rather than 3 years ago) because "good enough" intelligence is finally too cheap to meter. The hardest part of knowledge graphs is now cheap, and since intelligence is commoditized, complements are increasing in value. That's why talks on this topic are "on fire."

https://x.com/swyx/status/2084832553895444570

**Google VP Josh Woodward**

Google VP Josh Woodward announced that Notebook (Google's AI notebook) is "built for thinking, not toggling." While competitors add more modes, Notebook keeps everything in a single, unified prompt bar. Ultra and Pro subscribers can access it now, with rollout to everyone next.

https://x.com/joshwoodward/status/2084746170576892342

**OpenAI Codex & ChatGPT lead Thibault Sottiaux**

OpenAI Codex & ChatGPT lead Thibault Sottiaux announced that renowned security researcher Halvar Flake is joining the team for "Better Cyber." He also asked his followers what his title at OpenAI is, sparking a thread with over 1,400 likes.

https://x.com/thsottiaux/status/2084859308165271658

**Peter Yang (AI content creator, ex-Roblox)**

Peter Yang shared a contrarian take on vibe-coded SaaS: these days, a vibe-coded SaaS can serve as a self-serve funnel into a more expensive services offering, rather than trying to make a lot of money from the SaaS itself. But he noted the downside — services feels like consulting and selling "time for money" again. He also asked whether GPT 5.6 Luna High (reportedly much cheaper with unlimited usage) can handle complex browser automation tasks, which is 50% of his Codex usage.

https://x.com/petergyang/status/2084855632029774167

**Meta Sr Director of AI Madhu Guru**

Meta's Sr Director of AI Madhu Guru shared a playbook for builders based on conversations with founders: prototype with the best frontier model (cost be damned), validate the user experience, then 6-8 weeks later when open-weight models catch up, move production workloads there and to smaller models where possible. He noted most teams get stuck in step 1 — they never optimize for cost and latency after validation.

https://x.com/realmadhuguru/status/2084809416105472070

**Vercel CEO Guillermo Rauch**

Vercel CEO Guillermo Rauch announced that FactoryAI powers their API services with Vercel's Fluid compute, handling billions of requests per month — "Vercel is the Vercel for backends." He also highlighted that one line of code in the AI SDK saves 90% or more in DeepSeek v4 Flash AI Gateway tokens.

https://x.com/rauchg/status/2084804138169446449

**Box CEO Aaron Levie**

Box CEO Aaron Levie shared observations from spending time with enterprises: unlike the early days of cloud (where there were only a couple deployment patterns), AI has a much wider range of approaches in the enterprise. Ask 10 IT leaders about their coding agent strategy and you get at least 5 different answers. Some have standardized on ChatGPT or Claude, others offer multiple solutions, and many have built their own orchestration layers. Given this heterogeneity this early, he predicts years of landscape changes ahead — anyone predicting ultimate market outcomes now will probably be wrong.

https://x.com/levie/status/2084828773808239080

**YC President & CEO Garry Tan**

YC President & CEO Garry Tan criticized the California Democratic Party for endorsing Proposition 40, which he calls an "asset seizure tax" that will destroy the California tax base. He argued that if you want housing prices to go down, you build more housing — markets work. The revolution only serves those who foment it.

https://x.com/garrytan/status/2084704793432588435

**FirstMark VC Matt Turck**

FirstMark VC Matt Turck made a witty observation: everyone on X is saying "damn, Airtable sold for so low!" while many SaaS founders secretly think "damn, I'd take that any day, at least they had an exit."

https://x.com/mattturck/status/2084759190195536202

**Zara Zhang (Builder, Harvard '17)**

Zara Zhang shared insights on technology adoption: most people will not adopt a new technology just because it makes them more efficient. Instead, adoption is an emotional decision — driven by seeing someone similar to you succeed with the technology, or fearing being left behind. Her advice: the messaging shouldn't be "this will make you 10x more efficient!" but rather "So-and-so, someone you can relate to, has adopted this and look how much better their life has become." She also suggested that the best AI training isn't a course — it's pulling an agent into your team's group chat and letting people watch it work.

https://x.com/zarazhangrui/status/2084828855404294266

**SPC General Partner Aditya Agarwal**

SPC General Partner Aditya Agarwal announced the firm's investment in TryRivo, which is building "self-driving finance" — agents that connect to your existing checking account, learn your cash flow, sweep dollars into Treasury-backed yield, and bring them back before bills hit. He explained why this is hard: prediction under asymmetric cost (money returned a day early costs a little yield, but a day late bounces a bill and destroys trust). Founder Ambrish has a PhD in AI, 7,000+ citations, and led the L4 autonomy work at Cruise that launched robotaxis.

https://x.com/adityaag/status/2084691244496625793

**OpenAI CEO Sam Altman**

OpenAI CEO Sam Altman shared his philosophy: "I would rather be an optimist and work hard than a pessimist posting about why things won't work. It's much more difficult and the most likely path is failure, but society fails if people don't try. No amount of 'it will never work' essays will drive society forward." The post received over 10,000 likes.

https://x.com/sama/status/2084663673570971990

---

## PODCASTS

**Training Data — Chai Discovery's Bitter Lesson: Drug Design Is Another Scaling Problem**

**The Takeaway:** Drug discovery is becoming a scaling problem, and the team that treats biology like an engineering discipline — building models from scratch with a "bitter lesson" philosophy — is turning what was a 0.1% success rate into 15% and climbing.

Chai Discovery co-founders Josh (ex-OpenAI, early GPT-1/GPT-2 scaling laws work) and Matt (pure math background, switched to protein structure prediction) joined Training Data to explain their mission: making drug discovery look more like engineering. Their company builds foundation models for biology from scratch — not fine-tuning existing LLMs — following the "bitter lesson" principle of scaling data, models, and compute.

The key insight: biology is simpler than people think. As Josh puts it, "These are all just sequences of amino acids. At the end of the day, these are just different types of prompts for the model." The same way ChatGPT can answer a math problem and help with English homework, their models handle different biological tasks through the same underlying representation.

The progress has been dramatic. When they started, state-of-the-art antibody design had a 0.1% binding rate (1 in 1,000 molecules would actually bind in the lab). Their Chai2 model achieved 15% success — "if you screen 1,000 molecules, you're getting 150 back." They originally budgeted for 1% in 3-4 years and thought that would be amazing.

On team building: "With each generation of model, the kind of people we've needed for the next milestone has changed." They started with AI researchers, then brought in antibody engineers, then product people. Their model is partnerships with pharma giants (Eli Lilly, Novartis, Argenx, Pfizer) rather than building their own drug pipeline — a harder path that forces rigor. As Josh notes, "If you work on a small number of drug targets, you might miss the forest for the trees... When we ship models at Chai, they really have to work."

One counterintuitive point: they believe AI will increase lab testing, not decrease it. "There might be more demand for the lab" — just as more productive software engineers created more demand for software engineers. The goal is a "computer aided design suite for molecules" where you specify the properties you want and the model materializes the molecule, compressing the discovery loop from 9 months to 9 weeks to 9 days.

https://www.youtube.com/watch?v=wv53mDmY-k0

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders