import '../style/LandingPage.css'

function LandingPage({ onStart }) {
  return (
    <div className='landing-container'>
      <img
        src="src/assets/logo_invalnerina.svg"
        alt="L'ombra della Valnerina"
      />

      <h2>L'ombra della Valnerina</h2>

      <p>
        Un’avventura “Open World” nel mondo reale. La storia si adatterò
        automaticamente in base a dove ti trovi, proponendoti i luoghi
        misteriosi più vicini a te.
      </p>

      <button id="landing-button" onClick={onStart}>INIZIA</button>
    </div>
  );
}

export default LandingPage;
