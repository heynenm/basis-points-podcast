(() => {
  const $ = (sel) => document.querySelector(sel);
  const log = $('#bpChatLog');
  const form = $('#bpChatForm');
  const input = $('#bpChatInput');
  const year = $('#bpYear');
  const liveToggle = $('#bpLiveToggle');

  if (year) year.textContent = String(new Date().getFullYear());

  function addMsg(role, text){
    const wrap = document.createElement('div');
    wrap.className = `bp-msg ${role === 'user' ? 'bp-msg--user' : 'bp-msg--ai'}`;

    const meta = document.createElement('div');
    meta.className = 'bp-msg__meta';
    meta.textContent = role === 'user' ? 'You' : 'Basis Points AI';

    const bubble = document.createElement('div');
    bubble.className = 'bp-msg__bubble';
    bubble.textContent = text;

    wrap.appendChild(meta);
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  const demoReplies = [
    "Here’s the clean version: the episode boils down to incentives, second-order effects, and execution discipline. Want the 60-second summary or the tactical checklist?",
    "Top takeaways (demo): 1) Model the tradeoffs explicitly. 2) Don’t confuse narrative with signal. 3) Small basis-point improvements compound. 4) Measure what you can actually control. 5) Ship, then iterate.",
    "Quotable lines (demo): (1) ‘Receipts over vibes.’ (2) ‘Strategy is choosing your tradeoffs.’ (3) ‘Compounding is a lifestyle, not a spreadsheet.’",
    "Where you disagreed (demo): speed vs certainty, and whether ‘good enough’ is a feature or a bug. Classic operator debate.",
    "LinkedIn draft (demo): ‘Most market takes are vibes. In our latest Basis Points episode, we broke down how operators actually make decisions under uncertainty…’"
  ];

  async function liveChat(prompt){
    const res = await fetch('./api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return data.reply || 'No reply.';
  }

  async function handlePrompt(prompt){
    addMsg('user', prompt);

    // fake typing delay
    const typing = document.createElement('div');
    typing.className = 'bp-msg bp-msg--ai';
    typing.innerHTML = `<div class="bp-msg__meta">Basis Points AI</div><div class="bp-msg__bubble">Thinking…</div>`;
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;

    try{
      let reply;
      if (liveToggle && liveToggle.checked){
        reply = await liveChat(prompt);
      } else {
        reply = demoReplies[Math.floor(Math.random() * demoReplies.length)];
      }
      typing.remove();
      addMsg('ai', reply);
    } catch(e){
      typing.remove();
      addMsg('ai', 'Live mode failed (shocking). Demo mode still loves you.');
    }
  }

  document.querySelectorAll('.bp-chip').forEach(btn => {
    btn.addEventListener('click', () => handlePrompt(btn.getAttribute('data-prompt')));
  });

  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const prompt = (input.value || '').trim();
      if (!prompt) return;
      input.value = '';
      handlePrompt(prompt);
    });
  }
})();
