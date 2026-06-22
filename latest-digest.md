AI Builders Digest — Monday, June 22, 2026

---

## X / TWITTER

### Swyx (swyx on X)

Swyx shared a few casual posts about sports and a photo, but nothing substantive on AI or building this week. No notable posts.

### OpenAI Codex App lead Thibault Sottiaux (thsottiaux on X)

Thibault Sottiaux, who leads the Codex App at OpenAI, dropped a provocative hint: the current Codex App was built with models that were only "okayish at front-end." He teased that when OpenAI finally significantly improves front-end capabilities in their models, "that day will be something." The post racked up over 3,100 likes, signaling serious anticipation for what's next.

https://x.com/thsottiaux/status/2068568650924409260

He also posted a poetic line about tokens: "Some tokens work harder than others. Some of the most valuable ones are found in the Codex app."

https://x.com/thsottiaux/status/2068443037907522002

---

### Peter Yang (petergyang on X)

Peter Yang went against the grain on local models: he says he can barely use up his Codex and Claude $200 subscriptions, so he sees no point in trying local models. He also noted that running the latest GLM locally requires 512GB of memory — which means a $10K+ Mac Studio.

https://x.com/petergyang/status/2068411894185295969

He also asked for recommendations on talking head + screen share recording tools, specifically wanting easy zoom-in/out features.

https://x.com/petergyang/status/2068398871236264428

---

### Linear Head of Product Nan Yu (thenanyu on X)

Nan Yu called out a tiny but maddening UX bug: pasted text in email apps doesn't default to the font treatment surrounding it. He joked that devs at Outlook and Gmail could "point their agents at this tweet and they will fix it for you." The post got 442 likes, showing this resonates with many.

https://x.com/thenanyu/status/2068318470215811080

He also quote-tweeted something about the multiplier effect with a simple "Econ 101. Learn about it."

https://x.com/thenanyu/status/2068542022361735484

---

### Former Google Product Leader Madhu Guru (realmadhuguru on X)

Madhu Guru (formerly Product Lead at Google for Gemini, Veo, Nano) wrote a sharp thread on the PM identity crisis. He sees two camps: the "old-school PM" who uses AI to accelerate output (more PRDs, more docs) without much judgment, and the "Builder PM" who uses AI to expand across the product lifecycle — exploring more ideas, running agents for research, querying logs directly, and outputting prototypes instead of docs. His conclusion: the role is moving toward Builder PMs.

https://x.com/realmadhuguru/status/2068350509027876876

---

### Replit CEO Amjad Masad (amasad on X)

Amjad Masad shared a poetic reflection: "We posted for twenty years, thinking we were talking to each other. Then the transformer came online, and the network read what we'd written, and became itself."

https://x.com/amasad/status/2068589860097790449

He also posted a hiring call for Replit Japan.

https://x.com/amasad/status/2068537084877643943

---

### Vercel CEO Guillermo Rauch (rauchg on X)

Guillermo Rauch was "genuinely impressed, almost shocked" at how good GLM-5.2 by Zhipu AI (zai_org) is at coding. He said "this changes things." The post got nearly 3,000 likes.

https://x.com/rauchg/status/2068517095818809770

---

### Box CEO Aaron Levie (levie on X)

Aaron Levie wrote a thoughtful thread on open weights AI. He noted that open models are achieving SOTA on specific tasks and getting close to frontier on coding. He argued this is fine for frontier labs too — if you lower the cost of tasks, AI usage goes up overall. Frontier models will still be used for planning, orchestration, and review. But this is great for the applied layer, which can now cost-optimize workloads with cheaper or tailored open models.

https://x.com/levie/status/2068434042148782515

---

### Y Combinator CEO Garry Tan (garrytan on X)

Garry Tan shared a link to trycursor.com with a simple "Try it and find out."

https://x.com/garrytan/status/2068279782815801541

---

### Zara Zhang (zarazhangrui on X)

Zara Zhang built a Chrome extension that injects one of her bookmarked X posts into her main feed every time she opens X — like an ad for her own bookmarks. She said the trick was "hijacking real estate I already check 50 times a day." Now she actually reads her bookmarks.

https://x.com/zarazhangrui/status/2068568920613953626

She also wondered whether joining a large company is actually riskier than joining a startup or starting your own company.

https://x.com/zarazhangrui/status/2068522129193418759

---

### FPV Ventures Partner Nikunj Kothari (nikunj on X)

Nikunj Kothari shared a sharp take: the biggest problem with AI is that priors need to be reset every few weeks, and most people are incapable of doing that. He hears people say "xyz doesn't work" but when asked when they last tried, the answer is "a few months ago" — which is "eons ago in AI timelines." His advice: maintain your own evals of hard tasks, do weekly tinker time, and also talk to enterprise buyers weekly (who are usually two years behind). Do both, and you'll be ahead of 99% of people.

https://x.com/nikunj/status/2068411460620042720

He also shared feedback on Shopify's UCP CLI that he and Claude Code generated together.

https://x.com/nikunj/status/2068372026268811517

---

### Peter Steinberger (steipete on X)

Peter Steinberger shared an opportunity: if you're in Japan or do business there, there's a chance to get lots of tokens.

https://x.com/steipete/status/2068428180004942319

---

## OFFICIAL BLOGS

No new blog posts from official AI company blogs this week.

---

## PODCASTS

### Unsupervised Learning — "AI Vibe Check: Lab Wars, Why APIs Might Vanish & Future Predictions"

**The Takeaway:** The API business model for frontier AI labs may be on borrowed time — compute constraints could force Anthropic or OpenAI to suspend or heavily limit API access, and the open weights era may be peaking as financial realities push labs to close up.

In this wide-ranging roundtable, host Jacob Efron is joined by Ari (former DeepMind/Meta researcher, now founder of Datalogy) and Rob (Radical Ventures). They cover the state of play across every major AI trend.

**On coding agents:** Ari notes the biggest shift in the last six months is that coding agents are finally working at longer time horizons. Engineers are moving from individual contributors to "managers of agents." But he also flags a real cost: it's now much easier to produce massive amounts of code, creating a "pretty massive understanding gap" and new bottlenecks on review.

**On open weights vs. closed source:** Rob argues there are "early signs" that near-frontier open weight AI may fall off altogether. Meta is pulling back, and Chinese labs (Qwen, DeepSeek) are now keeping their best models proprietary behind APIs, only open-sourcing smaller versions. Ari agrees: "We probably hit the peak number of open models." The financial incentives just don't make sense — once you've achieved credibility, open-sourcing undermines your business.

**On the API vanishing:** This is the spiciest take. Ari predicts that compute constraints could force Anthropic or OpenAI to suspend or heavily limit API access. "It is not hard to imagine a world in which Anthropic is so compute constrained that they actually cut off the API." He points to OpenAI already selling futures for guaranteed inference tokens as a precursor. Rob calls this a "totally feasible" scenario, adding that labs might even reserve their most powerful models for internal use only.

**On Anthropic's Fable release:** The reaction is mixed. Ari says the silent limitation on Fable (it refuses AI development tasks without telling you) has genuinely pissed off even the most bullish Anthropic fans. Rob sees Fable as the latest SOTA model but not a discontinuity — just another step in gradual improvement that undermines the "pre-training is hitting a wall" narrative.

**On the compute bottleneck:** Both guests agree the compute crunch won't ease before 2030. Rob highlights alternative chip providers (AMD, Amazon Trainium, Cerebras) as beneficiaries but not solutions. Ari notes that H100 prices have reversed their drops and gone up dramatically. The constraint will drive efficiency innovation — smaller models, better distillation — but usage will grow faster than any alleviation.

**On RSI (Recursive Self-Improvement):** Ari is more bullish than six months ago, having run experiments where agents do their own curation with "far more promising results than expected." But he's skeptical of the "one player runs away" narrative — compute bottlenecks and the fact that 10+ companies have the funding and talent will prevent exponential takeoff.

**Spicy predictions for H2 2026:**
- Ari: Anthropic or OpenAI may suspend API access for some period due to compute constraints.
- Rob: By year-end, it will be obvious that Anthropic is becoming a juggernaut in life sciences and biology — possibly setting up wet labs and becoming one of the most important life sciences companies in the world.

https://www.youtube.com/watch?v=W_iO8XxgD_I

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders