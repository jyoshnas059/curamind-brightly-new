// ── NAVIGATION ──
const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.page;

    // Update active nav link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Show target page
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${target}`).classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── SYMPTOM TAGS: clickable ──
document.querySelectorAll('.sym-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('selected');
    const input = document.querySelector('.symptom-input');
    if (tag.classList.contains('selected')) {
      const current = input.value.trim();
      input.value = current ? current + ', ' + tag.textContent : tag.textContent;
    }
  });
});

// ── MOOD TAGS: single select ──
document.querySelectorAll('.mood-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.mood-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    document.querySelector('.mood-value').textContent = tag.textContent + ' 🍃';
  });
});

// ── GUIDANCE BUTTON ──
document.querySelector('.btn-guidance')?.addEventListener('click', () => {
  const val = document.querySelector('.symptom-input').value.trim();
  if (!val) {
    alert('Please describe your symptoms or select one from the common list.');
    return;
  }
  alert(`Analysing: "${val}"\n\nThis is a demo — in the full app, AI-guided next steps would appear here.`);
});

// ── WELLNESS CARDS: click to start ──
document.querySelectorAll('.wellness-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const time  = card.querySelector('.w-time')?.textContent || '';
    alert(`Starting: ${title} (${time})\n\nThis is a demo — the full app would launch the guided session.`);
  });
});

// ── FORUM ITEMS: click to open ──
document.querySelectorAll('.forum-item').forEach(item => {
  item.addEventListener('click', () => {
    const title = item.querySelector('.forum-title').textContent;
    alert(`Opening thread: "${title}"\n\nThis is a demo — the full app would load the forum thread.`);
  });
});