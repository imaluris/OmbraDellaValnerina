# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server with HMR
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # ESLint
```

No test suite is configured.

## What this app is

**OmbraDellaValnerina** è un gioco di avventura testuale/escape room ambientato nella Valnerina (Umbria). Il giocatore sceglie un nome, seleziona una contrada (borgo reale), esplora capitoli narrativi, sceglie percorsi e risolve indovinelli fisici sul posto per avanzare. È pensata per essere usata in mobilità, camminando nei borghi reali.

## Architecture

**No router.** La navigazione è interamente gestita dal campo `screen` dentro un singolo `useState` in `App.jsx`. Ogni schermata è un componente separato montato condizionalmente.

**Flusso delle schermate:**
```
landing → onboarding → country → story ↔ navigation → countryTransition → victory → recap
```

**Persistenza:** `localStorage` con chiave `valnerina-progress-v2`. Lo stato viene salvato ad ogni cambiamento tramite `useEffect`. Al primo caricamento viene letto e fuso con `defaultState` per garantire compatibilità con versioni precedenti.

**Stato globale** (tutto in `appState` in `App.jsx`):
- `screen` — schermata corrente
- `name` — nome del giocatore
- `selectedCountryId` — contrada attiva
- `currentChapterId` — capitolo corrente (chiave in `mainStory`)
- `selectedOptionId` — opzione scelta dal giocatore nel capitolo
- `riddleUnlocked` — se l'indovinello è visibile
- `completedSteps` — array di snapshot dei passi completati (usato in `RecapPage`)
- `completedCountryIds` — contrade completate

**Dati della storia** (`src/data/mainStory.js`): oggetto piatto keyed per `chapterId`. Ogni capitolo ha:
- `id`, `countryId`, `isLastChapterInCountry`, `storyText`
- `options[]`: array di percorsi, ognuno con `buttonText`, `navigationText`, `riddleText`, `riddleQuestion`, `riddleAnswer`, `riddleHint`, `targetLat/Lng`, `nextChapterId`

Quando `isLastChapterInCountry: true` e la risposta è corretta, lo schermo passa a `countryTransition` invece che a `story`. Se tutte le contrade sono completate o il giocatore sceglie di finire, si va a `victory`.

**Contrade disponibili** (definite in `App.jsx`, non nei dati): `torreorsina`, `collestatte`, `sanliberatore`.

## Convenzioni

- Ogni componente ha il proprio file CSS in `src/style/` con lo stesso nome del componente.
- `App.jsx` è l'unico gestore di stato — i componenti ricevono tutto via props e comunicano solo tramite callback.
- Le coordinate GPS (`targetLat/Lng`) sono presenti nei dati ma non ancora usate nell'interfaccia.
