// ==========================================================================
// KNOWLEDGE-BASE: FAQ-DATENBANK, ÜBUNGSKATALOG, GLOSSAR & RECHNER-TEMPLATES
// ==========================================================================

const FAQ_KNOWLEDGE_BASE = [
  // ========================================================================
  // 1. FITNESS-GLOSSAR: ALLE FACHBEGRIFFE & WISSENSCHAFT (A–Z)
  // ========================================================================

  // --- KATEGORIE 1: HYPERTROPHIE, PHYSIOLOGIE & ZELLBIOLOGIE ---
  {
    q: "Glossar: Was ist Hypertrophie (Muskelhypertrophie)?",
    a: "<p><strong>Hypertrophie:</strong> Das Dickenwachstum bestehender Muskelfasern. Durch mechanische Reize und progressive Überlastung werden neue Proteine (Myofibrillen) in die Muskelfaser eingelagert, wodurch sich der physiologische Muskelquerschnitt vergrößert.</p>",
    tags: [
      "glossar",
      "hypertrophie",
      "muskelhypertrophie",
      "muskelaufbau",
      "dickenwachstum",
      "querschnitt",
    ],
  },
  {
    q: "Glossar: Was ist der Unterschied zwischen myofibrillärer und sarkoplasmatischer Hypertrophie?",
    a: "<p><strong>Myofibrillär vs. Sarkoplasmatisch:</strong><br>• <strong>Myofibrilläre Hypertrophie:</strong> Zunahme der kontraktilen Kraftelemente (Aktin und Myosin) für dauerhaften Kraftanstieg und dichte, harte Muskelstruktur.<br>• <strong>Sarkoplasmatische Hypertrophie:</strong> Volumenzunahme des Muskelzellplasmas (Sarkoplasma) durch Einlagerung von Wasser, Glykogen und Enzymen für prallere Optik und lokale Kraftausdauer.</p>",
    tags: [
      "glossar",
      "myofibrillär",
      "sarkoplasmatisch",
      "hypertrophie",
      "aktin",
      "myosin",
      "sarkoplasma",
      "volumen",
    ],
  },
  {
    q: "Glossar: Was ist Hyperplasie?",
    a: "<p><strong>Hyperplasie:</strong> Die Vermehrung der Anzahl der Muskelfasern durch Faserteilung. Beim Menschen spielt dieser Prozess im Vergleich zur Hypertrophie eine stark untergeordnete Rolle.</p>",
    tags: [
      "glossar",
      "hyperplasie",
      "faserteilung",
      "faseranzahl",
      "zellteilung",
    ],
  },
  {
    q: "Glossar: Was ist Mechanische Spannung (Mechanical Tension)?",
    a: "<p><strong>Mechanische Spannung:</strong> Der Haupttreiber für Muskelwachstum. Wenn Muskelfasern gegen einen hohen Widerstand kontrahieren, erfassen Mechanosensoren (Kostamere) diese Zugkräfte und aktivieren den anabolen Signalweg (mTOR).</p>",
    tags: [
      "glossar",
      "mechanische spannung",
      "mechanical tension",
      "mtor",
      "muskelwachstum",
      "haupttreiber",
    ],
  },
  {
    q: "Glossar: Was ist der Dehnungsreiz (Stretch-Mediated Hypertrophy)?",
    a: "<p><strong>Stretch-Mediated Hypertrophy:</strong> Verstärktes Muskelwachstum durch Belastung des Muskels in maximaler Dehnung (z. B. tiefe Kniebeugen, RDLs oder Schrägbank-Curls). Das Riesenprotein Titin erzeugt dabei passive mechanische Spannung.</p>",
    tags: [
      "glossar",
      "stretch",
      "loaded stretch",
      "dehnung",
      "titin",
      "stretch-mediated hypertrophy",
      "rom",
    ],
  },
  {
    q: "Glossar: Was sind Mechanotransduktion & Titin-Spannung?",
    a: "<p><strong>Mechanotransduktion:</strong> Der biophysikalische Prozess, bei dem Muskelzellen mechanische Zugkräfte an der Zellmembran (über Integrine/Kostamere) in biochemische anabole Signale umwandeln. Die elastische Spannung der <strong>Titin-Filamente</strong> im Sarkomer triggert dabei die dehnungsinduzierte Hypertrophie.</p>",
    tags: [
      "glossar",
      "mechanotransduktion",
      "titin",
      "sarkomer",
      "hypertrophie biologie",
      "spannung",
    ],
  },
  {
    q: "Glossar: Was ist Metabolischer Stress?",
    a: "<p><strong>Metabolischer Stress:</strong> Die Anhäufung von Stoffwechselendprodukten (Laktat, H+-Ionen, anorganisches Phosphat) bei anhaltender Muskelarbeit (typisch bei 12–25+ Reps), was zu Muskelbrennen und Zellschwellung führt.</p>",
    tags: [
      "glossar",
      "metabolischer stress",
      "laktat",
      "brennen",
      "pump",
      "stoffwechsel",
    ],
  },
  {
    q: "Glossar: Was sind Muskelschaden & Mikrotraumata?",
    a: "<p><strong>Muskelschaden:</strong> Mikroskopisch kleine Risse in den Z-Scheiben der Muskelfasern, meist ausgelöst durch schwere, bremsende Bewegungen (Exzentrik). Ein natürliches Trainingsnebenprodukt, das jedoch nicht zwingend für Muskelaufbau nötig ist.</p>",
    tags: [
      "glossar",
      "muskelschaden",
      "mikrotraumata",
      "exzentrik",
      "z-scheiben",
      "doms",
    ],
  },
  {
    q: "Glossar: Was sind Aktin, Myosin & Sarkomere?",
    a: "<p><strong>Kontraktionselemente:</strong><br>• <strong>Aktin & Myosin:</strong> Die kontraktilen Myofilamente. Myosinköpfchen greifen an Aktinsträngen an (Querbrückenzyklus) und ziehen diese unter ATP-Spaltung ineinander.<br>• <strong>Sarkomer:</strong> Die kleinste funktionelle Kontraktionseinheit der Muskelfaser, begrenzt durch Z-Scheiben.</p>",
    tags: [
      "glossar",
      "aktin",
      "myosin",
      "sarkomer",
      "querbrückenzyklus",
      "kontraktion",
      "anatomie",
    ],
  },
  {
    q: "Glossar: Was sind Satellitenzellen & Myonukleare Domäne?",
    a: "<p><strong>Satellitenzellen:</strong> Muskelstammzellen, die bei starker Belastung mit der Faser verschmelzen und neue Zellkerne (Myonuklei) spenden. Sie sichern die Versorgung des Zytoplasmas (<strong>Myonukleare Domäne</strong>) und bilden das biologische Fundament des <strong>Muscle-Memory-Effekts</strong>.</p>",
    tags: [
      "glossar",
      "satellitenzellen",
      "myonuklei",
      "zellkerne",
      "muscle memory",
      "myonukleare domäne",
    ],
  },
  {
    q: "Glossar: Was bedeutet Henneman-Größenprinzip?",
    a: "<p><strong>Henneman-Größenprinzip:</strong> Neurophysiologisches Gesetz der Faserrekrutierung: Zuerst feuern die kleinen, ausdauernden Typ-I-Fasern. Erst bei schwerer Last oder nahender Erschöpfung schalten sich die großen, wachstumsstarken Typ-II-Fasern (Fast-Twitch) zu.</p>",
    tags: [
      "glossar",
      "henneman",
      "größenprinzip",
      "rekrutierung",
      "typ 1",
      "typ 2",
      "fast-twitch",
    ],
  },
  {
    q: "Glossar: Was ist der Unterschied zwischen Slow-Twitch- und Fast-Twitch-Fasern?",
    a: "<p><strong>Muskelfasertypen:</strong><br>• <strong>Typ I (Slow-Twitch):</strong> Sauerstoffreich, extrem ermüdungsresistent mit hoher Mitochondriendichte (Haltungs-/Ausdauerfunktion).<br>• <strong>Typ IIa / IIx (Fast-Twitch):</strong> Schnell kontrahierend, arbeiten anaerob (Glykolyse), ermüden schneller, besitzen aber das größte Hypertrophiepotenzial.</p>",
    tags: [
      "glossar",
      "slow-twitch",
      "fast-twitch",
      "typ 1 fasern",
      "typ 2 fasern",
      "muskelfasern",
    ],
  },
  {
    q: "Glossar: Was ist Myostatin?",
    a: "<p><strong>Myostatin:</strong> Ein körpereigenes Protein, das das Muskelwachstum genetisch limitiert und bremst. Gegenspieler wie Follistatin hemmen Myostatin und begünstigen Muskelaufbau.</p>",
    tags: [
      "glossar",
      "myostatin",
      "genetik",
      "muskelbremse",
      "follistatin",
      "hypertrophie",
    ],
  },
  {
    q: "Glossar: Was ist Mind-Muscle-Connection & Muscle Pump?",
    a: "<p><strong>Neuromuskuläre Phänomene:</strong><br>• <strong>Mind-Muscle-Connection:</strong> Die bewusste mentale Fokussierung auf das Spüren und gezielte Anspannen des Zielmuskels.<br>• <strong>Pump (Hyperämie):</strong> Das vorübergehende Anschwellen des Muskels durch massiven Bluteinstrom bei wiederholter Kontraktion.</p>",
    tags: [
      "glossar",
      "mind-muscle-connection",
      "pump",
      "hyperämie",
      "muskelgefühl",
      "fokus",
    ],
  },

  // --- KATEGORIE 2: INTENSITÄTSSTEUERUNG & SATZTECHNIKEN ---
  {
    q: "Glossar: Was bedeuten RIR (Reps in Reserve) & RPE?",
    a: "<p><strong>RIR & RPE:</strong> Skalen zur Steuerung der Trainingsintensität:<br>• <strong>RPE 10 (RIR 0):</strong> Absolutes Muskelversagen.<br>• <strong>RPE 9 (RIR 1):</strong> Genau 1 saubere Wiederholung verbleibt im Tank.<br>• <strong>RPE 8 (RIR 2):</strong> Optimaler Hypertrophie-Bereich (2 Wdh. vor dem Versagen).<br>• <strong>RPE 6–7 (RIR 3–4):</strong> Für Aufwärmsätze und Technikphasen.</p>",
    tags: [
      "glossar",
      "rir",
      "rpe",
      "reps in reserve",
      "intensität",
      "muskelversagen",
      "ausbelastung",
    ],
  },
  {
    q: "Glossar: Konzentrisches vs. Technisches Muskelversagen",
    a: "<p><strong>Versagensarten:</strong><br>• <strong>Konzentrisches Versagen:</strong> Der Punkt, an dem die positive Aufwärtsbewegung trotz maximalen Krafteinsatzes vollständig stoppt.<br>• <strong>Technisches Versagen:</strong> Der Zeitpunkt, an dem keine weitere Wiederholung mehr mit 100 % sauberer Form ausgeführt werden kann (die sichere Abbruchgrenze).</p>",
    tags: [
      "glossar",
      "muskelversagen",
      "konzentrisches versagen",
      "technisches versagen",
      "formabbruch",
    ],
  },
  {
    q: "Glossar: Was sind Drop-Sets, Rest-Pause und Myo-Reps?",
    a: "<p><strong>Zeiteffiziente Intensitätstechniken:</strong><br>• <strong>Drop-Set (Reduktionssatz):</strong> Nach dem Versagen wird das Gewicht sofort um 20–30 % gesenkt und ohne Pause weitergepumpt.<br>• <strong>Rest-Pause:</strong> Satz bis zum Versagen, 10–15 Sek. Pause, dann mit demselben Gewicht 2–4 weitere Reps.<br>• <strong>Myo-Reps:</strong> Ein Aktivierungssatz (12–15 Reps), gefolgt von Mini-Sätzen à 3–5 Reps mit nur 3–5 tiefen Atemzügen Pause.</p>",
    tags: [
      "glossar",
      "drop-sets",
      "rest-pause",
      "myo-reps",
      "intensitätstechniken",
      "reduktionssatz",
    ],
  },
  {
    q: "Glossar: Was sind Supersätze, Giant-Sets & Vor-/Nachermüdung?",
    a: "<p><strong>Satzkombinationen:</strong><br>• <strong>Supersatz:</strong> Zwei Übungen direkt hintereinander ohne Pause (antagonistischer oder agonistischer Wechsel).<br>• <strong>Giant-Set:</strong> Drei oder mehr Übungen direkt hintereinander.<br>• <strong>Vorermüdung:</strong> Isolationsübung vor der Grundübung (z. B. Butterfly vor Bankdrücken).<br>• <strong>Nachermüdung:</strong> Isolationsübung direkt nach der Grundübung (z. B. Beinstrecker nach Kniebeugen).</p>",
    tags: [
      "glossar",
      "supersatz",
      "giant-set",
      "vorermüdung",
      "nachermüdung",
      "kombination",
    ],
  },
  {
    q: "Glossar: Was sind Lengthened Partials & Cluster-Sätze?",
    a: "<p><strong>Moderne Intensitätsmethoden:</strong><br>• <strong>Lengthened Partials:</strong> Teilwiederholungen, die ausschließlich in der maximal gedehnten Position ausgeführt werden.<br>• <strong>Cluster-Sätze:</strong> Ein Satz wird in kleine Abschnitte (z. B. 4x2 Reps mit 15 Sek. Pause) aufgeteilt, um schwere Lasten mit maximaler Bewegungsqualität zu bewegen.</p>",
    tags: [
      "glossar",
      "lengthened partials",
      "cluster-sätze",
      "dehnung",
      "effektive wiederholungen",
    ],
  },
  {
    q: "Glossar: Was sind Heavy Duty (HIT), GVT (10x10), FST-7 und BFR-Training?",
    a: "<p><strong>Spezifische Trainingssysteme:</strong><br>• <strong>Heavy Duty / HIT (Mentzer/Yates):</strong> Extrem niedriges Volumen (1 echter All-out-Arbeitssatz über das Versagen hinaus).<br>• <strong>German Volume Training (GVT):</strong> 10 Sätze à 10 Reps mit 60 % 1RM.<br>• <strong>FST-7 (Rambod):</strong> 7 Pumpsätze am Workout-Ende mit 30–45 Sek. Pause zur Fasziendehnung.<br>• <strong>BFR-Training (Blood Flow Restriction):</strong> Training mit Okklusionsmanschetten bei 20–30 % 1RM für maximalen metabolischen Stress.</p>",
    tags: [
      "glossar",
      "heavy duty",
      "hit",
      "gvt",
      "fst-7",
      "bfr",
      "okklusionstraining",
      "10x10",
    ],
  },

  // --- KATEGORIE 3: TRAININGSVOLUMEN, PERIODISIERUNG & PLANUNG ---
  {
    q: "Glossar: Was bedeutet Progressive Overload?",
    a: "<p><strong>Progressive Overload (Systematische Mehrbelastung):</strong> Das biologische Grundgesetz für Kraft- und Muskelaufbau. Ein Muskel wächst nur, wenn er kontinuierlich steigenden mechanischen Reizen ausgesetzt wird (mehr Gewicht, mehr Reps/Sets, langsamere Kadenz, volle ROM).</p>",
    tags: [
      "glossar",
      "progressive overload",
      "progression",
      "mehrbelastung",
      "reiz",
      "hypertrophie",
    ],
  },
  {
    q: "Glossar: Was bedeuten MEV, MAV, MRV und MV beim Satzvolumen?",
    a: "<p><strong>Volumen-Stufen (nach Dr. Mike Israetel):</strong><br>• <strong>MV (Maintenance Volume):</strong> Mindestvolumen zum Muskelerhalt (3–6 Sätze/Woche).<br>• <strong>MEV (Minimum Effective Volume):</strong> Mindestanzahl für Wachstumsbeginn (6–10 Sätze/Woche).<br>• <strong>MAV (Maximum Adaptive Volume):</strong> Optimalbereich für maximalen Zuwachs (12–20 Sätze/Woche).<br>• <strong>MRV (Maximum Recoverable Volume):</strong> Obergrenze der Regenerationsfähigkeit.<br>• <strong>Junk Volume:</strong> Unproduktive Sätze über dem MRV oder mit zu geringer Intensität (> 4 RIR).</p>",
    tags: [
      "glossar",
      "mev",
      "mav",
      "mrv",
      "mv",
      "junk volume",
      "satzvolumen",
      "israetel",
    ],
  },
  {
    q: "Glossar: Lineare Progression vs. Doppelte Progression",
    a: "<p><strong>Progressionsmodelle:</strong><br>• <strong>Lineare Progression:</strong> Festes Steigern des Gewichts von Einheit zu Einheit bei gleicher Rep-Zahl.<br>• <strong>Doppelte Progression:</strong> Erst die Wiederholungen über alle Sätze bis zum Limit steigern (z. B. von 8 auf 12 Reps), dann das Gewicht erhöhen.<br>• <strong>Dynamische Doppelprogression:</strong> Jeder Satz wird individuell gesteigert, sobald in diesem Satz das Rep-Limit erreicht wurde.</p>",
    tags: [
      "glossar",
      "progression",
      "doppelte progression",
      "lineare progression",
      "steigerung",
    ],
  },
  {
    q: "Glossar: Was sind DUP, Blockperiodisierung und Deload?",
    a: "<p><strong>Periodisierung:</strong><br>• <strong>DUP (Daily Undulating Periodization):</strong> Wellenförmiger Wechsel von Wdh.-Bereichen innerhalb der Woche (z. B. Mo: 5 Reps Kraft, Mi: 10 Reps Hypertrophie).<br>• <strong>Blockperiodisierung:</strong> Einteilung in Akkumulations-, Intensivierungs- und Realisierungsblöcke.<br>• <strong>Deload:</strong> Geplante Entlastungswoche (Volumen um ca. 50 % gesenkt) zum Abbau von ZNS-Ermüdung.</p>",
    tags: [
      "glossar",
      "dup",
      "periodisierung",
      "blockperiodisierung",
      "deload",
      "tapering",
    ],
  },
  {
    q: "Glossar: Was ist Autoregulation & Dosis-Wirkungs-Kurve?",
    a: "<p><strong>Steuerung & Biologie:</strong><br>• <strong>Autoregulation:</strong> Flexible Tagesformanpassung von Last und Sätzen über RPE/RIR.<br>• <strong>Dosis-Wirkungs-Kurve:</strong> Mehr Volumen bringt bis zum MRV mehr Wachstum, flacht dann ab und schlägt bei Übertraining in Leistungsabfall um.</p>",
    tags: [
      "glossar",
      "autoregulation",
      "dosis-wirkung",
      "tagesform",
      "ermüdung",
    ],
  },

  // --- KATEGORIE 4: BIOMECHANIK, HEBEL & MUSKELANATOMIE ---
  {
    q: "Glossar: Was bedeuten ROM, TUT und Kadenz?",
    a: "<p><strong>Bewegungsparameter:</strong><br>• <strong>ROM (Range of Motion):</strong> Der volle physiologische Bewegungsumfang eines Gelenks.<br>• <strong>TUT (Time under Tension):</strong> Die Gesamtdauer der Muskelspannung pro Satz.<br>• <strong>Kadenz (Tempo):</strong> Zeitliche Aufteilung einer Wdh. (z. B. 2-3 Sek. Exzentrik, 1 Sek. Stretch, 1 Sek. Konzentrik).</p>",
    tags: [
      "glossar",
      "rom",
      "tut",
      "kadenz",
      "tempo",
      "exzentrik",
      "konzentrik",
    ],
  },
  {
    q: "Glossar: Was sind Hebelarm, Drehmoment & Widerstandsprofile?",
    a: "<p><strong>Biomechanik im Gym:</strong><br>• <strong>Hebelarm / Momentarm:</strong> Senkrechter Abstand zwischen Gelenkdrehpunkt und Kraftwirkungslinie.<br>• <strong>Widerstandskurve:</strong> Passung des Gerätewiderstands an die physiologische Kraftkurve des Muskels über die Bewegungsbahn.</p>",
    tags: [
      "glossar",
      "hebelarm",
      "momentarm",
      "drehmoment",
      "widerstandsprofil",
      "kraftkurve",
    ],
  },
  {
    q: "Glossar: Was bedeuten Agonist, Antagonist, Synergist & Insuffizienz?",
    a: "<p><strong>Muskelrollen:</strong><br>• <strong>Agonist:</strong> Hauptarbeitsmuskel.<br>• <strong>Antagonist:</strong> Gegenspieler.<br>• <strong>Synergist:</strong> Unterstützender Hilfsmuskel.<br>• <strong>Aktive Insuffizienz:</strong> Unfähigkeit mehrgelenkiger Muskeln, in maximal verkürzter Position volle Kraft zu entfalten.<br>• <strong>Passive Insuffizienz:</strong> Bewegungsbegrenzung durch Dehnung des Gegenspielers.</p>",
    tags: [
      "glossar",
      "agonist",
      "antagonist",
      "synergist",
      "aktive insuffizienz",
      "passive insuffizienz",
    ],
  },
  {
    q: "Glossar: Was bedeuten Offene Kette (OKC) vs. Geschlossene Kette (CKC)?",
    a: "<p><strong>Kinetische Ketten:</strong><br>• <strong>Offene Kette (OKC):</strong> Hand/Fuß bewegt sich frei im Raum (z. B. Beinstrecker, Seitheben, Bankdrücken) – ideal zur Isolation.<br>• <strong>Geschlossene Kette (CKC):</strong> Hand/Fuß ist fixiert (z. B. Kniebeuge, Klimmzug, Dips) – hohe Gelenkstabilität.</p>",
    tags: [
      "glossar",
      "okc",
      "ckc",
      "open kinetic chain",
      "closed kinetic chain",
      "kinetische kette",
    ],
  },
  {
    q: "Glossar: Was bedeuten Pennationswinkel & Faserverlauf?",
    a: "<p><strong>Pennationswinkel (Fiederung):</strong> Der Winkel, in dem die Muskelfasern schräg an die Sehne ansetzen. Er erlaubt es, mehr Muskelfasern auf engem Raum zu bündeln und erhöht die Kraftentwicklung.</p>",
    tags: [
      "glossar",
      "pennationswinkel",
      "fiederung",
      "faserverlauf",
      "anatomie",
    ],
  },
  {
    q: "Glossar: Was bedeuten Bracing & Valsalva-Manöver?",
    a: "<p><strong>Rumpfstabilität & Atmung:</strong><br>• <strong>Bracing:</strong> Das aktive 360-Grad-Anspannen der gesamten Bauch- und Rumpfwand.<br>• <strong>Valsalva-Manöver:</strong> Gezielte Pressatmung gegen die geschlossene Stimmlitze zur Maximierung des intraabdominalen Drucks bei schweren Grundübungen.</p>",
    tags: [
      "glossar",
      "bracing",
      "valsalva",
      "pressatmung",
      "rumpfspannung",
      "wirbelsäulenschutz",
    ],
  },

  // --- KATEGORIE 5: GERÄTE, GRIFFE & GYM-EQUIPMENT ---
  {
    q: "Glossar: Was ist der Unterschied zwischen Freihanteln, Maschinen und Kabelzug?",
    a: "<p><strong>Trainingssysteme:</strong><br>• <strong>Geführte Maschinen:</strong> Feste Führung für maximale Stabilität und sicheres Ausbelasten bis RIR 0.<br>• <strong>Freihanteln:</strong> Freie 3D-Bewegung für Rumpfstabilität, Gelenkkoordination und Hilfsmuskulatur.<br>• <strong>Kabelzug:</strong> Bietet konstante mechanische Spannung über die gesamte Range of Motion.</p>",
    tags: [
      "glossar",
      "freihanteln",
      "maschinen",
      "kabelzug",
      "unterschied",
      "biomechanik",
    ],
  },
  {
    q: "Glossar: Welche Griffarten gibt es (Proniert, Supiniert, Neutral, Hook Grip)?",
    a: "<p><strong>Griffvarianten:</strong><br>• <strong>Proniert (Obergriff):</strong> Handflächen zeigen nach vorn/unten.<br>• <strong>Supiniert (Untergriff):</strong> Handflächen zeigen zum Körper.<br>• <strong>Neutral (Hammergriff):</strong> Handflächen zeigen zueinander.<br>• <strong>Kreuzgriff (Mixed Grip):</strong> Eine Hand oben, eine unten beim Kreuzheben.<br>• <strong>Hook Grip (Daumenklemme):</strong> Der Daumen wird von den Fingern umschlossen.<br>• <strong>Thumbless Grip (Suicide Grip):</strong> Daumen liegt parallel zu den Fingern.</p>",
    tags: [
      "glossar",
      "griffarten",
      "obergriff",
      "untergriff",
      "neutraler griff",
      "hook grip",
      "suicide grip",
    ],
  },
  {
    q: "Glossar: Was sind Specialty Bars (Safety Squat Bar, Trap Bar, SZ-Stange)?",
    a: "<p><strong>Spezialhanteln:</strong><br>• <strong>Safety Squat Bar (SSB):</strong> Schulterpolster und Griffe für aufrechtere Kniebeugen und Schulterschonung.<br>• <strong>Trap Bar (Hex Bar):</strong> Sechseckige Hantel für rückenschonendes Heben und Shrugs mit neutralem Griff.<br>• <strong>SZ-Stange:</strong> Ergonomisch gekrümmt zur Schonung der Handgelenke beim Curlen.</p>",
    tags: [
      "glossar",
      "specialty bars",
      "safety squat bar",
      "trap bar",
      "hex bar",
      "sz-stange",
    ],
  },
  {
    q: "Glossar: Was bringen Zughilfen, Gürtel, Sleeves & Wraps?",
    a: "<p><strong>Gym-Equipment:</strong><br>• <strong>Lifting Straps (Zughilfen):</strong> Schalten Griffkraftlimitationen bei schweren Zugübungen aus.<br>• <strong>Weightlifting Belt (Gürtel):</strong> Erhöht den Bauchinnendruck beim Bracing.<br>• <strong>Knee/Elbow Sleeves:</strong> Neoprenstulpen zur Gelenkwärme und Kompression.<br>• <strong>Wrist Wraps:</strong> Handgelenkbandagen zur Stabilisierung bei schwerem Drücken.</p>",
    tags: [
      "glossar",
      "zughilfen",
      "straps",
      "gürtel",
      "sleeves",
      "wrist wraps",
      "ausrüstung",
    ],
  },

  // --- KATEGORIE 6: CARDIO, AUSDAUER & ENERGIESYSTEME ---
  {
    q: "Glossar: Was bedeuten LISS, HIIT und Zone-2-Cardio?",
    a: "<p><strong>Ausdauermethoden:</strong><br>• <strong>LISS:</strong> Gleichmäßiges Ausdauertraining bei niedriger Intensität (z. B. Incline Walk).<br>• <strong>HIIT:</strong> Hochintensiver Wechsel aus Maximalsprints und kurzen Pausen.<br>• <strong>Zone 2 Cardio:</strong> Aerobes Grundlagentraining, bei dem primär Fettsäuren verbrannt werden (Sprechen problemlos möglich).</p>",
    tags: [
      "glossar",
      "liss",
      "hiit",
      "zone 2",
      "cardio",
      "ausdauer",
      "fettverbrennung",
    ],
  },
  {
    q: "Glossar: Was sind ATP-KP, Anaerobe Glykolyse & EPOC?",
    a: "<p><strong>Energiesysteme & Nachbrenneffekt:</strong><br>• <strong>ATP-KP-System:</strong> Für explosive Maximalleistungen der ersten 1–10 Sekunden.<br>• <strong>Anaerobe Glykolyse:</strong> Laktazide Energiegewinnung aus Glukose für 15–90 Sekunden.<br>• <strong>EPOC (Nachbrenneffekt):</strong> Erhöhter Kalorienverbrauch in den Stunden nach dem Training zur Regeneration.</p>",
    tags: [
      "glossar",
      "atp",
      "glykolyse",
      "epoc",
      "nachbrenneffekt",
      "energiesysteme",
    ],
  },
  {
    q: "Glossar: Was ist der Interferenzeffekt (AMPK vs. mTOR)?",
    a: "<p><strong>Interferenzeffekt:</strong> Die molekulare Konkurrenz zwischen Ausdauer- und Kraftreizen. Zu exzessives Cardiotraining aktiviert das Enzym AMPK, was den anabolen Muskelaufbau-Signalweg mTOR dämpfen kann.</p>",
    tags: [
      "glossar",
      "interferenzeffekt",
      "ampk",
      "mtor",
      "cardio vor kraft",
      "muskelaufbau",
    ],
  },

  // --- KATEGORIE 7: ERNÄHRUNG, ENERGIEBILANZ & DIÄTSTRATEGIEN ---
  {
    q: "Glossar: Was ist Body Recomposition?",
    a: "<p><strong>Body Recomposition:</strong> Zeitgleicher Aufbau von fettfreier Muskelmasse bei gleichzeitigem Abbau von Körperfett. Funktioniert zuverlässig bei Einsteigern, Wiedereinsteigern, bei höherem KFA oder mit optimierter Eiweißzufuhr auf Erhaltungsniveau.</p>",
    tags: [
      "glossar",
      "recomposition",
      "body recomposition",
      "fettabbau muskelaufbau gleichzeitig",
      "recomp",
    ],
  },
  {
    q: "Glossar: Was bedeuten TDEE, BMR, NEAT und TEF?",
    a: "<p><strong>Kalorienverbrauch-Komponenten:</strong><br>• <strong>TDEE:</strong> Gesamter täglicher Kalorienverbrauch.<br>• <strong>BMR (Grundumsatz):</strong> Kalorienbedarf bei 24h Bettruhe.<br>• <strong>NEAT:</strong> Kalorienverbrauch durch Alltagsbewegung (Schritte, Stehen, Gestikulieren).<br>• <strong>TEF (Thermic Effect of Food):</strong> Energieverbrauch für die Verdauung (Protein verbraucht 20–30 % der Eigenenergie).</p>",
    tags: [
      "glossar",
      "tdee",
      "bmr",
      "neat",
      "tef",
      "kalorienverbrauch",
      "grundumsatz",
    ],
  },
  {
    q: "Glossar: Was sind Minicut, Refeed-Day & Diet Break?",
    a: "<p><strong>Diät-Werkzeuge:</strong><br>• <strong>Minicut:</strong> Kurze, aggressive Diätphase von 2–6 Wochen mit hohem Defizit (700–1000 kcal).<br>• <strong>Refeed-Day:</strong> Gezielter Tag mit hoher Kohlenhydratzufuhr zur Senkung von Diätstress und Füllung der Glykogenspeicher.<br>• <strong>Diet Break:</strong> 1–2 Wochen auf Erhaltungskalorien zur metabolischen Erholung.</p>",
    tags: [
      "glossar",
      "minicut",
      "refeed",
      "diet break",
      "diät",
      "kaloriendefizit",
    ],
  },
  {
    q: "Glossar: Was ist Metabolische Adaption?",
    a: "<p><strong>Metabolische Adaption:</strong> Die evolutionäre Schutzanpassung des Körpers an lange Diäten, bei der Grundumsatz, NEAT und Körpertemperatur unbewusst gesenkt werden, um Energie zu sparen.</p>",
    tags: [
      "glossar",
      "metabolische adaption",
      "adaptive thermogenese",
      "stoffwechsel",
      "diätstagnation",
    ],
  },

  // --- KATEGORIE 8: MAKRONÄHRSTOFFE, PROTEINE & BIOCHEMIE ---
  {
    q: "Glossar: Was sind Proteine, Kohlenhydrate und Fette?",
    a: "<p><strong>Die 3 Makronährstoffe:</strong><br>• <strong>Protein (4 kcal/g):</strong> Baustein für Muskeln und Enzyme (Richtwert: 1,6–2,2 g/kg).<br>• <strong>Kohlenhydrate (4 kcal/g):</strong> Primärer Energielieferant für intensive Muskelkontraktionen.<br>• <strong>Fett (9 kcal/g):</strong> Essenziell für Testosteronsynthese und fettlösliche Vitamine (mind. 0,6–0,8 g/kg).</p>",
    tags: [
      "glossar",
      "proteine",
      "kohlenhydrate",
      "fette",
      "makros",
      "makronährstoffe",
    ],
  },
  {
    q: "Glossar: Was bedeuten MPS, MPB und Leucin-Schwelle?",
    a: "<p><strong>Proteinbiosynthese:</strong><br>• <strong>MPS (Muscle Protein Synthesis):</strong> Zellulärer Aufbau neuen Muskelgewebes.<br>• <strong>MPB (Muscle Protein Breakdown):</strong> Abbau von Muskelprotein.<br>• <strong>Leucin-Schwelle:</strong> Die Mindestmenge an Leucin (~2,5–3,5 g pro Mahlzeit), die nötig ist, um mTOR maximal zu triggern.</p>",
    tags: [
      "glossar",
      "mps",
      "mpb",
      "leucin",
      "leucin-schwelle",
      "mtor",
      "muskelproteinsynthese",
    ],
  },
  {
    q: "Glossar: Was ist der Unterschied zwischen EAAs und BCAAs?",
    a: "<p><strong>Aminosäuren:</strong><br>• <strong>EAAs:</strong> Alle 9 lebensnotwendigen Aminosäuren, die der Körper nicht selbst herstellen kann.<br>• <strong>BCAAs:</strong> Nur die 3 verzweigtkettigen Aminosäuren (Leucin, Isoleucin, Valin). EAAs sind für den Muskelaufbau biologisch überlegen.</p>",
    tags: ["glossar", "eaas", "bcaas", "aminosäuren", "leucin", "eiweiß"],
  },
  {
    q: "Glossar: Was sind Glut-4-Transporter & Glykogenspeicher?",
    a: "<p><strong>Glukosetransport:</strong><br>• <strong>Glut-4-Transporter:</strong> Glukosetransporter, die durch Muskelkontraktion an die Zellwand wandern, um Kohlenhydrate insulinunabhängig in die Muskelzelle zu schleusen.<br>• <strong>Glykogenspeicher:</strong> Kapazität der Muskeln (~300–600 g) und Leber (~100 g) zur Kohlenhydratspeicherung.</p>",
    tags: [
      "glossar",
      "glut-4",
      "glykogen",
      "glukose",
      "kohlenhydrate",
      "insulinsensitivität",
    ],
  },

  // --- KATEGORIE 9: KÖRPERZUSAMMENSETZUNG & TRACKING ---
  {
    q: "Glossar: Was bedeuten KFA, LBM und FFMI?",
    a: "<p><strong>Körperanalyse:</strong><br>• <strong>KFA (Körperfettanteil):</strong> Prozentualer Fettanteil am Gesamtgewicht.<br>• <strong>LBM (Lean Body Mass):</strong> Fettfreie Masse (Muskeln, Knochen, Organe, Wasser).<br>• <strong>FFMI (Fat-Free Mass Index):</strong> Größenbereinigter Muskelmasse-Index. 21–22 = gut trainiert; 24–25 = genetisches Natural-Limit.</p>",
    tags: [
      "glossar",
      "kfa",
      "lbm",
      "ffmi",
      "körperfett",
      "magermasse",
      "natural limit",
    ],
  },
  {
    q: "Glossar: Intrazelluläres vs. Extrazelluläres Wasser (ICW vs. ECW)",
    a: "<p><strong>Wasserhaushalt:</strong><br>• <strong>Intrazelluläres Wasser (ICW):</strong> Wasser in der Muskelzelle (sorgt für pralle, definierte Muskeln und Kraft).<br>• <strong>Extrazelluläres Wasser (ECW):</strong> Wasser unter der Haut und im Bindegewebe (lässt Konturen weich wirken).</p>",
    tags: [
      "glossar",
      "intrazelluläres wasser",
      "extrazelluläres wasser",
      "wassereinlagerung",
      "kreatin wasser",
    ],
  },
  {
    q: "Glossar: Viszeralfett vs. Subkutanes Fett",
    a: "<p><strong>Fettarten:</strong><br>• <strong>Viszeralfett:</strong> Tiefes, stoffwechselaktives Fett um die inneren Bauchorgane (erhöhtes kardiovaskuläres Risiko).<br>• <strong>Subkutanes Fett:</strong> Das harmlosere Unterhaut-Speicherfett.</p>",
    tags: [
      "glossar",
      "viszeralfett",
      "subkutanes fett",
      "bauchfett",
      "gesundheit",
    ],
  },

  // --- KATEGORIE 10: SUPPLEMENTS & WIRKSTOFFE ---
  {
    q: "Glossar: Was bewirkt Kreatin-Monohydrat?",
    a: "<p><strong>Kreatin-Monohydrat:</strong> Erhöht die intramuskulären Phosphokreatinspeicher zur schnellen ATP-Regeneration bei kurzen Maximalbelastungen. Steigert Kraftwerte und zieht 1–2 kg Wasser rein intrazellulär in den Muskel.</p>",
    tags: [
      "glossar",
      "kreatin",
      "creatine",
      "monohydrat",
      "kraftsteigerung",
      "supplements",
    ],
  },
  {
    q: "Glossar: Was bewirken Koffein, Beta-Alanin und L-Citrullin?",
    a: "<p><strong>Performance-Supplements:</strong><br>• <strong>Koffein:</strong> Blockiert Adenosin-Rezeptoren gegen Müdigkeit und steigert Fokus und Schmerztoleranz.<br>• <strong>Beta-Alanin:</strong> Puffert Säure (Carnosinsynthese) bei 60–240 Sek. Belastung ab.<br>• <strong>L-Citrullin:</strong> Steigert Stickstoffmonoxid (NO), weitet Gefäße und erzeugt Muskelpump.</p>",
    tags: [
      "glossar",
      "koffein",
      "beta-alanin",
      "citrullin",
      "pump",
      "booster",
      "no",
    ],
  },
  {
    q: "Glossar: Was ist der Unterschied zwischen Whey und Casein?",
    a: "<p><strong>Milchproteine:</strong><br>• <strong>Whey (Molkeprotein):</strong> Extrem schnelle Verdauung, hoher Leucingehalt (ideal nach dem Training).<br>• <strong>Casein (Mizellares Kasein):</strong> Langsame Verdauung mit konstanter Aminosäurenabgabe über 6–8 Stunden (ideal vor dem Schlafen).</p>",
    tags: [
      "glossar",
      "whey",
      "casein",
      "proteinpulver",
      "molke",
      "eiweißshake",
    ],
  },
  {
    q: "Glossar: Was bewirken Omega-3, Vitamin D3/K2 und ZMA?",
    a: "<p><strong>Health-Supplements:</strong><br>• <strong>Omega-3 (EPA/DHA):</strong> Dämpft stille Entzündungen, schützt Gelenke und fördert Muskelaufbau.<br>• <strong>Vitamin D3 & K2:</strong> Essenziell für Knochendichte, Testosteron und Immunsystem.<br>• <strong>ZMA (Zink, Magnesium, B6):</strong> Unterstützt Regeneration, Enzymfunktionen und Schlafqualität.</p>",
    tags: [
      "glossar",
      "omega 3",
      "vitamin d3",
      "k2",
      "zma",
      "magnesium",
      "zink",
      "gesundheit",
    ],
  },

  // --- KATEGORIE 11: REGENERATION, ZNS, SCHLAF & HORMONE ---
  {
    q: "Glossar: Was bedeuten ZNS-Ermüdung, DOMS und Superkompensation?",
    a: "<p><strong>Erholung & Anpassung:</strong><br>• <strong>ZNS-Ermüdung:</strong> Erschöpfung der neuronalen Signalweiterleitung von Gehirn und Rückenmark.<br>• <strong>DOMS:</strong> Der verzögerte Muskelkater (Höhepunkt nach 24–48h).<br>• <strong>Superkompensation:</strong> Die biologische Anpassung, bei der das Leistungsniveau nach vollständiger Erholung über das Ausgangsniveau ansteigt.</p>",
    tags: [
      "glossar",
      "zns",
      "doms",
      "muskelkater",
      "superkompensation",
      "regeneration",
    ],
  },
  {
    q: "Glossar: Was ist der Unterschied zwischen Cortisol, Testosteron und HGH?",
    a: "<p><strong>Schlüsselhormone:</strong><br>• <strong>Cortisol:</strong> Primäres kataboles Stresshormon (hemmt bei chronischem Hochstand den Aufbau).<br>• <strong>Testosteron:</strong> Primäres anaboles Hormon für Muskelproteinsynthese und Kraft.<br>• <strong>HGH (Wachstumshormon):</strong> Steuert Gewebereparatur und Fettverbrennung vorwiegend im Tiefschlaf.</p>",
    tags: [
      "glossar",
      "cortisol",
      "testosteron",
      "hgh",
      "wachstumshormon",
      "hormone",
    ],
  },
  {
    q: "Glossar: Parasympathikus vs. Sympathikus & Herzratenvariabilität (HRV)",
    a: "<p><strong>Vegetatives Nervensystem:</strong><br>• <strong>Sympathikus:</strong> 'Fight or Flight' (Leistung & Stress im Workout).<br>• <strong>Parasympathikus:</strong> 'Rest & Digest' (Regeneration & Muskelaufbau).<br>• <strong>HRV (Herzratenvariabilität):</strong> Hohe HRV signalisiert Erholung/Parasympathikus-Dominanz; niedrige HRV deutet auf ZNS-Ermüdung hin.</p>",
    tags: [
      "glossar",
      "parasympathikus",
      "sympathikus",
      "hrv",
      "herzratenvariabilität",
      "schlaf",
    ],
  },

  // --- KATEGORIE 12: GYM-SLANG, SZENEBEGRIFFE & MINDSET ---
  {
    q: "Glossar: Was bedeuten Natty vs. Enhanced, PR und Spotter?",
    a: "<p><strong>Gym-Slang:</strong><br>• <strong>Natty:</strong> Athlet ohne anabole Steroide oder Doping.<br>• <strong>Enhanced:</strong> Athlet, der leistungssteigernde Substanzen nutzt.<br>• <strong>PR / PB:</strong> Personal Record / Personal Best (persönliche Bestleistung).<br>• <strong>Spotter:</strong> Trainingspartner, der bei schweren Sätzen absichert.</p>",
    tags: ["glossar", "natty", "enhanced", "pr", "pb", "spotter", "slang"],
  },
  {
    q: "Glossar: Was bedeuten Shredded, Vaskularität, Ego-Lifting & Bro-Split?",
    a: "<p><strong>Gym-Begriffe:</strong><br>• <strong>Shredded / Ripped:</strong> Extrem niedriger Körperfettanteil mit sichtbaren Faserungen.<br>• <strong>Vaskularität:</strong> Sichtbare Adern auf der Muskulatur.<br>• <strong>Ego-Lifting:</strong> Zu viel Gewicht mit abgefälschter Form.<br>• <strong>Bro-Split:</strong> Split, bei dem jeder Muskel nur 1x pro Woche mit extrem vielen Sätzen trainiert wird.</p>",
    tags: [
      "glossar",
      "shredded",
      "ripped",
      "vaskularität",
      "ego-lifting",
      "bro-split",
    ],
  },
  {
    q: "Glossar: Was bedeutet Adhärenz (Compliance)?",
    a: "<p><strong>Adhärenz & Compliance:</strong> Die Disziplin und Beständigkeit, einen Trainings- und Ernährungsplan über Monate und Jahre konsequent durchzuziehen. Der wichtigste Erfolgsfaktor im Fitnesssport.</p>",
    tags: [
      "glossar",
      "adhärenz",
      "compliance",
      "kontinuität",
      "disziplin",
      "mindset",
    ],
  },

  // ========================================================================
  // 2. ÜBUNGSKATALOG – TEIL A: OBERKÖRPER & ARME
  // ========================================================================

  // --- 1. BRUSTMUSKULATUR (PECTORALIS MAJOR & MINOR) ---
  {
    q: "Übung: Flachbankdrücken mit Langhantel (Barbell Flat Bench Press)",
    a: "<p><strong>Flachbankdrücken mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamte Brust (Pars sternocostalis), Trizeps, vordere Schulter.</li><li><strong>Equipment:</strong> Langhantel, Flachbank, Rack.</li><li><strong>Ausführung:</strong> Schulterblätter zusammen- und nach unten ziehen (Retraktion/Depression), Füße fest in den Boden drücken. Hantel auf Höhe des unteren Brustbeins kontrolliert ablassen, Ellbogen im ca. 45–75°-Winkel zum Körper führen, explosiv hochdrücken ohne die Schultern nach vorne zu schieben.</li></ul>",
    tags: [
      "brust",
      "langhantel",
      "bankdrücken",
      "bench press",
      "flachbank",
      "druckübung",
      "grundübung",
    ],
  },
  {
    q: "Übung: Schrägbankdrücken mit Langhantel (Incline Barbell Bench Press)",
    a: "<p><strong>Schrägbankdrücken mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brust (Pars clavicularis), vordere Schulter, Trizeps.</li><li><strong>Equipment:</strong> Langhantel, Schrägbank (ca. 30°-Neigung).</li><li><strong>Ausführung:</strong> Hantel kontrolliert zum oberen Brustbein/Schlüsselbeinbereich absenken, Ellbogen leicht einstellen und kraftvoll nach oben-hinten drücken.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "schrägbankdrücken",
      "incline bench",
      "langhantel",
      "druckübung",
    ],
  },
  {
    q: "Übung: Negativbankdrücken mit Langhantel (Decline Barbell Bench Press)",
    a: "<p><strong>Negativbankdrücken mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere Brustmuskulatur, Trizeps.</li><li><strong>Equipment:</strong> Langhantel, Negativbank (ca. 15–30° Gefälle).</li><li><strong>Ausführung:</strong> Beine fest arretieren. Stange zum unteren Rippenbogen absenken und senkrecht nach oben drücken. Kürzere ROM, schont oft die vordere Schulterkapsel.</li></ul>",
    tags: [
      "brust",
      "untere brust",
      "negativbankdrücken",
      "decline bench",
      "langhantel",
    ],
  },
  {
    q: "Übung: Flachbankdrücken mit Kurzhanteln (Dumbbell Flat Bench Press)",
    a: "<p><strong>Flachbankdrücken mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Pectoralis Major, Trizeps, Stabilisatoren.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Flachbank.</li><li><strong>Ausführung:</strong> Kurzhanteln im leichten Schrägwinkel (Pfeilform) halten, tief absenken für maximale Dehnung der Brustfasern, in einer leichten Bogenkurve über der Brust zusammenführen.</li></ul>",
    tags: [
      "brust",
      "kurzhantel",
      "bankdrücken",
      "dumbbell bench press",
      "flachbank",
    ],
  },
  {
    q: "Übung: Schrägbankdrücken mit Kurzhanteln (Incline Dumbbell Press)",
    a: "<p><strong>Schrägbankdrücken mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brust (Pars clavicularis).</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Schrägbank (15–30° Neigung).</li><li><strong>Ausführung:</strong> Bank nicht zu steil einstellen (vermeidet zu viel vordere Schulter). Tiefe Dehnung am Umkehrpunkt mitnehmen und kontrolliert nach oben zusammenführen.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "kurzhantel",
      "incline dumbbell press",
      "schrägbank",
    ],
  },
  {
    q: "Übung: Negativbankdrücken mit Kurzhanteln (Decline Dumbbell Press)",
    a: "<p><strong>Negativbankdrücken mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere Brustfasern.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Negativbank.</li><li><strong>Ausführung:</strong> Kurzhanteln kontrolliert seitlich der unteren Brust absenken und senkrecht hochdrücken.</li></ul>",
    tags: [
      "brust",
      "untere brust",
      "kurzhantel",
      "decline dumbbell",
      "negativbank",
    ],
  },
  {
    q: "Übung: Fliegende mit Kurzhanteln / Flachbank (Flat Dumbbell Flys)",
    a: "<p><strong>Fliegende mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Pectoralis Major (maximaler Dehnungsfokus).</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Flachbank.</li><li><strong>Ausführung:</strong> Ellbogen leicht gebeugt und fixiert halten. Arme weit zur Seite öffnen, bis eine tiefe Dehnung in der Brust spürbar ist, dann über die Brust adduzieren (Gedanke: 'Baum umarmen').</li></ul>",
    tags: ["brust", "fliegende", "flys", "kurzhantel", "dehnung", "isolation"],
  },
  {
    q: "Übung: Schrägbank-Fliegende mit Kurzhanteln (Incline Dumbbell Flys)",
    a: "<p><strong>Schrägbank-Fliegende mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brustfasern im Stretch.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Schrägbank (30°).</li><li><strong>Ausführung:</strong> Arme seitlich absenken, Dehnung in der oberen Brust spüren und in einem weiten Bogen wieder über dem oberen Brustbein schließen.</li></ul>",
    tags: ["brust", "obere brust", "incline flys", "fliegende", "kurzhantel"],
  },
  {
    q: "Übung: Kurzhantel-Überzüge (Dumbbell Pullover)",
    a: "<p><strong>Kurzhantel-Überzüge:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere/mittlere Brust, Serratus Anterior, Latissimus.</li><li><strong>Equipment:</strong> 1 Kurzhantel, Flachbank (quer oder längs).</li><li><strong>Ausführung:</strong> Mit beiden Händen die innere Hantelscheibe greifen, Hantel mit leicht gebeugten Ellbogen im weiten Bogen hinter den Kopf absenken, tief einatmen und über Brust-/Serratus-Spannung zurückführen.</li></ul>",
    tags: [
      "brust",
      "überzüge",
      "pullover",
      "kurzhantel",
      "serratus",
      "latissimus",
    ],
  },
  {
    q: "Übung: Brustpresse sitzend (Chest Press Machine)",
    a: "<p><strong>Brustpresse sitzend:</strong></p><ul><li><strong>Zielmuskel:</strong> Pectoralis Major, Trizeps.</li><li><strong>Equipment:</strong> Steck- oder Scheibenbeladene Brustpresse.</li><li><strong>Ausführung:</strong> Sitzhöhe so einstellen, dass die Griffe auf mittlerer bis unterer Brusthöhe liegen. Rücken fest ins Polster drücken, Schultern hinten fixieren und Griffe nach vorn drücken.</li></ul>",
    tags: [
      "brust",
      "brustpresse",
      "maschine",
      "chest press",
      "geführte maschine",
    ],
  },
  {
    q: "Übung: Schrägbank-Brustpresse an Maschine (Incline Chest Press Machine)",
    a: "<p><strong>Schrägbank-Brustpresse an Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brustfasern.</li><li><strong>Equipment:</strong> Incline Chest Press Machine (z. B. Hammer Strength).</li><li><strong>Ausführung:</strong> Sitz so wählen, dass die Druckbahn schräg nach oben verläuft. Maximale Dehnung am Start mitnehmen und bis kurz vor den Gelenklockout drücken.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "incline press maschine",
      "hammer strength",
      "brustpresse",
    ],
  },
  {
    q: "Übung: Multipresse Bankdrücken / Flachbank (Smith Machine Flat Bench Press)",
    a: "<p><strong>Multipresse Bankdrücken (Flachbank):</strong></p><ul><li><strong>Zielmuskel:</strong> Mittlere Brust, Trizeps.</li><li><strong>Equipment:</strong> Smith Machine (Multipresse), Flachbank.</li><li><strong>Ausführung:</strong> Bank exakt unter der Führungsschiene ausrichten. Erlaubt sicheres Ausbelasten bis zum absoluten Muskelversagen ohne Balanceaufwand.</li></ul>",
    tags: ["brust", "multipresse", "smith machine", "bankdrücken", "flachbank"],
  },
  {
    q: "Übung: Multipresse Schrägbankdrücken (Smith Machine Incline Press)",
    a: "<p><strong>Multipresse Schrägbankdrücken:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brust.</li><li><strong>Equipment:</strong> Multipresse, Schrägbank (30°).</li><li><strong>Ausführung:</strong> Stange auf Schlüsselbeinhöhe absenken und auf fester Bahn explosiv nach oben drücken.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "multipresse",
      "smith machine",
      "schrägbankdrücken",
    ],
  },
  {
    q: "Übung: Multipresse Negativbankdrücken (Smith Machine Decline Press)",
    a: "<p><strong>Multipresse Negativbankdrücken:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere Brust.</li><li><strong>Equipment:</strong> Multipresse, Negativbank.</li><li><strong>Ausführung:</strong> Feste Führungsschiene auf die untere Brust ausrichten und kontrolliert drücken.</li></ul>",
    tags: [
      "brust",
      "untere brust",
      "multipresse",
      "smith machine",
      "negativbank",
    ],
  },
  {
    q: "Übung: Butterfly / Pec Deck Machine (Flys an der Maschine)",
    a: "<p><strong>Butterfly / Pec Deck Machine:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamte Brust (Peak-Kontraktion und konstante Spannung).</li><li><strong>Equipment:</strong> Pec Deck / Butterfly-Maschine.</li><li><strong>Ausführung:</strong> Ellbogen leicht angewinkelt auf Polster- oder Griffhöhe. Arme vor dem Körper maximal zusammenführen und für 1 Sekunde hart kontrahieren.</li></ul>",
    tags: [
      "brust",
      "butterfly",
      "pec deck",
      "adduktion",
      "maschine",
      "isolation",
    ],
  },
  {
    q: "Übung: Cable Crossover von oben nach unten (High-to-Low Cable Flys)",
    a: "<p><strong>Cable Crossover von oben nach unten:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere und sternale Brustfasern.</li><li><strong>Equipment:</strong> Doppelter Kabelzug, 2 D-Griffe (oben eingehängt).</li><li><strong>Ausführung:</strong> Leichter Ausfallschritt nach vorn, Oberkörper leicht vorgebeugt. Griffe im weiten Bogen nach unten und vor das Becken zusammenführen (Hände überkreuzen für maximale Kontraktion).</li></ul>",
    tags: [
      "brust",
      "untere brust",
      "cable crossover",
      "high to low",
      "kabelzug",
      "flys",
    ],
  },
  {
    q: "Übung: Cable Crossover auf Brusthöhe (Mid-Pulley Cable Flys)",
    a: "<p><strong>Cable Crossover auf Brusthöhe:</strong></p><ul><li><strong>Zielmuskel:</strong> Mittlere Brustfasern.</li><li><strong>Equipment:</strong> Doppelter Kabelzug auf Brusthöhe.</li><li><strong>Ausführung:</strong> Griffe waagerecht vor der Brust zusammenführen. Konstante Spannung auch in der maximalen Kontraktionsphase.</li></ul>",
    tags: ["brust", "cable crossover", "mittlere brust", "kabelzug", "flys"],
  },
  {
    q: "Übung: Cable Crossover von unten nach oben (Low-to-High Cable Flys)",
    a: "<p><strong>Cable Crossover von unten nach oben:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brustfasern (Pars clavicularis).</li><li><strong>Equipment:</strong> Doppelter Kabelzug, Griffe ganz unten eingehängt.</li><li><strong>Ausführung:</strong> Aufrechter Stand, Arme in einer Aufwärtskurve nach vorne-oben vor das Kinn/Schlüsselbein führen.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "cable crossover",
      "low to high",
      "kabelzug",
    ],
  },
  {
    q: "Übung: Flachbank-Flys am Kabelzug (Cable Bench Flys)",
    a: "<p><strong>Flachbank-Flys am Kabelzug:</strong></p><ul><li><strong>Zielmuskel:</strong> Brustmuskel (hohe Dehnungsspannung).</li><li><strong>Equipment:</strong> Flachbank zwischen zwei tiefen Kabelzügen.</li><li><strong>Ausführung:</strong> Kombiniert die Dehnung von Kurzhantel-Flys mit dem kontinuierlichen Zugwiderstand des Kabels über die gesamte ROM.</li></ul>",
    tags: ["brust", "kabelzug", "cable bench flys", "flachbank", "dehnung"],
  },
  {
    q: "Übung: Schrägbankdrücken am Kabelzug (Incline Cable Press)",
    a: "<p><strong>Schrägbankdrücken am Kabelzug:</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brust.</li><li><strong>Equipment:</strong> Schrägbank zwischen zwei tief eingestellten Kabelzügen.</li><li><strong>Ausführung:</strong> Griffe greifen und schräg nach oben-vorne zusammenführen.</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "kabelzug",
      "incline cable press",
      "schrägbank",
    ],
  },
  {
    q: "Übung: Dips mit Brustfokus (Chest Dips)",
    a: "<p><strong>Dips mit Brustfokus:</strong></p><ul><li><strong>Zielmuskel:</strong> Untere/mittlere Brust, Trizeps, vordere Schulter.</li><li><strong>Equipment:</strong> Dip-Barren (breiter Griff).</li><li><strong>Ausführung:</strong> Oberkörper deutlich nach vorne neigen, Kinn auf die Brust, Ellbogen leicht nach außen ausstellen. Tief absenken für maximale Brustdehnung und kraftvoll hochdrücken.</li></ul>",
    tags: [
      "brust",
      "dips",
      "chest dips",
      "barren",
      "bodyweight",
      "calisthenics",
    ],
  },
  {
    q: "Übung: Klassische Liegestütze (Standard Push-ups)",
    a: "<p><strong>Klassische Liegestütze:</strong></p><ul><li><strong>Zielmuskel:</strong> Pectoralis Major, Trizeps, Core.</li><li><strong>Equipment:</strong> Eigengewicht.</li><li><strong>Ausführung:</strong> Hände schulterbreit, Körper bildet ein starres Brett. Brust berührt fast den Boden, oben Schulterblätter leicht auseinanderdrücken (Protraktion).</li></ul>",
    tags: [
      "brust",
      "liegestütze",
      "push-ups",
      "bodyweight",
      "calisthenics",
      "core",
    ],
  },
  {
    q: "Übung: Erhöhte Liegestütze / Füsse erhöht (Decline Push-ups)",
    a: "<p><strong>Erhöhte Liegestütze (Füße erhöht):</strong></p><ul><li><strong>Zielmuskel:</strong> Obere Brust, vordere Schulter.</li><li><strong>Equipment:</strong> Flachbank oder Box für die Füße.</li><li><strong>Ausführung:</strong> Füße auf die Erhöhung legen, Liegestütze ausführen (verschiebt den Lastschwerpunkt nach oben).</li></ul>",
    tags: [
      "brust",
      "obere brust",
      "liegestütze",
      "decline push-ups",
      "bodyweight",
    ],
  },
  {
    q: "Übung: Defizit-Liegestütze (Deficit Push-ups / Push-up Bars)",
    a: "<p><strong>Defizit-Liegestütze:</strong></p><ul><li><strong>Zielmuskel:</strong> Brust (erweiterte ROM im Stretch).</li><li><strong>Equipment:</strong> Liegestützgriffe oder Hantelscheiben unter den Händen.</li><li><strong>Ausführung:</strong> Erlaubt ein tieferes Absenken der Brust unter Handniveau für extremen Dehnungsreiz.</li></ul>",
    tags: ["brust", "defizit liegestütze", "push-up bars", "dehnung", "rom"],
  },

  // --- 2. RÜCKEN – VERTIKALER ZUG (LATISSIMUS DORSI) ---
  {
    q: "Übung: Klimmzüge im Obergriff (Pull-ups / Wide Grip Pull-ups)",
    a: "<p><strong>Klimmzüge im Obergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus Dorsi, Teres Major, unterer Trapez.</li><li><strong>Equipment:</strong> Klimmzugstange.</li><li><strong>Ausführung:</strong> Etwas mehr als schulterbreiter Obergriff. Aus dem vollen Hang Schulterblätter nach unten ziehen, Brust zur Stange führen, Ellbogen aktiv nach unten in die Hosentaschen ziehen.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "klimmzüge",
      "pull-ups",
      "obergriff",
      "bodyweight",
    ],
  },
  {
    q: "Übung: Klimmzüge im Untergriff (Chin-ups)",
    a: "<p><strong>Klimmzüge im Untergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus, Bizeps, Brachialis.</li><li><strong>Equipment:</strong> Klimmzugstange.</li><li><strong>Ausführung:</strong> Schulterbreiter Untergriff (Handflächen zum Gesicht). Höhere Bizepsaktivierung und sehr großer Bewegungsumfang für den Latissimus.</li></ul>",
    tags: [
      "rücken",
      "chin-ups",
      "untergriff",
      "klimmzüge",
      "bizeps",
      "latissimus",
    ],
  },
  {
    q: "Übung: Klimmzüge im neutralen Griff (Neutral Grip Pull-ups / Parallelgriff)",
    a: "<p><strong>Klimmzüge im neutralen Griff:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus, Brachioradialis, Schulterschonend.</li><li><strong>Equipment:</strong> Klimmzugstange mit parallelen Griffen.</li><li><strong>Ausführung:</strong> Handflächen zeigen zueinander. Sehr gelenkschonend für Handgelenke und Schultern bei voller ROM.</li></ul>",
    tags: [
      "rücken",
      "klimmzüge",
      "neutraler griff",
      "parallelgriff",
      "latissimus",
    ],
  },
  {
    q: "Übung: Latzug zur Brust im breiten Obergriff (Wide-Grip Lat Pulldown)",
    a: "<p><strong>Latzug zur Brust im breiten Obergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer/äußerer Latissimus, Teres Major.</li><li><strong>Equipment:</strong> Latzugstation, Latzugstange.</li><li><strong>Ausführung:</strong> Oberschenkelpolster fest arretieren. Leichtes Hohlkreuz/Brust raus, Stange kontrolliert zum oberen Brustbein ziehen, Ellbogen nach unten-hinten führen.</li></ul>",
    tags: [
      "rücken",
      "latzug",
      "lat pulldown",
      "latissimus",
      "breiter griff",
      "obergriff",
    ],
  },
  {
    q: "Übung: Latzug im engen V-Griff (Close-Grip V-Bar Pulldown)",
    a: "<p><strong>Latzug im engen V-Griff:</strong></p><ul><li><strong>Zielmuskel:</strong> Unterer Latissimus, Bizeps.</li><li><strong>Equipment:</strong> Latzugstation, V-Griff.</li><li><strong>Ausführung:</strong> Aufrechter Zug zum Brustbein. Erlaubt hohe Lasten und einen sehr langen Arbeitsweg für die Latissimusfasern.</li></ul>",
    tags: ["rücken", "latzug", "v-griff", "enger griff", "latissimus"],
  },
  {
    q: "Übung: Latzug im Untergriff (Reverse-Grip Lat Pulldown)",
    a: "<p><strong>Latzug im Untergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Unterer Latissimus, Bizeps.</li><li><strong>Equipment:</strong> Latzugstange im schulterbreiten Untergriff.</li><li><strong>Ausführung:</strong> Stange dicht am Körper vorbei zum unteren Brustansatz ziehen.</li></ul>",
    tags: ["rücken", "latzug", "untergriff", "reverse grip", "latissimus"],
  },
  {
    q: "Übung: Einarmiger Latzug am Kabel (Unilateral Cable Lat Pulldown)",
    a: "<p><strong>Einarmiger Latzug am Kabel:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus (gezielte Isolation & Faserverlauf).</li><li><strong>Equipment:</strong> Hoher Kabelzug, Einzelgriff.</li><li><strong>Ausführung:</strong> Kniend oder sitzend. Leichte Seitneigung des Rumpfes zum Arbeitsarm, Ellbogen eng am Körper direkt in die Hüfte ziehen für maximale Kontraktion.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "kabelzug",
      "einarmig",
      "unilateral",
      "latzug",
    ],
  },
  {
    q: "Übung: Überzüge am Kabelzug mit Seil / gerader Stange (Straight-Arm Cable Pullover)",
    a: "<p><strong>Überzüge am Kabelzug (Straight-Arm Pullover):</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus Dorsi (isolierte Dehnung und Kontraktion), Teres Major, Serratus.</li><li><strong>Equipment:</strong> Hoher Kabelzug, Seil oder Latzugstange.</li><li><strong>Ausführung:</strong> Leicht vorgebeugter Stand, Arme fast gestreckt (minimal gebeugt fixiert). Stange im weiten Bogen aus voller Überkopfdehnung nach unten zu den Oberschenkeln drücken.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "überzüge",
      "straight-arm",
      "kabelzug",
      "pullover",
    ],
  },
  {
    q: "Übung: Latzug-Maschine konvergierend (Plate-Loaded Iso-Lateral Pulldown)",
    a: "<p><strong>Latzug-Maschine konvergierend:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus.</li><li><strong>Equipment:</strong> Konvergierende Latzug-Maschine (z. B. Hammer Strength).</li><li><strong>Ausführung:</strong> Griffe greifen, Sitzhöhe justieren. Die Griffe bewegen sich auf einer anatomisch optimierten Kreisbahn nach unten-außen.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "hammer strength",
      "maschine",
      "konvergierend",
      "latzug",
    ],
  },
  {
    q: "Übung: Überzug-Maschine (Nautilus Pullover Machine)",
    a: "<p><strong>Überzug-Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus Dorsi (vollständige Dehnung bis Maximalkontraktion ohne Armlimitierung).</li><li><strong>Equipment:</strong> Pullover-Maschine mit Ellbogenpolstern.</li><li><strong>Ausführung:</strong> Ellbogen auf die Polster legen, Hebel über die Brust nach unten drücken. Schaltet den Bizeps als limitierenden Faktor komplett aus.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "überzug-maschine",
      "pullover machine",
      "nautilus",
      "isolation",
    ],
  },
  {
    q: "Übung: Ilio-Lat Row (Kabelrudern in die Beckenschaufel)",
    a: "<p><strong>Ilio-Lat Row am Kabelzug:</strong></p><ul><li><strong>Zielmuskel:</strong> Iliakale Fasern des Latissimus.</li><li><strong>Equipment:</strong> Kabelzug, Bank oder Kniestand, Einzelgriff.</li><li><strong>Ausführung:</strong> Ellenbogen eng am Körper exakt bis zum Beckenkamm führen (nicht weiter nach hinten ziehen), um den Latissimus maximal zu isolieren.</li></ul>",
    tags: [
      "rücken",
      "latissimus",
      "ilio-lat row",
      "kabelzug",
      "science-based",
      "beckenkamm",
    ],
  },

  // --- 3. RÜCKEN – HORIZONTALER ZUG, DICHTE & TRAPEZ ---
  {
    q: "Übung: Langhantelrudern vorgebeugt im Obergriff (Barbell Bent-Over Row)",
    a: "<p><strong>Langhantelrudern vorgebeugt im Obergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Rücken (Trapez, Rhomboiden, hintere Schulter) und Latissimus.</li><li><strong>Equipment:</strong> Langhantel.</li><li><strong>Ausführung:</strong> Oberkörper ca. 45° nach vorne beugen, Rücken gerade fixieren. Stange knapp unter die Brust ziehen, Ellbogen ca. 45–60° ausstellen, Schulterblätter hinten fest zusammenziehen.</li></ul>",
    tags: [
      "rücken",
      "langhantelrudern",
      "bent-over row",
      "oberer rücken",
      "trapez",
      "rhomboiden",
    ],
  },
  {
    q: "Übung: Langhantelrudern im Untergriff / Yates Row (Reverse-Grip Barbell Row)",
    a: "<p><strong>Langhantelrudern im Untergriff (Yates Row):</strong></p><ul><li><strong>Zielmuskel:</strong> Unterer Latissimus, Bizeps, Rückenstrecker.</li><li><strong>Equipment:</strong> Langhantel.</li><li><strong>Ausführung:</strong> Schulterbreiter Untergriff, Oberkörper etwas aufrechter (ca. 60–70°). Stange eng an den Oberschenkeln zum Bauchnabel ziehen.</li></ul>",
    tags: [
      "rücken",
      "yates row",
      "untergriff",
      "langhantelrudern",
      "latissimus",
      "bizeps",
    ],
  },
  {
    q: "Übung: Pendlay Row (Strenges Rudern vom Boden)",
    a: "<p><strong>Pendlay Row:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter oberer Rücken, Latissimus, Explosivkraft.</li><li><strong>Equipment:</strong> Langhantel, Bumper Plates.</li><li><strong>Ausführung:</strong> Oberkörper parallel zum Boden (90°). Jede Wiederholung startet explosiv und ohne Schwung vom Boden, danach wird das Gewicht wieder komplett abgelegt.</li></ul>",
    tags: [
      "rücken",
      "pendlay row",
      "langhantel",
      "explosivkraft",
      "oberer rücken",
    ],
  },
  {
    q: "Übung: T-Bar Rudern / T-Hantel-Rudern (T-Bar Row)",
    a: "<p><strong>T-Bar Rudern (T-Hantel):</strong></p><ul><li><strong>Zielmuskel:</strong> Mittlerer Rücken, Rhomboiden, Latissimus.</li><li><strong>Equipment:</strong> T-Bar-Station oder Landmine-Aufsatz mit V-Griff.</li><li><strong>Ausführung:</strong> Über der Stange stehen, Rücken gerade. Gewicht zum Bauch ziehen, am oberen Punkt kurz halten und kontrolliert absenken.</li></ul>",
    tags: ["rücken", "t-bar row", "t-hantel", "landmine", "mittlerer rücken"],
  },
  {
    q: "Übung: Einarmiges Kurzhantelrudern abgestützt auf der Bank (One-Arm Dumbbell Row)",
    a: "<p><strong>Einarmiges Kurzhantelrudern:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus, Rhomboiden, hintere Schulter.</li><li><strong>Equipment:</strong> 1 Kurzhantel, Flachbank.</li><li><strong>Ausführung:</strong> Mit Knie und Hand auf der Bank abstützen. Hantel im Bogen aus voller Dehnung nach hinten in Richtung Hüfte ziehen (Ellbogen eng am Körper führen).</li></ul>",
    tags: [
      "rücken",
      "kurzhantelrudern",
      "einarmig",
      "latissimus",
      "kurzhantel",
    ],
  },
  {
    q: "Übung: Kroc Rows (Schweres Kurzhantelrudern mit Körpereinsatz)",
    a: "<p><strong>Kroc Rows:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter oberer Rücken, Griffkraft, Latissimus.</li><li><strong>Equipment:</strong> Sehr schwere Kurzhantel, Bank oder Rack.</li><li><strong>Ausführung:</strong> Hohe Wiederholungszahlen (15–25 Reps) mit maximalem Gewicht und leichtem dynamischen Hüftimpuls am Satzende.</li></ul>",
    tags: ["rücken", "kroc rows", "kurzhantel", "griffkraft", "power"],
  },
  {
    q: "Übung: Seal Row (Brustgestütztes Rudern auf hoher Flachbank)",
    a: "<p><strong>Seal Row:</strong></p><ul><li><strong>Zielmuskel:</strong> Mittlerer und oberer Rücken (vollkommen isoliert).</li><li><strong>Equipment:</strong> Spezielle erhöhte Bank, Langhantel oder 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Flach auf dem Bauch liegend. Eliminiert jeglichen Schwung und entlastet den unteren Rücken zu 100 %.</li></ul>",
    tags: ["rücken", "seal row", "brustgestützt", "oberer rücken", "isolation"],
  },
  {
    q: "Übung: Brustgestütztes T-Bar Rudern (Chest-Supported T-Bar Row Machine)",
    a: "<p><strong>Brustgestütztes T-Bar Rudern:</strong></p><ul><li><strong>Zielmuskel:</strong> Trapez, Rhomboiden, Teres Major.</li><li><strong>Equipment:</strong> T-Bar-Maschine mit Brustpolster.</li><li><strong>Ausführung:</strong> Brust gegen das Polster drücken. Breiter Griff für oberen Rücken/Dichte, enger Griff für Latissimus.</li></ul>",
    tags: ["rücken", "t-bar maschine", "brustgestützt", "trapez", "rhomboiden"],
  },
  {
    q: "Übung: Meadows Row (Landmine-Rudern einarmig)",
    a: "<p><strong>Meadows Row:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Rücken, Teres Major, Latissimus.</li><li><strong>Equipment:</strong> Landmine mit Langhantel.</li><li><strong>Ausführung:</strong> Quer zur Stange stehend mit weitem Ellenbogenzug das dicke Hantelende nach oben ziehen.</li></ul>",
    tags: ["rücken", "meadows row", "landmine", "teres major", "oberer rücken"],
  },
  {
    q: "Übung: Kabelrudern sitzend im engen Parallelgriff (Seated Cable Row - Neutral Grip)",
    a: "<p><strong>Kabelrudern sitzend (enger Parallelgriff):</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus, mittlerer Rücken.</li><li><strong>Equipment:</strong> Kabelruderstation, V-Griff.</li><li><strong>Ausführung:</strong> Aufrechter Sitz, Beine leicht gebeugt. Griff zum unteren Bauch ziehen, Brust rausstrecken, Schulterblätter zusammenführen, beim Nachgeben die Dehnung zulassen.</li></ul>",
    tags: ["rücken", "kabelrudern", "v-griff", "latissimus", "kabelzug"],
  },
  {
    q: "Übung: Kabelrudern sitzend im breiten Obergriff (Wide Grip Seated Cable Row)",
    a: "<p><strong>Kabelrudern sitzend (breiter Obergriff):</strong></p><ul><li><strong>Zielmuskel:</strong> Trapez (Pars transversa), Rhomboiden, hintere Deltas.</li><li><strong>Equipment:</strong> Kabelzug, breite Latzugstange.</li><li><strong>Ausführung:</strong> Stange auf Brusthöhe ziehen, Ellbogen weit nach außen führen (90° zum Rumpf) für maximale Rückendichte.</li></ul>",
    tags: ["rücken", "kabelrudern", "breiter griff", "trapez", "rückendichte"],
  },
  {
    q: "Übung: Einarmiges Kabelrudern mit Rotation (Single-Arm Cable Row)",
    a: "<p><strong>Einarmiges Kabelrudern mit Rotation:</strong></p><ul><li><strong>Zielmuskel:</strong> Latissimus (tiefe Kontraktion).</li><li><strong>Equipment:</strong> Kabelzug, Einzelgriff.</li><li><strong>Ausführung:</strong> Aus gestrecktem Arm mit leicht ausgedrehtem Rumpf das Kabel zur Hüfte ziehen und dabei den Oberkörper gerade aufrichten.</li></ul>",
    tags: ["rücken", "kabelrudern", "einarmig", "unilateral", "latissimus"],
  },
  {
    q: "Übung: Ruder-Maschine isolateral (Plate-Loaded Row Machine)",
    a: "<p><strong>Ruder-Maschine isolateral:</strong></p><ul><li><strong>Zielmuskel:</strong> Rückenbreite & Rückendichte.</li><li><strong>Equipment:</strong> Iso-Lateral Row Machine (z. B. Gym80 / Hammer Strength).</li><li><strong>Ausführung:</strong> Einzeln oder beidarmig ziehen; folgt dem natürlichen Bewegungspfad der Schulterblätter.</li></ul>",
    tags: [
      "rücken",
      "ruder-maschine",
      "hammer strength",
      "isolateral",
      "maschine",
    ],
  },
  {
    q: "Übung: Langhantel-Shrugs (Barbell Shrugs / Nackenziehen)",
    a: "<p><strong>Langhantel-Shrugs:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Trapezius (Pars descendens).</li><li><strong>Equipment:</strong> Langhantel oder Smith Machine.</li><li><strong>Ausführung:</strong> Schulterbreiter Griff, aufrechter Stand. Schultern rein vertikal nach oben in Richtung Ohren ziehen, oben 1–2 Sekunden halten, kontrolliert absenken. Keine kreisenden Bewegungen!</li></ul>",
    tags: ["nacken", "trapez", "shrugs", "langhantel", "nackenziehen"],
  },
  {
    q: "Übung: Kurzhantel-Shrugs (Dumbbell Shrugs)",
    a: "<p><strong>Kurzhantel-Shrugs:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Trapez.</li><li><strong>Equipment:</strong> 2 schwere Kurzhanteln.</li><li><strong>Ausführung:</strong> Hanteln seitlich am Körper halten. Ermöglicht eine anatomisch neutrale Handhaltung für reines Heben der Schultern.</li></ul>",
    tags: ["nacken", "trapez", "shrugs", "kurzhantel", "nackenziehen"],
  },
  {
    q: "Übung: Trap-Bar-Shrugs (Hex-Bar Shrugs)",
    a: "<p><strong>Trap-Bar-Shrugs:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Trapez.</li><li><strong>Equipment:</strong> Trap Bar / Hex Bar.</li><li><strong>Ausführung:</strong> In der Hex-Bar stehend shruggem; optimale Lastverteilung ohne Reiben der Hantel an den Oberschenkeln.</li></ul>",
    tags: ["nacken", "trapez", "trap bar", "hex bar", "shrugs"],
  },

  // --- 4. SCHULTERMUSKULATUR (DELTOIDEUS) ---
  {
    q: "Übung: Military Press / Überkopfdrücken stehend (Overhead Press - OHP)",
    a: "<p><strong>Military Press / Überkopfdrücken stehend:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere Schulter, oberer Trapez, Trizeps, Rumpfstabilität.</li><li><strong>Equipment:</strong> Langhantel, Rack.</li><li><strong>Ausführung:</strong> Schulterbreiter Stand, Gesäß und Bauch fest anspannen. Hantel von den Schlüsselbeinen senkrecht über den Kopf drücken, Kopf nach dem Passieren der Stange leicht vorschieben (Lockout).</li></ul>",
    tags: [
      "schultern",
      "military press",
      "overhead press",
      "ohp",
      "langhantel",
      "vordere schulter",
    ],
  },
  {
    q: "Übung: Schulterdrücken sitzend mit Langhantel (Seated Barbell Overhead Press)",
    a: "<p><strong>Schulterdrücken sitzend mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere Schulter, Trizeps.</li><li><strong>Equipment:</strong> Langhantel, Sitzbank mit Rückenlehne, Rack.</li><li><strong>Ausführung:</strong> Schaltet Beinschwung aus und ermöglicht schwere, saubere Überkopflasten auf die vordere Schulter.</li></ul>",
    tags: [
      "schultern",
      "schulterdrücken",
      "sitzend",
      "langhantel",
      "vordere schulter",
    ],
  },
  {
    q: "Übung: Kurzhantel-Schulterdrücken sitzend (Seated Dumbbell Shoulder Press)",
    a: "<p><strong>Kurzhantel-Schulterdrücken sitzend:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere und seitliche Schulter, Trizeps.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Bank (ca. 75–85° Neigung).</li><li><strong>Ausführung:</strong> Hanteln auf Schulterhöhe starten, Ellbogen leicht nach innen gedreht (Skapuläre Ebene), nach oben zusammenführen ohne Anschlagen der Hanteln.</li></ul>",
    tags: [
      "schultern",
      "kurzhantel",
      "schulterdrücken",
      "dumbbell press",
      "vordere schulter",
    ],
  },
  {
    q: "Übung: Arnold Press",
    a: "<p><strong>Arnold Press:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Deltoideus (Vorder- und Seitenfokus).</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Bank.</li><li><strong>Ausführung:</strong> Start mit Handflächen zum Gesicht (wie beim Bizepscurl). Während des Hochdrückens die Handgelenke um 180° nach außen rotieren, oben zeigen die Handflächen nach vorn.</li></ul>",
    tags: ["schultern", "arnold press", "kurzhantel", "rotation", "deltoideus"],
  },
  {
    q: "Übung: Schulterdrücken an der Maschine (Machine Shoulder Press)",
    a: "<p><strong>Schulterdrücken an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere Schulter, Trizeps.</li><li><strong>Equipment:</strong> Steck- oder Scheiben-Schulterpresse.</li><li><strong>Ausführung:</strong> Sichere Führung für maximales Ausbelasten ohne Sturzrisiko.</li></ul>",
    tags: ["schultern", "maschine", "schulterpresse", "geführte maschine"],
  },
  {
    q: "Übung: Frontheben mit Langhantel / Kurzhanteln (Barbell / Dumbbell Front Raise)",
    a: "<p><strong>Frontheben mit Langhantel oder Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere Schulter (Pars anterior) isoliert.</li><li><strong>Equipment:</strong> Langhantel, Kurzhanteln oder Hantelscheibe.</li><li><strong>Ausführung:</strong> Mit gestreckten oder minimal gebeugten Armen das Gewicht vor dem Körper kontrolliert bis auf Augenhöhe anheben und langsam senken.</li></ul>",
    tags: [
      "schultern",
      "frontheben",
      "vordere schulter",
      "kurzhantel",
      "langhantel",
      "isolation",
    ],
  },
  {
    q: "Übung: Frontheben am Kabelzug mit Seil (Cable Front Raise)",
    a: "<p><strong>Frontheben am Kabelzug mit Seil:</strong></p><ul><li><strong>Zielmuskel:</strong> Vordere Schulter.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, Seilaufsatz zwischen den Beinen.</li><li><strong>Ausführung:</strong> Kontinuierliche Dehnungsspannung über die gesamte Hubphase.</li></ul>",
    tags: ["schultern", "frontheben", "kabelzug", "vordere schulter", "seil"],
  },
  {
    q: "Übung: Kurzhantel-Seitheben stehend (Standing Dumbbell Lateral Raise)",
    a: "<p><strong>Kurzhantel-Seitheben stehend:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter (Pars lateralis / Schulterbreite).</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Leicht vorgebeugter Oberkörper, Hanteln seitlich in der skapulären Ebene (ca. 20–30° nach vorne) anheben, bis die Oberarme parallel zum Boden stehen (Gedanke: 'Ellbogen nach außen wegschieben').</li></ul>",
    tags: [
      "schultern",
      "seitheben",
      "seitliche schulter",
      "kurzhantel",
      "lateral raise",
    ],
  },
  {
    q: "Übung: Kurzhantel-Seitheben sitzend (Seated Lateral Raise)",
    a: "<p><strong>Kurzhantel-Seitheben sitzend:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter (ohne Beinschwung).</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Flachbank.</li><li><strong>Ausführung:</strong> Schaltet das Abfälschen über die Beine komplett aus.</li></ul>",
    tags: ["schultern", "seitheben", "sitzend", "kurzhantel", "isolation"],
  },
  {
    q: "Übung: Seitheben auf der Schrägbank (Incline Lateral Raise / Leaning Lateral Raise)",
    a: "<p><strong>Seitheben auf der Schrägbank / geneigt:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter (maximaler Dehnungsfokus).</li><li><strong>Equipment:</strong> 1 Kurzhantel, Schrägbank (ca. 45–60°).</li><li><strong>Ausführung:</strong> Seitlich auf die Bank legen oder an eine Stange lehnen. Erzeugt im unteren Drittel der Bewegung bereits maximale Last auf die seitliche Schulter.</li></ul>",
    tags: [
      "schultern",
      "seitheben",
      "schrägbank",
      "leaning lateral raise",
      "dehnungsfokus",
    ],
  },
  {
    q: "Übung: Seitheben am Kabelzug hinter dem Körper (Behind-the-Back Cable Lateral Raise)",
    a: "<p><strong>Seitheben am Kabelzug hinter dem Körper:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, Einzelgriff oder Handschlaufe.</li><li><strong>Ausführung:</strong> Kabel hinter dem Gesäß führen, Arm seitlich nach oben ziehen. Konstante Spannung auch am tiefsten Punkt.</li></ul>",
    tags: [
      "schultern",
      "kabelzug",
      "seitheben",
      "behind the back",
      "seitliche schulter",
    ],
  },
  {
    q: "Übung: Seitheben am Kabelzug vor dem Körper / Ägyptisches Seitheben",
    a: "<p><strong>Seitheben am Kabelzug vor dem Körper:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter.</li><li><strong>Equipment:</strong> Kabelzug, Hand greift am Gerät vorbei.</li><li><strong>Ausführung:</strong> Seitlich vom Turm weglehnen, Arm nach außen-oben ziehen.</li></ul>",
    tags: [
      "schultern",
      "kabelzug",
      "seitheben",
      "ägyptisches seitheben",
      "cable lateral raise",
    ],
  },
  {
    q: "Übung: Seitheben an der Maschine (Machine Lateral Raise)",
    a: "<p><strong>Seitheben an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter.</li><li><strong>Equipment:</strong> Seithebemaschine mit Armpolstern.</li><li><strong>Ausführung:</strong> Polster an die Oberarme legen. Schaltet Unterarme und Griffkraft komplett aus und isoliert den Deltamuskel direkt.</li></ul>",
    tags: [
      "schultern",
      "seitheben maschine",
      "machine lateral raise",
      "seitliche schulter",
    ],
  },
  {
    q: "Übung: Y-Raises (am Kabelzug oder auf Schrägbank)",
    a: "<p><strong>Y-Raises:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche & hintere Schulter, unterer Trapezius.</li><li><strong>Equipment:</strong> Kabelzug oder 2 leichte Kurzhanteln auf Schrägbank.</li><li><strong>Ausführung:</strong> Arme in einer 45°-V-Form ('Y'-Position) nach schräg oben-außen anheben.</li></ul>",
    tags: ["schultern", "y-raises", "kabelzug", "trapez", "schrägbank"],
  },
  {
    q: "Übung: Lu Raises (180° Seitheben)",
    a: "<p><strong>Lu Raises:</strong></p><ul><li><strong>Zielmuskel:</strong> Seitliche Schulter, vordere Schulter, Trapezius.</li><li><strong>Equipment:</strong> Leichte Kurzhanteln / kleine Hantelscheiben.</li><li><strong>Ausführung:</strong> Kontrolliertes Seitheben über die volle 180°-Bewegungsbahn bis über den Kopf.</li></ul>",
    tags: ["schultern", "lu raises", "180 grad", "beweglichkeit", "trapez"],
  },
  {
    q: "Übung: Face Pulls am Kabelzug mit Seil (Cable Face Pulls)",
    a: "<p><strong>Face Pulls am Kabelzug mit Seil:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter, Außenrotatoren (Infraspinatus, Teres Minor), mittlerer/oberer Trapez.</li><li><strong>Equipment:</strong> Kabelzug auf Kopfhöhe, langes Trizepsseil.</li><li><strong>Ausführung:</strong> Seil mit Daumen nach hinten greifen. Zum Gesicht ziehen, dabei die Hände nach außen-hinten rotieren, sodass die Daumen hinter die Ohren wandern. Hervorragend für Schultergesundheit.</li></ul>",
    tags: [
      "schultern",
      "face pulls",
      "hintere schulter",
      "rotatorenmanschette",
      "kabelzug",
      "gesundheit",
    ],
  },
  {
    q: "Übung: Reverse Butterfly / Rear Delt Flys an der Maschine (Reverse Pec Deck)",
    a: "<p><strong>Reverse Butterfly / Rear Delt Flys an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter (Pars posterior), Rhomboiden.</li><li><strong>Equipment:</strong> Butterfly-Maschine rückwärts.</li><li><strong>Ausführung:</strong> Brust ans Polster drücken, Griffe neutral oder im Obergriff fassen. Arme rein horizontal nach hinten führen, ohne die Schultern nach oben zu ziehen.</li></ul>",
    tags: [
      "schultern",
      "reverse butterfly",
      "rear delt flys",
      "hintere schulter",
      "pec deck",
      "maschine",
    ],
  },
  {
    q: "Übung: Vorgebeugtes Seitheben mit Kurzhanteln (Bent-Over Rear Delt Raise)",
    a: "<p><strong>Vorgebeugtes Seitheben mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter.</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Oberkörper weit nach vorne beugen (fast parallel zum Boden). Arme seitlich nach oben führen, Fokus rein auf das Heben aus der hinteren Schulter.</li></ul>",
    tags: [
      "schultern",
      "vorgebeugtes seitheben",
      "rear delt",
      "hintere schulter",
      "kurzhantel",
    ],
  },
  {
    q: "Übung: Vorgebeugtes Seitheben auf der Schrägbank (Chest-Supported Rear Delt Raise)",
    a: "<p><strong>Vorgebeugtes Seitheben auf der Schrägbank:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Schrägbank (30–45°).</li><li><strong>Ausführung:</strong> Mit der Brust auf die Schrägbank legen. Verhindert Schwungholen aus dem unteren Rücken.</li></ul>",
    tags: [
      "schultern",
      "hintere schulter",
      "schrägbank",
      "chest-supported",
      "rear delt",
    ],
  },
  {
    q: "Übung: Hintere Schulter am Kabelzug über Kreuz (Cross-Body Rear Delt Cables)",
    a: "<p><strong>Hintere Schulter am Kabelzug über Kreuz:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter.</li><li><strong>Equipment:</strong> Doppelter Kabelzug auf Schulterhöhe ohne Griffe (am Seilende greifen).</li><li><strong>Ausführung:</strong> Rechter Arm greift linkes Kabel, linker Arm rechtes Kabel. Arme horizontal nach außen-hinten auseinanderziehen.</li></ul>",
    tags: [
      "schultern",
      "kabelzug",
      "cross-body",
      "hintere schulter",
      "über kreuz",
    ],
  },
  {
    q: "Übung: Band Pull-Aparts",
    a: "<p><strong>Band Pull-Aparts:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Schulter, oberer Rücken.</li><li><strong>Equipment:</strong> Widerstandsband (Miniband / Theraband).</li><li><strong>Ausführung:</strong> Band vor der Brust halten und durch Auseinanderziehen der Arme bis zum Brustkontakt dehnen.</li></ul>",
    tags: [
      "schultern",
      "band pull-aparts",
      "widerstandsband",
      "hintere schulter",
      "aufwärmen",
    ],
  },

  // --- 5. ARME – TRIZEPS (TRICEPS BRACHII) ---
  {
    q: "Übung: French Press / Skullcrusher mit SZ-Stange auf Flachbank (Lying Triceps Extension)",
    a: "<p><strong>French Press / Skullcrusher mit SZ-Stange:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Trizeps, besonders langer Kopf.</li><li><strong>Equipment:</strong> SZ-Stange, Flachbank.</li><li><strong>Ausführung:</strong> Im Liegen Stange mit leicht nach hinten geneigten Oberarmen halten. Nur die Unterarme beugen, Stange kontrolliert zur Stirn oder hinter den Kopf absenken, kraftvoll strecken.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "skullcrusher",
      "french press",
      "sz-stange",
      "flachbank",
    ],
  },
  {
    q: "Übung: Überkopf-Trizepsstrecken am Kabelzug mit Seil (Overhead Cable Triceps Extension)",
    a: "<p><strong>Überkopf-Trizepsstrecken am Kabelzug mit Seil:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Kopf des Trizeps (maximale Dehnungsspannung).</li><li><strong>Equipment:</strong> Tiefer oder hüfthoher Kabelzug, Seil.</li><li><strong>Ausführung:</strong> Vom Turm wegdrehen, Ausfallschritt, Oberkörper leicht vorgebeugt. Seil hinter dem Kopf greifen und nach vorne-oben strecken, am Ende die Seilenden auseinanderziehen.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "überkopfdrücken trizeps",
      "kabelzug",
      "langer trizepskopf",
    ],
  },
  {
    q: "Übung: Katana Extensions am Kabelzug",
    a: "<p><strong>Katana Extensions:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Kopf des Trizeps (Caput longum im vollen Überkopf-Stretch).</li><li><strong>Equipment:</strong> Doppelter Kabelzug ohne Griffe.</li><li><strong>Ausführung:</strong> Kabel hinter dem Kopf über Kreuz greifen und diagonal nach schräg vorne-außen durchstrecken.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "katana extensions",
      "kabelzug",
      "dehnung",
      "überkopf",
    ],
  },
  {
    q: "Übung: Einarmiges Kurzhantel-Überkopfstrecken sitzend (Seated Dumbbell Overhead Extension)",
    a: "<p><strong>Einarmiges Kurzhantel-Überkopfstrecken:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Trizepskopf.</li><li><strong>Equipment:</strong> 1 Kurzhantel, Bank.</li><li><strong>Ausführung:</strong> Hantel hinter den Nacken absenken und senkrecht nach oben strecken.</li></ul>",
    tags: ["arme", "trizeps", "kurzhantel", "einarmig", "überkopfstrecken"],
  },
  {
    q: "Übung: Beidarmiges Kurzhantel-Überkopfdrücken (Two-Arm Dumbbell Overhead Extension)",
    a: "<p><strong>Beidarmiges Kurzhantel-Überkopfdrücken:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Kopf.</li><li><strong>Equipment:</strong> 1 schwere Kurzhantel (mit beiden Händen unter der oberen Scheibe gefasst), Bank.</li><li><strong>Ausführung:</strong> Hantel tief hinter den Kopf führen und über Kopfhöhe ausstrecken.</li></ul>",
    tags: ["arme", "trizeps", "kurzhantel", "beidarmig", "überkopf"],
  },
  {
    q: "Übung: Überkopfstrecken an der Trizeps-Maschine",
    a: "<p><strong>Überkopfstrecken an der Trizeps-Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Trizepskopf.</li><li><strong>Equipment:</strong> Spezielle geführte Trizeps-Überkopf-Maschine.</li><li><strong>Ausführung:</strong> Geführte Kreisbahn für maximale Dehnung ohne Balancieraufwand.</li></ul>",
    tags: ["arme", "trizeps", "maschine", "überkopfstrecken", "isolation"],
  },
  {
    q: "Übung: Trizeps-Pushdowns am Kabelzug mit Seil (Rope Pushdowns)",
    a: "<p><strong>Trizeps-Pushdowns am Kabelzug mit Seil:</strong></p><ul><li><strong>Zielmuskel:</strong> Lateraler und medialer Trizepskopf.</li><li><strong>Equipment:</strong> Hoher Kabelzug, Trizepsseil.</li><li><strong>Ausführung:</strong> Oberarme eng an den Rippen fixieren. Seil nach unten drücken und am tiefsten Punkt die Hände nach außen spreizen für maximale Spitzenkontraktion.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "pushdowns",
      "kabelzug",
      "seil",
      "trizepsdrücken",
    ],
  },
  {
    q: "Übung: Trizeps-Pushdowns mit gerader Stange / V-Stange (Straight Bar / V-Bar Pushdowns)",
    a: "<p><strong>Trizeps-Pushdowns mit gerader Stange oder V-Stange:</strong></p><ul><li><strong>Zielmuskel:</strong> Lateraler Trizepskopf (hohe Gewichtsbelastung).</li><li><strong>Equipment:</strong> Hoher Kabelzug, V-Griff oder kurze gerade Stange.</li><li><strong>Ausführung:</strong> Fester Obergriff, kraftvoll nach unten strecken bis zum vollen Lockout.</li></ul>",
    tags: ["arme", "trizeps", "pushdowns", "stange", "v-griff", "kabelzug"],
  },
  {
    q: "Übung: Einarmiges Trizepsdrücken im Untergriff (Reverse-Grip Cable Pushdown)",
    a: "<p><strong>Einarmiges Trizepsdrücken im Untergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Medialer Kopf des Trizeps.</li><li><strong>Equipment:</strong> Hoher Kabelzug, Einzelgriff.</li><li><strong>Ausführung:</strong> Handfläche zeigt nach oben (supiniert), kontrolliert nach unten strecken.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "untergriff",
      "reverse-grip",
      "einarmig",
      "kabelzug",
    ],
  },
  {
    q: "Übung: Trizeps-Kickbacks mit Kurzhanteln (Dumbbell Kickbacks)",
    a: "<p><strong>Trizeps-Kickbacks mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Lateraler und langer Kopf in Spitzenkontraktion.</li><li><strong>Equipment:</strong> 1 Kurzhantel, Bank.</li><li><strong>Ausführung:</strong> Vorgebeugter Stand, Oberarm parallel zum Boden fixiert. Unterarm nach hinten strecken, bis der Arm komplett gerade ist.</li></ul>",
    tags: ["arme", "trizeps", "kickbacks", "kurzhantel", "spitzenkontraktion"],
  },
  {
    q: "Übung: Trizeps-Kickbacks am Kabelzug (Cable Kickbacks)",
    a: "<p><strong>Trizeps-Kickbacks am Kabelzug:</strong></p><ul><li><strong>Zielmuskel:</strong> Trizeps (konstante Spannung am Umkehrpunkt).</li><li><strong>Equipment:</strong> Tiefer Kabelzug ohne Griff.</li><li><strong>Ausführung:</strong> Bietet im Gegensatz zur Kurzhantel auch in der Dehnungsphase bereits Zugwiderstand.</li></ul>",
    tags: ["arme", "trizeps", "kickbacks", "kabelzug", "constant tension"],
  },
  {
    q: "Übung: Enges Bankdrücken (Close-Grip Bench Press - CGBP)",
    a: "<p><strong>Enges Bankdrücken:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Trizeps, vordere Schulter, Brust.</li><li><strong>Equipment:</strong> Langhantel, Flachbank, Rack.</li><li><strong>Ausführung:</strong> Schulterbreiter Griff (nicht zu eng, um Handgelenke zu schonen!). Stange zum unteren Brustbein absenken, Ellbogen dicht am Körper führen und über die Trizepse hochdrücken.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "enges bankdrücken",
      "cgbp",
      "langhantel",
      "grundübung",
    ],
  },
  {
    q: "Übung: Dips an Barren mit Trizepsfokus (Triceps Dips)",
    a: "<p><strong>Dips an Barren mit Trizepsfokus:</strong></p><ul><li><strong>Zielmuskel:</strong> Trizeps, Brust, vordere Schulter.</li><li><strong>Equipment:</strong> Dip-Barren (engerer Griff).</li><li><strong>Ausführung:</strong> Oberkörper aufrecht halten, Beine gerade nach unten, Ellbogen eng am Körper nach hinten führen, bis 90° Beugung erreicht sind, dann kraftvoll hochdrücken.</li></ul>",
    tags: ["arme", "trizeps", "dips", "barren", "bodyweight", "calisthenics"],
  },
  {
    q: "Übung: Bankdips (Bench Dips)",
    a: "<p><strong>Bankdips:</strong></p><ul><li><strong>Zielmuskel:</strong> Trizeps.</li><li><strong>Equipment:</strong> 1 oder 2 Flachbänke.</li><li><strong>Ausführung:</strong> Hände stützen hinter dem Rücken auf die Bankkante, Füße auf den Boden oder eine zweite Bank. Körper absenken und über die Armstreckung hochdrücken.</li></ul>",
    tags: ["arme", "trizeps", "bankdips", "bench dips", "flachbank"],
  },
  {
    q: "Übung: Diamant-Liegestütze (Diamond Push-ups)",
    a: "<p><strong>Diamant-Liegestütze:</strong></p><ul><li><strong>Zielmuskel:</strong> Trizeps, innere Brust.</li><li><strong>Equipment:</strong> Eigengewicht.</li><li><strong>Ausführung:</strong> Liegestützhaltung, Daumen und Zeigefinger berühren sich unter der Brust in Dreiecks-/Diamantform.</li></ul>",
    tags: [
      "arme",
      "trizeps",
      "diamant liegestütze",
      "diamond push-ups",
      "bodyweight",
    ],
  },

  // --- 6. ARME – BIZEPS, BRACHIALIS & UNTERARME ---
  {
    q: "Übung: Langhantelcurls stehend (Standing Barbell Biceps Curl)",
    a: "<p><strong>Langhantelcurls stehend:</strong></p><ul><li><strong>Zielmuskel:</strong> Biceps Brachii (beide Köpfe).</li><li><strong>Equipment:</strong> Langhantel.</li><li><strong>Ausführung:</strong> Schulterbreiter Untergriff. Oberarme an den Seiten fixieren, Hantel ohne Schwungholen im Bogen nach oben curlen, oben kurz hart anspannen.</li></ul>",
    tags: ["arme", "bizeps", "langhantelcurls", "biceps curls", "langhantel"],
  },
  {
    q: "Übung: SZ-Stangen Curls (EZ-Bar Curl)",
    a: "<p><strong>SZ-Stangen Curls:</strong></p><ul><li><strong>Zielmuskel:</strong> Biceps Brachii, Brachialis.</li><li><strong>Equipment:</strong> SZ-Curstange.</li><li><strong>Ausführung:</strong> Die ergonomische Krümmung schont die Handgelenke und erlaubt schweres Schwing-freies Curlen.</li></ul>",
    tags: ["arme", "bizeps", "sz-stange", "ez-bar", "curls", "brachialis"],
  },
  {
    q: "Übung: Kurzhantelcurls stehend mit Eindrehen (Alternating Dumbbell Curl with Supination)",
    a: "<p><strong>Kurzhantelcurls stehend mit Eindrehen:</strong></p><ul><li><strong>Zielmuskel:</strong> Biceps Brachii (maximale Kontraktion durch Supination).</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Start im neutralen Griff (Hammer). Während des Hebens die Handgelenke aktiv nach außen drehen, sodass der kleine Finger oben höher als der Daumen steht.</li></ul>",
    tags: ["arme", "bizeps", "kurzhantelcurls", "supination", "biceps curl"],
  },
  {
    q: "Übung: Konzentrationscurls sitzend (Concentration Curls)",
    a: "<p><strong>Konzentrationscurls sitzend:</strong></p><ul><li><strong>Zielmuskel:</strong> Biceps Brachii (isolierter Peak).</li><li><strong>Equipment:</strong> 1 Kurzhantel, Flachbank.</li><li><strong>Ausführung:</strong> Sitzend, der arbeitende Ellbogen stützt an der Innenseite des Oberschenkels ab. Schaltet jegliche Bewegung des Schultergelenks aus.</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "konzentrationscurls",
      "peak",
      "kurzhantel",
      "isolation",
    ],
  },
  {
    q: "Übung: Kabelcurls stehend mit Stange (Straight Bar Cable Curl)",
    a: "<p><strong>Kabelcurls stehend mit Stange:</strong></p><ul><li><strong>Zielmuskel:</strong> Bizeps.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, kurze gerade Stange oder SZ-Aufsatz.</li><li><strong>Ausführung:</strong> Liefert kontinuierlichen Widerstand über die gesamte ROM bis zur maximalen Beugung.</li></ul>",
    tags: ["arme", "bizeps", "kabelcurls", "kabelzug", "constant tension"],
  },
  {
    q: "Übung: Schrägbank-Curls mit Kurzhanteln (Incline Dumbbell Curl)",
    a: "<p><strong>Schrägbank-Curls mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Bizepskopf (Caput longum / maximaler Stretch).</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Schrägbank (ca. 45–60°).</li><li><strong>Ausführung:</strong> Auf die Schrägbank setzen, Arme hängen senkrecht nach hinten-unten. Aus tiefer Dehnung nach oben curlen ohne die Ellbogen nach vorne zu schieben.</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "schrägbankcurls",
      "incline curls",
      "langer bizepskopf",
      "dehnungsfokus",
    ],
  },
  {
    q: "Übung: Bayesian Curls / Kabelcurls von hinten (Cable Behind-the-Back Curl)",
    a: "<p><strong>Bayesian Curls / Kabelcurls von hinten:</strong></p><ul><li><strong>Zielmuskel:</strong> Langer Bizepskopf im Dehnungszustand.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, Einzelgriff.</li><li><strong>Ausführung:</strong> Einen Schritt vor den Kabelzug stellen, Arm wird nach hinten-unten gezogen. Aus voller Dehnung nach vorne-oben curlen.</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "bayesian curls",
      "kabelzug",
      "dehnungsreiz",
      "langer kopf",
    ],
  },
  {
    q: "Übung: High Cable Curls (Doppel-Bizeps am hohen Kabelzug)",
    a: "<p><strong>High Cable Curls (Doppel-Bizeps am Kabelzug):</strong></p><ul><li><strong>Zielmuskel:</strong> Biceps Brachii (Spitzenkontraktion & Posing-Position).</li><li><strong>Equipment:</strong> Doppelter Kabelzug (Griffe auf Kopfhöhe).</li><li><strong>Ausführung:</strong> In der Mitte stehen, Griffe gleichzeitig zu den Ohren heranziehen (wie bei der Front-Double-Biceps-Pose).</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "high cable curls",
      "doppelbizeps",
      "spitzenkontraktion",
    ],
  },
  {
    q: "Übung: Hammer Curls mit Kurzhanteln (Neutral Grip Dumbbell Hammer Curl)",
    a: "<p><strong>Hammer Curls mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Musculus Brachialis, Brachioradialis, langer Bizepskopf.</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Handflächen zeigen während der gesamten Bewegung zueinander (neutral). Baut Armdicke auf, indem der Brachialis unter dem Bizeps vergrößert wird.</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "hammer curls",
      "brachialis",
      "unterarme",
      "kurzhantel",
    ],
  },
  {
    q: "Übung: Cross-Body Hammer Curls (Hammer Curls quer über die Brust)",
    a: "<p><strong>Cross-Body Hammer Curls:</strong></p><ul><li><strong>Zielmuskel:</strong> Brachialis, Brachioradialis.</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Die Hantel wird diagonal vor dem Körper in Richtung der gegenüberliegenden Brust/Schulter gecurlt.</li></ul>",
    tags: ["arme", "brachialis", "cross-body", "hammer curls", "unterarme"],
  },
  {
    q: "Übung: Kabel-Hammercurls mit Seil (Rope Cable Hammer Curl)",
    a: "<p><strong>Kabel-Hammercurls mit Seil:</strong></p><ul><li><strong>Zielmuskel:</strong> Brachialis, Brachioradialis.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, Seil.</li><li><strong>Ausführung:</strong> Neutraler Griff am Seil, kontinuierliche Spannung bis zum oberen Anschlag.</li></ul>",
    tags: ["arme", "brachialis", "kabelzug", "hammer curls", "seil"],
  },
  {
    q: "Übung: Preacher Curls / Scott-Bank Curls (SZ-Stange oder Maschine)",
    a: "<p><strong>Preacher Curls / Scott-Bank Curls:</strong></p><ul><li><strong>Zielmuskel:</strong> Kurzer Bizepskopf (Caput breve / unterer Hebel).</li><li><strong>Equipment:</strong> Scott-Bank (Preacher Bench), SZ-Stange oder Maschine.</li><li><strong>Ausführung:</strong> Oberarme liegen flach auf dem Schrägpolster auf. Verhindert jedes Abfälschen und setzt enorme Last auf den unteren Bizepsanteil.</li></ul>",
    tags: [
      "arme",
      "bizeps",
      "preacher curls",
      "scott-bank",
      "sz-stange",
      "isolation",
    ],
  },
  {
    q: "Übung: Reverse Curls mit Langhantel oder SZ-Stange (Obergriff-Curls)",
    a: "<p><strong>Reverse Curls mit Langhantel oder SZ-Stange:</strong></p><ul><li><strong>Zielmuskel:</strong> Musculus Brachioradialis (stärkster Unterarmmuskel), Fingerstrecker.</li><li><strong>Equipment:</strong> SZ-Stange oder Langhantel im Obergriff (proniert).</li><li><strong>Ausführung:</strong> Curls mit nach unten zeigenden Handflächen; baut massive Unterarme auf.</li></ul>",
    tags: [
      "unterarme",
      "brachioradialis",
      "reverse curls",
      "obergriff",
      "sz-stange",
    ],
  },
  {
    q: "Übung: Handgelenk-Curls im Untergriff (Wrist Curls)",
    a: "<p><strong>Handgelenk-Curls im Untergriff:</strong></p><ul><li><strong>Zielmuskel:</strong> Unterarm-Flexoren (Handbeuger).</li><li><strong>Equipment:</strong> Kurzhanteln oder Langhantel auf einer Bank abgelegt.</li><li><strong>Ausführung:</strong> Unterarme liegen flach auf der Bank, nur die Hände hängen über die Kante und beugen das Gewicht nach oben.</li></ul>",
    tags: [
      "unterarme",
      "handgelenkcurls",
      "wrist curls",
      "handbeuger",
      "griffkraft",
    ],
  },
  {
    q: "Übung: Reverse Wrist Curls (Handgelenk-Strecken im Obergriff)",
    a: "<p><strong>Reverse Wrist Curls (Handgelenk-Strecken):</strong></p><ul><li><strong>Zielmuskel:</strong> Unterarm-Extensoren (Handstrecker).</li><li><strong>Equipment:</strong> Leichte Kurzhanteln oder Langhantel im Obergriff.</li><li><strong>Ausführung:</strong> Handgelenke nach oben überstrecken.</li></ul>",
    tags: ["unterarme", "handstrecker", "reverse wrist curls", "obergriff"],
  },
  {
    q: "Übung: Farmer’s Walk (Koffertragen / Griffkraft)",
    a: "<p><strong>Farmer’s Walk (Koffertragen):</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamte Unterarme, Griffkraft, Trapez, Core.</li><li><strong>Equipment:</strong> 2 schwere Kurzhanteln, Trap Bar oder Farmer's-Walk-Griffe.</li><li><strong>Ausführung:</strong> Aufrechter Gang mit maximal schweren Gewichten in den Händen über Zeit oder Distanz.</li></ul>",
    tags: [
      "unterarme",
      "farmer's walk",
      "griffkraft",
      "trapez",
      "core",
      "koffertragen",
    ],
  },
  {
    q: "Übung: Wrist Roller (Unterarm-Roller)",
    a: "<p><strong>Wrist Roller:</strong></p><ul><li><strong>Zielmuskel:</strong> Vollständige Unterarmmuskulatur.</li><li><strong>Equipment:</strong> Wrist-Roller-Stab mit Seil und Hantelscheibe.</li><li><strong>Ausführung:</strong> Gewicht durch abwechselndes Drehen der Handgelenke aufwickeln und kontrolliert ablassen.</li></ul>",
    tags: [
      "unterarme",
      "wrist roller",
      "unterarm-roller",
      "griffkraft",
      "ausdauer",
    ],
  },
  // ========================================================================
  // 2. ÜBUNGSKATALOG – TEIL B: UNTERKÖRPER, CORE & SPEZIAL-ÜBUNGEN
  // ========================================================================

  // --- 7. BEINE – QUADRIZEPS (VORDERSEITE) ---
  {
    q: "Übung: High-Bar Kniebeugen mit Langhantel (High-Bar Squats)",
    a: "<p><strong>High-Bar Kniebeugen mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Quadrizeps, Gluteus, Core.</li><li><strong>Equipment:</strong> Langhantel, Squat Rack.</li><li><strong>Ausführung:</strong> Stange liegt oben auf dem Trapezmuskel auf. Aufrechter Oberkörper, Füße schulterbreit, Knie schieben in Fußspitzenrichtung nach vorne-außen. Tief absenken (mindestens Oberschenkel parallel zum Boden oder 'Ass to Grass') und kraftvoll nach oben drücken.</li></ul>",
    tags: [
      "beine",
      "quadrizeps",
      "kniebeugen",
      "squats",
      "high-bar",
      "langhantel",
      "grundübung",
    ],
  },
  {
    q: "Übung: Low-Bar Kniebeugen (Low-Bar Squats / Powerlifting Squats)",
    a: "<p><strong>Low-Bar Kniebeugen:</strong></p><ul><li><strong>Zielmuskel:</strong> Hintere Kette (Gluteus, Hamstrings, Rückenstrecker) und Quadrizeps.</li><li><strong>Equipment:</strong> Langhantel, Rack.</li><li><strong>Ausführung:</strong> Stange liegt tiefer auf der hinteren Schulter (Spina scapulae). Größere Oberkörpervorlage, stärkere Hüftbeugung; erlaubt das Bewegen maximaler Trainingslasten.</li></ul>",
    tags: [
      "beine",
      "kniebeugen",
      "low-bar",
      "powerlifting",
      "gluteus",
      "rückenstrecker",
    ],
  },
  {
    q: "Übung: Frontkniebeugen mit Langhantel (Front Squats)",
    a: "<p><strong>Frontkniebeugen mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps (maximaler Fokus), Rumpf-/Core-Aufrichtung, oberer Rücken.</li><li><strong>Equipment:</strong> Langhantel, Rack (Clean-Griff oder Kreuzgriff).</li><li><strong>Ausführung:</strong> Hantel ruht auf den Schlüsselbeinen und vorderen Schultern, Ellbogen hochhalten. Extrem aufrechte Haltung zwingt die Knie weit nach vorn für maximale Dehnung der Quadrizepsfasern.</li></ul>",
    tags: [
      "beine",
      "quadrizeps",
      "frontkniebeugen",
      "front squats",
      "core",
      "langhantel",
    ],
  },
  {
    q: "Übung: Safety-Bar Kniebeugen (Safety Squat Bar Squats - SSB)",
    a: "<p><strong>Safety-Bar Kniebeugen (SSB):</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, oberer Rücken, Rumpf.</li><li><strong>Equipment:</strong> Safety Squat Bar (SSB) mit Griffen.</li><li><strong>Ausführung:</strong> Extrem schulter- und handgelenkschonend. Der Hebel verlagert das Gewicht leicht nach vorn und fordert den oberen Rücken massiv heraus.</li></ul>",
    tags: [
      "beine",
      "ssb",
      "safety squat bar",
      "kniebeugen",
      "schulterschonend",
      "quadrizeps",
    ],
  },
  {
    q: "Übung: Goblet Squats (Kelchkniebeugen)",
    a: "<p><strong>Goblet Squats:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, Hüftmobilität, Core.</li><li><strong>Equipment:</strong> 1 Kurzhantel oder Kettlebell vor der Brust.</li><li><strong>Ausführung:</strong> Gewicht wie einen Kelch vor der Brust halten. Ideal zum Erlernen der Kniebeugetiefe und für kontrolliertes Hüftöffnen.</li></ul>",
    tags: [
      "beine",
      "goblet squats",
      "kurzhantel",
      "kettlebell",
      "mobilität",
      "anfänger",
    ],
  },
  {
    q: "Übung: 45°-Beinpresse (45-Degree Leg Press)",
    a: "<p><strong>45°-Beinpresse:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, Gluteus, Adduktoren.</li><li><strong>Equipment:</strong> 45°-Beinpresse (plate-loaded).</li><li><strong>Ausführung:</strong> Gesäß fest ins Polster drücken (kein Einrunden des unteren Rückens / 'Butt Wink' am Umkehrpunkt!). Tiefe kontrollierte Beugung bis 90° oder tiefer, Knie nicht komplett durchschlagen am oberen Endpunkt.</li></ul>",
    tags: [
      "beine",
      "beinpresse",
      "leg press",
      "quadrizeps",
      "gluteus",
      "maschine",
    ],
  },
  {
    q: "Übung: Hackenschmidt-Kniebeuge / Hack Squat (Machine Hack Squat)",
    a: "<p><strong>Hackenschmidt-Kniebeuge (Hack Squat):</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps (isolierte Kniestreckung im tiefen Stretch).</li><li><strong>Equipment:</strong> Hack-Squat-Maschine.</li><li><strong>Ausführung:</strong> Rücken liegt am Polster an. Füße tief auf der Plattform für maximalen Knievorschub und maximale Belastung der vorderen Oberschenkel.</li></ul>",
    tags: [
      "beine",
      "hack squat",
      "hackenschmidt",
      "quadrizeps",
      "maschine",
      "dehnung",
    ],
  },
  {
    q: "Übung: Pendulum Squat (Pendelkniebeuge)",
    a: "<p><strong>Pendulum Squat:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps (optimale Kraftkurve).</li><li><strong>Equipment:</strong> Pendulum-Squat-Maschine.</li><li><strong>Ausführung:</strong> Das Pendel verringert die Last im schwächsten Gelenkwinkel und erhöht die Spannung in der vollen Kniebeugung; extrem knieschonend bei maximalem Muskelreiz.</li></ul>",
    tags: ["beine", "pendulum squat", "quadrizeps", "biomechanik", "kniebeuge"],
  },
  {
    q: "Übung: Belt Squat (Gürtelkniebeuge)",
    a: "<p><strong>Belt Squat (Gürtelkniebeuge):</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps & Gluteus (vollkommen ohne Wirbelsäulenbelastung).</li><li><strong>Equipment:</strong> Belt-Squat-Maschine oder Dip-Gürtel auf Erhöhung.</li><li><strong>Ausführung:</strong> Das Gewicht wird über einen Gürtel an der Hüfte eingehängt. Erlaubt schwere Beinsätze selbst bei akuten Bandscheiben- oder Rückenbeschwerden.</li></ul>",
    tags: [
      "beine",
      "belt squat",
      "gürtelkniebeuge",
      "quadrizeps",
      "rückenschonend",
    ],
  },
  {
    q: "Übung: Beinstrecker-Maschine (Leg Extension)",
    a: "<p><strong>Beinstrecker-Maschine (Leg Extension):</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, insbesondere <em>Rectus Femoris</em> (einziger zweigelenkiger Quad-Muskel).</li><li><strong>Equipment:</strong> Beinstreckermaschine.</li><li><strong>Ausführung:</strong> Knieachse exakt am Drehpunkt der Maschine ausrichten. Beine kraftvoll strecken, oben 1 Sekunde halten, kontrollierte 3-Sekunden-Exzentrik nach unten.</li></ul>",
    tags: [
      "beine",
      "beinstrecker",
      "leg extension",
      "rectus femoris",
      "isolation",
      "quadrizeps",
    ],
  },
  {
    q: "Übung: Sissy Squats (Eigengewicht oder an der Sissy-Squat-Bank)",
    a: "<p><strong>Sissy Squats:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps (extremste Dehnung des Rectus Femoris).</li><li><strong>Equipment:</strong> Sissy-Squat-Bank oder freistehend mit Festhalten.</li><li><strong>Ausführung:</strong> Schienbeine arretieren, Oberkörper und Oberschenkel bilden eine gerade Linie. Oberkörper weit nach hinten lehnen, Knie maximal beugen und über die Oberschenkel wieder hochziehen.</li></ul>",
    tags: [
      "beine",
      "sissy squats",
      "quadrizeps",
      "rectus femoris",
      "dehnungsfokus",
    ],
  },
  {
    q: "Übung: Bulgarian Split Squats (Erhöhte Ausfallschritte - BSS)",
    a: "<p><strong>Bulgarian Split Squats (BSS):</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, Gluteus Maximus & Medius, Adduktoren.</li><li><strong>Equipment:</strong> 2 Kurzhanteln, Flachbank oder BSS-Rolle.</li><li><strong>Ausführung:</strong> Hinteren Fuß auf der Bank auflegen. Vorderes Knie tief beugen, bis das hintere Knie fast den Boden berührt. Beseitigt muskuläre Dysbalancen zwischen linkem und rechtem Bein.</li></ul>",
    tags: [
      "beine",
      "bulgarian split squats",
      "bss",
      "ausfallschritte",
      "gluteus",
      "unilateral",
    ],
  },
  {
    q: "Übung: Gehende Ausfallschritte (Walking Lunges)",
    a: "<p><strong>Gehende Ausfallschritte:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, Gluteus, Beinbeuger, Kondition.</li><li><strong>Equipment:</strong> 2 Kurzhanteln oder Langhantel auf dem Rücken.</li><li><strong>Ausführung:</strong> Kontinuierliche Schritte nach vorn, Knie berührt sanft den Boden, explosiv in den nächsten Schritt abdrücken.</li></ul>",
    tags: [
      "beine",
      "walking lunges",
      "ausfallschritte",
      "gluteus",
      "quadrizeps",
    ],
  },

  // --- 8. BEINE – BEINBEUGER (HAMSTRINGS) & GESÄSS (GLUTEUS) ---
  {
    q: "Übung: Rumänisches Kreuzheben mit Langhantel (Barbell Romanian Deadlift - RDL)",
    a: "<p><strong>Rumänisches Kreuzheben mit Langhantel (RDL):</strong></p><ul><li><strong>Zielmuskel:</strong> Beinbeuger (Biceps Femoris, Semitendinosus), Gluteus Maximus, Rückenstrecker.</li><li><strong>Equipment:</strong> Langhantel, evtl. Zughilfen.</li><li><strong>Ausführung:</strong> Knie nur minimal angewinkelt fixieren. Die Hüfte rein horizontal nach hinten schieben ('Tür mit dem Po zuschlagen'), Stange eng an den Beinen bis unter die Knie führen, maximale Dehnung in den Hamstrings spüren und aus Gesäßkraft aufrichten.</li></ul>",
    tags: [
      "beine",
      "rdl",
      "rumänisches kreuzheben",
      "hamstrings",
      "beinbeuger",
      "gluteus",
      "dehnung",
    ],
  },
  {
    q: "Übung: Rumänisches Kreuzheben mit Kurzhanteln (Dumbbell RDL)",
    a: "<p><strong>Rumänisches Kreuzheben mit Kurzhanteln:</strong></p><ul><li><strong>Zielmuskel:</strong> Hamstrings & Gluteus.</li><li><strong>Equipment:</strong> 2 Kurzhanteln.</li><li><strong>Ausführung:</strong> Erlaubt eine freiere Führung der Hanteln seitlich der Oberschenkel für noch anatomischere Dehnungsbahnen.</li></ul>",
    tags: ["beine", "rdl", "kurzhantel", "hamstrings", "gluteus", "beinbeuger"],
  },
  {
    q: "Übung: Beinbeuger sitzend an der Maschine (Seated Leg Curl)",
    a: "<p><strong>Beinbeuger sitzend an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Hamstrings (Isolierte Kniebeugung in vorgedehnter Hüftbeugung).</li><li><strong>Equipment:</strong> Sitzende Beinbeugermaschine.</li><li><strong>Ausführung:</strong> Durch den 90°-Winkel in der Hüfte sind die Hamstrings maximal vorgedehnt (wissenschaftlich erwiesen effektiver als liegende Curls). Oberschenkelpolster fest arretieren, Fersen zügig unter den Sitz ziehen und langsam zurückführen.</li></ul>",
    tags: [
      "beine",
      "beinbeuger",
      "seated leg curl",
      "hamstrings",
      "maschine",
      "isolation",
    ],
  },
  {
    q: "Übung: Beinbeuger liegend an der Maschine (Lying Leg Curl)",
    a: "<p><strong>Beinbeuger liegend an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Hamstrings.</li><li><strong>Equipment:</strong> Liegende Beinbeugermaschine.</li><li><strong>Ausführung:</strong> Flach auf den Bauch legen, Becken aktiv ins Polster drücken (kein Hohlkreuz), Fersen zum Gesäß curlen.</li></ul>",
    tags: ["beine", "beinbeuger", "lying leg curl", "hamstrings", "maschine"],
  },
  {
    q: "Übung: Nordic Hamstring Curls (Nordic Curls)",
    a: "<p><strong>Nordic Hamstring Curls:</strong></p><ul><li><strong>Zielmuskel:</strong> Hamstrings (maximale exzentrische Belastung).</li><li><strong>Equipment:</strong> Fersen fixiert an Sprossenwand/Partner oder Nordic-Bench.</li><li><strong>Ausführung:</strong> Knieend den gestreckten Oberkörper langsam und kontrolliert nach vorne absenken, bis die Hamstrings die Last nicht mehr halten können, dann sanft mit den Händen abfangen und zurückfedern.</li></ul>",
    tags: [
      "beine",
      "nordic curls",
      "hamstrings",
      "exzentrik",
      "bodyweight",
      "gelenkschutz",
    ],
  },
  {
    q: "Übung: Good Mornings (Guten Morgen / Hantel im Nacken)",
    a: "<p><strong>Good Mornings:</strong></p><ul><li><strong>Zielmuskel:</strong> Beinbeuger, Gluteus, Rückenstrecker.</li><li><strong>Equipment:</strong> Langhantel oder SSB auf dem oberen Rücken.</li><li><strong>Ausführung:</strong> Knie leicht gebeugt, Oberkörper mit geradem Rücken bis fast in die Waagerechte vorklappen und kraftvoll aus der Hüfte strecken.</li></ul>",
    tags: [
      "beine",
      "good mornings",
      "rückenstrecker",
      "hamstrings",
      "gluteus",
      "langhantel",
    ],
  },
  {
    q: "Übung: Hip Thrusts mit Langhantel (Barbell Hip Thrusts)",
    a: "<p><strong>Hip Thrusts mit Langhantel:</strong></p><ul><li><strong>Zielmuskel:</strong> Gluteus Maximus (Königsübung für das Gesäß).</li><li><strong>Equipment:</strong> Langhantel, Nackenpolster (Barbell Pad), Flachbank.</li><li><strong>Ausführung:</strong> Schulterblätter an die Bankkante lehnen, Hantel über das Becken rollen. Füße schulterbreit aufstellen, Becken nach oben drücken, bis Oberschenkel und Rumpf eine Linie bilden. Oben Gesäß für 2 Sekunden maximal zusammenkneifen.</li></ul>",
    tags: [
      "gesäß",
      "gluteus",
      "hip thrusts",
      "langhantel",
      "po",
      "booty",
      "grundübung",
    ],
  },
  {
    q: "Übung: Glute Bridge (Beckenheben am Boden)",
    a: "<p><strong>Glute Bridge:</strong></p><ul><li><strong>Zielmuskel:</strong> Gluteus Maximus.</li><li><strong>Equipment:</strong> Eigengewicht oder Kurzhantel auf dem Becken.</li><li><strong>Ausführung:</strong> Auf dem Rücken liegend die Fersen in den Boden stemmen und das Becken hochdrücken.</li></ul>",
    tags: ["gesäß", "glute bridge", "beckenheben", "gluteus", "bodyweight"],
  },
  {
    q: "Übung: Kabelzug-Kickbacks für das Gesäß (Glute Cable Kickbacks)",
    a: "<p><strong>Kabelzug-Kickbacks für das Gesäß:</strong></p><ul><li><strong>Zielmuskel:</strong> Gluteus Maximus & Gluteus Medius.</li><li><strong>Equipment:</strong> Tiefer Kabelzug, Fußschlaufe.</li><li><strong>Ausführung:</strong> Leicht vorgebeugt das Bein im ca. 30–45°-Winkel nach hinten-oben wegstrecken und die Gesäßhälfte oben kontrahieren.</li></ul>",
    tags: [
      "gesäß",
      "kickbacks",
      "kabelzug",
      "gluteus",
      "isolation",
      "fußschlaufe",
    ],
  },
  {
    q: "Übung: Abduktoren-Maschine (Seated Hip Abduction)",
    a: "<p><strong>Abduktoren-Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Gluteus Medius & Minimus (obere/seitliche Gesäßkontur).</li><li><strong>Equipment:</strong> Abduktionsmaschine.</li><li><strong>Ausführung:</strong> Sitzend die Polster gegen den Widerstand weit nach außen drücken. Leichtes Vorlehnen des Rumpfes erhöht die Dehnung im Gluteus Medius.</li></ul>",
    tags: [
      "gesäß",
      "abduktoren",
      "gluteus medius",
      "maschine",
      "seitliches gesäß",
    ],
  },
  {
    q: "Übung: Adduktoren-Maschine (Seated Hip Adduction)",
    a: "<p><strong>Adduktoren-Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Adductor Magnus, Longus, Brevis (Oberschenkelinnenseite).</li><li><strong>Equipment:</strong> Adduktionsmaschine.</li><li><strong>Ausführung:</strong> Beine aus maximaler Dehnung kontrolliert zusammendrücken; verleiht dem Oberschenkel von vorn und hinten massive Fülle.</li></ul>",
    tags: [
      "beine",
      "adduktoren",
      "oberschenkelinnenseite",
      "maschine",
      "adductor",
    ],
  },

  // --- 9. UNTERSCHENKEL – WADEN & SCHIENBEIN (CALVES) ---
  {
    q: "Übung: Wadenheben stehend an der Maschine (Standing Calf Raise)",
    a: "<p><strong>Wadenheben stehend an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Musculus Gastrocnemius (zweiköpfiger Wadenmuskel).</li><li><strong>Equipment:</strong> Stehende Wadenhebemaschine oder Smith Machine.</li><li><strong>Ausführung:</strong> Knie komplett gestreckt halten. Auf den Fußballen maximal nach oben drücken, am tiefsten Punkt die Fersen tief absenken und den Dehnungsreiz für 2–3 Sekunden halten (schaltet den Sehnenfedereffekt aus).</li></ul>",
    tags: [
      "waden",
      "wadenheben",
      "gastrocnemius",
      "stehend",
      "maschine",
      "stretch",
    ],
  },
  {
    q: "Übung: Wadenheben an der Beinpresse (Leg Press Calf Raise / Toe Press)",
    a: "<p><strong>Wadenheben an der Beinpresse:</strong></p><ul><li><strong>Zielmuskel:</strong> Gastrocnemius.</li><li><strong>Equipment:</strong> 45°-Beinpresse.</li><li><strong>Ausführung:</strong> Nur die Fußballen auf die untere Kante der Plattform aufsetzen, Schlitten über die Sprunggelenke kontrolliert vor- und zurückdrücken.</li></ul>",
    tags: ["waden", "beinpresse", "toe press", "wadenheben", "gastrocnemius"],
  },
  {
    q: "Übung: Wadenheben sitzend an der Maschine (Seated Calf Raise)",
    a: "<p><strong>Wadenheben sitzend an der Maschine:</strong></p><ul><li><strong>Zielmuskel:</strong> Musculus Soleus (Schollenmuskel unter der Wade).</li><li><strong>Equipment:</strong> Sitzende Wadenhebemaschine mit Oberschenkelpolster.</li><li><strong>Ausführung:</strong> Bei 90° Kniewinkel ist der Gastrocnemius funktionell entlastet – die gesamte Arbeit wird vom Soleus verrichtet, was die Wade seitlich breiter wirken lässt.</li></ul>",
    tags: [
      "waden",
      "soleus",
      "sitzend",
      "wadenheben",
      "schollenmuskel",
      "maschine",
    ],
  },
  {
    q: "Übung: Tibialis Raises (Schienbeinheben)",
    a: "<p><strong>Tibialis Raises (Schienbeinheben):</strong></p><ul><li><strong>Zielmuskel:</strong> Musculus Tibialis Anterior (vorderer Schienbeinmuskel).</li><li><strong>Equipment:</strong> Wand (mit Fersen abstützen) oder Tib-Bar.</li><li><strong>Ausführung:</strong> Die Fußspitzen kraftvoll in Richtung Schienbein heranziehen. Schützt die Knie und beugt Schienbeinkantensyndrom (Shin Splints) vor.</li></ul>",
    tags: [
      "waden",
      "schienbein",
      "tibialis",
      "tib-bar",
      "knieschutz",
      "shin splints",
    ],
  },

  // --- 10. BAUCHMUSKELN & RUMPFSTABILITÄT (CORE) ---
  {
    q: "Übung: Kabel-Crunches kniend (Kneeling Cable Crunch)",
    a: "<p><strong>Kabel-Crunches kniend:</strong></p><ul><li><strong>Zielmuskel:</strong> Rectus Abdominis (Gerader Bauchmuskel / Sixpack).</li><li><strong>Equipment:</strong> Hoher Kabelzug, Trizepsseil.</li><li><strong>Ausführung:</strong> Seil an die Schläfen halten, vor dem Turm knien. Die Hüfte bleibt starr arretiert; nur die Brustwirbelsäule wird eingerollt, sodass die Ellbogen zu den Oberschenkeln wandern (C-Bogen).</li></ul>",
    tags: [
      "core",
      "bauch",
      "sixpack",
      "crunches",
      "kabelzug",
      "rectus abdominis",
    ],
  },
  {
    q: "Übung: Hängendes Beinheben an der Klimmzugstange (Hanging Leg Raise)",
    a: "<p><strong>Hängendes Beinheben:</strong></p><ul><li><strong>Zielmuskel:</strong> Unterer Anteil des Rectus Abdominis, Hüftbeuger.</li><li><strong>Equipment:</strong> Klimmzugstange oder Dipstation mit Armpolstern.</li><li><strong>Ausführung:</strong> Aus dem Hang die Beine gestreckt oder gebeugt anheben und am oberen Punkt das Becken aktiv nach oben-vorne einrollen (Posterior Pelvic Tilt).</li></ul>",
    tags: [
      "core",
      "bauch",
      "beinheben",
      "hanging leg raise",
      "unterer bauch",
      "klimmzugstange",
    ],
  },
  {
    q: "Übung: Ab-Wheel Rollouts (Bauchroller)",
    a: "<p><strong>Ab-Wheel Rollouts (Bauchroller):</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Core, Anti-Extension, Serratus.</li><li><strong>Equipment:</strong> Bauchroller (Ab-Wheel).</li><li><strong>Ausführung:</strong> Kniend mit dem Rad nach vorne rollen, bis der Körper fast flach über dem Boden schwebt. Bauch maximal anspannen, um kein Hohlkreuz entstehen zu lassen, und über Core-Kraft zurückrollen.</li></ul>",
    tags: [
      "core",
      "bauch",
      "ab-wheel",
      "bauchroller",
      "anti-extension",
      "sixpack",
    ],
  },
  {
    q: "Übung: Dragon Flags",
    a: "<p><strong>Dragon Flags:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamter Core (extreme Anti-Extension).</li><li><strong>Equipment:</strong> Flachbank.</li><li><strong>Ausführung:</strong> Mit den Händen hinter dem Kopf die Bankkante greifen. Den gesamten kerzengeraden Körper nur auf den Schulterblättern nach oben heben und als starre Linie langsam absenken.</li></ul>",
    tags: [
      "core",
      "bauch",
      "dragon flag",
      "bruce lee",
      "calisthenics",
      "anti-extension",
    ],
  },
  {
    q: "Übung: Unterarmstütz / Klassische Plank (Front Plank)",
    a: "<p><strong>Unterarmstütz / Plank:</strong></p><ul><li><strong>Zielmuskel:</strong> Transversus Abdominis (tiefes Muskelkorsett), Core.</li><li><strong>Equipment:</strong> Eigengewicht.</li><li><strong>Ausführung:</strong> Auf Unterarmen und Zehenspitzen abstützen, Körper bildet ein absolut gerades Brett. Gesäß und Bauch maximal zusammenkneifen (Active Plank).</li></ul>",
    tags: [
      "core",
      "bauch",
      "plank",
      "unterarmstütz",
      "isometrisch",
      "bodyweight",
    ],
  },
  {
    q: "Übung: Pallof Press am Kabelzug (Anti-Rotation Core Exercise)",
    a: "<p><strong>Pallof Press am Kabelzug:</strong></p><ul><li><strong>Zielmuskel:</strong> Schräge Bauchmuskeln (Obliques), tiefes Rumpfkorsett.</li><li><strong>Equipment:</strong> Kabelzug auf Brusthöhe mit Einzelgriff oder Widerstandsband.</li><li><strong>Ausführung:</strong> Seitlich zum Kabel stehen, Griff vor der Brust halten und die Arme gerade nach vorne strecken. Dem seitlichen Rotationszug des Kabels strikt isometrisch standhalten.</li></ul>",
    tags: [
      "core",
      "bauch",
      "pallof press",
      "anti-rotation",
      "obliques",
      "kabelzug",
    ],
  },
  {
    q: "Übung: Russian Twists (Russisches Drehen)",
    a: "<p><strong>Russian Twists:</strong></p><ul><li><strong>Zielmuskel:</strong> Obliques (schräge Bauchmuskeln).</li><li><strong>Equipment:</strong> Hantelscheibe, Kettlebell oder Medizinball.</li><li><strong>Ausführung:</strong> Sitzend auf den Sitzbeinhöckern, Beine in der Luft balancieren. Das Gewicht kontrolliert von der linken zur rechten Hüftseite rotieren.</li></ul>",
    tags: [
      "core",
      "bauch",
      "russian twists",
      "obliques",
      "schräge bauchmuskeln",
    ],
  },
  {
    q: "Übung: Hyperextensions / Rückenstrecker auf der 45°-Bank",
    a: "<p><strong>Hyperextensions / Rückenstrecker auf der 45°-Bank:</strong></p><ul><li><strong>Zielmuskel:</strong> Erector Spinae (Rückenstrecker), Gluteus, Hamstrings.</li><li><strong>Equipment:</strong> 45°-Hyperextension-Bank, evtl. Hantelscheibe vor der Brust.</li><li><strong>Ausführung:</strong> Oberkörper absenken und kontrolliert in die Gerade aufrichten (kein extremes Überstrecken der Lendenwirbelsäule).</li></ul>",
    tags: [
      "core",
      "rückenstrecker",
      "hyperextensions",
      "unterer rücken",
      "gluteus",
      "gesundheit",
    ],
  },

  // --- 11. POWERLIFTING & SPEZIAL-VERBUNDÜBUNGEN ---
  {
    q: "Übung: Konventionelles Kreuzheben (Conventional Barbell Deadlift)",
    a: "<p><strong>Konventionelles Kreuzheben:</strong></p><ul><li><strong>Zielmuskel:</strong> Gesamte hintere Kette (Rückenstrecker, Gluteus, Hamstrings, Trapez, Unterarme/Griffkraft).</li><li><strong>Equipment:</strong> Langhantel, Bumper Plates, Kreide.</li><li><strong>Ausführung:</strong> Hüftbreiter Stand, Stange berührt fast die Schienbeine. Rücken gerade fixieren, Brust raus, Lat anspannen. Aus den Beinen in den Boden drücken und die Hüfte nach vorne durchstrecken.</li></ul>",
    tags: [
      "powerlifting",
      "kreuzheben",
      "deadlift",
      "konventionell",
      "langhantel",
      "ganzkörper",
      "grundübung",
    ],
  },
  {
    q: "Übung: Sumo-Kreuzheben (Sumo Deadlift)",
    a: "<p><strong>Sumo-Kreuzheben:</strong></p><ul><li><strong>Zielmuskel:</strong> Gluteus, Adduktoren, Quadrizeps, Rückenstrecker.</li><li><strong>Equipment:</strong> Langhantel.</li><li><strong>Ausführung:</strong> Sehr breiter Stand, Fußspitzen zeigen 45° nach außen, Hände greifen innerhalb der Beine. Aufrechterer Oberkörper als beim konventionellen Heben.</li></ul>",
    tags: [
      "powerlifting",
      "sumo deadlift",
      "kreuzheben",
      "adduktoren",
      "gluteus",
      "langhantel",
    ],
  },
  {
    q: "Übung: Trap-Bar Kreuzheben (Hex-Bar Deadlift)",
    a: "<p><strong>Trap-Bar Kreuzheben:</strong></p><ul><li><strong>Zielmuskel:</strong> Quadrizeps, Gluteus, Rückenstrecker (sehr rückenschonend).</li><li><strong>Equipment:</strong> Trap Bar / Hex Bar.</li><li><strong>Ausführung:</strong> In der Mitte der Hantel stehen, neutrale Griffe fassen. Verteilt die Last ideal auf Knie und Hüfte bei minimaler Scherkraft auf die Lendenwirbelsäule.</li></ul>",
    tags: [
      "powerlifting",
      "trap bar",
      "hex bar",
      "kreuzheben",
      "rückenschonend",
      "grundübung",
    ],
  },
  {
    q: "Übung: Defizit-Kreuzheben (Deficit Deadlift)",
    a: "<p><strong>Defizit-Kreuzheben:</strong></p><ul><li><strong>Zielmuskel:</strong> Beinkraft am Startpunkt, Beinbeuger, Rücken.</li><li><strong>Equipment:</strong> Langhantel, Erhöhung (z. B. Hantelscheibe) unter den Füßen.</li><li><strong>Ausführung:</strong> Vergrößert die Bewegungsamplitude um 5–10 cm für enorme Explosivkraft vom Boden weg.</li></ul>",
    tags: [
      "powerlifting",
      "defizit kreuzheben",
      "deadlift",
      "startkraft",
      "dehnungsreiz",
    ],
  },
  {
    q: "Übung: Rack Pulls (Kreuzheben aus dem Power Rack)",
    a: "<p><strong>Rack Pulls:</strong></p><ul><li><strong>Zielmuskel:</strong> Oberer Rücken, Trapez, Rückenstrecker (Überlastung im Lockout).</li><li><strong>Equipment:</strong> Langhantel auf den Sicherheitsablagen des Racks (auf Kniehöhe).</li><li><strong>Ausführung:</strong> Konzentriert sich rein auf die obere Hälfte des Hebens; erlaubt supramaximale Gewichte für extremen Rückendichteaufbau.</li></ul>",
    tags: [
      "powerlifting",
      "rack pulls",
      "trapez",
      "rückendichte",
      "lockout",
      "überlastung",
    ],
  },

  // --- 12. CARDIO- & KONDITIONS-ÜBUNGEN ---
  {
    q: "Übung: Incline Treadmill Walk (Laufband-Gehen mit Steigung)",
    a: "<p><strong>Laufband-Gehen mit Steigung:</strong></p><ul><li><strong>Zielmuskel / Fokus:</strong> Fettverbrennung (Zone 2 Cardio), Gelenkschonend, Waden & Gluteus.</li><li><strong>Equipment:</strong> Laufband mit Steigungsfunktion.</li><li><strong>Ausführung:</strong> Steigung auf 10–15 % und Geschwindigkeit auf 4,5–5,5 km/h einstellen. Zügig gehen ohne Festhalten an den Griffen.</li></ul>",
    tags: [
      "cardio",
      "incline walk",
      "laufband",
      "zone 2",
      "fettverbrennung",
      "ausdauer",
    ],
  },
  {
    q: "Übung: Stairmaster / Treppensteiger (Stair Climber)",
    a: "<p><strong>Stairmaster / Treppensteiger:</strong></p><ul><li><strong>Zielmuskel / Fokus:</strong> Hoher Kalorienverbrauch, Gluteus, Quadrizeps, Herz-Kreislauf.</li><li><strong>Equipment:</strong> Stairmaster-Gerät.</li><li><strong>Ausführung:</strong> Kontinuierliches Treppensteigen mit vollem Fußaufsatz (Fersen nicht hängen lassen) bei aufrechtem Rumpf.</li></ul>",
    tags: [
      "cardio",
      "stairmaster",
      "treppensteiger",
      "gluteus",
      "ausdauer",
      "fettabbau",
    ],
  },
  {
    q: "Übung: Ruderergometer (Concept2 Rower)",
    a: "<p><strong>Ruderergometer (Concept2 Rower):</strong></p><ul><li><strong>Zielmuskel / Fokus:</strong> Ganzkörper-Ausdauer (85 % aller Muskeln: Beine, Rücken, Core, Arme).</li><li><strong>Equipment:</strong> Rudergerät.</li><li><strong>Ausführung:</strong> Kette: Beinstreckung -> Hüftöffnung -> Armzug. Zurück in umgekehrter Reihenfolge (Arme -> Hüfte -> Knie).</li></ul>",
    tags: [
      "cardio",
      "rudergerät",
      "rower",
      "concept2",
      "ganzkörper",
      "kondition",
    ],
  },
  {
    q: "Übung: Assault AirBike / Echo Bike",
    a: "<p><strong>Assault AirBike / Echo Bike:</strong></p><ul><li><strong>Zielmuskel / Fokus:</strong> Maximale anaerobe Ausdauer, HIIT, Laktattoleranz.</li><li><strong>Equipment:</strong> Windrad-Fahrrad mit Armgriffen.</li><li><strong>Ausführung:</strong> Je schneller getreten und geschoben wird, desto höher der Luftwiderstand. Perfekt für 20/10-Tabata-Intervalle.</li></ul>",
    tags: [
      "cardio",
      "airbike",
      "echo bike",
      "hiit",
      "tabata",
      "laktattoleranz",
    ],
  },
  {
    q: "Übung: SkiErg (Skilanglauf-Ergometer)",
    a: "<p><strong>SkiErg (Skilanglauf-Ergometer):</strong></p><ul><li><strong>Zielmuskel / Fokus:</strong> Oberkörper-Kondition, Latissimus, Trizeps, Bauch.</li><li><strong>Equipment:</strong> Concept2 SkiErg.</li><li><strong>Ausführung:</strong> Griffe greifen, Arme und Oberkörper in einer Skilanglauf-Bewegung kraftvoll nach unten beschleunigen.</li></ul>",
    tags: [
      "cardio",
      "skierg",
      "latissimus",
      "core",
      "trizeps",
      "oberkörper-cardio",
    ],
  },

  // ========================================================================
  // 3. FITNESS-BERECHNUNGEN, FORMELN & RECHENWEGE (18 FORMELN + PROTEIN-FAQS)
  // ========================================================================

  {
    q: "Berechnung: Wie berechne ich mein 1RM (Maximalkraft)?",
    a: "<p><strong>1RM-Berechnung (One-Rep-Max):</strong></p><ul><li><strong>Epley-Formel (Standard im Kraftsport):</strong><br><code>1RM = Gewicht × (1 + Wiederholungen / 30)</code></li><li><strong>Brzycki-Formel (für 2–10 Wiederholungen):</strong><br><code>1RM = Gewicht / (1,0278 - 0,0278 × Wiederholungen)</code></li><li><strong>Rechenbeispiel:</strong> 100 kg für 6 saubere Wiederholungen:<br><code>100 × (1 + 6/30) = 100 × 1,2 = 120 kg theoretisches 1RM</code>.</li><li><strong>Anwendung:</strong> Dient zur Ermittlung prozentualer Trainingslasten (z. B. 75 % vom 1RM für 4 Sätze à 8 Reps = 90 kg).</li></ul>",
    tags: [
      "formel",
      "1rm",
      "maximalkraft",
      "epley",
      "brzycki",
      "kraft berechnen",
      "one rep max",
      "onerm",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meinen KFA nach der US-Navy-Methode?",
    a: "<p><strong>US-Navy Körperfettformel (Umfangsmethode):</strong></p><ul><li><strong>Männer:</strong><br><code>%KFA = 495 / (1,0324 - 0,19077 × log10(Taille - Nacken) + 0,15456 × log10(Größe)) - 450</code></li><li><strong>Frauen:</strong><br><code>%KFA = 495 / (1,29579 - 0,35004 × log10(Taille + Hüfte - Nacken) + 0,22100 × log10(Größe)) - 450</code></li><li><strong>Messung:</strong> Alle Werte in cm mit dem Maßband gemessen (Taille am Bauchnabel, Nacken unter dem Kehlkopf, Hüfte an der breitesten Gesäßstelle).</li><li><strong>Richtwerte Männer:</strong> 8–12 % (Sixpack), 13–17 % (fit/definiert), > 20 % (erhöht).</li><li><strong>Richtwerte Frauen:</strong> 18–22 % (definiert), 23–27 % (Normalbereich), > 30 % (erhöht).</li></ul>",
    tags: [
      "formel",
      "kfa",
      "navy",
      "körperfett",
      "körperfettanteil",
      "us navy",
      "rechner",
      "kfa berechnen",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meinen Grundumsatz (BMR)?",
    a: "<p><strong>Grundumsatz-Formeln (Basal Metabolic Rate):</strong></p><ul><li><strong>Mifflin-St. Jeor (Männer):</strong><br><code>BMR (kcal) = (10 × Gewicht in kg) + (6,25 × Größe in cm) - (5 × Alter) + 5</code></li><li><strong>Mifflin-St. Jeor (Frauen):</strong><br><code>BMR (kcal) = (10 × Gewicht in kg) + (6,25 × Größe in cm) - (5 × Alter) - 161</code></li><li><strong>Katch-McArdle (bei bekanntem KFA):</strong><br><code>BMR (kcal) = 370 + (21,6 × Magermasse in kg)</code></li><li><strong>Rechenbeispiel (Mann, 80 kg, 180 cm, 30 Jahre):</strong><br><code>(10 × 80) + (6,25 × 180) - (5 × 30) + 5 = 800 + 1125 - 150 + 5 = 1.780 kcal Grundumsatz</code>.</li></ul>",
    tags: [
      "formel",
      "bmr",
      "grundumsatz",
      "mifflin",
      "mifflin-st jeor",
      "katch-mcardle",
      "kaloriengrundumsatz",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meinen täglichen Gesamt-Kalorienbedarf (TDEE)?",
    a: "<p><strong>Gesamtenergieverbrauch (TDEE):</strong></p><ul><li><strong>Formel:</strong> <code>TDEE = BMR (Grundumsatz) × PAL-Aktivitätsfaktor</code></li><li><strong>PAL-Faktoren:</strong><br>• 1,2: Sitzend (reiner Bürojob)<br>• 1,375: Leicht aktiv (1–3x Sport/Woche oder 5.000 Schritte)<br>• 1,55: Moderat aktiv (3–5x Workouts/Woche oder 8.000–10.000 Schritte)<br>• 1,725: Sehr aktiv (körperliche Arbeit oder 6–7x Sport)<br>• 1,9: Extrem aktiv (Schwerstarbeiter / Leistungssportler)</li><li><strong>Ziel-Anpassung:</strong><br>• <strong>Fettabbau (Defizit):</strong> TDEE - 300 bis 500 kcal<br>• <strong>Lean Bulk (Aufbau):</strong> TDEE + 200 bis 300 kcal<br>• <strong>Erhaltung:</strong> TDEE ± 0 kcal</li></ul>",
    tags: [
      "formel",
      "tdee",
      "kalorienbedarf",
      "gesamtverbrauch",
      "pal",
      "pal faktor",
      "kalorienrechner",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meinen FFMI (Fat-Free Mass Index)?",
    a: "<p><strong>FFMI-Berechnung (Muskelmasse & Natural-Limit):</strong></p><ul><li><strong>1. Magermasse (LBM in kg):</strong> <code>Gewicht × (1 - KFA/100)</code></li><li><strong>2. Standard-FFMI:</strong> <code>LBM / (Größe in m)²</code></li><li><strong>3. Normalisierter FFMI:</strong> <code>FFMI + 6,1 × (1,80 - Größe in m)</code></li><li><strong>Interpretation (Männer):</strong><br>• 18–19: Untrainierter Durchschnitt<br>• 20–21: Solide trainiert<br>• 22–23: Sehr muskulös / jahrelanges Training<br>• 24–25: Genetisches Limit für Natural-Athleten<br>• > 25: Ohne anabole Substanzen kaum erreichbar</li></ul>",
    tags: [
      "formel",
      "ffmi",
      "magermasse",
      "lbm",
      "natural limit",
      "fettfreie masse",
      "muskelmasse",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meine Makronährstoffe (Protein, Fett, Kohlenhydrate)?",
    a: "<p><strong>Makronährstoff-Verteilung:</strong></p><ul><li><strong>Brennwerte:</strong> Protein = 4 kcal/g | Kohlenhydrate = 4 kcal/g | Fett = 9 kcal/g</li><li><strong>Protein:</strong> 2,0 g pro kg Körpergewicht (in Diäten bis 2,4 g/kg):<br><code>Protein (kcal) = (Gewicht × 2,0) × 4</code></li><li><strong>Fett:</strong> 0,8 bis 1,0 g pro kg Körpergewicht (essenziell für Hormone):<br><code>Fett (kcal) = (Gewicht × 0,9) × 9</code></li><li><strong>Kohlenhydrate:</strong> Füllen die restlichen Kalorien auf:<br><code>Kohlenhydrate (g) = (Ziel-Kalorien - Protein_kcal - Fett_kcal) / 4</code></li><li><strong>Beispiel (80 kg Athlet, 2.500 kcal Ziel):</strong> 160 g Protein (640 kcal) + 72 g Fett (648 kcal) + 303 g Kohlenhydrate (1.212 kcal).</li></ul>",
    tags: [
      "formel",
      "makros",
      "makronährstoffe",
      "protein",
      "fett",
      "kohlenhydrate",
      "makroverteilung",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich mein Trainingsvolumen & die Tonnage?",
    a: "<p><strong>Tonnage & Workload:</strong></p><ul><li><strong>Formel pro Satz:</strong> <code>Satz-Volumen = Gewicht (kg) × Wiederholungen</code></li><li><strong>Formel Gesamttonnage:</strong> <code>Tonnage = Σ (Gewicht × Reps × Sätze)</code></li><li><strong>Rechenbeispiel (Kniebeugen):</strong><br>Satz 1: 100 kg × 10 Reps = 1.000 kg<br>Satz 2: 100 kg × 10 Reps = 1.000 kg<br>Satz 3: 100 kg × 8 Reps = 800 kg<br><strong>Gesamt-Tonnage = 2.800 kg (2,8 Tonnen)</strong>.</li><li><strong>Nutzen:</strong> Steigt die Tonnage bei sauberer Technik über Wochen, findet messbarer Muskelaufbau (Progressive Overload) statt.</li></ul>",
    tags: [
      "formel",
      "tonnage",
      "trainingsvolumen",
      "workload",
      "gesamtlast",
      "progress",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meine Herzfrequenz für Zone-2-Cardio (Karvonen)?",
    a: "<p><strong>Karvonen-Formel (Präzise Herzfrequenzzonen):</strong></p><ul><li><strong>1. Maximale Herzfrequenz (HF_max):</strong> <code>220 - Alter</code></li><li><strong>2. Herzfrequenzreserve (HFR):</strong> <code>HF_max - Ruhepuls</code></li><li><strong>3. Ziel-Herzfrequenz:</strong> <code>(HFR × Intensität in %) + Ruhepuls</code></li><li><strong>Zielzonen:</strong><br>• Zone 2 (Grundlage / Fettstoffwechsel): 60–70 % Intensität<br>• Zone 3 (Aerobe Kapazität): 70–80 % Intensität<br>• Zone 4/5 (HIIT / VO2max): 85–95 % Intensität</li><li><strong>Rechenbeispiel (30 J., Ruhepuls 60 bpm, Zone 2 mit 65 %):</strong><br><code>HF_max = 190 | HFR = 130 | Ziel-HF = (130 × 0,65) + 60 = 144–145 bpm</code>.</li></ul>",
    tags: [
      "formel",
      "karvonen",
      "herzfrequenz",
      "puls",
      "zone 2",
      "cardio",
      "fatmax",
      "ausdauer",
    ],
  },
  {
    q: "Berechnung: Wie viel Wasser muss ich täglich trinken?",
    a: "<p><strong>Optimaler täglicher Wasserbedarf:</strong></p><ul><li><strong>Formel:</strong> <code>Wasserbedarf (Liter) = (Körpergewicht in kg × 0,035) + (Trainingsstunden × 0,6)</code></li><li><strong>Basisbedarf:</strong> 35 ml pro kg Körpergewicht</li><li><strong>Sportzuschlag:</strong> 600 bis 1.000 ml pro intensiver Trainingsstunde</li><li><strong>Rechenbeispiel (80 kg Athlet, 1,5 Stunden Training):</strong><br><code>(80 × 0,035) + (1,5 × 0,6) = 2,8 + 0,9 = 3,7 Liter Wasser pro Tag</code>.</li></ul>",
    tags: [
      "formel",
      "wasser",
      "wasserbedarf",
      "trinken",
      "hydratation",
      "flüssigkeitsbedarf",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich das tägliche Kaloriendefizit zum Abnehmen?",
    a: "<p><strong>Defizit- & Gewichtsverlust-Formel:</strong></p><ul><li><strong>Physiologische Basis:</strong> 1 kg reines Körperfettgewebe speichert ca. 7.700 kcal.</li><li><strong>Formel:</strong> <code>Tägliches Defizit (kcal) = (Wöchentlicher Zielverlust in kg × 7.700) / 7</code></li><li><strong>Rechenbeispiel (0,5 kg Fettverlust pro Woche):</strong><br><code>(0,5 × 7.700) / 7 = 3.850 / 7 = 550 kcal Defizit pro Tag</code>.</li><li><strong>Empfohlene Rate:</strong> 0,5 bis 1,0 % des Körpergewichts pro Woche, um Muskelabbau zu verhindern.</li></ul>",
    tags: [
      "formel",
      "kaloriendefizit",
      "abnehmen",
      "fettverlust",
      "7700 kcal",
      "gewichtsverlust",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich mein Waist-to-Hip Ratio (WHR)?",
    a: "<p><strong>Taillen-Hüft-Verhältnis (WHR):</strong></p><ul><li><strong>Formel:</strong> <code>WHR = Taillenumfang (cm) / Hüftumfang (cm)</code></li><li><strong>Interpretation Männer:</strong><br>• < 0,90: Geringes kardiovaskuläres Risiko (athletisch/gesund)<br>• 0,90–0,99: Moderates Risiko<br>• ≥ 1,00: Erhöhtes Risiko (viszerales Bauchfett)</li><li><strong>Interpretation Frauen:</strong><br>• < 0,80: Geringes Risiko (Sanduhr-Fettverteilung)<br>• 0,80–0,84: Moderates Risiko<br>• ≥ 0,85: Erhöhtes Risiko</li></ul>",
    tags: [
      "formel",
      "whr",
      "waist to hip",
      "taillenumfang",
      "hüftumfang",
      "viszeralfett",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich mein Waist-to-Height Ratio (WHtR)?",
    a: "<p><strong>Taillen-zu-Größe-Verhältnis (WHtR):</strong></p><ul><li><strong>Formel:</strong> <code>WHtR = Taillenumfang (cm) / Körpergröße (cm)</code></li><li><strong>Faustregel:</strong> Der Taillenumfang sollte weniger als die Hälfte der Körpergröße betragen (WHtR < 0,50).</li><li><strong>Interpretation (unter 40 Jahre):</strong><br>• < 0,40: Untergewicht<br>• 0,40–0,50: Optimalbereich (gesunder, fettarmer Bauch)<br>• 0,51–0,57: Leichtes Übergewicht<br>• ≥ 0,58: Stark erhöhtes viszerales Fett</li></ul>",
    tags: [
      "formel",
      "whtr",
      "waist to height",
      "bauchumfang",
      "viszerales fett",
    ],
  },
  {
    q: "Berechnung: Maximale Natural-Muskelmasse (Casey-Butt-Formel)",
    a: "<p><strong>Casey-Butt-Formel (Maximales natürliches Muskelpotential):</strong></p><ul><li><strong>Formel:</strong><br><code>LBM_max = Größe(Zoll)^1,5 × (√(Handgelenk)/22,66 + √(Knöchel)/22,42) × (KFA/224 + 1)</code></li><li><strong>Eingabeparameter:</strong> Körpergröße, Handgelenkumfang und Knöchelumfang in Zoll (1 Zoll = 2,54 cm) sowie Ziel-KFA in %.</li><li><strong>Bedeutung:</strong> Zeigt anhand der Knochen- und Gelenkstruktur das wissenschaftlich maximal erreichbare fettfreie Körpergewicht (LBM) ohne Steroide.</li></ul>",
    tags: [
      "formel",
      "casey butt",
      "natural limit",
      "maximales muskelpotential",
      "genetik",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meine Relativkraft?",
    a: "<p><strong>Relativkraft (Kraft-zu-Gewicht-Verhältnis):</strong></p><ul><li><strong>Formel:</strong> <code>Relativkraft = 1RM (kg) / Körpergewicht (kg)</code></li><li><strong>Benchmarks für Männer (bezogen auf 1RM):</strong><br>• <strong>Bankdrücken:</strong> 1,0× (Solide) | 1,5× (Sehr stark) | 2,0× (Elite)<br>• <strong>Kniebeugen:</strong> 1,5× (Solide) | 2,0× (Sehr stark) | 2,5× (Elite)<br>• <strong>Kreuzheben:</strong> 1,75× (Solide) | 2,25× (Sehr stark) | 3,0× (Elite)</li><li><strong>Beispiel:</strong> Ein 80 kg Athlet beugt 160 kg = <code>160 / 80 = 2,0× Körpergewicht</code> (Sehr stark).</li></ul>",
    tags: [
      "formel",
      "relativkraft",
      "kraftstandards",
      "kraft zu gewicht",
      "benchmarks",
      "powerlifting",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich den SFR-Score einer Übung (Stimulus-to-Fatigue)?",
    a: "<p><strong>SFR-Index (Reiz-Ermüdungs-Verhältnis):</strong></p><ul><li><strong>Formel:</strong> <code>SFR-Score = Subjektiver Muskelreiz (1–10) / Systemische Ermüdung (1–10)</code></li><li><strong>Muskelreiz (1–10):</strong> Pump, Zielmuskelbrennen, Dehnungsgefühl.</li><li><strong>Systemische Ermüdung (1–10):</strong> Atemnot, Gelenkbelastung, ZNS-Plattsein.</li><li><strong>Vergleich:</strong><br>• Freie Kniebeuge: Reiz 8 / Ermüdung 9 = <code>SFR 0,88</code><br>• Hack Squat / Beinpresse: Reiz 9 / Ermüdung 5 = <code>SFR 1,80</code> (Überlegen für reine Hypertrophie).</li></ul>",
    tags: [
      "formel",
      "sfr",
      "stimulus to fatigue",
      "reiz ermüdung",
      "übungsauswahl",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meine Kreatin-Dosierung?",
    a: "<p><strong>Kreatin-Monohydrat Dosierungs-Formel:</strong></p><ul><li><strong>A. Schnelle Ladephase (5–7 Tage):</strong><br><code>Tagesdosis (g) = Körpergewicht in kg × 0,3 g</code> (aufgeteilt auf 4 Portionen à 5 g über den Tag).</li><li><strong>B. Dauereinnahme (Standard):</strong><br><code>Tagesdosis (g) = Körpergewicht in kg × 0,04 g</code> oder <strong>pauschal 3 bis 5 g täglich</strong>.</li><li><strong>Rechenbeispiel (85 kg Athlet):</strong><br>Ladephase: 85 × 0,3 ≈ 25 g/Tag (für 5 Tage)<br>Dauereinnahme: 85 × 0,04 ≈ 3,5 bis 5 g/Tag dauerhaft.</li></ul>",
    tags: [
      "formel",
      "kreatin",
      "creatine",
      "dosierung",
      "ladephase",
      "kreatineinnahme",
    ],
  },
  {
    q: "Berechnung: Wie viel Koffein sollte ich vor dem Training nehmen?",
    a: "<p><strong>Pre-Workout Koffein-Dosierungsformel:</strong></p><ul><li><strong>Formel:</strong> <code>Optimale Dosis (mg) = Körpergewicht in kg × 3 bis 6 mg</code></li><li><strong>Timing:</strong> 45 bis 60 Minuten vor Trainingsbeginn einnehmen.</li><li><strong>Rechenbeispiel (80 kg Athlet):</strong><br>• Minimum (Fokus/Alltag): <code>80 × 3 = 240 mg Koffein</code> (~2–3 Espressi)<br>• Maximum (Wettkampf/PR-Tage): <code>80 × 6 = 480 mg Koffein</code>.</li></ul>",
    tags: [
      "formel",
      "koffein",
      "pre workout",
      "booster",
      "dosierung",
      "kaffee",
    ],
  },
  {
    q: "Berechnung: Wie berechne ich meinen Kalorienverbrauch pro Sportart (MET)?",
    a: "<p><strong>MET-Formel (Metabolisches Äquivalent):</strong></p><ul><li><strong>Formel:</strong> <code>Kalorienverbrauch (kcal) = MET-Wert × Körpergewicht in kg × Dauer in Stunden</code></li><li><strong>Typische Gym-Werte:</strong><br>• Schweres Krafttraining: <code>MET = 6,0</code><br>• Moderates Kraft-/Maschinentraining: <code>MET = 3,5–4,0</code><br>• Incline Treadmill Walk (5 km/h, Steigung): <code>MET = 4,5–5,5</code><br>• Ruderergometer / Spinning: <code>MET = 7,0</code><br>• HIIT-Sprints: <code>MET = 8,5–11,0</code></li><li><strong>Rechenbeispiel (80 kg, 1h schweres Krafttraining):</strong><br><code>6,0 × 80 × 1,0 = 480 kcal Verbrauch</code>.</li></ul>",
    tags: [
      "formel",
      "met",
      "kalorienverbrauch",
      "sportart",
      "energieverbrauch",
      "metabolisch",
    ],
  },
  {
    q: "Berechnung: Wie viel Proteinpulver / Eiweiß muss ich für mein Gewicht nehmen?",
    a: "<p><strong>Eiweißbedarf & Shake-Dosierung:</strong></p><ul><li><strong>1. Gesamtbedarf:</strong> <code>Körpergewicht (kg) × 1,6 bis 2,2 g</code> (Standard: 2,0 g/kg). Bei 80 kg = 160 g Gesamteiweiß täglich.</li><li><strong>2. Feste Nahrung:</strong> Decke 70–80 % über normale Lebensmittel (Fleisch, Fisch, Eier, Quark, Hülsenfrüchte) ab.</li><li><strong>3. Shake-Ergänzung:</strong> 1 Messlöffel (Scoop = ca. 30 g Pulver) liefert ca. 23–25 g reines Eiweiß. 1–2 Shakes pro Tag reichen aus, um die Lücke zu schließen.</li><li><strong>Einnahme-Tipp:</strong> 30–40 g Pulver mit 250–300 ml Wasser oder fettarmer Milch innerhalb von 1–3 Stunden nach dem Training oder morgens im Porridge.</li></ul>",
    tags: [
      "formel",
      "protein",
      "proteinpulver",
      "eiweißbedarf",
      "whey dosierung",
      "shake",
    ],
  },
  {
    q: "Berechnung: Welches Proteinpulver ist das richtige (Whey Konzentrat, Isolat, Casein)?",
    a: "<p><strong>Die 4 Proteinpulver-Arten im Vergleich:</strong></p><ul><li><strong>1. Whey Konzentrat (Allrounder & Preis-Leistung):</strong> 75–80 % Eiweiß. Schnelle Verdauung, cremiger Geschmack. Ideal für den täglichen Bedarf und nach dem Workout.</li><li><strong>2. Whey Isolat (Diät & empfindlicher Magen):</strong> 85–92 % Eiweiß. Nahezu fett-, kohlenhydrat- und laktosefrei. Ideal für strenge Diäten oder bei Laktoseintoleranz.</li><li><strong>3. Micellar Casein (Nachtprotein):</strong> 75–80 % Eiweiß. Sehr langsame Verdauung (versorgt den Körper 6–8 Stunden lang konstant mit Aminosäuren). Ideal vor dem Schlafen.</li><li><strong>4. Veganes Mehrkomponenten-Protein (Erbse + Reis/Soja):</strong> 70–80 % Eiweiß, hypoallergen. Kombination sichert ein vollständiges Aminosäurenprofil (alle 9 EAAs).</li></ul>",
    tags: [
      "formel",
      "proteinpulver",
      "whey",
      "isolat",
      "casein",
      "veganes protein",
      "eiweißarten",
    ],
  },

  // ========================================================================
  // 4. KUNDEN- & COACHING-FAQS (ABGESTIMMT AUF PREISE, RECHT & PRAXIS)
  // ========================================================================

  // --- KATEGORIE 1: QUICK-START, BEDENKEN & EINSTIEG ---
  {
    q: "Ist das Personal Training auch für absolute Anfänger ohne Vorerfahrung geeignet?",
    a: "<p><strong>Absolut!</strong> Egal ob du Muskeln aufbauen, Körperfett reduzieren oder schmerzfrei im Alltag werden möchtest: Ein Großteil meiner Klienten startet ohne Vorerfahrung. Wir beginnen mit einer gründlichen Anamnese und Haltungsanalyse. Du erlernst die fundamentalen Verbundübungen (Compound Movements) Schritt für Schritt mit biomechanisch sauberer Technik, bevor wir die Lasten über Progressive Overload kontrolliert erhöhen.</p>",
    tags: [
      "anfänger",
      "einsteiger",
      "vorerfahrung",
      "neuling",
      "keine erfahrung",
      "grundlagen",
      "technik lernen",
      "start",
    ],
  },
  {
    q: "Ich bin unsicher, älter, stark übergewichtig oder habe ein Handicap – passt das Training zu mir?",
    a: "<p><strong>Zu 100 % ja.</strong> Jeder Mensch hat das Recht, sich stark und wohlzufühlen – ganz unabhängig von Ausgangsgewicht, Alter oder Einschränkungen:<br>• <strong>Keine Bewertung:</strong> Wir schaffen einen geschützten Raum in deinem individuellen Tempo.<br>• <strong>Medizinische Anpassung:</strong> Als zertifizierter Medizinischer Fitnesstrainer passe ich Übungsauswahl, Bewegungswinkel und Intensität präzise an deine Gelenke an.<br>• <strong>Fit in jedem Alter:</strong> Gezielter Muskelaufbau stärkt die Knochendichte, schützt Gelenke und bringt Alltagskraft zurück.</p>",
    tags: [
      "übergewicht",
      "handicap",
      "älter",
      "senioren",
      "unsicher",
      "scham",
      "angst vor gym",
      "medizinische fitness",
      "adipositas",
    ],
  },
  {
    q: "Muss ich schon fit sein, bevor ich ein Personal Training starte?",
    a: "<p><strong>Nein, ganz im Gegenteil!</strong> Du musst weder Ausdauer noch Kraft mitbringen. Genau dafür buchst du ein Coaching: um von deinem aktuellen Ist-Zustand sicher, schmerzfrei und ohne Umwege fit zu werden. Wir fangen genau dort an, wo du heute stehst.</p>",
    tags: [
      "vorab fit sein",
      "unfit starten",
      "zu schwach",
      "erst abnehmen",
      "peinlich",
      "fitnesslevel",
      "vorbereitung",
    ],
  },
  {
    q: "Bin ich an ein Abo oder an lange Vertragslaufzeiten gebunden?",
    a: "<p><strong>Nein, absolut nicht.</strong> Es gibt keine automatischen Vertragsverlängerungen oder versteckten Abos. Du buchst transparente Pakete (z. B. 4- oder 12-Wochen-Pakete) oder Einzelsessions. Nach Ablauf entscheidest du völlig frei, ob du verlängern, eigenständig weitertrainieren oder gelegentliche Check-ins nutzen möchtest.</p>",
    tags: [
      "vertragsbindung",
      "knebelvertrag",
      "abo",
      "kündigungsfrist",
      "verlängerung",
      "laufzeit",
      "kosten",
      "agb",
    ],
  },
  {
    q: "Brauche ich zwingend eine Mitgliedschaft im Fitnessstudio in Gotha?",
    a: "<p>Nicht zwingend für den Start. Für Einzelsessions oder das Kennenlernen reicht oft eine einfache Tageskarte vor Ort. Wenn du regelmäßig trainierst und deine Einheiten zwischen unserem Coaching selbstständig durchziehst, ist eine reguläre Studio-Mitgliedschaft in Gotha meist die günstigste und praktischste Lösung.</p>",
    tags: [
      "studiomitgliedschaft",
      "vertrag studio",
      "tageskarte",
      "eintritt gym",
      "mitglied werden",
      "gotha studio",
      "location",
    ],
  },
  {
    q: "Wie schnell sehe oder spüre ich die ersten Ergebnisse?",
    a: "<p>Spüren wirst du es bereits nach <strong>1 bis 2 Wochen</strong>: mehr Energie im Alltag, bessere Haltung und spürbare Muskelspannung. Erste messbare Kraftsteigerungen siehst du nach 2 bis 3 Wochen. Sichtbare optische Veränderungen (Körperfettabbau und definierte Muskeln) zeigen sich verlässlich nach <strong>4 bis 8 Wochen</strong>.</p>",
    tags: [
      "wann ergebnisse",
      "erste erfolge",
      "wie schnell muskeln",
      "wann abnehmen",
      "dauer",
      "transformation",
      "fortschritt",
    ],
  },
  {
    q: "Kann ich auch zusammen mit meinem Partner oder einem Freund trainieren (2:1 Training)?",
    a: "<p><strong>Ja, ein 2-zu-1 Partnertraining ist nach Absprache möglich!</strong> Es macht Spaß, motiviert zusätzlich und ihr könnt euch die Kosten teilen. Voraussetzung ist, dass wir im Erstgespräch prüfen, ob eure Zielsetzungen und Trainingszeiten gut harmonieren.</p>",
    tags: [
      "partner training",
      "zu zweit trainieren",
      "2 zu 1 coaching",
      "mit freund trainieren",
      "paar training",
      "geteilte kosten",
    ],
  },
  {
    q: "Was unterscheidet dich von einem normalen Fitnesstrainer im Studio vor Ort?",
    a: "<p>Ein Studio-Trainer betreut oft dutzende Personen gleichzeitig auf der Fläche und vergibt starre Standardpläne. Im 1:1 Coaching stehe ich die vollen 60 Minuten ausschließlich an deiner Seite: Wir optimieren Millimeter bei der Ausführung, passen jeden Satz biomechanisch an deine Hebel an und begleiten dich mit WhatsApp-Support, Ernährungs- und Progressions-Tracking durch deinen gesamten Alltag.</p>",
    tags: [
      "unterschied trainer",
      "studio trainer vs personal trainer",
      "warum trainer",
      "mehrwert coaching",
      "betreuung",
    ],
  },
  {
    q: "Ich habe Rücken- oder Gelenkschmerzen – kann ich trotzdem mittrainieren?",
    a: "<p><strong>Ja, definitiv.</strong> Als ausgebildeter Medizinischer Fitnesstrainer und Faszientrainer passe ich jede Übung an deine individuelle Schmerzgrenze und Biomechanik an. Durch gezieltes Aufwärmen und kontrollierten Kraftaufbau beseitigen wir muskuläre Dysbalancen, entlasten Bandscheiben und Gelenke und lindern Verspannungen dauerhaft.</p>",
    tags: [
      "rückenschmerzen",
      "gelenkschmerzen",
      "bandscheibe",
      "verspannungen",
      "knieschmerzen",
      "reha",
      "schmerzfrei",
      "gesundheit",
    ],
  },
  {
    q: "Warum 1:1 Coaching statt unzähligen Trainingsvideos, Social Media und Internet-Trends?",
    a: "<p>Im Internet kursieren unzählige widersprüchliche Trends, Bro-Science und Mythen. Im 1-zu-1 Coaching sparst du dir monatelanges Ausprobieren: Wir optimieren Hebelverhältnisse, Griffweiten und Bewegungspfade exakt auf deine Anatomie für maximale Mind-Muscle Connection und schnelle, verletzungsfreie Resultate.</p>",
    tags: [
      "social media",
      "videos",
      "youtube",
      "bro science",
      "warum personal trainer",
      "zeitersparnis",
      "mythen",
    ],
  },

  // --- KATEGORIE 2: COACHING, BETREUUNG & ORGANISATION ---
  {
    q: "In welchem Fitnessstudio findet das Personal Training statt?",
    a: "<p>Unser 1:1 Training findet direkt vor Ort im <strong>Fitnessstudio in Gotha</strong> statt. Dort haben wir Zugriff auf den kompletten Freihantelbereich, Power-Racks, Kraftmaschinen sowie Kabeltürme. Details stimmen wir vorab im Kennenlerngespräch ab.</p>",
    tags: [
      "fitnessstudio",
      "studio",
      "gotha",
      "standort",
      "wo trainieren",
      "location",
      "ort",
      "gym",
    ],
  },
  {
    q: "Wie läuft das kostenlose Erstgespräch ab?",
    a: "<p>Das Erstgespräch (telefonisch oder vor Ort in Gotha) ist zu <strong>100 % unverbindlich und kostenlos</strong>. Wir analysieren deinen aktuellen Trainingsstand, besprechen deine sportlichen und gesundheitlichen Ziele und ermitteln das für dich optimale Betreuungspaket.</p>",
    tags: [
      "erstgespräch",
      "kennenlernen",
      "kostenlos",
      "beratung",
      "probetraining",
      "analyse",
      "gespräch",
    ],
  },
  {
    q: "Wie flexibel sind die Trainingszeiten für Berufstätige oder Schichtarbeiter?",
    a: "<p><strong>Sehr flexibel.</strong> Termine stimmen wir individuell ab – frühmorgens vor der Arbeit, in der Mittagspause, am Nachmittag, abends oder am Wochenende. Auch bei wechselnden Schichtplänen finden wir verlässliche Zeiten.</p>",
    tags: [
      "trainingszeiten",
      "schichtarbeit",
      "berufstätig",
      "flexibel",
      "wochenende",
      "frühmorgens",
      "termine",
      "uhrzeit",
    ],
  },
  {
    q: "Wie oft pro Woche ist ein Coaching sinnvoll, um sichtbare Erfolge zu erzielen?",
    a: "<p>Für messbaren Muskelaufbau und Fettabbau sind <strong>2 bis 3 Einheiten pro Woche</strong> ideal. Die meisten Klienten nutzen 1 bis 2 betreute 1:1 Live-Sessions mit mir im Studio und absolvieren weitere Einheiten selbstständig nach dem maßgeschneiderten Trainingsplan.</p>",
    tags: [
      "häufigkeit",
      "wie oft trainieren",
      "frequenz",
      "einheiten pro woche",
      "trainingsplan",
      "erfolge",
    ],
  },
  {
    q: "Was passiert zwischen den Einheiten – kann ich dir bei Fragen schreiben?",
    a: "<p><strong>Selbstverständlich!</strong> Bei Fragen zu Übungsausführung, Videos zur Formkontrolle, Regeneration oder Praxistipps stehe ich dir im Rahmen der Coaching-Pakete verlässlich per WhatsApp für Feedback und Support zur Seite.</p>",
    tags: [
      "whatsapp",
      "support",
      "chat",
      "fragen",
      "videoanalyse",
      "formkontrolle",
      "feedback",
      "hilfe",
    ],
  },
  {
    q: "Was passiert, wenn ich einen vereinbarten Trainingstermin absagen muss?",
    a: "<p>Bei einer Absage bis spätestens <strong>24 Stunden vor dem Termin</strong> finden wir unkompliziert per WhatsApp, E-Mail oder telefonisch einen zeitnahen Ersatztermin, ohne dass dir deine Einheit verfällt. Bei späteren Absagen unter 24 Stunden wird die Einheit berechnet bzw. vom Kontingent entwertet.</p>",
    tags: [
      "termin absagen",
      "absage",
      "24 stunden",
      "frist",
      "verschieben",
      "ausfall",
      "stornierung",
      "agb",
    ],
  },
  {
    q: "Was passiert, wenn ich während des Monatspakets krank werde oder im Urlaub bin?",
    a: "<p><strong>Deine gebuchten Einheiten verfallen nicht.</strong> Durch faire Kulanzzeiträume (z. B. bis zu 6 Wochen Laufzeit beim 4-Wochen-Paket) holen wir ausgefallene Sessions flexibel nach, sobald du wieder vollständig fit und einsatzbereit bist.</p>",
    tags: [
      "urlaub",
      "krank",
      "pause",
      "paket pausieren",
      "kulanz",
      "nachholen",
      "gültigkeit",
      "ausfallzeit",
    ],
  },
  {
    q: "Welche Zahlungsarten gibt es und ist Ratenzahlung möglich?",
    a: "<p>Du kannst bequem per <strong>Banküberweisung, PayPal, SEPA-Lastschrift oder direkt vor Ort in bar (gegen Quittung)</strong> bezahlen. Für unser 12-Wochen-Paket bieten wir eine zinsfreie Ratenzahlung in <strong>3 Monatsraten zu je 259 €</strong> an. <em>(Hinweis: Rechnungsstellung bzw. Quittung erfolgt ordnungsgemäß gemäß § 19 UStG ohne Ausweis von Umsatzsteuer/Mehrwertsteuer.)</em></p>",
    tags: [
      "zahlungsarten",
      "bezahlung",
      "ratenzahlung",
      "paypal",
      "überweisung",
      "kosten",
      "preise",
      "quittung",
      "kleinunternehmer",
    ],
  },
  {
    q: "Kann ich mein Coaching steuerlich absetzen?",
    a: "<p>Für Selbstständige, Freiberufler und Unternehmer kann Personal Training unter bestimmten Voraussetzungen (z. B. als betriebliche Gesundheitsförderung oder Coaching zur Erhaltung der Leistungsfähigkeit) als Betriebsausgabe geltend gemacht werden. Du erhältst für alle Leistungen eine ordnungsgemäße Rechnung/Quittung gemäß § 19 UStG (Kleinunternehmerregelung). Kläre die steuerliche Anerkennung am besten kurz mit deinem Steuerberater.</p>",
    tags: [
      "steuer absetzen",
      "personal training absetzen",
      "betriebsausgabe",
      "rechnung trainer",
      "steuerberater",
      "kleinunternehmer",
      "finanzamt",
    ],
  },
  {
    q: "Was passiert mit meinen erfassten Leistungsdaten, Maßen und Notizen?",
    a: "<p><strong>Deine Daten gehören zu 100 % dir.</strong> Diskretion und Datenschutz haben oberste Priorität:<br>• <strong>Keine Veröffentlichung:</strong> Bilder oder Daten landen niemals auf Social Media.<br>• <strong>Zweckgebunden:</strong> Aufzeichnungen dienen rein deiner Trainingssteuerung.<br>• <strong>Jederzeitige Datenherausgabe & Löschung:</strong> Gemäß Art. 20 DSGVO händigen wir dir deine Aufzeichnungen auf Wunsch jederzeit aus oder löschen sie sofort unwiderruflich.</p>",
    tags: [
      "datenschutz",
      "daten",
      "privatsphäre",
      "dsgvo",
      "notizen",
      "löschung",
      "diskretion",
      "art 20 dsgvo",
    ],
  },
  {
    q: "Was passiert nach dem Ende unserer gebuchten Coaching-Wochen?",
    a: "<p>Nach Abschluss unseres Pakets bist du bestens ausgebildet, um selbstständig und sicher im Gym weiterzutrainieren. Du nimmst deinen maßgeschneiderten Trainings- und Ernährungsplan mit. Viele Klienten buchen anschließend flexible Einzel-Check-ins (z. B. alle 4–8 Wochen zur Planaktualisierung) oder verlängern die Betreuung für die nächste Progressionsphase.</p>",
    tags: [
      "nach dem coaching",
      "verlängerung",
      "weiterführung",
      "alumni",
      "check in buchen",
      "selbstständig weitermachen",
    ],
  },

  // --- KATEGORIE 3: WORKOUT-PRAXIS, GYM-ALLTAG & EQUIPMENT ---
  {
    q: "Wie läuft eine typische 60-Minuten-Session im Studio genau ab?",
    a: "<p>1. <strong>Ganzheitliches Warm-up (~10 Min.):</strong> Leichtes Cardio zur Erhöhung der Körperkerntemperatur und Gelenkschmiere (Synovia).<br>2. <strong>Dynamisches Dehnen & Mobility:</strong> Erweiterung des schmerzfreien Bewegungsumfangs (ROM).<br>3. <strong>Spezifische Aufwärmsätze:</strong> Nervensystem gezielt an der 1. Übung bahnen.<br>4. <strong>Fokussiertes Haupttraining:</strong> Hochqualitative Arbeitssätze mit direktem Bio-Feedback bei jeder Wiederholung.</p>",
    tags: [
      "trainingsablauf",
      "60 minuten",
      "session",
      "warm up",
      "mobility",
      "arbeitssätze",
      "live feedback",
      "reps",
    ],
  },
  {
    q: "Was muss ich zum Coaching und ins Gym mitbringen? Welches Equipment brauche ich?",
    a: "<p>Für ein produktives Training reichen die Essentials völlig aus:<br>• <strong>Sportbekleidung & großes Handtuch</strong> als hygienische Unterlage.<br>• <strong>Schuhe mit flacher, harter Sohle</strong> (z. B. Chucks, Barfußschuhe). Stark gedämpfte Laufschuhe schlucken Kraftübertragung bei Kniebeugen.<br>• <strong>Trinkflasche</strong> (1–1,5 Liter Wasser).<br>• Zughilfen (Lifting Straps) oder Gürtel setzen wir bei Bedarf gezielt ein.</p>",
    tags: [
      "mitbringen",
      "equipment",
      "ausrüstung",
      "schuhe",
      "handtuch",
      "sporttasche",
      "trinkflasche",
      "zughilfen",
    ],
  },
  {
    q: "Was soll ich vor der Coaching-Einheit essen und wie viel Zeit sollte dazwischen liegen?",
    a: "<p>Die letzte große Hauptmahlzeit sollte ca. <strong>2 bis 3 Stunden vor der Session</strong> liegen, damit der Magen nicht überlastet ist. 30–45 Minuten vor dem Training eignet sich ein leichter, leicht verdaulicher Kohlenhydratsnack wie eine Banane oder eine Reiswaffel mit etwas Honig.</p>",
    tags: [
      "essen vor training",
      "pre workout snack",
      "mahlzeit vor gym",
      "wann essen",
      "energie",
      "snack",
    ],
  },
  {
    q: "Was mache ich, wenn mir während des Trainings plötzlich schwindelig oder schlecht wird?",
    a: "<p>Sag mir sofort Bescheid! Das ist keine Schande, sondern meist eine einfache Kreislaufreaktion durch zu wenig Trinken oder ungewohnte Pressatmung. Wir unterbrechen die Übung sofort, lagern die Beine hoch, trinken Wasser mit Elektrolyten und stabilisieren den Kreislauf.</p>",
    tags: [
      "schwindel",
      "übelkeit",
      "kreislauf",
      "schwarz vor augen",
      "pause im satz",
      "kreislaufabsacker",
    ],
  },
  {
    q: "Warum korrigierst du meine Atmung bei jeder Übung so genau?",
    a: "<p>Die richtige Atmung sichert die Sauerstoffversorgung und erzeugt über das sogenannte <strong>Bracing</strong> (Bauchinnendruck) maximalen Schutz für die Bandscheiben. Faustregel: Beim Absenken (Exzentrik) tief einatmen, beim Überwinden der Last (Konzentrik) kraftvoll ausatmen.</p>",
    tags: [
      "atmung",
      "bracing",
      "pressatmung",
      "richtig atmen",
      "rumpfspannung",
      "wirbelsäule",
      "valsalva",
    ],
  },
  {
    q: "Warum machen wir oft nur 3 bis 4 Übungen pro Einheit statt 10 verschiedene Geräte?",
    a: "<p>Qualität schlägt Quantität. 3 bis 4 sauber ausgewählte Grund- und Verbundübungen mit hoher Intensität und voller Ausbelastung setzen ein deutlich stärkeres Wachstumssignal als 10 planlos aneinandergereihte Geräte, bei denen man am Ende nur noch kraftlos ermüdet ('Junk Volume').</p>",
    tags: [
      "anzahl übungen",
      "trainingsplan aufbau",
      "warum so wenig geräte",
      "junk volume vermeiden",
      "effizienz",
    ],
  },
  {
    q: "Was passiert, wenn ich das Gewicht bei einer Übung im Satz nicht mehr hochbekomme?",
    a: "<p>Dafür bin ich als dein Trainer und Spotter da! Du kannst absolut angstfrei an deine Grenzen gehen. Sobald die Aufwärtsbewegung stoppt, greife ich minimal ein, führe das Gewicht sicher nach oben und sorge dafür, dass du dich zu keinem Zeitpunkt verletzt.</p>",
    tags: [
      "gewicht fällt",
      "spotter",
      "hilfe",
      "gewicht nicht geschafft",
      "angst vor versagen",
      "sicherheit",
      "steckenbleiben",
    ],
  },
  {
    q: "Meine linke Seite ist schwächer als meine rechte – gleicht sich das durch das Training aus?",
    a: "<p>Ja, leichte Asymmetrien sind normal. Wir gleichen sie gezielt durch <strong>unilaterale Übungen</strong> (z. B. Kurzhanteldrücken, Ausfallschritte oder einarmiges Kabelrudern) aus. Dabei bestimmt immer die schwächere Seite das Gewicht und die Wiederholungsanzahl.</p>",
    tags: [
      "asymmetrie",
      "dysbalance",
      "eine seite schwächer",
      "unilaterales training",
      "ausgleich",
      "kraftunterschied",
    ],
  },
  {
    q: "Ich fühle mich im Studio noch unsicher oder Geräte sind oft besetzt: Wie hilft das Coaching?",
    a: "<p>Unser Coaching gibt dir 100 % Sicherheit: Du lernst Hebel- und Sitzeinstellungen an allen Stationen sowie für jedes Gerät gleichwertige Ausweichübungen (z. B. Dumbbell Press statt Barbell oder Hack Squat statt Beinpresse). Du gehst mit fester Struktur ins Gym.</p>",
    tags: [
      "unsicherheit",
      "geräte besetzt",
      "studio voll",
      "ausweichübungen",
      "alternativen",
      "plan b",
      "souveränität",
    ],
  },
  {
    q: "Muss ich mich vor dem Krafttraining 10 Minuten auf dem Laufband aufwärmen?",
    a: "<p>Ein moderates Warm-up von ca. 10 Minuten auf dem Laufband regt Kreislauf und Gelenkschmiere (Synovia) an. Wichtig: Es darf keine muskuläre Vorermüdung erzeugen. Das eigentliche sportspezifische Aufwärmen erfolgt über <strong>1–2 Warm-up Sets mit leichtem Gewicht</strong> direkt an der ersten Übung.</p>",
    tags: [
      "laufband",
      "aufwärmen",
      "cardio vor kraft",
      "warm up",
      "synovia",
      "gelenkschmiere",
      "aufwärmsätze",
    ],
  },
  {
    q: "Wie lange sollte ich zwischen den Sätzen im Studio pausieren?",
    a: "<p>• <strong>Schwere Grundübungen (2–3 Min. Pause):</strong> Sowohl an schweren Maschinen als auch im Freihantelbereich (Squats, Deadlifts, Bench Press) für volle ATP- und ZNS-Erholung.<br>• <strong>Isolations- & Kabelübungen (60–90 Sek. Pause):</strong> Bei kleineren Muskeln (Seitheben, Trizeps, Curls) regeneriert der Muskel schneller.</p>",
    tags: [
      "satzpause",
      "pausenzeit",
      "rest periods",
      "pause zwischen sätzen",
      "wie lange pause",
      "atp erholung",
    ],
  },
  {
    q: "Wie nutzen wir die Trainingszeit und die Satzpausen optimal?",
    a: "<p>Kein Leerlauf: Wir analysieren jeden Satz unmittelbar nach Abschluss (Gelenkwinkel, Tiefe, Kadenz), klären das Belastungsempfinden (RIR / RPE) in der Pause und besprechen offene Ernährungs- und Progressionsfragen praxisnah.</p>",
    tags: [
      "satzpausen nutzen",
      "zeit nutzen",
      "leerlauf",
      "direkt feedback",
      "technikkorrektur",
      "rir absprechen",
    ],
  },
  {
    q: "Wie halte ich meine Fortschritte fest, wenn ich alleine trainiere?",
    a: "<p>Über einfache Workout-Tracker (z. B. Hevy oder FitNotes): Du erfasst Arbeitsgewichte und Wiederholungen in den Satzpausen. Die visualisierten Kraftkurven und Tonnagewerte analysieren wir in der nächsten gemeinsamen Coaching-Session.</p>",
    tags: [
      "tracking",
      "app",
      "loggen",
      "trainingsbuch",
      "hevy",
      "progress festhalten",
      "selbstständig trainieren",
    ],
  },
  {
    q: "Wie messen wir deinen Trainingsfortschritt – zählt nur die Zahl auf der Waage?",
    a: "<p><strong>Nein!</strong> Wir nutzen ein ganzheitliches <strong>3-Säulen-Tracking</strong>:<br>1. <strong>Kraftprogression im Gym:</strong> Steigen Lasten und Reps bei sauberer Form, baust du garantiert echte Muskelmasse auf.<br>2. <strong>Wöchentlicher Medianwert der Waage:</strong> Filtert alltägliche Wasser- und Magenschwankungen.<br>3. <strong>Maßbandumfänge & Check-in-Fotos:</strong> Zeigen dir objektiv deine optische Veränderung.</p>",
    tags: [
      "waage",
      "gewicht",
      "gewichtsschwankungen",
      "tracking",
      "fortschritt messen",
      "recomposition",
      "3-säulen-tracking",
      "maßband",
    ],
  },

  // --- KATEGORIE 4: ERNÄHRUNG, REGENERATION & GESUNDHEIT ---
  {
    q: "Wie viel Pause sollte zwischen den Einheiten liegen, damit Muskeln optimal wachsen?",
    a: "<p>Muskeln wachsen in der Erholung: Nach einem intensiven Reiz benötigt der Muskel <strong>48 bis 72 Stunden</strong> zur vollständigen Gewebereparatur und Muskelproteinsynthese (MPS). Durch smarte Splits (z. B. OK/UK oder Push/Pull/Legs) können wir an aufeinanderfolgenden Tagen trainieren, da unterschiedliche Muskelketten beansprucht werden.</p>",
    tags: [
      "pause tage",
      "regeneration",
      "muskelwachstum pause",
      "48 stunden",
      "72 stunden",
      "erholung",
      "ruhetag",
      "rest day",
      "mps",
    ],
  },
  {
    q: "Wann ist die beste Tageszeit für das Krafttraining – morgens oder abends?",
    a: "<p>Physiologisch liegt das Leistungsmaximum bei den meisten Menschen am späten Nachmittag bis frühen Abend (16:00 bis 19:00 Uhr), da Körperkerntemperatur und Nervenleitgeschwindigkeit dort Höchstwerte erreichen. Praxis-Grundsatz: Der beste Zeitpunkt ist derjenige, den du langfristig und stressfrei in deinen Alltag integrieren kannst.</p>",
    tags: [
      "tageszeit",
      "uhrzeit",
      "morgens trainieren",
      "abends trainieren",
      "biorhythmus",
      "frühsport",
      "leistungsmaximum",
    ],
  },
  {
    q: "Sollte ich Ausdauertraining (Cardio) vor oder nach dem Krafttraining machen?",
    a: "<p>Wenn Muskelaufbau oder Kraft dein Ziel sind, gilt stets: <strong>Erst Krafttraining, dann Cardio</strong> (oder an getrennten Tagen). Intensives Cardio vorab leert die Glykogenspeicher und ermüdet das ZNS, was die Kraftleistung senkt. Moderates Low-Intensity Cardio nach dem Krafttraining unterstützt den Fettabbau optimal.</p>",
    tags: [
      "cardio",
      "ausdauer",
      "cardio vor oder nach kraft",
      "reihenfolge",
      "laufen vor kraft",
      "incline walking",
      "fettabbau",
    ],
  },
  {
    q: "Woran erkenne ich den Unterschied zwischen gesundem Muskelbrennen und schädlichem Gelenkschmerz?",
    a: "<p>• <strong>Gesundes Muskelbrennen:</strong> Entsteht dumpf mitten im Zielmuskel durch Laktatanhäufung und klingt 15–30 Sekunden nach dem Absetzen ab.<br>• <strong>Schädlicher Schmerz:</strong> Fühlt sich stechend, spitz oder ziehend an und sitzt direkt an Gelenken oder Sehnen. Tritt ein solcher Schmerz auf, stoppen wir den Satz sofort und justieren die Technik.</p>",
    tags: [
      "muskelbrennen",
      "gelenkschmerz",
      "schmerzunterschied",
      "stechender schmerz",
      "laktat",
      "überlastung",
      "schmerz satz",
    ],
  },
  {
    q: "Darf ich mit einer Erkältung oder Halsschmerzen trainieren?",
    a: "<p>Hier gilt die evidenzbasierte <strong>Neck-Rule (Hals-Regel)</strong>:<br>• <strong>Strikte Pause:</strong> Bei Symptomen unterhalb des Halses (Fieber, Husten, Gliederschmerzen, Magen-Darm) ist Krafttraining absolut tabu (Gefahr einer Herzmuskelentzündung / Myokarditis).<br>• <strong>Leichte Restsymptome:</strong> Bei rein leichtem Schnupfen ohne Abgeschlagenheit sind lockere Spaziergänge möglich – schwere Lasten pausieren.</p>",
    tags: [
      "erkältung",
      "krank",
      "halsschmerzen",
      "schnupfen",
      "fieber",
      "neck-rule",
      "myokarditis",
      "husten",
      "pausieren",
    ],
  },
  {
    q: "Soll ich trainieren gehen, wenn ich nach der Arbeit müde oder gestresst bin?",
    a: "<p>Ja, Krafttraining baut mentalen Stress und Cortisol ab! Wir steuern das Training über das Prinzip der <strong>Autoregulation</strong>: Statt Maximalleistungen zu erzwingen, senken wir das Satzvolumen um 1–2 Sätze und legen den Fokus voll auf Muskelgefühl und kontrollierte Technik.</p>",
    tags: [
      "müde",
      "gestresst",
      "stress",
      "erschöpft",
      "nach der arbeit",
      "feierabend",
      "cortisol",
      "autoregulation",
      "mentale frische",
    ],
  },
  {
    q: "Bekomme ich einen strikten Ernährungsplan oder wie läuft die Ernährungsberatung?",
    a: "<p>Nein, ich erstelle bewusst keine starren Verbotspläne, da restriktive Diäten zu Heißhunger und Jo-Jo-Effekt führen. Du lernst das Prinzip des <strong>Flexible Dieting (80:20-Regel)</strong>: Wir steuern Proteinzufuhr und Kalorienbilanz, sodass 80 % unverarbeitete, nährstoffdichte Lebensmittel und 20 % Genussmittel stressfrei Platz finden.</p>",
    tags: [
      "ernährungsplan",
      "ernährung",
      "ernährungsberatung",
      "diätplan",
      "verbote",
      "flexible dieting",
      "kalorien",
      "makros",
      "jo-jo-effekt",
    ],
  },
  {
    q: "Muss ich ständig mein Essen abfotografieren oder per Chat erreichbar sein?",
    a: "<p>Nein, absolut nicht. Du hast Beruf und Alltag – ich bürde dir keinen digitalen Kontrollstress auf. Wenn du Makronährstoffe erfassen möchtest, nutzen wir eine unkomplizierte Tracking-App, werfen zwischen zwei Sätzen kurz gemeinsam einen Blick darauf und konzentrieren uns voll aufs Workout.</p>",
    tags: [
      "essen fotografieren",
      "foto vom essen",
      "tracking stress",
      "kalorien zählen zwang",
      "app",
      "unkompliziert",
    ],
  },
  {
    q: "Welche Supplements sind für Muskelaufbau und Gesundheit wirklich sinnvoll?",
    a: "<p>Für maximalen Erfolg setzen wir nur auf evidenzbasierte Basics:<br>• <strong>Proteinpulver (Whey / Vegan):</strong> Zur einfachen Deckung des Tagesbedarfs (1,6–2,0 g/kg).<br>• <strong>Kreatin-Monohydrat (3–5 g täglich):</strong> Für mehr Maximalkraft und Zellhydratation.<br>• <strong>Omega-3-Fettsäuren (EPA/DHA):</strong> Für Gelenke und Entzündungshemmung.<br>• <strong>Vitamin D3 + K2:</strong> Essenziell für Knochen und Hormonbalance.</p>",
    tags: [
      "supplements",
      "nahrungsergänzung",
      "proteinpulver",
      "whey",
      "kreatin",
      "creatine",
      "omega 3",
      "vitamin d3",
      "vitamin k2",
    ],
  },
  {
    q: "Ist das Training noch effektiv, wenn ich ab und zu feiern gehe oder Alkohol trinke?",
    a: "<p>Absolut ja – Fitness muss in dein echtes Leben passen. Wenn deine Basis zu 80–90 % stimmt, wirft dich ein geselliger Abend nicht aus der Bahn. Wir nutzen smarte Schadensbegrenzung (Kalorienbudgetierung, Elektrolyte, Protein-Timing), um die Regeneration schnell wiederherzustellen.</p>",
    tags: [
      "alkohol",
      "feiern",
      "party",
      "bier",
      "wein",
      "trinken",
      "80/20 prinzip",
      "schadensbegrenzung",
      "kater",
    ],
  },
  {
    q: "Ich habe extremen Muskelkater nach unserer Session – was kann ich tun?",
    a: "<p>Hilfreich sind: viel Wasser trinken, proteinreich essen, Wärme (Badewanne/Sauna) zur Durchblutungsförderung sowie leichte Bewegung (20–30 Min. Spazierengehen). Bitte keine Schmerzmittel nehmen, da diese Anpassungsprozesse dämpfen.</p>",
    tags: [
      "muskelkater lindern",
      "was tun gegen muskelkater",
      "schmerzen nach training",
      "doms",
      "baden muskelkater",
    ],
  },
  {
    q: "Wie viele Schritte sollte ich an Tagen ohne Training machen?",
    a: "<p>Ein Ziel von <strong>7.000 bis 10.000 Schritten täglich</strong> ist optimal. Das kurbelt den Kalorienverbrauch (NEAT) an, fördert die Durchblutung und Regeneration der Beine und belastet im Gegensatz zu Cardio das Nervensystem nicht.</p>",
    tags: [
      "schritte pro tag",
      "10000 schritte",
      "neat alltag",
      "alltagsbewegung",
      "schritte rest day",
      "spazierengehen",
    ],
  },
  {
    q: "Was mache ich bei Restaurant-Einladungen oder Feiern?",
    a: "<p>Genieße den Abend! Wähle bevorzugt proteinreiche Gerichte mit Gemüse/Kartoffeln (z. B. Steak, Geflügel, Fisch) und halte Soßen separat. Spare tagsüber vorab einfach ein paar Fette/Carbs ein, dann passt das Essen perfekt in die Wochenbilanz.</p>",
    tags: [
      "restaurant diät",
      "essen gehen",
      "feiern essen",
      "einladung restaurant",
      "kalorien restaurant",
    ],
  },
  {
    q: "Ich habe Heißhunger auf Süßes – wie gehe ich im Alltag damit um?",
    a: "<p>Trinke sofort ein großes Glas Wasser, iss einen proteinreichen Snack (z. B. Magerquark mit Beeren) oder nutze zuckerfreie Alternativen. Ein kleines Stück dunkle Schokolade ist bei guter Gesamtbilanz absolut erlaubt!</p>",
    tags: [
      "heißhunger",
      "süßigkeiten diät",
      "zuckerhunger",
      "craving tipps",
      "schokolade",
    ],
  },
  {
    q: "Warum wiege ich nach dem Wochenende manchmal plötzlich 1,5 kg mehr?",
    a: "<p>Das ist zu 99 % kein Fett! Der kurzfristige Anstieg liegt fast immer an vermehrtem Salzkonsum, Mageninhalt und vollen Kohlenhydratspeichern (1 g Glykogen bindet ca. 3–4 g Wasser). Nach 2 Tagen normaler Routine normalisiert sich das Gewicht von selbst.</p>",
    tags: [
      "gewichtszunahme wochenende",
      "montags schwerer",
      "wassereinlagerung wochenende",
      "kein fett",
    ],
  },
  {
    q: "Kann ich mein Training alleine im Gym filmen und dir per WhatsApp zur Kontrolle schicken?",
    a: "<p><strong>Ja, unbedingt!</strong> Das ist ein zentraler Bestandteil des Supports: Filme deinen Arbeitssatz von der Seite und sende ihn mir per WhatsApp. Du erhältst zeitnah Feedback zu Gelenkwinkeln, Tiefe und Kadenz.</p>",
    tags: [
      "video schicken",
      "videoanalyse whatsapp",
      "formkontrolle video",
      "technik video prüfen",
      "feedback",
    ],
  },
  {
    q: "Was tun, wenn ich beruflich viel reise oder unterwegs im Hotel bin?",
    a: "<p>Du erhältst für deine Reisezeit einen maßgeschneiderten Plan – entweder angepasst an die Geräte des Hotel-Gyms oder als intensiver Bodyweight-/Miniband-Plan direkt für das Hotelzimmer.</p>",
    tags: [
      "hotel training",
      "reisen fitness",
      "beruflich unterwegs",
      "hotel gym plan",
      "urlaub workout",
    ],
  },
  {
    q: "Brauche ich zwingend Nahrungsergänzungsmittel oder geht es komplett ohne?",
    a: "<p>Du brauchst überhaupt keine Nahrungsergänzungsmittel, um erfolgreich Muskeln aufzubauen oder Fett zu verbrennen! Eine ausgewogene, proteinreiche Ernährung aus echten Lebensmitteln reicht vollkommen aus. Supplements sind lediglich praktische Helfer.</p>",
    tags: [
      "ohne supplements",
      "keine shakes",
      "natürliche ernährung",
      "supplements pflicht",
    ],
  },
  {
    q: "Warum fühle ich mich nach dem Training aufgepumpt und am nächsten Morgen flacher?",
    a: "<p>Das ist die normale physiologische Reaktion: Während des Trainings drückt der 'Pump' massiv Blut und Flüssigkeit in die Muskelzellen. Dieser Zustand flacht ab. Das eigentliche Dickenwachstum (Hypertrophie) passiert unsichtbar in den 48 Stunden der Erholung danach.</p>",
    tags: [
      "pump weg",
      "muskeln flach morgens",
      "pump dauer",
      "hypertrophie erholung",
    ],
  },
  {
    q: "Wie verhalte ich mich, wenn ich während einer Übung ein leichtes Ziehen im Gelenk spüre?",
    a: "<p>Satz sofort kontrolliert beenden! Oft reicht es schon, die Fußstellung um wenige Zentimeter zu drehen, den Griffwinkel anzupassen oder das Handgelenk gerader zu stabilisieren, um den Schmerz komplett zu beseitigen.</p>",
    tags: [
      "ziehen im gelenk",
      "gelenkschmerz satzabbruch",
      "übung abbrechen schmerz",
      "technik korrektur",
    ],
  },
  {
    q: "Was mache ich, wenn ich meine Ernährung im Alltag mal einen Tag komplett verhauen habe?",
    a: "<p>Auf keinen Fall am nächsten Tag hungern oder dich mit extremem Cardio bestrafen! Ein einzelner Ausrutscher ruiniert monatelange Fortschritte nicht. Mental abhaken, viel Wasser trinken und am nächsten Morgen ganz normal im Plan weitermachen.</p>",
    tags: [
      "diät verkackt",
      "cheat day übertrieben",
      "fressanfall",
      "schuldgefühle essen",
      "weitermachen",
    ],
  },
];

// ==========================================================================
// 5. DIE 8 INTERAKTIVEN LIVE-RECHNER WIDGETS (SAUBERES GRID & SCOPED LOOKUP)
// ==========================================================================
const INLINE_CALCULATORS = {
  calories: {
    title: `<span class="material-symbols-rounded">local_fire_department</span> Kalorien- & TDEE-Rechner (Mifflin-St. Jeor)`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Geschlecht *</label>
            <select class="c-sex">
              <option value="male">Männlich</option>
              <option value="female">Weiblich</option>
            </select>
          </div>
          <div class="hub-calc-field">
            <label>Alter (Jahre) *</label>
            <input type="number" class="c-age" placeholder="z. B. 30" min="14" max="99">
          </div>
          <div class="hub-calc-field">
            <label>Körpergröße (cm) *</label>
            <input type="number" class="c-h" placeholder="z. B. 180" min="120" max="230">
          </div>
          <div class="hub-calc-field">
            <label>Gewicht (kg) *</label>
            <input type="number" class="c-w" placeholder="z. B. 80" min="35" max="250" step="0.1">
          </div>
          <div class="hub-calc-field" style="grid-column: 1 / -1;">
            <label>Aktivitätslevel *</label>
            <select class="c-act">
              <option value="1.2">Sitzend (Bürojob / kaum Bewegung)</option>
              <option value="1.375" selected>Leicht aktiv (1–3x Sport / 5.000 Schritte)</option>
              <option value="1.55">Moderat aktiv (3–5x Training / 8–10k Schritte)</option>
              <option value="1.725">Sehr aktiv (6–7x Sport / körperliche Arbeit)</option>
            </select>
          </div>
          <div class="hub-calc-field" style="grid-column: 1 / -1;">
            <label>Dein Ziel *</label>
            <select class="c-goal">
              <option value="maintain" selected>Gewicht halten / Recomp</option>
              <option value="cut-moderate">Fettabbau (moderates Defizit -400 kcal)</option>
              <option value="bulk-lean">Muskelaufbau (Lean Bulk +300 kcal)</option>
            </select>
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubCalories(this)">
          <span>Kalorienbedarf jetzt berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  kfa: {
    title: `<span class="material-symbols-rounded">straighten</span> KFA-Rechner (US-Navy-Methode)`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Geschlecht *</label>
            <select class="k-sex" onchange="toggleNavyHipHub(this)">
              <option value="male">Männlich</option>
              <option value="female">Weiblich</option>
            </select>
          </div>
          <div class="hub-calc-field">
            <label>Größe (cm) *</label>
            <input type="number" class="k-h" placeholder="z. B. 180" min="120" max="230">
          </div>
          <div class="hub-calc-field">
            <label>Nackenumfang (cm) *</label>
            <input type="number" class="k-neck" placeholder="z. B. 38" min="20" max="60" step="0.5">
          </div>
          <div class="hub-calc-field">
            <label>Taillenumfang (cm) *</label>
            <input type="number" class="k-waist" placeholder="z. B. 85" min="40" max="200" step="0.5">
          </div>
          <div class="hub-calc-field k-hip-wrap" style="display: none; grid-column: 1 / -1;">
            <label>Hüftumfang (cm) * (nur Frauen)</label>
            <input type="number" class="k-hip" placeholder="z. B. 95" min="50" max="200" step="0.5">
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubNavyKFA(this)">
          <span>Körperfettanteil berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  bmi: {
    title: `<span class="material-symbols-rounded">scale</span> BMI-Körperanalyse`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Körpergröße (cm) *</label>
            <input type="number" class="b-h" placeholder="z. B. 180" min="120" max="230">
          </div>
          <div class="hub-calc-field">
            <label>Körpergewicht (kg) *</label>
            <input type="number" class="b-w" placeholder="z. B. 80" min="35" max="250" step="0.1">
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubBmi(this)">
          <span>BMI jetzt berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  "1rm": {
    title: `<span class="material-symbols-rounded">fitness_center</span> 1RM Rechner (Maximalkraft-Schätzung)`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Bewegtes Gewicht (kg) *</label>
            <input type="number" class="rm-w" placeholder="z. B. 100" min="1" max="500" step="0.5">
          </div>
          <div class="hub-calc-field">
            <label>Wiederholungen (1–15) *</label>
            <input type="number" class="rm-r" placeholder="z. B. 6" min="1" max="15">
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHub1RM(this)">
          <span>1RM Maximalkraft berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  standards: {
    title: `<span class="material-symbols-rounded">military_tech</span> Kraftstandards (Relativkraft-Check)`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Geschlecht *</label>
            <select class="st-sex">
              <option value="male">Männlich</option>
              <option value="female">Weiblich</option>
            </select>
          </div>
          <div class="hub-calc-field">
            <label>Körpergewicht (kg) *</label>
            <input type="number" class="st-bw" placeholder="z. B. 80" min="35" max="200" step="0.5">
          </div>
          <div class="hub-calc-field">
            <label>Grundübung *</label>
            <select class="st-lift">
              <option value="bench">Bankdrücken (Bench Press)</option>
              <option value="squat">Kniebeugen (Squat)</option>
              <option value="deadlift">Kreuzheben (Deadlift)</option>
            </select>
          </div>
          <div class="hub-calc-field">
            <label>1RM Leistung (kg) *</label>
            <input type="number" class="st-lw" placeholder="z. B. 100" min="10" max="400" step="0.5">
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubStandards(this)">
          <span>Kraftstandard berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  progress: {
    title: `<span class="material-symbols-rounded">trending_up</span> Gym Progress & Tonnage-Tracker`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field" style="grid-column: 1 / -1;">
            <label>Session A: Gewicht (kg) × Reps × Sätze *</label>
            <div class="hub-calc-subgrid">
              <input type="number" class="pr-w1" placeholder="Gewicht kg" step="0.5">
              <input type="number" class="pr-r1" placeholder="Wdh.">
              <input type="number" class="pr-s1" placeholder="Sätze">
            </div>
          </div>
          <div class="hub-calc-field" style="grid-column: 1 / -1;">
            <label>Session B: Gewicht (kg) × Reps × Sätze *</label>
            <div class="hub-calc-subgrid">
              <input type="number" class="pr-w2" placeholder="Gewicht kg" step="0.5">
              <input type="number" class="pr-r2" placeholder="Wdh.">
              <input type="number" class="pr-s2" placeholder="Sätze">
            </div>
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubProgress(this)">
          <span>Tonnage-Vergleich berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  rpe: {
    title: `<span class="material-symbols-rounded">speed</span> RPE & RIR Intensitätsrechner`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>1RM Maximalkraft (kg) *</label>
            <input type="number" class="rpe-1rm" placeholder="z. B. 120" min="10" max="500" step="0.5">
          </div>
          <div class="hub-calc-field">
            <label>Geplante Reps (1–12) *</label>
            <input type="number" class="rpe-reps" placeholder="z. B. 8" min="1" max="12">
          </div>
          <div class="hub-calc-field" style="grid-column: 1 / -1;">
            <label>Ziel-Intensität (RPE / RIR) *</label>
            <select class="rpe-target">
              <option value="10">RPE 10 (0 RIR · Absolutes Muskelversagen)</option>
              <option value="9" selected>RPE 9 (1 RIR · 1 Wdh. im Tank)</option>
              <option value="8">RPE 8 (2 RIR · 2 Wdh. im Tank · Optimal)</option>
              <option value="7">RPE 7 (3 RIR · 3 Wdh. im Tank)</option>
            </select>
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubRPE(this)">
          <span>Arbeitsgewicht berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },

  volume: {
    title: `<span class="material-symbols-rounded">bar_chart</span> MEV/MRV Satzvolumen-Rechner`,
    html: `
      <div class="hub-inline-calc">
        <div class="hub-calc-grid">
          <div class="hub-calc-field">
            <label>Muskelgruppe *</label>
            <select class="v-muscle">
              <option value="chest">Brust (Pectoralis)</option>
              <option value="back">Rücken (Latissimus & oberer Rücken)</option>
              <option value="quads">Quadrizeps (Vordere Oberschenkel)</option>
              <option value="hamstrings">Hamstrings & Gluteus (Beinrückseite / Po)</option>
              <option value="shoulders">Schultern (Seitliche & hintere Delts)</option>
              <option value="arms">Arme (Bizeps & Trizeps)</option>
            </select>
          </div>
          <div class="hub-calc-field">
            <label>Trainingserfahrung *</label>
            <select class="v-exp">
              <option value="beginner">Anfänger (&lt; 1 Jahr Training)</option>
              <option value="intermediate" selected>Fortgeschritten (1–3 Jahre)</option>
              <option value="advanced">Ambitioniert / Erfahren (&gt; 3 Jahre)</option>
            </select>
          </div>
        </div>
        <button class="hub-calc-submit-btn" type="button" onclick="calcHubVolume(this)">
          <span>Optimales Satzvolumen berechnen</span>
        </button>
        <div class="calc-result-box res-box" style="display: none;"></div>
      </div>`,
  },
};
