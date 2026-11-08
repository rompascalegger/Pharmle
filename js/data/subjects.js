/* Fächer des 1. Semesters – als "Arzneipackungen" im Regal.
   available:false  => Packung ist im "Lieferengpass" (noch keine Inhalte). */
window.PHARMLE_SUBJECTS = [
  { id: "einfuehrung-pharma", title: "Einführung in die Pharmazeutischen Wissenschaften", short: "Pharm. Wissenschaften",
    icon: "⚕️", color: "#119b5a", dose: "1× wöchentlich", available: false },
  { id: "chemie", title: "Einführung in die Chemie", short: "Chemie",
    icon: "⚗️", color: "#2f6fd6", dose: "Filmtabletten 100 mg", available: false },
  { id: "anatomie", title: "Anatomie", short: "Anatomie",
    icon: "🦴", color: "#c0573e", dose: "Dragées 206 Stk.", available: false },
  { id: "physiologie", title: "Physiologie", short: "Physiologie",
    icon: "🫀", color: "#d64545", dose: "Kapseln · 7 Wochen", available: true,
    sub: "Zellaufbau & Funktion · HS" },
  { id: "mikrobiologie", title: "Vielfalt und Ökologie der Mikroorganismen", short: "Mikroorganismen",
    icon: "🦠", color: "#7a5bd6", dose: "Kulturen 10⁹ KBE", available: false },
  { id: "physik", title: "Einführung in Physik I", short: "Physik I",
    icon: "🧲", color: "#1f8fa3", dose: "Retard 9,81 m/s²", available: false },
  { id: "mathematik", title: "Mathematik I für Naturwissenschaften", short: "Mathematik I",
    icon: "∑", color: "#535f6b", dose: "Tropfen dx/dt", available: false },
  { id: "arzneipflanzen", title: "Organisation und Systematik der Arznei- und Giftpflanzen", short: "Arznei- & Giftpflanzen",
    icon: "🌿", color: "#5c8a2e", dose: "Tee · Drogen DAB", available: false },
  { id: "analytik", title: "Analytische Chemie I: Quantitative Analytik", short: "Quantitative Analytik",
    icon: "🧪", color: "#d08a18", dose: "Titer f = 1,000", available: false }
];
