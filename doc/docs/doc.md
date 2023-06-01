# Dokumentation

### Inhaltsverzeichnis

- [Dokumentation - Vocabulary Webapplication](#dokumentation)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [IPERKA](#iperka)
    - [Informieren](#informieren)
    - [Planen](#planen)
    - [Entscheiden](#entscheiden)
    - [Realisieren](#realisieren)
    - [Kontrollieren](#kontrollieren)
    - [Auswerten](#auswerten)
  - [Einleitung](#einleitung)
  - [Technologien](#technologien)
  - [Quellen](#quellen)
  - [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
    - [test](#)
  - [Anforderungen](#anforderungen)
  - [Arbeitspakete](#arbeitspakete)
  - [Ausführung](#ausführung)
  - [Testen](#testen)
    - [Testumgebungen](#testumgebungen)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Einleitung](#einleitung)
- [Technologien](#technologien)
- [Quellen](#quellen)
- [Anforderungen](#anforderungen)

### Planen

- [Testfälle](#testfälle)
- [Arbeitspakete](#arbeitspakete)

### Entscheiden

- [Technologien](#technologien)

### Realisieren

- [Ausführung](#ausführung)

### Kontrollieren

- [Testfälle](#testfälle)
- [Tesprotokoll](#testprotokoll)
- [Testbericht](#testbericht)

### Auswerten

- [Projektauswertung](#projektauswertung)

## Einleitung

Unser Ziel ist es eine Wetterapp für Android zu Programmieren. Das Programm soll neben einer Darstellung für das Wetter auch z.B. den Hintergrund anhand von dem Wetter ändern können.

## Technologien

Für unsere Wetterapp ver wenden wir Folgende Technologien:

- [Docusaurus](https://docusaurus.io/)
- [Deta](https://deta.space/)
- [Netlify](https://www.netlify.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [Weather API](https://www.weatherapi.com/)

## Quellen

- [Docusaurus](https://docusaurus.io/docs)
- [Weather API](https://www.weatherapi.com/)
- [TypeScript React Native Expo Tutorial](https://www.youtube.com/watch?v=H8qOotIAaEA)
- [Docusaurus Tutorial](https://www.youtube.com/watch?v=2R53Y7eP45k)
- ## Lokale Entwicklungsumgebung

### Expo Go Download

Man muss die App Expo Go Downloaden [hier](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US&pli=1) ist der Google Play Download und [hier](https://apps.apple.com/app/apple-store/id982107779) der App Store Download.

### Lokale Entwicklungsumgebung aufsetzen

#### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei der Erweiterung Prettier eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die eine Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/sanqro/weather) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

![](../assets/fork.png)

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/weather.git
cd vocabulary/
```

#### Dependencies mit NPM installieren

**_Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/)_**

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

**Dependencies im Client installieren**

```bash
cd client/
npm i
cd ..
```

_Nun sollten alle Dependencies installiert worden sein und es sollte eine Fehlermeldung erscheinen, dass es sechs verheerende Sicherheitslücken gibt. Diese sind jedoch momentan zu vernächlässigen, da es zu diesem Zeitpunkt noch keine Lösung für diese gibt **[Stand: Mai 2023]**._

```bash
cd client/
npm run start
```

Nun kann man den QR-Code scannen mit dem Handy und man wird direkt in die Expo Go App weitergeleitet und die Weatther App wird gestartet.

## Anforderungen

| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                        |
| :------- | :-------------- | :---------------- | :------------------------------------------------------------------ |
| 1        | Muss            | funk.             | Die App soll nach der Erlaubnis fragen, um den Standort abzufragen. |
| 2        | Muss            | funk.             | Die App soll den Standort vom Benutzer abrufen.                     |
| 3        | Muss            | funk              | Die App soll den Standort vom Benutzer anzeigen.                    |
| 4        | Muss            | funk              | Die App zeigt die Temparatur in Grad an vom Standort.               |
| 5        | Muss            | funk              | Die App zeigt an wie sich das Wetter anfühlt in Grad vom Standort.  |
| 6        | Muss            | funk              | Die App zeigt die Feuchtigkeit in Prozent an vom Standort.          |
| 7        | Muss            | funk.             | Die Dokumentation soll mit Docusaurus gemacht sein                  |
| 8        | Muss            | funk.             | Die Dokumentation soll öffentlich zugänglich sein.                  |
| 9        | Kann            | qual.             | Der Hintergrund der App soll sich nach der Temperatur anpassen.     |
| 10       | Kann            | qual.             | Die App zeigt ein Regenlogo an, wenn es regnet.                     |
| 11       | Kann            | qual.             | Die App zeigt ein Sonnenlogo an, wenn die Sonne scheint.            |

## Arbeitspakete

> 1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
> 1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
> Arbeitspakete \* Sitzungen \* Gruppenmitglieder
>
> 5 \* 5 \* 4 = 100 Arbeitpakete

| Nr.     | Frist      | Beschreibung                                                        | Zeit in Arbeitspaketen (geplant) |
| ------- | ---------- | ------------------------------------------------------------------- | :------------------------------- |
| <br />1 | 28.04.2023 | Informieren (von IPERKA)                                            | 28                               |
| 2       | 28.04.2023 | Planen (von IPERKA)                                                 | 8                                |
| 3       | 28.04.2023 | Entscheiden (von IPERKA)                                            | 4                                |
| 4       | 12.05.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 1 bis 3 und 7 bis 8  | 20                               |
| 5       | 26.05.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 4 bis 6 und 9 bis 11 | 20                               |
| 6       | 26.05.2023 | Kontrollieren (von IPERKA)                                          | 12                               |
| 7       | 26.05.2023 | Auswerten (von IPERKA)                                              | 8                                |
| 8       | 02.06.2023 | Portfolioeintrag fertigstellen                                      | 16                               |

## Ausführung

| Nr. | Frist      | Bemerkung                                                                                                                                 | Zeit (geplant) | Zeit (effektiv) |
| :-- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------- |
| 1   | 28.04.2023 | Hat länger als gedacht gedauert, da wir uns nicht schnell einig wurden, aber es war noch im Rahmen.                                       | 28             | 28              |
| 2   | 28.04.2023 | Wir haben zu wenig geplant, da wir sonst immer zu viel planen und wir haben mehr von Muss und Kann unterschieden.                         | 8              | 8               |
| 3   | 28.04.2023 | Das Entscheiden verlief normal, da wir recherchieren mussten, was wir benutzen können und dann was von denen Sachen überhaupt gut ist.    | 4              | 4               |
| 4   | 12.05.2023 | Docusaurus war für ein paar am Anfang schwer verständlich, aber am Ende ging es besser.                                                   | 20             | 30              |
| 5   | 26.05.2023 | Wir hatten Probleme mit dem ausführen der App, da die Technologie einfach nicht wollte.                                                   | 20             | 10              |
| 6   | 26.05.2023 | Es ging schneller als gedacht.                                                                                                            | 12             | 10              |
| 7   | 26.05.2023 | Wir hatten, wie schon während dem realisieren, Probleme mit dem Starten der App.                                                          | 8              | 10              |
| 8   | 02.06.2023 | Es verlief normal, aber hat von dem Machen, wegen dem Datum zu lange gebraucht, da wir unsere Portfolios noch nicht zurückbekommen haben. | 16             | 16              |

### Testumgebungen

**"Per Hand" Definition:**

Damit ist gemeint, dass die App deployed wurde und dann eine Person die Testfällen, wie vorgegeben, abgearbeitet hat.

## Testfälle

| Testf.-Nr. | Anforderung | Vorraussetzung                                                         | Testumgebung | Eingabe                                                                                                     | Erw. Ausgabe                                                                                                                                           |
| :--------: | :---------- | :--------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    1.1     | 1           | Die App wurde gestartet und der Standort ist an                        | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Das Wetter u.s.w. wird angezeigt.                           |
|    1.2     | 1           | Die App wurde gestartet und der Standort ist an                        | Per Hand     | 2. "Deny"                                                                                                   | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br /><br />3. Die App zeigt einem nichts mehr an.                   |
|    2.1     | 2           | Die App wurde gestartet und der Standort ist an                        | Per Hand     | 2. "Allow"<br />3. In die Standorteinstellungen gehen.                                                      | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Expo Go hat vor 1 min zugegriffen.                          |
|    3.1     | 3           | Die App wurde gestartet und der Standort ist an                        | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Dein ungefährer Standort wird in grosser Schrift angezeigt. |
|    4.1     | 4           | Testfall Nr. 1.1                                                       | Per Hand     | 2. Diese Suchanfrage auf Google machen:"[Standort] Temperatur".                                             | 1. Es wird die Temperatur angezeigt.<br />3. Die Temperaturin sind gleich.                                                                             |
|    5.1     | 5           | Testfall Nr. 1.1                                                       | Per Hand     | 2. Diese Suchanfrage auf Google machen: "[Standort] Temperatur gefühlt wie".                                | 1. Es wird die gefühlte Temperatur angezeigt.<br />3. Die gefühlten Temperaturen sind gleich oder ähnlich.                                             |
|    6.1     | 6           | Testfall Nr. 1.1                                                       | Per Hand     | 2. Diese Suchanfrage auf Google machen: "[Standort] Temperatur".                                            | 1. Es wird die Feuchtigkeit angezeigt.<br />3. Die beiden Feuchtigkeiten sind gleich oder ähnlich.                                                     |
|    7.1     | 7           | Fertige Dokumentation wurde deployed                                   | Per Hand     | 1. Die Webseite öffnen "docs.sanqro.me".                                                                    | 2. Im Footer steht "Copyright © 2023 Weather, Inc. Built with Docusaurus.".                                                                            |
|    8.1     | 8           | Fertige Dokumentation wurde deployed                                   | Per Hand     | 1. Die Webseite öffnen "docs.sanqro.me".<br />2. Auf den Button namens "Weather App Dokumentation" klicken. | 2. Die Dokumentation wird angezeigt.                                                                                                                   |
|    9.1     | 9           | Die App wurde gestartet, der Standort ist an und es ist 8.00 Uhr.      | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br /><br />3. Der Hintergrund ist ein dunkles blau.                 |
|    9.2     | 9           | Die App wurde gestartet, der Standort ist an und es ist 15.00 Uhr.     | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Der Hintergrund ist ein helles blau.                        |
|    10.1    | 10          | Die App wurde gestartet, der Standort ist an und es regnet.            | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Es wird ein Regenlogo oben in der App angezeigt.            |
|    11.1    | 11          | Die App wurde gestartet, der Standort ist an und es scheint die Sonne. | Per Hand     | 2. "Allow"                                                                                                  | 1. Es wird ein Textfeld angezeigt, wo fragt ob die App den Standort benutzen darf.<br />3. Es wird ein Sonnenlogo oben in der App angezeigt.           |

### Testprotokoll

OK = Dieser Testfall wurde erfolgreich getestet.

NOK = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

| Test-Nr | Bericht | Tester   |
| :------ | :------ | :------- |
| 1.1     | OK      | @RelxOff |
| 1.2     | OK      | @RelxOff |
| 2.1     | OK      | @RelxOff |
| 3.1     | OK      | @RelxOff |
| 4.1     | OK      | @RelxOff |
| 5.1     | OK      | @RelxOff |
| 6.1     | OK      | @RelxOff |
| 7.1     | OK      | @RelxOff |
| 8.1     | OK      | @RelxOff |
| 9.1     | NOK     | @RelxOff |
| 9.2     | NOK     | @RelxOff |
| 10.1    | NOK     | @RelxOff |
| 11.1    | NOK     | @RelxOff |

### Testbericht

Die Anforderungen, die funktional sind, funkionieren, aber die qualitativen nicht. Es muss noch mehr gemacht, vorallem an dem Aussehen der App,

## Projektauswertung

Am Anfang hatten wir schnell eine gute Idee, aber wussten nicht mit welchen Technologien man es am besten umsetzen kann. Wir hatten während dem Programmieren grosse Probleme mit Expo, da es immer meherere Minuten brauchte, um die App zu starten und manchmal ging es auch nicht. Für die Person, die zuständig für die Dokumentation war, war Docusaurus zu Beginn komisch und unübersichtlich, aber mit der Zeit wurde es besser und sie konnte Docusaurus gut anwenden und konfigurieren. Wir wollten zu erst den Standort mit der IP abfragen, was aber bei der Implementierung nicht so gut ging und dann haben wir auf das Feature mit dem Standort gewechselt.
