# Kliniska verktyg

Mobilanpassade beslutsstödsverktyg för primärvård. Byggda som PWA — fungerar offline och kan installeras på hemskärmen.

## Verktyg

### Mätverktyg
| Verktyg | Beskrivning |
|---|---|
| Tap Counter | Puls och andningsfrekvens med rullande fönster, EMA-utjämning och referensvärden per åldersgrupp |

### Infektioner
| Verktyg | Källa |
|---|---|
| DS-CRB65 | Pneumoni — allvarlighetsgrad och vårdnivå · AKO Skåne 2024 |
| Centor | Faryngotonsillit — indikation för snabbtest GAS · Strama / AKO Skåne |
| Otit barn | Akut mediaotit — antibiotika eller exspektans · Skånelistan / Strama 2024 |

### Kardiologi / Trombos
| Verktyg | Källa |
|---|---|
| CHA₂DS₂-VA | Strokerisk vid förmaksflimmer — OAK-indikation · ESC 2024 / AKO Skåne 2025 |
| Wells DVT + PERC + Wells LE | Misstänkt DVT eller lungemboli · AKO Skåne |

### Trauma
| Verktyg | Källa |
|---|---|
| Ottawa Rules | Fotled, fot och knä — röntgenindikation · AKO Skåne |
| Canadian C-Spine Rule | Halsryggstrauma — röntgenindikation · AKO Skåne januari 2025 |

## Installation på telefon

**iOS (Safari):** Öppna URL → Dela → "Lägg till på hemskärmen"

**Android (Chrome):** Öppna URL → Meny → "Lägg till på startskärmen"

Appen fungerar offline efter första laddningen.

## Tekniskt

- Ren HTML/CSS/JS — inga externa beroenden
- PWA med service worker för offline-stöd
- Ingen patientdata lagras eller skickas
- Testad i Safari (iOS) och Chrome (Android)

## Uppdatera ett verktyg

Ladda upp den ändrade `.html`-filen till repot. GitHub Pages uppdateras automatiskt inom ~1 minut. Om appen på telefonen inte uppdateras: rensa cache eller öka versionsnumret i `sw.js` (`klinik-v4` → `klinik-v5`).

## Friskrivning

Verktygen är beslutsstöd baserade på angivna riktlinjer. Klinisk helhetsbedömning är alltid primär. Kontrollera alltid mot aktuella lokala riktlinjer innan klinisk användning.

---

*Primärvård Lund*
