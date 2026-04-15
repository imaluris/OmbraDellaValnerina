import "../style/OnBoarding.css"

function OnboardingPage({ name, onNameChange, onContinue }) {
  return (
    <div className="onboarding-container">
      <h1>Inserisci il tuo nome</h1>

      <input
        type="text"
        placeholder="Nome personaggio"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <br />

      <button id="onboarding-button" onClick={onContinue}>Continua</button>
    </div>
  );
}

export default OnboardingPage;