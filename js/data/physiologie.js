/* Physiologie HS – Zellaufbau und Funktion
   Quelle: Vorlesungsfolien & Themenübersichten W1–W7 (Dr. M. Brauchle, Unibas), Silverthorn.
   Struktur je Woche:
     sections: Packungsbeilage (HTML)
     cards:    Lernkarten { q, a }
     quiz:     Multiple Choice { q, o: [Optionen], a: Index der richtigen Option, e: Erklärung }
     lab:      optionales interaktives Labor ("nernst" | "ap" | "videos" | "osmose")
*/
window.PHARMLE_CONTENT = window.PHARMLE_CONTENT || {};
window.PHARMLE_CONTENT.physiologie = {
  intro: "Die Physiologie untersucht die normale Funktionsweise von Organismen – Zweck (warum?) und Prozess (wie?). Ohne Physiologie keine Pharmakologie: Jeder Wirkstoff greift in einen physiologischen Vorgang ein.",
  exam: "Jahresprüfung 2027 · Multiple Choice",
  upcoming: [
    { no: 8, title: "Synapsen", date: "4.11." },
    { no: 9, title: "Muskelzellen", date: "11.11." },
    { no: 10, title: "Neuromuskuläre Steuerung", date: "18.11." },
    { no: 11, title: "Sinne 1: Gleichgewicht, Gehör", date: "25.11." },
    { no: 12, title: "Sinne 2: Sehen, Tasten", date: "2.12." },
    { no: 13, title: "Sinne 3: Schmecken, Riechen", date: "9.12." },
    { no: 14, title: "Gewebe und Interaktionen", date: "16.12." }
  ],
  weeks: [
    /* ===================================================== W1 */
    {
      id: "w1", no: 1, date: "16.9.",
      title: "Einführung in die Physiologie",
      drug: "Homöostatin® 7,4",
      goals: [
        "Organisationsebenen von Molekül bis Population kennen",
        "Zweck und Prozess unterscheiden",
        "Homöostase, Flüssigkeitskompartimente, pH und Puffer erklären",
        "Grundkonzepte der Physiologie und wissenschaftliches Vorgehen kennen"
      ],
      sections: [
        { title: "Was ist Physiologie?", html: `
          <ul>
            <li>Wissenschaft von der <b>normalen Funktionsweise</b> eines lebenden Organismus und seiner Komponenten.</li>
            <li>Komponenten identifizieren, Aufgaben und Interaktionen studieren, Folgen von Fehlfunktionen verstehen (→ <b>Pathophysiologie</b>) und Korrekturmöglichkeiten finden.</li>
            <li><b>Zweck</b> = das «Warum/Wofür» · <b>Prozess</b> = das «Wie» (mechanistischer Ansatz).</li>
            <li>Modellsysteme: Zellkultur → Organoide → ganze Organismen. Physiologie verbindet Biologie, Chemie und Physik.</li>
          </ul>` },
        { title: "Organisationsebenen", html: `
          <ul>
            <li>Molekül → Zelle → Gewebe → Organ → Organsystem → Organismus → Population.</li>
            <li>Die <b>Zelle</b> ist die kleinste strukturelle Einheit, die alle biochemischen Prozesse des Lebens durchführen kann.</li>
            <li>Mensch: <b>4 Gewebetypen</b> (Epithel-, Binde-, Muskel-, Nervengewebe) und <b>&gt; 200 Zelltypen</b>. Ca. 3,0 × 10<sup>13</sup> menschliche Zellen vs. ca. 3,8 × 10<sup>13</sup> Bakterien.</li>
            <li>Organsysteme: Haut, muskuloskeletales, respiratorisches, Verdauungs-, Harn-, Immun-, Kreislauf-, Nerven-, endokrines und Reproduktionssystem.</li>
            <li>Skelettmuskelfasern sind verschmolzene Einzelzellen mit bis zu mehreren hundert Kernen. Einzelkernsequenzierung findet neue Zell(sub)typen – Hypothesen, (noch) keine Lehrmeinung.</li>
          </ul>` },
        { title: "Homöostase", html: `
          <ul>
            <li><b>Homöostase</b> = Aufrechterhaltung eines relativ konstanten inneren Milieus (Temperatur, pH, Ionen, Wassergehalt …).</li>
            <li>Arbeitet meist mit <b>negativer Rückkopplung</b>: Sensoren überwachen Variablen, Abweichungen werden kompensiert.</li>
            <li>Kompensation erfolgreich → Gesundheit; Kompensation fehlgeschlagen → Krankheit.</li>
            <li><b>Massenbilanz</b>: Stoffmenge = Aufnahme + Produktion − Exkretion − Abbau.</li>
            <li>Beispiel Blutglucose: ca. 5 g Glucose im Blut (70–100 mg/dl).</li>
            <li>Homöostase ≠ Gleichgewicht! Es herrscht ein <b>dynamisches Fliessgleichgewicht</b> (z. B. Ionen zwischen IZF und EZF).</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Viele Arzneimittel stellen eine gestörte Homöostase wieder her – z. B. Insulin bei Diabetes (Blutglucose) oder Antihypertensiva (Blutdruck).</div></div>` },
        { title: "Flüssigkeitskompartimente", html: `
          <dl class="kv">
            <dt>IZF</dt><dd>Intrazelluläre Flüssigkeit, ca. <b>2/3</b> des Körperwassers, reich an <b>K<sup>+</sup></b> und Proteinen.</dd>
            <dt>EZF</dt><dd>Extrazelluläre Flüssigkeit, reich an <b>Na<sup>+</sup></b> und <b>Cl<sup>−</sup></b>; unterteilt in interstitielle Flüssigkeit und Blutplasma.</dd>
            <dt>TZF</dt><dd>Transzelluläre Flüssigkeit, durch Epithel abgegrenzt (Pleura, Augenkammer, Harn, Drüsen).</dd>
          </dl>` },
        { title: "Wasser, pH, Säuren, Basen, Puffer", html: `
          <ul>
            <li><b>pH = −log[H<sup>+</sup>]</b>. Tiefer pH = sauer = viele H<sup>+</sup>; hoher pH = basisch = wenig H<sup>+</sup>.</li>
            <li><b>Säure</b> gibt Protonen ab, <b>Base</b> nimmt Protonen auf. Je nach Reaktionspartner kann dasselbe Molekül Säure oder Base sein (pK<sub>a</sub>-Werte helfen).</li>
            <li><b>Puffer</b> fangen H<sup>+</sup> ab oder geben sie frei und stabilisieren so den pH. Blut: Proteine und <b>HCO<sub>3</sub><sup>−</sup></b> (Bicarbonat).</li>
          </ul>
          <div class="table-wrap"><table class="simple">
            <tr><th>Kompartiment</th><th>pH</th></tr>
            <tr><td>Blut</td><td>7,4</td></tr>
            <tr><td>Cytoplasma</td><td>7,2</td></tr>
            <tr><td>Lysosomen</td><td>ca. 5</td></tr>
            <tr><td>Mitochondriale Matrix</td><td>ca. 8</td></tr>
          </table></div>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Der pH bestimmt, ob ein schwach saurer oder basischer Wirkstoff geladen vorliegt – und damit, wie gut er Membranen passiert und resorbiert wird.</div></div>` },
        { title: "Grundkonzepte & Wissenschaft", html: `
          <ul>
            <li>Wiederkehrende Grundkonzepte: Homöostase & Kontrollsysteme, <b>Flussgradienten</b> (Stoffe folgen Konzentrations-, Flüssigkeiten Druckgradienten), <b>Struktur ↔ Funktion</b> (z. B. Titin: &gt; 35 000 AS, &gt; 1 µm), <b>Zell-Zell-Kommunikation</b>.</li>
            <li>Physiologie ist <b>integrativ</b>: Viele Funktionen ergeben sich erst aus dem Zusammenspiel der Komponenten.</li>
            <li><b>Translationale Forschung</b>: Übertragung von Grundlagenwissen in die medizinische Praxis.</li>
            <li>Wissenschaftlicher Weg: Beobachtung → <b>Hypothese</b> → kontrolliertes Experiment (unabhängige Variable verändern, Kontrollen!) → <b>Theorie/Lehrmeinung</b>, die bei neuen Daten revidiert werden muss.</li>
            <li>Tierversuche und Zellkultur liefern den Grossteil der Modelle, da menschliche Populationen sehr variabel und Experimente schwer kontrollierbar sind.</li>
          </ul>` }
      ],
      cards: [
        { q: "Was untersucht die Physiologie?", a: "Die normale Funktionsweise eines lebenden Organismus und seiner Komponenten – Zweck (Warum?) und Prozess (Wie?)." },
        { q: "Zweck vs. Prozess?", a: "Zweck = das «Warum/Wofür» eines Vorgangs. Prozess = das «Wie», der mechanistische Ablauf." },
        { q: "Kleinste strukturelle Einheit des Lebens?", a: "Die Zelle – sie kann alle biochemischen Prozesse durchführen, die zum Leben nötig sind." },
        { q: "Die 4 Gewebetypen des Menschen?", a: "Epithelgewebe, Bindegewebe, Muskelgewebe, Nervengewebe (dazu > 200 Zelltypen)." },
        { q: "Definition Homöostase?", a: "Aufrechterhaltung eines relativ konstanten inneren Milieus (z. B. Temperatur, pH, Ionen, Wasser) – meist über negative Rückkopplung." },
        { q: "Bedeutet Homöostase Gleichgewicht?", a: "Nein! Es herrscht ein dynamisches Fliessgleichgewicht: Konzentrationen bleiben stabil, obwohl ständig Austausch stattfindet." },
        { q: "Ionenzusammensetzung IZF vs. EZF?", a: "IZF: reich an K⁺ (und Proteinen), ca. 2/3 des Körperwassers. EZF: reich an Na⁺ und Cl⁻." },
        { q: "Definition pH?", a: "Negativer dekadischer Logarithmus der H⁺-Konzentration: pH = −log[H⁺]. Reines Wasser: pH 7 = 10⁻⁷ mol/l H⁺." },
        { q: "pH von Blut, Cytoplasma, Lysosom, Mitochondrienmatrix?", a: "Blut 7,4 · Cytoplasma 7,2 · Lysosom ca. 5 · Mitochondriale Matrix ca. 8." },
        { q: "Was ist ein Puffer? Wichtigster Blutpuffer?", a: "Ein System, das H⁺ aufnehmen oder abgeben kann und so pH-Änderungen abschwächt. Im Blut: Bicarbonat (HCO₃⁻) und Proteine." },
        { q: "Massenbilanz?", a: "Stoffmenge im Körper = Aufnahme + Produktion − Exkretion − Abbau; wird homöostatisch konstant gehalten." },
        { q: "Normale Blutglucose?", a: "Ca. 70–100 mg/dl, insgesamt ca. 5 g Glucose im Blut." },
        { q: "Was ist translationale Forschung?", a: "Übertragung von Ergebnissen der Grundlagenforschung in die tägliche medizinische Praxis." },
        { q: "Wozu dient eine Kontrolle im Experiment?", a: "Sie stellt sicher, dass beobachtete Veränderungen tatsächlich auf die veränderte unabhängige Variable zurückgehen und nicht auf andere Faktoren." }
      ],
      quiz: [
        { q: "Welche Aussage zur Homöostase trifft zu?", o: ["Sie beruht meist auf negativer Rückkopplung", "Sie bedeutet, dass IZF und EZF im chemischen Gleichgewicht sind", "Sie wird hauptsächlich über positive Rückkopplung gesteuert", "Sie betrifft nur die Körpertemperatur"], a: 0, e: "Homöostase arbeitet meist mit negativen Rückkopplungsschleifen. Es herrscht ein dynamisches Fliessgleichgewicht, kein Gleichgewicht." },
        { q: "Welches Ion dominiert in der intrazellulären Flüssigkeit?", o: ["K⁺", "Na⁺", "Cl⁻", "Ca²⁺"], a: 0, e: "Die IZF ist reich an K⁺ und Proteinen, die EZF an Na⁺ und Cl⁻." },
        { q: "Welcher Anteil des Körperwassers befindet sich intrazellulär?", o: ["Ca. 2/3", "Ca. 1/3", "Ca. 1/2", "Ca. 9/10"], a: 0, e: "Rund zwei Drittel der Körperflüssigkeit sind intrazellulär." },
        { q: "Eine Lösung hat pH 5. Was gilt im Vergleich zu pH 7?", o: ["100-fach höhere H⁺-Konzentration", "2-fach höhere H⁺-Konzentration", "100-fach tiefere H⁺-Konzentration", "Gleiche H⁺-Konzentration, aber mehr OH⁻"], a: 0, e: "pH ist logarithmisch: 2 pH-Einheiten = Faktor 10² = 100." },
        { q: "Welches Kompartiment hat den tiefsten pH?", o: ["Lysosom", "Blut", "Cytoplasma", "Mitochondriale Matrix"], a: 0, e: "Lysosomen haben einen pH um 5 (saure Hydrolasen); die Matrix ist mit ca. pH 8 leicht basisch." },
        { q: "Welches ist ein wichtiges Puffersystem im Blut?", o: ["Bicarbonat (HCO₃⁻)", "Glucose", "Harnstoff", "Natriumchlorid"], a: 0, e: "Blut wird v. a. durch HCO₃⁻ und Proteine gepuffert." },
        { q: "Was beschreibt der «Prozess» eines physiologischen Vorgangs?", o: ["Wie der Vorgang mechanistisch abläuft", "Warum der Vorgang stattfindet", "Welche Krankheit entsteht", "Den evolutionären Ursprung"], a: 0, e: "Prozess = das Wie; Zweck = das Warum/Wofür." },
        { q: "Welche Aussage zu wissenschaftlichen Theorien ist korrekt?", o: ["Sie müssen bei widersprechenden neuen Daten überarbeitet werden", "Sie gelten nach einmaliger Bestätigung für immer", "Sie sind dasselbe wie eine Hypothese", "Sie brauchen keine Kontrollexperimente"], a: 0, e: "Eine Theorie entsteht aus vielfach unabhängig bestätigten Hypothesen und wird bei neuen widersprechenden Daten revidiert." },
        { q: "Welche Organisationsebene ist die kleinste, die alle Lebensprozesse ausführen kann?", o: ["Zelle", "Organell", "Molekül", "Gewebe"], a: 0, e: "Die Zelle ist die kleinste strukturelle Einheit des Lebens." },
        { q: "Flussgradienten: Wohin strömt eine Flüssigkeit?", o: ["Vom Ort hohen zum Ort niedrigen Drucks", "Vom Ort niedrigen zum Ort hohen Drucks", "Immer zur höheren Konzentration", "Nur aktiv unter ATP-Verbrauch"], a: 0, e: "Flüssigkeiten folgen dem Druckgradienten (z. B. Blutfluss, Atmung), gelöste Stoffe dem Konzentrationsgradienten." }
      ]
    },

    /* ===================================================== W2 */
    {
      id: "w2", no: 2, date: "23.9.",
      title: "Biomoleküle",
      drug: "Biomolekulin® forte",
      goals: [
        "Arten von Biomolekülen kennen und beschreiben",
        "Monomere und Polymere der 4 Hauptgruppen und ihre Aufgaben kennen",
        "Bindungstypen und Proteinstrukturebenen erklären",
        "Einblick in die Hauptstoffwechselwege"
      ],
      sections: [
        { title: "Chemische Bindungen", html: `
          <ul>
            <li>Atome: Protonen, Neutronen, Elektronen. Elemente unterscheiden sich durch die <b>Protonenzahl</b>.</li>
            <li><b>Kovalente Bindung</b>: geteilte Elektronenpaare, stark. Ungleich verteilt → <b>polare</b> Bindung (z. B. H<sub>2</sub>O).</li>
            <li><b>Ionen</b>: Kationen (+), Anionen (−). <b>Ionenbindung</b> = elektrostatische Anziehung.</li>
            <li><b>Wasserstoffbrücken</b>: δ+ H mit δ− O oder N; verantwortlich für Oberflächenspannung und hohen Siedepunkt von Wasser.</li>
            <li><b>Van-der-Waals-Kräfte</b>: sehr schwach. Viele schwache Wechselwirkungen gemeinsam stabilisieren 3D-Strukturen und Proteininteraktionen.</li>
          </ul>
          <div class="callout"><span class="ci">📏</span><div><b>Relative Bindungsstärken</b>vdW (0,1) &lt; H-Brücken (1) &lt; ionisch (~3) &lt; kovalent (~100). Zusätzlich: hydrophobe Kräfte.</div></div>` },
        { title: "Kohlenhydrate", html: `
          <ul>
            <li>Monosaccharide: (CH<sub>2</sub>O)<sub>n</sub>, z. B. Glucose, Fructose, Galactose. Zelluläre Form: <b>D-Zucker</b>.</li>
            <li>Disaccharide: Saccharose (Glc + Fru), Lactose (Gal + Glc), Maltose (Glc + Glc, aus Stärke).</li>
            <li>Polymerisierung senkt den osmotischen Druck.</li>
            <li>Aufgaben: Energielieferant (ca. 4–5 g Glucose im Blut), Energiespeicher (ca. 500 g Glykogen), Struktur, Edukte, Proteinmodifikation.</li>
          </ul>
          <div class="table-wrap"><table class="simple">
            <tr><th>Polysaccharid</th><th>Verknüpfung</th><th>Funktion</th></tr>
            <tr><td>Glykogen (Tier)</td><td>α1-4, α1-6</td><td>Speicher in Leber & Muskel</td></tr>
            <tr><td>Amylose (25 % der Stärke)</td><td>α1-4</td><td>Pflanzlicher Speicher</td></tr>
            <tr><td>Amylopektin (75 %)</td><td>α1-4, α1-6</td><td>Pflanzlicher Speicher</td></tr>
            <tr><td>Cellulose</td><td>β1-4</td><td>Struktur, für Menschen unverdaulich</td></tr>
          </table></div>
          <ul>
            <li><b>Glykosylierung</b> von Proteinen: O-glykosidisch an Ser/Thr, N-glykosidisch an Asn → beeinflusst Faltung, Stabilität, Transport, Lokalisation.</li>
            <li>Beispiele: Hyaluronsäure (Gelenkschmiere, Filler), <b>Blutgruppen</b> AB0 werden über Zuckerreste von Glykolipiden definiert.</li>
          </ul>` },
        { title: "Lipide", html: `
          <ul>
            <li>Wenig Sauerstoff, hydrophob. <b>Fettsäuren</b>: lange Kohlenwasserstoffketten mit Carboxylgruppe; gesättigt oder ungesättigt.</li>
            <li><b>Triglyceride</b>: Glycerin + 3 Fettsäuren (verestert), Hauptenergiespeicher (ca. 10 kg Fett beim Erwachsenen), gebildet im ER.</li>
            <li><b>Phospholipide</b>: amphiphil → Mizellen/Doppelschichten, ca. 50 % der Membranmasse, asymmetrisch verteilt.</li>
            <li><b>Cholesterin</b>: Membranbestandteil, Vorstufe von Steroidhormonen, Gallensäuren und Vitamin D.</li>
            <li>Essentielle Fettsäuren: Linolsäure (→ Arachidonsäure), Linolensäure (→ EPA, DHA).</li>
            <li>Fettsäureabbau: <b>β-Oxidation</b> in Mitochondrien → Acetyl-CoA → Citratzyklus.</li>
            <li><b>Lipoproteine</b>: LDL bringt Cholesterin zu den Zellen (zu viel fördert Ablagerungen), HDL bringt es zur Leber. Mehr Protein = höhere Dichte.</li>
            <li><b>Eicosanoide</b> aus Arachidonsäure: Prostaglandine (Schmerz, Fieber, Entzündung), Leukotriene (Asthma), Thromboxane (Plättchenaggregation).</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>NSAR wie Ibuprofen und Acetylsalicylsäure hemmen die Cyclooxygenase und damit die Bildung von Prostaglandinen und Thromboxan – daher schmerzstillend, fiebersenkend und (ASS) gerinnungshemmend.</div></div>` },
        { title: "Proteine & Aminosäuren", html: `
          <ul>
            <li>20 proteinogene <b>L-Aminosäuren</b> (Amino-, Carboxylgruppe, Seitenkette R; chirales Cα), davon 8 essentiell.</li>
            <li><b>Peptidbindung</b>: Polarität N → C, braucht Energie zur Bildung. Oligopeptid 2–9, Polypeptid 10–100, Protein &gt; 100 AS (Richtwerte).</li>
          </ul>
          <dl class="kv">
            <dt>Primärstruktur</dt><dd>Aminosäuresequenz</dd>
            <dt>Sekundärstruktur</dt><dd>Lokale Muster: α-Helix, β-Faltblatt</dd>
            <dt>Tertiärstruktur</dt><dd>Gesamte 3D-Gestalt einer Kette</dd>
            <dt>Quartärstruktur</dt><dd>Anordnung mehrerer Untereinheiten (z. B. pentamerer nikotinischer ACh-Rezeptor)</dd>
          </dl>
          <ul>
            <li>Strukturaufklärung: Röntgenkristallographie, Elektronenmikroskopie, NMR; Vorhersage mit KI (AlphaFold).</li>
            <li><b>Globuläre</b> Proteine: meist wasserlöslich (Enzyme, Rezeptoren, Transporter, Antikörper …). <b>Fibrilläre</b>: faserartig, schlecht löslich.</li>
            <li><b>Posttranslationale Modifikationen</b>: Phosphorylierung (Aktivität), Glykosylierung, Lipidanker, Ubiquitinylierung (Abbausignal), Spaltung (Prohormon → Hormon), Disulfidbrücken.</li>
          </ul>` },
        { title: "Nukleotide & Nukleinsäuren", html: `
          <ul>
            <li>Nukleotid = Phosphat(e) + Zucker (Ribose/Desoxyribose) + Base. Nukleosid = ohne Phosphat.</li>
            <li><b>Purine</b>: A, G · <b>Pyrimidine</b>: C, T, U. Paarung A–T (2 H-Brücken), G–C (3 H-Brücken). In RNA ersetzt U das T.</li>
            <li>DNA: doppelsträngig, <b>antiparallel</b>, Informationsspeicher. RNA: einzelsträngig, Informationsträger; teils katalytisch (Ribozyme).</li>
            <li>Replikation ist <b>semikonservativ</b>: jeder alte Strang dient als Vorlage.</li>
            <li><b>ATP</b>: Hauptenergieträger, pro Tag wird ca. ein Körpergewicht umgesetzt. cAMP/cGMP: Signalmoleküle; NADH/FAD: Redoxcarrier.</li>
            <li>13 Vitamine beim Menschen (A, C, D, E, K und 8 B-Vitamine), oft Vorstufen von Coenzymen.</li>
          </ul>` }
      ],
      cards: [
        { q: "Ordne die Bindungsstärken: kovalent, ionisch, H-Brücke, van der Waals", a: "vdW (0,1) < H-Brücke (1) < ionisch (~3) < kovalent (~100)." },
        { q: "Was ist eine polare Bindung?", a: "Eine kovalente Bindung, bei der die Bindungselektronen ungleich zwischen den Atomen verteilt sind (z. B. O–H im Wasser)." },
        { q: "Die 4 Hauptklassen der Biomoleküle und ihre Monomere?", a: "Kohlenhydrate (Zucker), Lipide (Fettsäuren), Proteine (Aminosäuren), Nukleinsäuren (Nukleotide)." },
        { q: "Glykogen vs. Cellulose?", a: "Glykogen: α1-4/α1-6, tierischer Energiespeicher. Cellulose: β1-4, pflanzlicher Strukturbaustein, für Menschen unverdaulich." },
        { q: "Wo werden Zucker an Proteine gehängt?", a: "O-glykosidisch an Serin/Threonin, N-glykosidisch an Asparagin." },
        { q: "Was ist ein Triglycerid?", a: "Glycerin, verestert mit 3 Fettsäuren – Hauptenergiespeicher, gebildet im ER, gespeichert in Adipozyten." },
        { q: "Warum bilden Phospholipide Doppelschichten?", a: "Sie sind amphiphil: hydrophiler Kopf, hydrophobe Schwänze → in Wasser spontan Mizellen oder Lipiddoppelschichten." },
        { q: "Wofür ist Cholesterin Ausgangsstoff?", a: "Steroidhormone, Gallensäuren und Vitamin D; ausserdem Membranbestandteil." },
        { q: "LDL vs. HDL?", a: "LDL transportiert Cholesterin zu den Zellen (zu viel → Ablagerungen), HDL transportiert Cholesterin zur Leber." },
        { q: "Welche Eicosanoide entstehen aus Arachidonsäure?", a: "Prostaglandine (Schmerz, Fieber, Entzündung), Leukotriene (z. B. Asthma), Thromboxane (Plättchenaggregation)." },
        { q: "Die 4 Proteinstrukturebenen?", a: "Primär: AS-Sequenz · Sekundär: α-Helix/β-Faltblatt · Tertiär: 3D-Gestalt einer Kette · Quartär: Anordnung mehrerer Untereinheiten." },
        { q: "Beispiele posttranslationaler Modifikationen?", a: "Phosphorylierung, Glykosylierung, Lipidanker, Ubiquitinylierung (Abbau), proteolytische Spaltung, Disulfidbrücken." },
        { q: "Purine vs. Pyrimidine?", a: "Purine: Adenin, Guanin. Pyrimidine: Cytosin, Thymin, Uracil." },
        { q: "Warum ist G–C stabiler als A–T?", a: "G–C bildet 3 Wasserstoffbrücken, A–T nur 2." },
        { q: "Was bedeutet semikonservative Replikation?", a: "Jede neue DNA-Doppelhelix besteht aus einem alten (Vorlage) und einem neu synthetisierten Strang." },
        { q: "Nukleosid vs. Nukleotid?", a: "Nukleosid = Base + Zucker. Nukleotid = Base + Zucker + Phosphat(e)." }
      ],
      quiz: [
        { q: "Welche Bindung ist am schwächsten?", o: ["Van-der-Waals-Kraft", "Wasserstoffbrücke", "Ionenbindung", "Kovalente Bindung"], a: 0, e: "vdW (0,1) < H-Brücke (1) < ionisch (~3) < kovalent (~100)." },
        { q: "Welche Verknüpfung findet man in Cellulose?", o: ["β1-4", "α1-4 und α1-6", "α1-4", "β1-6"], a: 0, e: "Cellulose ist β1-4-verknüpft und kann vom Menschen nicht abgebaut werden." },
        { q: "Welches Disaccharid besteht aus Glucose und Fructose?", o: ["Saccharose", "Lactose", "Maltose", "Cellobiose"], a: 0, e: "Saccharose = Glc + Fru; Lactose = Gal + Glc; Maltose = Glc + Glc." },
        { q: "Wofür ist Cholesterin KEIN Ausgangsstoff?", o: ["Prostaglandine", "Steroidhormone", "Gallensäuren", "Vitamin D"], a: 0, e: "Prostaglandine sind Eicosanoide aus Arachidonsäure, nicht aus Cholesterin." },
        { q: "Welche Lipoproteine transportieren Cholesterin zur Leber?", o: ["HDL", "LDL", "VLDL", "Chylomikronen ausschliesslich"], a: 0, e: "HDL bringt Cholesterin zur Leber, LDL zu den Zellen." },
        { q: "Was beschreibt die Sekundärstruktur eines Proteins?", o: ["Lokale Muster wie α-Helix und β-Faltblatt", "Die Aminosäuresequenz", "Die Anordnung mehrerer Untereinheiten", "Die Glykosylierung"], a: 0, e: "Primär = Sequenz, Sekundär = lokale Muster, Tertiär = 3D-Gestalt, Quartär = Untereinheiten." },
        { q: "An welcher Aminosäure erfolgt die N-Glykosylierung?", o: ["Asparagin", "Serin", "Threonin", "Lysin"], a: 0, e: "N-glykosidisch an Asn, O-glykosidisch an Ser/Thr." },
        { q: "Welche Base kommt nur in RNA vor?", o: ["Uracil", "Thymin", "Adenin", "Cytosin"], a: 0, e: "In RNA ersetzt Uracil das Thymin." },
        { q: "Welche Aussage zur DNA ist korrekt?", o: ["Die beiden Stränge verlaufen antiparallel", "G–C-Paare bilden 2 H-Brücken", "Die Replikation ist konservativ", "DNA ist meist einzelsträngig"], a: 0, e: "Die Stränge laufen 5'→3' bzw. 3'→5'. G–C hat 3 H-Brücken, die Replikation ist semikonservativ." },
        { q: "Welche Modifikation markiert Proteine für den Abbau?", o: ["Ubiquitinylierung", "Phosphorylierung", "Glykosylierung", "Disulfidbrücke"], a: 0, e: "Ubiquitin ist das Abbausignal (Proteasom)." },
        { q: "Wo findet die β-Oxidation statt?", o: ["In den Mitochondrien", "Im Golgi-Apparat", "Im Zellkern", "Im rauen ER"], a: 0, e: "Fettsäuren werden in den Mitochondrien zu Acetyl-CoA abgebaut (sehr langkettige zuerst in Peroxisomen)." },
        { q: "Warum werden Glucosemoleküle zu Glykogen polymerisiert?", o: ["Um den osmotischen Druck zu senken", "Um sie wasserlöslicher zu machen", "Damit sie durch die Membran diffundieren", "Weil Glucose toxisch ist"], a: 0, e: "Ein Polymer zählt osmotisch als ein Teilchen – so kann viel Glucose gespeichert werden, ohne dass Wasser einströmt." }
      ]
    },

    /* ===================================================== W3 */
    {
      id: "w3", no: 3, date: "30.9.",
      title: "Zellorganellen",
      drug: "Organellol® retard",
      goals: [
        "Kompartimente und Organellen der Zelle mit ihren Funktionen beschreiben",
        "Informationsfluss DNA → RNA → Protein erklären",
        "ATP-Bildung in Mitochondrien verstehen",
        "Cytoskelett und Motorproteine kennen"
      ],
      sections: [
        { title: "Kompartimente", html: `
          <ul>
            <li>Tierische Zellen sind ca. <b>50 µm</b> gross.</li>
            <li><b>Cytosol</b>: halbgelartige wässrige Phase (Nährstoffe, Ionen, Proteine). <b>Cytoplasma</b> = Cytosol + Zelleinschlüsse (ohne Membran, z. B. Ribosomen) + Organellen.</li>
            <li><b>Organellen</b> = membranumhüllte Kompartimente mit spezifischen Funktionen.</li>
            <li>Auch <b>membranlose Kompartimente</b> (biomolekulare Kondensate) konzentrieren Moleküle.</li>
          </ul>` },
        { title: "Zellkern & Genexpression", html: `
          <ul>
            <li>Kernhülle = <b>Doppelmembran</b> mit Kernporenkomplexen (ca. 3500 pro Zelle, ~1000 Moleküle/s). Bakterien haben keinen Kern.</li>
            <li><b>Euchromatin</b>: offen, transkriptionell aktiv · <b>Heterochromatin</b>: geschlossen, inaktiv.</li>
            <li>Mensch: knapp <b>20 000 Gene</b>, <b>2 × 23 Chromosomen</b> (diploid); Keimzellen haploid. Vor der Teilung ca. 10 000-fache Kompaktierung.</li>
            <li>Zellzyklus: G-Phase (Ruhe), <b>S-Phase</b> (DNA-Verdopplung), M-Phase (Teilung). Mitose (Körperzellen) vs. Meiose (Keimbahn).</li>
            <li><b>Transkription</b> (Kern): Gen → RNA. Introns nicht codierend, Exons codierend.</li>
            <li><b>Translation</b> (Ribosom): mRNA → Protein mithilfe von tRNA und genetischem Code (Codons = Tripletts). Proteine wachsen N → C.</li>
            <li>Freie Ribosomen: Proteine fürs Cytosol, Mitochondrien. ER-gebundene Ribosomen: Proteine für ER, Golgi, Plasmamembran, Sekretion (Signalsequenz).</li>
            <li>Proteinmenge wird über <b>Up-</b> und <b>Down-Regulation</b> von Synthese und Abbau gesteuert. pH- oder Temperaturänderungen → <b>Denaturierung</b>.</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Viele Antibiotika (z. B. Makrolide, Tetracycline, Aminoglykoside) hemmen gezielt die bakteriellen 70S-Ribosomen – die menschlichen 80S-Ribosomen sind kaum betroffen.</div></div>` },
        { title: "ER, Golgi & Vesikel", html: `
          <dl class="kv">
            <dt>Raues ER</dt><dd>Ribosomenbesetzt; Synthese von Membran- und Sekretproteinen.</dd>
            <dt>Glattes ER</dt><dd>Hauptort der <b>Lipidsynthese</b> (Fettsäuren, Lipide, Steroide).</dd>
            <dt>Golgi-Apparat</dt><dd>Modifizierung (v. a. Glykosylierung), Sortierung und Verpackung von Proteinen und Lipiden in Vesikel.</dd>
            <dt>Vesikel</dt><dd>Coat-Proteine (z. B. <b>Clathrin</b>) steuern Bildung und Ziel. Sekretorische Vesikel fusionieren mit der Membran (Exocytose).</dd>
            <dt>Endosomen</dt><dd>Nehmen Material von aussen auf, sortieren und recyceln es.</dd>
          </dl>` },
        { title: "Mitochondrien – Kraftwerk der Zelle", html: `
          <ul>
            <li>Äussere Membran, Intermembranraum, stark gefaltete innere Membran (<b>Cristae</b>), <b>Matrix</b>.</li>
            <li>Eigene DNA, nur <b>mütterlich</b> vererbt; die meisten Proteine werden aber importiert.</li>
            <li>Glykolyse im Cytoplasma → Pyruvat. <b>Aerob</b>: Pyruvat → Acetyl-CoA → Citratzyklus (Matrix) → NADH/FADH<sub>2</sub> → Atmungskette. <b>Anaerob</b>: Pyruvat → Laktat (H<sup>+</sup> entstehen); Hefe: Ethanol + CO<sub>2</sub>.</li>
            <li><b>Redox</b>: Reduktionsmittel gibt e<sup>−</sup> ab (wird oxidiert), Oxidationsmittel nimmt e<sup>−</sup> auf (wird reduziert). <b>O<sub>2</sub></b> ist der ultimative Elektronenakzeptor (→ H<sub>2</sub>O).</li>
            <li>Elektronentransport pumpt H<sup>+</sup> in den Intermembranraum → Protonengradient → <b>ATP-Synthase</b> («Turbine», ca. 3 H<sup>+</sup> pro ATP, ~100 ATP/s).</li>
            <li>Ausbeute: ca. <b>30 ATP</b> pro Glucose aerob, nur <b>2 ATP</b> anaerob (dafür schnell).</li>
            <li>Energiebedarf bestimmt die Mitochondrienzahl (Herzmuskel, Transportepithel; Training erhöht sie).</li>
          </ul>` },
        { title: "Lysosomen & Peroxisomen", html: `
          <ul>
            <li><b>Lysosomen</b>: Verdauungsapparat der Zelle, saure Hydrolasen bei <b>pH ~5</b>, aufrechterhalten durch eine H<sup>+</sup>-ATPase.</li>
            <li><b>Peroxisomen</b>: nutzen O<sub>2</sub> und bilden/verwenden <b>H<sub>2</sub>O<sub>2</sub></b> zur Oxidation toxischer Moleküle (u. a. Alkohol in Leber und Niere), Abbau sehr langkettiger Fettsäuren, Synthese von Myelin-Phospholipiden.</li>
            <li><b>Proteasomen</b> bauen (ubiquitinierte) Proteine ab.</li>
          </ul>` },
        { title: "Cytoskelett & Motorproteine", html: `
          <div class="table-wrap"><table class="simple">
            <tr><th>Filament</th><th>Eigenschaften</th><th>Motor / Beispiel</th></tr>
            <tr><td>Mikrotubuli</td><td>Dynamische Hohlzylinder, Polarität, vom MTOC ausgehend; Transportschienen, Chromosomentrennung</td><td>Kinesin (→ +), Dynein (→ −)</td></tr>
            <tr><td>Aktinfilamente (Mikrofilamente)</td><td>Dynamisch, Polarität; Zellbewegung, Oberflächenstrukturen, Muskel</td><td>Myosin (→ +)</td></tr>
            <tr><td>Intermediärfilamente</td><td>Stabil, mechanischer Halt</td><td>Keratine, Neurofilamente, Lamine</td></tr>
          </table></div>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Mikrotubuli sind Zielstrukturen von Arzneistoffen: Colchicin (Gicht) hemmt die Polymerisation, Taxane wie Paclitaxel (Krebs) stabilisieren die Mikrotubuli und blockieren so die Zellteilung.</div></div>` }
      ],
      cards: [
        { q: "Cytosol vs. Cytoplasma?", a: "Cytosol = wässrige, gelartige Phase. Cytoplasma = Cytosol + Zelleinschlüsse (z. B. Ribosomen) + Organellen." },
        { q: "Euchromatin vs. Heterochromatin?", a: "Euchromatin: offen, transkriptionell aktiv. Heterochromatin: geschlossen, nicht ablesbar." },
        { q: "Wie viele Chromosomen und Gene hat der Mensch?", a: "2 × 23 Chromosomen (diploid) und knapp 20 000 Gene." },
        { q: "Aufbau der Kernhülle?", a: "Doppelmembran mit Kernporenkomplexen (~3500 pro Zelle) für kontrollierten Stoffaustausch." },
        { q: "Transkription vs. Translation?", a: "Transkription: DNA → RNA im Kern. Translation: mRNA → Protein am Ribosom mithilfe von tRNA." },
        { q: "In welche Richtung wächst ein Protein?", a: "Vom N- zum C-Terminus." },
        { q: "Freie vs. ER-gebundene Ribosomen?", a: "Frei: Proteine für Cytosol, Mitochondrien, Kern. ER-gebunden (Signalsequenz): Proteine für ER, Golgi, Plasmamembran, Sekretion." },
        { q: "Funktion des glatten ER?", a: "Hauptort der Lipidsynthese (Fettsäuren, Lipide, Steroide)." },
        { q: "Funktion des Golgi-Apparats?", a: "Modifizierung (v. a. Glykosylierung), Sortierung und Verpackung von Proteinen/Lipiden in Vesikel." },
        { q: "Besonderheiten der Mitochondrien?", a: "Doppelmembran mit Cristae, eigene DNA (nur mütterlich vererbt), Ort von Citratzyklus und Atmungskette." },
        { q: "ATP-Ausbeute aerob vs. anaerob?", a: "Aerob ca. 30 ATP pro Glucose, anaerob nur 2 ATP (aber schnell)." },
        { q: "Was ist der ultimative Elektronenakzeptor?", a: "Sauerstoff (O₂) – er wird in der Atmungskette zu H₂O reduziert." },
        { q: "Wie arbeitet die ATP-Synthase?", a: "H⁺ fliessen entlang ihres Gradienten in die Matrix zurück und treiben die «Turbine» an: ca. 3 H⁺ pro ATP, ~100 ATP/s." },
        { q: "Lysosomen?", a: "Verdauungsorganellen mit sauren Hydrolasen, pH ~5 durch H⁺-ATPase." },
        { q: "Peroxisomen?", a: "Oxidieren mit O₂/H₂O₂ toxische Moleküle (z. B. Alkohol), bauen sehr langkettige Fettsäuren ab, synthetisieren Myelin-Phospholipide." },
        { q: "Die 3 Filamentfamilien des Cytoskeletts?", a: "Aktinfilamente (Mikrofilamente), Intermediärfilamente, Mikrotubuli." },
        { q: "Kinesin vs. Dynein?", a: "Beide laufen auf Mikrotubuli: Kinesin Richtung Plus-Ende, Dynein Richtung Minus-Ende." }
      ],
      quiz: [
        { q: "Wo ist der Hauptort der Lipidsynthese?", o: ["Glattes ER", "Raues ER", "Golgi-Apparat", "Lysosom"], a: 0, e: "Das glatte ER synthetisiert Fettsäuren, Lipide und Steroide." },
        { q: "Welche Aussage zu Mitochondrien ist FALSCH?", o: ["Ihre DNA wird väterlich vererbt", "Sie besitzen eine Doppelmembran", "Der Citratzyklus läuft in der Matrix", "Die meisten ihrer Proteine werden importiert"], a: 0, e: "Mitochondriale DNA wird nur mütterlich vererbt." },
        { q: "Wie viele ATP entstehen anaerob pro Glucose?", o: ["2", "30", "38", "0"], a: 0, e: "Anaerob (Glykolyse → Laktat) nur 2 ATP; aerob ca. 30." },
        { q: "Welches Molekül ist der finale Elektronenakzeptor der Atmungskette?", o: ["O₂", "NAD⁺", "FAD", "Pyruvat"], a: 0, e: "O₂ wird zu H₂O reduziert." },
        { q: "Wo findet die Glykolyse statt?", o: ["Im Cytoplasma", "In der Mitochondrienmatrix", "An der inneren Mitochondrienmembran", "Im Peroxisom"], a: 0, e: "Glykolyse im Cytosol, Citratzyklus in der Matrix, Atmungskette an der inneren Membran." },
        { q: "Welches Organell enthält saure Hydrolasen bei pH ~5?", o: ["Lysosom", "Peroxisom", "Endoplasmatisches Retikulum", "Mitochondrium"], a: 0, e: "Lysosomen sind der Verdauungsapparat der Zelle." },
        { q: "Welches Organell bildet und nutzt H₂O₂ zur Oxidation toxischer Stoffe?", o: ["Peroxisom", "Lysosom", "Golgi-Apparat", "Endosom"], a: 0, e: "Peroxisomen oxidieren u. a. Alkohol in Leber und Niere." },
        { q: "Welches Motorprotein bewegt sich auf Mikrotubuli zum Minus-Ende?", o: ["Dynein", "Kinesin", "Myosin", "Aktin"], a: 0, e: "Kinesin → Plus-Ende, Dynein → Minus-Ende; Myosin läuft auf Aktin." },
        { q: "Zu welchen Filamenten gehören Keratine und Lamine?", o: ["Intermediärfilamente", "Mikrotubuli", "Aktinfilamente", "Kollagenfasern"], a: 0, e: "Intermediärfilamente sind stabile Stützgerüste: Keratine, Neurofilamente, Lamine." },
        { q: "Welche Aussage zum Euchromatin trifft zu?", o: ["Es ist offen und transkriptionell aktiv", "Es ist geschlossen und inaktiv", "Es kommt nur in Bakterien vor", "Es ist nur während der Mitose sichtbar"], a: 0, e: "Euchromatin = offen/aktiv, Heterochromatin = geschlossen/inaktiv." },
        { q: "Wie gelangen Proteine ins ER?", o: ["Über eine Signalsequenz, die das Ribosom ans ER bringt", "Durch freie Diffusion durch die ER-Membran", "Über Kernporen", "Durch Phagocytose"], a: 0, e: "ER-Signalsequenzen lenken die Ribosomen ans ER; weitere Signalsequenzen steuern z. B. Kern, Mitochondrien, Peroxisomen." },
        { q: "Wie viele Protonen braucht die ATP-Synthase ungefähr pro ATP?", o: ["Ca. 3", "Ca. 30", "1", "Ca. 100"], a: 0, e: "Ca. 3 H⁺ pro ATP; eine ATP-Synthase produziert ~100 ATP pro Sekunde." }
      ]
    },

    /* ===================================================== W4 */
    {
      id: "w4", no: 4, date: "7.10.",
      title: "Membranen und Membrantransport",
      drug: "Transportase® 3 Na⁺ / 2 K⁺",
      lab: "osmose",
      goals: [
        "Aufbau, Komponenten und Eigenschaften biologischer Membranen verstehen",
        "Passive und aktive Transportarten unterscheiden",
        "Osmose und Tonizität anwenden",
        "Polarisierte Transporter in Epithelien erkennen"
      ],
      sections: [
        { title: "Biologische Membranen", html: `
          <ul>
            <li>Hauptbestandteile: <b>Phospholipide, Proteine, Cholesterin</b> (+ Zuckerreste); zelltypspezifisch zusammengesetzt.</li>
            <li><b>Flüssig-Mosaik-Modell</b>: Komponenten bewegen sich lateral wie in einer 2D-Flüssigkeit (nachweisbar mit FRAP). Fluidität hängt v. a. von Sättigung und Cholesteringehalt ab.</li>
            <li><b>Mikrodomänen</b>: Lipid Rafts (Sphingomyelin + Cholesterin), <b>Caveolae</b> (Einstülpungen; Signalvermittlung, Lipidtransport).</li>
            <li>Transmembranhelices: 20–30 AS mit vorwiegend hydrophoben Seitenketten.</li>
            <li>Die Membran ist <b>selektiv permeabel</b>.</li>
          </ul>
          <dl class="kv">
            <dt>Strukturproteine</dt><dd>Zellgestalt, Zellkontakte</dd>
            <dt>Enzyme</dt><dd>Reaktionen, Signalübertragung</dd>
            <dt>Rezeptoren</dt><dd>Signalempfang</dd>
            <dt>Transportproteine</dt><dd>Kanäle und Carrier</dd>
          </dl>` },
        { title: "Diffusion & Fick'sches Gesetz", html: `
          <ul>
            <li>Passiv, ohne Energie, von hoher zu tiefer Konzentration; Nettobewegung stoppt bei Ausgleich (Moleküle bewegen sich weiter).</li>
            <li>Nur über kurze Strecken effektiv; temperaturabhängig; langsamer bei grossen Molekülen.</li>
            <li>Durch die Lipiddoppelschicht diffundieren nur <b>kleine, unpolare</b> (lipidlösliche) Moleküle (O<sub>2</sub>, CO<sub>2</sub>, Steroide). Ionen, Glucose usw. brauchen Proteine.</li>
          </ul>
          <div class="callout"><span class="ci">📐</span><div><b>Fick'sches Gesetz</b>Diffusionsrate ∝ Oberfläche × Konzentrationsgradient × Permeabilität / Membrandicke. <br>Ideal in der Lunge: ~100 m² Fläche, pO<sub>2</sub> 100 vs. 40 mmHg, &lt; 1 µm Dicke.</div></div>` },
        { title: "Osmose & Tonizität", html: `
          <ul>
            <li><b>Osmose</b> = Diffusion von Wasser entlang seines Konzentrationsgradienten – Wasser wandert zur höher konzentrierten Lösung. Meist über <b>Aquaporine</b> (Tetramer, jede Untereinheit eine Pore; reguliert wird die Anzahl in der Membran).</li>
            <li><b>Osmolarität</b> (OsM) = Anzahl gelöster Teilchen pro Volumen. 1 M NaCl = 2 OsM; 1 M Glucose = 1 OsM.</li>
            <li><b>Tonizität</b> = Wirkung auf das Zellvolumen: <b>hypoton</b> → Zelle schwillt, <b>hyperton</b> → Zelle schrumpft, <b>isoton</b> → unverändert.</li>
            <li>Membrangängige Teilchen (z. B. Harnstoff) zählen zur Osmolarität, aber <b>nicht zur Tonizität</b>.</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Infusionen und Augentropfen müssen isoton sein (ca. 290–300 mOsm/l, z. B. 0,9 % NaCl). Eine 5 %-Glucose-Lösung ist anfangs isoosmotisch, wird aber hypoton, sobald die Zellen die Glucose aufnehmen.</div></div>` },
        { title: "Kanäle & Carrier", html: `
          <div class="table-wrap"><table class="simple">
            <tr><th></th><th>Kanäle</th><th>Carrier</th></tr>
            <tr><td>Aufbau</td><td>Wassergefüllte Pore, Selektivitätsfilter</td><td>Nie durchgehend offen, Konformationsänderung</td></tr>
            <tr><td>Rate</td><td>10<sup>6</sup>–10<sup>8</sup> Moleküle/s</td><td>10<sup>3</sup>–10<sup>6</sup> Moleküle/s</td></tr>
            <tr><td>Beispiele</td><td>K<sup>+</sup>-Leckkanal, Aquaporin, Na<sub>V</sub>, nAChR</td><td>GLUT (Uniport), SGLT, Na<sup>+</sup>/K<sup>+</sup>-ATPase</td></tr>
          </table></div>
          <ul>
            <li><b>Gesteuerte Kanäle</b>: spannungs-, liganden-, mechanogesteuert (auch Temperatur, intrazelluläre Botenstoffe).</li>
            <li>Selektivitätsfilter: Na<sup>+</sup> passiert keinen K<sup>+</sup>-Kanal, weil die polaren AS-Seitenketten die Hydrathülle des kleineren Na<sup>+</sup> nicht optimal ersetzen.</li>
            <li><b>Erleichterte Diffusion</b> = passiver proteinvermittelter Transport (z. B. GLUT).</li>
            <li>Carrier zeigen <b>Spezifität, Kompetition und Sättigung</b> (maximale Transportrate) – freie Diffusion hat kein Maximum.</li>
          </ul>` },
        { title: "Aktiver Transport", html: `
          <ul>
            <li>Gegen den Gradienten, braucht Energie, <b>vergrössert</b> Ungleichgewichte.</li>
            <li><b>Primär aktiv</b>: direkt ATP. Wichtigstes Beispiel: <b>Na<sup>+</sup>/K<sup>+</sup>-ATPase</b> – pro ATP 3 Na<sup>+</sup> hinaus, 2 K<sup>+</sup> hinein (Antiport); ~10 ms pro Zyklus; verbraucht ~30 % der zellulären Energie; trägt ~10 % zum Membranpotenzial bei.</li>
            <li><b>Sekundär aktiv</b>: nutzt einen primär aufgebauten Gradienten (meist Na<sup>+</sup>), z. B. <b>SGLT1</b> (Na<sup>+</sup>-Glucose-Symport). <b>Tertiär aktiv</b>: nutzt einen sekundären Gradienten, z. B. <b>PepT1</b> (H<sup>+</sup>-Dipeptid-Symport).</li>
            <li><b>Symport</b> = gleiche Richtung, <b>Antiport</b> = entgegengesetzt.</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b><b>Digoxin</b> hemmt die Na<sup>+</sup>/K<sup>+</sup>-ATPase und wird bei Herzinsuffizienz eingesetzt. <b>PepT1</b> transportiert auch Arzneistoffe wie β-Lactam-Antibiotika und das Prodrug Valaciclovir – deshalb sind sie oral gut verfügbar.</div></div>` },
        { title: "Vesikulärer, transepithelialer & parazellulärer Transport", html: `
          <ul>
            <li><b>Phagocytose</b>: aktinvermittelt, Phagosom verschmilzt mit Lysosom (z. B. Bakterien durch Phagozyten).</li>
            <li><b>Endocytose</b>: Clathrin- oder Caveolin-vermittelt; <b>rezeptorvermittelte Endocytose</b> über Clathrin-beschichtete «Coated Pits».</li>
            <li><b>Exocytose</b>: Vesikelfusion mit Rab- und SNARE-Proteinen, meist Ca<sup>2+</sup>-ausgelöst, verbraucht ATP (z. B. Neurotransmitter).</li>
            <li><b>Transportepithelien</b> (Niere, Darm): apikale und basolaterale Membran tragen verschiedene Transporter → gerichteter Transport. Meist ein Schritt aktiv, einer passiv.</li>
            <li><b>Transcytose</b>: Endocytose → Vesikeltransport → Exocytose durch die Zelle hindurch.</li>
            <li><b>Parazellulär</b>: zwischen Zellen hindurch, begrenzt durch <b>Tight Junctions</b> (Claudine) → dichte vs. lecke Epithelien.</li>
          </ul>` }
      ],
      cards: [
        { q: "Hauptbestandteile biologischer Membranen?", a: "Phospholipide, Proteine und Cholesterin (plus Zuckerreste an Glykoproteinen/-lipiden)." },
        { q: "Was besagt das Flüssig-Mosaik-Modell?", a: "Lipide und nicht gebundene Proteine bewegen sich lateral in der Membran wie in einer 2D-Flüssigkeit." },
        { q: "Die 4 Funktionsklassen von Membranproteinen?", a: "Strukturproteine, Enzyme, Rezeptoren, Transportproteine." },
        { q: "Fick'sches Diffusionsgesetz?", a: "Rate ∝ Oberfläche × Konzentrationsgradient × Permeabilität / Membrandicke." },
        { q: "Welche Moleküle diffundieren frei durch die Lipiddoppelschicht?", a: "Kleine, unpolare/lipidlösliche Moleküle (z. B. O₂, CO₂, Steroide). Ionen und Glucose nicht." },
        { q: "Osmolarität vs. Tonizität?", a: "Osmolarität: Anzahl gelöster Teilchen pro Volumen. Tonizität: Effekt einer Lösung auf das Zellvolumen (nur nicht-membrangängige Teilchen zählen)." },
        { q: "Was passiert mit einer Zelle in hypotoner Lösung?", a: "Wasser strömt ein, die Zelle schwillt an (im Extremfall Lyse)." },
        { q: "Osmolarität von 1 M NaCl?", a: "2 OsM, da NaCl in Na⁺ und Cl⁻ dissoziiert." },
        { q: "Kanal vs. Carrier?", a: "Kanal: durchgehende Pore, 10⁶–10⁸/s. Carrier: nie durchgehend offen, Konformationsänderung, 10³–10⁶/s, sättigbar." },
        { q: "Drei Merkmale des Carrier-Transports?", a: "Spezifität, Kompetition (Bindungskonkurrenz) und Sättigung." },
        { q: "Arten gesteuerter Kanäle?", a: "Spannungsgesteuert, ligandengesteuert, mechanosensitiv (auch temperatur- oder botenstoffgesteuert)." },
        { q: "Na⁺/K⁺-ATPase: Stöchiometrie?", a: "Pro ATP 3 Na⁺ hinaus und 2 K⁺ hinein (Antiport, primär aktiv)." },
        { q: "Primär vs. sekundär aktiver Transport?", a: "Primär: direkt ATP-Hydrolyse. Sekundär: nutzt die potentielle Energie eines primär aufgebauten Gradienten (meist Na⁺)." },
        { q: "Beispiel für sekundär und tertiär aktiven Transport?", a: "Sekundär: SGLT1 (Na⁺-Glucose-Symport). Tertiär: PepT1 (H⁺-Dipeptid-Symport)." },
        { q: "Symport vs. Antiport?", a: "Symport: beide Substrate in die gleiche Richtung. Antiport: entgegengesetzte Richtungen." },
        { q: "Was ist Transcytose?", a: "Endocytose auf einer Seite, Vesikeltransport durch die Zelle, Exocytose auf der anderen Seite." },
        { q: "Was begrenzt den parazellulären Transport?", a: "Tight Junctions (Schlussleisten), deren Claudine bestimmen, ob ein Epithel dicht oder leck ist." },
        { q: "Welcher Arzneistoff hemmt die Na⁺/K⁺-ATPase?", a: "Digoxin (Herzglykosid) – Einsatz bei Herzinsuffizienz." }
      ],
      quiz: [
        { q: "Welche Veränderung ERHÖHT die Diffusionsrate nach Fick?", o: ["Grössere Membranoberfläche", "Dickere Membran", "Kleinerer Konzentrationsgradient", "Geringere Permeabilität"], a: 0, e: "Rate ∝ Fläche × Gradient × Permeabilität / Dicke." },
        { q: "Wie hoch ist die Osmolarität einer 0,5 M NaCl-Lösung?", o: ["1 OsM", "0,5 OsM", "2 OsM", "0,25 OsM"], a: 0, e: "NaCl dissoziiert in 2 Teilchen: 0,5 M × 2 = 1 OsM." },
        { q: "Eine Zelle wird in eine Lösung gelegt und schrumpft. Die Lösung ist …", o: ["hyperton", "hypoton", "isoton", "isoosmotisch und daher immer isoton"], a: 0, e: "In hypertoner Lösung verliert die Zelle Wasser." },
        { q: "Warum trägt Harnstoff nicht zur Tonizität bei?", o: ["Er ist membrangängig", "Er ist ungeladen und hat daher keine Osmolarität", "Er wird aktiv aus der Zelle gepumpt", "Er bindet Wasser irreversibel"], a: 0, e: "Membranpenetrierende Teilchen zählen zur Osmolarität, aber nicht zur Tonizität." },
        { q: "Welche Eigenschaft gilt für Carrier, aber NICHT für einfache Diffusion?", o: ["Sättigung", "Abhängigkeit vom Konzentrationsgradienten", "Passiver Transport möglich", "Temperaturabhängigkeit"], a: 0, e: "Carrier sind sättigbar (maximale Transportrate), freie Diffusion nicht." },
        { q: "Die Na⁺/K⁺-ATPase transportiert pro ATP …", o: ["3 Na⁺ hinaus, 2 K⁺ hinein", "2 Na⁺ hinaus, 3 K⁺ hinein", "3 Na⁺ hinein, 2 K⁺ hinaus", "1 Na⁺ hinaus, 1 K⁺ hinein"], a: 0, e: "3 Na⁺ raus, 2 K⁺ rein – dadurch wird das Zellinnere leicht negativer (elektrogen)." },
        { q: "SGLT1 ist ein Beispiel für …", o: ["sekundär aktiven Symport", "primär aktiven Antiport", "erleichterte Diffusion", "tertiär aktiven Antiport"], a: 0, e: "SGLT1 nutzt den Na⁺-Gradienten, um Glucose mitzunehmen (gleiche Richtung)." },
        { q: "Welcher Transporter ist ein Beispiel für erleichterte Diffusion?", o: ["GLUT", "Na⁺/K⁺-ATPase", "SGLT1", "PepT1"], a: 0, e: "GLUT ist ein passiver Uniporter entlang des Glucosegradienten." },
        { q: "Warum passiert Na⁺ keinen K⁺-Kanal?", o: ["Die Seitenketten im Selektivitätsfilter ersetzen seine Hydrathülle nicht optimal", "Na⁺ ist grösser als K⁺", "Na⁺ ist negativ geladen", "K⁺-Kanäle sind immer geschlossen"], a: 0, e: "Na⁺ ist kleiner; die Abgabe der Hydrathülle ist energetisch ungünstig, daher kein Durchtritt." },
        { q: "Welche Proteine vermitteln die Vesikelfusion bei der Exocytose?", o: ["Rab- und SNARE-Proteine", "Clathrin und Caveolin", "Claudine", "Aquaporine"], a: 0, e: "Rab und SNARE vermitteln die Fusion; Clathrin/Caveolin sind an der Endocytose beteiligt." },
        { q: "Die Kanalrate liegt typischerweise bei …", o: ["10⁶–10⁸ Moleküle/s", "10³–10⁶ Moleküle/s", "10–100 Moleküle/s", "10¹²–10¹⁴ Moleküle/s"], a: 0, e: "Kanäle sind viel schneller als Carrier (10³–10⁶/s)." },
        { q: "Kammer A: 1 M NaCl, Kammer B: 1 M Glucose; die Membran ist nur für Wasser (und Harnstoff) permeabel. Wohin fliesst Wasser?", o: ["Nach A", "Nach B", "Kein Nettofluss", "Erst nach B, dann zurück nach A"], a: 0, e: "A hat 2 OsM, B nur 1 OsM → Wasser wandert zur höher konzentrierten Seite A." },
        { q: "Welche Aussage zu Tight Junctions ist korrekt?", o: ["Sie begrenzen den parazellulären Transport", "Sie sind Kanäle für den Cytoplasma-Austausch", "Sie transportieren Glucose aktiv", "Sie kommen nur in Neuronen vor"], a: 0, e: "Tight Junctions (Claudine) bestimmen die Dichtigkeit eines Epithels. Cytoplasma-Austausch läuft über Gap Junctions." }
      ]
    },

    /* ===================================================== W5 */
    {
      id: "w5", no: 5, date: "14.10.",
      title: "Rezeptoren und Signaltransduktion",
      drug: "Signalin® cAMP",
      lab: "videos",
      goals: [
        "Kommunikationswege von Zellen kennen",
        "Wo und wie Rezeptoraktivierung zelluläre Prozesse startet",
        "GPCRs und Rezeptorenzyme mit ihren Signalwegen erklären",
        "Folgen und Modulation der Signaltransduktion beschreiben"
      ],
      sections: [
        { title: "Zell-Zell-Kommunikation", html: `
          <ul>
            <li>Signale sind <b>chemisch</b> (häufigste) oder <b>elektrisch</b>.</li>
            <li>4 Methoden: (1) <b>Gap Junctions</b> – direkte cytoplasmatische Brücken; (2) <b>kontaktabhängig</b> (juxtakrin); (3) <b>lokal</b>: parakrin (Nachbarzellen, z. B. Histamin nach Kratzer), autokrin (gleiche Zelle); (4) <b>weitreichend</b>: endokrin (Hormone über das Blut), neurokrin, Nervensystem.</li>
            <li>Zielzellen eines Hormons = alle Zellen mit passendem Rezeptor.</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Etwa <b>50 % aller Medikamente</b> binden an Membranrezeptoren – sie sind gut über die Blutbahn erreichbar und beeinflussen Signalkaskaden.</div></div>` },
        { title: "Rezeptorlokalisation & Signalweg", html: `
          <div class="table-wrap"><table class="simple">
            <tr><th></th><th>Membranrezeptor</th><th>Intrazellulärer Rezeptor</th></tr>
            <tr><td>Ligand</td><td>Hydrophil/lipophob, oft gross (Peptide, Adrenalin, ACh)</td><td>Lipophil, klein (Steroide wie Cortisol, Testosteron)</td></tr>
            <tr><td>Ort</td><td>Zelloberfläche</td><td>Cytoplasma oder Kern</td></tr>
            <tr><td>Antwort</td><td>Meist schnell</td><td>Genexpression → langsam</td></tr>
          </table></div>
          <ul>
            <li>Grundschema: <b>Primärer Botenstoff</b> (Ligand) → Rezeptor → Transduktion → <b>Second Messenger</b> / Kinasen → zelluläre Antwort.</li>
            <li><b>Kaskaden verstärken</b> das Signal vielfach (Amplifikation).</li>
            <li>Abschwächung schon am Rezeptor möglich → <b>Desensibilisierung</b> (oft via Phosphorylierung, Ubiquitinierung).</li>
          </ul>` },
        { title: "Rezeptorklassen", html: `
          <dl class="kv">
            <dt>Ligandengesteuerte Kanäle</dt><dd>Schnell, wandeln chemisches in elektrisches Signal um (z. B. nikotinischer ACh-Rezeptor).</dd>
            <dt>Rezeptorenzyme</dt><dd>Meist 1 Transmembrandomäne; grösste Gruppe: <b>Rezeptortyrosinkinasen (RTK)</b>; auch Guanylatcyclasen (→ cGMP).</dd>
            <dt>GPCRs</dt><dd>7 Transmembrandomänen, ca. 800 beim Menschen, koppeln an heterotrimere G-Proteine.</dd>
            <dt>Integrine</dt><dd>Verknüpfen extrazelluläre Matrix mit dem Cytoskelett (Adhäsion, Gerinnung, Wundheilung).</dd>
          </dl>
          <ul>
            <li><b>RTKs</b> dimerisieren, phosphorylieren sich gegenseitig und rekrutieren Proteine (Liganden: Wachstumsfaktoren, Insulin).</li>
            <li>Beispiel <b>Insulinrezeptor</b>: Autophosphorylierung → IRS → PI3K → PIP<sub>3</sub> → PDK → AKT → mehr <b>GLUT4</b>-Vesikel in der Membran → mehr Glucoseaufnahme.</li>
          </ul>` },
        { title: "G-Proteine", html: `
          <ul>
            <li><b>Heterotrimer</b>: α, β, γ. Aktiv: α bindet <b>GTP</b>; inaktiv: GDP. Gα hydrolysiert GTP langsam selbst → schaltet sich ab.</li>
          </ul>
          <div class="table-wrap"><table class="simple">
            <tr><th>Gα</th><th>Effektor</th><th>Folge</th></tr>
            <tr><td>G<sub>s</sub></td><td>Adenylatcyclase ↑</td><td>cAMP ↑ → PKA</td></tr>
            <tr><td>G<sub>i</sub></td><td>Adenylatcyclase ↓</td><td>cAMP ↓</td></tr>
            <tr><td>G<sub>q</sub></td><td>Phospholipase C ↑</td><td>PIP<sub>2</sub> → IP<sub>3</sub> + DAG</td></tr>
            <tr><td>βγ (v. a. von G<sub>i/o</sub>)</td><td>Ionenkanäle</td><td>z. B. K<sup>+</sup>-Kanäle im Herz (M2) → Frequenz ↓</td></tr>
          </table></div>
          <ul>
            <li><b>IP<sub>3</sub></b> setzt Ca<sup>2+</sup> aus intrazellulären Speichern (ER) frei; Ca<sup>2+</sup> bindet z. B. Calmodulin (glatte Muskulatur).</li>
            <li><b>DAG</b> aktiviert die Proteinkinase C (PKC).</li>
            <li>G<sub>s</sub>-AC-cAMP ist der vorherrschende Weg für Protein- und Peptidhormone. Beispiel: Adrenalin → β<sub>2</sub>-Rezeptor → G<sub>s</sub> → cAMP → PKA → Glykogenabbau im Muskel.</li>
          </ul>` },
        { title: "Ein Signal – viele Antworten", html: `
          <ul>
            <li>Dasselbe Molekül kann je nach Rezeptor Verschiedenes auslösen. <b>Acetylcholin</b>: nikotinisch (Ionenkanal, Skelettmuskel → Kontraktion) vs. muskarinisch (GPCR; M2 Sinusknoten → Frequenz ↓; M3 Speicheldrüse → Sekretion).</li>
            <li>Rezeptorexpression ist zelltypspezifisch. Die Zelle <b>integriert</b> stets viele Signale gleichzeitig (Signalnetzwerk).</li>
            <li><b>Agonisten</b> aktivieren, <b>Antagonisten</b> blockieren Rezeptoren – viele Arzneimittel wirken so, mit abgestufter Affinität.</li>
            <li>Ausblick: Reprogrammierung zu Stammzellen (Yamanaka-Faktoren, rein chemisch induzierte iPSCs, z. B. insulinproduzierende Zellen bei Typ-1-Diabetes).</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Salbutamol ist ein β<sub>2</sub>-Agonist (Bronchodilatation bei Asthma), Betablocker sind β-Antagonisten, Atropin ist ein Antagonist an muskarinischen ACh-Rezeptoren.</div></div>` }
      ],
      cards: [
        { q: "Die 4 Methoden der Zell-Zell-Kommunikation?", a: "Gap Junctions, kontaktabhängig, lokal (parakrin/autokrin), weitreichend (endokrin, neurokrin, elektrisch)." },
        { q: "Parakrin vs. autokrin?", a: "Parakrin: wirkt auf Nachbarzellen (Diffusion). Autokrin: wirkt auf die sezernierende Zelle selbst." },
        { q: "Wo binden lipophile vs. lipophobe Signalmoleküle?", a: "Lipophile (z. B. Steroide) diffundieren in die Zelle → cytoplasmatische/nukleäre Rezeptoren. Lipophobe binden Membranrezeptoren." },
        { q: "Was ist ein Second Messenger? Beispiele?", a: "Intrazelluläres Signalmolekül, das die Information des primären Botenstoffs weiterleitet und verstärkt: cAMP, IP₃, DAG, Ca²⁺." },
        { q: "Aufbau eines GPCR?", a: "7 Transmembrandomänen; koppelt an ein heterotrimeres G-Protein. Ca. 800 GPCRs beim Menschen." },
        { q: "Aktiver vs. inaktiver Zustand des G-Proteins?", a: "Aktiv: Gα bindet GTP (und trennt sich von βγ). Inaktiv: Gα bindet GDP; GTP-Hydrolyse schaltet ab." },
        { q: "Gs, Gi, Gq?", a: "Gs stimuliert, Gi hemmt die Adenylatcyclase. Gq aktiviert die Phospholipase C → IP₃ + DAG." },
        { q: "Wirkung von IP₃ und DAG?", a: "IP₃: Ca²⁺-Freisetzung aus intrazellulären Speichern. DAG: aktiviert Proteinkinase C." },
        { q: "Welches Enzym bildet cAMP und welche Kinase aktiviert cAMP?", a: "Adenylatcyclase bildet cAMP; cAMP aktiviert die Proteinkinase A (PKA)." },
        { q: "Wie werden RTKs aktiviert?", a: "Ligandenbindung → Dimerisierung → gegenseitige (Auto-)Phosphorylierung → Rekrutierung von Signalproteinen." },
        { q: "Insulin-Signalweg in Kurzform?", a: "Insulinrezeptor (RTK) → IRS → PI3K → PIP₃ → PDK → AKT → GLUT4-Einbau → Glucoseaufnahme ↑." },
        { q: "Wie verlangsamt Acetylcholin den Herzschlag?", a: "Über den M2-Rezeptor (Gi/o); freie βγ-Untereinheiten öffnen K⁺-Kanäle." },
        { q: "Nikotinischer vs. muskarinischer ACh-Rezeptor?", a: "Nikotinisch: ligandengesteuerter Ionenkanal. Muskarinisch: GPCR (M1–M5)." },
        { q: "Agonist vs. Antagonist?", a: "Agonist bindet und aktiviert den Rezeptor; Antagonist bindet und blockiert ihn." },
        { q: "Welche Funktion haben Integrine?", a: "Sie verknüpfen die extrazelluläre Matrix mit dem Cytoskelett (Adhäsion, Bewegung, Gerinnung, Wundheilung)." },
        { q: "Wie viel Prozent der Medikamente binden an Membranrezeptoren?", a: "Etwa 50 %." }
      ],
      quiz: [
        { q: "Welches G-Protein aktiviert die Phospholipase C?", o: ["Gq", "Gs", "Gi", "Gt"], a: 0, e: "Gq → PLC → IP₃ + DAG." },
        { q: "Was bewirkt IP₃?", o: ["Ca²⁺-Freisetzung aus intrazellulären Speichern", "Aktivierung der Adenylatcyclase", "Direkte Aktivierung der PKA", "Schliessen von K⁺-Kanälen"], a: 0, e: "IP₃ öffnet Ca²⁺-Kanäle am ER; DAG aktiviert PKC." },
        { q: "Wie wird ein aktives G-Protein wieder inaktiviert?", o: ["Gα hydrolysiert GTP zu GDP", "Gα bindet ein weiteres GTP", "βγ wird abgebaut", "cAMP bindet an Gα"], a: 0, e: "Die intrinsische GTPase-Aktivität von Gα schaltet das Signal ab." },
        { q: "Wie viele Transmembrandomänen hat ein GPCR?", o: ["7", "1", "4", "12"], a: 0, e: "GPCRs sind 7-Transmembran-Rezeptoren." },
        { q: "Welches Hormon bindet typischerweise einen intrazellulären Rezeptor?", o: ["Cortisol", "Adrenalin", "Insulin", "Glucagon"], a: 0, e: "Steroidhormone sind lipophil und binden cytoplasmatische/nukleäre Rezeptoren." },
        { q: "Welcher Rezeptortyp ist der Insulinrezeptor?", o: ["Rezeptortyrosinkinase", "GPCR", "Ligandengesteuerter Ionenkanal", "Nukleärer Rezeptor"], a: 0, e: "Der Insulinrezeptor ist eine RTK; sein Signalweg führt zu GLUT4-Einbau." },
        { q: "Adrenalin am β₂-Rezeptor im Muskel führt zu …", o: ["Gs → cAMP ↑ → PKA → Glykogenabbau", "Gq → IP₃ → Kontraktion", "Gi → cAMP ↓ → Glykogensynthese", "RTK → AKT → GLUT4"], a: 0, e: "β₂ ist Gs-gekoppelt; cAMP aktiviert PKA, die den Glykogenabbau anstösst." },
        { q: "Was ist ein Beispiel für parakrine Signalgebung?", o: ["Histaminfreisetzung nach einem Kratzer", "Insulin aus dem Pankreas wirkt auf Muskelzellen", "Ionenfluss durch Gap Junctions im Herz", "Testosteron wirkt im ganzen Körper"], a: 0, e: "Parakrin = lokal auf Nachbarzellen; Insulin/Testosteron sind endokrin." },
        { q: "Was beschreibt die Desensibilisierung?", o: ["Abschwächung der Antwort trotz anhaltendem Signal, z. B. durch Rezeptorphosphorylierung", "Verstärkung eines Signals durch Kaskaden", "Bindung eines Agonisten", "Öffnung von Gap Junctions"], a: 0, e: "Zellen können Signale auf Rezeptorebene abschwächen (PTM wie Phosphorylierung, Ubiquitinierung)." },
        { q: "Acetylcholin bewirkt am Sinusknoten (M2) …", o: ["eine Senkung der Herzfrequenz", "Sekretion", "Skelettmuskelkontraktion", "Glykogenabbau"], a: 0, e: "M2 (Gi/o): βγ öffnet K⁺-Kanäle → Frequenz ↓. M3 → Sekretion; nikotinisch → Kontraktion." },
        { q: "Ein Arzneistoff bindet an einen Rezeptor und blockiert die Wirkung des körpereigenen Liganden. Er ist ein …", o: ["Antagonist", "Agonist", "Second Messenger", "Amplifizierungsenzym"], a: 0, e: "Antagonisten blockieren, Agonisten aktivieren." },
        { q: "Welche Aussage zu Signalkaskaden ist korrekt?", o: ["Sie verstärken das ursprüngliche Signal vielfach", "Sie schwächen jedes Signal ab", "Sie kommen nur bei Steroidhormonen vor", "Sie funktionieren ohne Enzyme"], a: 0, e: "Amplifikation: ein Ligand kann viele Second-Messenger-Moleküle erzeugen." }
      ]
    },

    /* ===================================================== W6 */
    {
      id: "w6", no: 6, date: "21.10.",
      title: "Membranpotenzial",
      drug: "Nernstoral® −70 mV",
      lab: "nernst",
      goals: [
        "Entstehung und Aufrechterhaltung des Membranpotenzials verstehen",
        "Funktion der wichtigsten Komponenten (Leckkanäle, Na⁺/K⁺-ATPase) beschreiben",
        "Gleichgewichtspotenziale mit der Nernst-Gleichung berechnen",
        "Nutzen des Membranpotenzials erkennen (z. B. Insulinsekretion)"
      ],
      sections: [
        { title: "Ionenverteilung", html: `
          <ul>
            <li>Der Körper ist insgesamt elektrisch neutral, aber Ionen sind <b>ungleich verteilt</b>.</li>
            <li><b>Aussen</b>: Na<sup>+</sup>, Cl<sup>−</sup>, Ca<sup>2+</sup>, HCO<sub>3</sub><sup>−</sup> · <b>Innen</b>: K<sup>+</sup> und negativ geladene Proteine (A<sup>−</sup>).</li>
            <li>Innen herrscht ein winziger Überschuss an Anionen → <b>Membranpotenzial</b> (gemessen innen relativ zu aussen).</li>
          </ul>
          <div class="table-wrap"><table class="simple">
            <tr><th>Ion</th><th>aussen (mM)</th><th>innen (mM)</th><th>E<sub>Ion</sub> (37 °C)</th></tr>
            <tr><td>K<sup>+</sup></td><td>5</td><td>150</td><td>≈ −90 mV</td></tr>
            <tr><td>Na<sup>+</sup></td><td>145</td><td>15</td><td>≈ +60 mV</td></tr>
          </table></div>` },
        { title: "Entstehung des Ruhemembranpotenzials", html: `
          <ul>
            <li>Ruhende Zellen sind dank <b>K<sup>+</sup>-Leckkanälen</b> ca. 40× besser für K<sup>+</sup> durchlässig als für Na<sup>+</sup>.</li>
            <li>K<sup>+</sup> strömt entlang des <b>chemischen Gradienten</b> hinaus; die Protein-Anionen A<sup>−</sup> können nicht folgen → innen negativ, aussen positiv.</li>
            <li>Die wachsende negative Ladung zieht K<sup>+</sup> <b>elektrisch</b> zurück. Gleichgewicht, wenn chemische und elektrische Kraft gleich gross und entgegengesetzt sind → <b>Gleichgewichtspotenzial</b>.</li>
            <li>Typisch: −40 bis −90 mV, Neuronen ≈ <b>−70 mV</b> (etwas positiver als E<sub>K</sub>, da die Membran auch etwas Na<sup>+</sup>-durchlässig ist).</li>
            <li>Es fliessen nur <b>sehr wenige Ionen</b>: Verschiebt sich etwa jedes 100 000. K<sup>+</sup>, ändert sich das Potenzial um ~100 mV – die Gesamtkonzentrationen bleiben praktisch konstant.</li>
            <li>Die <b>Na<sup>+</sup>/K<sup>+</sup>-ATPase</b> hält die Gradienten gegen Leckströme langfristig aufrecht (direkt trägt sie nur ~10 % bei).</li>
          </ul>` },
        { title: "Nernst & Goldman-Hodgkin-Katz", html: `
          <div class="callout"><span class="ci">🧮</span><div><b>Nernst-Gleichung (37 °C)</b>E<sub>Ion</sub> = (RT / zF) · ln([Ion]<sub>a</sub> / [Ion]<sub>i</sub>) ≈ <b>(61 mV / z) · log([Ion]<sub>a</sub> / [Ion]<sub>i</sub>)</b><br>Gilt für <i>ein</i> permeables Ion.</div></div>
          <ul>
            <li><b>GHK-Gleichung</b>: berücksichtigt mehrere Ionen gewichtet nach ihrer Permeabilität P:<br>E<sub>m</sub> = 61 · log[(P<sub>K</sub>[K]<sub>a</sub> + P<sub>Na</sub>[Na]<sub>a</sub> + P<sub>Cl</sub>[Cl]<sub>i</sub>) / (P<sub>K</sub>[K]<sub>i</sub> + P<sub>Na</sub>[Na]<sub>i</sub> + P<sub>Cl</sub>[Cl]<sub>a</sub>)]</li>
            <li>Das Ruhepotenzial hängt stark von <b>[K<sup>+</sup>]<sub>aussen</sub></b> ab (kleinerer Gradient → weniger negativ); [Na<sup>+</sup>]<sub>aussen</sub> hat kaum Einfluss.</li>
          </ul>
          <div class="callout warn"><span class="ci">⚠️</span><div><b>Klinik</b>Hyperkaliämie (erhöhtes K<sup>+</sup> im Blut) depolarisiert Zellen – gefährlich für Herz und Nerven. Ändert sich der K<sup>+</sup>-Spiegel im Blut, ändert sich die Erregbarkeit.</div></div>` },
        { title: "De- und Hyperpolarisation", html: `
          <dl class="kv">
            <dt>Depolarisation</dt><dd>Potenzial wird <b>positiver</b> (weniger negativ), z. B. durch Öffnen von Na<sup>+</sup>- oder Ca<sup>2+</sup>-Kanälen oder geringere K<sup>+</sup>-Permeabilität.</dd>
            <dt>Hyperpolarisation</dt><dd>Potenzial wird <b>negativer</b>, z. B. durch erhöhte K<sup>+</sup>-Permeabilität oder Cl<sup>−</sup>-Einstrom.</dd>
          </dl>
          <ul>
            <li>Ionenkanäle öffnen/schliessen sehr schnell; die Stromamplitude hängt von Offenwahrscheinlichkeit, Konzentrationen und elektrischer Triebkraft ab.</li>
            <li>Elektrisch erregbar: v. a. Neuronen und Muskelzellen, aber auch Sinneszellen, chromaffine Zellen der Nebenniere, β-Zellen des Pankreas.</li>
          </ul>` },
        { title: "Beispiel: β-Zelle & Insulinsekretion", html: `
          <ol>
            <li>Ruhe: K<sub>ATP</sub>-Kanäle offen → Ruhepotenzial, wenig Ca<sup>2+</sup> in der Zelle.</li>
            <li>Glucose ↑ → Metabolismus → <b>ATP ↑</b>.</li>
            <li>ATP schliesst die <b>K<sub>ATP</sub>-Kanäle</b> (Kir6.2 + SUR1) → <b>Depolarisation</b>.</li>
            <li>Spannungsgesteuerte <b>Ca<sup>2+</sup>-Kanäle</b> öffnen → Ca<sup>2+</sup>-Einstrom.</li>
            <li>Ca<sup>2+</sup> löst die <b>Exocytose von Insulin</b> aus.</li>
          </ol>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Sulfonylharnstoffe (z. B. Glibenclamid) binden an SUR1, schliessen die K<sub>ATP</sub>-Kanäle und fördern so die Insulinsekretion bei Typ-2-Diabetes.</div></div>` }
      ],
      cards: [
        { q: "Welche Ionen dominieren intra- vs. extrazellulär?", a: "Innen: K⁺ und Protein-Anionen (A⁻). Aussen: Na⁺, Cl⁻, Ca²⁺, HCO₃⁻." },
        { q: "Was ist das Membranpotenzial?", a: "Die elektrische Potenzialdifferenz über der Plasmamembran (innen relativ zu aussen) – tritt bei allen lebenden Zellen auf." },
        { q: "Typisches Ruhemembranpotenzial eines Neurons?", a: "Ca. −70 mV (Zellen allgemein −40 bis −90 mV)." },
        { q: "Warum bestimmt K⁺ das Ruhepotenzial?", a: "Die Membran ist dank offener K⁺-Leckkanäle in Ruhe ~40× besser für K⁺ permeabel als für Na⁺." },
        { q: "Was ist ein Gleichgewichtspotenzial?", a: "Das Potenzial, bei dem elektrische und chemische Triebkraft auf ein Ion gleich gross und entgegengesetzt sind – kein Nettofluss." },
        { q: "Nernst-Gleichung bei 37 °C?", a: "E = (61 mV / z) · log([Ion]aussen / [Ion]innen)." },
        { q: "E_K und E_Na mit Standardwerten?", a: "E_K ≈ −90 mV (5 / 150 mM). E_Na ≈ +60 mV (145 / 15 mM)." },
        { q: "Warum liegt das Ruhepotenzial etwas positiver als E_K?", a: "Die Membran ist auch ein wenig für Na⁺ permeabel, das einströmt." },
        { q: "Ändern sich die Ionenkonzentrationen beim Potenzialaufbau merklich?", a: "Nein – es fliessen sehr wenige Ionen (~jedes 100 000. K⁺ für ~100 mV)." },
        { q: "Rolle der Na⁺/K⁺-ATPase beim Membranpotenzial?", a: "Hält die Konzentrationsgradienten langfristig gegen Leckströme aufrecht; direkt elektrogen nur ~10 %." },
        { q: "Depolarisation vs. Hyperpolarisation?", a: "Depolarisation: Potenzial wird positiver. Hyperpolarisation: Potenzial wird negativer." },
        { q: "Wofür steht GHK und was berücksichtigt sie?", a: "Goldman-Hodgkin-Katz-Gleichung: Membranpotenzial aus mehreren Ionen, gewichtet nach Permeabilität." },
        { q: "Was passiert bei erhöhtem extrazellulärem K⁺?", a: "Der K⁺-Gradient wird kleiner → Ruhepotenzial weniger negativ (Depolarisation)." },
        { q: "Insulinsekretion der β-Zelle in Kurzform?", a: "Glucose ↑ → ATP ↑ → K_ATP schliesst → Depolarisation → Ca²⁺-Kanäle öffnen → Ca²⁺-Einstrom → Insulin-Exocytose." },
        { q: "Woran binden Sulfonylharnstoffe?", a: "An SUR1 des K_ATP-Kanals → Kanal schliesst → Insulinsekretion ↑." }
      ],
      quiz: [
        { q: "Berechne E_K bei [K]a = 5 mM und [K]i = 150 mM (37 °C).", o: ["≈ −90 mV", "≈ +90 mV", "≈ −60 mV", "≈ −30 mV"], a: 0, e: "61 · log(5/150) = 61 · (−1,48) ≈ −90 mV." },
        { q: "Berechne E_Na bei [Na]a = 145 mM und [Na]i = 15 mM.", o: ["≈ +60 mV", "≈ −60 mV", "≈ +120 mV", "≈ 0 mV"], a: 0, e: "61 · log(145/15) ≈ 61 · 0,985 ≈ +60 mV." },
        { q: "Welche Kanäle sind hauptsächlich für das Ruhemembranpotenzial verantwortlich?", o: ["K⁺-Leckkanäle", "Spannungsgesteuerte Na⁺-Kanäle", "Ca²⁺-Kanäle", "Aquaporine"], a: 0, e: "Dauerhaft offene K⁺-Leckkanäle machen die Membran v. a. für K⁺ permeabel." },
        { q: "Warum können Protein-Anionen dem K⁺ nicht folgen?", o: ["Die Membran ist für sie impermeabel", "Sie sind positiv geladen", "Sie werden aktiv hineingepumpt", "Sie sind an DNA gebunden"], a: 0, e: "Die grossen A⁻ bleiben innen zurück – so entsteht die Ladungstrennung." },
        { q: "Die extrazelluläre K⁺-Konzentration steigt. Was passiert mit dem Ruhepotenzial?", o: ["Es wird positiver (Depolarisation)", "Es wird negativer (Hyperpolarisation)", "Es bleibt exakt gleich", "Es kehrt sich auf +60 mV um"], a: 0, e: "Kleinerer K⁺-Gradient → E_K weniger negativ → Depolarisation." },
        { q: "Eine Erhöhung der K⁺-Permeabilität führt zu …", o: ["Hyperpolarisation", "Depolarisation", "einem Aktionspotenzial", "keinem Effekt"], a: 0, e: "Mehr K⁺-Ausstrom → Potenzial nähert sich E_K (−90 mV) → negativer." },
        { q: "Was passiert, wenn die Membran plötzlich gut Na⁺-permeabel wird?", o: ["Depolarisation Richtung E_Na", "Hyperpolarisation Richtung E_K", "Kein Effekt, da Na⁺ ungeladen ist", "Na⁺ strömt aus der Zelle"], a: 0, e: "Na⁺ strömt ein, das Potenzial bewegt sich Richtung +60 mV." },
        { q: "Welche Aussage zur Ionenmenge beim Aufbau des Membranpotenzials ist korrekt?", o: ["Es fliessen so wenige Ionen, dass sich die Konzentrationen kaum ändern", "Die Hälfte des K⁺ verlässt die Zelle", "Die Na⁺-Konzentration innen verdoppelt sich", "Alle Protein-Anionen verlassen die Zelle"], a: 0, e: "Etwa jedes 100 000. K⁺ reicht für ~100 mV." },
        { q: "In welcher Reihenfolge laufen die Schritte der Insulinsekretion ab?", o: ["ATP ↑ → K_ATP zu → Depolarisation → Ca²⁺-Einstrom → Exocytose", "ATP ↓ → K_ATP auf → Hyperpolarisation → Exocytose", "Ca²⁺-Einstrom → ATP ↑ → K_ATP auf → Exocytose", "Depolarisation → ATP ↑ → K_ATP zu → Hyperpolarisation"], a: 0, e: "Glucose-Metabolismus erhöht ATP, schliesst K_ATP, depolarisiert, öffnet Ca²⁺-Kanäle → Insulin." },
        { q: "Welcher Arzneistoff schliesst K_ATP-Kanäle der β-Zelle?", o: ["Glibenclamid (Sulfonylharnstoff)", "Digoxin", "Atropin", "Salbutamol"], a: 0, e: "Sulfonylharnstoffe binden SUR1 und steigern die Insulinsekretion." },
        { q: "Eine Änderung der extrazellulären Na⁺-Konzentration …", o: ["hat kaum Einfluss auf das Ruhepotenzial", "bestimmt das Ruhepotenzial hauptsächlich", "hyperpolarisiert die Zelle stark", "schliesst alle K⁺-Kanäle"], a: 0, e: "In Ruhe ist die Na⁺-Permeabilität gering, daher kaum Einfluss." }
      ]
    },

    /* ===================================================== W7 */
    {
      id: "w7", no: 7, date: "28.10.",
      title: "Neuronen und Aktionspotenzial",
      drug: "Aktionspotenzin® Alles-oder-Nichts",
      lab: "ap",
      goals: [
        "Generellen Aufbau von Neuronen und Gliazellen kennen",
        "Molekulare Grundlagen des Aktionspotenzials und seiner Auslösung erklären",
        "Generator- und Aktionspotenziale unterscheiden",
        "Erregungsleitung und Frequenzkodierung verstehen"
      ],
      sections: [
        { title: "Neuronen & Gliazellen", html: `
          <ul>
            <li><b>Dendriten</b>: empfangen Signale · <b>Zellkörper</b>: Kern, Organellen, Verarbeitung · <b>Axon</b>: schnelle Weiterleitung (bis &gt; 1 m) · <b>Synapse</b>: verbindet Axonterminale mit Zielzelle.</li>
            <li>Funktionell: sensorisch (afferent), Interneuron, efferent. Strukturell nach Anzahl Fortsätze.</li>
            <li>Reflexwege: angeboren, schnell, teils schon im Rückenmark integriert.</li>
          </ul>
          <div class="table-wrap"><table class="simple">
            <tr><th>Gliazelle</th><th>Funktion</th></tr>
            <tr><td>Astrozyten</td><td>Stoffwechsel, K<sup>+</sup>- und Transmitter-Aufnahme, Grenzstrukturen</td></tr>
            <tr><td>Oligodendrozyten (ZNS)</td><td>Myelin</td></tr>
            <tr><td>Schwann-Zellen (PNS)</td><td>Myelin</td></tr>
            <tr><td>Mikroglia</td><td>Fresszellen, Immunabwehr</td></tr>
            <tr><td>Ependymzellen</td><td>Auskleidung der Ventrikel</td></tr>
          </table></div>
          <p class="muted">Verhältnis Glia : Neuronen eher 1 : 1.</p>` },
        { title: "Generatorpotenziale (graduiert)", html: `
          <ul>
            <li>Gesteuerte Kanäle öffnen/schliessen auf chemische, mechanische oder elektrische Reize.</li>
            <li>Grösse ∝ <b>Reizstärke</b>; können de- oder hyperpolarisierend sein.</li>
            <li>Werden mit der Entfernung <b>schwächer</b> (lokale Ionenströme, keine spannungsgesteuerten Na<sup>+</sup>-Kanäle in Dendriten/Soma).</li>
            <li><b>Summation</b>: zeitlich und räumlich; erregende und hemmende Eingänge werden verrechnet.</li>
            <li>Überschreitet das Potenzial an der <b>Triggerzone (Axonhügel)</b> die <b>Schwelle</b>, wird ein Aktionspotenzial ausgelöst.</li>
          </ul>` },
        { title: "Das Aktionspotenzial", html: `
          <ol>
            <li><b>Ruhe</b> (~ −70 mV): spannungsgesteuerte Kanäle geschlossen.</li>
            <li><b>Depolarisation</b>: Schwelle (~ −55 mV) erreicht → Na<sub>V</sub>-Kanäle öffnen → <b>Na<sup>+</sup>-Einstrom</b> (positive Rückkopplung).</li>
            <li><b>Overshoot</b> (~ +30 mV): Na<sub>V</sub> inaktivieren, K<sub>V</sub> beginnen zu öffnen.</li>
            <li><b>Repolarisation</b>: <b>K<sup>+</sup>-Ausstrom</b> (negative Rückkopplung).</li>
            <li><b>Nachhyperpolarisation (Undershoot)</b>: K<sub>V</sub> schliessen langsam, Potenzial kurz unter Ruhe.</li>
          </ol>
          <ul>
            <li><b>Alles-oder-Nichts</b>: immer gleich gross, wird entlang des Axons ohne Amplitudenverlust neu gebildet.</li>
            <li>Na<sub>V</sub>-Kanal: schnelles <b>Aktivierungstor</b>, langsameres <b>Inaktivierungstor</b> → verhindert Rückwärtslaufen.</li>
            <li><b>Absolute Refraktärphase</b>: kein neues AP möglich → keine Summation. <b>Relative Refraktärphase</b>: nur stärkere Reize lösen ein AP aus.</li>
            <li><b>Reizstärke</b> wird über die <b>Frequenz</b> kodiert, nicht über die Amplitude.</li>
            <li>Pro AP fliessen nur wenige Ionen; die Na<sup>+</sup>/K<sup>+</sup>-ATPase stellt die Gradienten wieder her.</li>
            <li>Historisch: Hodgkin & Huxley (1952, Tintenfisch-Riesenaxon; Nobelpreis 1963).</li>
          </ul>
          <div class="callout pharma"><span class="ci">💊</span><div><b>Pharma-Bezug</b>Lokalanästhetika wie Lidocain blockieren spannungsgesteuerte Na<sup>+</sup>-Kanäle – ohne Na<sup>+</sup>-Einstrom kein Aktionspotenzial, kein Schmerzsignal. Das Gift Tetrodotoxin (Kugelfisch) wirkt am selben Kanal.</div></div>` },
        { title: "Erregungsleitung", html: `
          <ul>
            <li>Leitungsgeschwindigkeit steigt mit <b>Axondurchmesser</b> und <b>Membranwiderstand</b>.</li>
            <li><b>Myelin</b> isoliert, erhöht den Membranwiderstand und verringert Leckströme.</li>
            <li><b>Saltatorische Erregungsleitung</b>: das AP «springt» von Schnürring (Ranvier) zu Schnürring – viel schneller.</li>
            <li>Änderungen des K<sup>+</sup>-Spiegels im Blut beeinflussen die Fortleitung.</li>
            <li>Ausblick <b>Optogenetik</b>: Channelrhodopsin (aus Algen) öffnet bei blauem Licht – experimentell bei Blindheit eingesetzt.</li>
          </ul>` }
      ],
      cards: [
        { q: "Aufbau eines Neurons?", a: "Dendriten (Empfang), Zellkörper (Kern, Organellen, Verarbeitung), Axon (Weiterleitung), Axonterminale/Synapse (Übertragung)." },
        { q: "Welche Gliazellen bilden Myelin?", a: "Oligodendrozyten im ZNS, Schwann-Zellen im PNS." },
        { q: "Funktion von Astrozyten und Mikroglia?", a: "Astrozyten: Stoffwechsel, K⁺-/Transmitteraufnahme, Grenzstrukturen. Mikroglia: Fresszellen der Immunabwehr." },
        { q: "Generatorpotenzial vs. Aktionspotenzial?", a: "Generatorpotenzial: graduiert (∝ Reiz), nimmt mit Entfernung ab, summierbar. AP: Alles-oder-Nichts, konstante Amplitude, nicht summierbar." },
        { q: "Wo wird entschieden, ob ein AP ausgelöst wird?", a: "An der Triggerzone im Axonhügel – wenn das Generatorpotenzial die Schwelle überschreitet." },
        { q: "Welcher Ionenstrom verursacht die Depolarisation?", a: "Na⁺-Einstrom durch spannungsgesteuerte Na⁺-Kanäle." },
        { q: "Welcher Ionenstrom verursacht die Repolarisation?", a: "K⁺-Ausstrom durch spannungsgesteuerte K⁺-Kanäle." },
        { q: "Warum gibt es einen Undershoot?", a: "Die spannungsgesteuerten K⁺-Kanäle schliessen langsam – kurz fliesst mehr K⁺ aus als in Ruhe." },
        { q: "Die zwei Tore des Na_V-Kanals?", a: "Schnelles Aktivierungstor (öffnet bei Depolarisation) und langsameres Inaktivierungstor (stoppt den Na⁺-Einstrom)." },
        { q: "Absolute vs. relative Refraktärphase?", a: "Absolut: kein neues AP möglich, egal wie stark der Reiz. Relativ: nur überdurchschnittlich starke Reize lösen ein AP aus." },
        { q: "Wie wird die Reizstärke kodiert?", a: "Über die Frequenz der Aktionspotenziale, nicht über deren Amplitude." },
        { q: "Was beeinflusst die Leitungsgeschwindigkeit?", a: "Axondurchmesser und Membranwiderstand (Myelinisierung) – beide erhöhen die Geschwindigkeit." },
        { q: "Was ist saltatorische Erregungsleitung?", a: "Bei myelinisierten Axonen springt das AP von Ranvier-Schnürring zu Schnürring – deutlich schneller." },
        { q: "Zeitliche vs. räumliche Summation?", a: "Zeitlich: rasch aufeinanderfolgende Signale einer Synapse summieren sich. Räumlich: gleichzeitige Signale verschiedener Synapsen summieren sich." },
        { q: "Wie wirken Lokalanästhetika?", a: "Sie blockieren spannungsgesteuerte Na⁺-Kanäle → kein Aktionspotenzial → keine Schmerzweiterleitung." }
      ],
      quiz: [
        { q: "Welcher Vorgang verursacht die Depolarisationsphase des AP?", o: ["Na⁺-Einstrom", "K⁺-Ausstrom", "Cl⁻-Einstrom", "Ca²⁺-Ausstrom"], a: 0, e: "Spannungsgesteuerte Na⁺-Kanäle öffnen → Na⁺ strömt ein." },
        { q: "Warum können Aktionspotenziale nicht summiert werden?", o: ["Wegen der absoluten Refraktärphase", "Weil sie zu klein sind", "Weil K⁺-Kanäle immer offen sind", "Weil Myelin sie blockiert"], a: 0, e: "Während der absoluten Refraktärphase sind die Na_V-Kanäle inaktiviert." },
        { q: "Welche Aussage zu Generatorpotenzialen ist korrekt?", o: ["Ihre Amplitude ist proportional zur Reizstärke", "Sie sind immer gleich gross", "Sie werden ohne Verlust weitergeleitet", "Sie entstehen nur am Axonhügel"], a: 0, e: "Generatorpotenziale sind graduiert und nehmen mit der Entfernung ab." },
        { q: "Wie wird ein stärkerer Reiz im Axon kodiert?", o: ["Höhere AP-Frequenz", "Grössere AP-Amplitude", "Längere AP-Dauer", "Umgekehrte Polarität"], a: 0, e: "APs sind Alles-oder-Nichts; die Information steckt in der Frequenz." },
        { q: "Was erhöht die Leitungsgeschwindigkeit?", o: ["Myelinisierung und grösserer Axondurchmesser", "Kleinerer Axondurchmesser", "Mehr Leckkanäle", "Geringerer Membranwiderstand"], a: 0, e: "Grosser Durchmesser und hoher Membranwiderstand (Myelin) → schneller." },
        { q: "Welche Zellen bilden das Myelin im peripheren Nervensystem?", o: ["Schwann-Zellen", "Oligodendrozyten", "Astrozyten", "Mikroglia"], a: 0, e: "PNS: Schwann-Zellen; ZNS: Oligodendrozyten." },
        { q: "Was passiert am Inaktivierungstor des Na_V-Kanals?", o: ["Es schliesst verzögert und stoppt den Na⁺-Einstrom", "Es öffnet als Erstes bei Depolarisation", "Es lässt K⁺ ausströmen", "Es bleibt während des ganzen AP offen"], a: 0, e: "Das Aktivierungstor ist schnell, das Inaktivierungstor langsamer." },
        { q: "Wo liegt die Triggerzone eines Neurons?", o: ["Am Axonhügel", "An den Dendriten", "Im Zellkern", "An der Synapse"], a: 0, e: "Am Axonhügel ist die Dichte spannungsgesteuerter Na⁺-Kanäle hoch." },
        { q: "Während der relativen Refraktärphase …", o: ["kann nur ein stärkerer Reiz ein AP auslösen", "ist kein AP möglich", "sind alle Kanäle geschlossen", "wird das AP doppelt so gross"], a: 0, e: "Ein Teil der Na_V-Kanäle ist wieder bereit, K⁺-Kanäle sind noch offen." },
        { q: "Ein hyperpolarisierendes Generatorpotenzial …", o: ["senkt die Wahrscheinlichkeit eines AP", "löst sicher ein AP aus", "erhöht die AP-Amplitude", "hat keinen Einfluss"], a: 0, e: "Es entfernt das Membranpotenzial von der Schwelle." },
        { q: "Wie wirkt Lidocain?", o: ["Blockade spannungsgesteuerter Na⁺-Kanäle", "Öffnung von K_ATP-Kanälen", "Hemmung der Na⁺/K⁺-ATPase", "Aktivierung von GPCRs"], a: 0, e: "Ohne Na⁺-Einstrom keine Depolarisation → keine Schmerzweiterleitung." },
        { q: "Was beschreibt saltatorische Erregungsleitung?", o: ["Das AP springt von Schnürring zu Schnürring", "Das AP wird auf dem Weg schwächer", "Das AP läuft rückwärts zum Soma", "Ionen springen durch Gap Junctions"], a: 0, e: "Zwischen den Schnürringen leiten lokale Ionenströme; neu gebildet wird das AP nur an den Schnürringen." }
      ]
    }
  ]
};
