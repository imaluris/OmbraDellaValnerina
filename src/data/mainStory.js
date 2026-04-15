export const mainStory = {
  torreorsina_chap1: {
    id: "torreorsina_chap1",
    countryId: "torreorsina",
    isLastChapterInCountry: false,
    storyText:
      "Ti trovi all’ingresso di Torreorsina. Il borgo è silenzioso e due strade si aprono davanti a te.",
    options: [
      {
        id: "torreorsina_chap1_A",
        buttonText: "Vai verso la torre",
        navigationText:
          "Segui il sentiero che sale verso la torre principale del borgo.",
        riddleText:
          "Sei arrivato davanti alla torre. Osserva bene i dettagli.",
        riddleQuestion: "Di che colore è il portone della torre?",
        riddleAnswer: "marrone",
        riddleHint: "È un colore caldo e naturale.",
        targetLat: 42.545,
        targetLng: 12.657,
        nextChapterId: "torreorsina_chap2",
      },
      {
        id: "torreorsina_chap1_B",
        buttonText: "Vai verso la piazza",
        navigationText: "Dirigiti verso la piazza centrale del borgo.",
        riddleText: "Sei nella piazza. Guardati intorno con attenzione.",
        riddleQuestion: "Quante panchine ci sono nella piazza?",
        riddleAnswer: "2",
        riddleHint: "Sono poche, ma comode per sedersi.",
        targetLat: 42.544,
        targetLng: 12.658,
        nextChapterId: "torreorsina_chap2",
      },
    ],
  },

  torreorsina_chap2: {
    id: "torreorsina_chap2",
    countryId: "torreorsina",
    isLastChapterInCountry: false,
    storyText:
      "Dopo aver esplorato il primo punto, ti inoltri ancora nel borgo. Due nuovi percorsi ti attirano.",
    options: [
      {
        id: "torreorsina_chap2_A",
        buttonText: "Vai verso la chiesa",
        navigationText:
          "Cammina verso la chiesa antica situata poco più avanti.",
        riddleText: "Sei davanti alla chiesa. Osserva bene la facciata.",
        riddleQuestion: "Quante finestre vedi sulla facciata?",
        riddleAnswer: "3",
        riddleHint: "Sono più di due, ma meno di quattro.",
        targetLat: 42.546,
        targetLng: 12.659,
        nextChapterId: "torreorsina_chap3",
      },
      {
        id: "torreorsina_chap2_B",
        buttonText: "Vai verso il vicolo",
        navigationText:
          "Entra nel vicolo stretto tra le case in pietra.",
        riddleText:
          "Sei nel vicolo. Guarda bene i dettagli intorno a te.",
        riddleQuestion: "Di che colore è una delle porte principali?",
        riddleAnswer: "verde",
        riddleHint: "È un colore fresco e naturale.",
        targetLat: 42.547,
        targetLng: 12.656,
        nextChapterId: "torreorsina_chap3",
      },
    ],
  },

  torreorsina_chap3: {
    id: "torreorsina_chap3",
    countryId: "torreorsina",
    isLastChapterInCountry: true,
    storyText:
      "Sei quasi alla fine del tuo percorso a Torreorsina. Un’ultima scelta ti separa dalla conclusione di questa parte di storia.",
    options: [
      {
        id: "torreorsina_chap3_A",
        buttonText: "Vai verso il punto panoramico",
        navigationText:
          "Raggiungi il punto panoramico sopra il borgo.",
        riddleText:
          "Sei arrivato. Guarda il panorama attentamente.",
        riddleQuestion:
          "Cosa si vede all’orizzonte? (scrivi una parola)",
        riddleAnswer: "montagne",
        riddleHint: "Sono grandi e maestose, spesso innevate.",
        targetLat: 42.548,
        targetLng: 12.66,
        nextChapterId: null,
      },
      {
        id: "torreorsina_chap3_B",
        buttonText: "Vai verso la fontana",
        navigationText:
          "Dirigiti verso la fontana vicino alle case.",
        riddleText:
          "Sei davanti alla fontana. Osserva bene.",
        riddleQuestion: "Quanti getti d’acqua vedi?",
        riddleAnswer: "1",
        riddleHint: "È un getto singolo che zampilla.",
        targetLat: 42.549,
        targetLng: 12.661,
        nextChapterId: null,
      },
    ],
  },

  collestatte_chap1: {
    id: "collestatte_chap1",
    countryId: "collestatte",
    isLastChapterInCountry: false,
    storyText:
      "Lasciandoti alle spalle Torreorsina, arrivi a Collestatte. Il paesaggio cambia e nuove tracce ti conducono più a fondo nella vicenda.",
    options: [
      {
        id: "collestatte_chap1_A",
        buttonText: "Vai verso l’arco in pietra",
        navigationText:
          "Dirigiti verso il vecchio arco in pietra all’ingresso del borgo.",
        riddleText:
          "Sei arrivato davanti all’arco. Osserva i dettagli con attenzione.",
        riddleQuestion:
          "Quanti blocchi di pietra più grandi riesci a distinguere nella parte bassa?",
        riddleAnswer: "4",
        riddleHint: "Sono più di tre, ma meno di cinque.",
        targetLat: 42.55,
        targetLng: 12.665,
        nextChapterId: "collestatte_chap2",
      },
      {
        id: "collestatte_chap1_B",
        buttonText: "Vai verso la salita",
        navigationText:
          "Segui la salita che si inoltra tra le case del paese.",
        riddleText:
          "Ti trovi lungo la salita. Guarda con attenzione gli elementi intorno a te.",
        riddleQuestion:
          "Di che colore sono le persiane della casa più vicina?",
        riddleAnswer: "marrone",
        riddleHint: "È un colore scuro e naturale, simile al legno.",
        targetLat: 42.551,
        targetLng: 12.666,
        nextChapterId: "collestatte_chap2",
      },
    ],
  },

  collestatte_chap2: {
    id: "collestatte_chap2",
    countryId: "collestatte",
    isLastChapterInCountry: false,
    storyText:
      "Più avanzi a Collestatte, più hai la sensazione che ogni luogo custodisca un tassello del mistero.",
    options: [
      {
        id: "collestatte_chap2_A",
        buttonText: "Vai verso il belvedere",
        navigationText:
          "Cammina fino al piccolo belvedere affacciato sulla valle.",
        riddleText:
          "Sei arrivato al belvedere. Guarda bene ciò che ti circonda.",
        riddleQuestion:
          "Quanti muretti bassi delimitano l’area?",
        riddleAnswer: "2",
        riddleHint: "Sono pochi, ai lati dello spazio.",
        targetLat: 42.552,
        targetLng: 12.667,
        nextChapterId: "collestatte_chap3",
      },
      {
        id: "collestatte_chap2_B",
        buttonText: "Vai verso la piazzetta",
        navigationText:
          "Raggiungi la piccola piazzetta tra gli edifici antichi.",
        riddleText:
          "Ti trovi nella piazzetta. Fermati un attimo e osserva.",
        riddleQuestion:
          "Quanti vasi decorativi riesci a vedere?",
        riddleAnswer: "3",
        riddleHint: "Sono più di due, ma meno di quattro.",
        targetLat: 42.553,
        targetLng: 12.668,
        nextChapterId: "collestatte_chap3",
      },
    ],
  },

  collestatte_chap3: {
    id: "collestatte_chap3",
    countryId: "collestatte",
    isLastChapterInCountry: true,
    storyText:
      "Anche a Collestatte sei arrivato al capitolo conclusivo di questa parte dell’avventura.",
    options: [
      {
        id: "collestatte_chap3_A",
        buttonText: "Vai verso la fontana antica",
        navigationText:
          "Dirigiti verso la fontana più antica del borgo.",
        riddleText:
          "Sei davanti alla fontana. Osserva attentamente.",
        riddleQuestion:
          "Quanti rubinetti o uscite d’acqua riesci a vedere?",
        riddleAnswer: "1",
        riddleHint: "È un numero molto piccolo.",
        targetLat: 42.554,
        targetLng: 12.669,
        nextChapterId: null,
      },
      {
        id: "collestatte_chap3_B",
        buttonText: "Vai verso il vicolo stretto",
        navigationText:
          "Percorri il vicolo più stretto fino al punto indicato.",
        riddleText:
          "Sei nel vicolo. Guarda i particolari attorno a te.",
        riddleQuestion:
          "Di che colore è il portone più evidente?",
        riddleAnswer: "verde",
        riddleHint: "È un colore naturale e fresco.",
        targetLat: 42.555,
        targetLng: 12.67,
        nextChapterId: null,
      },
    ],
  },

  sanliberatore_chap1: {
    id: "sanliberatore_chap1",
    countryId: "sanliberatore",
    isLastChapterInCountry: false,
    storyText:
      "L’ultima parte dell’avventura ti conduce a San Liberatore, dove gli indizi sembrano ormai vicini alla loro soluzione.",
    options: [
      {
        id: "sanliberatore_chap1_A",
        buttonText: "Vai verso la chiesa",
        navigationText:
          "Raggiungi la chiesa seguendo il percorso principale.",
        riddleText:
          "Sei davanti alla chiesa. Osserva la facciata con attenzione.",
        riddleQuestion:
          "Quante aperture visibili riesci a contare sulla parte frontale?",
        riddleAnswer: "3",
        riddleHint: "Sono più di due, ma meno di quattro.",
        targetLat: 42.556,
        targetLng: 12.671,
        nextChapterId: "sanliberatore_chap2",
      },
      {
        id: "sanliberatore_chap1_B",
        buttonText: "Vai verso il sentiero laterale",
        navigationText:
          "Segui il sentiero laterale che costeggia gli edifici.",
        riddleText:
          "Ti trovi sul sentiero. Osserva i dettagli più vicini.",
        riddleQuestion:
          "Di che colore è il cancello che vedi poco avanti?",
        riddleAnswer: "nero",
        riddleHint: "È un colore molto scuro.",
        targetLat: 42.557,
        targetLng: 12.672,
        nextChapterId: "sanliberatore_chap2",
      },
    ],
  },

  sanliberatore_chap2: {
    id: "sanliberatore_chap2",
    countryId: "sanliberatore",
    isLastChapterInCountry: false,
    storyText:
      "Ora ogni passo sembra confermare che sei vicino alla conclusione dell’intera storia.",
    options: [
      {
        id: "sanliberatore_chap2_A",
        buttonText: "Vai verso il prato aperto",
        navigationText:
          "Raggiungi il prato aperto indicato dagli indizi.",
        riddleText:
          "Sei arrivato nel prato. Guarda tutto con calma.",
        riddleQuestion:
          "Quanti alberi principali noti nella zona immediata?",
        riddleAnswer: "2",
        riddleHint: "Sono pochi e ben visibili.",
        targetLat: 42.558,
        targetLng: 12.673,
        nextChapterId: "sanliberatore_chap3",
      },
      {
        id: "sanliberatore_chap2_B",
        buttonText: "Vai verso il muretto",
        navigationText:
          "Dirigiti verso il muretto in pietra poco distante.",
        riddleText:
          "Sei davanti al muretto. Osserva i dettagli.",
        riddleQuestion:
          "Quanti livelli di pietra si distinguono bene?",
        riddleAnswer: "4",
        riddleHint: "Sono più di tre, ma meno di cinque.",
        targetLat: 42.559,
        targetLng: 12.674,
        nextChapterId: "sanliberatore_chap3",
      },
    ],
  },

  sanliberatore_chap3: {
    id: "sanliberatore_chap3",
    countryId: "sanliberatore",
    isLastChapterInCountry: true,
    storyText:
      "Sei arrivato all’ultimo capitolo ambientato a San Liberatore.",
    options: [
      {
        id: "sanliberatore_chap3_A",
        buttonText: "Vai verso la croce in pietra",
        navigationText:
          "Raggiungi la croce in pietra seguendo il percorso finale.",
        riddleText:
          "Sei arrivato al punto finale. Osserva molto bene.",
        riddleQuestion:
          "Di che colore appare la base della struttura?",
        riddleAnswer: "grigio",
        riddleHint: "È una tonalità neutra della pietra.",
        targetLat: 42.56,
        targetLng: 12.675,
        nextChapterId: null,
      },
      {
        id: "sanliberatore_chap3_B",
        buttonText: "Vai verso il punto panoramico",
        navigationText:
          "Dirigiti verso il punto panoramico finale.",
        riddleText:
          "Sei arrivato al punto panoramico. Guarda lontano.",
        riddleQuestion:
          "Cosa si nota maggiormente all’orizzonte? (una parola)",
        riddleAnswer: "monti",
        riddleHint: "Sono rilievi alti visibili in lontananza.",
        targetLat: 42.561,
        targetLng: 12.676,
        nextChapterId: null,
      },
    ],
  },
};