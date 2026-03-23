#!/usr/bin/env node

// ============================================================================
// Follow Builders — LLM Remix Script
// ============================================================================
// Reads the JSON blob from prepare-digest.js (via stdin), sends it to an
// OpenAI-compatible LLM API (default: DeepSeek), and outputs the generated
// digest text to stdout.
//
// Usage:
//   node prepare-digest.js | DEEPSEEK_API_KEY=xxx node remix.js
//
// Environment variables:
//   DEEPSEEK_API_KEY  — required
//   DEEPSEEK_MODEL    — optional (default: deepseek-chat)
//   DEEPSEEK_BASE_URL — optional (default: https://api.deepseek.com)
// ============================================================================

const API_KEY = process.env.DEEPSEEK_API_KEY;
const MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
const BASE_URL = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

function buildSystemPrompt(prompts, language) {
  const parts = [
    prompts.digest_intro,
    '---',
    prompts.summarize_tweets,
    '---',
    prompts.summarize_podcast,
  ];

  if (language === 'zh' || language === 'bilingual') {
    parts.push('---', prompts.translate);
  }

  return parts.join('\n\n');
}

function buildUserMessage(data) {
  const { x, podcasts, config, stats } = data;

  const sections = [
    `Today's date: ${new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })}`,
    `Language: ${config.language}`,
    `\nStats: ${stats.xBuilders} builders, ${stats.totalTweets} tweets, ${stats.podcastEpisodes} podcast episodes`,
  ];

  if (x && x.length > 0) {
    sections.push('\n## X/Twitter Posts\n');
    sections.push(JSON.stringify(x, null, 2));
  }

  if (podcasts && podcasts.length > 0) {
    sections.push('\n## Podcast Episodes\n');
    sections.push(JSON.stringify(podcasts, null, 2));
  }

  return sections.join('\n');
}

async function callLLM(systemPrompt, userMessage) {
  const res = await fetch(`${BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 4096,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`LLM API error (${res.status}): ${err}`);
  }

  const json = await res.json();
  return json.choices[0].message.content;
}

async function main() {
  if (!API_KEY) {
    console.error('Error: DEEPSEEK_API_KEY environment variable is required');
    process.exit(1);
  }

  const raw = await readStdin();
  const data = JSON.parse(raw);

  if (data.status !== 'ok') {
    console.error(`Error: prepare-digest returned status "${data.status}"`);
    process.exit(1);
  }

  const language = data.config?.language || 'en';
  const systemPrompt = buildSystemPrompt(data.prompts, language);
  const userMessage = buildUserMessage(data);

  const digest = await callLLM(systemPrompt, userMessage);
  process.stdout.write(digest);
}

main();
