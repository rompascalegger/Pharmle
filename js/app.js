/* Pharmle – Lernapotheke · App-Logik (Vanilla JS, funktioniert auch per file://) */
(function () {
  "use strict";

  const SUBJECTS = window.PHARMLE_SUBJECTS || [];
  const CONTENT = window.PHARMLE_CONTENT || {};
  const DAILY_GOAL = 20;
  const $app = document.getElementById("app");

  /* ---------------- Speicher (robust gegen blockierten localStorage) ---------------- */
  const STORE_KEY = "pharmle.v1";
  const defaultState = () => ({ cards: {}, quiz: {}, days: {}, last: null, theme: null });
  let state = defaultState();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) state = Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* ohne Speicher weiterarbeiten */ }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignorieren */ }
  }

  /* ---------------- Helfer ---------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const todayKey = () => {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pct = (x) => Math.round(x * 100);

  let toastTimer;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------------- Tagesdosis & Streak ---------------- */
  function dose() {
    const k = todayKey();
    state.days[k] = (state.days[k] || 0) + 1;
    save();
    updateDose();
    if (state.days[k] === DAILY_GOAL) toast("💊 Tagesdosis erreicht – gut eingestellt!");
  }
  function updateDose() {
    const n = state.days[todayKey()] || 0;
    document.getElementById("doseToday").textContent = n;
    document.getElementById("doseGoal").textContent = DAILY_GOAL;
    document.getElementById("dosePill").classList.toggle("done", n >= DAILY_GOAL);
  }
  function streak() {
    let s = 0;
    const d = new Date();
    if (!state.days[todayKey()]) d.setDate(d.getDate() - 1); // heute noch nicht gelernt → ab gestern zählen
    for (;;) {
      const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      if (!state.days[k]) break;
      s++; d.setDate(d.getDate() - 1);
    }
    return s;
  }

  /* ---------------- Fortschritt ---------------- */
  const cardKey = (sid, wid, i) => sid + "/" + wid + "/" + i;
  const box = (sid, wid, i) => state.cards[cardKey(sid, wid, i)] || 0;
  function weekStats(sid, w) {
    const known = w.cards.filter((_, i) => box(sid, w.id, i) >= 2).length;
    const cardsPct = w.cards.length ? known / w.cards.length : 0;
    const q = state.quiz[sid + "/" + w.id];
    const quizPct = q ? q.best : 0;
    return { known, total: w.cards.length, cardsPct, quizPct, level: (cardsPct + quizPct) / 2, attempts: q ? q.attempts : 0 };
  }
  function subjectLevel(sid) {
    const c = CONTENT[sid];
    if (!c) return 0;
    const ls = c.weeks.map((w) => weekStats(sid, w).level);
    return ls.reduce((a, b) => a + b, 0) / ls.length;
  }

  /* ---------------- Theme ---------------- */
  function applyTheme() {
    const t = state.theme || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
  }
  document.getElementById("themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    state.theme = cur === "dark" ? "light" : "dark";
    save(); applyTheme();
  });

  /* ---------------- Router ---------------- */
  let cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === "fach" && parts[1]) {
      const sid = parts[1];
      if (parts[2] === "pruefung") return viewExam(sid);
      if (parts[2]) return viewWeek(sid, parts[2], parts[3] || "beilage");
      return viewSubject(sid);
    }
    viewHome();
  }
  window.addEventListener("hashchange", route);

  /* ======================================================== HOME */
  function viewHome() {
    document.title = "Pharmle – Lernapotheke";
    const totalCards = Object.values(state.cards).filter((b) => b >= 2).length;
    const quizzes = Object.values(state.quiz);
    const avgQuiz = quizzes.length ? quizzes.reduce((a, q) => a + q.best, 0) / quizzes.length : 0;
    const last = state.last;
    const lastWeek = last && CONTENT[last.sid] && CONTENT[last.sid].weeks.find((w) => w.id === last.wid);
    const hour = new Date().getHours();
    const greet = hour < 11 ? "Guten Morgen" : hour < 18 ? "Guten Tag" : "Guten Abend";

    $app.innerHTML = `
      <section class="hero">
        <div class="hero-main">
          <span class="tag" style="background:rgba(255,255,255,.18);color:#fff">Offizin geöffnet</span>
          <h1 style="margin-top:10px">${greet}, Apotheker:in in spe!</h1>
          <p>Deine Lernapotheke fürs Pharmaziestudium. Jedes Fach ist eine Packung im Regal – lies die Packungsbeilage, drück dich durch den Blister und besteh die Abgabeprüfung.</p>
          <div class="row" style="margin-top:16px">
            ${lastWeek
              ? `<a class="btn" href="#/fach/${last.sid}/${last.wid}">▶ Weiter: W${lastWeek.no} ${esc(lastWeek.title)}</a>`
              : `<a class="btn" href="#/fach/physiologie">▶ Mit Physiologie starten</a>`}
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat"><b>${state.days[todayKey()] || 0}<small class="muted" style="font-size:.9rem"> / ${DAILY_GOAL}</small></b><span>Heutige Dosis</span></div>
          <div class="stat"><b>${streak()} 🔥</b><span>Tage in Folge eingenommen</span></div>
          <div class="stat"><b>${totalCards}</b><span>Karten sicher im Blister</span></div>
          <div class="stat"><b>${pct(avgQuiz)} %</b><span>Ø Bestwert Abgabeprüfung</span></div>
        </div>
      </section>

      <div class="shelf-title"><h2 style="margin:0">Arzneimittelregal</h2><span class="muted">· 1. Studienjahr</span></div>
      <div class="shelf">
        ${SUBJECTS.map((s) => {
          const lvl = s.available ? subjectLevel(s.id) : 0;
          const inner = `
            <div class="pack-band"></div>
            <div class="pack-body">
              <div class="pack-top">
                <span class="pack-icon" aria-hidden="true">${s.icon}</span>
                ${s.available ? `<span class="tag">Rx · verfügbar</span>` : `<span class="tag grey">Nicht lieferbar</span>`}
              </div>
              <h3>${esc(s.title)}</h3>
              ${s.sub ? `<span class="pack-sub">${esc(s.sub)}</span>` : ""}
              <div class="pack-foot">
                <span class="pack-dose">${esc(s.dose)}</span>
                ${s.available
                  ? `<div class="progress" aria-label="Wirkstoffspiegel"><span style="width:${pct(lvl)}%"></span></div><span>Wirkstoffspiegel ${pct(lvl)} %</span>`
                  : `<span>Inhalte folgen</span>`}
              </div>
            </div>
            ${s.available ? "" : `<span class="stamp">Lieferengpass</span>`}`;
          return s.available
            ? `<a class="pack" style="--c:${s.color}" href="#/fach/${s.id}">${inner}</a>`
            : `<div class="pack locked" style="--c:${s.color}" data-locked="${esc(s.short)}" aria-disabled="true">${inner}</div>`;
        }).join("")}
      </div>`;

    $app.querySelectorAll(".pack.locked").forEach((el) =>
      el.addEventListener("click", () => toast(`📦 ${el.dataset.locked}: Lieferengpass – Nachlieferung folgt.`)));
  }

  /* ======================================================== FACH */
  function viewSubject(sid) {
    const s = SUBJECTS.find((x) => x.id === sid);
    const c = CONTENT[sid];
    if (!s || !c) return notFound();
    document.title = s.title + " – Pharmle";
    const lvl = subjectLevel(sid);

    $app.innerHTML = `
      <nav class="crumbs"><a href="#/">Regal</a><span>›</span><span>${esc(s.title)}</span></nav>
      <div class="subject-head">
        <div class="big-icon" aria-hidden="true">${s.icon}</div>
        <div style="flex:1;min-width:220px">
          <h1>${esc(s.title)}</h1>
          <p class="muted" style="margin:0">${esc(c.intro)}</p>
        </div>
        <div style="min-width:180px">
          <div class="progress"><span style="width:${pct(lvl)}%"></span></div>
          <small class="muted">Wirkstoffspiegel ${pct(lvl)} %</small>
        </div>
      </div>

      <div class="exam-banner">
        <span class="rx">℞</span>
        <div style="flex:1;min-width:200px">
          <b>Jahresprüfungs-Simulator</b><br>
          <span class="muted">${esc(c.exam)} – 20 zufällige Fragen aus allen freigeschalteten Wochen.</span>
        </div>
        <a class="btn primary" href="#/fach/${sid}/pruefung">Prüfung starten</a>
      </div>

      <div class="section-label">Verfügbare Wirkstoffe · Woche für Woche</div>
      <div class="weeks">
        ${c.weeks.map((w) => {
          const st = weekStats(sid, w);
          return `
          <a class="week" href="#/fach/${sid}/${w.id}">
            <div class="week-no">W<b>${w.no}</b></div>
            <div>
              <h3>${esc(w.title)}</h3>
              <div class="week-meta">${esc(w.drug)} · ${w.date} · ${w.cards.length} Karten · ${w.quiz.length} Fragen</div>
            </div>
            <div class="week-prog">
              <div class="progress"><span style="width:${pct(st.level)}%"></span></div>
              <span>${st.known}/${st.total} Karten · Quiz ${pct(st.quizPct)} %</span>
            </div>
          </a>`;
        }).join("")}
      </div>

      <div class="section-label">In Herstellung · noch nicht lieferbar</div>
      <div class="weeks">
        ${c.upcoming.map((u) => `
          <div class="week locked">
            <div class="week-no">W<b>${u.no}</b></div>
            <div><h3>${esc(u.title)}</h3><div class="week-meta">${u.date} · Folien folgen</div></div>
            <div class="week-prog"><span class="tag grey">Lieferengpass</span></div>
          </div>`).join("")}
      </div>`;
  }

  /* ======================================================== WOCHE */
  const TABS = [
    { id: "beilage", label: "📄 Packungsbeilage" },
    { id: "blister", label: "💊 Blister" },
    { id: "abgabe", label: "℞ Abgabeprüfung" },
    { id: "labor", label: "🧪 Labor", needsLab: true }
  ];

  function viewWeek(sid, wid, tab) {
    const s = SUBJECTS.find((x) => x.id === sid);
    const c = CONTENT[sid];
    const w = c && c.weeks.find((x) => x.id === wid);
    if (!s || !w) return notFound();
    state.last = { sid, wid }; save();
    document.title = `W${w.no} ${w.title} – Pharmle`;
    const tabs = TABS.filter((t) => !t.needsLab || w.lab);
    if (!tabs.some((t) => t.id === tab)) tab = "beilage";
    const idx = c.weeks.indexOf(w);
    const prev = c.weeks[idx - 1], next = c.weeks[idx + 1];

    $app.innerHTML = `
      <nav class="crumbs"><a href="#/">Regal</a><span>›</span><a href="#/fach/${sid}">${esc(s.title)}</a><span>›</span><span>Woche ${w.no}</span></nav>
      <div class="week-hero">
        <div>
          <span class="tag">Woche ${w.no} · ${w.date}</span>
          <h1 style="margin-top:8px">${esc(w.title)}</h1>
          <p class="muted" style="margin:0">Wirkstoff: <b>${esc(w.drug)}</b></p>
        </div>
        <div class="row">
          ${prev ? `<a class="btn ghost" href="#/fach/${sid}/${prev.id}/${tab}">← W${prev.no}</a>` : ""}
          ${next ? `<a class="btn ghost" href="#/fach/${sid}/${next.id}/${tab}">W${next.no} →</a>` : ""}
        </div>
      </div>
      <div class="tabs" role="tablist">
        ${tabs.map((t) => `<button role="tab" aria-selected="${t.id === tab}" data-tab="${t.id}">${t.label}</button>`).join("")}
      </div>
      <div id="tabBody"></div>`;

    $app.querySelectorAll(".tabs button").forEach((b) =>
      b.addEventListener("click", () => { location.hash = `#/fach/${sid}/${wid}/${b.dataset.tab}`; }));

    const body = document.getElementById("tabBody");
    if (tab === "beilage") renderLeaflet(body, sid, w);
    else if (tab === "blister") renderCards(body, sid, w);
    else if (tab === "abgabe") renderQuiz(body, { key: sid + "/" + w.id, title: `W${w.no} ${w.title}`, questions: w.quiz.map((q) => Object.assign({ week: w.no }, q)), retryHash: `#/fach/${sid}/${w.id}/abgabe` });
    else if (tab === "labor") renderLab(body, w);
  }

  /* ---------------- Packungsbeilage ---------------- */
  function renderLeaflet(el, sid, w) {
    const st = weekStats(sid, w);
    el.innerHTML = `
      <div class="leaflet">
        <aside class="leaflet-toc card">
          <b>Inhalt dieser Packungsbeilage</b>
          <ol style="margin-top:8px">
            <li><a href="#" data-jump="sec-ziele">Anwendungsgebiete</a></li>
            ${w.sections.map((s, i) => `<li><a href="#" data-jump="sec-${i}">${esc(s.title)}</a></li>`).join("")}
          </ol>
          <hr style="border:0;border-top:1px solid var(--line);margin:14px 0">
          <div class="progress"><span style="width:${pct(st.level)}%"></span></div>
          <small class="muted">Wirkstoffspiegel ${pct(st.level)} %</small>
          <div class="row" style="margin-top:12px">
            <a class="btn primary" style="width:100%" href="#/fach/${sid}/${w.id}/blister">Weiter zum Blister</a>
          </div>
        </aside>
        <article class="card leaflet-doc">
          <header class="leaflet-header">
            <div>
              <div class="lh-title">Gebrauchsinformation: Information für Studierende</div>
              <div class="lh-sub">${esc(w.drug)} · Physiologie Woche ${w.no}</div>
            </div>
            <span class="tag amber">Vor Gebrauch aufmerksam lesen</span>
          </header>
          <section class="leaflet-sec" id="sec-ziele">
            <h3><span class="num">0.</span> Anwendungsgebiete (Lernziele)</h3>
            <ul>${w.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
          </section>
          ${w.sections.map((s, i) => `
            <section class="leaflet-sec" id="sec-${i}">
              <h3><span class="num">${i + 1}.</span> ${esc(s.title)}</h3>
              ${s.html}
            </section>`).join("")}
        </article>
      </div>`;
    el.querySelectorAll("[data-jump]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const t = document.getElementById(a.dataset.jump);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  /* ---------------- Blister (Lernkarten mit Leitner-Boxen) ---------------- */
  function renderCards(el, sid, w) {
    // Reihenfolge: zuerst unbekannte / schwache Karten
    let queue = shuffle(w.cards.map((_, i) => i)).sort((a, b) => box(sid, w.id, a) - box(sid, w.id, b));
    let pos = 0;
    let flipped = false;
    const taken = new Set();

    el.innerHTML = `
      <div class="fc-wrap">
        <div>
          <div class="fc-stage">
            <div class="flash" id="flash" tabindex="0" role="button" aria-label="Karte umdrehen">
              <div class="flash-face front"><span class="fc-label" id="fcLabel"></span><div class="fc-text" id="fcQ"></div><span class="fc-hint">Klick oder Leertaste zum Umdrehen</span></div>
              <div class="flash-face back"><span class="fc-label">Wirkung</span><div class="fc-text" id="fcA"></div></div>
            </div>
          </div>
          <div class="fc-actions">
            <button class="btn no" id="btnNo">↺ Nochmals <small class="muted">(1)</small></button>
            <button class="btn ghost" id="btnFlip">Umdrehen</button>
            <button class="btn yes" id="btnYes">✓ Gewusst <small class="muted">(2)</small></button>
          </div>
        </div>
        <aside class="card">
          <b>Blisterpackung · ${w.cards.length} Stück</b>
          <p class="muted" style="font-size:.85rem;margin:4px 0 12px">Jede Tablette ist eine Karte. Farbe = Lernstand.</p>
          <div class="blister" id="blister"></div>
          <div class="legend">
            <span><i style="background:#cdd3d8"></i>Neu</span>
            <span><i style="background:#e59a9a"></i>Nebenwirkung – nochmals üben</span>
            <span><i style="background:#e6c36a"></i>Wirkt teilweise</span>
            <span><i style="background:#5fc493"></i>Sitzt – gut eingestellt</span>
          </div>
          <button class="btn ghost danger" id="btnReset" style="margin-top:14px;width:100%">Blister zurücksetzen</button>
        </aside>
      </div>`;

    const flash = el.querySelector("#flash");
    function paint() {
      const i = queue[pos];
      const c = w.cards[i];
      flipped = false;
      flash.classList.remove("flipped");
      el.querySelector("#fcLabel").textContent = `Karte ${i + 1} / ${w.cards.length}`;
      el.querySelector("#fcQ").textContent = c.q;
      // Antwort erst nach kurzer Verzögerung setzen, damit sie beim Zurückdrehen nicht aufblitzt
      setTimeout(() => { el.querySelector("#fcA").textContent = c.a; }, 180);
      el.querySelector("#blister").innerHTML = w.cards.map((_, k) => {
        const b = box(sid, w.id, k);
        return `<button class="${b ? "box" + b : ""} ${k === i ? "current" : ""} ${taken.has(k) && k !== i ? "taken" : ""}" data-k="${k}" aria-label="Karte ${k + 1}">${k + 1}</button>`;
      }).join("");
      el.querySelectorAll("#blister button").forEach((b) => b.addEventListener("click", () => {
        const k = +b.dataset.k;
        queue = queue.filter((x) => x !== k);
        queue.splice(pos, 0, k);
        paint();
      }));
    }
    function flip() { flipped = !flipped; flash.classList.toggle("flipped", flipped); }
    function rate(ok) {
      const i = queue[pos];
      const k = cardKey(sid, w.id, i);
      state.cards[k] = ok ? Math.min(3, (state.cards[k] || 0) + 1) : 1;
      save(); dose();
      taken.add(i);
      if (!ok) { queue.splice(pos, 1); queue.push(i); }
      else pos++;
      if (pos >= queue.length) {
        toast("💊 Blister leer – alle Karten eingenommen!");
        queue = shuffle(w.cards.map((_, j) => j)).sort((a, b) => box(sid, w.id, a) - box(sid, w.id, b));
        pos = 0; taken.clear();
      } else if (ok && Math.random() < 0.25) toast(pick(["✓ Gut verträglich!", "✓ Wirkt!", "✓ Richtig dosiert!", "✓ Compliance top!"]));
      paint();
    }
    flash.addEventListener("click", flip);
    el.querySelector("#btnFlip").addEventListener("click", flip);
    el.querySelector("#btnYes").addEventListener("click", () => rate(true));
    el.querySelector("#btnNo").addEventListener("click", () => rate(false));
    el.querySelector("#btnReset").addEventListener("click", () => {
      if (!confirm("Lernstand dieses Blisters zurücksetzen?")) return;
      w.cards.forEach((_, i) => delete state.cards[cardKey(sid, w.id, i)]);
      save(); taken.clear(); pos = 0; paint();
    });
    const onKey = (e) => {
      if (e.target.closest && e.target.closest("input, textarea")) return;
      if (e.code === "Space") { e.preventDefault(); flip(); }
      else if (e.key === "1") rate(false);
      else if (e.key === "2") rate(true);
    };
    document.addEventListener("keydown", onKey);
    cleanup = () => document.removeEventListener("keydown", onKey);
    paint();
  }

  /* ---------------- Abgabeprüfung (Quiz) ---------------- */
  function renderQuiz(el, cfg) {
    const qs = shuffle(cfg.questions).map((q) => {
      const order = shuffle(q.o.map((_, i) => i));
      return { q: q.q, e: q.e, week: q.week, opts: order.map((i) => q.o[i]), correct: order.indexOf(q.a) };
    });
    let i = 0, score = 0;
    const wrong = [];

    function paint() {
      const q = qs[i];
      el.innerHTML = `
        <div class="quiz card">
          <div class="quiz-top">
            <span>Rezept ${i + 1} von ${qs.length}${q.week ? ` · W${q.week}` : ""}</span>
            <span>✓ ${score}</span>
          </div>
          <div class="progress"><span style="width:${(i / qs.length) * 100}%"></span></div>
          <div class="q-text">${esc(q.q)}</div>
          <div class="opts">
            ${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="letter">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("")}
          </div>
          <div id="explain"></div>
        </div>`;
      el.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => answer(+b.dataset.k)));
    }
    function answer(k) {
      const q = qs[i];
      const ok = k === q.correct;
      if (ok) score++; else wrong.push(q);
      dose();
      el.querySelectorAll(".opt").forEach((b) => {
        b.disabled = true;
        const bk = +b.dataset.k;
        if (bk === q.correct) b.classList.add("correct");
        else if (bk === k) b.classList.add("wrong");
      });
      el.querySelector("#explain").innerHTML = `
        <div class="callout ${ok ? "" : "warn"} explain">
          <span class="ci">${ok ? "✅" : "⚠️"}</span>
          <div><b>${ok ? pick(["Korrekt abgegeben!", "Rezept einwandfrei!", "Richtig – Kunde zufrieden!"]) : pick(["Interaktion entdeckt!", "Rückfrage beim Arzt nötig!", "Falsch abgelesen!"])}</b>${esc(q.e)}</div>
        </div>
        <div class="row" style="margin-top:14px;justify-content:flex-end">
          <button class="btn primary" id="nextQ">${i + 1 < qs.length ? "Nächstes Rezept →" : "Auswertung"}</button>
        </div>`;
      const nb = el.querySelector("#nextQ");
      nb.focus();
      nb.addEventListener("click", () => { i++; i < qs.length ? paint() : finish(); });
    }
    function finish() {
      const ratio = score / qs.length;
      const prev = state.quiz[cfg.key];
      state.quiz[cfg.key] = { best: Math.max(prev ? prev.best : 0, ratio), attempts: (prev ? prev.attempts : 0) + 1, last: ratio };
      save();
      const verdict = ratio >= 0.8 ? ["Abgabe freigegeben ✓", "Sauber gearbeitet – du darfst abgeben."]
        : ratio >= 0.5 ? ["Rückfrage nötig", "Solide Basis, aber ein paar Punkte nochmals in der Packungsbeilage nachlesen."]
        : ["Nicht abgabefähig", "Zurück ins Labor: Packungsbeilage lesen und den Blister durcharbeiten."];
      el.innerHTML = `
        <div class="quiz card result">
          <div class="rx-big">℞</div>
          <div class="score">${score} / ${qs.length}</div>
          <h2>${verdict[0]}</h2>
          <p class="muted">${verdict[1]}${prev ? ` Bisheriger Bestwert: ${pct(prev.best)} %.` : ""}</p>
          ${wrong.length ? `
            <div class="rezept">
              <h4>Rp./ Wiederholen</h4>
              <ul>${wrong.map((q) => `<li>${q.week ? `<b>W${q.week}:</b> ` : ""}${esc(q.q)}<br><small class="muted">→ ${esc(q.opts[q.correct])}</small></li>`).join("")}</ul>
              <p class="muted" style="margin:10px 0 0;font-size:.8rem">S: täglich bis zur Prüfung · Repetatur erlaubt</p>
            </div>` : `<p>🎉 Keine Fehler – volle Wirkung!</p>`}
          <div class="row" style="justify-content:center;margin-top:20px">
            <button class="btn primary" id="again">Nochmals prüfen</button>
            ${cfg.backHash ? `<a class="btn" href="${cfg.backHash}">Zurück</a>` : ""}
          </div>
        </div>`;
      el.querySelector("#again").addEventListener("click", () => renderQuiz(el, cfg));
    }
    paint();
  }

  /* ======================================================== PRÜFUNG */
  function viewExam(sid) {
    const s = SUBJECTS.find((x) => x.id === sid);
    const c = CONTENT[sid];
    if (!s || !c) return notFound();
    document.title = "Prüfungssimulator – Pharmle";
    const all = [];
    c.weeks.forEach((w) => w.quiz.forEach((q) => all.push(Object.assign({ week: w.no }, q))));
    const best = state.quiz[sid + "/pruefung"];
    $app.innerHTML = `
      <nav class="crumbs"><a href="#/">Regal</a><span>›</span><a href="#/fach/${sid}">${esc(s.title)}</a><span>›</span><span>Prüfungssimulator</span></nav>
      <h1>Jahresprüfungs-Simulator</h1>
      <p class="muted">20 zufällige Multiple-Choice-Fragen aus W1–W${c.weeks.length}${best ? ` · Bestwert ${pct(best.best)} % (${best.attempts}×)` : ""}.</p>
      <div id="examBody"></div>`;
    renderQuiz(document.getElementById("examBody"), {
      key: sid + "/pruefung", title: "Prüfung", questions: shuffle(all).slice(0, 20), backHash: `#/fach/${sid}`
    });
  }

  /* ======================================================== LABOR */
  function renderLab(el, w) {
    if (w.lab === "nernst") return labNernst(el);
    if (w.lab === "ap") return labAP(el);
    if (w.lab === "videos") return labVideos(el);
    if (w.lab === "osmose") return labOsmose(el);
  }

  /* ---- Nernst + GHK ---- */
  function labNernst(el) {
    const IONS = {
      "K⁺": { z: 1, a: 5, i: 150 },
      "Na⁺": { z: 1, a: 145, i: 15 },
      "Cl⁻": { z: -1, a: 110, i: 10 },
      "Ca²⁺": { z: 2, a: 2.5, i: 0.0001 }
    };
    let ion = "K⁺";
    const conc = JSON.parse(JSON.stringify(IONS));
    const fmt = (v) => v >= 10 ? v.toFixed(0) : v >= 1 ? v.toFixed(1) : v >= 0.01 ? v.toFixed(3) : v.toExponential(1);

    el.innerHTML = `
      <div class="tool">
        <div class="card">
          <h2>🧮 Nernst-Rechner</h2>
          <p class="muted">E = (61 mV / z) · log([Ion]<sub>aussen</sub> / [Ion]<sub>innen</sub>) bei 37 °C. Verschiebe die Konzentrationen (logarithmische Skala).</p>
          <div class="ion-pick" id="ionPick">${Object.keys(IONS).map((k) => `<button aria-pressed="${k === ion}" data-ion="${k}">${k}</button>`).join("")}</div>
          <div class="slider-row" style="margin-top:16px"><label for="sOut">[Ion] aussen (mM)</label><input type="range" id="sOut" min="-4" max="2.5" step="0.01"><output id="oOut"></output></div>
          <div class="slider-row"><label for="sIn">[Ion] innen (mM)</label><input type="range" id="sIn" min="-4" max="2.5" step="0.01"><output id="oIn"></output></div>
          <div class="row" style="margin-top:10px;align-items:baseline">
            <span>E<sub id="eSub"></sub> =</span><span class="big-readout" id="eOut"></span>
            <span class="spacer"></span><button class="btn ghost" id="eReset">Standardwerte</button>
          </div>
          <p class="muted" id="eNote" style="margin:6px 0 0"></p>
        </div>

        <div class="card">
          <h2>⚡ Ruhepotenzial nach Goldman-Hodgkin-Katz</h2>
          <p class="muted">Ionen innen: K⁺ 150, Na⁺ 15, Cl⁻ 10 mM · aussen: Na⁺ 145, Cl⁻ 110 mM. Simuliere z. B. eine Hyperkaliämie oder mehr Na⁺-Permeabilität.</p>
          <div class="slider-row"><label for="gK">[K⁺] aussen (mM)</label><input type="range" id="gK" min="1" max="20" step="0.5" value="5"><output id="ogK"></output></div>
          <div class="slider-row"><label for="gNa">P<sub>Na</sub> / P<sub>K</sub></label><input type="range" id="gNa" min="-3" max="1.3" step="0.01" value="-1.602"><output id="ogNa"></output></div>
          <div class="slider-row"><label for="gCl">P<sub>Cl</sub> / P<sub>K</sub></label><input type="range" id="gCl" min="0" max="1" step="0.01" value="0.45"><output id="ogCl"></output></div>
          <svg class="ap-svg" viewBox="0 0 600 90" id="ghkScale" aria-label="Potenzialskala"></svg>
          <div class="row"><span>E<sub>m</sub> =</span><span class="big-readout" id="gOut"></span><span class="spacer"></span><button class="btn ghost" id="gReset">Normalwerte</button></div>
          <p class="muted" id="gNote" style="margin:6px 0 0"></p>
        </div>
      </div>`;

    const sOut = el.querySelector("#sOut"), sIn = el.querySelector("#sIn");
    function paintN() {
      const c = conc[ion];
      sOut.value = Math.log10(c.a); sIn.value = Math.log10(c.i);
      el.querySelector("#oOut").textContent = fmt(c.a);
      el.querySelector("#oIn").textContent = fmt(c.i);
      const E = (61 / c.z) * Math.log10(c.a / c.i);
      el.querySelector("#eSub").textContent = ion;
      el.querySelector("#eOut").textContent = (E > 0 ? "+" : "") + E.toFixed(1) + " mV";
      el.querySelector("#eNote").textContent = Math.abs(E) < 1 ? "Kein Gradient → kein Gleichgewichtspotenzial."
        : `Bei ${(E > 0 ? "+" : "") + E.toFixed(0)} mV halten sich elektrische und chemische Triebkraft für ${ion} genau die Waage.`;
      el.querySelectorAll("#ionPick button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.ion === ion));
    }
    el.querySelectorAll("#ionPick button").forEach((b) => b.addEventListener("click", () => { ion = b.dataset.ion; paintN(); }));
    sOut.addEventListener("input", () => { conc[ion].a = Math.pow(10, +sOut.value); paintN(); });
    sIn.addEventListener("input", () => { conc[ion].i = Math.pow(10, +sIn.value); paintN(); });
    el.querySelector("#eReset").addEventListener("click", () => { conc[ion] = Object.assign({}, IONS[ion]); paintN(); });
    paintN();

    const gK = el.querySelector("#gK"), gNa = el.querySelector("#gNa"), gCl = el.querySelector("#gCl");
    function paintG() {
      const Ka = +gK.value, pNa = Math.pow(10, +gNa.value), pCl = +gCl.value;
      const Em = 61 * Math.log10((Ka + pNa * 145 + pCl * 10) / (150 + pNa * 15 + pCl * 110));
      const EK = 61 * Math.log10(Ka / 150), ENa = 61 * Math.log10(145 / 15);
      el.querySelector("#ogK").textContent = Ka.toFixed(1);
      el.querySelector("#ogNa").textContent = pNa < 0.1 ? pNa.toFixed(3) : pNa.toFixed(2);
      el.querySelector("#ogCl").textContent = pCl.toFixed(2);
      el.querySelector("#gOut").textContent = (Em > 0 ? "+" : "") + Em.toFixed(1) + " mV";
      const x = (v) => 30 + ((v + 120) / 200) * 540; // −120 … +80 mV
      const tick = (v, label, color, y) => `<line x1="${x(v)}" x2="${x(v)}" y1="30" y2="60" stroke="${color}" stroke-width="3"/><text x="${x(v)}" y="${y}" text-anchor="middle" font-size="12" fill="${color}" font-weight="700">${label}</text>`;
      el.querySelector("#ghkScale").innerHTML = `
        <line x1="30" x2="570" y1="45" y2="45" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
        ${[-120, -80, -40, 0, 40, 80].map((v) => `<text x="${x(v)}" y="84" text-anchor="middle" font-size="11" fill="var(--muted)">${v}</text>`).join("")}
        ${tick(EK, "E_K " + EK.toFixed(0), "var(--blue)", 22)}
        ${tick(ENa, "E_Na +" + ENa.toFixed(0), "var(--amber)", 22)}
        <circle cx="${x(Em)}" cy="45" r="9" fill="var(--green)"/><text x="${x(Em)}" y="22" text-anchor="middle" font-size="12" font-weight="800" fill="var(--green-600)">${Em > EK + 25 && Em < ENa - 25 ? "E_m" : ""}</text>`;
      let note = "Normaler Ruhezustand: das Potenzial liegt nahe E_K, etwas positiver wegen des kleinen Na⁺-Leckstroms.";
      if (Ka > 7) note = "Hyperkaliämie: der K⁺-Gradient schrumpft → die Zelle depolarisiert. Klinisch gefährlich (Herzrhythmus)!";
      else if (Ka < 3.5) note = "Hypokaliämie: grösserer K⁺-Gradient → die Zelle hyperpolarisiert.";
      if (pNa > 1) note = "P_Na > P_K wie im Aufstrich eines Aktionspotenzials → E_m nähert sich E_Na.";
      el.querySelector("#gNote").textContent = note;
    }
    [gK, gNa, gCl].forEach((s) => s.addEventListener("input", paintG));
    el.querySelector("#gReset").addEventListener("click", () => { gK.value = 5; gNa.value = -1.602; gCl.value = 0.45; paintG(); });
    paintG();
  }

  /* ---- Aktionspotenzial-Simulator ---- */
  function labAP(el) {
    const PHASES = [
      { id: "ruhe", name: "Ruhezustand", t: [0, 0.5], na: "geschlossen (aktivierbar)", k: "Leckkanäle offen, K_V geschlossen", txt: "Ruhemembranpotenzial ca. −70 mV, getragen von den K⁺-Leckkanälen. Alle spannungsgesteuerten Kanäle sind geschlossen." },
      { id: "depol", name: "Depolarisation", t: [0.5, 1.3], na: "öffnen → Na⁺-Einstrom", k: "noch geschlossen", txt: "Erreicht das Generatorpotenzial die Schwelle (~ −55 mV), öffnen Na_V-Kanäle. Der Na⁺-Einstrom depolarisiert weiter und öffnet noch mehr Na_V-Kanäle (positive Rückkopplung)." },
      { id: "overshoot", name: "Overshoot & Repolarisation", t: [1.3, 2.4], na: "inaktiviert (Inaktivierungstor zu)", k: "K_V offen → K⁺-Ausstrom", txt: "Am Gipfel (~ +30 mV) schliessen die Inaktivierungstore der Na_V-Kanäle. Die langsameren K_V-Kanäle öffnen, K⁺ strömt aus und das Potenzial fällt (negative Rückkopplung). Absolute Refraktärphase!" },
      { id: "under", name: "Nachhyperpolarisation", t: [2.4, 4.2], na: "geschlossen, wieder aktivierbar", k: "K_V schliessen langsam", txt: "Weil die K_V-Kanäle verzögert schliessen, sinkt das Potenzial kurz unter das Ruhepotenzial (Undershoot). Relative Refraktärphase: nur stärkere Reize lösen ein AP aus." },
      { id: "ruhe2", name: "Zurück in Ruhe", t: [4.2, 6], na: "geschlossen", k: "Leckkanäle", txt: "Alle spannungsgesteuerten Kanäle sind geschlossen. Die Na⁺/K⁺-ATPase stellt die (kaum veränderten) Gradienten langfristig sicher." }
    ];
    el.innerHTML = `
      <div class="tool">
        <div class="card">
          <h2>⚡ Aktionspotenzial-Simulator</h2>
          <p class="muted">Reize das Axon mit unterschiedlicher Stärke. Klicke anschliessend auf eine Phase der Kurve.</p>
          <div class="slider-row"><label for="stim">Reizstärke (mV Depolarisation)</label><input type="range" id="stim" min="0" max="35" step="1" value="20"><output id="oStim"></output></div>
          <label class="row" style="margin:6px 0 10px;cursor:pointer"><input type="checkbox" id="lido"> <span>💉 Lidocain applizieren (blockiert Na<sub>V</sub>-Kanäle)</span></label>
          <svg class="ap-svg" viewBox="0 0 640 300" id="apSvg" role="img" aria-label="Membranpotenzial über die Zeit"></svg>
          <p id="apVerdict" style="font-weight:700;margin:8px 0 0"></p>
        </div>
        <div class="card" id="phaseCard"></div>
      </div>`;
    const svg = el.querySelector("#apSvg");
    const X = (t) => 50 + (t / 6) * 570;
    const Y = (v) => 20 + ((40 - v) / 140) * 250; // +40 … −100 mV
    let active = null;

    function curvePoints(stim, lido) {
      const fire = !lido && stim >= 15;
      const peak = -70 + stim;
      const kp = fire
        ? [[0, -70], [0.5, -70], [0.75, -56], [0.95, -40], [1.3, 30], [1.8, -20], [2.4, -72], [3.0, -80], [4.2, -71], [6, -70]]
        : [[0, -70], [0.5, -70], [0.8, peak], [1.5, -70 + stim * 0.35], [2.6, -70 + stim * 0.08], [6, -70]];
      // Catmull-Rom → glatte Kurve
      const pts = [];
      for (let s = 0; s < kp.length - 1; s++) {
        const p0 = kp[Math.max(0, s - 1)], p1 = kp[s], p2 = kp[s + 1], p3 = kp[Math.min(kp.length - 1, s + 2)];
        for (let u = 0; u < 1; u += 0.05) {
          const u2 = u * u, u3 = u2 * u;
          const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3);
          pts.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
        }
      }
      pts.push(kp[kp.length - 1]);
      return { pts, fire };
    }
    function paint() {
      const stim = +el.querySelector("#stim").value;
      const lido = el.querySelector("#lido").checked;
      el.querySelector("#oStim").textContent = "+" + stim;
      const { pts, fire } = curvePoints(stim, lido);
      const path = pts.map((p, k) => (k ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1)).join(" ");
      const grid = [40, 0, -55, -70, -100].map((v) => `
        <line x1="50" x2="620" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" ${v === -55 ? 'stroke-dasharray="6 5" stroke="var(--red)"' : ""}/>
        <text x="44" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="${v === -55 ? "var(--red)" : "var(--muted)"}">${v}</text>`).join("");
      const phases = fire ? PHASES.map((p) => `
        <g class="ap-phase ${active === p.id ? "active" : ""}" data-p="${p.id}">
          <rect x="${X(p.t[0])}" y="20" width="${X(p.t[1]) - X(p.t[0])}" height="250"/>
        </g>`).join("") : "";
      svg.innerHTML = `
        ${phases}
        ${grid}
        <text x="618" y="${Y(-55) - 6}" text-anchor="end" font-size="11" fill="var(--red)">Schwelle</text>
        <text x="12" y="150" font-size="11" fill="var(--muted)" transform="rotate(-90 12 150)" text-anchor="middle">mV</text>
        <text x="335" y="294" font-size="11" fill="var(--muted)" text-anchor="middle">Zeit (ms)</text>
        <line x1="${X(0.5)}" x2="${X(0.5)}" y1="270" y2="258" stroke="var(--blue)" stroke-width="2"/>
        <text x="${X(0.5)}" y="284" font-size="11" fill="var(--blue)" text-anchor="middle">Reiz</text>
        <path d="${path}" fill="none" stroke="var(--green)" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" pointer-events="none"/>`;
      svg.querySelectorAll(".ap-phase").forEach((g) => g.addEventListener("click", () => { active = g.dataset.p; paint(); }));
      el.querySelector("#apVerdict").innerHTML = lido
        ? "💉 Lidocain: Na_V blockiert – nur ein lokales Generatorpotenzial, kein AP. So wirken Lokalanästhetika."
        : fire ? "✅ Schwelle überschritten → Aktionspotenzial (Alles-oder-Nichts). Stärkere Reize ändern die Amplitude nicht!"
          : "❌ Unterschwellig: graduiertes Generatorpotenzial, das wieder abklingt.";
      const p = fire && PHASES.find((x) => x.id === active);
      el.querySelector("#phaseCard").innerHTML = p ? `
        <span class="tag">Phase</span><h2 style="margin-top:8px">${p.name}</h2><p>${p.txt}</p>
        <dl class="kv"><dt>Na_V-Kanäle</dt><dd>${p.na}</dd><dt>K-Kanäle</dt><dd>${p.k}</dd></dl>`
        : `<h2>Phasen-Info</h2><p class="muted">${fire ? "Klicke auf einen Abschnitt der Kurve, um die Kanalzustände zu sehen." : "Löse zuerst ein Aktionspotenzial aus (Reiz ≥ 15 mV, ohne Lidocain)."}</p>`;
    }
    el.querySelector("#stim").addEventListener("input", paint);
    el.querySelector("#lido").addEventListener("change", paint);
    paint();
  }

  /* ---- Videos (Signaltransduktion) ---- */
  function labVideos(el) {
    const vids = [
      { f: "MBOC6_15.01_G_Protein_Signaling.mp4", t: "G-Protein-Signalweg", d: "Aktivierung eines GPCR, GDP/GTP-Austausch an Gα, Dissoziation von βγ." },
      { f: "MBOC6_15.02_cAMP_Signaling.mp4", t: "cAMP-Signalweg", d: "Gs → Adenylatcyclase → cAMP → PKA." },
      { f: "MBOC6_15.03_IP_Signaling.mp4", t: "IP₃-/DAG-Signalweg", d: "Gq → Phospholipase C → IP₃ (Ca²⁺) + DAG (PKC)." }
    ];
    el.innerHTML = `
      <div class="card">
        <h2>🎬 Animationen zur Signaltransduktion</h2>
        <p class="muted">Aus Alberts, Molecular Biology of the Cell (6. Aufl.). Die Videos liegen lokal im Ordner <code>media/</code>.</p>
        <div class="video-grid">
          ${vids.map((v) => `
            <figure style="margin:0">
              <video controls preload="metadata" src="media/${v.f}"></video>
              <figcaption><b>${v.t}</b><br><small class="muted">${v.d}</small></figcaption>
            </figure>`).join("")}
        </div>
      </div>`;
    el.querySelectorAll("video").forEach((v) => v.addEventListener("error", () => {
      v.outerHTML = `<div class="callout warn"><span class="ci">📦</span><div><b>Video nicht gefunden</b>Lege die Datei in den Ordner <code>media/</code>.</div></div>`;
    }));
  }

  /* ---- Osmose / Tonizität ---- */
  function labOsmose(el) {
    const SOL = [
      { n: "NaCl 0,9 %", osm: 308, ton: 308, note: "Physiologische Kochsalzlösung: isoton – Standard für Infusionen und zum Verdünnen von Arzneimitteln." },
      { n: "NaCl 0,45 %", osm: 154, ton: 154, note: "Halbisotone Lösung: hypoton – die Zellen nehmen Wasser auf." },
      { n: "NaCl 3 %", osm: 1027, ton: 1027, note: "Hypertone Kochsalzlösung: Zellen verlieren Wasser (z. B. Einsatz bei Hirnödem oder zur Inhalation)." },
      { n: "Glucose 5 %", osm: 278, ton: 0, vol: 1.3, eff: "Zunächst kaum Effekt; sobald die Glucose verstoffwechselt ist, strömt Wasser ein – die Zelle schwillt an", note: "Isoosmotisch in der Flasche – da die Zellen die Glucose aber aufnehmen, wirkt sie im Körper wie freies Wasser: hypoton!" },
      { n: "Harnstoff 300 mM", osm: 300, ton: 0, note: "Isoosmotisch, aber Harnstoff ist membrangängig und zählt nicht zur Tonizität → hypoton, die Zelle schwillt." },
      { n: "Aqua ad iniectabilia", osm: 0, ton: 0, note: "Reines Wasser: stark hypoton – Erythrozyten würden platzen (Hämolyse). Nie unverdünnt intravenös!" }
    ];
    let sel = 0;
    el.innerHTML = `
      <div class="card tool">
        <div>
          <h2>💧 Tonizitäts-Check für Infusionslösungen</h2>
          <p class="muted">Ein Erythrozyt (Innenraum ≈ 300 mOsm/l, nicht membrangängig) wird in die gewählte Lösung gegeben. Wie reagiert das Zellvolumen?</p>
        </div>
        <div class="ion-pick" id="solPick">${SOL.map((s, i) => `<button data-i="${i}" aria-pressed="${i === sel}">${s.n}</button>`).join("")}</div>
        <div style="display:grid;grid-template-columns:minmax(200px,280px) 1fr;gap:20px;align-items:center" class="osm-grid">
          <svg viewBox="0 0 200 200" id="cellSvg" aria-label="Zelle"></svg>
          <div id="solInfo"></div>
        </div>
      </div>`;
    function paint() {
      const s = SOL[sel];
      // Volumen ∝ 300 / effektive Tonizität (begrenzt); Lyse bei sehr hypoton
      const v = s.vol || (s.ton <= 60 ? 1.7 : Math.max(0.45, Math.min(1.7, 300 / s.ton)));
      const r = 55 * Math.cbrt(v) * (v > 1 ? 1.05 : 1);
      const kind = s.ton > 320 ? ["hyperton", "Zelle schrumpft (Wasser strömt aus)", "var(--amber)"]
        : s.ton < 280 ? ["hypoton", v >= 1.7 ? "Zelle schwillt stark an – Hämolyse droht" : "Zelle schwillt an (Wasser strömt ein)", "var(--red)"]
          : ["isoton", "Zellvolumen bleibt gleich", "var(--green)"];
      el.querySelector("#cellSvg").innerHTML = `
        <rect x="4" y="4" width="192" height="192" rx="18" fill="color-mix(in srgb, var(--blue) 10%, transparent)" stroke="var(--line)"/>
        <circle cx="100" cy="100" r="55" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/>
        <ellipse cx="100" cy="100" rx="${r}" ry="${r * (v < 0.9 ? 0.82 : 0.95)}" fill="#e35d5d" fill-opacity=".85" stroke="#b33" stroke-width="2" ${v < 0.8 ? 'stroke-dasharray="3 2"' : ""}/>
        <text x="100" y="190" text-anchor="middle" font-size="11" fill="var(--muted)">gestrichelt = Ausgangsgrösse</text>`;
      el.querySelector("#solInfo").innerHTML = `
        <span class="tag" style="background:color-mix(in srgb, ${kind[2]} 15%, transparent);color:${kind[2]}">${kind[0]}</span>
        <h3 style="margin-top:8px">${s.n}</h3>
        <dl class="kv"><dt>Osmolarität</dt><dd>≈ ${s.osm} mOsm/l</dd><dt>Wirksame Tonizität</dt><dd>≈ ${s.ton} mOsm/l (nicht membrangängig)</dd><dt>Effekt</dt><dd>${s.eff || kind[1]}</dd></dl>
        <div class="callout pharma"><span class="ci">💊</span><div><b>Aus der Praxis</b>${s.note}</div></div>`;
      el.querySelectorAll("#solPick button").forEach((b) => b.setAttribute("aria-pressed", +b.dataset.i === sel));
    }
    el.querySelectorAll("#solPick button").forEach((b) => b.addEventListener("click", () => { sel = +b.dataset.i; paint(); }));
    paint();
  }

  /* ======================================================== 404 */
  function notFound() {
    $app.innerHTML = `<div class="card empty"><div class="big">🔍</div><h2>Nicht im Sortiment</h2><p class="muted">Diese Seite führen wir leider nicht.</p><a class="btn primary" href="#/">Zurück zum Regal</a></div>`;
  }

  /* ---------------- Start ---------------- */
  applyTheme();
  updateDose();
  route();
})();
