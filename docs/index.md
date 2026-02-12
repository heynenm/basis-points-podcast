---
hide:
  - navigation
  - toc
---

<div class="bp-hero">
  <div class="bp-hero__bg"></div>
  <div class="bp-hero__grain"></div>

  <div class="bp-hero__content">
    <div class="bp-badge">BASIS POINTS PODCAST</div>
    <h1 class="bp-title">Markets. Operators. <span class="bp-accent">No fluff.</span></h1>
    <p class="bp-subtitle">With <strong>James</strong>, <strong>Haik</strong>, and <strong>George</strong> — plus an AI co-host that can summarize, extract takeaways, and answer questions about the show.</p>

    <div class="bp-ctaRow">
      <a class="bp-btn bp-btn--primary" href="#ai">Ask the AI</a>
      <a class="bp-btn" href="#highlights">See highlights</a>
    </div>

    <div class="bp-wave" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path id="bpWavePath" d="M0,60 C120,20 240,100 360,60 C480,20 600,100 720,60 C840,20 960,100 1080,60 C1140,40 1170,50 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>

    <div class="bp-hosts" id="hosts">
      <div class="bp-hostCard">
        <div class="bp-hostAvatar">J</div>
        <div>
          <div class="bp-hostName">James</div>
          <div class="bp-hostRole">Host</div>
        </div>
      </div>
      <div class="bp-hostCard">
        <div class="bp-hostAvatar">H</div>
        <div>
          <div class="bp-hostName">Haik</div>
          <div class="bp-hostRole">Co-host</div>
        </div>
      </div>
      <div class="bp-hostCard">
        <div class="bp-hostAvatar">G</div>
        <div>
          <div class="bp-hostName">George</div>
          <div class="bp-hostRole">Co-host</div>
        </div>
      </div>
    </div>

    <div class="bp-miniNote">Tip: this site is built to deploy on GitHub Pages. Because easy wins are still wins.</div>
  </div>
</div>

<div class="bp-section" id="ai">
  <div class="bp-section__header">
    <h2>AI Co-Host</h2>
    <p>Ask questions, get summaries, pull quotes, or generate show notes. (Demo mode by default — no API keys, no drama.)</p>
  </div>

  <div class="bp-ai">
    <div class="bp-ai__left">
      <div class="bp-ai__panelTitle">Suggested prompts</div>
      <div class="bp-chips">
        <button class="bp-chip" data-prompt="Give me a 60-second summary of the latest episode.">60-second summary</button>
        <button class="bp-chip" data-prompt="List the top 5 takeaways as bullet points.">Top takeaways</button>
        <button class="bp-chip" data-prompt="Extract 3 quotable lines with context.">Quotable lines</button>
        <button class="bp-chip" data-prompt="What did James, Haik, and George disagree on?">Disagreements</button>
        <button class="bp-chip" data-prompt="Turn this episode into a LinkedIn post draft.">LinkedIn draft</button>
      </div>

      <div class="bp-ai__panelTitle" style="margin-top:18px;">AI mode</div>
      <div class="bp-toggleRow">
        <label class="bp-toggle">
          <input id="bpLiveToggle" type="checkbox" />
          <span>Use live API (optional)</span>
        </label>
        <div class="bp-muted">Demo mode is gorgeous and safe. Live mode requires wiring an API endpoint.</div>
      </div>
    </div>

    <div class="bp-ai__right">
      <div class="bp-chat" role="region" aria-label="Basis Points AI chat">
        <div class="bp-chat__log" id="bpChatLog">
          <div class="bp-msg bp-msg--ai">
            <div class="bp-msg__meta">Basis Points AI</div>
            <div class="bp-msg__bubble">Ask me anything about the podcast. I’m basically the fourth host, but with fewer opinions and better memory.</div>
          </div>
        </div>
        <form class="bp-chat__composer" id="bpChatForm">
          <input id="bpChatInput" type="text" placeholder="Ask: summarize, extract takeaways, generate show notes…" autocomplete="off" />
          <button class="bp-send" type="submit">Send</button>
        </form>
      </div>
      <div class="bp-muted" style="margin-top:10px;">Note: In demo mode, responses are simulated. In live mode, this calls <code>/api/chat</code> (you can implement later).</div>
    </div>
  </div>
</div>

<div class="bp-section" id="highlights">
  <div class="bp-section__header">
    <h2>Highlights</h2>
    <p>Short, sharp, and actually useful. Like a basis point: small unit, big consequences.</p>
  </div>

  <div class="bp-grid">
    <div class="bp-quote">
      <div class="bp-quote__kicker">Takeaway</div>
      <div class="bp-quote__text">“The difference between a good decision and a great one is usually the second-order effects you bothered to model.”</div>
      <div class="bp-quote__meta">— placeholder quote</div>
    </div>
    <div class="bp-quote">
      <div class="bp-quote__kicker">Framework</div>
      <div class="bp-quote__text">“If you can’t explain the tradeoff, you don’t understand the strategy.”</div>
      <div class="bp-quote__meta">— placeholder quote</div>
    </div>
    <div class="bp-quote">
      <div class="bp-quote__kicker">Operator note</div>
      <div class="bp-quote__text">“Most ‘market insights’ are just vibes. We prefer receipts.”</div>
      <div class="bp-quote__meta">— placeholder quote</div>
    </div>
  </div>
</div>

<div class="bp-section" id="listen">
  <div class="bp-section__header">
    <h2>Listen</h2>
    <p>Drop your embed links here (Spotify/Apple/YouTube). For now, enjoy this tasteful placeholder box.</p>
  </div>

  <div class="bp-embed">
    <div class="bp-embed__inner">
      <div class="bp-embed__title">Featured Episode</div>
      <div class="bp-embed__subtitle">Embed player goes here</div>
    </div>
  </div>
</div>

<div class="bp-section" id="cta">
  <div class="bp-cta">
    <div>
      <h2>Get the next episode</h2>
      <p>When we publish, you’ll know. No spam. No motivational quotes. Just signal.</p>
    </div>
    <div class="bp-cta__form">
      <input type="email" placeholder="you@domain.com" aria-label="Email" />
      <button type="button">Notify me</button>
    </div>
  </div>

  <div class="bp-footer">
    <div class="bp-footer__left">© <span id="bpYear"></span> Basis Points Podcast</div>
    <div class="bp-footer__right">
      <a href="#hosts">Hosts</a>
      <a href="#ai">AI</a>
      <a href="#listen">Listen</a>
    </div>
  </div>
</div>
