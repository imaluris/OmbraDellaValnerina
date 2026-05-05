import { useEffect, useState } from "react";
import { mainStory } from "./data/mainStory";
import { useGeolocation } from "./hooks/useGeolocation";
import { distanceInMeters } from "./utils/geo";
import LandingPage from "./components/LandingPage";
import OnboardingPage from "./components/OnboardingPage";
import CountryPage from "./components/CountryPage";
import StoryPage from "./components/StoryPage";
import NavigationPage from "./components/NavigationPage";
import VictoryPage from "./components/VictoryPage";
import RecapPage from "./components/RecapPage";
import CountryTransitionPage from "./components/CountryTransitionPage";
import GpsPermissionPage from "./components/GpsPermissionPage";
import Navbar from "./components/Navbar";

const STORAGE_KEY = "valnerina-progress-v2";
const COUNTRY_RADIUS_METERS = 500;
const POI_RADIUS_METERS = 20;

const countryDefs = [
  { id: "torreorsina", name: "Torreorsina", lat: 42.553966611469676, lng: 12.642368351609813 },
  { id: "collestatte", name: "Collestatte", lat: 42.55, lng: 12.665 },
  { id: "sanliberatore", name: "San Liberatore", lat: 42.556, lng: 12.671 },
];

const defaultState = {
  screen: "landing",
  name: "",
  selectedCountryId: null,
  currentChapterId: null,
  selectedOptionId: null,
  riddleUnlocked: false,
  answer: "",
  feedback: "",
  completedSteps: [],
  completedCountryIds: [],
  gpsEnabled: false,
};

function App() {
  const [appState, setAppState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return defaultState;
      }

      const parsed = JSON.parse(saved);

      if (!parsed || typeof parsed !== "object") {
        return defaultState;
      }

      return {
        ...defaultState,
        ...parsed,
      };
    } catch (error) {
      console.error("Errore nel caricamento del salvataggio:", error);
      return defaultState;
    }
  });

  const {
    screen,
    name,
    selectedCountryId,
    currentChapterId,
    selectedOptionId,
    riddleUnlocked,
    answer,
    feedback,
    completedSteps,
    completedCountryIds,
    gpsEnabled,
  } = appState;

  const { position: userPosition, error: gpsError, loading: gpsLoading } = useGeolocation(gpsEnabled);

  const countries = countryDefs.map((country) => {
    if (gpsLoading || gpsError || !userPosition) {
      return { ...country, enabled: false };
    }
    const dist = distanceInMeters(userPosition.lat, userPosition.lng, country.lat, country.lng);
    return { ...country, enabled: dist <= COUNTRY_RADIUS_METERS };
  });

  const countryNames = {
    torreorsina: "Torreorsina",
    collestatte: "Collestatte",
    sanliberatore: "San Liberatore",
  };

  const startingChapters = {
    torreorsina: "torreorsina_chap1",
    collestatte: "collestatte_chap1",
    sanliberatore: "sanliberatore_chap1",
  };

  const currentChapter = currentChapterId ? mainStory[currentChapterId] : null;

  const selectedOption = currentChapter?.options?.find(
    (option) => option.id === selectedOptionId
  );

  const availableCountries = countries.filter(
    (country) =>
      country.id !== selectedCountryId &&
      !completedCountryIds.includes(country.id)
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (error) {
      console.error("Errore nel salvataggio su localStorage:", error);
    }
  }, [appState]);

  useEffect(() => {
    if (screen !== "navigation") return;
    if (riddleUnlocked || !selectedOption || !userPosition) return;
    const dist = distanceInMeters(
      userPosition.lat,
      userPosition.lng,
      selectedOption.targetLat,
      selectedOption.targetLng
    );
    if (dist <= POI_RADIUS_METERS) {
      setAppState((prev) => ({ ...prev, riddleUnlocked: true }));
    }
  }, [userPosition, screen, riddleUnlocked, selectedOption]);

  function updateState(newValues) {
    setAppState((prev) => ({
      ...prev,
      ...newValues,
    }));
  }

  function handleStart() {
    updateState({ screen: "onboarding" });
  }

  function handleContinue() {
    if (!name.trim()) return;
    updateState({ screen: "gpsPermission" });
  }

  function handleGrantGps() {
    updateState({ gpsEnabled: true, screen: "country" });
  }

  function handleSkipGps() {
    updateState({ screen: "country" });
  }

  function handleNameChange(newName) {
    updateState({ name: newName });
  }

  function handleSelectCountry(countryId) {
    updateState({
      selectedCountryId: countryId,
      currentChapterId: startingChapters[countryId],
      selectedOptionId: null,
      riddleUnlocked: false,
      answer: "",
      feedback: "",
      completedSteps: [],
      completedCountryIds: [],
      screen: "story",
    });
  }

  function handleContinueToCountry(countryId) {
    updateState({
      selectedCountryId: countryId,
      currentChapterId: startingChapters[countryId],
      selectedOptionId: null,
      riddleUnlocked: false,
      answer: "",
      feedback: "",
      screen: "story",
    });
  }

  function handleSelectOption(optionId) {
    updateState({
      selectedOptionId: optionId,
      riddleUnlocked: false,
      answer: "",
      feedback: "",
      screen: "navigation",
    });
  }

  function handleUnlockRiddle() {
    updateState({ riddleUnlocked: true });
  }

  function handleBackToStory() {
    updateState({
      screen: "story",
      riddleUnlocked: false,
      answer: "",
      feedback: "",
    });
  }

  function handleAnswerChange(value) {
    updateState({ answer: value });
  }

  function handleShowHint() {
    if (!selectedOption) return;
    updateState({ feedback: selectedOption.riddleHint });
  }

  function handleShowRecap() {
    updateState({ screen: "recap" });
  }

  function handleBackToVictory() {
    updateState({ screen: "victory" });
  }

  function handleFinishStory() {
    updateState({
      screen: "victory",
      selectedOptionId: null,
      riddleUnlocked: false,
      answer: "",
      feedback: "",
    });
  }

  function handleSubmitAnswer() {
    if (!selectedOption || !currentChapter) return;

    const normalizedAnswer = answer.trim().toLowerCase();
    const normalizedCorrectAnswer =
      selectedOption.riddleAnswer.trim().toLowerCase();

    if (normalizedAnswer === normalizedCorrectAnswer) {
      updateState({ feedback: "Risposta corretta!" });

      setTimeout(() => {
        setAppState((prev) => {
          const newStep = {
            chapterId: currentChapter.id,
            countryId: currentChapter.countryId,
            chapterText: currentChapter.storyText,
            optionId: selectedOption.id,
            buttonText: selectedOption.buttonText,
            navigationText: selectedOption.navigationText,
            riddleText: selectedOption.riddleText,
            riddleQuestion: selectedOption.riddleQuestion,
            riddleAnswer: selectedOption.riddleAnswer,
            nextChapterId: selectedOption.nextChapterId,
            completedAt: new Date().toISOString(),
          };

          const updatedCompletedSteps = [...prev.completedSteps, newStep];

          const alreadyCompletedCountry = prev.completedCountryIds.includes(
            currentChapter.countryId
          );

          const updatedCompletedCountryIds =
            currentChapter.isLastChapterInCountry && !alreadyCompletedCountry
              ? [...prev.completedCountryIds, currentChapter.countryId]
              : prev.completedCountryIds;

          if (currentChapter.isLastChapterInCountry) {
            return {
              ...prev,
              selectedOptionId: null,
              riddleUnlocked: false,
              answer: "",
              feedback: "",
              completedSteps: updatedCompletedSteps,
              completedCountryIds: updatedCompletedCountryIds,
              screen: "countryTransition",
            };
          }

          return {
            ...prev,
            currentChapterId: selectedOption.nextChapterId,
            selectedOptionId: null,
            riddleUnlocked: false,
            answer: "",
            feedback: "",
            completedSteps: updatedCompletedSteps,
            completedCountryIds: updatedCompletedCountryIds,
            screen: "story",
          };
        });
      }, 1000);
    } else {
      updateState({ feedback: "Risposta sbagliata, riprova." });
    }
  }

  function handleResetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    setAppState(defaultState);
  }

  let content = null;

  if (screen === "landing") {
    content = <LandingPage onStart={handleStart} />;
  }

  if (screen === "onboarding") {
    content = (
      <OnboardingPage
        name={name}
        onNameChange={handleNameChange}
        onContinue={handleContinue}
      />
    );
  }

  if (screen === "gpsPermission") {
    content = (
      <GpsPermissionPage
        onGrant={handleGrantGps}
        onSkip={handleSkipGps}
      />
    );
  }

  if (screen === "country") {
    content = (
      <CountryPage
        countries={countries}
        gpsLoading={gpsLoading}
        gpsError={gpsError}
        onSelectCountry={handleSelectCountry}
      />
    );
  }

  if (screen === "story" && !currentChapter) {
    content = <p style={{ padding: "40px" }}>Capitolo non trovato.</p>;
  }

  if (screen === "story" && currentChapter) {
    content = (
      <StoryPage
        name={name}
        selectedCountryId={selectedCountryId}
        currentChapter={currentChapter}
        onSelectOption={handleSelectOption}
      />
    );
  }

  if (screen === "navigation") {
    content = (
      <NavigationPage
        selectedOption={selectedOption}
        riddleUnlocked={riddleUnlocked}
        answer={answer}
        feedback={feedback}
        onUnlockRiddle={handleUnlockRiddle}
        onAnswerChange={handleAnswerChange}
        onSubmitAnswer={handleSubmitAnswer}
        onShowHint={handleShowHint}
        onBackToStory={handleBackToStory}
        userPosition={userPosition}
        gpsLoading={gpsLoading}
        gpsError={gpsError}
      />
    );
  }

  if (screen === "countryTransition") {
    content = (
      <CountryTransitionPage
        currentCountryName={countryNames[selectedCountryId]}
        availableCountries={availableCountries}
        onContinueToCountry={handleContinueToCountry}
        onFinishStory={handleFinishStory}
      />
    );
  }

  if (screen === "victory") {
    content = (
      <VictoryPage
        name={name}
        onShowRecap={handleShowRecap}
        onResetProgress={handleResetProgress}
      />
    );
  }

  if (screen === "recap") {
    content = (
      <RecapPage
        name={name}
        completedSteps={completedSteps}
        onBackToVictory={handleBackToVictory}
      />
    );
  }

  return (
    <div>
      <Navbar />
      {content}
    </div>
  );
}

export default App;