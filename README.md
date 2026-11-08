# Pharmle – Lernapotheke 💊

Lernapp fürs Pharmaziestudium (1. Studienjahr). Jedes Fach ist eine Arzneipackung im Regal; aktuell ist **Physiologie (W1–W7)** freigeschaltet, die übrigen Fächer sind im «Lieferengpass».

Pro Woche:
- **Packungsbeilage**: Zusammenfassung der Folien mit Lernzielen und Pharma-Bezug
- **Blister**: Lernkarten mit Leitner-Boxen (Tasten: Leertaste = umdrehen, 1 = nochmals, 2 = gewusst)
- **Abgabeprüfung**: Multiple-Choice-Quiz mit Erklärungen
- **Labor** (W4–W7): Tonizitäts-Check, Signaltransduktions-Videos, Nernst/GHK-Rechner, Aktionspotenzial-Simulator

Dazu ein Jahresprüfungs-Simulator (20 zufällige Fragen) und eine Tagesdosis (20 Karten/Fragen).

## Starten

`index.html` direkt im Browser öffnen oder lokal ausliefern:

```bash
python -m http.server 8765
```

Der Lernstand wird im Browser (localStorage) gespeichert.

## Inhalte erweitern

- Fächer: `js/data/subjects.js` (`available: true` schaltet ein Fach frei)
- Inhalte: `js/data/<fach>.js` nach dem Muster von `js/data/physiologie.js`, dann in `index.html` einbinden

Die Videos (`media/`) stammen aus Alberts, *Molecular Biology of the Cell*, und sind wegen des Urheberrechts per `.gitignore` vom Repository ausgeschlossen.
